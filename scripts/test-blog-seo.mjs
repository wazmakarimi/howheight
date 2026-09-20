import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const EXPECTED_SLUGS = [
  'how-height-comparison-works',
  'dwayne-johnson-height-comparison',
  'messi-vs-ronaldo-height-comparison',
  'human-vs-horse-height-comparison',
  'human-vs-door-height-comparison',
  'what-does-6-feet-look-like',
];

const LOCALES = ['ar', 'de', 'es', 'fr', 'hi', 'ja', 'ko', 'pt'];
const PRODUCTION_ORIGIN = 'https://howheight.org';
const FORBIDDEN_HOST = 'howheight.pages.dev';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ ${message}`);
    failed++;
  }
}

console.log('=== BLOG SEO & PERFORMANCE TEST SUITE ===\n');

// 1. Check Blog Index
const blogIndexPath = path.join(distDir, 'blog/index.html');
assert(fs.existsSync(blogIndexPath), 'dist/blog/index.html exists');

if (fs.existsSync(blogIndexPath)) {
  const html = fs.readFileSync(blogIndexPath, 'utf8');
  assert(html.includes('<h1'), 'Blog index has an <h1> tag');
  const h1Count = (html.match(/<h1/g) || []).length;
  assert(h1Count === 1, `Blog index has exactly 1 <h1> (found ${h1Count})`);
  assert(html.includes(`rel="canonical" href="${PRODUCTION_ORIGIN}/blog/"`), 'Blog index has correct production canonical');
  assert(!html.includes(`href="https://${FORBIDDEN_HOST}`), 'Blog index does not leak pages.dev domain in links');
  assert(!html.includes('<meta name="robots" content="noindex'), 'Blog index is not statically noindexed');
}

// 2. Check Each Blog Article in Root Locale (en)
for (const slug of EXPECTED_SLUGS) {
  console.log(`\nTesting Article: /blog/${slug}/`);
  const articlePath = path.join(distDir, `blog/${slug}/index.html`);
  assert(fs.existsSync(articlePath), `Article file exists at dist/blog/${slug}/index.html`);

  if (!fs.existsSync(articlePath)) continue;

  const html = fs.readFileSync(articlePath, 'utf8');
  const stat = fs.statSync(articlePath);
  const sizeKb = (stat.size / 1024).toFixed(1);

  // Performance P0 (<140 KB HTML payload)
  assert(stat.size < 140 * 1024, `Payload size is ${sizeKb} KB (< 140 KB P0 budget)`);

  // Single H1
  const h1Count = (html.match(/<h1/g) || []).length;
  assert(h1Count === 1, `Has exactly 1 <h1> tag (found ${h1Count})`);

  // Production Canonical
  const expectedCanonical = `${PRODUCTION_ORIGIN}/blog/${slug}/`;
  assert(html.includes(`rel="canonical" href="${expectedCanonical}"`), `Canonical is ${expectedCanonical}`);
  assert(!html.includes(`href="https://${FORBIDDEN_HOST}`), 'No pages.dev leak in links');
  assert(!html.includes('<meta name="robots" content="noindex'), 'Article is indexable (no static noindex)');

  // Tool integration
  assert(html.includes('id="comparison-tool"'), 'Interactive comparison tool is mounted on article page');
  assert(html.includes('data-initial-items='), 'Preloaded entities are passed to comparison tool');

  // Schema.org BlogPosting
  assert(html.includes('"@type":"BlogPosting"'), 'Contains Schema.org BlogPosting JSON-LD');
  assert(html.includes('"@type":"BreadcrumbList"'), 'Contains Schema.org BreadcrumbList JSON-LD');
  assert(html.includes('"@type":"FAQPage"'), 'Contains Schema.org FAQPage JSON-LD');

  // Reciprocal Hreflangs
  for (const loc of LOCALES) {
    assert(html.includes(`hreflang="${loc}"`), `Contains hreflang for locale ${loc}`);
  }
  assert(html.includes('hreflang="x-default"'), 'Contains hreflang="x-default"');
}

// 3. Check Localized Blog Routes
console.log('\nTesting Multilingual Localized Routes:');
for (const loc of LOCALES) {
  const locIndexPath = path.join(distDir, `${loc}/blog/index.html`);
  assert(fs.existsSync(locIndexPath), `Localized blog index exists at dist/${loc}/blog/index.html`);

  const firstSlug = EXPECTED_SLUGS[0];
  const locArticlePath = path.join(distDir, `${loc}/blog/${firstSlug}/index.html`);
  assert(fs.existsSync(locArticlePath), `Localized article exists at dist/${loc}/blog/${firstSlug}/index.html`);

  if (fs.existsSync(locArticlePath)) {
    const locHtml = fs.readFileSync(locArticlePath, 'utf8');
    const expectedLocCanonical = `${PRODUCTION_ORIGIN}/${loc}/blog/${firstSlug}/`;
    assert(locHtml.includes(`rel="canonical" href="${expectedLocCanonical}"`), `Localized canonical is ${expectedLocCanonical}`);
  }
}

// 4. Check Sitemap Integration
console.log('\nTesting Sitemap XML Integration:');
const sitemapPath = path.join(distDir, 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'dist/sitemap.xml exists');

if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  assert(sitemapXml.includes(`${PRODUCTION_ORIGIN}/blog/`), 'Sitemap includes /blog/');
  for (const slug of EXPECTED_SLUGS) {
    assert(sitemapXml.includes(`${PRODUCTION_ORIGIN}/blog/${slug}/`), `Sitemap includes /blog/${slug}/`);
  }
}

console.log(`\n=========================================`);
console.log(`BLOG SEO TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log(`=========================================`);

if (failed > 0) {
  process.exit(1);
}
