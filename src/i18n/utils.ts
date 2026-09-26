import { DEFAULT_LOCALE, LOCALES, SUPPORTED_LOCALES, type Locale } from './locales';
import { SITE } from '../config/site';
import { CATEGORIES, type CategoryDefinition } from '../data/categories';
import { COMPARISONS } from '../data/comparisons';

// Import English dictionaries
import enCommon from './en/common';
import enHome from './en/home';
import enComparison from './en/comparison';
import enCategories from './en/categories';
import enSeo from './en/seo';

// Import Hindi dictionaries
import hiCommon from './hi/common';
import hiHome from './hi/home';
import hiComparison from './hi/comparison';
import hiCategories from './hi/categories';
import hiSeo from './hi/seo';

// Import other locales
import esCommon from './es/common';
import esHome from './es/home';
import esComparison from './es/comparison';
import esCategories from './es/categories';
import esSeo from './es/seo';

import frCommon from './fr/common';
import frHome from './fr/home';
import frComparison from './fr/comparison';
import frCategories from './fr/categories';
import frSeo from './fr/seo';

import deCommon from './de/common';
import deHome from './de/home';
import deComparison from './de/comparison';
import deCategories from './de/categories';
import deSeo from './de/seo';

import ptCommon from './pt/common';
import ptHome from './pt/home';
import ptComparison from './pt/comparison';
import ptCategories from './pt/categories';
import ptSeo from './pt/seo';

import jaCommon from './ja/common';
import jaHome from './ja/home';
import jaComparison from './ja/comparison';
import jaCategories from './ja/categories';
import jaSeo from './ja/seo';

import koCommon from './ko/common';
import koHome from './ko/home';
import koComparison from './ko/comparison';
import koCategories from './ko/categories';
import koSeo from './ko/seo';

import arCommon from './ar/common';
import arHome from './ar/home';
import arComparison from './ar/comparison';
import arCategories from './ar/categories';
import arSeo from './ar/seo';

import ruCommon from './ru/common';
import ruHome from './ru/home';
import ruComparison from './ru/comparison';
import ruCategories from './ru/categories';
import ruSeo from './ru/seo';

type Dictionary = Record<string, string>;

const DICTIONARIES: Record<Locale, Dictionary> = {
  en: { ...enCommon, ...enHome, ...enComparison, ...enCategories, ...enSeo },
  hi: { ...hiCommon, ...hiHome, ...hiComparison, ...hiCategories, ...hiSeo },
  es: { ...esCommon, ...esHome, ...esComparison, ...esCategories, ...esSeo },
  fr: { ...frCommon, ...frHome, ...frComparison, ...frCategories, ...frSeo },
  de: { ...deCommon, ...deHome, ...deComparison, ...deCategories, ...deSeo },
  pt: { ...ptCommon, ...ptHome, ...ptComparison, ...ptCategories, ...ptSeo },
  ja: { ...jaCommon, ...jaHome, ...jaComparison, ...jaCategories, ...jaSeo },
  ko: { ...koCommon, ...koHome, ...koComparison, ...koCategories, ...koSeo },
  ar: { ...arCommon, ...arHome, ...arComparison, ...arCategories, ...arSeo },
  ru: { ...ruCommon, ...ruHome, ...ruComparison, ...ruCategories, ...ruSeo },
};

/**
 * Extracts locale from a URL pathname or URL object.
 * Returns default locale (en) if no prefix is present or recognized.
 */
export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const parts = pathname.split('/').filter(Boolean);
  const candidate = parts[0] as Locale;
  if (candidate && SUPPORTED_LOCALES.includes(candidate)) {
    return candidate;
  }
  return DEFAULT_LOCALE;
}

/**
 * Strips any leading locale prefix from a pathname.
 * e.g. /hi/celebrity-height/ -> /celebrity-height/
 */
export function stripLocaleFromPath(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && SUPPORTED_LOCALES.includes(parts[0] as Locale)) {
    const remaining = parts.slice(1).join('/');
    return remaining ? `/${remaining}/` : '/';
  }
  const clean = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return clean.startsWith('/') ? clean : `/${clean}`;
}

/**
 * Produces a localized path for a given target locale.
 * Default locale ('en') gets no prefix: /about/
 * Non-default locales get prefix: /hi/about/
 */
export function getLocalizedPath(path: string, targetLocale: Locale): string {
  const cleanPath = stripLocaleFromPath(path);
  if (targetLocale === DEFAULT_LOCALE) {
    return cleanPath;
  }
  const pathWithoutLeadingSlash = cleanPath.replace(/^\//, '');
  return `/${targetLocale}/${pathWithoutLeadingSlash}`;
}

import { BLOG_ARTICLES } from '../data/blog';

const STATIC_LOCALIZED_ROUTES = new Set([
  '',
  'blog',
  'compare',
  'height-comparison',
  'height-comparison-calculator',
  'height-comparison-visualizer',
  'height-comparison-chart',
  'height-difference-calculator',
  'size-comparison',
  'height-comparison-couple',
  'how-to-use',
  'about',
]);

const comparisonSlugsSet = new Set(COMPARISONS.filter((c) => c.indexable !== false).map((c) => c.slug));
const blogSlugsSet = new Set(BLOG_ARTICLES.map((a) => a.slug));
const categorySlugsSet = new Set(CATEGORIES.map((c) => c.slug));
const categoryRoutesSet = new Set(CATEGORIES.map((c) => c.route.replace(/^\/|\/$/g, '')));

/**
 * Checks if a route path is supported in localized subtrees (e.g. /hi/...).
 * Individual entity profile pages currently exist only on the root locale (en),
 * whereas categories, comparisons, tools, and info pages exist in all locales.
 */
export function isRouteLocalized(path: string): boolean {
  const clean = stripLocaleFromPath(path).replace(/^\/|\/$/g, '');

  if (STATIC_LOCALIZED_ROUTES.has(clean)) {
    return true;
  }

  if (categorySlugsSet.has(clean) || categoryRoutesSet.has(clean)) {
    return true;
  }

  if (clean.startsWith('compare/')) {
    const compSlug = clean.replace(/^compare\//, '');
    if (comparisonSlugsSet.has(compSlug)) {
      return true;
    }
  }

  if (clean.startsWith('blog/')) {
    const articleSlug = clean.replace(/^blog\//, '');
    if (blogSlugsSet.has(articleSlug)) {
      return true;
    }
  }

  return false;
}

/**
 * Returns alternate hreflang links for a given pathname including x-default.
 * If the page is not localized across language subtrees (e.g. English-only entity pages),
 * an empty array is returned to prevent emitting broken 404 links to search engine bots.
 */
export function getAlternateLocaleLinks(pathname: string) {
  const cleanPath = stripLocaleFromPath(pathname);

  // If this route is not supported in localized directories, omit hreflangs (prevents 404 traps)
  if (!isRouteLocalized(cleanPath)) {
    return [];
  }

  const baseUrl = SITE.siteUrl;

  const links = SUPPORTED_LOCALES.map((locale) => {
    const localized = getLocalizedPath(cleanPath, locale);
    return {
      locale,
      hreflang: locale,
      href: `${baseUrl}${localized}`,
    };
  });

  // Add x-default pointing to default English URL
  links.push({
    locale: 'en',
    hreflang: 'x-default',
    href: `${baseUrl}${getLocalizedPath(cleanPath, DEFAULT_LOCALE)}`,
  });

  return links;
}

/**
 * Translates a key for a given locale with fallback to English.
 * Supports string interpolation for {param} tokens.
 */
export function t(locale: Locale, key: string, params?: Record<string, string | number>): string {
  const dict = DICTIONARIES[locale] || DICTIONARIES[DEFAULT_LOCALE];
  let text = dict[key];

  if (!text && locale !== DEFAULT_LOCALE) {
    text = DICTIONARIES[DEFAULT_LOCALE][key];
  }

  if (!text) {
    return key;
  }

  if (params) {
    for (const [paramKey, paramVal] of Object.entries(params)) {
      text = text.replaceAll(`{${paramKey}}`, String(paramVal));
    }
  }

  return text;
}

/**
 * Checks if the locale requires RTL (Right-to-Left) reading direction.
 */
export function isRTL(locale: Locale): boolean {
  return LOCALES[locale]?.dir === 'rtl';
}

/**
 * Localizes category information based on active locale.
 */
export function getLocalizedCategory(category: CategoryDefinition, locale: Locale): CategoryDefinition {
  if (locale === DEFAULT_LOCALE) return category;

  const localizedName = t(locale, `cat.${category.id}.name`);
  const localizedTitle = t(locale, `cat.${category.id}.title`);
  const localizedDesc = t(locale, `cat.${category.id}.description`);
  const localizedBadge = t(locale, `cat.${category.id}.badge`);

  return {
    ...category,
    name: localizedName !== `cat.${category.id}.name` ? localizedName : category.name,
    title: localizedTitle !== `cat.${category.id}.title` ? localizedTitle : category.title,
    description: localizedDesc !== `cat.${category.id}.description` ? localizedDesc : category.description,
    badge: localizedBadge !== `cat.${category.id}.badge` ? localizedBadge : category.badge,
    h1: localizedName !== `cat.${category.id}.name` ? `${localizedName} ${t(locale, 'nav.compare')}` : category.h1,
  };
}

/**
 * Formats a measurement in centimeters according to locale conventions.
 */
export function formatMeasurement(heightCm: number, locale: Locale): {
  cmText: string;
  ftInText: string;
  display: string;
} {
  const totalInches = heightCm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  const cmUnit = t(locale, 'unit.cm');
  const ftUnit = t(locale, 'unit.ft');
  const inUnit = t(locale, 'unit.in');

  const cmText = `${heightCm} ${cmUnit}`;
  const ftInText = `${feet} ${ftUnit} ${inches} ${inUnit}`;

  return {
    cmText,
    ftInText,
    display: `${cmText} (${ftInText})`,
  };
}
