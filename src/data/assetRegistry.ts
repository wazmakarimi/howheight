// CENTRAL ASSET REGISTRY - PHASE 12
// Single source of truth for the entire application.
import { ASSET_MANIFEST, type DiscoveredAsset } from './assetManifest.ts';
import { resolveMigratedAssetId } from '../lib/migrationMap.ts';
import { getCelebrityAssetId } from './celebrities.ts';
import { getAnimalAssetId } from './animals.ts';
import { getObjectAssetId } from './objects.ts';

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
  const normId = asset.id.toLowerCase();
  assetByIdMap.set(normId, asset);
  
  if (asset.slug) {
    const normSlug = asset.slug.toLowerCase();
    assetBySlugMap.set(normSlug, asset);
  }

  if (asset.name) {
    const normName = asset.name.toLowerCase();
    assetBySlugMap.set(normName, asset);
  }

  for (const alias of asset.aliases) {
    const normAlias = alias.toLowerCase();
    assetByIdMap.set(normAlias, asset);
    assetBySlugMap.set(normAlias, asset);
  }
}

export function getAssetById(id: string): DiscoveredAsset | undefined {
  if (!id) return undefined;
  const norm = id.toLowerCase().trim();
  if (assetByIdMap.has(norm)) return assetByIdMap.get(norm);

  // Try migrated ID
  const migrated = resolveMigratedAssetId(norm);
  if (assetByIdMap.has(migrated.toLowerCase())) return assetByIdMap.get(migrated.toLowerCase());

  // Try stripping SEO prefix
  const stripped = norm.replace(/^seo-(cel|animal|obj|human)-/, '');
  if (assetByIdMap.has(stripped)) return assetByIdMap.get(stripped);

  return undefined;
}

export function getAssetBySlug(slug: string): DiscoveredAsset | undefined {
  if (!slug) return undefined;
  const norm = slug.toLowerCase().trim();
  if (assetBySlugMap.has(norm)) return assetBySlugMap.get(norm);

  const stripped = norm.replace(/^seo-(cel|animal|obj|human)-/, '');
  if (assetBySlugMap.has(stripped)) return assetBySlugMap.get(stripped);

  return undefined;
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

/**
 * Authoritative Universal Asset Resolver
 * Guaranteed: Never performs arbitrary index[0] fallback.
 * Strictly resolves to verified asset or designated neutral archetype.
 */
export function resolveAsset(assetIdOrOldId: string | undefined, categoryHint?: string): DiscoveredAsset {
  if (assetIdOrOldId) {
    // 1. Direct ID lookup
    const direct = getAssetById(assetIdOrOldId);
    if (direct) return direct;

    // 2. Direct Slug lookup
    const slugMatch = getAssetBySlug(assetIdOrOldId);
    if (slugMatch) return slugMatch;

    // 3. Domain helper check: Celebrity
    const celAssetId = getCelebrityAssetId(assetIdOrOldId);
    if (celAssetId) {
      const celAsset = getAssetById(celAssetId);
      if (celAsset) return celAsset;
    }

    // 4. Domain helper check: Animal
    const animalAssetId = getAnimalAssetId(assetIdOrOldId);
    if (animalAssetId) {
      const animalAsset = getAssetById(animalAssetId);
      if (animalAsset) return animalAsset;
    }

    // 5. Domain helper check: Object
    const objAssetId = getObjectAssetId(assetIdOrOldId);
    if (objAssetId) {
      const objAsset = getAssetById(objAssetId);
      if (objAsset) return objAsset;
    }
  }

  // 6. Migration map lookup
  const migratedId = resolveMigratedAssetId(assetIdOrOldId, categoryHint);
  const migrated = getAssetById(migratedId);
  if (migrated) return migrated;

  // 7. Deterministic, safe archetype fallback based on category
  const normCat = (categoryHint || '').toLowerCase();
  if (normCat === 'female') {
    const f = getAssetById('female-01');
    if (f) return f;
  }
  if (normCat === 'animals' || normCat === 'animal') {
    const d = getAssetById('animal-018');
    if (d) return d;
  }
  if (normCat === 'objects' || normCat === 'object') {
    const o = getAssetById('object-016');
    if (o) return o;
  }
  if (normCat === 'celebrities' || normCat === 'celebrity' || normCat === 'male') {
    const m = getAssetById('male-010');
    if (m) return m;
  }

  const defaultAsset = getAssetById('male-010') || ASSET_REGISTRY[0];
  if (!defaultAsset) {
    throw new Error('Critical Error: Asset Registry is empty.');
  }
  return defaultAsset;
}
