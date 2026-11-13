# NAGJAN Industrial Redesign Design System (NIRDS)

**Brand:** NAGJAN (Mount Kailash Printpack Machines)  
**Version:** 2.0 (Complete UI/UX Reconstruction)  
**Status:** Approved & Implemented  

---

## 1. Core Visual Strategy: "Show More, Explain Less"

The NAGJAN brand represents heavy-duty industrial machinery, engineering precision, and rapid spare-parts availability. The redesigned experience moves away from text-heavy web layouts and adopts a modern, high-contrast, editorial industrial aesthetic modeled after international manufacturing leaders.

### Key Architectural Tenets
1. **Visual-First Layouts:** Prioritize authentic machinery photography, schematic badges, and structured technical data over long paragraphs.
2. **Concise Editorial Copy:** Sections feature strong 3–6 word headlines accompanied by a single concise supporting sentence (maximum 15–20 words).
3. **Structured Technical Data:** Technical parameters are presented in structured grids and tables using monospace font (`JetBrains Mono`) for speed, width, power, and dimensions.
4. **Predictable Component Systems:** High-contrast cards, consistent border radiuses (`rounded-xl` for cards, `rounded-lg` for interactive elements), and crisp 1px borders (`#E2E8F0`).
5. **Fast & Intuitive User Journeys:** Direct routing to product dossiers, 1-click quote prefill, responsive filters, and frictionless spare-parts cart management.

---

## 2. Master Brand Color Tokens & Accessibility

The approved color palette remains intact and is applied with strict industrial discipline:

| Token Name | Hex Code | Purpose & Semantic Usage |
| :--- | :--- | :--- |
| **Primary Navy** | `#013074` | Brand headers, primary buttons, structural dark sections, category banners. |
| **Deep Navy Dark** | `#001F4D` | Dark section backgrounds, footer backgrounds, high-contrast hero accents. |
| **Industrial Amber** | `#FEA81D` | High-priority CTAs ("Request a Quote", "Add to Cart"), active tabs, key metric highlights. |
| **Charcoal** | `#0F172A` | Primary typography, dark surface cards, high-contrast accents. |
| **Slate Body** | `#334155` | Secondary body text, subtitles, table labels. |
| **Muted Slate** | `#64748B` | Subtle metadata, breadcrumbs, technical units (`mm`, `m/min`, `KW`). |
| **Light Grey Canvas** | `#F8FAFC` | Page backgrounds, section alternating strips, zebra stripes in tables. |
| **Border Slate** | `#E2E8F0` | Precision 1px grid borders, dividers, subtle card boundaries. |
| **Pure White** | `#FFFFFF` | Card canvases, dialog surfaces, content containers. |
| **Success Emerald** | `#16A34A` | In-stock badges, verified specifications, positive confirmations. |

### Contrast Rules
- Amber (`#FEA81D`) buttons ALWAYS use Charcoal (`#0F172A`) or Deep Navy text (`#013074`) with `font-bold` for AAA contrast compliance (7.8:1). Pure white text on amber is strictly forbidden.
- Navy (`#013074`) surfaces use pure white text (`#FFFFFF`) with secondary text in slate-200.

---

## 3. Typography Hierarchy

The typography stack balances geometric industrial character with clean legibility:

1. **Headings Stack (`--font-heading`):**  
   `"Manrope", "Plus Jakarta Sans", system-ui, sans-serif`  
   - Large Display: `text-4xl lg:text-5xl font-extrabold tracking-tight`
   - Section Titles: `text-2xl lg:text-3xl font-bold tracking-tight`
   - Card Titles: `text-base lg:text-lg font-bold tracking-tight`
2. **Body Stack (`--font-sans`):**  
   `"Inter", system-ui, sans-serif`  
   - Primary Body: `text-sm sm:text-base text-slate-600 leading-relaxed`
   - Secondary & Captions: `text-xs sm:text-sm text-slate-500`
3. **Technical Specs & SKUs (`--font-mono`):**  
   `"JetBrains Mono", Consolas, monospace`  
   - Speed, dimensions, voltages, model numbers, and SKU codes.

---

## 4. Layout & Grid Standards

- **Max Container Width:**  
  - Standard: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (1280px)
  - Wide: `max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8`
- **Section Spacing:**  
  - Homepage & Main pages: `py-12 lg:py-16` (eliminating oversized gaps while maintaining breathability)
  - Dense listings: `py-8 lg:py-12`
- **Card Grids:**  
  - Machinery Catalogue: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`
  - Spare Parts Catalogue: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5`
  - Trust / Feature Metrics: `grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6`

---

## 5. Reusable Component Patterns

### 5.1 Section Heading Pattern
```tsx
<div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
  <span className="text-xs font-bold uppercase tracking-wider text-[#013074] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
    {eyebrow}
  </span>
  <h2 className="text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 mt-2 tracking-tight">
    {title}
  </h2>
  {subtitle && (
    <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
      {subtitle}
    </p>
  )}
</div>
```

### 5.2 Machinery Card Pattern
- 16:10 aspect ratio image with subtle hover zoom.
- Floating model badge and category chip.
- Single-line title and single-line summary.
- 3 key parameters displayed in a neat 3-column micro-grid.
- Dual actions: "View Details" (linking to `/products/[slug]`) and "Request Quote" (linking to `/request-quote?product=[slug]`).

### 5.3 Spare Parts Card Pattern
- 4:3 aspect ratio image on crisp light background.
- Floating SKU and category chip.
- Verified INR price in bold typography (or "Price on Request" pill).
- Instant "Add to Cart" (with feedback animation) or "Enquire" button.

### 5.4 Technical Specifications Table Pattern
- Clean, bordered data table with alternating rows (`bg-slate-50/50`).
- Parameter name in Slate (`font-medium`) and technical value in Charcoal (`font-mono font-semibold`).
- Filterable or tabbed groups (Mechanical, Electrical, Drive & Motor, Utilities) for complex machinery lines.

