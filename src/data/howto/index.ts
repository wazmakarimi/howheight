import type { Locale } from '../../i18n/locales';
import type { HowToGuideData } from './types';
import { enHowToGuide } from './en';
import { hiHowToGuide } from './hi';
import { esHowToGuide } from './es';
import { frHowToGuide } from './fr';
import { deHowToGuide } from './de';
import { ptHowToGuide } from './pt';
import { jaHowToGuide } from './ja';
import { koHowToGuide } from './ko';
import { arHowToGuide } from './ar';

export * from './types';

const HOWTO_GUIDES: Record<Locale, HowToGuideData> = {
  en: enHowToGuide,
  hi: hiHowToGuide,
  es: esHowToGuide,
  fr: frHowToGuide,
  de: deHowToGuide,
  pt: ptHowToGuide,
  ja: jaHowToGuide,
  ko: koHowToGuide,
  ar: arHowToGuide,
};

export function getHowToGuide(locale: Locale): HowToGuideData {
  return HOWTO_GUIDES[locale] || HOWTO_GUIDES.en;
}
