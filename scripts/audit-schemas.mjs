import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = walk('dist');
console.log('Total HTML files scanned:', htmlFiles.length);

const schemaCounts = {};
let totalScripts = 0;
let jsonErrors = 0;
let pagesDevLeaks = 0;
let fakeRatings = 0;
let redirectUrlsInSchema = 0;
let noindexWithSchema = 0;
const pageTypeBreakdown = {};

for (const file of htmlFiles) {
  const normPath = file.replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  const isNoIndex = /<meta[^>]*robots[^>]*noindex/i.test(content);

  // classify page type
  let pageType = 'other';
  if (normPath.includes('/404')) pageType = '404';
  else if (normPath.endsWith('dist/index.html') || /dist\/[a-z]{2}\/index\.html/.test(normPath)) pageType = 'home';
  else if (normPath.includes('/celebrity-height/')) pageType = 'celebrity';
  else if (normPath.includes('/compare/')) pageType = 'comparison';
  else if (normPath.includes('/blog/')) pageType = normPath.endsWith('blog/index.html') ? 'blog-index' : 'blog-post';
  else if (normPath.includes('/about/')) pageType = 'about';
  else if (normPath.includes('/contact/')) pageType = 'contact';
  else if (normPath.includes('/privacy/')) pageType = 'privacy';
  else if (normPath.includes('/terms/')) pageType = 'terms';
  else if (normPath.includes('/how-to-use/')) pageType = 'how-to-use';
  else if (normPath.includes('-height-comparison')) pageType = 'category-or-entity';
  else pageType = 'tool-pillar';

  if (!pageTypeBreakdown[pageType]) pageTypeBreakdown[pageType] = { files: 0, schemas: {} };
  pageTypeBreakdown[pageType].files++;

  for (const m of matches) {
    totalScripts++;
    if (isNoIndex) {
      noindexWithSchema++;
      console.log('WARN: noindex page with schema:', normPath);
    }
    const raw = m[1].trim();
    try {
      const parsed = JSON.parse(raw);
      const type = parsed['@type'] || (Array.isArray(parsed) ? 'Array' : 'Unknown');
      schemaCounts[type] = (schemaCounts[type] || 0) + 1;
      pageTypeBreakdown[pageType].schemas[type] = (pageTypeBreakdown[pageType].schemas[type] || 0) + 1;

      const str = JSON.stringify(parsed);
      if (str.includes('.pages.dev')) pagesDevLeaks++;
      if (str.includes('AggregateRating') || str.includes('Review')) fakeRatings++;
      if (str.includes('/height-difference-calculator/')) redirectUrlsInSchema++;
    } catch (e) {
      jsonErrors++;
      console.error('JSON parse error in', normPath, e.message);
    }
  }
}

console.log('\n--- OVERALL METRICS ---');
console.log('Total JSON-LD script tags:', totalScripts);
console.log('Schema Type Frequencies:', JSON.stringify(schemaCounts, null, 2));
console.log('JSON Parse Errors:', jsonErrors);
console.log('Pages.dev Leaks in Schema:', pagesDevLeaks);
console.log('Fake Ratings / Reviews:', fakeRatings);
console.log('Redirect URLs in Schema:', redirectUrlsInSchema);
console.log('Noindex Pages with Schema:', noindexWithSchema);

console.log('\n--- BREAKDOWN BY PAGE TYPE ---');
for (const [pt, data] of Object.entries(pageTypeBreakdown)) {
  console.log(`${pt} (${data.files} files):`, JSON.stringify(data.schemas));
}
