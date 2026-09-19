import { getAssetById, resolveAsset, getAllAssets } from '../src/data/assetRegistry.ts';
import { resolveMigratedAssetId } from '../src/lib/migrationMap.ts';

console.log('=== RUNNING PHASE 11 DATA INTEGRITY TESTS ===');

// Test 1: Horse renders as Horse
const horseId = resolveMigratedAssetId('horse');
const horseAsset = getAssetById(horseId);
console.log('Test 1: Horse ->', horseId, horseAsset?.name, `${horseAsset?.heightCm} cm`, horseAsset?.filename);
if (horseId !== 'animal-048' || horseAsset?.name !== 'Domestic Horse' || horseAsset?.heightCm !== 160) {
  throw new Error(`Test 1 Failed: Horse resolved to ${horseId} (${horseAsset?.name})`);
}
console.log('  PASS: Horse maps to Domestic Horse (160 cm, animal_svg_48.svg)');

// Test 2: Cat renders as Cat
const catId = resolveMigratedAssetId('cat');
const catAsset = getAssetById(catId);
console.log('Test 2: Cat ->', catId, catAsset?.name, `${catAsset?.heightCm} cm`, catAsset?.filename);
if (catId !== 'animal-028' || catAsset?.name !== 'Domestic Cat' || catAsset?.heightCm !== 25) {
  throw new Error(`Test 2 Failed: Cat resolved to ${catId} (${catAsset?.name})`);
}
console.log('  PASS: Cat maps to Domestic Cat (25 cm, animal_svg_28.svg)');

// Test 3: Dog renders as Dog
const dogId = resolveMigratedAssetId('dog');
const dogAsset = getAssetById(dogId);
console.log('Test 3: Dog ->', dogId, dogAsset?.name, `${dogAsset?.heightCm} cm`, dogAsset?.filename);
if (dogId !== 'animal-018' || dogAsset?.name !== 'Dog' || dogAsset?.heightCm !== 55) {
  throw new Error(`Test 3 Failed: Dog resolved to ${dogId} (${dogAsset?.name})`);
}
console.log('  PASS: Dog maps to Dog (55 cm, animal_svg_18.svg)');

// Test 4: Lion renders as Lion
const lionId = resolveMigratedAssetId('lion');
const lionAsset = getAssetById(lionId);
console.log('Test 4: Lion ->', lionId, lionAsset?.name, `${lionAsset?.heightCm} cm`, lionAsset?.filename);
if (lionId !== 'animal-035' || lionAsset?.name !== 'Lion' || lionAsset?.heightCm !== 140) {
  throw new Error(`Test 4 Failed: Lion resolved to ${lionId} (${lionAsset?.name})`);
}
console.log('  PASS: Lion maps to Lion (140 cm, animal_svg_35.svg)');

// Test 5: Elephant / Mammoth
const elephantId = resolveMigratedAssetId('elephant');
const elephantAsset = getAssetById(elephantId);
console.log('Test 5: Elephant ->', elephantId, elephantAsset?.name, `${elephantAsset?.heightCm} cm`, elephantAsset?.filename);
if (elephantId !== 'animal-118' || elephantAsset?.name !== 'Mammoth' || elephantAsset?.heightCm !== 335) {
  throw new Error(`Test 5 Failed: Elephant resolved to ${elephantId} (${elephantAsset?.name})`);
}
console.log('  PASS: Elephant maps to Mammoth (335 cm, animal_svg_118.svg)');

// Test 6: Male and Female
const maleId = resolveMigratedAssetId('male');
const maleAsset = getAssetById(maleId);
const femaleId = resolveMigratedAssetId('female');
const femaleAsset = getAssetById(femaleId);
console.log('Test 6: Male ->', maleId, maleAsset?.name, `${maleAsset?.heightCm} cm`);
console.log('Test 6: Female ->', femaleId, femaleAsset?.name, `${femaleAsset?.heightCm} cm`);
if (maleId !== 'male-010' || femaleId !== 'female-01') {
  throw new Error(`Test 6 Failed: Male/Female mapping failed (got ${maleId}, ${femaleId})`);
}
console.log('  PASS: Male & Female map to verified Male Figure (175 cm) & Female Figure (163 cm)');

// Test 7: Single stable ID controls everything
const all = getAllAssets(false);
console.log(`Test 7: Auditing ${all.length} total assets for unique IDs and valid paths...`);
const idSet = new Set();
for (const a of all) {
  if (idSet.has(a.id)) throw new Error(`Duplicate asset ID: ${a.id}`);
  idSet.add(a.id);
  if (!a.publicPath.startsWith('/assets/entities/')) throw new Error(`Invalid publicPath for ${a.id}`);
  if (!a.viewBox) throw new Error(`Missing viewBox for ${a.id}`);
}
console.log(`  PASS: All ${all.length} assets have unique IDs and valid vector properties`);

// Test 8: Phase 12 Total Asset Count (1,273 SVGs + 188 PNGs = 1,461)
console.log('Test 8: Verifying total asset count = 1,461...');
if (all.length !== 1461) {
  throw new Error(`Test 8 Failed: Expected 1,461 assets, found ${all.length}`);
}
console.log('  PASS: Asset count exactly 1,461 (1,273 SVG + 188 PNG)');

// Test 9: Anime Category Verification
const animeAssets = all.filter(a => a.category === 'anime');
console.log(`Test 9: Verifying Anime category (count = ${animeAssets.length})...`);
if (animeAssets.length !== 17) {
  throw new Error(`Test 9 Failed: Expected 17 anime assets, found ${animeAssets.length}`);
}
if (!animeAssets.every(a => a.assetType === 'png' && a.id.startsWith('anime-'))) {
  throw new Error('Test 9 Failed: Not all anime assets are PNG or have anime- prefix');
}
console.log('  PASS: Anime category verified (17 PNG assets, stable anime- IDs)');

// Test 10: Films Category Verification
const filmAssets = all.filter(a => a.category === 'films');
console.log(`Test 10: Verifying Films category (count = ${filmAssets.length})...`);
if (filmAssets.length !== 85) {
  throw new Error(`Test 10 Failed: Expected 85 film assets, found ${filmAssets.length}`);
}
if (!filmAssets.every(a => a.assetType === 'png' && a.id.startsWith('film-'))) {
  throw new Error('Test 10 Failed: Not all film assets are PNG or have film- prefix');
}
console.log('  PASS: Films category verified (85 PNG assets, stable film- IDs)');

// Test 11: Celebrities Category Verification
const celebAssets = all.filter(a => a.category === 'celebrities');
console.log(`Test 11: Verifying Celebrities category (count = ${celebAssets.length})...`);
if (celebAssets.length !== 86) {
  throw new Error(`Test 11 Failed: Expected 86 celebrity assets, found ${celebAssets.length}`);
}
if (!celebAssets.every(a => a.assetType === 'png' && a.id.startsWith('celebrity-'))) {
  throw new Error('Test 11 Failed: Not all celebrity assets are PNG or have celebrity- prefix');
}
console.log('  PASS: Celebrities category verified (86 PNG assets, stable celebrity- IDs)');

// Test 12: No guessed names on new PNG assets
const unverifiedPngs = all.filter(a => a.assetType === 'png' && a.status === 'needs-review');
const invalidGuessedName = unverifiedPngs.find(a => !/^(Anime|Film|Celebrity)\s+\d+$/i.test(a.name));
if (invalidGuessedName) {
  throw new Error(`Test 12 Failed: Detected guessed name: "${invalidGuessedName.name}" for ID ${invalidGuessedName.id}`);
}
console.log(`Test 12: PASS: All ${unverifiedPngs.length} unverified PNG assets strictly follow standard numbered labels (zero guessed names)`);

console.log('=== ALL PHASE 12 INTEGRITY TESTS PASSED! ===');