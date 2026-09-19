import type { ComparisonItem, RulerUnit } from './constants';
import { calculateScale, generateRulerTicks } from './comparison';
import { formatHeight } from './height';
import { renderEntitySvg } from './renderModel';
import { resolveAsset, type AssetMetadata } from '../data/assetRegistry';

// In-memory cache for raw SVG content to prevent redundant HTTP requests
const svgTextCache = new Map<string, string>();

async function fetchRawSvg(publicPath: string): Promise<string> {
  if (svgTextCache.has(publicPath)) {
    return svgTextCache.get(publicPath)!;
  }
  const res = await fetch(publicPath);
  if (!res.ok) {
    throw new Error(`Failed to load SVG from ${publicPath} (status ${res.status})`);
  }
  const text = await res.text();
  svgTextCache.set(publicPath, text);
  return text;
}

/**
 * Prepares the raw SVG text by inlining colors, opacities, and sizing
 * so it can be safely rasterized by the browser onto HTML5 Canvas without sub-resource restrictions.
 */
async function createEntityImage(
  asset: AssetMetadata,
  item: ComparisonItem,
  totalWidthPx: number,
  totalHeightPx: number
): Promise<HTMLImageElement> {
  if (asset.assetType === 'png' || (asset as any).extension === 'png') {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
      img.src = asset.publicPath;
    });
  }

  const rawSvg = await fetchRawSvg(asset.publicPath);

  const color = item.color || '#2563eb';
  const opacity = typeof item.opacity === 'number' ? item.opacity : 1.0;
  const targetW = Math.max(1, Math.round(totalWidthPx));
  const targetH = Math.max(1, Math.round(totalHeightPx));

  // 1. Replace currentColor with the entity's assigned color
  let processedSvg = rawSvg.replace(/currentColor/gi, color);

  // 2. Also replace common dark silhouette fills with the entity's color
  processedSvg = processedSvg.replace(/fill=["']#(?:000(?:000)?|0d2337|0f172a|1e293b|334155|475569|64748b|111827)[\"']/gi, `fill="${color}"`);

  // 3. Normalize root <svg> tag with explicit rendered dimensions and color styling
  processedSvg = processedSvg.replace(/<svg\b([^>]*)>/i, (_match, attrs) => {
    const cleanAttrs = attrs
      .replace(/\b(width|height)=["'][^"']*["']/gi, '')
      .replace(/\bstyle=["'][^"']*["']/gi, '')
      .replace(/\bclass=["'][^"']*["']/gi, '');
    return `<svg ${cleanAttrs} width="${targetW}" height="${targetH}" style="color: ${color}; fill: ${color}; opacity: ${opacity};">`;
  });

  // 4. Create an isolated SVG blob and load into HTMLImageElement
  return new Promise((resolve, reject) => {
    const img = new Image();
    const blob = new Blob([processedSvg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };
    img.src = url;
  });
}

/**
 * Client-side high-DPI PNG export of the comparison chart using Canvas API
 * Accurately renders vector figures, ruler markings, labels, and baseline.
 */
export async function downloadChartAsPng(
  items: ComparisonItem[],
  rulerUnit: RulerUnit,
  filename: string = 'height-comparison.png',
  drawingCanvas?: HTMLCanvasElement | null
): Promise<boolean> {
  if (!items || items.length === 0) return false;

  const dpr = 2; // High-resolution export
  const width = Math.max(900, items.length * 160 + 220);
  const height = 640;

  const canvas = document.createElement('canvas');
  canvas.width = width * dpr;
  canvas.height = height * dpr;

  const ctx = canvas.getContext('2d');
  if (!ctx) return false;

  ctx.scale(dpr, dpr);

  // 1. Clean Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // Subtle border
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.strokeRect(10, 10, width - 20, height - 20);

  // 2. Header & Branding
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 24px Inter, system-ui, sans-serif';
  ctx.fillText('Height Comparison Tool', 40, 52);

  ctx.fillStyle = '#64748b';
  ctx.font = '14px Inter, system-ui, sans-serif';
  ctx.fillText('Human, Celebrity, Animal & Object Comparison • Accurate Scale', 40, 76);

  // 3. Chart Dimensions & Baseline
  const chartTop = 110;
  const chartBottom = height - 90;
  const chartVisualHeight = chartBottom - chartTop;
  const { scale, rulerMaxCm } = calculateScale(items, chartVisualHeight);

  const rulerLeft = 40;
  const rulerWidth = 70;
  const chartStartX = rulerLeft + rulerWidth + 20;
  const chartEndX = width - 40;

  // 4. Draw Horizontal Grid Lines and Ruler Ticks
  const ticks = generateRulerTicks(rulerMaxCm, rulerUnit);

  ctx.lineWidth = 1;
  ticks.forEach((tick) => {
    const y = chartBottom - tick.cm * scale;
    if (y < chartTop - 10) return;

    // Grid line
    ctx.strokeStyle = tick.isMajor ? '#e2e8f0' : '#f8fafc';
    ctx.beginPath();
    ctx.moveTo(rulerLeft + rulerWidth, y);
    ctx.lineTo(chartEndX, y);
    ctx.stroke();

    // Ruler tick mark
    ctx.strokeStyle = '#94a3b8';
    ctx.beginPath();
    ctx.moveTo(rulerLeft + rulerWidth - (tick.isMajor ? 12 : 6), y);
    ctx.lineTo(rulerLeft + rulerWidth, y);
    ctx.stroke();

    // Ruler text
    if (tick.label) {
      ctx.fillStyle = '#64748b';
      ctx.font = tick.isMajor ? '12px Inter, sans-serif' : '10px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillText(tick.label, rulerLeft + rulerWidth - 16, y);
    }
  });

  // 5. Baseline (Floor)
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(rulerLeft, chartBottom);
  ctx.lineTo(chartEndX, chartBottom);
  ctx.stroke();

  ctx.fillStyle = '#475569';
  ctx.font = 'bold 12px Inter, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('FLOOR (0 cm)', rulerLeft, chartBottom + 20);

  // 6. Draw Entities (Figures, Animals, Objects)
  const availableWidth = chartEndX - chartStartX;
  const itemSpacing = availableWidth / (items.length + 1);

  const hasManualPositions = items.some((item) => typeof item.positionX === 'number');
  let getCenterX: (item: ComparisonItem, index: number) => number;

  if (items.length === 1) {
    getCenterX = () => chartStartX + availableWidth / 2;
  } else if (hasManualPositions) {
    const minX = Math.min(...items.map((it) => it.positionX ?? 0));
    const maxX = Math.max(...items.map((it) => it.positionX ?? 0));
    const span = maxX - minX;
    getCenterX = (item, index) => {
      if (typeof item.positionX === 'number' && span > 0) {
        return chartStartX + 60 + ((item.positionX - minX) / span) * (availableWidth - 120);
      }
      return chartStartX + (index + 1) * itemSpacing;
    };
  } else {
    getCenterX = (_item, index) => chartStartX + (index + 1) * itemSpacing;
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const asset = resolveAsset(item.assetId || (item as any).modelType || item.id, item.category);
    const { totalSvgHeightPx, totalSvgWidthPx, measurementHeightPx, groundOffsetPx } = renderEntitySvg(item, scale);
    const centerX = getCenterX(item, i);
    const modelLeft = centerX - totalSvgWidthPx / 2;
    const modelTop = chartBottom - totalSvgHeightPx + groundOffsetPx;

    if (item.customImageUrl) {
      try {
        const customImg = new Image();
        await new Promise<void>((resolve, reject) => {
          customImg.onload = () => resolve();
          customImg.onerror = reject;
          customImg.src = item.customImageUrl!;
        });
        ctx.save();
        if (typeof item.opacity === 'number') {
          ctx.globalAlpha = item.opacity;
        }
        ctx.drawImage(customImg, modelLeft, modelTop, totalSvgWidthPx, totalSvgHeightPx);
        ctx.restore();
      } catch (err) {
        console.warn('Failed to draw custom uploaded image onto canvas:', err);
      }
    } else {
      try {
        const img = await createEntityImage(asset, item, totalSvgWidthPx, totalSvgHeightPx);
        ctx.save();
        if (typeof item.opacity === 'number') {
          ctx.globalAlpha = item.opacity;
        }
        ctx.drawImage(img, modelLeft, modelTop, totalSvgWidthPx, totalSvgHeightPx);
        ctx.restore();
      } catch (err) {
        console.warn(`Failed to draw asset ${asset.id} (${item.name}) onto canvas:`, err);
        // Fallback silhouette
        ctx.save();
        ctx.fillStyle = item.color || '#2563eb';
        ctx.globalAlpha = typeof item.opacity === 'number' ? item.opacity : 0.85;
        ctx.fillRect(modelLeft, modelTop, totalSvgWidthPx, totalSvgHeightPx);
        ctx.restore();
      }
    }

    // Name & Height Label beneath baseline
    ctx.textAlign = 'center';
    ctx.font = 'bold 15px Inter, sans-serif';
    const nameWidth = ctx.measureText(item.name).width;
    const dotX = centerX - nameWidth / 2 - 12;

    ctx.fillStyle = item.color;
    ctx.beginPath();
    ctx.arc(dotX, chartBottom + 35, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#0f172a';
    ctx.fillText(item.name, centerX, chartBottom + 40);

    let typeSubtitle = 'Entity';
    if (item.category === 'custom' || item.customImageUrl) {
      typeSubtitle = 'Custom Image';
    } else if (item.category === 'male' || item.category === 'female') {
      typeSubtitle = item.category === 'male' ? 'Male' : 'Female';
    } else if (item.category === 'animals') {
      typeSubtitle = 'Animal';
    } else if (item.category === 'objects') {
      typeSubtitle = 'Object';
    } else if (item.category === 'apparel') {
      typeSubtitle = 'Apparel';
    } else if (item.category === 'fictional') {
      typeSubtitle = 'Fictional';
    } else if (item.category === 'plants') {
      typeSubtitle = 'Plant';
    } else if (item.category === 'sports') {
      typeSubtitle = 'Sports';
    } else if (item.category === 'anime') {
      typeSubtitle = 'Anime';
    } else if (item.category === 'films') {
      typeSubtitle = 'Film';
    } else if (item.category === 'celebrities') {
      typeSubtitle = 'Celebrity';
    } else {
      typeSubtitle = (item as any).profession || (item as any).gender || 'Entity';
    }
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Inter, sans-serif';
    ctx.fillText(`${formatHeight(item.heightCm, rulerUnit)} • ${typeSubtitle}`, centerX, chartBottom + 58);

    // Height indicator tick above highest point of model
    const markerY = chartBottom - Math.max(measurementHeightPx, totalSvgHeightPx) + groundOffsetPx;
    ctx.fillStyle = item.color;
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillText(`${item.name} • ${formatHeight(item.heightCm, rulerUnit)}`, centerX, markerY - 8);
  }

  // 6.5 Render User Sketch / Annotations Overlay if present
  if (drawingCanvas && drawingCanvas.width > 0 && drawingCanvas.height > 0) {
    ctx.save();
    ctx.drawImage(
      drawingCanvas,
      0, 0, drawingCanvas.width, drawingCanvas.height,
      chartStartX, chartTop, availableWidth, chartVisualHeight
    );
    ctx.restore();
  }

  // 7. Trigger download
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        resolve(false);
        return;
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      resolve(true);
    }, 'image/png');
  });
}
