import type { ComparisonItem, RulerUnit, SortMode } from '../lib/constants';

/**
 * User System Interfaces
 */
export type UserRole = 'user' | 'creator' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  locale: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
  subscription?: UserSubscriptionSummary;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  locale: string;
  preferredUnit: RulerUnit;
}

/**
 * Subscription & Plan Architecture
 */
export type PlanTier = 'free' | 'pro' | 'enterprise';

export type SubscriptionStatus =
  | 'active'
  | 'trialing'
  | 'past_due'
  | 'canceled'
  | 'unpaid'
  | 'incomplete'
  | 'inactive';

export type BillingInterval = 'monthly' | 'yearly';

export interface UserSubscriptionSummary {
  tier: PlanTier;
  status: SubscriptionStatus;
  currentPeriodEnd?: string;
  cancelAtPeriodEnd?: boolean;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: PlanTier;
  status: SubscriptionStatus;
  billingInterval: BillingInterval;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  provider: string; // 'stripe' | 'lemon_squeezy' | 'paddle' | 'razorpay'
  providerCustomerId: string;
  providerSubscriptionId: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Feature Entitlements & Limits
 */
export type FeatureKey =
  | 'savedComparisons'
  | 'customEntities'
  | 'imageUploads'
  | 'exports'
  | 'privateComparisons'
  | 'advancedCustomization'
  | 'highResCanvas'
  | 'apiAccess';

export interface FeatureLimits {
  maxSavedComparisons: number | 'unlimited';
  maxCustomEntities: number | 'unlimited';
  exportsPerMonth: number | 'unlimited';
  maxUploadSizeMb: number;
  canMakePrivateComparisons: boolean;
  canUseAdvancedCustomization: boolean;
  canAccessApi: boolean;
}

export interface PlanConfiguration {
  tier: PlanTier;
  name: string;
  badge?: string;
  description: string;
  limits: FeatureLimits;
  pricing: {
    monthly: number;
    annual: number;
    currency: string;
  };
}

/**
 * Saved Comparison & History Models
 */
export type ComparisonVisibility = 'public' | 'unlisted' | 'private';

export interface ComparisonEntityReference {
  type: 'public' | 'custom';
  entityId: string;
  overrides?: {
    customName?: string;
    customHeightCm?: number;
    color?: string;
    opacity?: number;
    positionX?: number;
  };
}

export interface ComparisonDisplaySettings {
  rulerUnit: RulerUnit;
  sortMode: SortMode;
  positionMode: 'auto' | 'manual';
  zoomLevel: number;
  theme?: 'light' | 'dark' | 'system';
  backgroundColor?: string;
  showRulerGrid?: boolean;
}

export interface SavedComparison {
  id: string;
  userId: string;
  title: string;
  description?: string;
  entities: ComparisonEntityReference[];
  settings: ComparisonDisplaySettings;
  visibility: ComparisonVisibility;
  shareSlug?: string;
  viewCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ComparisonHistoryItem {
  id: string;
  userId: string;
  entities: ComparisonEntityReference[];
  summaryText: string;
  comparedAt: string;
}

export interface SharedComparison {
  shareId: string;
  comparisonId: string;
  creatorUserId: string;
  visibility: ComparisonVisibility;
  viewCount: number;
  createdAt: string;
  expiresAt?: string;
}

/**
 * Cloudflare R2 Asset Storage Models
 */
export interface UserAsset {
  id: string;
  userId: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  r2Key: string; // Namespaced: user/{userId}/{assetId}.ext
  url: string;
  createdAt: string;
}

export interface AssetUploadRequest {
  fileName: string;
  mimeType: string;
  sizeBytes: number;
}

export interface AssetUploadResponse {
  assetId: string;
  uploadUrl: string;
  publicUrl: string;
  r2Key: string;
}

/**
 * Usage Tracking & Rate Limiting Models
 */
export type UsageMetric =
  | 'saved_comparisons_count'
  | 'custom_entities_count'
  | 'monthly_exports'
  | 'storage_bytes'
  | 'api_calls';

export interface UsageRecord {
  userId: string;
  metric: UsageMetric;
  quantity: number;
  periodStart: string;
  periodEnd: string;
  updatedAt: string;
}

export interface RateLimitStatus {
  allowed: boolean;
  remaining: number;
  resetSeconds: number;
  limit: number;
}

/**
 * Cloudflare D1 Database Table Row Signatures
 */
export interface D1UserRecord {
  id: string;
  email: string;
  name: string;
  avatar_url: string | null;
  locale: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface D1SubscriptionRecord {
  id: string;
  user_id: string;
  plan_id: string;
  status: string;
  billing_interval: string;
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end: number;
  provider: string;
  provider_customer_id: string;
  provider_subscription_id: string;
  created_at: string;
  updated_at: string;
}

export interface D1SavedComparisonRecord {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  entities_json: string;
  settings_json: string;
  visibility: string;
  share_slug: string | null;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface D1CustomEntityRecord {
  id: string;
  user_id: string;
  name: string;
  height_cm: number;
  category: string;
  image_url: string | null;
  aspect_ratio: number | null;
  description: string | null;
  visibility: string;
  created_at: string;
  updated_at: string;
}

export interface D1UserAssetRecord {
  id: string;
  user_id: string;
  file_name: string;
  mime_type: string;
  size_bytes: number;
  r2_key: string;
  url: string;
  created_at: string;
}

export interface D1UsageRecord {
  id: string;
  user_id: string;
  metric: string;
  quantity: number;
  period_start: string;
  period_end: string;
  updated_at: string;
}

/**
 * Central Feature Flags
 */
export interface FeatureFlags {
  SAAS_ENABLED: boolean;
  CUSTOM_ENTITIES_ENABLED: boolean;
  USER_ACCOUNTS_ENABLED: boolean;
  BILLING_ENABLED: boolean;
  EXPORT_PRO_ENABLED: boolean;
  PRIVATE_SHARING_ENABLED: boolean;
}
