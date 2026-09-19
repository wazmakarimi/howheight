import { CATEGORIES, getCategoryById } from '../../data/categories';
import { getLocalizedCategory } from '../../i18n';
import type { Locale } from '../../i18n/locales';
import { getSafeInternalUrl } from './routeRegistry';
import type { CategoryRelation } from './types';

// Deterministic semantic cross-category mapping
const CATEGORY_GRAPH: Record<string, Array<{ targetId: string; reasonKey: string }>> = {
  anime: [
    { targetId: 'fictional', reasonKey: 'Explore fantastical creatures and illustrated beings' },
    { targetId: 'films', reasonKey: 'Compare cinematic legends and sci-fi characters' },
    { targetId: 'people', reasonKey: 'Benchmark anime characters against human averages' },
  ],
  celebrities: [
    { targetId: 'sports', reasonKey: 'Compare pro athletes across basketball, cricket, and soccer' },
    { targetId: 'films', reasonKey: 'Compare famous on-screen cinema roles and superheroes' },
    { targetId: 'people', reasonKey: 'See how public figures compare to global human height averages' },
  ],
  films: [
    { targetId: 'celebrities', reasonKey: 'Compare actors with their on-screen character statures' },
    { targetId: 'anime', reasonKey: 'Compare manga icons with cinematic comic heroes' },
    { targetId: 'fictional', reasonKey: 'Explore fantasy creatures and world-building figures' },
  ],
  animals: [
    { targetId: 'plants', reasonKey: 'Compare wildlife with towering trees and botanical specimens' },
    { targetId: 'objects', reasonKey: 'See animal shoulder heights next to cars and furniture' },
    { targetId: 'people', reasonKey: 'Compare domestic pets and wild beasts to humans' },
  ],
  objects: [
    { targetId: 'animals', reasonKey: 'Compare household and architectural items to wildlife' },
    { targetId: 'plants', reasonKey: 'Compare vehicles and buildings with natural trees' },
    { targetId: 'people', reasonKey: 'Understand human scale next to doors, cars, and desks' },
  ],
  plants: [
    { targetId: 'animals', reasonKey: 'Explore nature scale from flora to wildlife' },
    { targetId: 'objects', reasonKey: 'Compare garden trees and houseplants to furniture' },
    { targetId: 'people', reasonKey: 'See how human height aligns with botanical canopies' },
  ],
  sports: [
    { targetId: 'celebrities', reasonKey: 'Explore verified heights of athletic icons and stars' },
    { targetId: 'apparel', reasonKey: 'See how athletic shoes and platform soles affect stature' },
    { targetId: 'people', reasonKey: 'Compare elite athletes against everyday human height medians' },
  ],
  apparel: [
    { targetId: 'people', reasonKey: 'See how footwear and heels elevate barefoot standing height' },
    { targetId: 'sports', reasonKey: 'Compare athletic sneakers and pro equipment dimensions' },
    { targetId: 'objects', reasonKey: 'Compare clothing scale against furniture and doors' },
  ],
  fictional: [
    { targetId: 'anime', reasonKey: 'Compare high fantasy figures with shonen anime legends' },
    { targetId: 'films', reasonKey: 'Compare comic heroes and monsters from blockbusters' },
    { targetId: 'people', reasonKey: 'Benchmark fantastical giants and halflings against real humans' },
  ],
  people: [
    { targetId: 'celebrities', reasonKey: 'Compare everyday adult averages to verified public figures' },
    { targetId: 'apparel', reasonKey: 'See how boots, heels, and platforms modify stature' },
    { targetId: 'objects', reasonKey: 'Compare human standing height to doors and household objects' },
  ],
};

/**
 * Returns logically related category hubs for a given category.
 */
export function getRelatedCategories(
  categoryId: string,
  limit: number = 3,
  locale: Locale = 'en'
): CategoryRelation[] {
  const normId = categoryId.toLowerCase();
  const relations = CATEGORY_GRAPH[normId] || [];

  const results: CategoryRelation[] = [];

  for (const rel of relations) {
    if (results.length >= limit) break;
    const cat = getCategoryById(rel.targetId);
    if (!cat) continue;

    const localizedCat = getLocalizedCategory(cat, locale);
    results.push({
      id: cat.id,
      name: localizedCat.name,
      route: getSafeInternalUrl(cat.route, locale),
      description: localizedCat.description,
      badge: localizedCat.badge,
      reason: rel.reasonKey,
    });
  }

  return results;
}
