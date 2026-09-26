import type { Locale } from './locales';

export interface LocalizedEntityMeta {
  name: string;
  shortBio?: string;
}

/**
 * Curated localized overrides for well-known figures.
 * If an entity is not listed or has no entry for a locale, fallback to the canonical entity name.
 */
export const ENTITY_TRANSLATIONS: Record<string, Partial<Record<Locale, LocalizedEntityMeta>>> = {
  'tom-cruise': {
    en: { name: 'Tom Cruise' },
    hi: { name: 'टॉम क्रूज़' },
    es: { name: 'Tom Cruise' },
    ru: { name: 'Том Круз' },
  },
  'dwayne-johnson': {
    en: { name: 'Dwayne Johnson' },
    hi: { name: 'ड्वेन जॉनसन' },
    ru: { name: 'Дуэйн Джонсон' },
  },
  'leonardo-dicaprio': {
    en: { name: 'Leonardo DiCaprio' },
    hi: { name: 'लियोनार्डो डिकैप्रियो' },
    ru: { name: 'Леонардо Ди Каприо' },
  },
  'virat-kohli': {
    en: { name: 'Virat Kohli' },
    hi: { name: 'विराट कोहली' },
    ru: { name: 'Вират Кохли' },
  },
  'shah-rukh-khan': {
    en: { name: 'Shah Rukh Khan' },
    hi: { name: 'शाहरुख खान' },
    ru: { name: 'Шахрукх Кхан' },
  },
  'cristiano-ronaldo': {
    en: { name: 'Cristiano Ronaldo' },
    hi: { name: 'क्रिस्टियानो रोनाल्डो' },
    ru: { name: 'Криштиану Роналду' },
  },
  'lionel-messi': {
    en: { name: 'Lionel Messi' },
    hi: { name: 'लियोनेल मेस्सी' },
    ru: { name: 'Лионель Месси' },
  },
  'goku': {
    en: { name: 'Goku' },
    hi: { name: 'गोकू' },
    ru: { name: 'Гоку' },
  },
  'vegeta': {
    en: { name: 'Vegeta' },
    hi: { name: 'वेजीता' },
    ru: { name: 'Веджета' },
  },
  'naruto-uzumaki': {
    en: { name: 'Naruto Uzumaki' },
    hi: { name: 'नारुतो उज़ुमाकी' },
    ru: { name: 'Наруто Удзумаки' },
  },
  'luffy': {
    en: { name: 'Monkey D. Luffy' },
    hi: { name: 'मंकी डी. लफ़ी' },
    ru: { name: 'Манки Д. Луффи' },
  },
};

export function getLocalizedEntityName(slugOrId: string, fallbackName: string, locale: Locale): string {
  const entity = ENTITY_TRANSLATIONS[slugOrId];
  if (entity && entity[locale]?.name) {
    return entity[locale]!.name;
  }
  return fallbackName;
}
