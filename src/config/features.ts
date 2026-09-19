import type { FeatureFlags, PlanConfiguration, PlanTier } from '../types/saas';

/**
 * HowHeight Master Feature Flags
 * Controls SaaS feature availability across the application.
 * All flags default to false to protect the live static public platform.
 */
export const FEATURE_FLAGS: FeatureFlags = {
  // Master SaaS switch: controls whether authenticated routes, user navigation & dashboards are exposed
  SAAS_ENABLED: false,

  // User Accounts & Authentication layer
  USER_ACCOUNTS_ENABLED: false,

  // Custom User Entity Creation (Person, Animal, Object, etc.)
  CUSTOM_ENTITIES_ENABLED: false,

  // Billing, Subscriptions & Checkout Providers
  BILLING_ENABLED: false,

  // Pro high-resolution / PDF comparison exports
  EXPORT_PRO_ENABLED: false,

  // Unlisted / Private comparison link sharing
  PRIVATE_SHARING_ENABLED: false,
};

/**
 * Plan Definitions & Entitlements
 * Dynamic configuration — NOT hardcoded inside UI components.
 */
export const PLANS: Record<PlanTier, PlanConfiguration> = {
  free: {
    tier: 'free',
    name: 'Free',
    description: 'Essential visual height comparisons with full access to the public entity library.',
    limits: {
      maxSavedComparisons: 5,
      maxCustomEntities: 3,
      exportsPerMonth: 3,
      maxUploadSizeMb: 2,
      canMakePrivateComparisons: false,
      canUseAdvancedCustomization: false,
      canAccessApi: false,
    },
    pricing: {
      monthly: 0,
      annual: 0,
      currency: 'USD',
    },
  },
  pro: {
    tier: 'pro',
    name: 'Pro',
    badge: 'Popular',
    description: 'Unlimited saved comparisons, custom entities, high-res exports, and advanced customization.',
    limits: {
      maxSavedComparisons: 'unlimited',
      maxCustomEntities: 'unlimited',
      exportsPerMonth: 'unlimited',
      maxUploadSizeMb: 25,
      canMakePrivateComparisons: true,
      canUseAdvancedCustomization: true,
      canAccessApi: false,
    },
    pricing: {
      monthly: 4.99,
      annual: 3.99, // Billed annually
      currency: 'USD',
    },
  },
  enterprise: {
    tier: 'enterprise',
    name: 'Enterprise / Creator',
    badge: 'Custom',
    description: 'Custom branding, team workspaces, API access, and dedicated Cloudflare R2 storage limits.',
    limits: {
      maxSavedComparisons: 'unlimited',
      maxCustomEntities: 'unlimited',
      exportsPerMonth: 'unlimited',
      maxUploadSizeMb: 100,
      canMakePrivateComparisons: true,
      canUseAdvancedCustomization: true,
      canAccessApi: true,
    },
    pricing: {
      monthly: 19.99,
      annual: 15.99,
      currency: 'USD',
    },
  },
};
