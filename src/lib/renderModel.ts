import type { ComparisonItem } from './constants.ts';
import { getArchetypeAsset } from './archetypes.ts';

export interface RenderResult {
  svgMarkup: string;
  totalSvgHeightPx: number;
  totalSvgWidthPx: number;
  measurementHeightPx: number;
  groundOffsetPx: number;
}

export interface CachedSvgData {
  innerMarkup: string;
  viewBox: string;
}

export interface AssetRenderProps {
  id?: string;
  category?: string;
  publicPath?: string;
  viewBox?: string;
  measurementAnchor?: { groundY: number; measurementY: number } | null;
  filename?: string;
  heightCm?: number | null;
  isPng?: boolean;
}

let fallbackResolver: ((id: string, category?: string) => AssetRenderProps | undefined) | null = null;

export function setModelResolver(fn: (id: string, category?: string) => AssetRenderProps | undefined) {
  fallbackResolver = fn;
}

const svgCache = new Map<string, CachedSvgData>();
const inflightSvgFetches = new Map<string, Promise<CachedSvgData | null>>();

export function hasCachedSvg(publicPath: string): boolean {
  return svgCache.has(publicPath);
}

export function getCachedSvg(publicPath: string): CachedSvgData | undefined {
  return svgCache.get(publicPath);
}

export async function fetchSvgData(publicPath: string): Promise<CachedSvgData | null> {
  if (!publicPath || !publicPath.endsWith('.svg')) return null;
  if (svgCache.has(publicPath)) {
    return svgCache.get(publicPath)!;
  }
  if (inflightSvgFetches.has(publicPath)) {
    return inflightSvgFetches.get(publicPath)!;
  }

  const promise = (async () => {
    try {
      const res = await fetch(publicPath);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const rawText = await res.text();
      // Replace dark silhouette fills with currentColor so parent fill/color controls it
      const sanitized = rawText.replace(
        /fill=["']#(?:000(?:000)?|0d2337|0f172a|1e293b|334155|475569|64748b|111827)[\"']/gi,
        'fill="currentColor"'
      );
      const match = sanitized.match(/<svg\b([^>]*)>([\s\S]*?)<\/svg>/i);
      if (match) {
        const attrs = match[1];
        const inner = match[2].trim();
        const vbMatch = attrs.match(/viewBox=["']([^"']+)["']/i);
        const data: CachedSvgData = {
          innerMarkup: inner,
          viewBox: vbMatch ? vbMatch[1] : '',
        };
        svgCache.set(publicPath, data);
        return data;
      }
    } catch (err) {
      console.warn(`[renderModel] Failed to fetch SVG from ${publicPath}:`, err);
    } finally {
      inflightSvgFetches.delete(publicPath);
    }
    return null;
  })();

  inflightSvgFetches.set(publicPath, promise);
  return promise;
}

/**
 * Universal Entity Renderer: Resolves entity vector SVG scaled proportionally
 * based strictly on its calibrated physical measurement anchor.
 */
export function renderEntitySvg(item: ComparisonItem, chartScale: number): RenderResult {
  // Support user's custom uploaded image
  if (item.customImageUrl) {
    const pixelsPerCm = chartScale;
    const heightCm = typeof item.heightCm === 'number' && item.heightCm > 0 ? item.heightCm : 170;
    const measurementHeightPx = heightCm * pixelsPerCm;
    const totalSvgHeightPx = measurementHeightPx;
    const aspect = typeof item.customImageAspect === 'number' && item.customImageAspect > 0
      ? item.customImageAspect
      : 0.5;
    const totalSvgWidthPx = totalSvgHeightPx * aspect;
    const color = item.color || '#2563eb';
    const opacity = typeof item.opacity === 'number' ? item.opacity : 1.0;

    const svgMarkup = `
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 ${Math.round(totalSvgWidthPx)} ${Math.round(totalSvgHeightPx)}" 
        preserveAspectRatio="xMidYMax meet"
        class="entity-svg custom-entity-svg pointer-events-none block overflow-visible"
        style="height: ${totalSvgHeightPx.toFixed(2)}px; width: ${totalSvgWidthPx.toFixed(2)}px; transform-origin: bottom center;"
        data-id="${item.id}"
        data-category="custom"
        data-height-cm="${heightCm}"
        aria-hidden="true"
      >
        <g style="opacity: ${opacity};">
          <image 
            href="${item.customImageUrl}" 
            x="0" 
            y="0" 
            width="${Math.round(totalSvgWidthPx)}" 
            height="${Math.round(totalSvgHeightPx)}" 
            preserveAspectRatio="xMidYMax meet" 
          />
        </g>
      </svg>
    `;

    return {
      svgMarkup,
      totalSvgHeightPx,
      totalSvgWidthPx,
      measurementHeightPx,
      groundOffsetPx: 0,
    };
  }

  // 1. If item has its own pre-resolved publicPath and viewBox, use them (fast path)
  let publicPath = item.publicPath;
  let viewBox = item.viewBox;
  let measurementAnchor = item.measurementAnchor;
  let isPngAsset = item.isPng ?? (publicPath?.endsWith('.png') || false);
  const defaultHeight = (item.category === 'male' || item.category === 'female' || item.category === 'celebrities')
    ? 175
    : (item.category === 'anime' || item.category === 'films' ? 170 : 100);
  let resolvedHeight = typeof item.heightCm === 'number' && item.heightCm > 0
    ? item.heightCm
    : (item.referenceHeightCm || defaultHeight);

  // 2. If missing, check custom resolver or client archetypes
  if (!publicPath || !viewBox) {
    const rawId = item.assetId || (item as any).modelType || item.id;
    const resolved = (fallbackResolver && rawId ? fallbackResolver(rawId, item.category) : undefined)
      || getArchetypeAsset(rawId, item.category);

    publicPath = publicPath || resolved.publicPath;
    viewBox = viewBox || resolved.viewBox;
    measurementAnchor = measurementAnchor !== undefined ? measurementAnchor : resolved.measurementAnchor;
    isPngAsset = isPngAsset || resolved.isPng || (publicPath?.endsWith('.png') || false);
    if (!resolvedHeight && resolved.heightCm) {
      resolvedHeight = resolved.heightCm;
    }
  }

  // Height conversion: chartScale represents pixelsPerCm on the viewport
  const pixelsPerCm = chartScale;
  const heightCm = resolvedHeight || 175;
  const measurementHeightPx = heightCm * pixelsPerCm;

  // Total SVG viewBox dimensions
  const viewBoxStr = typeof viewBox === 'string'
    ? viewBox
    : viewBox
      ? `${(viewBox as any).minX} ${(viewBox as any).minY} ${(viewBox as any).width} ${(viewBox as any).height}`
      : '0 0 100 100';
  const vbParts = viewBoxStr.split(/\s+/).map(Number);
  const vbX = vbParts[0] || 0;
  const vbY = vbParts[1] || 0;
  const totalVbWidth = vbParts[2] || 100;
  const totalVbHeight = vbParts[3] || 100;

  // Measurement anchor calibration
  const groundY = (measurementAnchor as any)?.groundY ?? (measurementAnchor as any)?.baseY ?? (vbY + totalVbHeight);
  const measurementY = (measurementAnchor as any)?.measurementY ?? (measurementAnchor as any)?.topY ?? vbY;
  const anchorSpan = Math.abs(groundY - measurementY) || totalVbHeight || 100;

  // Visual scaling factor: converts viewBox coordinates to rendered pixels
  const visualScale = measurementHeightPx / anchorSpan;
  const totalSvgHeightPx = totalVbHeight * visualScale;
  const totalSvgWidthPx = totalVbWidth * visualScale;

  // Ground baseline alignment
  const groundOffsetPx = (totalVbHeight - (groundY - vbY)) * visualScale;

  const color = item.color || '#2563eb';
  const opacity = typeof item.opacity === 'number' ? item.opacity : 1.0;

  const cachedSvg = !isPngAsset && publicPath ? svgCache.get(publicPath) : undefined;

  // Inner vector markup: inlined vector SVG with active color inheritance, or direct SVG/PNG fallback
  let innerContent: string;
  if (cachedSvg && cachedSvg.innerMarkup) {
    const fileVb = cachedSvg.viewBox || viewBoxStr;
    innerContent = `<svg viewBox="${fileVb}" x="${vbX}" y="${vbY}" width="${totalVbWidth}" height="${totalVbHeight}" preserveAspectRatio="xMidYMax meet" overflow="visible" style="color: inherit; fill: inherit;">${cachedSvg.innerMarkup}</svg>`;
  } else if ((item as any).innerMarkup) {
    innerContent = (item as any).innerMarkup;
  } else {
    innerContent = `<image href="${publicPath}" x="${vbX}" y="${vbY}" width="${totalVbWidth}" height="${totalVbHeight}" preserveAspectRatio="xMidYMax meet" />`;
  }

  const styledMarkup = isPngAsset
    ? `<g class="entity-png-group" style="opacity: ${opacity};">${innerContent}</g>`
    : `<g class="entity-vector-group" fill="${color}" style="color: ${color}; fill: ${color}; opacity: ${opacity};">${innerContent}</g>`;

  const assetId = item.assetId || item.id;
  const category = item.category || 'male';

  const svgMarkup = `
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="${viewBoxStr}" 
      preserveAspectRatio="xMidYMax meet"
      class="entity-svg pointer-events-none block overflow-visible"
      style="height: ${totalSvgHeightPx.toFixed(2)}px; width: ${totalSvgWidthPx.toFixed(2)}px; transform-origin: bottom center; color: ${color}; fill: ${color};"
      data-id="${item.id}"
      data-asset-id="${assetId}"
      data-category="${category}"
      data-height-cm="${heightCm}"
      aria-hidden="true"
    >
      ${styledMarkup}
    </svg>
  `;

  return {
    svgMarkup,
    totalSvgHeightPx,
    totalSvgWidthPx,
    measurementHeightPx,
    groundOffsetPx,
  };
}
