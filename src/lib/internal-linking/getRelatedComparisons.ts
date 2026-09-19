import { COMPARISONS, type ComparisonDefinition, resolveComparisonItems } from '../../data/comparisons';
import { getLocalizedEntityName, t } from '../../i18n';
import type { Locale } from '../../i18n/locales';
import { getSafeInternalUrl } from './routeRegistry';
import type { RelatedComparisonResult } from './types';

export interface ComparisonQueryOptions {
  entityId?: string;
  category?: string;
  excludeSlug?: string;
  limit?: number;
  locale?: Locale;
}

/**
 * Returns ranked, valid curated comparisons for an entity, comparison, or category.
 */
export function getRelatedComparisons(options: ComparisonQueryOptions): RelatedComparisonResult[] {
  const { entityId, category, excludeSlug, limit = 6, locale = 'en' } = options;

  const scored = COMPARISONS.filter((comp) => comp.indexable !== false && comp.slug !== excludeSlug)
    .map((comp) => {
      let score = 0;
      const itemIds = comp.items.map((i) => i.id);
      const itemCats = comp.items.map((i) => i.category);

      // 1. Exact entity match (+50)
      if (entityId && itemIds.includes(entityId)) {
        score += 50;
      }

      // 2. Target category match (+20)
      if (category && itemCats.some((c) => c === category || (category === 'celebrities' && c === 'celebrity'))) {
        score += 20;
      }

      // 3. Base relevance for being an approved curated matchup (+10)
      score += 10;

      return {
        comp,
        score,
      };
    })
    .filter((item) => item.score > 0);

  // Deterministic sort: highest score first, then alphabetical slug
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.comp.slug.localeCompare(b.comp.slug);
  });

  const selected = scored.slice(0, limit);

  return selected.map(({ comp, score }) => {
    const preloaded = resolveComparisonItems(comp.items);
    const itemA = preloaded[0];
    const itemB = preloaded[1];

    const nameA = itemA ? getLocalizedEntityName(itemA.id, itemA.name, locale) : '';
    const nameB = itemB ? getLocalizedEntityName(itemB.id, itemB.name, locale) : '';
    const localizedH1 = nameA && nameB ? `${nameA} vs ${nameB}` : comp.h1;

    return {
      slug: comp.slug,
      title: comp.title,
      h1: localizedH1,
      description: comp.description,
      url: getSafeInternalUrl(`/compare/${comp.slug}/`, locale),
      items: preloaded.map((item) => ({
        id: item.id,
        name: getLocalizedEntityName(item.id, item.name, locale),
        heightCm: item.heightCm,
      })),
      score,
      badge: t(locale, 'section.curatedMatchup'),
      anchorText: `${localizedH1} ${t(locale, 'nav.compare')}`,
    };
  });
}
