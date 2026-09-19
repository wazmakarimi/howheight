import fs from 'fs';
import path from 'path';

const DIST_DIR = 'dist';
const EXCLUDE_EXTENSIONS = ['.svg', '.png', '.jpg', '.jpeg', '.webp', '.ico', '.xml', '.txt', '.json', '.css', '.js'];

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(full));
    } else if (file === 'index.html') {
      results.push(full);
    }
  }
  return results;
}

function normalizeUrl(rawUrl, currentPath) {
  if (!rawUrl || rawUrl.startsWith('#') || rawUrl.startsWith('mailto:') || rawUrl.startsWith('tel:') || rawUrl.startsWith('javascript:')) {
    return null;
  }

  // Handle external links
  if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
    if (!rawUrl.includes('howheight.org')) {
      return null; // External
    }
    // Convert to relative pathname
    try {
      const u = new URL(rawUrl);
      rawUrl = u.pathname;
    } catch {
      return null;
    }
  }

  // Remove query strings and hashes
  let clean = rawUrl.split('?')[0].split('#')[0];
  if (!clean) return null;

  // Resolve relative paths if not starting with /
  if (!clean.startsWith('/')) {
    const baseDir = path.dirname(currentPath);
    clean = path.posix.join('/', baseDir, clean);
  }

  // Normalize slashes
  clean = clean.replace(/\/+/g, '/');
  if (!clean.endsWith('/') && !EXCLUDE_EXTENSIONS.some((ext) => clean.endsWith(ext))) {
    clean += '/';
  }

  return clean;
}

function runAudit() {
  console.log('====================================================');
  console.log('HOWHEIGHT.ORG — ADVANCED INTERNAL LINKING AUDIT');
  console.log('====================================================\n');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('Error: dist directory does not exist. Run "npm run build" first.');
    process.exit(1);
  }

  const htmlFiles = getHtmlFiles(DIST_DIR);
  console.log(`Discovered ${htmlFiles.length} HTML files in ${DIST_DIR}/\n`);

  // Map of canonical routes
  const routeSet = new Set();
  const fileToRoute = new Map();

  for (const file of htmlFiles) {
    let route = file.split(path.sep).join('/').replace('dist', '').replace('/index.html', '/');
    if (!route.startsWith('/')) route = '/' + route;
    if (!route.endsWith('/')) route += '/';
    routeSet.add(route);
    fileToRoute.set(file, route);
  }

  // Graph data structures
  const outgoingLinks = new Map(); // route -> Set of target routes
  const incomingLinks = new Map(); // route -> Set of source routes
  const brokenLinks = []; // { source, target, raw }

  for (const route of routeSet) {
    outgoingLinks.set(route, new Set());
    incomingLinks.set(route, new Set());
  }

  // Parse links in all HTML files
  for (const [file, sourceRoute] of fileToRoute.entries()) {
    const html = fs.readFileSync(file, 'utf-8');
    const hrefMatches = [...html.matchAll(/<a\s+[^>]*href=["']([^"']+)["']/gi)];

    for (const match of hrefMatches) {
      const rawHref = match[1];
      const targetRoute = normalizeUrl(rawHref, sourceRoute);

      if (!targetRoute) continue;

      // Skip asset files
      if (EXCLUDE_EXTENSIONS.some((ext) => targetRoute.endsWith(ext))) {
        continue;
      }

      // Check if target route exists
      if (!routeSet.has(targetRoute)) {
        // Special case: /compare/ with query params or ignored dev paths
        if (targetRoute.startsWith('/dev/') || targetRoute.startsWith('/dashboard/')) {
          continue;
        }
        brokenLinks.push({
          source: sourceRoute,
          target: targetRoute,
          raw: rawHref,
        });
      } else {
        outgoingLinks.get(sourceRoute).add(targetRoute);
        incomingLinks.get(targetRoute).add(sourceRoute);
      }
    }
  }

  // 1. Orphan Detection (Incoming Links == 0)
  // Ignore root / and dev pages from orphan reporting
  const orphanPages = [];
  const weaklyConnected = []; // 1-2 incoming links

  for (const route of routeSet) {
    if (route === '/' || route.startsWith('/dev/') || route === '/dashboard/') continue;

    const inCount = incomingLinks.get(route).size;
    if (inCount === 0) {
      orphanPages.push(route);
    } else if (inCount <= 2) {
      weaklyConnected.push({ route, inCount });
    }
  }

  // 2. Click Depth Calculation (BFS from Homepage)
  const clickDepth = new Map();
  const queue = [{ route: '/', depth: 0 }];
  clickDepth.set('/', 0);

  // Also seed localized homepages as root entrypoints for their language tree
  const locales = ['hi', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'ar'];
  for (const loc of locales) {
    const locRoot = `/${loc}/`;
    if (routeSet.has(locRoot)) {
      queue.push({ route: locRoot, depth: 0 });
      clickDepth.set(locRoot, 0);
    }
  }

  while (queue.length > 0) {
    const { route, depth } = queue.shift();
    const neighbors = outgoingLinks.get(route) || new Set();

    for (const neighbor of neighbors) {
      if (!clickDepth.has(neighbor)) {
        clickDepth.set(neighbor, depth + 1);
        queue.push({ route: neighbor, depth: depth + 1 });
      }
    }
  }

  const depthStats = { 0: 0, 1: 0, 2: 0, 3: 0, '4+': 0, unreachable: 0 };
  const unreached = [];
  for (const route of routeSet) {
    if (route.startsWith('/dev/') || route === '/dashboard/') continue;
    const d = clickDepth.get(route);
    if (d === undefined) {
      depthStats.unreachable++;
      unreached.push(route);
    } else if (d >= 4) {
      depthStats['4+']++;
    } else {
      depthStats[d]++;
    }
  }
  if (unreached.length > 0) {
    console.log('Unreached routes:', unreached);
  }

  // 3. Category Connectivity
  const categoryRoutes = [
    '/people-height-comparison/',
    '/celebrity-height-comparison/',
    '/anime-height-comparison/',
    '/film-height-comparison/',
    '/animal-height-comparison/',
    '/object-height-comparison/',
    '/plant-height-comparison/',
    '/sports-height-comparison/',
    '/apparel-height-comparison/',
    '/fictional-character-height-comparison/',
  ];

  const categoryStats = categoryRoutes.map((cat) => ({
    category: cat,
    inbound: incomingLinks.get(cat)?.size || 0,
    outbound: outgoingLinks.get(cat)?.size || 0,
  }));

  // Output Report
  console.log('----------------------------------------------------');
  console.log('1. CRAWLABILITY & GRAPH SUMMARY');
  console.log('----------------------------------------------------');
  console.log(`Total Valid Routes in Graph: ${routeSet.size}`);
  console.log(`Total Internal Links Analyzed: ${Array.from(outgoingLinks.values()).reduce((acc, s) => acc + s.size, 0)}`);

  console.log('\n----------------------------------------------------');
  console.log('2. BROKEN INTERNAL LINKS (HTTP 404 EQUIVALENTS)');
  console.log('----------------------------------------------------');
  if (brokenLinks.length === 0) {
    console.log('✓ PERFECT: 0 broken internal links detected!');
  } else {
    console.log(`Found ${brokenLinks.length} broken links:`);
    brokenLinks.slice(0, 15).forEach((b) => {
      console.log(`  - In ${b.source} -> Broken target: ${b.target} (raw: "${b.raw}")`);
    });
    if (brokenLinks.length > 15) {
      console.log(`  ... and ${brokenLinks.length - 15} more.`);
    }
  }

  console.log('\n----------------------------------------------------');
  console.log('3. ORPHAN PAGE ANALYSIS (0 INCOMING LINKS)');
  console.log('----------------------------------------------------');
  if (orphanPages.length === 0) {
    console.log('✓ PERFECT: 0 orphan pages detected! Every page has inbound crawl paths.');
  } else {
    console.log(`Found ${orphanPages.length} orphan pages:`);
    orphanPages.forEach((op) => console.log(`  - ${op}`));
  }

  console.log('\n----------------------------------------------------');
  console.log('4. CLICK DEPTH DISTRIBUTION FROM HOMEPAGE');
  console.log('----------------------------------------------------');
  console.log(`Depth 0 (Homepages):       ${depthStats[0]}`);
  console.log(`Depth 1 (Categories/Hubs): ${depthStats[1]}`);
  console.log(`Depth 2 (Entities/Match):  ${depthStats[2]}`);
  console.log(`Depth 3:                   ${depthStats[3]}`);
  console.log(`Depth 4+:                  ${depthStats['4+']}`);
  console.log(`Unreachable from Home:     ${depthStats.unreachable}`);

  console.log('\n----------------------------------------------------');
  console.log('5. CATEGORY CONNECTIVITY');
  console.log('----------------------------------------------------');
  categoryStats.forEach((cs) => {
    console.log(`  ${cs.category.padEnd(42)} Inbound: ${String(cs.inbound).padStart(3)} | Outbound: ${String(cs.outbound).padStart(3)}`);
  });

  console.log('\n====================================================');
  console.log('AUDIT COMPLETE');
  console.log('====================================================\n');

  if (brokenLinks.length > 0 || orphanPages.length > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runAudit();
