/**
 * HowHeight SaaS Architecture Master Exports
 * Central entry point for all SaaS abstractions, services, and entitlements.
 */

// Types
export * from '../../types/saas';
export * from '../../types/entity';

// Configuration
export { FEATURE_FLAGS, PLANS } from '../../config/features';

// Feature Entitlements & Limits
export {
  getUserPlanTier,
  getUserPlan,
  canUse,
  getFeatureLimit,
  hasReachedLimit,
} from './entitlements';

// Authentication & Authorization Context
export {
  getAuthUser,
  requireAuth,
  type AuthSession,
  type IAuthProvider,
} from './auth/authContext';

// Billing Provider Interface
export {
  type IBillingProvider,
  type CheckoutSessionResult,
  type CustomerPortalResult,
  type WebhookResult,
  BillingProviderPlaceholder,
} from './billing/billingProvider';

// Comparisons & History Services
export {
  type ISavedComparisonService,
  type IComparisonHistoryService,
  type ISharedComparisonService,
  type CreateComparisonDTO,
  SavedComparisonServicePlaceholder,
} from './comparisons/comparisonService';

// Custom User Entities
export {
  type ICustomEntityService,
  type CreateCustomEntityDTO,
  CustomEntityServicePlaceholder,
} from './entities/customEntityService';

// Cloudflare R2 Uploads & Storage
export {
  type IStorageService,
  type AllowedMimeType,
  ALLOWED_MIME_TYPES,
  generateUserR2Key,
  StorageServicePlaceholder,
} from './uploads/storageService';

// Usage Tracking & Rate Limits
export {
  type IUsageService,
  UsageServicePlaceholder,
} from './usage/usageService';

// API Response Helpers
export {
  jsonResponse,
  errorResponse,
  type ApiResponse,
} from './api/apiResponses';
