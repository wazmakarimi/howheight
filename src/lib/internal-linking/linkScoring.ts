import { COMPARISONS } from '../../data/comparisons';

export interface ScoreInput {
  targetCategory: string;
  targetSubcategory?: string;
  targetHeightCm: number;
  targetTags?: string[];
  targetProfession?: string;
  targetCountry?: string;
  targetFranchise?: string;
  targetId: string;

  candidateCategory: string;
  candidateSubcategory?: string;
  candidateHeightCm: number;
  candidateTags?: string[];
  candidateProfession?: string;
  candidateCountry?: string;
  candidateFranchise?: string;
  candidateId: string;
}

/**
 * Calculates a relevance score between two entities based on topical and physical attributes.
 * Returns a score between 0 and 150+.
 */
export function calculateRelevanceScore(input: ScoreInput): number {
  if (input.targetId === input.candidateId) {
    return -1; // Never link to self
  }

  let score = 0;

  // 1. Same Category (+25)
  if (input.targetCategory && input.candidateCategory && input.targetCategory === input.candidateCategory) {
    score += 25;
  }

  // 2. Same Subcategory or Profession (+20)
  if (
    (input.targetSubcategory && input.candidateSubcategory && input.targetSubcategory === input.candidateSubcategory) ||
    (input.targetProfession && input.candidateProfession && input.targetProfession === input.candidateProfession)
  ) {
    score += 20;
  }

  // 3. Same Franchise / Specific Tag (+35)
  if (input.targetFranchise && input.candidateFranchise && input.targetFranchise === input.candidateFranchise) {
    score += 35;
  } else if (input.targetTags && input.candidateTags && input.targetTags.length > 0 && input.candidateTags.length > 0) {
    const commonTags = input.targetTags.filter((t) => input.candidateTags!.includes(t));
    if (commonTags.length > 0) {
      score += Math.min(commonTags.length * 12, 36);
    }
  }

  // 4. Same Country / Origin (+10)
  if (input.targetCountry && input.candidateCountry && input.targetCountry === input.candidateCountry) {
    score += 10;
  }

  // 5. Height Proximity (+5 to +20)
  if (input.targetHeightCm > 0 && input.candidateHeightCm > 0) {
    const diff = Math.abs(input.targetHeightCm - input.candidateHeightCm);
    if (diff <= 5) {
      score += 20;
    } else if (diff <= 10) {
      score += 15;
    } else if (diff <= 20) {
      score += 10;
    } else if (diff <= 35) {
      score += 5;
    }
  }

  // 6. Co-appearance in existing curated comparison (+30)
  const hasSharedComparison = COMPARISONS.some((comp) => {
    const ids = comp.items.map((it) => it.id);
    return ids.includes(input.targetId) && ids.includes(input.candidateId);
  });
  if (hasSharedComparison) {
    score += 30;
  }

  return score;
}
