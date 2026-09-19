import { ANIMALS_METADATA } from './animals.ts';
import { OBJECTS_METADATA } from './objects.ts';
import { SPORTS_METADATA } from './sports.ts';
import { PLANTS_METADATA } from './plants.ts';
import { FICTIONAL_METADATA } from './fictional.ts';
import { APPAREL_METADATA } from './apparel.ts';
import { MALE_METADATA } from './male.ts';
import { FEMALE_METADATA } from './female.ts';
import type { EntityOverride } from './animals.ts';

export type { EntityOverride };

export const ALL_ENTITY_OVERRIDES: Record<string, EntityOverride> = {
  ...ANIMALS_METADATA,
  ...OBJECTS_METADATA,
  ...SPORTS_METADATA,
  ...PLANTS_METADATA,
  ...FICTIONAL_METADATA,
  ...APPAREL_METADATA,
  ...MALE_METADATA,
  ...FEMALE_METADATA,
};

export function getEntityOverride(id: string): EntityOverride | undefined {
  return ALL_ENTITY_OVERRIDES[id];
}
