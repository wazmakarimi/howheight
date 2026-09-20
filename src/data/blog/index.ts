import { BLOG_ARTICLES, BLOG_CATEGORIES } from './articles.ts';
import type { BlogArticle, BlogCategory, BlogCategoryMeta } from './types.ts';

export * from './types.ts';
export * from './articles.ts';

export function getAllArticles(): BlogArticle[] {
  return [...BLOG_ARTICLES].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  const clean = slug.toLowerCase().trim().replace(/^\/+|\/+$/g, '');
  return BLOG_ARTICLES.find((art) => art.slug === clean);
}

export function getArticlesByCategory(category: BlogCategory): BlogArticle[] {
  return getAllArticles().filter((art) => art.category === category);
}

export function getRelatedArticles(slug: string, limit = 3): BlogArticle[] {
  const current = getArticleBySlug(slug);
  if (!current) return getAllArticles().slice(0, limit);

  // First prioritize explicitly related slugs
  const explicitRelated = (current.relatedSlugs || [])
    .map((s) => getArticleBySlug(s))
    .filter((a): a is BlogArticle => Boolean(a) && a.slug !== slug);

  if (explicitRelated.length >= limit) {
    return explicitRelated.slice(0, limit);
  }

  // Next fill with same-category articles
  const sameCategory = getAllArticles().filter(
    (a) => a.category === current.category && a.slug !== slug && !explicitRelated.some((r) => r.slug === a.slug)
  );

  // Finally fill with other articles if needed
  const others = getAllArticles().filter(
    (a) => a.slug !== slug && !explicitRelated.some((r) => r.slug === a.slug) && !sameCategory.some((s) => s.slug === a.slug)
  );

  return [...explicitRelated, ...sameCategory, ...others].slice(0, limit);
}

export function getCategoryMeta(category: string): BlogCategoryMeta | undefined {
  return BLOG_CATEGORIES[category];
}
