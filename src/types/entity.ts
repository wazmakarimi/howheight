import type { EntityCategory, ComparisonItem } from '../lib/constants';

/**
 * PublicEntity: Canonical verified public entity in the HowHeight platform.
 * These are static, curated, and public records for people, celebrities,
 * anime, films, animals, objects, plants, sports, apparel, etc.
 */
export interface PublicEntity {
  id: string;
  entityId: string;
  name: string;
  slug: string;
  category: EntityCategory;
  heightCm: number;
  image: string; // Relative asset path (SVG or PNG) or icon name
  description?: string;
  source: 'public';
  metadata?: {
    gender?: 'male' | 'female';
    profession?: string;
    origin?: string;
    franchise?: string;
    scientificName?: string;
    species?: string;
    releaseYear?: number;
    referenceUrl?: string;
    verified?: boolean;
    [key: string]: unknown;
  };
}

/**
 * CustomEntity: User-created entity in the HowHeight SaaS layer.
 * Stored securely in Cloudflare D1 with user assets stored in Cloudflare R2.
 * Never mixed into the static public dataset.
 */
export interface CustomEntity {
  id: string;
  userId: string;
  name: string;
  heightCm: number;
  category: EntityCategory | string;
  imageUrl?: string; // Cloudflare R2 URL or user upload URL
  aspectRatio?: number;
  description?: string;
  source: 'custom';
  visibility: 'private' | 'unlisted' | 'public';
  createdAt: string | Date;
  updatedAt: string | Date;
  metadata?: Record<string, unknown>;
}

/**
 * ComparisonEntity: The unified abstraction bridging PublicEntity and CustomEntity.
 * The core height comparison engine operates seamlessly on ComparisonEntity instances
 * without caring whether the data source is public static or custom user-generated.
 */
export type ComparisonEntity = PublicEntity | CustomEntity;

/**
 * Type guard to check if an entity is a PublicEntity.
 */
export function isPublicEntity(entity: ComparisonEntity): entity is PublicEntity {
  return (entity as PublicEntity).source === 'public' || !('userId' in entity);
}

/**
 * Type guard to check if an entity is a CustomEntity.
 */
export function isCustomEntity(entity: ComparisonEntity): entity is CustomEntity {
  return (entity as CustomEntity).source === 'custom' && 'userId' in entity;
}

/**
 * Adapter to project any ComparisonEntity (Public or Custom) into the
 * engine's active runtime ComparisonItem model.
 */
export function toComparisonItem(
  entity: ComparisonEntity,
  overrides?: Partial<ComparisonItem>
): ComparisonItem {
  if (isCustomEntity(entity)) {
    return {
      id: entity.id,
      category: (entity.category as EntityCategory) || 'custom',
      name: entity.name,
      heightCm: entity.heightCm,
      color: overrides?.color || '#0284c7',
      opacity: overrides?.opacity ?? 1,
      customImageUrl: entity.imageUrl,
      customImageAspect: entity.aspectRatio,
      isCustomUpload: Boolean(entity.imageUrl),
      isCustomHeight: true,
      positionX: overrides?.positionX,
      ...overrides,
    };
  }

  // Public entity projection
  return {
    id: entity.entityId || entity.id,
    assetId: entity.entityId || entity.id,
    category: entity.category,
    name: entity.name,
    heightCm: entity.heightCm,
    referenceHeightCm: entity.heightCm,
    color: overrides?.color || '#2563eb',
    opacity: overrides?.opacity ?? 1,
    gender: entity.metadata?.gender,
    profession: entity.metadata?.profession,
    positionX: overrides?.positionX,
    ...overrides,
  };
}
