import type { Locale } from '../../i18n/locales';
import type { CalculatorTranslationData } from './types';

import { enCalculator } from './en';
import { hiCalculator } from './hi';
import { esCalculator } from './es';
import { frCalculator } from './fr';
import { deCalculator } from './de';
import { ptCalculator } from './pt';
import { jaCalculator } from './ja';
import { koCalculator } from './ko';
import { arCalculator } from './ar';

const CALCULATOR_DATA: Record<Locale, CalculatorTranslationData> = {
  en: enCalculator,
  hi: hiCalculator,
  es: esCalculator,
  fr: frCalculator,
  de: deCalculator,
  pt: ptCalculator,
  ja: jaCalculator,
  ko: koCalculator,
  ar: arCalculator,
};

export function getCalculatorData(locale: Locale = 'en'): CalculatorTranslationData {
  return CALCULATOR_DATA[locale] || CALCULATOR_DATA.en;
}

export * from './types';
