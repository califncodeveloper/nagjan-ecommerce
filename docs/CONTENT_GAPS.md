# NAGJAN E-Commerce: Content Gaps & Client Clarifications

**Company:** Mount Kailash Printpack Machines  
**Brand:** NAGJAN  
**Purpose:** Identify unverified assumptions, missing data points, and operational requirements that require client confirmation before Step 3.

---

## 1. Information Requiring Confirmation from Mount Kailash Printpack Machines

| Area | Missing Information / Question | Impact on Implementation | Default / Recommended Action |
| :--- | :--- | :--- | :--- |
| **1. Company Overview & Milestones** | The legacy website copy mentions "past 34 months" and "2013 trade demo". What are the updated statistics for machines installed (e.g. 500+?), client testimonials, and recent factory photos? | About Us page and Homepage trust badges. | Use verified baseline facts (founded May 2010, 240+ corrugators installed) and provide editable sections for updated metrics. |
| **2. Active Contact Information & WhatsApp Hotline** | The site lists three phone numbers (`+91-94455 66288`, `+91-44-2496 2406`, `+91-7299 20 7800`) and three emails (`sales@nagjan.com`, `info.mountkailash@yahoo.com`, `nagarajan_6@sify.com`). Which is the official WhatsApp Business hotline? | Header click-to-call, WhatsApp floating button, and contact form dispatch. | Use `+91-94455 66288` (Sales) and `+91-7299 20 7800` (Service & Spares Hotline) in header/footer. **Per Step 4 instructions, WhatsApp floating button and direct WhatsApp links remain deactivated and configurable in `src/data/navigation.ts` until Mount Kailash Printpack Machines officially confirms the WhatsApp Business hotline.** |
| **3. Spare Parts Pricing Visibility** | On `shop.nagjan.com`, spare parts prices are publicly visible in INR (e.g. ₹2,200 for thin blades). Should prices remain public, or should prices be gated behind a login / B2B account? | Spare parts listing, product cards, cart, and search UI. | Maintain public INR pricing with a "B2B Bulk Discount / Request Quote" option for quantity orders. |
| **4. Spare Parts Payment & Checkout** | Should the new website allow online card/UPI payments (via Razorpay, Cashfree, or PayU), or generate a "Proforma Invoice / Order Inquiry" for direct bank transfer (NEFT/RTGS)? | Checkout page architecture and external payment gateway SDK integration. | Build a dual checkout workflow: "Place Order / Request Proforma Invoice" first, with modular hooks for Razorpay/Cashfree. |
| **5. Shipping & Freight Calculation** | Are spare parts shipped via courier (BlueDart, DTDC) with calculated shipping, or sent via transport (VRL, TCI Freight, To-Pay)? | Checkout calculation of total payable amount. | Provide flat-rate / "Transport Freight Extra (To-Pay)" selection standard in Indian B2B machinery spares. |
| **6. GST & Tax Invoicing** | What is the legal GSTIN of Mount Kailash Printpack Machines? Should GST (18% for machinery/spares) be included or added at checkout? | Checkout pricing summary and tax invoice generation. | Display prices as "Excl. GST (18% GST added at checkout)" and include a required GSTIN field for tax invoices. |
| **7. Customer Accounts** | Should customers be required to register and log in to buy spare parts, or is Guest Checkout preferred? | Authentication setup (NextAuth, Supabase Auth, or Clerk). | Allow fast Guest Checkout with optional account creation to maximize checkout conversion. |
| **8. Admin & Inventory Management** | How will the team update spare parts stock and view machine quotes? (Direct database, lightweight admin dashboard, or email notifications?) | Admin panel scope and backend API endpoints. | Implement automated email dispatch for quotes + a lightweight typed JSON/database catalog structure. |
| **9. Machinery Pricing Policy** | Confirming that no machinery (2PLY plants, single facers, roll stands, etc.) should display fixed pricing. | Machinery catalog and product detail pages. | Enforce "Request a Quote" / "Speak to Sales" for all industrial machinery lines. |
| **10. Machine Warranty Terms** | What are the standard warranty periods for NAGJAN machinery? (e.g., 12 months on corrugating rolls and mechanical frames; standard manufacturer warranty on Siemens/ABB electricals?) | Product detail warranty tab and customer reassurance. | Display a standard B2B "1-Year Comprehensive Mechanical Warranty + Factory Spare Support" badge subject to confirmation. |
| **11. Installation & Erection Policy** | Does the company provide on-site installation engineers across India? Who covers travel/boarding (as specified in the 2023 quotation)? | Service & Support page and quotation terms. | Outline the standard installation assistance terms from the source PDF (foundation drawings supplied, customer provides local utilities). |

---

## 2. Technical Gaps & Environment Notes

1. **Google Fonts in Sandboxed Builds:**
   - In offline sandbox mode, `next/font/google` fails because `fonts.googleapis.com` is unreachable without external network.
   - **Resolution:** Use local fonts or standard system fallbacks (`font-sans: system-ui, -apple-system, sans-serif`) during development.
2. **Next.js 16 Turbopack CSS Loader on Windows:**
   - Next.js 16.4.6 with `@tailwindcss/turbopack` has a known Windows IPC pipe issue during `next build`.
   - **Resolution:** Webpack build mode (`next build --webpack`) compiles seamlessly and produces fully optimized production output.

---

## 3. Photography & Media Requirements (Step 5 & 6 Audit)

The homepage and machinery catalogue currently use verified, authentic high-resolution machinery photographs extracted from the client's July 2023 technical PDF quotations. The following supplementary photography should be requested from Mount Kailash Printpack Machines for future polish:

1. **Madhavaram Assembly Godown & Depot Photography:**
   - Wide-angle interior shots of the testing floor, electrical retrofitting area, and spare-parts racking.
   - Purpose: Will enrich `InfrastructureSection` and `AboutPreview`. Currently represented with machine frame photos.
2. **Converting & Finishing Machinery Photography:**
   - High-resolution photographs of the 7M Flexo Printer-Slotter, Rotary Die Cutters, Automatic Flap Pasting machines, and Dual-Head Stitching Machines.
   - Purpose: Required for Step 6 converting equipment listings. Clean branded fallback outlines are currently utilized.
3. **On-Site Installation & Engineering Team in Action:**
   - Field photographs of engineers erecting corrugators and conducting operator training at customer packaging facilities.
   - Purpose: Reinforces the Semi-Indian engineering value proposition and corporate credibility.

---

## 4. Step 6 Product Catalogue Image & Specification Audit

| Machinery Record | Slug | Verified Primary Image | Technical Specification Source Document |
| :--- | :--- | :--- | :--- |
| **WJ-100-1800 2PLY Plant** | `wj-100-1800-2ply-plant` | `wj_100_1800_2ply_plant__july__2023_img_1.jpg` (+5 sub-assembly images) | `WJ-100-1800 2PLY Plant - July, 2023.pdf` |
| **SF-280 Single Facer** | `sf-280-single-facer` | `sf280_single_facer_corrugation_machine_1800mm_img_1.jpg` | `SF280 Single facer Corrugation Machine 1800mm.pdf` |
| **SF-10 Single Facer** | `sf-10-single-facer` | `wj_100_1800_2ply_plant__july__2023_img_4.jpg` | `WJ-100-1800 2PLY Plant - July, 2023.pdf` |
| **SF-360S Fingerless Single Facer** | `sf-360s-fingerless-single-facer` | `sf280_single_facer_corrugation_machine_1800mm_img_1.jpg` (Rep. Single Facer) | NAGJAN Reference Website Catalogue |
| **ZJ-V5B Hydraulic Mill Roll Stand** | `zj-v5b-hydraulic-mill-roll-stand` | `wj_100_1800_2ply_plant__july__2023_img_2.jpg` | `WJ-100-1800 2PLY Plant - July, 2023.pdf` |
| **Standard 2-Ton Hydraulic Stand** | `hydraulic-mill-roll-stand-2ton` | `hydraulic_mill_roll_stand_img_1.jpg` (+3 detail views) | `Hydraulic Mill Roll Stand.pdf` |
| **ZJ-YB Electric Mill Roll Stand** | `zj-yb-electric-mill-roll-stand` | `hydraulic_mill_roll_stand_img_2.jpg` (Rep. Roll Stand) | NAGJAN Reference Website Catalogue |
| **NC-1800 Computer Rotary Cutter** | `nc-1800-rotary-cutter` | `wj_100_1800_2ply_plant__july__2023_img_5.jpg` | `WJ-100-1800 2PLY Plant - July, 2023.pdf` |
| **JH-80 Mechanical Sheet Cutter** | `jh-80-mechanical-cutter` | `wj_100_1800_2ply_plant__july__2023_img_5.jpg` (Rep. Cutter) | NAGJAN Reference Website Catalogue |
| **SZJ Automatic Rotary Stacker** | `szj-rotary-stacker` | `wj_100_1800_2ply_plant__july__2023_img_6.jpg` | `WJ-100-1800 2PLY Plant - July, 2023.pdf` |
| **Converting Equipment (8 Models)** | e.g. `7m-single-colour-printer-slotter` | Authenticated category photographs & equipment outlines | NAGJAN Reference Website Catalogue & Spares Catalog |

---

## 5. Step 7 Machinery Detail Specification & Document Gaps

During the Step 7 implementation of all 18 individual product detail pages, the following specific technical parameters and assets were identified as requiring Mount Kailash Printpack Machines confirmation:

1. **Converting Machinery Weight & Power Metrics:**
   - Exact overall weight (kg) and total connected load (kW) for legacy converting machinery (HY-A, HY-B, BFY-DP, flap pasting, stitching machines, and flute laminators) are currently designated as *"To be confirmed"* in the specifications table to avoid fabricating unverified engineering claims.
2. **Downloadable CAD Foundation Layouts & Technical PDF Datasheets:**
   - Plant engineers and procurement officers often require downloadable civil foundation drawings (trench depth, electrical duct layout) and 2-page spec sheets. Mount Kailash should provide approved engineering drawings if download CTAs are to be added in Phase 9.
3. **Supplementary Multi-Angle Machinery Photography:**
   - Converting and finishing equipment models currently display single verified product photographs. Adding supplementary multi-angle detail shots (e.g., feed table, anilox roll, die cylinder, stitch head assembly) will automatically populate the active lightbox gallery components.

---

## 6. Step 8 Spare Parts & Cart Engine Data Gaps & Clarifications

During the Step 8 implementation of the Spare Parts E-Commerce & Cart Engine, the following specific inventory, pricing, and fulfillment parameters were identified as requiring Mount Kailash Printpack Machines operational confirmation:

1. **Dimensional Pricing for Anvil Covers & Feeder Wheels:**
   - Products such as MaxDura Anvil Covers (`AC-MD-KN-PCH`), 4-Pillar Feeder Wheels (`FW-4P-SPLIT`), No-Crush Wheels (`NCW-PU-DUAL`), Diamond Cup Grinding Wheels (`GW-DMD-CUP`), and C&U High-Temp Bearings (`BR-CU-HT200`) require bore diameter or cylinder circumference specifications before fixed pricing can be calculated. These items are purposefully routed to *"Price on Request / Technical Enquiry"* to avoid displaying fabricated prices.
   - **Action Required:** Mount Kailash should provide a standardized dimensional price matrix (e.g. per-meter or per-diameter tier) if direct online checkout for these items is desired in Step 9.
2. **Real-time Godown Inventory Quantities:**
   - The catalogue marks products as *"Ready Stock at Madhavaram Godown, Chennai"* based on verified reference shop records without fabricating exact numerical stock counts (e.g. stating 50 units vs 10 units).
   - **Action Required:** Connect a lightweight warehouse stock count feed or ERP API if real-time numerical countdown badges are desired.
3. **GST Calculation & Transport Freight Integration:**
   - All displayed spare parts prices are strictly designated as *"Excl. 18% GST"*. Cart subtotal displays parts total with clear disclosures that official GST (18%) and transport freight (VRL Logistics / TCI Express / DTDC) will be finalized on the proforma invoice.
   - **Action Required:** Confirm company GSTIN and preferred courier API integrations if automated tax and shipping calculation should occur prior to proforma invoice generation.
4. **Machinery vs Spare Parts Separation Enforcement:**
   - The Shopping Cart Engine strictly rejects industrial machinery items (`hasVerifiedPrice === false` and excluded from `SparePart` types). Machinery requests continue to flow exclusively through formal engineering quotations (`/request-quote`).

---

## 7. Step 9 Corporate Trust, Categories & Quote Engine Operational Confirmations

During the Step 9 implementation of the corporate trust pages, master category directory, and request quote engine, the following specific business parameters were identified as requiring client confirmation before production deployment:

1. **WhatsApp Business Hotline:**
   - The header click-to-call, footer, and contact directories utilize verified telephone numbers (`+91-94455 66288` and `+91-7299 20 7800`).
   - Direct WhatsApp floating button and links remain deactivated in `src/data/navigation.ts` (`COMPANY_CONTACT.whatsapp.isConfigured = false`) until Mount Kailash Printpack Machines officially confirms which mobile number is registered for WhatsApp Business.
2. **Doorstep GPS Pinpoint Coordinates:**
   - The Contact page Google Maps links point directly to verified street addresses in Perungudi (Corporate Office) and Madhavaram (Assembly Godown & Depot).
   - Precise doorstep latitude/longitude coordinates can be supplied for exact satellite pinpointing.
3. **Production Email Connector (SMTP / Resend / SendGrid):**
   - Both the Contact Form and Request Quote Engine implement full client-side field validation, regex checking, anti-spam honeypot filtering, and RFC 2368 `mailto:` draft generation.
   - Server-side email delivery (`/api/contact` or `/api/quote`) requires connecting the client's preferred SMTP or transactional email provider in Phase 7 to prevent sending unauthenticated emails.
4. **Updated Machine Installation Statistics:**
   - Documented baseline figures (founded May 2010, 240+ corrugators delivered) have been maintained. Mount Kailash Printpack Machines may supply updated figures (e.g. 350+ or 500+ machines) for subsequent revisions.






