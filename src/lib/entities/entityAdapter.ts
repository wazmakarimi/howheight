import type { DiscoveredAsset } from '../../data/assetManifest';
import { getAssetById, getAssetBySlug } from '../../data/assetRegistry';
import type { ComparisonItem } from '../constants';
import type {
  ComparisonEntity,
  CustomEntity,
  PublicEntity,
} from '../../types/entity';
import {
  isCustomEntity,
  isPublicEntity,
  toComparisonItem,
} from '../../types/entity';
import type { ComparisonEntityReference } from '../../types/saas';

export {
  type ComparisonEntity,
  type CustomEntity,
  type PublicEntity,
  isCustomEntity,
  isPublicEntity,
  toComparisonItem,
};

/**
 * Converts a static DiscoveredAsset from the public asset registry into a PublicEntity.
 */
export function publicAssetToEntity(asset: DiscoveredAsset): PublicEntity {
  return {
    id: asset.id,
    entityId: asset.id,
    name: asset.name,
    slug: asset.slug,
    category: asset.category,
    heightCm: asset.defaultHeightCm,
    image: asset.path,
    description: asset.description,
    source: 'public',
    metadata: {
      gender: asset.gender,
      profession: asset.profession,
      origin: asset.origin,
      franchise: asset.franchise,
      verified: true,
      tags: asset.tags,
      aspectRatio: asset.aspectRatio,
    },
  };
}

/**
 * Resolves a public entity by ID or slug.
 */
export function getPublicEntityById(idOrSlug: string): PublicEntity | null {
  const asset = getAssetById(idOrSlug) || getAssetBySlug(idOrSlug);
  return asset ? publicAssetToEntity(asset) : null;
}

/**
 * Resolves a ComparisonEntityReference (from a saved comparison or API payload)
 * into a full ComparisonEntity instance.
 *
 * @param ref The reference object ({ type: 'public' | 'custom', entityId: string })
 * @param customLookup Optional function to look up custom entities from user space/cache/D1
 */
export function resolveComparisonEntity(
  ref: ComparisonEntityReference,
  customLookup?: (entityId: string) => CustomEntity | null
): ComparisonEntity | null {
  if (ref.type === 'custom') {
    if (customLookup) {
      return customLookup(ref.entityId);
    }
    return null;
  }

  // Public entity lookup
  return getPublicEntityById(ref.entityId);
}

/**
 * Converts any ComparisonEntity into a runtime ComparisonItem
 * ready for the visual comparison engine and canvas.
 */
export function comparisonEntityToItem(
  entity: ComparisonEntity,
  overrides?: Partial<ComparisonItem>
): ComparisonItem {
  return toComparisonItem(entity, overrides);
}
