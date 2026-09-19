import type { EntityCategory } from './constants';
import { resolveAsset, getAssetById, type AssetDefinition } from './assetRegistry';

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

export function getVisualTotalHeightCm(heightCm: number, modelTypeOrAssetId?: string): number {
  const asset = resolveAsset(modelTypeOrAssetId);
  const vbParts = asset.viewBox ? asset.viewBox.split(/\s+/).map(Number) : [0, 0, 100, 100];
  const vbY = vbParts[1] || 0;
  const vbHeight = vbParts[3] || 100;
  const groundY = asset.measurementAnchor?.groundY ?? (vbY + vbHeight);
  const measurementY = asset.measurementAnchor?.measurementY ?? vbY;
  const anchorSpan = Math.abs(groundY - measurementY) || vbHeight || 100;
  const totalVbHeight = vbHeight || anchorSpan;
  return heightCm * (totalVbHeight / anchorSpan);
}

export function getModelAnchor(modelType: string, category?: EntityCategory): VisualModelAnchor {
  const asset = resolveAsset(modelType, category);
  const [vx, vy, vw, vh] = asset.viewBox.split(/\s+/).map(Number);
  const vbY = vy || 0;
  const totalHeight = vh || 400;

  return {
    modelType: asset.id,
    category: asset.category,
    viewBox: asset.viewBox,
    viewBoxWidth: vw || 100,
    viewBoxHeight: totalHeight,
    groundY: asset.measurementAnchor?.groundY ?? (vbY + totalHeight),
    measurementY: asset.measurementAnchor?.measurementY ?? vbY,
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
  const asset = resolveAsset(modelType, category);
  const measurementHeightPx = heightCm * chartScale;
  const [vx, vy, vw, vh] = asset.viewBox.split(/\s+/).map(Number);
  const vbY = vy || 0;
  const totalVbHeight = vh || 100;
  const groundY = asset.measurementAnchor?.groundY ?? (vbY + totalVbHeight);
  const measurementY = asset.measurementAnchor?.measurementY ?? vbY;
  const anchorSpan = Math.abs(groundY - measurementY) || totalVbHeight || 100;
  const totalVbWidth = vw || (totalVbHeight * (asset.aspectRatio || 0.5));

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
