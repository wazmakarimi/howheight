// COMPREHENSIVE ENTITY-TO-CANVAS VALIDATION SCRIPT
// Validates 100% of entity mappings, preset comparisons, assets on disk, and proportional scaling.

import fs from 'fs';
import path from 'path';
import { COMPARISONS, resolveComparisonItems } from '../src/data/comparisons.ts';
import { CELEBRITIES, getCelebrityAssetId } from '../src/data/celebrities.ts';
import { ANIMALS, getAnimalAssetId } from '../src/data/animals.ts';
import { OBJECTS, getObjectAssetId } from '../src/data/objects.ts';
import { ASSET_REGISTRY, getAssetById, resolveAsset } from '../src/data/assetRegistry.ts';
import { renderEntitySvg } from '../src/lib/renderModel.ts';

console.log('====================================================');
console.log('HOWHEIGHT.ORG — SMART ENTITY COMPARISON AUDIT SUITE');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

// ----------------------------------------------------
// TEST 1: CORE BENCHMARK — Dwayne Johnson vs Horse
// ----------------------------------------------------
console.log('TEST 1: Core Benchmark: "Dwayne Johnson vs Horse"');
const dwayneComp = COMPARISONS.find(c => c.slug === 'dwayne-johnson-vs-horse');
assert(!!dwayneComp, 'Comparison "dwayne-johnson-vs-horse" exists in registry');

if (dwayneComp) {
  const items = resolveComparisonItems(dwayneComp.items);
  assert(items.length === 2, 'Resolved exactly 2 items');

  const [dwayne, horse] = items;

  // 1. Dwayne Johnson verification
  assert(dwayne.name.includes('Dwayne'), `Dwayne name matches ("${dwayne.name}")`);
  assert(dwayne.heightCm === 196, `Dwayne height is 196 cm (got ${dwayne.heightCm})`);
  assert(dwayne.assetId === 'celebrity-012', `Dwayne assetId is "celebrity-012" (got "${dwayne.assetId}")`);

  const dwayneAsset = getAssetById(dwayne.assetId);
  assert(!!dwayneAsset, 'Dwayne asset exists in Central Asset Registry');
  assert(dwayneAsset?.category === 'celebrities', `Dwayne category is "celebrities" (got "${dwayneAsset?.category}")`);
  assert(dwayneAsset?.publicPath.includes('celebrity_img_12.png'), `Dwayne image path is celebrity_img_12.png (got "${dwayneAsset?.publicPath}")`);
  assert(fs.existsSync(path.join('public', dwayneAsset.publicPath)), `Dwayne image physically exists at public${dwayneAsset.publicPath}`);

  // 2. Horse verification
  assert(horse.name.toLowerCase().includes('horse'), `Horse name matches ("${horse.name}")`);
  assert(horse.heightCm === 160, `Horse height is 160 cm (got ${horse.heightCm})`);
  assert(horse.assetId === 'animal-048' || horse.assetId === 'animal-horse-01', `Horse assetId is equine asset (got "${horse.assetId}")`);

  const horseAsset = getAssetById(horse.assetId);
  assert(!!horseAsset, 'Horse asset exists in Central Asset Registry');
  assert(horseAsset?.category === 'animals', `Horse category is "animals" (got "${horseAsset?.category}")`);
  assert(
    !horseAsset?.name.toLowerCase().includes('cat') && !horseAsset?.name.toLowerCase().includes('feline'),
    `Horse is NOT mapped to cat/feline (got "${horseAsset?.name}")`
  );
  assert(
    horseAsset?.filename === 'animal_svg_48.svg' || horseAsset?.filename === 'animal-horse-01.svg',
    `Horse filename is authentic horse SVG (got "${horseAsset?.filename}")`
  );
  assert(fs.existsSync(path.join('public', horseAsset.publicPath)), `Horse SVG physically exists at public${horseAsset.publicPath}`);

  // 3. Proportional scaling and baseline verification
  const chartScale = 2.0; // 2 pixels per cm
  const renderDwayne = renderEntitySvg(dwayne, chartScale);
  const renderHorse = renderEntitySvg(horse, chartScale);

  assert(renderDwayne.measurementHeightPx === 196 * chartScale, `Dwayne rendered height is exactly ${196 * chartScale}px (${renderDwayne.measurementHeightPx}px)`);
  assert(renderHorse.measurementHeightPx === 160 * chartScale, `Horse rendered height is exactly ${160 * chartScale}px (${renderHorse.measurementHeightPx}px)`);
  assert(
    renderDwayne.measurementHeightPx > renderHorse.measurementHeightPx,
    `Dwayne (196 cm) is visually taller than Horse (160 cm) by exactly 36 cm (${36 * chartScale}px)`
  );
}

console.log('\n----------------------------------------------------');
console.log('TEST 2: All Predefined Comparison Routes (100% Audit)');
console.log('----------------------------------------------------');

for (const comp of COMPARISONS) {
  const items = resolveComparisonItems(comp.items);
  for (const item of items) {
    assert(!!item.assetId, `[${comp.slug}] item "${item.name}" has valid assetId ("${item.assetId}")`);
    const resolved = resolveAsset(item.assetId, item.category);
    assert(!!resolved, `[${comp.slug}] item "${item.name}" resolved to valid DiscoveredAsset`);
    if (resolved?.publicPath) {
      const diskPath = path.join('public', resolved.publicPath);
      assert(fs.existsSync(diskPath), `[${comp.slug}] asset file exists on disk: ${resolved.publicPath}`);
    }
  }
}

console.log('\n----------------------------------------------------');
console.log('TEST 3: Curated Celebrities Asset Resolution');
console.log('----------------------------------------------------');

for (const cel of CELEBRITIES) {
  const assetId = getCelebrityAssetId(cel.id);
  assert(!!assetId, `Celebrity "${cel.name}" has mapped assetId ("${assetId}")`);
  const asset = getAssetById(assetId);
  assert(!!asset, `Celebrity "${cel.name}" asset exists in registry`);
  if (asset?.publicPath) {
    const diskPath = path.join('public', asset.publicPath);
    assert(fs.existsSync(diskPath), `Celebrity "${cel.name}" asset exists on disk (${asset.publicPath})`);
  }
}

console.log('\n----------------------------------------------------');
console.log('TEST 4: Curated Animals Asset Resolution');
console.log('----------------------------------------------------');

for (const animal of ANIMALS) {
  const assetId = getAnimalAssetId(animal.id);
  assert(!!assetId, `Animal "${animal.name}" has mapped assetId ("${assetId}")`);
  const asset = getAssetById(assetId);
  assert(!!asset, `Animal "${animal.name}" asset exists in registry`);
  if (animal.id === 'horse') {
    assert(
      !asset?.name.toLowerCase().includes('cat'),
      `Animal "horse" is NOT a cat (name: "${asset?.name}")`
    );
  }
}

console.log('\n----------------------------------------------------');
console.log('TEST 5: Multi-Category Support Verification');
console.log('----------------------------------------------------');

const categories = ['male', 'female', 'animals', 'objects', 'fictional', 'plants', 'sports', 'anime', 'films', 'celebrities'];
for (const cat of categories) {
  const assetsInCat = ASSET_REGISTRY.filter(a => a.category === cat && a.searchable);
  assert(assetsInCat.length > 0, `Category "${cat}" has ${assetsInCat.length} active searchable assets`);
  
  // Verify first asset in each category has existing file
  const first = assetsInCat[0];
  if (first?.publicPath) {
    const diskPath = path.join('public', first.publicPath);
    assert(fs.existsSync(diskPath), `Category "${cat}" sample asset exists on disk: ${first.publicPath}`);
  }
}

console.log('\n====================================================');
console.log(`AUDIT RESULTS: ${passedTests}/${totalTests} tests passed (${failedTests} failed)`);
console.log('====================================================');

if (failedTests > 0) {
  process.exit(1);
}
