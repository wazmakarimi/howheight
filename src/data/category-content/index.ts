import type { Locale } from '../../i18n/locales';
import type { CategoryLocaleContent } from './types';

/**
 * Localized category body content per locale. A locale whose entries are
 * missing simply falls back to the English base content in
 * getLocalizedCategory(). Kept synchronous because getLocalizedCategory is
 * called during static rendering.
 */
export type CategoryContentMap = Record<string, CategoryLocaleContent>;
import { CATEGORY_CONTENT_HI } from './hi';
import { CATEGORY_CONTENT_ES } from './es';
import { CATEGORY_CONTENT_FR } from './fr';
import { CATEGORY_CONTENT_DE } from './de';
import { CATEGORY_CONTENT_PT } from './pt';
import { CATEGORY_CONTENT_JA } from './ja';
import { CATEGORY_CONTENT_KO } from './ko';
import { CATEGORY_CONTENT_AR } from './ar';
import { CATEGORY_CONTENT_RU } from './ru';

const MAPS: Partial<Record<Locale, CategoryContentMap>> = {
  hi: CATEGORY_CONTENT_HI,
  es: CATEGORY_CONTENT_ES,
  fr: CATEGORY_CONTENT_FR,
  de: CATEGORY_CONTENT_DE,
  pt: CATEGORY_CONTENT_PT,
  ja: CATEGORY_CONTENT_JA,
  ko: CATEGORY_CONTENT_KO,
  ar: CATEGORY_CONTENT_AR,
  ru: CATEGORY_CONTENT_RU,
};

export function getCategoryContent(locale: Locale, categoryId: string): CategoryLocaleContent | undefined {
  if (locale === 'en') return undefined;
  return MAPS[locale]?.[categoryId];
}

export * from './types';
