/**
 * Centralized SEO Environment & Domain Hostname Authority: HowHeight.org
 *
 * Production Domain (Authoritative, Indexable):
 *   https://howheight.org/
 *
 * Preview / Cloudflare Pages Subdomains (Non-indexable):
 *   https://howheight.pages.dev/
 *   https://*.pages.dev/
 */

import { SUPPORTED_LOCALES, DEFAULT_LOCALE, type Locale } from '../../i18n/locales';

export const PRODUCTION_DOMAIN = 'howheight.org';
export const PRODUCTION_ORIGIN = 'https://howheight.org';
export const PREVIEW_DOMAIN_SUFFIX = '.pages.dev';

/**
 * Checks if a hostname matches the official production domain (howheight.org or www.howheight.org).
 */
export function isProductionHost(hostname?: string): boolean {
  if (!hostname) return true;
  const cleanHost = hostname.toLowerCase().trim();
  return cleanHost === PRODUCTION_DOMAIN || cleanHost === `www.${PRODUCTION_DOMAIN}`;
}

/**
 * Checks if a hostname belongs to Cloudflare Pages preview/subdomains (*.pages.dev).
 */
export function isPreviewHost(hostname?: string): boolean {
  if (!hostname) return false;
  const cleanHost = hostname.toLowerCase().trim();
  return cleanHost === 'howheight.pages.dev' || cleanHost.endsWith(PREVIEW_DOMAIN_SUFFIX);
}

/**
 * Determines whether the current hostname environment is permitted to be indexed.
 * Production domain is always indexable; preview / pages.dev hostnames are non-indexable.
 */
export function isIndexableHost(hostname?: string): boolean {
  if (!hostname) return true;
  return isProductionHost(hostname) && !isPreviewHost(hostname);
}

/**
 * Strips any leading locale prefix from a pathname to avoid duplicated locales.
 */
export function stripLocaleFromPath(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && (SUPPORTED_LOCALES as readonly string[]).includes(parts[0])) {
    const remaining = parts.slice(1).join('/');
    return remaining ? `/${remaining}/` : '/';
  }
  const clean = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return clean.startsWith('/') ? clean : `/${clean}`;
}

/**
 * Generates an absolute production canonical URL for any pathname and optional locale.
 * - Always points to the authoritative production origin: https://howheight.org
 * - Automatically strips tracking / query parameters and URL fragments.
 * - Adheres strictly to the project's trailing-slash policy (always ends with '/').
 *
 * Examples:
 *   getCanonicalUrl('/celebrity-height/brad-pitt/?utm_source=test')
 *   -> 'https://howheight.org/celebrity-height/brad-pitt/'
 *
 *   getCanonicalUrl('/compare/', 'hi')
 *   -> 'https://howheight.org/hi/compare/'
 */
export function getCanonicalUrl(pathname: string, locale?: Locale): string {
  // Strip any query parameters (?...) or hash fragments (#...)
  const cleanPath = pathname.split('?')[0].split('#')[0];
  const unlocalized = stripLocaleFromPath(cleanPath);

  let finalPath = unlocalized;
  if (locale && locale !== DEFAULT_LOCALE) {
    const pathWithoutLeadingSlash = unlocalized.replace(/^\//, '');
    finalPath = `/${locale}/${pathWithoutLeadingSlash}`;
  }

  const normalized = finalPath.endsWith('/') ? finalPath : `${finalPath}/`;
  return `${PRODUCTION_ORIGIN}${normalized.startsWith('/') ? normalized : `/${normalized}`}`;
}
