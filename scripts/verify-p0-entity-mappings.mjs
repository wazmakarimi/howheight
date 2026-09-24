import fs from 'fs';
import path from 'path';
import { ASSET_REGISTRY, getAssetById, getAssetBySlug, resolveAsset } from '../src/data/assetRegistry.ts';
import { resolveMigratedAssetId } from '../src/lib/migrationMap.ts';

let failed = 0;
let passed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

console.log('====================================================');
console.log('RUNNING P0 ENTITY-TO-ASSET MAPPING VERIFICATION SUITE');
console.log('====================================================\n');

// 1. Regression Test Cases
console.log('--- 1. Testing Core Regression Test Cases ---');

// Test 1: American Football
const football = getAssetById('sports-004') || getAssetBySlug('american-football');
assert(football !== undefined, 'American Football asset found in registry');
assert(football?.name === 'American Football', `American Football has correct name (got: "${football?.name}")`);
assert(football?.id === 'sports-004', `American Football maps to sports-004 (got: ${football?.id})`);
assert(football?.filename === 'sports_svg_4.svg', `American Football uses sports_svg_4.svg (got: ${football?.filename})`);
assert(football?.heightCm === 185, `American Football has height 185 cm (got: ${football?.heightCm})`);
assert(!football?.filename.includes('hoop'), `American Football does NOT use hoop visual asset`);

// Test 2: Basketball
const basketball = getAssetById('sports-007') || getAssetBySlug('basketball');
assert(basketball !== undefined, 'Basketball asset found in registry');
assert(basketball?.name === 'Basketball', `Basketball has correct name (got: "${basketball?.name}")`);
assert(basketball?.id === 'sports-007', `Basketball maps to sports-007 (got: ${basketball?.id})`);
assert(basketball?.filename === 'sports_svg_7.svg', `Basketball uses sports_svg_7.svg (got: ${basketball?.filename})`);
assert(basketball?.heightCm === 185, `Basketball has height 185 cm (got: ${basketball?.heightCm})`);
assert(!basketball?.filename.includes('bicycle'), `Basketball does NOT use bicycle visual asset`);

// Test 3: Balance Ball
const balanceBall = getAssetById('sports-005') || getAssetBySlug('balance-ball');
assert(balanceBall !== undefined, 'Balance Ball asset found in registry');
assert(balanceBall?.name === 'Balance Ball', `Balance Ball has correct name (got: "${balanceBall?.name}")`);
assert(balanceBall?.id === 'sports-005', `Balance Ball maps to sports-005 (got: ${balanceBall?.id})`);
assert(balanceBall?.filename === 'sports_svg_5.svg', `Balance Ball uses sports_svg_5.svg (got: ${balanceBall?.filename})`);
assert(balanceBall?.heightCm === 140, `Balance Ball has height 140 cm (got: ${balanceBall?.heightCm})`);
assert(!balanceBall?.filename.includes('goal'), `Balance Ball does NOT use football goal visual asset`);

// Test 4: Bowling Ball
const bowlingBall = getAssetById('sports-009') || getAssetBySlug('bowling-ball');
assert(bowlingBall !== undefined, 'Bowling Ball asset found in registry');
assert(bowlingBall?.name === 'Bowling Ball', `Bowling Ball has correct name (got: "${bowlingBall?.name}")`);
assert(bowlingBall?.id === 'sports-009', `Bowling Ball maps to sports-009 (got: ${bowlingBall?.id})`);
assert(bowlingBall?.filename === 'sports_svg_9.svg', `Bowling Ball uses sports_svg_9.svg (got: ${bowlingBall?.filename})`);
assert(bowlingBall?.heightCm === 175, `Bowling Ball has height 175 cm (got: ${bowlingBall?.heightCm})`);
assert(!bowlingBall?.filename.includes('punching-bag'), `Bowling Ball does NOT use punching bag visual asset`);

// Test 5: Ball Cactus
const ballCactus = getAssetById('plant-006') || getAssetBySlug('ball-cactus');
assert(ballCactus !== undefined, 'Ball Cactus asset found in registry');
assert(ballCactus?.name === 'Ball Cactus', `Ball Cactus has correct name (got: "${ballCactus?.name}")`);
assert(ballCactus?.id === 'plant-006', `Ball Cactus maps to plant-006 (got: ${ballCactus?.id})`);
assert(ballCactus?.filename === 'plant_svg_6.svg', `Ball Cactus uses plant_svg_6.svg (got: ${ballCactus?.filename})`);
assert(ballCactus?.heightCm === 60, `Ball Cactus has height 60 cm (got: ${ballCactus?.heightCm})`);
assert(!ballCactus?.filename.includes('palm'), `Ball Cactus does NOT use palm tree visual asset`);

// Test 6: Aloe Vera
const aloeVera = getAssetById('plant-005') || getAssetBySlug('aloe-vera');
assert(aloeVera !== undefined, 'Aloe Vera asset found in registry');
assert(aloeVera?.name === 'Aloe Vera', `Aloe Vera has correct name (got: "${aloeVera?.name}")`);
assert(aloeVera?.id === 'plant-005', `Aloe Vera maps to plant-005 (got: ${aloeVera?.id})`);
assert(aloeVera?.filename === 'plant_svg_5.svg', `Aloe Vera uses plant_svg_5.svg (got: ${aloeVera?.filename})`);
assert(aloeVera?.heightCm === 60, `Aloe Vera has height 60 cm (got: ${aloeVera?.heightCm})`);
assert(!aloeVera?.filename.includes('pine'), `Aloe Vera does NOT use pine tree visual asset`);

// Test 7: Abyss Demon
const abyssDemon = getAssetById('fictional-004') || getAssetBySlug('abyss-demon');
assert(abyssDemon !== undefined, 'Abyss Demon asset found in registry');
assert(abyssDemon?.name === 'Abyss Demon', `Abyss Demon has correct name (got: "${abyssDemon?.name}")`);
assert(abyssDemon?.id === 'fictional-004', `Abyss Demon maps to fictional-004 (got: ${abyssDemon?.id})`);
assert(abyssDemon?.filename === 'fictional_svg_4.svg', `Abyss Demon uses fictional_svg_4.svg (got: ${abyssDemon?.filename})`);
assert(abyssDemon?.heightCm === 180, `Abyss Demon has height 180 cm (got: ${abyssDemon?.heightCm})`);
assert(!abyssDemon?.filename.includes('dinosaur'), `Abyss Demon does NOT use dinosaur visual asset`);

// Test 8: Basketball Hoop
console.log('\n--- 2. Testing Basketball Hoop & Related Assets ---');
const hoop = getAssetById('basketball-hoop') || getAssetById('object-004');
assert(hoop !== undefined, 'Basketball Hoop resolved in registry');
assert(hoop?.name === 'Basketball Hoop', `Basketball Hoop has correct name (got: "${hoop?.name}")`);
assert(hoop?.category === 'objects', `Basketball Hoop is in objects category (got: "${hoop?.category}")`);
assert(hoop?.filename === 'object_svg_4.svg', `Basketball Hoop uses object_svg_4.svg (got: ${hoop?.filename})`);
assert(hoop?.heightCm === 410, `Basketball Hoop has height 410 cm (got: ${hoop?.heightCm})`);
assert(hoop?.id === 'object-004', `Basketball Hoop maps to object-004 (got: ${hoop?.id})`);

// Test 9: Migration map resolutions
console.log('\n--- 3. Testing Migration Map Canonical Resolutions ---');
assert(resolveMigratedAssetId('american-football') === 'sports-004', 'american-football resolves to sports-004');
assert(resolveMigratedAssetId('basketball') === 'sports-007', 'basketball resolves to sports-007');
assert(resolveMigratedAssetId('balance-ball') === 'sports-005', 'balance-ball resolves to sports-005');
assert(resolveMigratedAssetId('bowling-ball') === 'sports-009', 'bowling-ball resolves to sports-009');
assert(resolveMigratedAssetId('aloe-vera') === 'plant-005', 'aloe-vera resolves to plant-005');
assert(resolveMigratedAssetId('ball-cactus') === 'plant-006', 'ball-cactus resolves to plant-006');
assert(resolveMigratedAssetId('abyss-demon') === 'fictional-004', 'abyss-demon resolves to fictional-004');
assert(resolveMigratedAssetId('basketball-hoop') === 'object-004', 'basketball-hoop resolves to object-004');
assert(resolveMigratedAssetId('horse') === 'animal-048', 'horse resolves to animal-048 (Domestic Horse, not Cat)');
assert(resolveMigratedAssetId('dog') === 'animal-018', 'dog resolves to animal-018 (Dog, not Fox)');
assert(resolveMigratedAssetId('cat') === 'animal-028', 'cat resolves to animal-028 (Domestic Cat, not Wolf)');

// Test 10: Disk verification for all verified assets
console.log('\n--- 4. Testing Disk Existence for All Verified Assets ---');
let missingFiles = 0;
const verifiedAssets = ASSET_REGISTRY.filter(a => a.status === 'verified');
for (const asset of verifiedAssets) {
  const filePath = path.resolve(asset.sourceFile);
  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] Missing file on disk for verified asset: ${asset.id} (${filePath})`);
    missingFiles++;
  }
}
assert(missingFiles === 0, `All ${verifiedAssets.length} verified assets exist on disk (missing: ${missingFiles})`);

// Test 11: Pseudo-assets are demoted and unindexable
console.log('\n--- 5. Testing Demotion of Erroneous Pseudo-assets ---');
const pseudoList = [
  'sports-basketball-hoop-01',
  'sports-bicycle-01',
  'sports-football-goal-01',
  'plant-palm-01',
  'plant-pine-01',
  'fictional-dinosaur-01'
];
for (const pid of pseudoList) {
  const asset = ASSET_REGISTRY.find(a => a.id === pid);
  assert(asset?.indexable === false, `Pseudo-asset ${pid} is NOT indexable`);
  assert(asset?.status !== 'verified', `Pseudo-asset ${pid} is NOT marked verified (status: ${asset?.status})`);
  assert(asset?.searchable === false, `Pseudo-asset ${pid} is NOT searchable`);
}

// Summary
console.log('\n====================================================');
console.log(`SUITE RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log('====================================================\n');

if (failed > 0) {
  process.exit(1);
}
