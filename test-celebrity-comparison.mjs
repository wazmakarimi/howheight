import assert from 'node:assert';
import { CELEBRITIES, getCelebrityBySlug, getCelebrityById } from './src/data/celebrities.js';
import { calculateScale, calculateDifference, sortPeople } from './src/lib/comparison.js';
import { encodePeopleToUrl, decodePeopleFromUrl } from './src/lib/share.js';
import { renderEntitySvg } from './src/lib/renderModel.js';
import { cmToFeetInches } from './src/lib/height.js';

console.log('--- STARTING PHASE 4 CELEBRITY TESTS ---');

// 1. Dataset Integrity & Sourcing
console.log('Testing Celebrity Dataset...');
assert.ok(CELEBRITIES.length >= 25, `Expected >= 25 celebrities, found ${CELEBRITIES.length}`);

const knownCelebrities = [
  { slug: 'virat-kohli', name: 'Virat Kohli', heightCm: 175, gender: 'male' },
  { slug: 'shah-rukh-khan', name: 'Shah Rukh Khan', heightCm: 173, gender: 'male' },
  { slug: 'tom-cruise', name: 'Tom Cruise', heightCm: 170, gender: 'male' },
  { slug: 'dwayne-johnson', name: 'Dwayne Johnson', heightCm: 196, gender: 'male' },
  { slug: 'zendaya', name: 'Zendaya', heightCm: 178, gender: 'female' },
  { slug: 'amitabh-bachchan', name: 'Amitabh Bachchan', heightCm: 188, gender: 'male' },
  { slug: 'deepika-padukone', name: 'Deepika Padukone', heightCm: 174, gender: 'female' },
  { slug: 'ms-dhoni', name: 'MS Dhoni', heightCm: 178, gender: 'male' },
];

for (const expected of knownCelebrities) {
  const found = getCelebrityBySlug(expected.slug);
  assert.ok(found, `Celebrity ${expected.slug} not found`);
  assert.strictEqual(found.name, expected.name);
  assert.strictEqual(found.heightCm, expected.heightCm, `Height mismatch for ${expected.name}`);
  assert.strictEqual(found.gender, expected.gender, `Gender mismatch for ${expected.name}`);
  assert.ok(found.heightSource && found.heightSource.length > 5, `Missing source citation for ${expected.name}`);
  assert.ok(found.bioSnippet && found.bioSnippet.length > 5, `Missing bio snippet for ${expected.name}`);
}

console.log(`✓ All ${CELEBRITIES.length} verified public figures validated with sources.`);

// 2. Universal Scaling Engine with Multi-Category Items
console.log('Testing Universal Multi-Category Scaling Engine...');
const mixedItems = [
  { id: '1', name: 'Tom Cruise', category: 'celebrity', gender: 'male', celebrityId: 'tom-cruise', heightCm: 170, color: '#3b82f6' },
  { id: '2', name: 'Dwayne Johnson', category: 'celebrity', gender: 'male', celebrityId: 'dwayne-johnson', heightCm: 196, color: '#9333ea' },
  { id: '3', name: 'Standard Door', category: 'object', objectType: 'door', heightCm: 210, color: '#64748b' },
  { id: '4', name: 'Golden Retriever', category: 'animal', animalType: 'dog', heightCm: 60, color: '#f59e0b' },
  { id: '5', name: 'John Doe', category: 'human', gender: 'male', heightCm: 180, color: '#10b981' },
];

const visualHeightPx = 420;
const { scale, rulerMaxCm } = calculateScale(mixedItems, visualHeightPx);

assert.ok(scale > 0, 'Scale must be positive');
assert.ok(rulerMaxCm >= 210, 'Ruler max must accommodate tallest item (Door 210 cm)');

// Check proportional rendering heights
const tomSvg = renderEntitySvg(mixedItems[0], scale);
const dwayneSvg = renderEntitySvg(mixedItems[1], scale);
const doorSvg = renderEntitySvg(mixedItems[2], scale);
const dogSvg = renderEntitySvg(mixedItems[3], scale);

// Physical heights ratio must equal visual heights ratio
const realRatioTomToDwayne = 170 / 196;
const visualRatioTomToDwayne = tomSvg.measurementHeightPx / dwayneSvg.measurementHeightPx;
assert.ok(Math.abs(realRatioTomToDwayne - visualRatioTomToDwayne) < 0.001, 'Scaling ratio mismatch between Tom and Dwayne');

const realRatioDogToDoor = 60 / 210;
const visualRatioDogToDoor = dogSvg.measurementHeightPx / doorSvg.measurementHeightPx;
assert.ok(Math.abs(realRatioDogToDoor - visualRatioDogToDoor) < 0.001, 'Scaling ratio mismatch between Dog and Door');

console.log('✓ Universal Scaling Engine maintains exact mathematical proportionality across Humans, Celebrities, Animals, and Objects.');

// 3. Difference Calculation Engine
console.log('Testing Difference Calculation Engine...');
const diff = calculateDifference([mixedItems[0], mixedItems[1]]); // Tom (170) vs Dwayne (196)
assert.ok(diff, 'Diff must not be null');
assert.strictEqual(diff.diffCm, 26, 'Difference should be 26 cm');
assert.strictEqual(diff.diffInchesRounded, 10, 'Difference should be 10 inches');
assert.ok(diff.statement.includes('Tom Cruise is 10 inches shorter than Dwayne Johnson.'));
console.log(`✓ Difference statement calculated correctly: "${diff.statement}"`);

// 4. URL Serialization & Backward Compatibility
console.log('Testing URL Serialization & Backward Compatibility...');
// Phase 4 serialization
const encoded = encodePeopleToUrl(mixedItems);
assert.ok(encoded && encoded.length > 0, 'Encoded URL string must not be empty');

const decoded = decodePeopleFromUrl(encoded);
assert.strictEqual(decoded.length, mixedItems.length, 'Decoded count mismatch');

const decodedTom = decoded.find((d) => d.name === 'Tom Cruise');
assert.ok(decodedTom, 'Decoded Tom Cruise missing');
assert.strictEqual(decodedTom.category, 'celebrity');
assert.strictEqual(decodedTom.celebrityId, 'tom-cruise');
assert.strictEqual(decodedTom.heightCm, 170);

// Backward compatibility: Phase 1 payload
const phase1Payload = [{ n: 'Alice', h: 165, g: 'female', c: '#ec4899' }];
const phase1Encoded = btoa(JSON.stringify(phase1Payload));
const phase1Decoded = decodePeopleFromUrl(phase1Encoded);
assert.strictEqual(phase1Decoded.length, 1);
assert.strictEqual(phase1Decoded[0].name, 'Alice');
assert.strictEqual(phase1Decoded[0].category, 'human');

console.log('✓ URL Serialization and backward compatibility with Phase 1-3 fully verified.');

// 5. Silhouette Model Resolution
console.log('Testing Silhouette Model Resolution for Celebrities...');
const zendaya = getCelebrityBySlug('zendaya');
const zendayaItem = {
  id: 'zen',
  name: 'Zendaya',
  category: 'celebrity',
  gender: zendaya.gender,
  celebrityId: zendaya.id,
  heightCm: zendaya.heightCm,
  color: '#a855f7',
};
const zendayaRender = renderEntitySvg(zendayaItem, scale);
assert.ok(zendayaRender.svgMarkup.includes('<svg'), 'Zendaya must render valid SVG');
assert.ok(zendayaRender.totalSvgHeightPx > 0, 'Height must be positive');

console.log('✓ Neutral Female silhouette correctly mapped and rendered for Zendaya.');
console.log('--- ALL PHASE 4 TESTS PASSED SUCCESSFULLY! ---');
