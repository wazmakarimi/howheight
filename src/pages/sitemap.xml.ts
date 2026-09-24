import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { CATEGORIES } from '../data/categories';
import { HUMANS } from '../data/humans';
import { ANIMALS } from '../data/animals';
import { OBJECTS } from '../data/objects';
import { CELEBRITIES } from '../data/celebrities';
import { COMPARISONS } from '../data/comparisons';
import { ASSET_REGISTRY } from '../data/assetRegistry';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../i18n/locales';
import { getLocalizedPath } from '../i18n/utils';

import { BLOG_ARTICLES } from '../data/blog';

interface SitemapEntry {
  loc: string;
  priority: string;
  changefreq: string;
  alternates: Array<{ hreflang: string; href: string }>;
}

export const GET: APIRoute = async () => {
  const baseUrl = SITE.siteUrl;
  const today = new Date().toISOString().split('T')[0];

  const allEntries: SitemapEntry[] = [];

  // ============================================================================
  // 1. MULTILINGUAL CORE & CATEGORY ROUTES (Available in all 9 supported locales)
  // ============================================================================
  const multilingualRoutes: Array<{ path: string; priority: string; changefreq: string }> = [
    // Static & Tool Routes
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/height-comparison/', priority: '0.98', changefreq: 'daily' },
    { path: '/compare/', priority: '0.95', changefreq: 'daily' },
    { path: '/blog/', priority: '0.92', changefreq: 'daily' },
    { path: '/height-comparison-calculator/', priority: '0.95', changefreq: 'weekly' },
    { path: '/height-comparison-visualizer/', priority: '0.95', changefreq: 'weekly' },
    { path: '/height-comparison-chart/', priority: '0.9', changefreq: 'weekly' },
    { path: '/size-comparison/', priority: '0.9', changefreq: 'weekly' },
    { path: '/height-comparison-couple/', priority: '0.9', changefreq: 'weekly' },
    { path: '/how-to-use/', priority: '0.85', changefreq: 'weekly' },
    { path: '/about/', priority: '0.7', changefreq: 'monthly' },

    // Master SEO Blog Articles
    ...BLOG_ARTICLES.map((art) => ({
      path: `/blog/${art.slug}/`,
      priority: '0.88',
      changefreq: 'weekly',
    })),

    // Canonical Category Hub Routes (Filter out unverified/non-indexable categories)
    ...CATEGORIES.filter((cat) => cat.indexable !== false).map((cat) => ({
      path: cat.route,
      priority: '0.9',
      changefreq: 'weekly',
    })),

    // Curated Comparison Hubs
    ...COMPARISONS.filter((comp) => comp.indexable !== false).map((comp) => ({
      path: `/compare/${comp.slug}/`,
      priority: '0.85',
      changefreq: 'weekly',
    })),
  ];

  for (const route of multilingualRoutes) {
    // Generate valid reciprocal alternates for all supported locales
    const alternates = SUPPORTED_LOCALES.map((locale) => ({
      hreflang: locale,
      href: `${baseUrl}${getLocalizedPath(route.path, locale)}`,
    }));

    // Add x-default pointing to canonical English URL
    alternates.push({
      hreflang: 'x-default',
      href: `${baseUrl}${getLocalizedPath(route.path, DEFAULT_LOCALE)}`,
    });

    for (const locale of SUPPORTED_LOCALES) {
      allEntries.push({
        loc: `${baseUrl}${getLocalizedPath(route.path, locale)}`,
        priority: locale === DEFAULT_LOCALE ? route.priority : (parseFloat(route.priority) * 0.95).toFixed(2),
        changefreq: route.changefreq,
        alternates,
      });
    }
  }

  // ============================================================================
  // 2. ENGLISH-ONLY ENTITY ROUTES (Strictly indexable, authoritative, no 404 alternates)
  // ============================================================================
  const plantEntities = ASSET_REGISTRY.filter(
    (a) => a.category === 'plants' && a.status === 'verified' && a.heightCm !== null && a.indexable !== false
  ).slice(0, 25);

  const sportsEntities = ASSET_REGISTRY.filter(
    (a) => a.category === 'sports' && a.status === 'verified' && a.heightCm !== null && a.indexable !== false
  ).slice(0, 25);

  const fictionalEntities = ASSET_REGISTRY.filter(
    (a) => a.category === 'fictional' && a.status === 'verified' && a.heightCm !== null && a.indexable !== false
  ).slice(0, 25);

  const englishOnlyRoutes: Array<{ path: string; priority: string; changefreq: string }> = [
    // Verified Celebrities
    ...CELEBRITIES.filter((c) => c.indexable !== false).map((c) => ({
      path: `/celebrity-height/${c.slug}/`,
      priority: '0.8',
      changefreq: 'monthly',
    })),

    // Verified Humans / Percentiles
    ...HUMANS.filter((h) => h.indexable !== false).map((h) => ({
      path: `/people-height-comparison/${h.slug}/`,
      priority: '0.8',
      changefreq: 'monthly',
    })),

    // Verified Animals
    ...ANIMALS.filter((a) => a.indexable !== false).map((a) => ({
      path: `/animal-height-comparison/${a.id}/`,
      priority: '0.8',
      changefreq: 'monthly',
    })),

    // Verified Objects
    ...OBJECTS.filter((o) => o.indexable !== false).map((o) => ({
      path: `/object-height-comparison/${o.id}/`,
      priority: '0.8',
      changefreq: 'monthly',
    })),

    // Verified Plants
    ...plantEntities.map((p) => ({
      path: `/plant-height-comparison/${p.slug}/`,
      priority: '0.8',
      changefreq: 'monthly',
    })),

    // Verified Sports
    ...sportsEntities.map((s) => ({
      path: `/sports-height-comparison/${s.slug}/`,
      priority: '0.8',
      changefreq: 'monthly',
    })),

    // Verified Fictional Characters
    ...fictionalEntities.map((f) => ({
      path: `/fictional-character-height/${f.slug}/`,
      priority: '0.8',
      changefreq: 'monthly',
    })),

    // Authoritative Legal & Trust Pages (English Canonical)
    { path: '/privacy/', priority: '0.5', changefreq: 'yearly' },
    { path: '/terms/', priority: '0.5', changefreq: 'yearly' },
    { path: '/contact/', priority: '0.6', changefreq: 'monthly' },
  ];

  for (const route of englishOnlyRoutes) {
    allEntries.push({
      loc: `${baseUrl}${route.path}`,
      priority: route.priority,
      changefreq: route.changefreq,
      alternates: [], // Omit alternates for single-language entity pages to avoid 404 traps
    });
  }

  // ============================================================================
  // 3. XML SITEMAP RENDER
  // ============================================================================
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allEntries
  .map(
    (item) => `  <url>
    <loc>${item.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>${
      item.alternates.length > 0
        ? '\n' + item.alternates.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`).join('\n')
        : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
