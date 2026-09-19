# Height Comparison Tool — Production SaaS

A modern, responsive, high-precision visual height comparison web tool built with **Astro.js**, **TypeScript**, **Tailwind CSS**, and **proportional inline SVG human silhouettes**.

Designed specifically for zero-config, static-first deployment on **Cloudflare Pages** and **Cloudflare Workers**.

---

## 🚀 Key Features

- **Proportional Human SVG Models**: Anatomically proportioned Male and Female vector models using a shared, normalized coordinate system (`viewBox="0 0 100 400"`).
- **Mathematical Scaling Accuracy**:
  - All models share the exact same scale: `scale = maxVisualHeight / chartMaxCm`.
  - A 200 cm person visually renders at exactly 2× the height of a 100 cm person.
  - A 180 cm person is visually exactly 20% taller than a 150 cm person (`180 / 150 = 1.2`).
  - Fixed 0 cm baseline floor line: feet are anchored precisely flush on the floor line with 0px float and 0px sink.
- **Dynamic Vertical Ruler**: Switchable between Metric (`cm` at 20 cm increments) and Imperial (`ft/in` at 6-inch increments).
- **Height Difference Card**: Displays dynamic comparative statements (e.g. *"John is 4 inches taller than Sarah"*) with exact rounded and decimal metrics when 2 people are active.
- **Multi-Person Capacity**: Supports from 2 to 20+ people with responsive horizontal scrolling, intelligent spacing, and mobile touch support.
- **Dynamic Unit Switching**: Enter in feet & inches (`5 ft 10 in`) or centimeters (`178 cm`) with zero rounding accumulation.
- **Preset & Custom Color Customization**: 7 preset SaaS color swatches plus a native HTML5 color picker.
- **Interactive Tooltips**: Hover on desktop and tap on mobile to reveal precise height, gender, and metrics.
- **Quick Compare Presets**: Instant one-click comparisons (`5 ft vs 6 ft`, `5'4" vs 5'10"`, `160 cm vs 180 cm`, `170 cm vs 190 cm`).
- **Share Comparison**: URL encoding via Base64/URLSearchParams with automatic one-click clipboard copying.
- **Export to PNG**: Client-side, high-DPI HTML5 Canvas export without heavy 3rd-party dependencies.
- **Zero PHP & Cloudflare Ready**: 100% static output, zero server databases, zero runtime dependencies, instant edge delivery.
- **SEO & Accessibility**: Semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`), JSON-LD structured data (`WebApplication` & `FAQPage`), and `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) (v4.x, Static Mode)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **Interactivity**: Vanilla TypeScript (Lightweight Client-Side State)
- **Vector Graphics**: Proportional Inline SVG
- **Image Export**: Native HTML5 Canvas 2D API
- **Deployment**: Cloudflare Pages / Cloudflare Workers

---

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg          # Custom SVG Favicon
│   ├── robots.txt           # Search engine directives
│   └── og-image.svg         # Open Graph social preview
│
├── src/
│   ├── components/
│   │   ├── Header.astro              # Sticky header with mobile navigation
│   │   ├── PersonForm.astro          # Add / Edit person form with unit toggle
│   │   ├── PeopleList.astro          # Manage added participants
│   │   ├── HeightChart.astro         # Visual hero card with stage & baseline
│   │   ├── HumanModel.astro          # SVG model component
│   │   ├── HeightRuler.astro         # Dynamic vertical measurement ruler
│   │   ├── QuickCompare.astro        # Preset comparison buttons
│   │   ├── ComparisonSummary.astro   # Summary table & mobile cards
│   │   ├── FAQ.astro                 # Accordion FAQs with SEO schema
│   │   └── Footer.astro              # Clean SaaS footer
│   │
│   ├── layouts/
│   │   └── Layout.astro              # Global layout with meta & JSON-LD
│   │
│   ├── pages/
│   │   └── index.astro               # Static homepage orchestrator
│   │
│   ├── lib/
│   │   ├── constants.ts              # Demo data, color presets, limits
│   │   ├── height.ts                 # Conversion formulas & validation
│   │   ├── comparison.ts             # Mathematical scale, ruler ticks, diff
│   │   ├── svgModels.ts              # Male & Female normalized vector paths
│   │   ├── share.ts                  # URL state encoding & clipboard helper
│   │   └── exportChart.ts            # Canvas high-DPI PNG generation
│   │
│   ├── scripts/
│   │   └── comparison-app.ts         # Central reactive client application
│   │
│   └── styles/
│       └── global.css                # Custom scrollbars, animations, Tailwind
│
├── astro.config.mjs                  # Astro static build configuration
├── tailwind.config.mjs               # Tailwind design system configuration
├── tsconfig.json                     # Strict TypeScript configuration
└── package.json
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Navigate to `http://localhost:4321` in your browser.

### 3. Build for Production
```bash
npm run build
```
The output will be located in the `dist/` directory, ready for immediate static deployment.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Cloudflare Pages Deployment

### Option A: Cloudflare Dashboard (Git Integration)
1. Push your repository to GitHub or GitLab.
2. Log in to Cloudflare Dashboard -> **Workers & Pages** -> **Create application** -> **Pages**.
3. Connect your repository.
4. Set the build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**.

### Option B: Cloudflare Wrangler CLI
```bash
npx wrangler pages deploy dist
```

---

## 🔒 Security & Privacy

- **No Cookies / No Tracking**: All data is stored in the user's browser `localStorage` or encoded directly into shareable URLs.
- **Zero Backend**: Eliminates server-side vulnerabilities, SQL injections, or database maintenance.
- **Input Sanitization**: Client-side boundaries and character limits prevent malicious parameter tampering.
