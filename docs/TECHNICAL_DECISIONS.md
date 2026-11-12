# NAGJAN E-Commerce: Technical Architecture & Design System

**Project:** `nagjan-ecommerce`  
**Framework:** Next.js 16.4.6 (App Router) + React 19.3.0  
**Design System:** shadcn/ui Nova Preset (`@base-ui/react` + Tailwind CSS v4)  
**Document Status:** Final Technical Specifications  

---

## 1. Technical Architecture Overview

The new NAGJAN platform is designed as an enterprise B2B industrial e-commerce application. It leverages Next.js 16 App Router for server-first rendering, instantaneous static route generation, and fast client interactivity.

```
┌─────────────────────────────────────────────────────────────┐
│                      Next.js 16 App Router                  │
│                     (React 19 Server Components)            │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
       ┌───────▼────────┐             ┌────────▼────────┐
       │ Industrial     │             │ Spare Parts     │
       │ Machinery      │             │ E-Commerce      │
       │ (Quote-Driven) │             │ (Cart-Driven)   │
       └───────┬────────┘             └────────┬────────┘
               │                               │
       ┌───────▼────────┐             ┌────────▼────────┐
       │ - Specs Engine │             │ - Instant Search│
       │ - PDF Broads   │             │ - INR Pricing   │
       │ - Quote Modal  │             │ - LocalStorage  │
       │ - Lead Routing │             │ - B2B Checkout  │
       └────────────────┘             └─────────────────┘
```

---

## 2. Brand Identity & Design Tokens

### 2.1 Logo Color Palette (Inspected from `public/logo/nagjan-logo.png`)
The color system is derived from the official NAGJAN brand mark:

| Role | Semantic Variable | Hex Code | OKLCH Equivalent | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | `--primary` | `#013074` | `oklch(0.329 0.126 259.1)` | Deep Navy Blue: Headers, primary buttons, brand hero accents |
| **Brand Accent** | `--accent` / `--brand-orange` | `#FEA81D` | `oklch(0.797 0.166 71.3)` | Industrial Golden Amber: CTA highlights, badges, quote buttons |
| **Foreground / Text**| `--foreground` | `#0F172A` | `oklch(0.208 0.040 265.8)` | Deep Industrial Slate: High contrast readable typography |
| **Muted Text** | `--muted-foreground` | `#475569` | `oklch(0.448 0.034 256.8)` | Secondary descriptions, specification labels |
| **Card / Surface** | `--card` | `#FFFFFF` | `oklch(1 0 0)` | Clean white surface for high-density spec tables |
| **Subtle Neutral** | `--secondary` | `#F1F5F9` | `oklch(0.968 0.007 247.9)` | Subtle table zebra striping, icon badges |
| **Border** | `--border` | `#E2E8F0` | `oklch(0.929 0.013 255.5)` | Crisp 1px borders on cards and data grids |

### 2.2 Visual Aesthetic Guidelines
- **Industrial, Modern, Professional:** Clean line work, subtle borders, high contrast data tables.
- **Strictly Avoid:** Generic consumer gradients, playful cartoons, excessive box-shadows, or irrelevant stock art.
- **Imagery Rule:** Use only authentic extracted machine photos (`/images/products/*`) and the official logo.

---

## 3. Component Architecture & UI Strategy

### 3.1 shadcn/ui Nova Preset (`base-nova`)
The project utilizes the new shadcn `base-nova` preset built upon `@base-ui/react`:
- Headless, accessible primitives (`Button`, `Dialog`, `Select`, `Tabs`, `DropdownMenu`).
- High performance with zero runtime CSS-in-JS overhead.
- Class merging handled through `class-variance-authority` (CVA) and `cn` (`tailwind-merge` + `clsx`).

### 3.2 Server vs. Client Component Separation
1. **Server Components (Default):**
   - Layouts (`RootLayout`, navigation shell).
   - Product detail views and metadata generation.
   - High-density technical specification tables.
   - Informational pages (`/about`, `/services`, `/contact`).
2. **Client Components (`"use client"`):**
   - Interactive search and filter facets (`SparePartsFilters`).
   - Shopping cart drawer, cart quantity mutations, and checkout calculations.
   - "Request a Quote" modal and dynamic multi-step lead capture.
   - Image gallery thumbnail switcher with full-screen zoom.

---

## 4. Proposed Application Routing Hierarchy

```
/
├── /about                    # Heritage (2010), Semi-Indian philosophy, Godown, Leadership
├── /products                 # Industrial machinery showcase with category filters
├── /products/[slug]          # Machinery detail: parameters, roll metallurgy, PDF download, quote form
├── /categories               # Directory of all machinery & spare parts categories
├── /categories/[slug]        # Category landing view (e.g. /categories/single-facers)
├── /spare-parts              # E-commerce spare parts catalog (400+ SKUs) with search & filters
├── /spare-parts/[slug]       # Spare part detail: dimensions, compatibility, INR price, Add to Cart
├── /services                 # Engineering team, installation policies, custom retrofitting, repairs
├── /contact                  # Perungudi Regd office, Madhavaram depot, phone/email, contact form
├── /request-quote            # Comprehensive B2B machinery quotation builder
├── /cart                     # Shopping cart review and quantity adjustments
└── /checkout                 # B2B order checkout & proforma invoice generation
```

---

## 5. Data Modeling & TypeScript Contracts

All product and catalog data will be strictly typed in `src/types/`:

```typescript
// Core Machinery Model
export interface MachineryProduct {
  id: string;
  slug: string;
  name: string;
  modelNumber: string;
  category: MachineryCategory;
  shortDescription: string;
  fullDescription: string[];
  features: string[];
  specifications: Record<string, string | number>;
  variants?: {
    name: string;
    specs: Record<string, string | number>;
  }[];
  components?: {
    name: string;
    brand: string;
    origin?: string;
    remarks?: string;
  }[];
  images: string[];
  pdfBrochureUrl?: string;
  isPopular?: boolean;
}

// Spare Part Model
export interface SparePart {
  id: string;
  slug: string;
  name: string;
  sku: string;
  categorySlug: string;
  priceINR: number;
  inStock: boolean;
  dimensions?: {
    outerDiameterMm?: number;
    innerDiameterMm?: number;
    thicknessMm?: number;
    lengthMm?: number;
    holes?: number;
  };
  compatibleMachines: string[];
  description: string;
  images: string[];
}
```

---

## 6. Build & Deployment Optimization

1. **Static Pre-rendering:** All catalog pages, category listings, and informational pages are pre-rendered statically during build (`output: export` ready or static ISR).
2. **Image Optimization:** Uses `next/image` with explicit aspect ratios, modern AVIF/WebP formats, and lazy loading for off-screen product thumbnails.
3. **Build Pipeline:** Uses `next build --webpack` for stable production compilations on Windows environments, ensuring 100% reliable deployment artifacts.

