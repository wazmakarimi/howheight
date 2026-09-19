import type { FeatureKey, FeatureLimits, PlanConfiguration, PlanTier, User } from '../../types/saas';
import { PLANS } from '../../config/features';

/**
 * Resolves the active plan tier for a user.
 * Defaults to 'free' if the user is unauthenticated or has an inactive subscription.
 */
export function getUserPlanTier(user: User | null | undefined): PlanTier {
  if (!user || !user.subscription) return 'free';

  const { status, tier } = user.subscription;
  if (status === 'active' || status === 'trialing') {
    return tier in PLANS ? tier : 'free';
  }

  return 'free';
}

/**
 * Returns the complete plan configuration for a user.
 */
export function getUserPlan(user: User | null | undefined): PlanConfiguration {
  const tier = getUserPlanTier(user);
  return PLANS[tier];
}

/**
 * Centralized Entitlement Check: canUse(user, feature)
 * Eliminates scattered "if (isPremium)" or hardcoded conditions across UI components.
 *
 * @param user The authenticated user or null
 * @param feature The feature key to evaluate
 * @returns boolean whether the user has access to the feature
 */
export function canUse(user: User | null | undefined, feature: FeatureKey): boolean {
  const plan = getUserPlan(user);
  const limits = plan.limits;

  switch (feature) {
    case 'savedComparisons':
      return limits.maxSavedComparisons === 'unlimited' || limits.maxSavedComparisons > 0;

    case 'customEntities':
      return limits.maxCustomEntities === 'unlimited' || limits.maxCustomEntities > 0;

    case 'imageUploads':
      return limits.maxUploadSizeMb > 0;

    case 'exports':
      return limits.exportsPerMonth === 'unlimited' || limits.exportsPerMonth > 0;

    case 'privateComparisons':
      return limits.canMakePrivateComparisons;

    case 'advancedCustomization':
      return limits.canUseAdvancedCustomization;

    case 'highResCanvas':
      return limits.canUseAdvancedCustomization;

    case 'apiAccess':
      return limits.canAccessApi;

    default:
      return false;
  }
}

/**
 * Retrieves the numerical or 'unlimited' limit for a quantitative feature.
 */
export function getFeatureLimit<K extends keyof FeatureLimits>(
  user: User | null | undefined,
  limitKey: K
): FeatureLimits[K] {
  const plan = getUserPlan(user);
  return plan.limits[limitKey];
}

/**
 * Checks whether the user has exceeded their allocated limit for a given feature.
 */
export function hasReachedLimit(
  user: User | null | undefined,
  limitKey: 'maxSavedComparisons' | 'maxCustomEntities' | 'exportsPerMonth',
  currentCount: number
): boolean {
  const limit = getFeatureLimit(user, limitKey);
  if (limit === 'unlimited') return false;
  return currentCount >= limit;
}
