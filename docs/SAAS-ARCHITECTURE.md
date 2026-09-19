# HowHeight.org — SaaS-Ready Architecture Blueprint

**Project:** HowHeight (HowHeight.org)  
**Framework:** Astro.js 4/5 (Static-First SSG)  
**Deployment Target:** Cloudflare Pages + Cloudflare Workers + D1 + R2  
**Current Status:** Architectural Preparation Complete (Public SEO Platform 100% Preserved)  
**Document Version:** 1.0.0 (Production Blueprint)  

---

## Executive Summary

HowHeight.org operates as a dual-layer platform:
1. **Public SEO Platform:** High-performance, statically generated (SSG), crawlable, multilingual visual height comparison directory with zero authentication barriers.
2. **SaaS Application Layer:** Dynamic, authenticated workspace for user accounts, cloud-saved comparisons, custom entity modeling, private sharing links, R2 asset storage, and tiered feature entitlements.

**Guiding Architectural Invariant:**  
*Public SEO First, SaaS Second.* The public comparison engine and SEO content remain 100% free, fast, and accessible without login. The SaaS layer is completely decoupled so it can be enabled or enhanced without altering or rebuilding the public platform.

---

## 1. Current Architecture

HowHeight is built using Astro.js with static site generation (`output: 'static'`).

```
┌───────────────────────────────────────────────────────────────────────┐
│                           Client Browser                              │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │ HTTPS
                                   ▼
┌───────────────────────────────────────────────────────────────────────┐
│                    Cloudflare CDN / Edge Network                     │
└──────────────────────────────────┬────────────────────────────────────┘
                                   │
              ┌────────────────────┴────────────────────┐
              ▼                                         ▼
   ┌───────────────────────┐                 ┌───────────────────────┐
   │  Static Pre-Rendered  │                 │  Static Asset Storage │
   │   HTML (450 Pages)    │                 │  (SVGs, WebPs, PNGs)  │
   │  - Home, Hubs, SEO    │                 │  /assets/entities/... │
   │  - Detail Pages       │                 │                       │
   └───────────────────────┘                 └───────────────────────┘
```

- **Framework:** Astro 4/5 with Tailwind CSS and TypeScript.
- **Routing:** File-based static routing with 9-language i18n (`/`, `/hi/`, `/es/`, etc.).
- **Data Layer:** In-memory static registries (`src/data/assetRegistry.ts`, `src/data/assets.ts`, `src/data/categories.ts`).
- **Rendering:** Baseline-aligned interactive SVG/PNG stage rendered via client-side TypeScript (`src/scripts/comparison-app.ts`).

---

## 2. Public Website Architecture

The public platform is optimized for organic search traffic, Core Web Vitals, and frictionless user adoption.

### Route Taxonomy
```
/
├── [locale]/                               (e.g., /hi/, /es/, /de/, etc.)
├── compare/                                (Interactive comparison tool)
│   ├── [entity]-vs-[entity]/               (Curated pair comparisons)
│   └── ...
├── celebrity-height-comparison/            (Celebrity index & directory)
│   └── [slug]/                             (Individual celebrity detail pages)
├── anime-height-comparison/                (Anime character index & directory)
│   └── [slug]/
├── film-height-comparison/                 (Film character index & directory)
│   └── [slug]/
├── animal-height-comparison/               (Animal index & detail pages)
│   └── [slug]/
├── object-height-comparison/               (Everyday & architectural objects)
│   └── [slug]/
├── plant-height-comparison/                (Flora & botanical entities)
│   └── [slug]/
└── sports-height-comparison/               (Athletic equipment & athletes)
    └── [slug]/
```

### Public Principles
- **No Login Required:** Anyone can launch the visualizer, compare any combination of public entities, adjust scales, and download free standard charts.
- **Pure Static Rendering:** All headings, verified heights, metadata, and FAQ questions are rendered in pure static HTML for instant bot crawling.
- **Independent Asset Pipeline:** Public entity SVG/PNG graphics are stored under `/assets/entities/` and served directly from CDN edge storage.

---

## 3. Future SaaS Architecture

When user accounts and subscriptions are activated, the architecture branches into an edge-native hybrid topology:

```
                               HowHeight.org
                                     │
                 ┌───────────────────┴───────────────────┐
                 │                                       │
           Public Layer                              SaaS Layer
       (Static-First Pages)                    (Workers & API Routes)
                 │                                       │
           Cloudflare CDN                         Cloudflare Worker
         (Edge Static HTML)                              │
                 │                     ┌─────────────────┼─────────────────┐
                 │                     │                 │                 │
                 │                 Cloudflare        Cloudflare       Billing API
                 │                     D1                R2            (Stripe /
                 │                (SQL Database)   (Object Store)   Lemon Squeezy)
                 │                     │                 │
                 ▼                     ▼                 ▼
          Crawler / Visitor        User State       User Images
          (Zero Login Req)      & Comparisons     & Custom Assets
```

### SaaS Route Taxonomy
All application routes live in an isolated namespace protected from search indexation:
```
/dashboard/
├── /dashboard/                     (Overview & quick actions)
├── /dashboard/comparisons/         (User's saved comparison charts)
├── /dashboard/history/             (Comparison history)
├── /dashboard/entities/            (User-created custom entities)
├── /dashboard/assets/              (Uploaded reference images)
├── /dashboard/billing/             (Subscription & plan management)
└── /dashboard/settings/            (Preferences, preferred units, API keys)

/api/
├── /api/auth/*                     (Authentication & session validation)
├── /api/user/*                     (Profile management)
├── /api/comparisons/*              (CRUD for saved comparisons)
├── /api/entities/*                 (CRUD for custom entities)
├── /api/uploads/*                  (Presigned R2 upload URLs)
├── /api/subscription/*            (Checkout & customer portal sessions)
└── /api/usage/*                    (Feature limits & metric increments)
```

---

## 4. Entity Model: Public vs. User Entities

Public verified entities and user-created custom entities are kept completely distinct at the data layer to maintain data integrity.

### Public Entity (`PublicEntity`)
Curated, immutable, and bundled with the codebase.
```typescript
export interface PublicEntity {
  id: string;             // e.g., "male-010", "celebrity-tom-cruise"
  entityId: string;
  name: string;           // "Tom Cruise"
  slug: string;           // "tom-cruise"
  category: EntityCategory;
  heightCm: number;       // 170
  image: string;          // Relative asset path or SVG ref
  description?: string;
  source: 'public';
  metadata?: {
    gender?: 'male' | 'female';
    profession?: string;
    franchise?: string;
    verified?: boolean;
  };
}
```

### User Custom Entity (`CustomEntity`)
Dynamic, mutable, and stored in Cloudflare D1 with images in Cloudflare R2.
```typescript
export interface CustomEntity {
  id: string;             // e.g., "usr_ent_991823"
  userId: string;         // Owner reference (Foreign Key to users.id)
  name: string;           // "My Friend Alex"
  heightCm: number;       // 184
  category: EntityCategory | string;
  imageUrl?: string;      // Cloudflare R2 URL
  aspectRatio?: number;
  description?: string;
  source: 'custom';
  visibility: 'private' | 'unlisted' | 'public';
  createdAt: string | Date;
  updatedAt: string | Date;
}
```

### Unified Engine Abstraction (`ComparisonEntity`)
The height comparison canvas operates exclusively on `ComparisonEntity`:
```typescript
export type ComparisonEntity = PublicEntity | CustomEntity;
```
Through `toComparisonItem(entity)` and `entityAdapter.ts`, the comparison engine processes both public and custom entities without conditional branch duplication.

---

## 5. Comparison Model: Reference-Based Architecture

Saved comparisons **never duplicate** full entity definitions. They store lightweight references to entity IDs, preserving database storage and ensuring that if a public entity's reference height is updated, saved comparisons stay accurate.

```typescript
export interface ComparisonEntityReference {
  type: 'public' | 'custom';
  entityId: string; // References public asset ID or user custom entity ID
  overrides?: {
    customName?: string;
    customHeightCm?: number;
    color?: string;
    opacity?: number;
    positionX?: number;
  };
}

export interface SavedComparison {
  id: string;
  userId: string;
  title: string;
  description?: string;
  entities: ComparisonEntityReference[];
  settings: {
    rulerUnit: 'cm' | 'ft';
    sortMode: 'added' | 'height-asc' | 'height-desc';
    positionMode: 'auto' | 'manual';
    zoomLevel: number;
    backgroundColor?: string;
  };
  visibility: 'public' | 'unlisted' | 'private';
  shareSlug?: string;
  createdAt: string;
  updatedAt: string;
}
```

---

## 6. User Model

The user identity layer is decoupled from authentication providers, allowing seamless integration with Lucia Auth, Supabase, Auth0, or Cloudflare Zero Trust:

```typescript
export interface User {
  id: string;             // Unique identifier
  email: string;          // User email
  name: string;           // Display name
  avatar?: string;        // Profile picture URL
  locale: string;         // Preferred UI locale (en, hi, es, etc.)
  role: 'user' | 'creator' | 'admin';
  createdAt: string;
  updatedAt: string;
  subscription?: UserSubscriptionSummary;
}
```

### Server-Side Data Ownership Principle
APIs never trust a `userId` supplied in request bodies or query parameters. The authenticated user identity is strictly extracted from verified HTTP session cookies or Authorization headers via `getAuthUser(request)`.

---

## 7. Subscription Model

Dynamic tiered subscription system supporting monthly and annual billing cycles:

| Plan | Pricing | Saved Comparisons | Custom Entities | Monthly Exports | Upload Size | Private Sharing |
|---|---|:---:|:---:|:---:|:---:|:---:|
| **Free** | \$0 / mo | 5 | 3 | 3 / month | 2 MB | No |
| **Pro** | \$4.99 / mo | Unlimited | Unlimited | Unlimited | 25 MB | Yes |
| **Enterprise** | \$19.99 / mo | Unlimited | Unlimited | Unlimited | 100 MB | Yes + API |

### Dynamic Entitlement Check (No Hardcoded Conditions)
Developers never write `if (user.isPro)` or `if (tier === 'pro')` inside components. All feature authorization is centralized:

```typescript
import { canUse, hasReachedLimit } from '../lib/saas';

// Centralized capability check:
if (!canUse(user, 'privateComparisons')) {
  throw new Error('Private comparisons require a Pro subscription.');
}

// Numerical quota check:
if (hasReachedLimit(user, 'maxCustomEntities', currentCount)) {
  throw new Error('Custom entity quota reached for current plan.');
}
```

---

## 8. Feature Entitlement System

Located at [`src/lib/saas/entitlements.ts`](file:///g:/NEw%20website/Hight/src/lib/saas/entitlements.ts):

```
User Action
    │
    ▼
getUserPlan(user) ────► Evaluates subscription status (active/trialing)
    │
    ▼
PLANS[tier].limits ───► Retrieves feature limits
    │
    ▼
canUse(user, feature) ──► Returns true/false
```

Supported Feature Keys:
- `savedComparisons`
- `customEntities`
- `imageUploads`
- `exports`
- `privateComparisons`
- `advancedCustomization`
- `highResCanvas`
- `apiAccess`

---

## 9. Storage Strategy: Cloudflare R2 vs. Public Assets

To maintain optimal CDN caching and security, public and user assets are strictly partitioned:

### Public Assets:
- **Location:** Static directory (`public/assets/entities/`)
- **URL Format:** `https://howheight.org/assets/entities/[category]/[file].svg`
- **Cache Policy:** `public, max-age=31536000, immutable`
- **Access:** Unrestricted public CDN edge delivery

### User Assets (Custom Uploads):
- **Location:** Cloudflare R2 Private Bucket (`env.R2_USER_ASSETS`)
- **Object Key Schema:** `user/{userId}/{assetId}.{extension}`
- **URL Format:** `https://assets.howheight.org/user/[userId]/[assetId].[ext]`
- **Upload Method:** Presigned R2 PUT URLs generated server-side via `generatePresignedUploadUrl()`
- **Validation:** Strict MIME-type checking (`image/png`, `image/jpeg`, `image/webp`, `image/svg+xml`) and plan-based byte size limits.

---

## 10. API Strategy

Standardized RESTful Worker endpoints returning structured JSON payloads:

```typescript
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta?: {
    timestamp: string;
    requestId?: string;
  };
}
```

### Planned API Endpoints
1. `POST /api/comparisons`: Save current comparison canvas.
2. `GET /api/comparisons`: List user's saved comparisons.
3. `POST /api/entities`: Create custom user entity.
4. `POST /api/uploads/presign`: Request presigned R2 upload URL.
5. `POST /api/subscription/checkout`: Create Stripe / Lemon Squeezy checkout session.
6. `POST /api/subscription/portal`: Create customer billing management portal link.
7. `POST /api/subscription/webhook`: Handle subscription lifecycle events.

---

## 11. Security Strategy

1. **Authentication:** Cryptographically signed session tokens (JWT or HTTP-only Secure SameSite cookies).
2. **Authorization & Data Isolation:** Every database query filters by `WHERE user_id = ?`. A user cannot view, modify, or delete another user's saved comparisons, custom entities, or files.
3. **MIME & Payload Sanitization:** Uploaded SVGs are sanitized to prevent Stored Cross-Site Scripting (XSS). Binary images are validated against magic byte signatures.
4. **Rate Limiting:** Edge-level rate limiting using Cloudflare Rate Limiting Rules or KV leaky buckets for API routes. Static SEO pages are exempt from API rate limits.
5. **No Secret Exposure:** Database connection strings, R2 access keys, and payment provider webhook secrets are stored exclusively in Cloudflare Worker environment variables.

---

## 12. SEO Separation & Indexation Controls

Private application pages must never leak into search engine indexes:

### Technical Guardrails:
1. **Robots Meta Tag:** `Layout.astro` supports an explicit `noindex?: boolean` prop. On `/dashboard/` and private share links, it outputs:
   ```html
   <meta name="robots" content="noindex, nofollow" />
   ```
2. **Robots.txt Rules:** `public/robots.txt` explicitly disallows crawler access:
   ```txt
   User-agent: *
   Allow: /
   Disallow: /dev/
   Disallow: /dashboard/
   Disallow: /api/
   Disallow: /compare/share/
   ```
3. **Hreflang Suppression:** When `noindex` is active, public hreflang alternates are automatically suppressed to avoid indexation confusion.

---

## 13. Multilingual SaaS (i18n) Strategy

The SaaS dashboard leverages the exact same i18n architecture as the public platform:
- Uses existing translation files in `src/i18n/translations/`.
- Routes localized dashboards naturally:
  - Default: `/dashboard/`
  - Hindi: `/hi/dashboard/`
  - Spanish: `/es/dashboard/`
  - German: `/de/dashboard/`
- Preserves the user's selected locale across both public and authenticated sessions.

---

## 14. Future Cloudflare Architecture

```
Cloudflare Pages (Static Assets & Astro HTML)
       ▲
       │
Cloudflare Worker (Reverse Proxy / Routing Gateway)
       │
       ├─► Static Route? ──► Serve from Cloudflare Pages Edge Cache
       │
       └─► /api/* or /dashboard/* (dynamic)?
                 │
                 ▼
         Worker Handler
           ├── Bindings:
           │     ├── env.DB (Cloudflare D1 SQL)
           │     ├── env.R2_ASSETS (Cloudflare R2 Bucket)
           │     └── env.KV_CACHE (Cloudflare KV for session & rate limits)
           │
           └── External Services:
                 └── Payment Gateway (Stripe / Lemon Squeezy Webhooks)
```

### Planned Cloudflare D1 SQL Schema (`schema.sql`):
```sql
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  avatar_url TEXT,
  locale TEXT DEFAULT 'en',
  role TEXT DEFAULT 'user',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  plan_id TEXT NOT NULL DEFAULT 'free',
  status TEXT NOT NULL DEFAULT 'active',
  billing_interval TEXT DEFAULT 'monthly',
  current_period_start DATETIME,
  current_period_end DATETIME,
  cancel_at_period_end INTEGER DEFAULT 0,
  provider TEXT NOT NULL,
  provider_customer_id TEXT,
  provider_subscription_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE custom_entities (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  name TEXT NOT NULL,
  height_cm REAL NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  aspect_ratio REAL DEFAULT 1.0,
  description TEXT,
  visibility TEXT DEFAULT 'private',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE saved_comparisons (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  entities_json TEXT NOT NULL,
  settings_json TEXT NOT NULL,
  visibility TEXT DEFAULT 'private',
  share_slug TEXT UNIQUE,
  view_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_assets (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  file_name TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  r2_key TEXT NOT NULL UNIQUE,
  url TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 15. Migration Path: From Current Site to Full SaaS

The architecture allows progressive activation across four zero-downtime phases:

```
Phase 1: Architectural Foundation (COMPLETED)
├── TypeScript interfaces (src/types/saas.ts, src/types/entity.ts)
├── Entity & Comparison adapters (ComparisonEntity)
├── Dynamic plan & feature flags (src/config/features.ts)
├── Entitlement system (canUse)
├── Service abstractions (Auth, Billing, Storage, Comparisons)
└── Route protection (noindex & robots.txt)

Phase 2: Cloudflare Bindings & Auth (Future)
├── Enable Cloudflare Pages SSR / hybrid mode via @astrojs/cloudflare
├── Deploy D1 database schema
├── Configure R2 bucket for user uploads
└── Add authentication middleware (Session cookie validation)

Phase 3: Dashboard & Custom Entities (Future)
├── Enable CUSTOM_ENTITIES_ENABLED flag
├── Mount client-side dashboard workspace at /dashboard/
├── Connect presigned R2 upload endpoint
└── Enable "Save Comparison" in visual comparison app

Phase 4: Billing & Subscriptions (Future)
├── Connect Stripe / Lemon Squeezy Webhooks
├── Enable BILLING_ENABLED flag
└── Activate Pro high-res export and unlimited entity quotas
```

---

## Verification & Status Summary

- **Public Platform Integrity:** 100% untouched. All 450 static pages compile cleanly in ~54 seconds.
- **Engine Compatibility:** The visual comparison engine transparently accepts `ComparisonEntity` without breaking SVG rendering, custom uploaded images, or canvas drawing.
- **Security & SEO:** Private routes (`/dashboard/`, `/api/`, `/compare/share/`) are guarded with `noindex, nofollow` and `robots.txt` exclusion.
