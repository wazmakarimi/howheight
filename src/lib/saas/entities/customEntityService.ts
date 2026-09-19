import type { CustomEntity, ComparisonEntity, toComparisonItem } from '../../../types/entity';
import type { ComparisonItem, EntityCategory } from '../../constants';

export interface CreateCustomEntityDTO {
  userId: string;
  name: string;
  heightCm: number;
  category: EntityCategory | string;
  imageUrl?: string;
  aspectRatio?: number;
  description?: string;
  visibility?: 'private' | 'unlisted' | 'public';
}

export interface ICustomEntityService {
  createEntity(dto: CreateCustomEntityDTO): Promise<CustomEntity>;
  getEntityById(entityId: string, requestingUserId?: string): Promise<CustomEntity | null>;
  listUserEntities(userId: string, limit?: number, offset?: number): Promise<CustomEntity[]>;
  updateEntity(
    entityId: string,
    userId: string,
    updates: Partial<Omit<CustomEntity, 'id' | 'userId' | 'createdAt'>>
  ): Promise<CustomEntity>;
  deleteEntity(entityId: string, userId: string): Promise<boolean>;
}

/**
 * Placeholder in-memory / mock implementation for architecture readiness.
 * Ensures user entities remain isolated in user space (Cloudflare D1)
 * and never contaminate the canonical public static entity registry.
 */
export class CustomEntityServicePlaceholder implements ICustomEntityService {
  async createEntity(dto: CreateCustomEntityDTO): Promise<CustomEntity> {
    return {
      id: `usr_ent_${Date.now()}`,
      userId: dto.userId,
      name: dto.name,
      heightCm: dto.heightCm,
      category: dto.category,
      imageUrl: dto.imageUrl,
      aspectRatio: dto.aspectRatio || 1,
      description: dto.description,
      source: 'custom',
      visibility: dto.visibility || 'private',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  async getEntityById(entityId: string, requestingUserId?: string): Promise<CustomEntity | null> {
    return null;
  }

  async listUserEntities(userId: string): Promise<CustomEntity[]> {
    return [];
  }

  async updateEntity(entityId: string, userId: string, updates: any): Promise<CustomEntity> {
    throw new Error('Database binding not configured. Run D1 migration first.');
  }

  async deleteEntity(entityId: string, userId: string): Promise<boolean> {
    return true;
  }
}
