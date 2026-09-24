import type { ComparisonEntityRef } from '../comparisons.ts';

export type BlogCategory =
  | 'guides'
  | 'celebrities'
  | 'sports'
  | 'animals'
  | 'objects'
  | 'anime'
  | 'scale';

export interface BlogCategoryMeta {
  id: BlogCategory;
  name: string;
  description: string;
  badgeColor: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  url?: string;
  sameAs?: string[];
}

export interface QuickAnswer {
  summary: string;
  keyTakeaway: string;
  dataPoints?: Array<{ label: string; value: string }>;
}

export interface ContentSection {
  id: string;
  heading: string;
  subheading?: string;
  paragraphs: string[];
  callout?: {
    title: string;
    text: string;
    type?: 'tip' | 'info' | 'stat';
  };
}

export interface SourceItem {
  title: string;
  url?: string;
  description: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  h1: string;
  description: string;
  category: BlogCategory;
  author: BlogAuthor;
  publishedDate: string;
  updatedDate: string;
  readingTimeMinutes: number;
  featuredImage?: string;
  quickAnswer: QuickAnswer;
  featuredEntities: ComparisonEntityRef[];
  toolActionTitle?: string;
  toolActionDescription?: string;
  comparisonTable?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  contentSections: ContentSection[];
  faq: Array<{ question: string; answer: string }>;
  sources: SourceItem[];
  relatedSlugs: string[];
}
