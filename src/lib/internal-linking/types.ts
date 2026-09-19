import type { Locale } from '../../i18n/locales';
import type { EntityCategory } from '../constants';

export interface InternalLinkItem {
  title: string;
  url: string;
  subtitle?: string;
  tag?: string;
  category?: string;
  heightCm?: number;
  imperialHeight?: string;
  imagePath?: string;
  score?: number;
}

export interface RelatedEntityResult {
  id: string;
  slug: string;
  name: string;
  category: EntityCategory | string;
  subcategory?: string;
  heightCm: number;
  formattedHeight: string;
  url: string;
  score: number;
  imagePath?: string;
  anchorText: string;
}

export interface RelatedComparisonResult {
  slug: string;
  title: string;
  h1: string;
  description: string;
  url: string;
  items: Array<{
    id: string;
    name: string;
    heightCm: number;
  }>;
  score: number;
  badge?: string;
  anchorText: string;
}

export interface CategoryRelation {
  id: string;
  name: string;
  route: string;
  description: string;
  badge: string;
  reason: string;
}

export interface ScoredCandidate {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  heightCm: number;
  score: number;
  tags?: string[];
  publicPath?: string;
}
