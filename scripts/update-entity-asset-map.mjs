import fs from 'fs';
import path from 'path';

// 1. Read existing entity asset map
const mapPath = 'src/data/entityAssetMap.ts';
const mapContent = fs.readFileSync(mapPath, 'utf8');

// Parse ENTITY_ASSET_MAP from file
const jsonMatch = mapContent.match(/export const ENTITY_ASSET_MAP: Record<string, EntityMapping> = (\{[\s\S]*\});\s*$/);
if (!jsonMatch) {
  console.error('Could not extract ENTITY_ASSET_MAP from', mapPath);
  process.exit(1);
}

let entityMap = JSON.parse(jsonMatch[1]);

// 2. Load matched external JSONs
const cels = JSON.parse(fs.readFileSync('scripts/matched-celebrities.json', 'utf8'));
const anime = JSON.parse(fs.readFileSync('scripts/matched-anime.json', 'utf8'));
const films = JSON.parse(fs.readFileSync('scripts/matched-films.json', 'utf8'));

// 3. Inject celebrities
for (const c of cels) {
  // Dwayne Johnson height calibrated to canonical 196 cm
  let height = c.heightCm;
  if (c.slug === 'dwayne-johnson') height = 196;
  if (c.slug === 'brad-pitt') height = 180;
  if (c.slug === 'tom-cruise') height = 173;
  if (c.slug === 'leonardo-dicaprio') height = 183;
  if (c.slug === 'scarlett-johansson') height = 160;
  if (c.slug === 'zendaya') height = 178;

  entityMap[c.id] = {
    rawAssetId: c.id,
    name: c.name,
    category: 'celebrities',
    heightCm: height,
    measurementType: 'height',
    subgroup: c.subgroup ? `[C] ${c.subgroup.replace(/_/g, ' ')}` : '[C] Celebrities',
    tags: ['celebrities', 'celebrity', c.slug, c.name.toLowerCase()],
    aliases: [c.slug, c.name.toLowerCase()],
    status: 'verified',
    indexable: true,
  };
}

// 4. Inject anime
for (const a of anime) {
  entityMap[a.id] = {
    rawAssetId: a.id,
    name: a.name,
    category: 'anime',
    heightCm: a.heightCm,
    measurementType: 'height',
    subgroup: a.subgroup ? `[AN] ${a.subgroup.replace(/_/g, ' ')}` : '[AN] Anime',
    tags: ['anime', a.slug, a.name.toLowerCase()],
    aliases: [a.slug, a.name.toLowerCase()],
    status: 'verified',
    indexable: true,
  };
}

// 5. Inject films
for (const f of films) {
  entityMap[f.id] = {
    rawAssetId: f.id,
    name: f.name,
    category: 'films',
    heightCm: f.heightCm,
    measurementType: 'height',
    subgroup: f.subgroup ? `[F] ${f.subgroup.replace(/_/g, ' ')}` : '[F] Films',
    tags: ['films', 'movie', f.slug, f.name.toLowerCase()],
    aliases: [f.slug, f.name.toLowerCase()],
    status: 'verified',
    indexable: true,
  };
}

// 6. Fix semantic animals
entityMap['animal-horse-01'] = {
  rawAssetId: 'animal-horse-01',
  name: 'Horse',
  category: 'animals',
  heightCm: 160,
  measurementType: 'shoulder-height',
  subgroup: '[A] Cattle, Horses & Bears',
  tags: ['animals', 'horse', 'equine', 'stallion', 'riding horse'],
  aliases: ['horse', 'horse-standing', 'equine'],
  status: 'verified',
  indexable: true,
};

if (entityMap['animal-048']) {
  entityMap['animal-048'].name = 'Domestic Horse';
  entityMap['animal-048'].heightCm = 160;
  entityMap['animal-048'].aliases = ['horse', 'domestic-horse', 'equine'];
  entityMap['animal-048'].tags = ['animals', 'horse', 'domestic horse', 'equine'];
  entityMap['animal-048'].status = 'verified';
  entityMap['animal-048'].indexable = true;
}

entityMap['animal-lion-01'] = {
  rawAssetId: 'animal-lion-01',
  name: 'Lion',
  category: 'animals',
  heightCm: 120,
  measurementType: 'shoulder-height',
  subgroup: '[A] Big Cats',
  tags: ['animals', 'lion', 'big cat', 'panthera leo'],
  aliases: ['lion'],
  status: 'verified',
  indexable: true,
};

entityMap['animal-tiger-01'] = {
  rawAssetId: 'animal-tiger-01',
  name: 'Bengal Tiger',
  category: 'animals',
  heightCm: 100,
  measurementType: 'shoulder-height',
  subgroup: '[A] Big Cats',
  tags: ['animals', 'tiger', 'big cat', 'bengal tiger'],
  aliases: ['tiger', 'bengal-tiger'],
  status: 'verified',
  indexable: true,
};

entityMap['animal-dog-01'] = {
  rawAssetId: 'animal-dog-01',
  name: 'Domestic Dog',
  category: 'animals',
  heightCm: 60,
  measurementType: 'shoulder-height',
  subgroup: '[A] Canines',
  tags: ['animals', 'dog', 'canine', 'puppy'],
  aliases: ['dog', 'canine'],
  status: 'verified',
  indexable: true,
};

entityMap['animal-cat-01'] = {
  rawAssetId: 'animal-cat-01',
  name: 'Domestic Cat',
  category: 'animals',
  heightCm: 25,
  measurementType: 'shoulder-height',
  subgroup: '[A] Felines',
  tags: ['animals', 'cat', 'feline', 'kitten'],
  aliases: ['cat', 'feline'],
  status: 'verified',
  indexable: true,
};

entityMap['animal-elephant-01'] = {
  rawAssetId: 'animal-elephant-01',
  name: 'African Elephant',
  category: 'animals',
  heightCm: 320,
  measurementType: 'shoulder-height',
  subgroup: '[A] Elephants',
  tags: ['animals', 'elephant', 'african elephant'],
  aliases: ['elephant'],
  status: 'verified',
  indexable: true,
};

entityMap['animal-giraffe-01'] = {
  rawAssetId: 'animal-giraffe-01',
  name: 'Giraffe',
  category: 'animals',
  heightCm: 500,
  measurementType: 'ground-to-top',
  subgroup: '[A] Giraffes',
  tags: ['animals', 'giraffe', 'tallest animal'],
  aliases: ['giraffe'],
  status: 'verified',
  indexable: true,
};

entityMap['animal-bear-01'] = {
  rawAssetId: 'animal-bear-01',
  name: 'Grizzly Bear',
  category: 'animals',
  heightCm: 135,
  measurementType: 'shoulder-height',
  subgroup: '[A] Cattle, Horses & Bears',
  tags: ['animals', 'bear', 'grizzly'],
  aliases: ['bear', 'grizzly'],
  status: 'verified',
  indexable: true,
};

entityMap['animal-wolf-01'] = {
  rawAssetId: 'animal-wolf-01',
  name: 'Gray Wolf',
  category: 'animals',
  heightCm: 80,
  measurementType: 'shoulder-height',
  subgroup: '[A] Canines',
  tags: ['animals', 'wolf', 'gray wolf'],
  aliases: ['wolf'],
  status: 'verified',
  indexable: true,
};

entityMap['animal-blue-whale-01'] = {
  rawAssetId: 'animal-blue-whale-01',
  name: 'Blue Whale',
  category: 'animals',
  heightCm: 450,
  measurementType: 'shoulder-height',
  subgroup: '[A] Marine Life',
  tags: ['animals', 'whale', 'blue whale'],
  aliases: ['blue-whale', 'whale'],
  status: 'verified',
  indexable: true,
};

// 7. Fix semantic objects
entityMap['object-door-01'] = {
  rawAssetId: 'object-door-01',
  name: 'Standard Door',
  category: 'objects',
  heightCm: 210,
  measurementType: 'ground-to-top',
  subgroup: '[O] Architecture & Entryways',
  tags: ['objects', 'door', 'doorway'],
  aliases: ['door', 'standard-door'],
  status: 'verified',
  indexable: true,
};

entityMap['object-car-01'] = {
  rawAssetId: 'object-car-01',
  name: 'Sedan Car',
  category: 'objects',
  heightCm: 148,
  measurementType: 'ground-to-top',
  subgroup: '[O] Vehicles & Machinery',
  tags: ['objects', 'car', 'sedan', 'automobile'],
  aliases: ['car', 'automobile'],
  status: 'verified',
  indexable: true,
};

entityMap['object-chair-01'] = {
  rawAssetId: 'object-chair-01',
  name: 'Office Chair',
  category: 'objects',
  heightCm: 95,
  measurementType: 'ground-to-top',
  subgroup: '[O] Furniture',
  tags: ['objects', 'chair', 'furniture'],
  aliases: ['chair', 'office-chair'],
  status: 'verified',
  indexable: true,
};

entityMap['object-table-01'] = {
  rawAssetId: 'object-table-01',
  name: 'Dining Table',
  category: 'objects',
  heightCm: 76,
  measurementType: 'ground-to-top',
  subgroup: '[O] Furniture',
  tags: ['objects', 'table', 'dining table'],
  aliases: ['table'],
  status: 'verified',
  indexable: true,
};

entityMap['object-phone-01'] = {
  rawAssetId: 'object-phone-01',
  name: 'Smartphone',
  category: 'objects',
  heightCm: 15,
  measurementType: 'ground-to-top',
  subgroup: '[O] Consumer Electronics',
  tags: ['objects', 'phone', 'smartphone'],
  aliases: ['phone', 'smartphone'],
  status: 'verified',
  indexable: true,
};

// Write updated entityAssetMap.ts
const newMapContent = `// ENTITY ASSET MAP - PHASE 12
// Explicit verified metadata connected by stable raw asset ID.
import type { EntityCategory } from '../lib/constants';

export type EntityReviewStatus = 'verified' | 'needs-review' | 'missing-height' | 'invalid';

export interface EntityMapping {
  rawAssetId: string;
  name: string;
  category: EntityCategory;
  heightCm: number | null;
  measurementType?: string | null;
  subgroup?: string | null;
  tags: string[];
  aliases: string[];
  status: EntityReviewStatus;
  indexable: boolean;
}

export const ENTITY_ASSET_MAP: Record<string, EntityMapping> = ${JSON.stringify(entityMap, null, 2)};
`;

fs.writeFileSync(mapPath, newMapContent);
console.log('Successfully updated ENTITY_ASSET_MAP with', Object.keys(entityMap).length, 'entries');
