import { CELEBRITIES } from '../../data/celebrities';
import { ANIMALS } from '../../data/animals';
import { OBJECTS } from '../../data/objects';
import { HUMANS } from '../../data/humans';
import { ASSET_REGISTRY } from '../../data/assetRegistry';
import { cmToFeetInches } from '../height';
import { getLocalizedEntityName, t } from '../../i18n';
import type { Locale } from '../../i18n/locales';
import { calculateRelevanceScore } from './linkScoring';
import { getEntityRoute, getSafeInternalUrl } from './routeRegistry';
import type { RelatedEntityResult } from './types';

export interface TargetEntityProfile {
  id: string;
  category: string;
  name: string;
  heightCm: number;
  subcategory?: string;
  profession?: string;
  country?: string;
  franchise?: string;
  tags?: string[];
}

interface UniversalCandidate {
  id: string;
  slug: string;
  category: string;
  name: string;
  heightCm: number;
  subcategory?: string;
  profession?: string;
  country?: string;
  franchise?: string;
  tags?: string[];
  publicPath?: string;
}

/**
 * Builds candidate pool depending on target entity category.
 */
function getCandidates(category: string): UniversalCandidate[] {
  const normCat = category.toLowerCase();

  if (normCat === 'celebrities' || normCat === 'celebrity') {
    return CELEBRITIES.map((c) => ({
      id: c.id,
      slug: c.slug,
      category: 'celebrity',
      name: c.name,
      heightCm: c.heightCm,
      profession: c.profession,
      country: c.country,
      tags: c.aliases || [],
    }));
  }

  if (normCat === 'animals' || normCat === 'animal') {
    return ANIMALS.map((a) => ({
      id: a.id,
      slug: a.id,
      category: 'animal',
      name: a.name,
      heightCm: a.typicalHeightCm,
      subcategory: a.subcategory,
      tags: [a.subcategory, a.measurementType],
    }));
  }

  if (normCat === 'objects' || normCat === 'object') {
    return OBJECTS.map((o) => ({
      id: o.id,
      slug: o.id,
      category: 'object',
      name: o.name,
      heightCm: o.typicalHeightCm,
      subcategory: o.subcategory,
      tags: [o.subcategory],
    }));
  }

  if (normCat === 'plants' || normCat === 'plant') {
    return ASSET_REGISTRY.filter((a) => a.category === 'plants' && a.status === 'verified' && a.heightCm !== null).map(
      (p) => ({
        id: p.id,
        slug: p.slug,
        category: 'plants',
        name: p.name,
        heightCm: p.heightCm!,
        tags: p.tags,
        publicPath: p.publicPath,
      })
    );
  }

  if (normCat === 'sports' || normCat === 'sport') {
    return ASSET_REGISTRY.filter((a) => a.category === 'sports' && a.status === 'verified' && a.heightCm !== null).map(
      (s) => ({
        id: s.id,
        slug: s.slug,
        category: 'sports',
        name: s.name,
        heightCm: s.heightCm!,
        tags: s.tags,
        publicPath: s.publicPath,
      })
    );
  }

  if (normCat === 'fictional' || normCat === 'fiction') {
    return ASSET_REGISTRY.filter((a) => a.category === 'fictional' && a.status === 'verified' && a.heightCm !== null).map(
      (f) => ({
        id: f.id,
        slug: f.slug,
        category: 'fictional',
        name: f.name,
        heightCm: f.heightCm!,
        tags: f.tags,
        publicPath: f.publicPath,
      })
    );
  }

  if (normCat === 'people' || normCat === 'human' || normCat === 'male' || normCat === 'female') {
    return HUMANS.map((h) => ({
      id: h.slug,
      slug: h.slug,
      category: 'human',
      name: h.name,
      heightCm: h.typicalHeightCm,
      subcategory: h.gender,
      tags: [h.gender],
    }));
  }

  // Fallback: return verified assets matching category
  return ASSET_REGISTRY.filter((a) => a.category === normCat && a.status === 'verified' && a.heightCm !== null).map(
    (item) => ({
      id: item.id,
      slug: item.slug,
      category: item.category,
      name: item.name,
      heightCm: item.heightCm!,
      tags: item.tags,
      publicPath: item.publicPath,
    })
  );
}

/**
 * Returns ranked, validated related entities for a given target entity.
 */
export function getRelatedEntities(
  target: TargetEntityProfile,
  limit: number = 6,
  locale: Locale = 'en'
): RelatedEntityResult[] {
  const candidates = getCandidates(target.category);

  // Score each candidate
  const scored = candidates
    .filter((c) => c.id !== target.id)
    .map((candidate) => {
      const score = calculateRelevanceScore({
        targetCategory: target.category,
        targetSubcategory: target.subcategory,
        targetHeightCm: target.heightCm,
        targetTags: target.tags,
        targetProfession: target.profession,
        targetCountry: target.country,
        targetFranchise: target.franchise,
        targetId: target.id,

        candidateCategory: candidate.category,
        candidateSubcategory: candidate.subcategory,
        candidateHeightCm: candidate.heightCm,
        candidateTags: candidate.tags,
        candidateProfession: candidate.profession,
        candidateCountry: candidate.country,
        candidateFranchise: candidate.franchise,
        candidateId: candidate.id,
      });

      return {
        candidate,
        score,
        heightDiff: Math.abs(candidate.heightCm - target.heightCm),
      };
    })
    .filter((item) => item.score > 0);

  // Deterministic sort: 1) score descending, 2) heightDiff ascending, 3) name ascending
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.heightDiff !== b.heightDiff) return a.heightDiff - b.heightDiff;
    return a.candidate.name.localeCompare(b.candidate.name);
  });

  const results: RelatedEntityResult[] = [];

  for (const item of scored) {
    if (results.length >= limit) break;

    const rawRoute = getEntityRoute(item.candidate.category, item.candidate.slug || item.candidate.id);
    if (!rawRoute) continue; // Skip if no valid route exists

    const localizedUrl = getSafeInternalUrl(rawRoute, locale);
    const localizedName = getLocalizedEntityName(item.candidate.id, item.candidate.name, locale);
    const ftIn = cmToFeetInches(item.candidate.heightCm);

    results.push({
      id: item.candidate.id,
      slug: item.candidate.slug,
      name: localizedName,
      category: item.candidate.category,
      subcategory: item.candidate.subcategory || item.candidate.profession,
      heightCm: item.candidate.heightCm,
      formattedHeight: `${item.candidate.heightCm} cm (${ftIn.formatted})`,
      url: localizedUrl,
      score: item.score,
      imagePath: item.candidate.publicPath,
      anchorText: `${localizedName} ${t(locale, 'nav.compare')}`,
    });
  }

  return results;
}
