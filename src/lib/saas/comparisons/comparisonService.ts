import type {
  ComparisonDisplaySettings,
  ComparisonEntityReference,
  ComparisonHistoryItem,
  SavedComparison,
  SharedComparison,
  ComparisonVisibility,
} from '../../../types/saas';

export interface CreateComparisonDTO {
  userId: string;
  title: string;
  description?: string;
  entities: ComparisonEntityReference[];
  settings: ComparisonDisplaySettings;
  visibility?: ComparisonVisibility;
}

export interface ISavedComparisonService {
  saveComparison(dto: CreateComparisonDTO): Promise<SavedComparison>;
  getComparisonById(comparisonId: string, requestingUserId?: string): Promise<SavedComparison | null>;
  listUserComparisons(userId: string, limit?: number, offset?: number): Promise<SavedComparison[]>;
  updateComparison(
    comparisonId: string,
    userId: string,
    updates: Partial<Omit<SavedComparison, 'id' | 'userId' | 'createdAt'>>
  ): Promise<SavedComparison>;
  deleteComparison(comparisonId: string, userId: string): Promise<boolean>;
}

export interface IComparisonHistoryService {
  recordComparison(
    userId: string,
    entities: ComparisonEntityReference[],
    summaryText: string
  ): Promise<ComparisonHistoryItem>;
  getUserHistory(userId: string, limit?: number): Promise<ComparisonHistoryItem[]>;
  clearUserHistory(userId: string): Promise<boolean>;
}

export interface ISharedComparisonService {
  createShareLink(comparisonId: string, userId: string, visibility: ComparisonVisibility): Promise<SharedComparison>;
  getSharedComparison(shareId: string): Promise<SharedComparison | null>;
  incrementViewCount(shareId: string): Promise<void>;
}

/**
 * Placeholder in-memory / mock implementation for architecture readiness.
 * Handles reference-based storage to avoid copying full entity objects.
 */
export class SavedComparisonServicePlaceholder implements ISavedComparisonService {
  async saveComparison(dto: CreateComparisonDTO): Promise<SavedComparison> {
    return {
      id: `cmp_${Date.now()}`,
      userId: dto.userId,
      title: dto.title,
      description: dto.description,
      entities: dto.entities, // Reference-based storage
      settings: dto.settings,
      visibility: dto.visibility || 'private',
      viewCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  async getComparisonById(comparisonId: string, requestingUserId?: string): Promise<SavedComparison | null> {
    return null;
  }

  async listUserComparisons(userId: string): Promise<SavedComparison[]> {
    return [];
  }

  async updateComparison(comparisonId: string, userId: string, updates: any): Promise<SavedComparison> {
    throw new Error('Database binding not configured. Run D1 migration first.');
  }

  async deleteComparison(comparisonId: string, userId: string): Promise<boolean> {
    return true;
  }
}
