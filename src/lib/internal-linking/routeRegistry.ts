import { CATEGORIES, getCategoryById, getCategoryByEntityKey } from '../../data/categories';
import { COMPARISONS, getComparisonBySlug } from '../../data/comparisons';
import { CELEBRITIES } from '../../data/celebrities';
import { ANIMALS } from '../../data/animals';
import { OBJECTS } from '../../data/objects';
import { HUMANS } from '../../data/humans';
import { ASSET_REGISTRY } from '../../data/assetRegistry';
import { getLocalizedPath, stripLocaleFromPath, isRouteLocalized } from '../../i18n';
export { isRouteLocalized };
import type { Locale } from '../../i18n/locales';
import type { EntityCategory } from '../constants';

// Set of all known verified entity slugs per category
const celebritySlugs = new Set(CELEBRITIES.map((c) => c.slug));
const animalIds = new Set(ANIMALS.map((a) => a.id));
const objectIds = new Set(OBJECTS.map((o) => o.id));
const humanSlugs = new Set(HUMANS.map((h) => h.slug));
const plantSlugs = new Set(
  ASSET_REGISTRY.filter((a) => a.category === 'plants' && a.status === 'verified' && a.heightCm !== null && a.indexable !== false).slice(0, 25).map((a) => a.slug)
);
const sportsSlugs = new Set(
  ASSET_REGISTRY.filter((a) => a.category === 'sports' && a.status === 'verified' && a.heightCm !== null && a.indexable !== false).slice(0, 25).map((a) => a.slug)
);
const fictionalSlugs = new Set(
  ASSET_REGISTRY.filter((a) => a.category === 'fictional' && a.status === 'verified' && a.heightCm !== null && a.indexable !== false).slice(0, 25).map((a) => a.slug)
);
const comparisonSlugs = new Set(COMPARISONS.map((c) => c.slug));

/**
 * Returns the exact valid canonical route for an entity, or null if no individual page exists.
 */
export function getEntityRoute(category: string, idOrSlug: string): string | null {
  const normId = idOrSlug.toLowerCase().trim();

  // 1. Celebrities
  if (category === 'celebrities' || category === 'celebrity') {
    if (celebritySlugs.has(normId)) {
      return `/celebrity-height/${normId}/`;
    }
  }

  // 2. Animals
  if (category === 'animals' || category === 'animal') {
    if (animalIds.has(normId)) {
      return `/animal-height-comparison/${normId}/`;
    }
  }

  // 3. Objects
  if (category === 'objects' || category === 'object') {
    if (objectIds.has(normId)) {
      return `/object-height-comparison/${normId}/`;
    }
  }

  // 4. Plants
  if (category === 'plants' || category === 'plant') {
    if (plantSlugs.has(normId)) {
      return `/plant-height-comparison/${normId}/`;
    }
  }

  // 5. Sports
  if (category === 'sports' || category === 'sport') {
    if (sportsSlugs.has(normId)) {
      return `/sports-height-comparison/${normId}/`;
    }
  }

  // 6. Fictional
  if (category === 'fictional' || category === 'fiction') {
    if (fictionalSlugs.has(normId)) {
      return `/fictional-character-height/${normId}/`;
    }
  }

  // 7. Humans / People
  if (category === 'human' || category === 'people' || category === 'male' || category === 'female') {
    if (humanSlugs.has(normId)) {
      return `/people-height-comparison/${normId}/`;
    }
  }

  return null;
}

/**
 * Resolves the parent category route for an entity category.
 */
export function getCategoryRoute(categoryKey: string): string {
  const cat = getCategoryById(categoryKey) || getCategoryByEntityKey(categoryKey as EntityCategory);
  if (cat) {
    return cat.route;
  }
  // Default to comparison hub
  return '/compare/';
}

/**
 * Returns canonical comparison route if valid.
 */
export function getComparisonRoute(slug: string): string | null {
  const norm = slug.toLowerCase().trim();
  if (comparisonSlugs.has(norm)) {
    return `/compare/${norm}/`;
  }
  return null;
}

/**
 * Resolves the parent category route for an arbitrary page path.
 * Used for graceful fallback when an entity page only exists in English.
 */
export function getParentCategoryForRoute(path: string): string {
  const clean = stripLocaleFromPath(path).replace(/^\/|\/$/g, '');
  if (clean.startsWith('celebrity-height')) return '/celebrity-height-comparison/';
  if (clean.startsWith('anime-height')) return '/anime-height-comparison/';
  if (clean.startsWith('film-height')) return '/film-height-comparison/';
  if (clean.startsWith('animal-height')) return '/animal-height-comparison/';
  if (clean.startsWith('object-height')) return '/object-height-comparison/';
  if (clean.startsWith('plant-height')) return '/plant-height-comparison/';
  if (clean.startsWith('sports-height')) return '/sports-height-comparison/';
  if (clean.startsWith('apparel-height')) return '/apparel-height-comparison/';
  if (clean.startsWith('fictional-character-height') || clean.startsWith('fictional-height')) return '/fictional-character-height-comparison/';
  if (clean.startsWith('people-height') || clean.startsWith('human-height')) return '/people-height-comparison/';
  return '/compare/';
}

/**
 * Returns a guaranteed valid link URL respecting localization rules.
 * If the path is supported in the given locale, it returns the localized path.
 * If not (e.g. an entity page only present in en), it falls back to English without breaking into a 404!
 */
export function getSafeInternalUrl(path: string, locale: Locale = 'en'): string {
  if (locale === 'en') {
    return path.endsWith('/') ? path : `${path}/`;
  }

  if (isRouteLocalized(path)) {
    return getLocalizedPath(path, locale);
  }

  // Entity page fallback to English canonical
  return path.endsWith('/') ? path : `${path}/`;
}
