# NAGJAN Industrial Machinery Catalogue Implementation (Step 6)

**Company:** Mount Kailash Printpack Machines  
**Brand:** NAGJAN  
**Implementation Date:** November 2026  
**Status:** Completed & Production Verified  

---

## 1. Executive Summary

Step 6 transitions the NAGJAN digital platform from the general homepage foundation into a high-precision, B2B industrial machinery catalogue. Unlike consumer e-commerce storefronts with "Add to Cart" flows or fabricated pricing, this machinery catalogue is engineered specifically for packaging plant owners, converting engineers, and corrugated box manufacturers who evaluate CapEx machinery based on engineering metallurgy, roller diameters, line speeds, and proven electrical component brands.

### Key Milestones Delivered:
1. **Strongly Typed Machinery Architecture:** Centralized data structures in `src/types/machinery.ts` and `src/data/machinery.ts` defining 18 verified industrial machinery models across 5 distinct categories.
2. **Strict Source Document Separation:** Differentiates distinct machinery lines extracted from authentic technical quotations:
   - `WJ-100-1800 2PLY Plant - July, 2023.pdf` (SF-10 with Φ292mm 50CrMo tungsten carbide roll, ZJ-V5B 3-ton stand, NC-1800 cutter, SZJ stacker).
   - `SF280 Single facer Corrugation Machine 1800mm.pdf` (Standalone SF-280 with Φ280mm 48CrMo induction-hardened roll and ABB inverter drive).
   - `Hydraulic Mill Roll Stand.pdf` (Standard 2-ton per arm dual-arm stand with Φ219mm main shaft and Schneider electricals).
3. **Interactive Machinery Catalogue (`/products`):**
   - High-density industrial machinery cards with 3 important technical parameters, genuine provenance badges (Siemens, ABB, Schneider, C&U, AirTac), and zero fabricated pricing.
   - Real-time client-side search across model numbers (e.g. `SF-280`, `ZJ-V5B`), machinery names, and technical specifications.
   - Responsive category and machine-type filtering synchronized with URL query parameters (`/products?category=...`).
   - Side-by-side technical comparison engine allowing plant managers to compare up to 3 machines simultaneously.
   - Comprehensive Technical Highlights dossier modal providing instant engineering specifications before Step 7's dedicated detail pages.
4. **Machinery Categories Directory (`/categories`):**
   - Professional category directory highlighting all 5 verified machinery classifications with authentic photographs, model counts, and deep-link exploration CTAs.
5. **Product Detail Foundation & Quotation Workflow:**
   - Pre-rendered static placeholder dossiers at `/products/[slug]` pre-configured for Step 7.
   - Context-aware quotation routing passing model parameters to `/request-quote?product=[slug]`.

---

## 2. Information Architecture & Data Structure

### 2.1 File Organization

```
src/
├── data/
│   ├── machinery.ts               # Centralized machinery & category master database
│   └── navigation.ts              # Navigation mega menu with deep links
├── types/
│   └── machinery.ts               # TypeScript interfaces & domain types
├── components/
│   └── products/
│       ├── MachineryCard.tsx       # Industrial machinery card with specs & actions
│       ├── MachineryGrid.tsx       # 3-column / 2-column / 1-column responsive grid
│       ├── MachineryFilters.tsx    # Category tabs, machine type filter & sorting
│       ├── MachinerySearch.tsx     # Instant model & name search bar
│       ├── CategoryCard.tsx        # Directory cards for /categories
│       ├── TechnicalHighlights.tsx # Quick technical highlights modal dossier
│       ├── MachineryCompare.tsx    # Multi-machine side-by-side comparison matrix
│       └── EmptyCatalogue.tsx      # Industrial empty state with reset & sales CTAs
├── app/
│   ├── products/
│   │   ├── page.tsx               # Products page wrapper with Suspense boundary
│   │   ├── ProductsClientView.tsx # Client-side state, URL sync, search & filter
│   │   └── [slug]/
│   │       └── page.tsx           # Static pre-rendered Step 6 foundation dossiers
│   ├── categories/
│   │   └── page.tsx               # 5-category directory showcase
│   └── request-quote/
│       └── page.tsx               # Dynamic quote handler receiving model parameters
```

### 2.2 Category & Model Classification Matrix

| Category ID / Canonical Slug | Display Title | Verified Models Included | Primary Source Reference |
| :--- | :--- | :--- | :--- |
| `corrugation-production-lines` | Corrugation Production Lines | WJ-100-1800 2PLY Plant | `WJ-100-1800 2PLY Plant - July, 2023.pdf` |
| `single-facer-corrugators` | Single Facer Corrugators | SF-280 Standalone, SF-10 Integrated, SF-360S Fingerless | `SF280 Single facer...pdf` & 2PLY Plant PDF |
| `hydraulic-electric-mill-roll-stands` | Hydraulic & Electric Mill Roll Stands | ZJ-V5B 3-Ton Stand, Standard 2-Ton Stand, ZJ-YB Electric | `Hydraulic Mill Roll Stand.pdf` & 2PLY Plant PDF |
| `cut-off-stacking-systems` | Cut-Off & Stacking Systems | NC-1800 Computer Cutter, JH-80 Mechanical, SZJ Stacker | `WJ-100-1800 2PLY Plant...pdf` & NAGJAN Reference |
| `printing-slotting-converting` | Printing, Slotting & Converting | 7M Printer-Slotter, HY-A Die-Cutter, HY-B Slotter, BFY-DP Thin Blade, Folder Gluer, Box Stitchers, Flute Laminator | NAGJAN Reference Website & Spare Parts Master |

---

## 3. Strict Source Document Specification Preservation

In compliance with project auditing rules, specifications across differing source documents have been kept strictly separate:

### 3.1 Single Facer Separation: SF-280 vs SF-10 vs SF-360S
- **SF-280 (Standalone Corrugator):**
  - Roll Diameter: Φ 280 mm
  - Metallurgy: 48CrMo alloy steel, medium-frequency induction hardened, hard chrome plated
  - Main Motor: 10 KW ABB Variable Frequency Drive
  - Suction Blower: 10 KW Tangshan positive blower
  - Total Power: 15 KW
  - Flute Profile: B-flute (161/159 teeth, pitch 6.25 mm, TUR 1.42)
  - Image: `/images/products/sf280_single_facer_corrugation_machine_1800mm_img_1.jpg`
- **SF-10 (Line-Integrated Module):**
  - Roll Diameter: Φ 292 mm
  - Metallurgy: 50CrMo alloy steel with tungsten carbide surface treatment (HRC > 50)
  - Main Motor: 7.5 KW Hengshui inverter motor
  - Suction Blower: 7.5 KW Shanghai Yingfa blower
  - Total Power: 17 KW
  - Wallboard: 130 mm heavy HT250 cast iron with synchronous belt drive
  - Image: `/images/products/wj_100_1800_2ply_plant__july__2023_img_4.jpg`
- **SF-360S (Modular Quick-Change Platform):**
  - Supported Widths: 1400 / 1600 / 1800 / 2200 mm
  - Quick-change cassette mechanism for rapid flute profile interchange.

### 3.2 Mill Roll Stand Separation: ZJ-V5B (3-Ton) vs Standard Stand (2-Ton)
- **ZJ-V5B 3-Ton Heavy Duty Stand:**
  - Weight Capacity: 3 Tons per side (6 Tons total)
  - Main Shaft: Φ 242 mm Day steel production
  - Hydraulic Station: 3.7 KW motor, 7 Ocean Taiwan pump and solenoid valves (16–18 MPa pressure)
  - Wallboard: Resin sand gray iron HT250 swing arms with Jigang Q235A welded base
  - Brakes: Spur gear 4-point pneumatic brake with dedicated cooling fan
  - Electricals: Siemens contactor, relays, and push-buttons
  - Image: `/images/products/wj_100_1800_2ply_plant__july__2023_img_2.jpg`
- **Standard 2-Ton Hydraulic Stand:**
  - Weight Capacity: 2 Tons per side (4 Tons total)
  - Working Widths: 1400 mm and 1600 mm variants
  - Main Shaft: Φ 219 mm heavy steel
  - Brakes: Multi-point pneumatic disc brakes with rapid heat dissipation
  - Electricals: Schneider Electric components
  - Image: `/images/products/hydraulic_mill_roll_stand_img_1.jpg` (with 3 additional gallery views)

---

## 4. Search, Filter & Comparison Engine

### 4.1 URL-Synchronized State Architecture
- Category selection is bidirectionally synchronized with `window.history` and Next.js router:
  - Navigating to `/products?category=single-facer-corrugators` preselects the filter immediately.
  - Short aliases (e.g. `single-facers`, `mill-roll-stands`) are supported seamlessly.
  - Deep-linking with `?view=sf-280-single-facer` automatically opens the Technical Highlights modal for instant engineering reviews.

### 4.2 Multi-Machine Technical Comparison
- Allows comparing up to 3 machines simultaneously.
- Floating bottom comparison dock persists across browsing sessions.
- Modal renders a structured parameter matrix comparing:
  - Machine classification and category
  - Working width, mechanical speed, and economic speed
  - Roll diameters and metallurgical treatments
  - Connected power and drive motors
  - Integrated component brands (Siemens, ABB, Schneider, C&U)
  - Primary industrial applications
  - Dedicated "Request Quote" CTAs for each machine.

---

## 5. Build & Quality Verification

- **TypeScript Compilation:** `npx tsc --noEmit` — 0 errors.
- **Production Webpack Build:** `npx next build --webpack` — 29 static pages compiled and pre-rendered:
  - 18 static machine detail foundation pages (`/products/[slug]`)
  - Category directory page (`/categories`)
  - Machinery catalogue (`/products`)
  - Dynamic quotation builder (`/request-quote`)
- **Responsive Layout Verification:** Fully verified across 375px (mobile), 768px (tablet), 1280px (desktop), and 1920px (wide desktop). Zero horizontal overflow or clipped text.

