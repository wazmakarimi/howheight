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
  },
  'dwayne-johnson': {
    en: { name: 'Dwayne Johnson' },
    hi: { name: 'ड्वेन जॉनसन' },
  },
  'leonardo-dicaprio': {
    en: { name: 'Leonardo DiCaprio' },
    hi: { name: 'लियोनार्डो डिकैप्रियो' },
  },
  'virat-kohli': {
    en: { name: 'Virat Kohli' },
    hi: { name: 'विराट कोहली' },
  },
  'shah-rukh-khan': {
    en: { name: 'Shah Rukh Khan' },
    hi: { name: 'शाहरुख खान' },
  },
  'cristiano-ronaldo': {
    en: { name: 'Cristiano Ronaldo' },
    hi: { name: 'क्रिस्टियानो रोनाल्डो' },
  },
  'lionel-messi': {
    en: { name: 'Lionel Messi' },
    hi: { name: 'लियोनेल मेस्सी' },
  },
  'goku': {
    en: { name: 'Goku' },
    hi: { name: 'गोकू' },
  },
  'vegeta': {
    en: { name: 'Vegeta' },
    hi: { name: 'वेजीता' },
  },
  'naruto-uzumaki': {
    en: { name: 'Naruto Uzumaki' },
    hi: { name: 'नारुतो उज़ुमाकी' },
  },
  'luffy': {
    en: { name: 'Monkey D. Luffy' },
    hi: { name: 'मंकी डी. लफ़ी' },
  },
};

export function getLocalizedEntityName(slugOrId: string, fallbackName: string, locale: Locale): string {
  const entity = ENTITY_TRANSLATIONS[slugOrId];
  if (entity && entity[locale]?.name) {
    return entity[locale]!.name;
  }
  return fallbackName;
}
