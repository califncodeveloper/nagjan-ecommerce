# NAGJAN Industrial Design System (NIDS)

**Brand Identity:** NAGJAN  
**Corporate Entity:** Mount Kailash Printpack Machines  
**Version:** 1.0 (Step 3: Foundation)  
**System Status:** Established & Calibrated  

---

## 1. Design Philosophy & Industrial Principles

The NAGJAN Industrial Design System is built to reflect the authority, precision, and heavy-duty reliability of Mount Kailash Printpack Machines. The brand manufactures and retrofits capital-intensive corrugation machinery (operating up to 100 m/min under 1.2 MPa steam pressure and processing paper rolls up to 3 tons) alongside over 400 consumable spare parts.

### Core Industrial Tenets:
1. **Engineering Precision Over Consumer Fluff:**
   - Sharp, deliberate layouts.
   - High-density, tabular technical parameter presentation.
   - Strict avoidance of generic "consumer SaaS" bubble corners, excessive floating shadows, cartoon iconography, or meaningless decorative gradients.
2. **Heavy-Duty Materiality:**
   - Deep Navy Blue (`#013074`) anchors corporate stability and precision engineering.
   - Industrial Amber/Orange (`#FEA81D`) serves as the operational call-to-action color, echoing safety markings, equipment warning plates, and interactive levers.
   - Steel, Slate, and Charcoal neutral tones frame technical photography with high contrast.
3. **Dual Functional Experience:**
   - High-CapEx Machinery: Emphasis on blueprints, component provenance (Siemens, ABB, Schneider, C&U), dimensional diagrams, downloadable PDFs, and quotation requests.
   - Consumable Spare Parts: High-efficiency e-commerce, instant dimensional lookup (OD, ID, thickness, teeth count), transparent INR pricing, and rapid ordering.
4. **Accessible Contrast by Default:**
   - Every text color pair strictly complies with or exceeds WCAG 2.1 AA standards (minimum 4.5:1 for normal text, 3:1 for large text) and targets AAA compliance (7:1) across main content surfaces.

---

## 2. Color Palette & Semantic Design Tokens

### 2.1 Official Master Brand Palette

The color system is derived from the verified [public/logo/nagjan-logo.png](file:///e:/Mount%20Kailash/nagjan-ecommerce/public/logo/nagjan-logo.png):

| Token Name | Hex Code | RGB | OKLCH Value | Semantic Role & Industrial Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Primary Navy** | `#013074` | `1, 48, 116` | `oklch(0.329 0.126 259.1)` | Top header, brand headings, primary buttons, machine category badges. |
| **Brand Industrial Orange** | `#FEA81D` | `254, 168, 29` | `oklch(0.797 0.166 71.3)` | "Request a Quote" buttons, high-priority CTAs, active tab indicators, promotional alerts. |
| **Brand White** | `#FFFFFF` | `255, 255, 255` | `oklch(1 0 0)` | Clean card surfaces, table backgrounds, main canvas. |
| **Brand Light Grey** | `#F1F5F9` | `241, 245, 249` | `oklch(0.968 0.007 247.9)` | Secondary canvas, zebra stripes on technical tables, muted containers. |
| **Brand Border Grey** | `#E2E8F0` | `226, 232, 240` | `oklch(0.929 0.013 255.5)` | 1px precision dividers, card outlines, table grid borders. |
| **Brand Charcoal Slate** | `#0F172A` | `15, 23, 42` | `oklch(0.208 0.040 265.8)` | Primary body typography, high-contrast headings, icon glyphs. |
| **Brand Muted Slate** | `#475569` | `71, 85, 105` | `oklch(0.448 0.034 256.8)` | Secondary labels, technical units (mm, m/min, KW), breadcrumb links. |
| **Brand Alert Red** | `#DC2626` | `220, 38, 38` | `oklch(0.577 0.245 27.3)` | Destructive actions, out-of-stock badges, form error validation. |
| **Brand Success Green** | `#16A34A` | `22, 163, 74` | `oklch(0.627 0.194 149.2)` | In-stock badges, quotation submitted confirmations, verified checkmarks. |

### 2.2 Contrast Ratio & Accessibility Matrix

| Foreground Element | Background Surface | Contrast Ratio | WCAG Compliance Level |
| :--- | :--- | :--- | :--- |
| **Charcoal (`#0F172A`)** | White (`#FFFFFF`) | **15.8 : 1** | **AAA Pass** (Exceeds 7.0:1) |
| **Primary Navy (`#013074`)** | White (`#FFFFFF`) | **12.5 : 1** | **AAA Pass** (Exceeds 7.0:1) |
| **White (`#FFFFFF`)** | Primary Navy (`#013074`) | **12.5 : 1** | **AAA Pass** (Exceeds 7.0:1) |
| **Charcoal (`#0F172A`)** | Light Grey (`#F1F5F9`) | **14.8 : 1** | **AAA Pass** (Exceeds 7.0:1) |
| **Primary Navy (`#013074`)** | Light Grey (`#F1F5F9`) | **11.7 : 1** | **AAA Pass** (Exceeds 7.0:1) |
| **Charcoal (`#0F172A`)** | Industrial Orange (`#FEA81D`) | **7.8 : 1** | **AAA Pass** (Exceeds 7.0:1) |
| **Primary Navy (`#013074`)** | Industrial Orange (`#FEA81D`) | **5.6 : 1** | **AA Pass** (AAA for Bold $\ge 18\text{px}$) |
| **Muted Slate (`#475569`)** | White (`#FFFFFF`) | **6.1 : 1** | **AA Pass** (Exceeds 4.5:1) |

> [!IMPORTANT]
> When rendering text inside Industrial Orange (`#FEA81D`) buttons or banners, always use **Charcoal (`#0F172A`)** or **Deep Navy (`#013074`)** typography with `font-semibold` or `font-bold`. Never use pure white text on orange, as white on orange produces an inaccessible contrast ratio of 1.8:1.

---

## 3. Typography System & Numerical Precision

To guarantee 100% build resilience in both online and air-gapped/sandboxed production environments, the typography system is engineered with robust local font stacks that gracefully cascade.

### 3.1 Font Family Stacks

1. **Heading Stack (`--font-heading`):**
   ```css
   font-family: 'Manrope', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
   ```
   - Geometric, clean, and engineered for bold industrial headlines.
2. **Body & UI Stack (`--font-sans`):**
   ```css
   font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
   ```
   - High legibility at small sizes, tall x-height, and neutral neutral appearance.
3. **Technical & Tabular Stack (`--font-mono` / `tabular-nums`):**
   ```css
   font-family: 'JetBrains Mono', 'SF Mono', Consolas, Menlo, Monaco, monospace;
   font-variant-numeric: tabular-nums lining-nums;
   ```
   - Essential for machinery specifications (roll diameters $\phi 280\text{ mm}$, speeds $100\text{ m/min}$, voltages $380\text{V}$, and INR price lists) so that decimals and digits align vertically in comparison grids.

### 3.2 Responsive Type Scale

| Style / Level | Desktop Size / Leading | Mobile Size / Leading | Weight | Letter Spacing | Industrial Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display H1** | `48px / 1.15` (`3rem`) | `32px / 1.2` (`2rem`) | `700` (Bold) | `-0.025em` | Hero section main brand headline |
| **Section H2** | `36px / 1.2` (`2.25rem`) | `26px / 1.25` (`1.625rem`) | `700` (Bold) | `-0.02em` | Major page section titles ("Featured Machinery") |
| **Subsection H3** | `24px / 1.3` (`1.5rem`) | `20px / 1.3` (`1.25rem`) | `600` (SemiBold) | `-0.015em` | Machine model names, card headings, drawer titles |
| **Component H4** | `18px / 1.4` (`1.125rem`) | `16px / 1.4` (`1rem`) | `600` (SemiBold) | `-0.01em` | Spec table headers, modal titles, feature headers |
| **Body Large** | `18px / 1.6` (`1.125rem`) | `16px / 1.55` (`1rem`) | `400` / `500` | `0` | Lead paragraphs, hero intro text |
| **Body Regular** | `15px / 1.5` (`0.9375rem`) | `14px / 1.5` (`0.875rem`) | `400` (Regular) | `0` | Standard body copy, descriptions, form field text |
| **Body Small** | `13px / 1.45` (`0.8125rem`)| `12px / 1.4` (`0.75rem`) | `400` / `500` | `+0.01em` | Secondary table notes, metadata, footer disclaimers |
| **Caption / Badge** | `11px / 1.3` (`0.6875rem`)| `11px / 1.3` (`0.6875rem`)| `600` (SemiBold) | `+0.04em` (Uppercase) | Component tags (e.g. `SIEMENS`, `1800MM`, `IN STOCK`) |
| **Button Text** | `14px / 1` (`0.875rem`) | `14px / 1` (`0.875rem`) | `600` (SemiBold) | `+0.01em` | Interactive CTA labels |

---

## 4. Spacing Scale & Layout Grid

NIDS adheres to a strict 4px / 8px incremental spatial rhythm:

| Token | Size | Typical Usage |
| :--- | :--- | :--- |
| `space-1` | `4px` (`0.25rem`) | Compact icon gaps, badge internal padding |
| `space-2` | `8px` (`0.5rem`) | Button icon spacing, input padding vertical |
| `space-3` | `12px` (`0.75rem`) | Card interior element gaps, compact table padding |
| `space-4` | `16px` (`1rem`) | Standard element margin, form field gaps, table cell padding |
| `space-6` | `24px` (`1.5rem`) | Card padding, column gaps in product grids |
| `space-8` | `32px` (`2rem`) | Section subsection separation, drawer padding |
| `space-12` | `48px` (`3rem`) | Major component spacing |
| `space-16` | `64px` (`4rem`) | Section padding vertical on mobile / tablet |
| `space-24` | `96px` (`6rem`) | Section padding vertical on desktop |
| `space-32` | `128px` (`8rem`) | Major landmark vertical spacing |

### 4.1 Responsive Container System
- **Maximum Width:** `max-w-7xl` (`1280px`) or `max-w-[1400px]` for wide specification grids.
- **Horizontal Screen Inset:**
  - Mobile (`< 640px`): `px-4` (`16px`)
  - Tablet (`640px – 1023px`): `px-6` (`24px`)
  - Desktop (`1024px+`): `px-8` (`32px`)

---

## 5. Border Radii & Elevation (Materiality)

### 5.1 Industrial Border Radii
Rounded corners must convey precision machining, not consumer toy styling:
- **Sharp / Technical:** `rounded-none` (`0px`) — High-density data tables, table cell borders.
- **Subtle (Default for Inputs & Badges):** `rounded-md` (`6px`) — Form controls, badges, buttons.
- **Card Boundary:** `rounded-lg` (`8px`) — Machinery cards, quotation forms, modal dialogs.
- **Strictly Prohibited:** `rounded-2xl` (`16px`), `rounded-3xl` (`24px`), or `rounded-full` on cards and containers.

### 5.2 Elevation & Shadow Hierarchy
Industrial interfaces rely primarily on **1px crisp borders** (`#E2E8F0`) with subtle elevation:
- **Border Default:** `border border-border` (`#E2E8F0`).
- **Elevated Card:** `shadow-xs border border-border` (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`).
- **Hover Card:** `shadow-md border border-slate-300 -translate-y-0.5 transition-all` (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)`).
- **Dropdown / Modal:** `shadow-xl border border-border` (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1)`).

---

## 6. Button & Interactive Action Standards

All interactive touch targets must measure at least **44 × 44 px** on mobile viewports.

```
┌───────────────────────────────────────┐   ┌───────────────────────────────────────┐
│     [Primary CTA / Request Quote]     │   │      [Secondary / Machine Specs]      │
│      Background: #FEA81D (Amber)      │   │      Background: #013074 (Navy)       │
│      Text: #0F172A (Charcoal Bold)    │   │      Text: #FFFFFF (White Bold)       │
└───────────────────────────────────────┘   └───────────────────────────────────────┘
┌───────────────────────────────────────┐   ┌───────────────────────────────────────┐
│        [Outline / Download PDF]       │   │        [Ghost / Back to List]         │
│      Border: 1.5px #013074 (Navy)     │   │      Background: Transparent          │
│      Text: #013074 (Navy SemiBold)    │   │      Text: #475569 (Slate Medium)     │
└───────────────────────────────────────┘   └───────────────────────────────────────┘
```

### 6.1 Button Hierarchy Matrix
1. **Quotation / Lead Action (`variant="quote"`):**
   - Background: Industrial Orange (`#FEA81D`)
   - Text: Charcoal (`#0F172A`) with `font-semibold`
   - Hover: `#E59516` (`brightness-95`)
   - Usage: "Request a Quote", "Submit Inquiry", "Add to Cart"
2. **Primary Corporate (`variant="primary"`):**
   - Background: Primary Navy (`#013074`)
   - Text: White (`#FFFFFF`)
   - Hover: `#022557` (`brightness-90`)
   - Usage: "Explore Machinery Lines", "View Full Catalog", "Proceed to Checkout"
3. **Technical Outline (`variant="outline"`):**
   - Background: White (`#FFFFFF`)
   - Border: `1.5px solid #013074`
   - Text: Primary Navy (`#013074`)
   - Hover: Background `#F1F5F9`
   - Usage: "Download Technical PDF", "Filter Products", "View Parameters"
4. **Secondary / Neutral (`variant="secondary"`):**
   - Background: Light Grey (`#F1F5F9`)
   - Text: Charcoal (`#0F172A`)
   - Hover: `#E2E8F0`
   - Usage: "Clear Filters", "Cancel", "Save for Later"

---

## 7. Card & Component Surface Specifications

### 7.1 Machinery Showcase Card (Quote Workflow)
- **Aspect Ratio:** Image header `16:10` with subtle border divider.
- **Top Bar:** Machine Type Tag (e.g. `CORRUGATED PRODUCTION LINE`) & Working Width (e.g. `1800MM`).
- **Title:** H3 Machine Model (e.g., `WJ-100-1800 2PLY Plant`).
- **Key Parameters Grid (2x2):**
  - Speed: `100 m/min`
  - Total Power: `~50 KW (30 KW actual)`
  - Roll Dia: `Φ 292 mm`
  - Heating: `Steam (1.25 MPa)`
- **Component Provenance Badges:** Small logo pills (e.g. `Siemens`, `ABB`, `C&U`).
- **Footer CTAs:**
  - Primary Button: "Request Quote" (`#FEA81D`)
  - Secondary Link: "View Full Specs →"

### 7.2 Spare Part E-Commerce Card (Cart Workflow)
- **Aspect Ratio:** Image header `1:1` square on `#F8FAFC` background.
- **Badge:** Stock Status (`IN STOCK` / `MADE TO ORDER`).
- **Title:** H4 Part Name with dimensional attributes (e.g. `Thinblade OD:100mm ID:20mm Thickness 1.2mm`).
- **SKU & Compatibility:** `SKU: NAG-TB-100` | `Fits SF-280 / Standard Cutters`.
- **Pricing:** Prominent tabular INR price: `₹2,200` *(Excl. GST)*.
- **Footer Action:** Compact stepper `[-] 1 [+]` and "Add to Cart" button.

### 7.3 Technical Specifications Table
- **Header:** Deep Navy background (`#013074`) with crisp white uppercase labels.
- **Rows:** Alternating zebra striping (`#FFFFFF` and `#F8FAFC`).
- **Borders:** `1px solid #E2E8F0`.
- **Numerical Alignment:** Monospace / `tabular-nums` right-aligned for values, left-aligned for parameters.
- **Mobile Behavior:** Horizontal scrollable wrapper with right fade gradient indicator and touch swipe support.

---

## 8. Form & Input Design Standards

- **Field Height:** Standard desktop `42px` (`h-10.5`), mobile `44px` minimum.
- **Border:** `1px solid #CBD5E1`, focusing to `2px solid #013074` with an outer ring `ring-2 ring-primary/20`.
- **Labels:** Crisp `text-xs font-semibold uppercase tracking-wider text-slate-700` placed strictly above input fields (no floating placeholder tricks that degrade accessibility).
- **Required Indicators:** Distinct red asterisk `text-red-500` with `aria-required="true"`.
- **Error Display:** `text-xs text-red-600 flex items-center gap-1 mt-1`.

---

## 9. Responsive Breakpoints

| Breakpoint | Viewport Width | Column Grid | Container Inset | Navigation Mode |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile (`sm`)** | `320px – 639px` | 1 Column | `px-4` (`16px`) | Mobile hamburger slide-out drawer |
| **Tablet (`md`)** | `640px – 1023px` | 2 Columns | `px-6` (`24px`) | Collapsed or hybrid menu |
| **Desktop (`lg`)**| `1024px – 1439px`| 3 Columns | `px-8` (`32px`) | Full top bar + horizontal nav with mega-menu |
| **Wide Desktop (`xl`)** | `1440px+` | 3 or 4 Columns | `px-8` (`32px`) | Max container `1400px` centered |

