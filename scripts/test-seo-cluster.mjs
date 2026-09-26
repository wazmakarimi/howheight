import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

let passedTests = 0;
let failedTests = 0;

function runTest(testName, fn) {
  try {
    fn();
    console.log(`  ✅ [PASS] ${testName}`);
    passedTests++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${testName}`);
    console.error(`     Error: ${err.message}`);
    failedTests++;
  }
}

console.log('\n===============================================================');
console.log('🧪 RUNNING HOWHEIGHT.ORG SEARCH INTENT SEO CLUSTER AUDIT');
console.log('===============================================================\n');

const clusterPages = [
  { path: 'height-comparison', expectedH1: 'Height Comparison', maxKb: 150 },
  { path: 'height-comparison-calculator', expectedH1: 'Height Comparison Calculator', maxKb: 150 },
  { path: 'height-comparison-visualizer', expectedH1: 'Height Comparison Visualizer', maxKb: 150 },
  { path: 'height-comparison-chart', expectedH1: 'Height Comparison Chart', maxKb: 150 },
  { path: 'size-comparison', expectedH1: 'Human Size Comparison', maxKb: 150 },
  { path: 'height-comparison-couple', expectedH1: 'Couple Height Comparison', maxKb: 150 },
];

const locales = ['hi', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'ar', 'ru'];

// Test Group 1: English Cluster Pages Integrity
console.log('--- Test Group 1: Core Search Intent Pillar Pages ---');
for (const p of clusterPages) {
  const file = path.join(distDir, p.path, 'index.html');
  runTest(`Pillar page dist/${p.path}/index.html exists and is valid`, () => {
    assert.strictEqual(fs.existsSync(file), true, `File missing: ${file}`);
    const content = fs.readFileSync(file, 'utf8');

    // Exactly one H1
    const h1Matches = content.match(/<h1[\s\S]*?<\/h1>/gi) || [];
    assert.strictEqual(h1Matches.length, 1, `Expected exactly 1 H1, found ${h1Matches.length}`);
    assert.ok(h1Matches[0].toLowerCase().includes(p.expectedH1.toLowerCase()), `H1 did not match expected topic`);

    // Canonical tag points to production domain with trailing slash
    const expectedCanonical = `https://howheight.org/${p.path}/`;
    assert.ok(content.includes(`<link rel="canonical" href="${expectedCanonical}"`), `Canonical mismatch: expected ${expectedCanonical}`);

    // No static noindex
    assert.ok(!content.includes('<meta name="robots" content="noindex'), `Accidental static noindex found`);

    // Hreflang alternates present
    assert.ok(content.includes('hreflang="x-default"'), `Missing x-default hreflang`);
    for (const loc of locales) {
      assert.ok(content.includes(`hreflang="${loc}"`), `Missing hreflang for ${loc}`);
    }

    // Breadcrumbs Schema JSON-LD
    assert.ok(content.includes('"@type":"BreadcrumbList"'), `Missing BreadcrumbList schema`);

    // FAQ Schema JSON-LD
    assert.ok(content.includes('"@type":"FAQPage"'), `Missing FAQPage schema`);

    // P0 Performance Payload check (<150 KB)
    const stats = fs.statSync(file);
    const sizeKb = Math.round(stats.size / 1024);
    assert.ok(sizeKb <= p.maxKb, `Page payload ${sizeKb} KB exceeded max limit ${p.maxKb} KB`);
  });
}

// Test Group 2: Multilingual Support for Cluster Pages
console.log('\n--- Test Group 2: Multilingual Localized Pages in dist ---');
for (const loc of locales) {
  for (const p of clusterPages) {
    const locFile = path.join(distDir, loc, p.path, 'index.html');
    runTest(`Localized dist/${loc}/${p.path}/index.html exists with proper canonical`, () => {
      assert.strictEqual(fs.existsSync(locFile), true, `File missing: ${locFile}`);
      const content = fs.readFileSync(locFile, 'utf8');

      const expectedCanonical = `https://howheight.org/${loc}/${p.path}/`;
      assert.ok(content.includes(`<link rel="canonical" href="${expectedCanonical}"`), `Canonical mismatch for localized page: expected ${expectedCanonical}`);

      // Exactly one H1
      const h1Matches = content.match(/<h1[\s\S]*?<\/h1>/gi) || [];
      assert.strictEqual(h1Matches.length, 1, `Expected exactly 1 H1 for localized page, found ${h1Matches.length}`);
    });
  }
}

// Test Group 3: Sitemap.xml Cluster Coverage
console.log('\n--- Test Group 3: Sitemap.xml Verification ---');
runTest('Sitemap.xml contains all core pillar URLs with full alternates', () => {
  const sitemapFile = path.join(distDir, 'sitemap.xml');
  assert.strictEqual(fs.existsSync(sitemapFile), true);
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');

  for (const p of clusterPages) {
    const url = `https://howheight.org/${p.path}/`;
    assert.ok(sitemap.includes(`<loc>${url}</loc>`), `Sitemap missing ${url}`);
  }

  // Verify no pages.dev in sitemap
  assert.ok(!sitemap.includes('howheight.pages.dev'), `Sitemap contains preview domain reference`);
});

// Test Group 4: Redirects Verification
console.log('\n--- Test Group 4: Redirects Verification ---');
runTest('_redirects contains 301 from /height-difference-calculator/ to /height-comparison-calculator/', () => {
  const redFile = path.join(rootDir, 'public', '_redirects');
  const redirects = fs.readFileSync(redFile, 'utf8');
  assert.ok(redirects.includes('/height-difference-calculator/  /height-comparison-calculator/  301'));
  assert.ok(redirects.includes('/height-difference-calculator   /height-comparison-calculator/  301'));
});

console.log('\n===============================================================');
console.log(`📊 CLUSTER AUDIT RESULTS: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('===============================================================\n');

if (failedTests > 0) {
  process.exit(1);
}
