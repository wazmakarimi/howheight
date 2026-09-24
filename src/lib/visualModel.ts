import type { EntityCategory, ComparisonItem } from './constants';
import { getArchetypeAsset } from './archetypes';

export interface VisualModelAnchor {
  modelType: string;
  category: EntityCategory;
  viewBox: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  groundY: number;
  measurementY: number;
  measurementType?: string;
  orientation?: string;
  measurementAnchor?: {
    start: { x: number; y: number };
    end: { x: number; y: number };
  };
  baseHeightCm?: number;
  anchorDescription?: string;
}

export function getVisualTotalHeightCm(heightCm: number, modelTypeOrAssetId?: string, item?: ComparisonItem): number {
  if (item?.viewBox && item?.measurementAnchor) {
    const vbHeight = item.viewBox.height || 100;
    const anchorSpan = Math.abs(item.measurementAnchor.baseY - item.measurementAnchor.topY) || vbHeight || 100;
    return heightCm * (vbHeight / anchorSpan);
  }
  const asset = getArchetypeAsset(modelTypeOrAssetId);
  const vbHeight = asset.viewBox?.height || 100;
  const groundY = asset.measurementAnchor?.baseY ?? ((asset.viewBox?.minY ?? 0) + vbHeight);
  const measurementY = asset.measurementAnchor?.topY ?? (asset.viewBox?.minY ?? 0);
  const anchorSpan = Math.abs(groundY - measurementY) || vbHeight || 100;
  const totalVbHeight = vbHeight || anchorSpan;
  return heightCm * (totalVbHeight / anchorSpan);
}

export function getModelAnchor(modelType: string, category?: EntityCategory): VisualModelAnchor {
  const asset = getArchetypeAsset(modelType, category);
  const vx = asset.viewBox?.minX || 0;
  const vy = asset.viewBox?.minY || 0;
  const vw = asset.viewBox?.width || 100;
  const vh = asset.viewBox?.height || 400;
  const vbY = vy || 0;
  const totalHeight = vh || 400;

  return {
    modelType: asset.id,
    category: (asset.category || 'male') as EntityCategory,
    viewBox: `${vx} ${vy} ${vw} ${vh}`,
    viewBoxWidth: vw,
    viewBoxHeight: totalHeight,
    groundY: asset.measurementAnchor?.baseY ?? (vbY + totalHeight),
    measurementY: asset.measurementAnchor?.topY ?? vbY,
    measurementType: asset.measurementType || undefined,
    baseHeightCm: asset.heightCm ?? 175,
    anchorDescription: `${asset.name} calibrated measurement`,
  };
}

export function calculateEntityDimensions(
  heightCm: number,
  modelType: string,
  chartScale: number,
  category?: EntityCategory
): {
  measurementHeightPx: number;
  totalSvgHeightPx: number;
  totalSvgWidthPx: number;
  groundOffsetPx: number;
} {
  const asset = getArchetypeAsset(modelType, category);
  const measurementHeightPx = heightCm * chartScale;
  const vx = asset.viewBox?.minX || 0;
  const vy = asset.viewBox?.minY || 0;
  const vw = asset.viewBox?.width || 100;
  const vh = asset.viewBox?.height || 100;
  const vbY = vy || 0;
  const totalVbHeight = vh || 100;
  const groundY = asset.measurementAnchor?.baseY ?? (vbY + totalVbHeight);
  const measurementY = asset.measurementAnchor?.topY ?? vbY;
  const anchorSpan = Math.abs(groundY - measurementY) || totalVbHeight || 100;
  const totalVbWidth = vw || (totalVbHeight * 0.5);

  const visualScale = measurementHeightPx / anchorSpan;
  const totalSvgHeightPx = totalVbHeight * visualScale;
  const totalSvgWidthPx = totalVbWidth * visualScale;
  const groundOffsetPx = (totalVbHeight - (groundY - vbY)) * visualScale;

  return {
    measurementHeightPx,
    totalSvgHeightPx,
    totalSvgWidthPx,
    groundOffsetPx,
  };
}
