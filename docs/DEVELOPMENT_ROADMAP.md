# NAGJAN E-Commerce: Development Roadmap & Implementation Plan

**Project:** `nagjan-ecommerce`  
**Execution Order:** Sequential Phased Rollout  
**Current Milestone:** Step 9: Corporate Trust Pages, Master Category Directory & Quote Engine Completed (Ready for Review)  

---

## Roadmap Overview

```mermaid
flowchart LR
    P1[Step 4: Layout Shell, Header, Nav & Footer - DONE] --> P2[Step 5: Premium Industrial Homepage - DONE]
    P2 --> P3[Step 6: Machinery Catalogue & Categories - DONE]
    P3 --> P4[Step 7: Individual Product Detail Pages - DONE]
    P4 --> P5[Step 8: Spare Parts E-Commerce & Cart - DONE]
    P5 --> P6[Step 9: Corporate Trust Pages, Quote Engine & Polish - DONE]
```

---

## Phase 1 (Step 4): Foundation, Brand Tokens & Core Layout Shell [COMPLETED]
- [x] Header, Footer, Brand Design Tokens, and responsive layout shell.

## Phase 2 (Step 5): Premium Industrial Homepage [COMPLETED]
- [x] Trust metrics, Hero, Featured Machinery, Semi-Indian Advantage, Spare parts finder, Infrastructure and Quote lead sections.

## Phase 3 (Step 6): NAGJAN Machinery Catalogue & Category Directory [COMPLETED]
- [x] Centralized Data Architecture (`src/types/machinery.ts`, `src/data/machinery.ts`)
- [x] Premium Machinery Catalogue (`src/app/products/page.tsx`, `ProductsClientView.tsx`)
- [x] Machinery Categories Directory (`src/app/categories/page.tsx`)
- [x] Product Detail Foundation (`src/app/products/[slug]/page.tsx`)
- [x] Quotation Workflow Integration (`src/app/request-quote/page.tsx`)

## Phase 4 (Step 7): Individual Machinery Product Detail Pages [COMPLETED]
- [x] Architecture & Reusable Components (`src/components/products/detail/`)
- [x] Complete 18-Model Coverage with authentic technical specifications
- [x] Multi-Image Authentic Gallery & Lightbox
- [x] Quotation Engine Pre-fill (`/request-quote?product=[slug]`)
- [x] Dynamic SEO & Full SSG Pre-rendering

---

## Phase 5 (Step 8): Spare Parts E-Commerce & Cart Engine [COMPLETED]

- [x] **5.1 Spare Parts Catalogue Architecture (`src/types/spare-parts.ts`, `src/data/spare-parts.ts`, `src/data/spare-parts-categories.ts`, `src/lib/spare-parts-utils.ts`):**
  - Strongly typed data model for 25 authentic spare parts across 10 categories.
  - Verified INR unit pricing directly from `shop.nagjan.com` for 18 consumable parts.
  - Strict preservation of "Price on Request / Technical Enquiry" for dimensional parts (Anvil covers, feeder wheels, no-crush wheels, diamond cup wheels, high-temp bearings) without fabricated prices.
- [x] **5.2 Spare Parts Listing Route (`src/app/spare-parts/page.tsx`, `SparePartsClientView.tsx`):**
  - Hero with breadcrumbs, Chennai Godown trust badges, and direct engineer hotline.
  - Interactive search across Part Name, SKU, Category, Brand, Description, and Dimensions.
  - Category horizontal pill navigation with dynamic counts derived from actual catalogue data.
  - Pricing filters: All Parts, Buy Online (Verified INR), Enquiry Only.
  - Sorting: Default, Name A–Z, Name Z–A, Price Low–High, Price High–Low.
  - Responsive product card grid with hover elevation and instant stock indicators.
  - Mobile filter drawer and empty state with reset controls.
- [x] **5.3 Spare Parts Product Detail Pages (`src/app/spare-parts/[slug]/page.tsx`):**
  - Dynamic SSG routes generating all 25 spare parts statically (`generateStaticParams`).
  - Unique metadata, canonical URLs, and OpenGraph tags per part (`generateMetadata`).
  - Breadcrumbs with category linking.
  - Gallery component (`SparePartsGallery.tsx`) with high-res image and stock location pill.
  - Technical Specifications table (`SparePartsSpecifications.tsx`) and Documented Compatibility (`SparePartsCompatibility.tsx`).
  - Quantity selector and Add to Cart action (`SparePartsDetailAction.tsx`).
  - Related Products in the same category (`SparePartsRelatedProducts.tsx`).
  - Direct spares depot hotline callout (`SparePartsEnquiryCTA.tsx`).
- [x] **5.4 Shopping Cart Engine & State Management (`src/context/CartContext.tsx`, `src/hooks/useCart.ts`, `src/types/cart.ts`):**
  - Client-side React Context with `localStorage` persistence (`nagjan_spare_parts_cart_v1`).
  - Strict business enforcement: Only spare parts with verified purchasable prices can be added; machinery items are strictly excluded.
  - Item addition, duplicate quantity incrementation, line item removal, quantity updates, and clear cart.
  - Computed live item count badge in desktop Header and mobile navigation.
  - Accurate subtotal calculations in Indian Rupees (`formatINR`).
- [x] **5.5 Cart User Experience (`src/components/cart/CartDrawer.tsx`, `CartItem.tsx`, `src/app/cart/page.tsx`):**
  - Interactive slide-out cart drawer accessible via header cart button or automatic opening on item addition.
  - Dedicated `/cart` review page with line items, SKU, unit price, quantity stepper, subtotal, and proforma order inquiry workflow.
  - Informative empty cart state with direct catalogue CTA and Chennai depot helpline.
  - Zero fake payment gateways or fraudulent order completion claims.
- [x] **5.6 Quotation & Enquiry Integration (`src/app/request-quote/page.tsx`):**
  - Distinguishes machinery quotations from spare parts inquiries via `?part=[slug]&sku=[sku]`.
  - Connects to verified Service & Spares hotline (`+91-7299 20 7800`) and sales email.
- [x] **5.7 Quality Assurance & Verification:**
  - `npx tsc --noEmit` passed with 0 errors.
  - `npx next build --webpack` completed with all 55 static pages generated successfully.
  - 14 route HTTP 200 checks executed.
  - 8 headless visual audits captured in `docs/screenshots/step8/`.

---

## Phase 5 (Step 9): Corporate Trust Pages, Category Directory & Quote Engine [COMPLETED]

- [x] **5.1 About Us Page (`src/app/about/page.tsx`):**
  - Founding narrative (May 2010), Mr. A. Nagarajan profile, Printo Machines sister firm.
  - The "Semi-Indian Machine" engineering philosophy (cast-iron frames, Siemens/ABB drives, local spares, practical performance without unverified power savings guarantees).
  - Authentic operational infrastructure distinction: Registered Office (Perungudi) vs Assembly Godown & Depot (Madhavaram).
  - Documented baseline figures (240+ corrugators delivered, 18+ models, 400+ spares).
- [x] **5.2 Services & Support Page (`src/app/services/page.tsx`):**
  - Engineering division headed by Mr. D. Elumalai.
  - 6 dedicated service streams: on-site plant erection, foundation drawings, preventive maintenance contracts, electrical retrofits, machine health inspections, and spares support.
  - 6-step transparent engagement workflow.
  - Madhavaram warehouse spares dispatch terms.
- [x] **5.3 Contact Us Page (`src/app/contact/page.tsx`, `src/components/contact/ContactForm.tsx`):**
  - Registered corporate office (Perungudi) vs Madhavaram assembly godown and communication office profiles.
  - Centralized phone/email directory (`tel:` & `mailto:` links).
  - Verified Google Maps directions search links.
  - Fully validated client-side contact form with honeypot anti-spam protection and direct mail client fallback.
- [x] **5.4 Master Category Directory (`src/app/categories/page.tsx` and `src/app/categories/[slug]/page.tsx`):**
  - Comprehensive visual taxonomy covering 5 machinery groups (18 models) and 10 spare parts categories (25 SKUs) with dynamic counts.
  - Dynamic SSG routes (`/categories/[slug]`) pre-rendering all 24 category slugs and aliases with unique SEO metadata.
- [x] **5.5 Request Quote Engine Audit & Upgrades (`src/app/request-quote/page.tsx`, `src/components/quote/RequestQuoteEngine.tsx`):**
  - Multi-category B2B RFQ engine supporting machinery quotations (`?product=...`), spare parts technical sizing (`?part=...&sku=...`), and general service inquiries.
  - Field validation, duplicate submission protection, and pre-filled RFC 2368 mail draft generator.
  - Absolute separation of industrial machinery from cart/checkout mechanics.
- [x] **5.6 Quality Assurance & Verification:**
  - `npx tsc --noEmit` passed with 0 errors.
  - `npx next build --webpack` completed with all 79 static pages generated successfully.
  - 28 route HTTP 200 checks executed.
  - 13 full-resolution screenshots captured in `docs/screenshots/step9/`.

---

## Phase 6: High-Impact Industrial Homepage (Step 5) [COMPLETED]

- [x] **6.1 Hero Section (`src/components/home/HeroSection.tsx`):**
  - Full-width industrial visual hierarchy with technical grid and authentic WJ-100-1800 2PLY plant photography.
  - Headline: *"Engineering the Future of Corrugated Packaging."*
  - Dual CTAs: *"Request a Quote"* (`/request-quote`) & *"Explore Our Machinery"* (`/products`).
  - Technical badges: Design Speed (100 m/min), Working Width (1800 mm), HT250 Frames, Siemens & ABB electricals.
- [x] **6.2 Flagship Machinery Showcase (`src/components/home/FeaturedMachinery.tsx`):**
  - Highlighting WJ-100-1800 2PLY Plant, SF-280 Single Facer, and Hydraulic Mill Roll Stand.
  - Technical specification grids and component provenance badges (Siemens, ABB, Schneider, C&U).
- [x] **6.3 Quick Spare Parts Finder (`src/components/home/SparePartsQuickFinder.tsx`):**
  - 9 verified categories (Anvil Covers, Feeder Wheels, No-Crush Wheels, Thin Blades, Belts, Bearings, Electricals, etc.).
  - Highlight of 400+ ready-stock items at Madhavaram Depot, Chennai.
- [x] **6.4 Semi-Indian Engineering Advantage (`src/components/home/SemiIndianAdvantage.tsx`):**
  - Explains heavy-duty HT250 cast-iron frames + selected Indian and international electrical integration.
  - Component provenance badges: Siemens, ABB, Crompton Greaves, Schneider Electric, Delta, Inovance.
- [x] **6.5 Trust & Statistics Bar (`src/components/home/TrustMetrics.tsx`):**
  - 240+ Corrugators Delivered, Est. 2010, 15+ Years Machinery Engineering, 400+ Spare Parts Stocked.
- [x] **6.6 Corporate Infrastructure & Contact (`src/components/home/InfrastructureSection.tsx` & `ContactPreview.tsx`):**
  - Madhavaram Godown (assembly & spares) and Perungudi Corporate Office profiles.
  - Clickable sales phone, service hotline, and sales email with verified Chennai locations.

---

## Phase 7: Verification, SEO & Final Optimization

- [ ] Strict TypeScript compile check (`npx tsc --noEmit`).
- [ ] Complete production build verification (`npx next build --webpack`).
- [ ] Route integrity testing across all endpoints.
- [ ] Mobile viewport audit across standard resolutions (375px, 768px, 1024px, 1440px).
- [ ] OpenGraph metadata, structured JSON-LD schemas, and favicon configuration.

