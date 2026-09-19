import type { User, UserProfile, UserSubscriptionSummary } from '../../../types/saas';

export interface IUserService {
  getUserById(userId: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  createUser(data: { email: string; name: string; locale?: string }): Promise<User>;
  updateProfile(userId: string, data: Partial<UserProfile>): Promise<User>;
  updateSubscriptionSummary(userId: string, summary: UserSubscriptionSummary): Promise<void>;
  deleteUser(userId: string): Promise<boolean>;
}

/**
 * Placeholder in-memory / mock implementation for architecture readiness.
 * Will be replaced by Cloudflare D1 SQL implementation when D1 binding is initialized.
 */
export class UserServicePlaceholder implements IUserService {
  async getUserById(userId: string): Promise<User | null> {
    return null;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return null;
  }

  async createUser(data: { email: string; name: string; locale?: string }): Promise<User> {
    return {
      id: `usr_${Date.now()}`,
      email: data.email,
      name: data.name,
      locale: data.locale || 'en',
      role: 'user',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      subscription: {
        tier: 'free',
        status: 'active',
      },
    };
  }

  async updateProfile(userId: string, data: Partial<UserProfile>): Promise<User> {
    throw new Error('Database binding not configured. Run D1 migration first.');
  }

  async updateSubscriptionSummary(userId: string, summary: UserSubscriptionSummary): Promise<void> {
    // Ready for D1 UPDATE users SET subscription_status = ?, plan_tier = ?
  }

  async deleteUser(userId: string): Promise<boolean> {
    return true;
  }
}
