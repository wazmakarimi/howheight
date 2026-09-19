// CENTRAL ASSET REGISTRY - PHASE 9
// Single source of truth for the entire application.
import { ASSET_MANIFEST, type DiscoveredAsset } from './assetManifest.ts';
import { resolveMigratedAssetId } from '../lib/migrationMap.ts';

import type { EntityCategory } from '../lib/constants';

export type { DiscoveredAsset as AssetMetadata };

export const ASSET_REGISTRY: DiscoveredAsset[] = ASSET_MANIFEST;

export const CATEGORY_COUNTS = {
  male: ASSET_REGISTRY.filter((a) => a.category === 'male' && a.searchable).length,
  female: ASSET_REGISTRY.filter((a) => a.category === 'female' && a.searchable).length,
  apparel: ASSET_REGISTRY.filter((a) => a.category === 'apparel' && a.searchable).length,
  animals: ASSET_REGISTRY.filter((a) => a.category === 'animals' && a.searchable).length,
  objects: ASSET_REGISTRY.filter((a) => a.category === 'objects' && a.searchable).length,
  fictional: ASSET_REGISTRY.filter((a) => a.category === 'fictional' && a.searchable).length,
  plants: ASSET_REGISTRY.filter((a) => a.category === 'plants' && a.searchable).length,
  sports: ASSET_REGISTRY.filter((a) => a.category === 'sports' && a.searchable).length,
  anime: ASSET_REGISTRY.filter((a) => a.category === 'anime' && a.searchable).length,
  films: ASSET_REGISTRY.filter((a) => a.category === 'films' && a.searchable).length,
  celebrities: ASSET_REGISTRY.filter((a) => a.category === 'celebrities' && a.searchable).length,
} as const;

export const TOTAL_ASSETS = ASSET_REGISTRY.length;
export const SEARCHABLE_ASSETS = ASSET_REGISTRY.filter((a) => a.searchable).length;

const assetByIdMap = new Map<string, DiscoveredAsset>();
const assetBySlugMap = new Map<string, DiscoveredAsset>();

for (const asset of ASSET_REGISTRY) {
  assetByIdMap.set(asset.id, asset);
  assetBySlugMap.set(asset.slug, asset);
  for (const alias of asset.aliases) {
    assetByIdMap.set(alias, asset);
  }
}

export function getAssetById(id: string): DiscoveredAsset | undefined {
  if (!id) return undefined;
  if (assetByIdMap.has(id)) return assetByIdMap.get(id);

  // Try migrated ID
  const migrated = resolveMigratedAssetId(id);
  if (assetByIdMap.has(migrated)) return assetByIdMap.get(migrated);

  return undefined;
}

export function getAssetBySlug(slug: string): DiscoveredAsset | undefined {
  return assetBySlugMap.get(slug);
}

export function getAllAssets(onlySearchable = true): DiscoveredAsset[] {
  return onlySearchable ? ASSET_REGISTRY.filter((a) => a.searchable) : ASSET_REGISTRY;
}

export function getAssetsByCategory(
  category: EntityCategory,
  onlySearchable = true
): DiscoveredAsset[] {
  return ASSET_REGISTRY.filter((a) => a.category === category && (!onlySearchable || a.searchable));
}

export function searchAssets(
  query: string,
  category?: 'all' | EntityCategory
): DiscoveredAsset[] {
  const q = query.toLowerCase().trim();
  return ASSET_REGISTRY.filter((asset) => {
    if (!asset.searchable) return false;
    if (category && category !== 'all' && asset.category !== category) return false;
    if (!q) return true;

    return (
      asset.name.toLowerCase().includes(q) ||
      asset.slug.toLowerCase().includes(q) ||
      asset.id.toLowerCase().includes(q) ||
      asset.category.toLowerCase().includes(q) ||
      asset.tags.some((t) => t.toLowerCase().includes(q)) ||
      asset.aliases.some((al) => al.toLowerCase().includes(q))
    );
  });
}

export function resolveAsset(assetIdOrOldId: string | undefined, categoryHint?: string): DiscoveredAsset {
  if (assetIdOrOldId) {
    const direct = getAssetById(assetIdOrOldId);
    if (direct) return direct;
  }

  const migratedId = resolveMigratedAssetId(assetIdOrOldId, categoryHint);
  const migrated = getAssetById(migratedId);
  if (migrated) return migrated;

  if (categoryHint) {
    const catList = getAssetsByCategory(categoryHint as any, true);
    if (catList.length > 0) return catList[0];
  }

  const defaultAsset = getAssetById('male-007') || getAssetById('male-01') || ASSET_REGISTRY[0];
  if (!defaultAsset) {
    throw new Error('Critical Error: Asset Registry is empty.');
  }
  return defaultAsset;
}
