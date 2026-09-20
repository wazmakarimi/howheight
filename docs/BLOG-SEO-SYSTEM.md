# HowHeight.org — Master SEO Blog & Content System Documentation

## 1. Overview & Objectives

The **HowHeight Master SEO Blog Content System** is an intent-focused topical authority engine engineered to capture high-intent organic search queries around height comparisons, anthropometric science, athletic biomechanics, celebrity profiles, everyday scale benchmarks, and animal dimensions.

### Core Principles
1. **Search Intent Focused**: Every article directly answers the primary query in an above-the-fold Quick Answer card.
2. **Interactive Visual Tool Preloading**: Articles seamlessly embed the precision orthographic canvas preloaded *only* with the verified entities relevant to that topic.
3. **P0 Performance Guarantee**: Static page HTML payloads remain strictly under 140 KB (averaging ~120 KB), completely avoiding importing the full 1,400+ asset manifest into the static page bundle.
4. **Authoritative Structured Data**: Every article generates schema.org `BlogPosting`, `BreadcrumbList`, and `FAQPage` JSON-LD.
5. **Full Multilingual Parity**: Published across all 9 supported locales (`en`, `hi`, `es`, `fr`, `de`, `pt`, `ja`, `ko`, `ar`) with reciprocal `hreflang` tags and `x-default`.
6. **Zero pages.dev Leaks & Canonical Integrity**: Every canonical URL points strictly to `https://howheight.org/`, with zero static `noindex` directives.

---

## 2. Directory Structure & Architecture

```
g:/NEw website/Hight/
├── src/
│   ├── data/
│   │   ├── blog/
│   │   │   ├── types.ts          # BlogArticle, BlogCategory, QuickAnswer interfaces
│   │   │   ├── articles.ts       # 6 core foundational articles & category taxonomy
│   │   │   └── index.ts          # Data query helpers (getAllArticles, getArticleBySlug, etc.)
│   │   ├── comparisons.ts        # Enhanced resolveComparisonItems with custom height support
│   │   └── celebrities.ts        # Added verified Lionel Messi & Cristiano Ronaldo entities
│   ├── components/
│   │   └── pages/
│   │       ├── BlogIndexPage.astro    # Blog hub with category filters & featured lead
│   │       └── BlogArticlePage.astro  # Single article layout with preloaded tool & schemas
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── index.astro       # /blog/
│   │   │   └── [slug].astro      # /blog/[slug]/
│   │   └── [locale]/
│   │       └── blog/
│   │           ├── index.astro   # /[locale]/blog/
│   │           └── [slug].astro  # /[locale]/blog/[slug]/
│   ├── lib/
│   │   └── seo.ts                # Added buildBlogPostingSchema generator
│   └── i18n/
│       └── utils.ts              # Registered 'blog' in STATIC_LOCALIZED_ROUTES & isRouteLocalized
├── scripts/
│   └── test-blog-seo.mjs         # 158-point automated SEO, schema, hreflang & size test suite
└── docs/
    └── BLOG-SEO-SYSTEM.md        # System architecture documentation
```

---

## 3. Initial Article Set (Core Pillars)

| Slug | Pillar / Category | Entities Featured | Primary Search Intent |
| :--- | :--- | :--- | :--- |
| `how-height-comparison-works` | **Guides & Science** | Average Male (176 cm), Average Female (162 cm) | "How height comparison works", "eye lines vs vertex", perspective distortion |
| `dwayne-johnson-height-comparison` | **Celebrities** | Dwayne Johnson (196 cm), Average Male (176 cm), Riding Horse withers (160 cm) | "Dwayne Johnson height comparison", "The Rock real height vs average man" |
| `messi-vs-ronaldo-height-comparison` | **Sports** | Lionel Messi (170 cm), Cristiano Ronaldo (187 cm) | "Messi vs Ronaldo height difference", athletic center of gravity, agility physics |
| `human-vs-horse-height-comparison` | **Animals** | Average Human (176 cm), Riding Horse withers (160 cm / 15.3 hands) | "Human vs horse height", equine hands measurement, withers vs head vertex |
| `human-vs-door-height-comparison` | **Objects** | Average Human (176 cm), Standard Residential Door (203 cm / 80 in) | "Standard door height vs human", doorway headroom, architecture clearance |
| `what-does-6-feet-look-like` | **Scale & Benchmarks** | 6 ft Person (183 cm), Average Female (162 cm), Standard Door (203 cm) | "What does 6 feet look like", 6 ft percentiles, household scale proxies |

---

## 4. Technical Implementation Details

### A. Preloading `<ComparisonTool />` Without Performance Bloat
In `src/components/pages/BlogArticlePage.astro`:
```astro
---
const preloadedItems = resolveComparisonItems(article.featuredEntities);
---
<ComparisonTool
  initialItems={preloadedItems}
  locale={locale}
  showQuickCompare={false}
/>
```
- Only the 2–3 featured entities are serialized into `data-initial-items`.
- The static HTML payload is approximately **120 KB**, well within the P0 <140 KB performance requirement.

### B. Schema.org Structured Data
Every article renders three JSON-LD objects:
1. **BlogPosting**: Emits `headline`, `datePublished`, `dateModified`, `author`, `publisher`, `image`, and `articleSection`.
2. **BreadcrumbList**: Generated automatically via `<Breadcrumbs />` (`Home` -> `Blog` -> `Article Title`).
3. **FAQPage**: Generated automatically via `<FAQSection />` mapping the article's question-answer pairs.

### C. Multilingual Support & Canonical Rules
- Root URL: `https://howheight.org/blog/[slug]/`
- Localized URLs: `https://howheight.org/[locale]/blog/[slug]/`
- Reciprocal `hreflang` tags generated for all 9 supported languages plus `x-default`.
- Included dynamically in `sitemap.xml` with proper change frequencies and priorities.

---

## 5. How to Add a New Article

To publish a new article:

1. Open `src/data/blog/articles.ts`.
2. Append a new `BlogArticle` entry with:
   - Unique `slug` (kebab-case, e.g., `zendaya-height-comparison`).
   - `title`, `h1`, and `description`.
   - `category`: `'guides' | 'celebrities' | 'sports' | 'animals' | 'objects' | 'anime' | 'scale'`.
   - `author`: Name, role, bio.
   - `quickAnswer`: Direct answer summary, core takeaway, and key data points.
   - `featuredEntities`: Array of `{ category, id, customHeightCm?, label? }`.
   - `comparisonTable`: Headers and rows.
   - `contentSections`: Structured headings, paragraphs, and optional callout boxes.
   - `faq`: Questions and answers for search snippets.
   - `sources`: Authoritative citations.
   - `relatedSlugs`: Related articles.
3. Run test verification:
   ```bash
   npm run build
   npm test
   ```

---

## 6. Automated Verification

Run all test suites:
```bash
npm test
```
This executes:
1. `npm run test:seo` — 24/24 Domain SEO, canonicals, noindex prevention, preview domain security.
2. `npm run test:cluster` — 56/56 Topical cluster & internal linking tests.
3. `npm run test:blog` — 158/158 Blog SEO, payload size budget (<140 KB), single H1, canonicals, schema validation, and sitemap checks.
