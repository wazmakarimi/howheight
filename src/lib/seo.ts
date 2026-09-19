import { SITE } from '../config/site';

export interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Builds a normalized canonical URL with consistent trailing slashes.
 */
export function buildCanonicalUrl(path: string): string {
  if (!path || path === '/') {
    return `${SITE.siteUrl}/`;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const normalized = cleanPath.endsWith('/') ? cleanPath : `${cleanPath}/`;
  return `${SITE.siteUrl}${normalized}`;
}

/**
 * Generates Schema.org BreadcrumbList JSON-LD object.
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE.siteUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
    })),
  };
}

/**
 * Generates Schema.org FAQPage JSON-LD object.
 */
export function buildFaqSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates WebApplication Schema.org JSON-LD object.
 */
export function buildWebAppSchema(canonicalUrl: string, title?: string, description?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: title || SITE.name,
    url: canonicalUrl,
    description: description || SITE.defaultDescription,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All modern web browsers',
    browserRequirements: 'Requires JavaScript enabled for interactive visual scaling',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export * from './seo/site';
