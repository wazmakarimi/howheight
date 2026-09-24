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

function parseViewBox(viewBox?: string | { minX?: number; minY?: number; width?: number; height?: number } | null) {
  if (typeof viewBox === 'string') {
    const parts = viewBox.trim().split(/\s+/).map(Number);
    return { minX: parts[0] || 0, minY: parts[1] || 0, width: parts[2] || 100, height: parts[3] || 100 };
  }
  return {
    minX: viewBox?.minX || 0,
    minY: viewBox?.minY || 0,
    width: viewBox?.width || 100,
    height: viewBox?.height || 100,
  };
}

function parseAnchor(anchor: any, vbY: number, vbHeight: number) {
  const groundY = anchor?.groundY ?? anchor?.baseY ?? (vbY + vbHeight);
  const measurementY = anchor?.measurementY ?? anchor?.topY ?? vbY;
  return { groundY, measurementY };
}

export function getVisualTotalHeightCm(heightCm: number, modelTypeOrAssetId?: string, item?: ComparisonItem): number {
  if (item?.viewBox && item?.measurementAnchor) {
    const vb = parseViewBox(item.viewBox);
    const anchor = parseAnchor(item.measurementAnchor, vb.minY, vb.height);
    const anchorSpan = Math.abs(anchor.groundY - anchor.measurementY) || vb.height || 100;
    return heightCm * (vb.height / anchorSpan);
  }
  const asset = getArchetypeAsset(modelTypeOrAssetId);
  const vb = parseViewBox(asset.viewBox);
  const anchor = parseAnchor(asset.measurementAnchor, vb.minY, vb.height);
  const anchorSpan = Math.abs(anchor.groundY - anchor.measurementY) || vb.height || 100;
  const totalVbHeight = vb.height || anchorSpan;
  return heightCm * (totalVbHeight / anchorSpan);
}

export function getModelAnchor(modelType: string, category?: EntityCategory): VisualModelAnchor {
  const asset = getArchetypeAsset(modelType, category);
  const vb = parseViewBox(asset.viewBox);
  const anchor = parseAnchor(asset.measurementAnchor, vb.minY, vb.height);

  return {
    modelType: asset.id,
    category: (asset.category || 'male') as EntityCategory,
    viewBox: `${vb.minX} ${vb.minY} ${vb.width} ${vb.height}`,
    viewBoxWidth: vb.width,
    viewBoxHeight: vb.height,
    groundY: anchor.groundY,
    measurementY: anchor.measurementY,
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
  const vb = parseViewBox(asset.viewBox);
  const anchor = parseAnchor(asset.measurementAnchor, vb.minY, vb.height);
  const anchorSpan = Math.abs(anchor.groundY - anchor.measurementY) || vb.height || 100;
  const totalVbWidth = vb.width || (vb.height * 0.5);

  const visualScale = measurementHeightPx / anchorSpan;
  const totalSvgHeightPx = vb.height * visualScale;
  const totalSvgWidthPx = totalVbWidth * visualScale;
  const groundOffsetPx = (vb.height - (anchor.groundY - vb.minY)) * visualScale;

  return {
    measurementHeightPx,
    totalSvgHeightPx,
    totalSvgWidthPx,
    groundOffsetPx,
  };
}
