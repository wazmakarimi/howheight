# Production Indexability Fix: Removal of Accidental X-Robots-Tag

**Target URL:** `https://howheight.org/`  
**Date of Remediation:** September 19, 2026  
**Status:** RESOLVED & VERIFIED LIVE ON PRODUCTION

---

## 1. Exact Source of `X-Robots-Tag: noindex`

The `X-Robots-Tag: noindex` HTTP response header was emitted by Cloudflare Pages edge servers serving requests to `howheight.org`.

During previous troubleshooting sessions, an attempt to prevent indexing of the Cloudflare Pages staging/preview domain (`howheight.pages.dev`) added a global wildcard rule into the `_headers` file. Because Cloudflare Pages reads `_headers` for **all** attached domains unless explicitly restricted by hostname patterns, that header was applied uniformly to every incoming request, including those directed to the authoritative production domain `howheight.org`.

Google Search Console crawled `https://howheight.org/` while this rule was active, correctly detecting the HTTP header:
```
Page cannot be indexed: Excluded by 'noindex' tag
Indexing allowed? NO
Reason: 'noindex' detected in 'X-Robots-Tag' HTTP header
```

---

## 2. File and Rule Responsible

- **File Responsible:** `public/_headers` (copied to `dist/_headers` during build).
- **Offending Rule (Prior):**
  ```headers
  /*
    X-Robots-Tag: noindex, nofollow
  ```
  *(and subsequent unconstrained wildcard headers applied globally across all hostnames)*

---

## 3. Why It Affected `howheight.org`

Cloudflare Pages attaches all custom domains (`howheight.org`, `www.howheight.org`) and default project subdomains (`howheight.pages.dev`, `*.pages.dev`) to the exact same deployment.

When a header rule uses the root path pattern `/*` without a domain prefix:
```headers
/*
  X-Robots-Tag: noindex
```
Cloudflare Pages matches **any** hostname serving that project. Consequently, both the staging URL and the live production domain received the identical response header.

---

## 4. Changes Made

We refactored `public/_headers` to utilize Cloudflare Pages' official **hostname-specific matching pattern**.

### Modernized `public/_headers` Architecture:
```headers
# ==============================================================================
# Cloudflare Pages Domain-Specific Headers: HowHeight
# ==============================================================================

# Production Custom Domain (Authoritative & Indexable)
https://howheight.org/*
  X-Robots-Tag: all
  Cache-Control: public, max-age=0, must-revalidate

https://www.howheight.org/*
  X-Robots-Tag: all
  Cache-Control: public, max-age=0, must-revalidate

# Cloudflare Pages Preview Domain & Subdomains (Strictly Non-Indexable)
https://howheight.pages.dev/*
  X-Robots-Tag: noindex, nofollow

https://:project.pages.dev/*
  X-Robots-Tag: noindex, nofollow

# Static Hashed Assets (1 year immutable)
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

# Static Public Assets (1 day revalidation)
/assets/*
  Cache-Control: public, max-age=86400, must-revalidate
```

### Key Technical Improvements:
1. **Domain-Specific Targeting:** Production `https://howheight.org/*` explicitly receives `X-Robots-Tag: all` and `Cache-Control: public, max-age=0, must-revalidate`.
2. **Preview Isolation:** `https://howheight.pages.dev/*` and `https://:project.pages.dev/*` receive `X-Robots-Tag: noindex, nofollow`.
3. **No Global Wildcard `X-Robots-Tag`:** Eliminated `/* X-Robots-Tag: noindex` so the custom domain can never accidentally inherit a blocking directive.
4. **Asset Protection:** Kept `/_astro/*` and `/assets/*` rules intact so stylesheets and client JavaScript load with HTTP 200 and immutable caching.

---

## 5. Production Header Before vs After

| Header Name | Before (GSC Failure) | After (Remediated Live) |
| :--- | :--- | :--- |
| **HTTP Status** | `200 OK` | `200 OK` |
| **`X-Robots-Tag`** | `noindex` *(or `noindex, nofollow`)* | **`all`** *(Indexable & Followable)* |
| **`Cache-Control`** | `public, s-maxage=604800` *(stale cache)* | **`public, max-age=0, must-revalidate`** |
| **HTML `<meta name="robots">`** | *None on index page* | **None on public pages** *(Clean)* |
| **User-Declared Canonical** | `https://howheight.org/` | **`https://howheight.org/`** |

---

## 6. Cloudflare Pages (`pages.dev`) Behavior

The preview domain is strictly prevented from being indexed:
1. **HTTP Response Header:** Matches `https://howheight.pages.dev/*` rule, emitting `X-Robots-Tag: noindex, nofollow`.
2. **Client-Side Hostname Guard:** An inline script in `Layout.astro` detects `window.location.hostname` ending in `.pages.dev` and synchronously creates and appends `<meta name="robots" content="noindex, nofollow">` into the DOM.
3. **Cross-Domain Canonical:** Canonical tags on `pages.dev` continue to declare `https://howheight.org/...` as the authoritative source.

---

## 7. Canonical URL Verification

All canonical links on the production website are verified:
- `https://howheight.org/` → `<link rel="canonical" href="https://howheight.org/" />`
- `https://howheight.org/compare/` → `<link rel="canonical" href="https://howheight.org/compare/" />`
- `https://howheight.org/celebrity-height-comparison/` → `<link rel="canonical" href="https://howheight.org/celebrity-height-comparison/" />`
- **Guarantees:** Always ends with trailing slash `/`, strips tracking query params (`?utm_*`), and strips anchor fragments (`#*`).

---

## 8. Sitemap Verification

- File: `https://howheight.org/sitemap.xml`
- Output: 100% of all `<loc>` entries point to `https://howheight.org/...`.
- Status: **Zero** mentions of `pages.dev`.
- Accessible and returning HTTP `200 OK`.

---

## 9. Robots.txt Verification

- File: `https://howheight.org/robots.txt`
- Contents:
  ```text
  User-agent: *
  Allow: /
  Disallow: /dashboard/
  Disallow: /api/
  Disallow: /compare/share/

  Sitemap: https://howheight.org/sitemap.xml
  ```
- Status: Crawling is **allowed** for the entire public website. Only private application routes (`/dashboard/`, `/api/`, `/compare/share/`) are disallowed.

---

## 10. Multilingual Hreflang Verification

- Every alternate hreflang tag explicitly points to `https://howheight.org/` (e.g. `https://howheight.org/hi/compare/`).
- Verified: Zero references to `pages.dev` in alternate links.
- Error pages (`404.astro`) omit alternate hreflang tags to avoid indexing dead language routes.

---

## 11. Automated Test Suite Results (24/24 Passed)

Execution command: `npm run test:seo`

```
===============================================================
🧪 RUNNING HOWHEIGHT.ORG DOMAIN SEO & CANONICAL AUDIT MATRIX
===============================================================

--- Test Group 1: SEO Hostname & Canonical Utilities ---
  ✅ [PASS] 1. isProductionHost returns true for howheight.org
  ✅ [PASS] 2. isProductionHost returns true for www.howheight.org
  ✅ [PASS] 3. isProductionHost returns false for howheight.pages.dev
  ✅ [PASS] 4. isPreviewHost returns true for howheight.pages.dev and hash.pages.dev
  ✅ [PASS] 5. isPreviewHost returns false for howheight.org
  ✅ [PASS] 6. isIndexableHost returns true for production and false for preview
  ✅ [PASS] 7. getCanonicalUrl produces absolute canonical with trailing slash
  ✅ [PASS] 8. getCanonicalUrl strips query parameters (?utm_source=..., etc.)
  ✅ [PASS] 9. getCanonicalUrl strips hash fragments (#canvas, etc.)
  ✅ [PASS] 10. getCanonicalUrl formats localized paths correctly with trailing slashes

--- Test Group 2: Edge Routing & CDN Headers ---
  ✅ [PASS] 11. public/_redirects routes howheight.pages.dev to howheight.org
  ✅ [PASS] 12. public/_headers enforces domain-specific rules (all for prod, noindex for pages.dev)
  ✅ [PASS] 13. public/robots.txt points to https://howheight.org/sitemap.xml and no pages.dev

--- Test Group 3: Layout & Template Safeguards ---
  ✅ [PASS] 14. src/layouts/Layout.astro includes hostname-aware client script
  ✅ [PASS] 15. src/layouts/Layout.astro conditionally suppresses canonicalUrl when noindex is true
  ✅ [PASS] 16. src/layouts/Layout.astro conditionally suppresses hreflang when noindex is true
  ✅ [PASS] 17. src/pages/404.astro sets noindex={true}

--- Test Group 4: Production Build Output Inspection (dist) ---
  ✅ [PASS] 18. dist/index.html does NOT contain static <meta name="robots" content="noindex
  ✅ [PASS] 19. dist/404.html DOES contain static noindex and DOES NOT contain canonical tag
  ✅ [PASS] 20. dist/compare/index.html has production self-canonical and no static noindex
  ✅ [PASS] 21. Canonical tags across sample built pages all use https://howheight.org and end with /
  ✅ [PASS] 22. Hreflang tags across sample built pages only reference https://howheight.org
  ✅ [PASS] 23. Sitemap files contain zero references to pages.dev
  ✅ [PASS] 24. No public content HTML file in dist contains static noindex

===============================================================
📊 TEST RESULTS: 24 PASSED, 0 FAILED
===============================================================
```

---

## 12. Final Deployment & Live Production Verification

Deployed to Cloudflare Pages production (`--branch=main`).

### Live Endpoint Check Output:
- **`https://howheight.org/`:**
  - Status: `200 OK`
  - `X-Robots-Tag`: `all`
  - `Cache-Control`: `public, max-age=0, must-revalidate`
  - Static noindex in HTML: `false`
  - Canonical: `https://howheight.org/`
- **`https://howheight.org/celebrity-height-comparison/`:**
  - Status: `200 OK`
  - `X-Robots-Tag`: `all`
  - Canonical: `https://howheight.org/celebrity-height-comparison/`
- **`https://howheight.pages.dev/`:**
  - Injected Client Robots Meta: `<meta name="robots" content="noindex, nofollow" />`
  - Canonical Target: `https://howheight.org/`
- **`https://howheight.org/404/`:**
  - Status: `200 OK` (Serves custom 404 document)
  - Robots Meta: `<meta name="robots" content="noindex, nofollow" />`
  - Canonical: Omitted
- **CSS & JS Static Chunks:**
  - `/_astro/index.*.css` → Status `200 OK`, `Cache-Control: public, max-age=31536000, immutable`
  - `/_astro/hoisted.*.js` → Status `200 OK`, `Cache-Control: public, max-age=31536000, immutable`
