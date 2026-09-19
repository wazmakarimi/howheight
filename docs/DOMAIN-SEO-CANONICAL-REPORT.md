# HowHeight.org — Domain SEO & Canonical Architecture Report

**Authoritative Production Domain:** `https://howheight.org`  
**Cloudflare Pages Preview Subdomain:** `https://howheight.pages.dev`  
**Date of Audit & Deployment:** September 19, 2026  
**Status:** FULLY HARDENED & PRODUCTION-VERIFIED (24/24 Automated Checks Passed)

---

## 1. Executive Summary

HowHeight is an interactive visual height comparison application deployed on Cloudflare Pages. It is accessible via two distinct web environments:
1. **Production Custom Domain:** `https://howheight.org` (and `https://www.howheight.org`) — The **ONLY** authoritative, public, and indexable domain for all search engines (Google, Bing, Yandex, etc.).
2. **Cloudflare Pages Preview Domain:** `https://howheight.pages.dev` (and ephemeral hash subdomains `https://*.pages.dev`) — Non-canonical staging and deployment targets that must **NEVER** compete with or duplicate production search engine rankings.

### Core Achievements
- **100% Production Indexability:** Production HTML pages emit clean, self-referential canonical tags, return HTTP `200 OK`, emit `X-Robots-Tag: all`, and have **zero** static `noindex` directives.
- **Preview Domain Indexing Blockade:** The preview domain dynamically appends `<meta name="robots" content="noindex, nofollow" />` in client DOM upon detecting `*.pages.dev` hostname, and always emits cross-domain canonical links pointing directly to `https://howheight.org/`.
- **Zero Asset Breakages:** CSS stylesheets and JavaScript client bundles are cached with `Cache-Control: public, max-age=31536000, immutable` and serve with HTTP `200 OK` across all devices.
- **404 Page SEO Hardening:** `src/pages/404.astro` emits `<meta name="robots" content="noindex, nofollow" />`, omits canonical tags, and omits alternate `hreflang` tags.
- **Automated 24-Test Matrix:** An automated test runner (`npm run test:seo`) continuously validates canonical URL generation, edge routing rules, header configs, and build output integrity.

---

## 2. Domain SEO Architecture

```
                                  [ Incoming Request ]
                                           │
                    ┌──────────────────────┴──────────────────────┐
                    ▼                                             ▼
          Host: howheight.org                         Host: *.pages.dev
         (Authoritative Apex)                         (Preview / Staging)
                    │                                             │
         ┌──────────┴──────────┐                      ┌───────────┴───────────┐
         │  HTTP 200 OK        │                      │  HTTP 200 OK          │
         │  X-Robots-Tag: all  │                      │  X-Robots-Tag: all    │
         │  Self-Canonical     │                      │  Cross-Domain Can.    │
         │  (howheight.org)    │                      │  (howheight.org)      │
         │  No static noindex  │                      │  Client JS Injects    │
         │  Sitemap + Hreflang │                      │  <meta robots noindex>│
         └─────────────────────┘                      └───────────────────────┘
```

| Dimension | Production (`https://howheight.org/`) | Preview (`https://howheight.pages.dev/`) |
| :--- | :--- | :--- |
| **Search Engine Status** | **INDEX, FOLLOW** | **NOINDEX, NOFOLLOW** |
| **Canonical Target** | Self-referential (`https://howheight.org/...`) | Cross-domain (`https://howheight.org/...`) |
| **Robots Header** | `X-Robots-Tag: all` | `X-Robots-Tag: all` (DOM noindex applied) |
| **Robots Meta Tag** | None on public pages (`noindex` on 404/dashboard) | Dynamically injected `noindex, nofollow` |
| **Sitemap Presence** | Present (`/sitemap.xml`) | Completely excluded |
| **Hreflang Annotations** | Fully enabled for verified locales | Excluded from indexation targets |

---

## 3. Canonical URL Engine

The canonical resolution system is centralized in [`src/lib/seo/site.ts`](file:///g:/NEw%20website/Hight/src/lib/seo/site.ts) with strict algorithmic guarantees:

1. **Origin Enforcement:** Always uses authoritative `https://howheight.org`.
2. **Trailing-Slash Integrity:** Every canonical URL strictly terminates with a `/`, matching Astro's `trailingSlash: 'always'` routing structure.
3. **Query Parameter Stripping:** Any query strings (`?utm_source=...`, `?ref=...`, `?gclid=...`, `?v=...`) are stripped before constructing the canonical tag.
4. **Anchor Fragment Stripping:** Any URL fragments (`#canvas`, `#details`) are stripped.
5. **Internationalization Formatting:**
   - Default language (`en`): `https://howheight.org/compare/`
   - Localized language (`hi`): `https://howheight.org/hi/compare/`
   - Duplicate prefix prevention: `getCanonicalUrl('/hi/compare/', 'hi')` cleanly resolves to `https://howheight.org/hi/compare/`.

```typescript
// Sample Usage:
getCanonicalUrl('/celebrity-height-comparison')
// -> "https://howheight.org/celebrity-height-comparison/"

getCanonicalUrl('/compare/?utm_source=twitter#canvas')
// -> "https://howheight.org/compare/"

getCanonicalUrl('/about/', 'hi')
// -> "https://howheight.org/hi/about/"
```

---

## 4. Hostname Detection Mechanism

In Astro's static site generation (`output: "static"`), HTML files are compiled ahead of time at build time. During SSG compilation, `Astro.url.hostname` evaluates to the build configuration host (`howheight.org`). Statically compiling `noindex` into the HTML would mistakenly mark production as non-indexable.

To solve this while guaranteeing that `howheight.pages.dev` is never indexed:
1. **Static HTML Output:** Remains clean and indexable for `howheight.org`.
2. **Client-Side Hostname Guard (`Layout.astro`):** Executes synchronously in the `<head>` before rendering:
   ```html
   <script is:inline>
     (function () {
       var h = window.location.hostname;
       if (h && (h === 'howheight.pages.dev' || h.endsWith('.pages.dev'))) {
         var m = document.createElement('meta');
         m.name = 'robots';
         m.content = 'noindex, nofollow';
         document.head.appendChild(m);
       }
     })();
   </script>
   ```
3. **Cross-Domain Canonical:** Modern search crawlers (Googlebot, Bingbot) execute JavaScript. When rendering `howheight.pages.dev`, the crawler discovers `<meta name="robots" content="noindex, nofollow" />` AND reads the canonical tag pointing back to `https://howheight.org/`, completely neutralizing duplicate content risk.

---

## 5. Search Engine Crawler Directives

### `public/robots.txt`
```text
User-agent: *
Allow: /
Disallow: /dashboard/
Disallow: /api/
Disallow: /compare/share/

Sitemap: https://howheight.org/sitemap.xml
```
- **Strict Single Sitemap:** Only points to `https://howheight.org/sitemap.xml`. Zero mentions of `pages.dev`.
- **Private Route Protection:** Disallows application routes (`/dashboard/`, `/api/`, `/compare/share/`).

### HTTP Response Headers (`public/_headers`)
```headers
/*
  X-Robots-Tag: all
  Cache-Control: public, max-age=0, must-revalidate

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=86400, must-revalidate
```
- `X-Robots-Tag: all` explicitly instructs search engines that production pages are eligible for full indexing and snippet display, overriding any stale CDN caches.
- HTML documents are set to `max-age=0, must-revalidate` so updates and metadata changes propagate instantly.

---

## 6. Cloudflare Routing & Edge Configuration

In [`public/_redirects`](file:///g:/NEw%20website/Hight/public/_redirects), single-hop canonicalization ensures all non-canonical hostnames and aliases resolve directly:
```redirects
https://www.howheight.org/*   https://howheight.org/:splat  301!
http://www.howheight.org/*    https://howheight.org/:splat  301!
http://howheight.org/*        https://howheight.org/:splat  301!

/celebrity-height/            /celebrity-height-comparison/  301
/celebrity-height             /celebrity-height-comparison/  301
/fictional-character-height/  /fictional-character-height-comparison/  301
/fictional-character-height   /fictional-character-height-comparison/  301
```

---

## 7. XML Sitemap Strategy

Generated dynamically by [`src/pages/sitemap.xml.ts`](file:///g:/NEw%20website/Hight/src/pages/sitemap.xml.ts):
- Every `<loc>` entry uses `SITE.siteUrl` (`https://howheight.org`).
- Includes canonical category hubs, comparison pages, and internationalized routes for verified active locales (`en`, `hi`).
- Excludes private pages (`404`, `dashboard`, `share`).
- Tested across build artifacts: **0 references to `pages.dev`**.

---

## 8. Multilingual Hreflang Configuration

Implemented in [`src/layouts/Layout.astro`](file:///g:/NEw%20website/Hight/src/layouts/Layout.astro) using [`src/i18n/utils.ts`](file:///g:/NEw%20website/Hight/src/i18n/utils.ts):
- Emits `<link rel="alternate" hreflang="..." href="..." />` tags for supported locales and `x-default`.
- Every `href` target strictly begins with `https://howheight.org/`.
- **Suppressed on Noindex Pages:** When `noindex: true` is passed (e.g. `404.astro`), `alternateLinks` evaluates to an empty array `[]` so search engines never index alternative language versions of error or private routes.

---

## 9. 404 Error Page SEO Rules

Configured in [`src/pages/404.astro`](file:///g:/NEw%20website/Hight/src/pages/404.astro):
1. Passes `noindex={true}` to `Layout.astro`.
2. Emits `<meta name="robots" content="noindex, nofollow" />` in compiled static HTML.
3. Sets `canonicalUrl={undefined}`, preventing canonical tag emission (per Google Webmaster best practices, 404 pages must not claim canonical identity).
4. Emits zero `hreflang` tags.

---

## 10. Application / Private Route Isolation

- Routes like `/dashboard/` are explicitly marked `noindex={true}` and disallowed in `robots.txt`.
- Temporary share URLs (`/compare/share/`) are disallowed in `robots.txt`.
- These routes do not appear in `sitemap.xml`.

---

## 11. Asset Delivery & CDN Caching

To prevent stylesheet (CSS) and JavaScript bundle 404s or stale styles:
1. **Astro Hashed Assets (`/_astro/*`):** Cached immutably for 1 year (`max-age=31536000, immutable`). Since Astro includes content hashes in filenames (e.g., `index.d2LTiegh.css`), caches never become stale.
2. **Static Assets (`/assets/*`):** Cached for 24 hours (`max-age=86400, must-revalidate`).
3. **No Middleware Interception:** Cloudflare Functions middleware (`functions/_middleware.js`) has been permanently omitted to prevent edge routing conflicts with static assets.

---

## 12. Comprehensive 24-Test Matrix

The automated validation suite is located at [`scripts/test-domain-seo.mjs`](file:///g:/NEw%20website/Hight/scripts/test-domain-seo.mjs) and run with `npm run test:seo`.

| Test ID | Test Description | Result |
| :--- | :--- | :--- |
| **01** | `isProductionHost` returns true for `howheight.org` | **PASS** |
| **02** | `isProductionHost` returns true for `www.howheight.org` | **PASS** |
| **03** | `isProductionHost` returns false for `howheight.pages.dev` | **PASS** |
| **04** | `isPreviewHost` returns true for `howheight.pages.dev` and `*.pages.dev` | **PASS** |
| **05** | `isPreviewHost` returns false for `howheight.org` and `www.howheight.org` | **PASS** |
| **06** | `isIndexableHost` returns true for production and false for preview | **PASS** |
| **07** | `getCanonicalUrl` produces absolute canonical with trailing slash | **PASS** |
| **08** | `getCanonicalUrl` strips query parameters (`?utm_source=...`, etc.) | **PASS** |
| **09** | `getCanonicalUrl` strips hash fragments (`#canvas`, etc.) | **PASS** |
| **10** | `getCanonicalUrl` formats localized paths correctly with trailing slashes | **PASS** |
| **11** | `public/_redirects` contains canonical enforcement rules | **PASS** |
| **12** | `public/_headers` enforces `X-Robots-Tag: all` and asset caching | **PASS** |
| **13** | `public/robots.txt` points to `https://howheight.org/sitemap.xml` and 0 `pages.dev` | **PASS** |
| **14** | `src/layouts/Layout.astro` includes hostname-aware client script | **PASS** |
| **15** | `src/layouts/Layout.astro` conditionally suppresses canonicalUrl when `noindex: true` | **PASS** |
| **16** | `src/layouts/Layout.astro` conditionally suppresses hreflang when `noindex: true` | **PASS** |
| **17** | `src/pages/404.astro` sets `noindex={true}` | **PASS** |
| **18** | `dist/index.html` does NOT contain static `<meta name="robots" content="noindex` | **PASS** |
| **19** | `dist/404.html` DOES contain static noindex and DOES NOT contain canonical/hreflang | **PASS** |
| **20** | `dist/compare/index.html` has production self-canonical and no static noindex | **PASS** |
| **21** | Canonical tags across built sample pages use `https://howheight.org/` with `/` | **PASS** |
| **22** | Hreflang tags across built sample pages only reference `https://howheight.org` | **PASS** |
| **23** | Built sitemap files contain zero references to `pages.dev` | **PASS** |
| **24** | No public content HTML file in `dist/` contains static noindex | **PASS** |

---

## 13. Live Production Validation Results

Verified against active production deployment `https://howheight.org/`:

```
====================================================
1. Checking Production Domain: https://howheight.org/
====================================================
Status: 200 OK
X-Robots-Tag: all
Cache-Control: public, max-age=0, must-revalidate
cf-cache-status: DYNAMIC
HTML Length: 155,044 bytes
Has static noindex? false
Canonical: https://howheight.org/

====================================================
2. Checking Production as Googlebot:
====================================================
Status: 200 OK
X-Robots-Tag: all
Has static noindex for Googlebot? false
Canonical for Googlebot: https://howheight.org/

====================================================
3. Checking Sample Subpages:
====================================================
/compare/ -> status: 200, x-robots-tag: all, canonical: https://howheight.org/compare/
/celebrity-height-comparison/ -> status: 200, x-robots-tag: all, canonical: https://howheight.org/celebrity-height-comparison/

====================================================
4. Checking Preview Domain: https://howheight.pages.dev/
====================================================
Status: 200 OK
X-Robots-Tag: all
Has client-side preview noindex script? true
Canonical points to: https://howheight.org/

====================================================
5. Checking 404 Behavior: https://howheight.org/404/
====================================================
404 Status: 200 OK
404 has noindex tag? true (<meta name="robots" content="noindex, nofollow">)
404 canonical: NONE (correct)

====================================================
6. Checking CSS & JS Static Bundles
====================================================
CSS: /_astro/index.d2LTiegh.css -> Status: 200 OK, Cache-Control: public, max-age=31536000, immutable
JS: /_astro/hoisted.BfcXenOR.js -> Status: 200 OK, Cache-Control: public, max-age=31536000, immutable
```

---

## 14. Google Search Console & Bing Webmaster Guidelines

To resolve any past "Excluded by 'noindex' tag" notices in Google Search Console:

1. **Submit URL Inspection in GSC:**
   - Go to [Google Search Console](https://search.google.com/search-console).
   - In the top search bar, enter `https://howheight.org/`.
   - Click **Test Live URL**.
   - Confirm **"URL is available to Google"** with **"Indexing allowed: Yes"** and **"User-declared canonical: https://howheight.org/"**.
   - Click **Request Indexing**.
2. **Re-submit Sitemap:**
   - In GSC, navigate to **Sitemaps** > Enter `sitemap.xml` > Click **Submit**.
3. **Bing Webmaster Tools & IndexNow:**
   - Run `npm run indexnow` to automatically submit all production URLs to Bing, Yandex, and IndexNow participating engines.

---

## 15. Deployment & Maintenance Runbook

### Production Build & Verification Workflow
```bash
# 1. Build static production site
npm run build

# 2. Run automated 24-test domain SEO matrix
npm run test:seo

# 3. Commit and push to main branch
git add .
git commit -m "feat(seo): your commit description"
git push origin main

# 4. Deploy directly to Cloudflare Pages production branch
npx wrangler pages deploy dist --project-name=howheight --branch=main

# 5. Run live HTTP verification
node scripts/verify-live.mjs
```

### Critical Rules
- **ALWAYS** include `--branch=main` when deploying via `wrangler pages deploy dist`. Omission will create an isolated preview deployment and fail to update the custom domain.
- **NEVER** add `functions/_middleware.js` for headers or redirects, as it intercepts static asset requests and breaks stylesheet routing.
- **ALWAYS** run `npm run test:seo` before triggering production deployments.
