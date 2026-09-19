import { encodePeopleToUrl, decodePeopleFromUrl } from './src/lib/share.ts';
import { calculateDifference, calculateScale, generateRulerTicks } from './src/lib/comparison.ts';
import { ANIMALS } from './src/data/animals.ts';
import { OBJECTS } from './src/data/objects.ts';
import { CELEBRITIES } from './src/data/celebrities.ts';
import { INITIAL_PEOPLE, LIMITS } from './src/lib/constants.ts';

console.log('=== PHASE 5 VERIFICATION SUITE ===');

// 1. Verify URL Encoding and Decoding with Phase 5 attributes
const testItems = [
  {
    id: 'item-1',
    name: 'John',
    category: 'human',
    gender: 'male',
    heightCm: 180,
    referenceHeightCm: 175,
    isCustomHeight: true,
    positionX: 120,
    color: '#2563eb',
  },
  {
    id: 'item-2',
    name: 'Lion',
    category: 'animal',
    animalType: 'lion',
    heightCm: 120,
    referenceHeightCm: 120,
    isCustomHeight: false,
    positionX: 320,
    color: '#ea580c',
  },
  {
    id: 'item-3',
    name: 'Virat Kohli',
    category: 'celebrity',
    celebrityId: 'virat-kohli',
    heightCm: 190, // Resized from 175
    referenceHeightCm: 175,
    isCustomHeight: true,
    positionX: 520,
    color: '#9333ea',
  },
];

const encoded = encodePeopleToUrl(testItems);
console.log('1. Encoded Phase 5 URL string:', encoded);
if (!encoded || typeof encoded !== 'string') {
  throw new Error('encodePeopleToUrl failed to produce a valid string');
}

const decoded = decodePeopleFromUrl(encoded);
console.log('2. Decoded Phase 5 Items count:', decoded.length);
if (decoded.length !== 3) {
  throw new Error(`Expected 3 decoded items, got ${decoded.length}`);
}

const decJohn = decoded.find((p) => p.name === 'John');
const decLion = decoded.find((p) => p.name === 'Lion');
const decVirat = decoded.find((p) => p.name === 'Virat Kohli');

if (!decJohn || decJohn.positionX !== 120 || decJohn.heightCm !== 180 || decJohn.referenceHeightCm !== 175 || !decJohn.isCustomHeight) {
  throw new Error(`Decoded John mismatch: ${JSON.stringify(decJohn)}`);
}
if (!decLion || decLion.positionX !== 320 || decLion.heightCm !== 120 || decLion.isCustomHeight) {
  throw new Error(`Decoded Lion mismatch: ${JSON.stringify(decLion)}`);
}
if (!decVirat || decVirat.positionX !== 520 || decVirat.heightCm !== 190 || decVirat.referenceHeightCm !== 175 || !decVirat.isCustomHeight) {
  throw new Error(`Decoded Virat mismatch: ${JSON.stringify(decVirat)}`);
}
console.log('✓ Phase 5 URL Serialization & Deserialization verified successfully');

// 3. Test Backward Compatibility with Phase 1-4 URL format (no rx, cst, x)
const legacyData = [
  { n: 'Alice', g: 'f', h: 165, c: 'ec4899' },
  { n: 'Giraffe', cat: 'a', a: 'giraffe', h: 500, c: 'b45309' },
];
const legacyEncoded = Buffer.from(JSON.stringify(legacyData)).toString('base64');
const legacyDecoded = decodePeopleFromUrl(legacyEncoded);
if (legacyDecoded.length !== 2) {
  throw new Error(`Expected 2 legacy items, got ${legacyDecoded.length}`);
}
if (legacyDecoded[0].referenceHeightCm !== 165 || legacyDecoded[0].isCustomHeight !== false || legacyDecoded[0].positionX !== undefined) {
  throw new Error(`Legacy item fallback failed: ${JSON.stringify(legacyDecoded[0])}`);
}
if (legacyDecoded[0].gender !== 'female' || legacyDecoded[0].color !== '#ec4899') {
  throw new Error(`Legacy item gender or color mismatch: ${JSON.stringify(legacyDecoded[0])}`);
}
console.log('✓ Backward compatibility with Phase 1-4 URLs verified');

// 4. Test Dynamic Ruler Scaling upon Height Change
const originalScale = calculateScale(testItems, LIMITS.MAX_VISUAL_HEIGHT_PX);
console.log('3. Original Scale rulerMaxCm:', originalScale.rulerMaxCm);

testItems[2].heightCm = 250;
const expandedScale = calculateScale(testItems, LIMITS.MAX_VISUAL_HEIGHT_PX);
console.log('4. Expanded Scale rulerMaxCm after resize:', expandedScale.rulerMaxCm);
if (expandedScale.rulerMaxCm < 250) {
  throw new Error(`Scale did not dynamically expand to accommodate 250 cm (got ${expandedScale.rulerMaxCm})`);
}

const ticks = generateRulerTicks(expandedScale.rulerMaxCm, 'cm');
if (!ticks || ticks.length === 0 || ticks[ticks.length - 1].cm < 250) {
  throw new Error('Ruler ticks did not expand dynamically');
}
console.log(`✓ Dynamic Ruler Scaling verified (scale: ${expandedScale.scale.toFixed(3)}, ticks: ${ticks.length})`);

// 5. Test Canonical Reference Data Immutability
const canonicalVirat = CELEBRITIES.find((c) => c.id === 'virat-kohli');
if (!canonicalVirat || canonicalVirat.heightCm !== 175) {
  throw new Error(`Canonical dataset mutated! Virat height is ${canonicalVirat?.heightCm}, expected 175`);
}
const canonicalLion = ANIMALS.find((a) => a.id === 'lion');
if (!canonicalLion || canonicalLion.typicalHeightCm !== 120) {
  throw new Error(`Canonical dataset mutated! Lion height is ${canonicalLion?.typicalHeightCm}, expected 120`);
}
console.log('✓ Reference Data Immutability verified: Canonical datasets are never mutated');

// 6. Test Difference Calculation with Custom Resized Heights
const diff = calculateDifference([testItems[0], testItems[2]]); // John (180) vs Virat (250)
if (!diff || diff.diffCm !== 70) {
  throw new Error(`Expected diffCm = 70, got ${diff?.diffCm}`);
}
console.log(`✓ Difference Calculation verified: "${diff.statement}"`);

console.log('=== ALL PHASE 5 TESTS PASSED SUCCESSFULLY ===');
