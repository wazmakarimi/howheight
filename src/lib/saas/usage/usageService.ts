import type { UsageMetric, UsageRecord } from '../../../types/saas';

export interface IUsageService {
  getUsage(userId: string, metric: UsageMetric): Promise<number>;
  checkLimit(userId: string, metric: UsageMetric, limit: number | 'unlimited'): Promise<boolean>;
  recordUsage(userId: string, metric: UsageMetric, incrementBy?: number): Promise<UsageRecord>;
  resetUsagePeriod(userId: string, metric: UsageMetric): Promise<void>;
}

/**
 * Placeholder implementation for centralized usage tracking.
 * Ready for Cloudflare D1 SQL queries or Cloudflare KV atomic increments.
 */
export class UsageServicePlaceholder implements IUsageService {
  async getUsage(userId: string, metric: UsageMetric): Promise<number> {
    return 0;
  }

  async checkLimit(userId: string, metric: UsageMetric, limit: number | 'unlimited'): Promise<boolean> {
    if (limit === 'unlimited') return true;
    const currentUsage = await this.getUsage(userId, metric);
    return currentUsage < limit;
  }

  async recordUsage(userId: string, metric: UsageMetric, incrementBy = 1): Promise<UsageRecord> {
    const now = new Date();
    const periodStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
    const periodEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString();

    return {
      userId,
      metric,
      quantity: incrementBy,
      periodStart,
      periodEnd,
      updatedAt: now.toISOString(),
    };
  }

  async resetUsagePeriod(userId: string, metric: UsageMetric): Promise<void> {
    // Reset period counters when monthly billing cycle rolls over
  }
}
