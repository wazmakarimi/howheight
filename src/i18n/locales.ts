export const SUPPORTED_LOCALES = [
  'en',
  'hi',
  'es',
  'fr',
  'de',
  'pt',
  'ja',
  'ko',
  'ar',
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/**
 * Active locales with 100% complete translations ready for sitemap indexing.
 * Other locales are supported via fallback infrastructure.
 */
export const ACTIVE_INDEXABLE_LOCALES: Locale[] = ['en', 'hi'];

export interface LocaleInfo {
  code: Locale;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
  flag: string;
}

export const LOCALES: Record<Locale, LocaleInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    ogLocale: 'en_US',
    flag: '🇺🇸',
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    dir: 'ltr',
    ogLocale: 'hi_IN',
    flag: '🇮🇳',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    dir: 'ltr',
    ogLocale: 'es_ES',
    flag: '🇪🇸',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    dir: 'ltr',
    ogLocale: 'fr_FR',
    flag: '🇫🇷',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    dir: 'ltr',
    ogLocale: 'de_DE',
    flag: '🇩🇪',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    dir: 'ltr',
    ogLocale: 'pt_PT',
    flag: '🇵🇹',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    dir: 'ltr',
    ogLocale: 'ja_JP',
    flag: '🇯🇵',
  },
  ko: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    dir: 'ltr',
    ogLocale: 'ko_KR',
    flag: '🇰🇷',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    ogLocale: 'ar_AR',
    flag: '🇸🇦',
  },
};
