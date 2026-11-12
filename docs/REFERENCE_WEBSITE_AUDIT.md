# NAGJAN E-Commerce: Reference Website Audit

**Primary Website:** `http://www.nagjan.com/`  
**Spare Parts Shop:** `https://shop.nagjan.com/`  
**Audit Date:** November 12, 2026  
**Auditor:** Antigravity AI Assistant  

---

## 1. Primary Website Audit (`http://www.nagjan.com/`)

### 1.1 Architecture & Hosting Environment
- **Server:** `nginx/1.4.6 (Ubuntu)` with `Express` backend handling static routing.
- **Root Page (`/`):** Serves a legacy **Adobe Flash** splash animation converted via **Google Swiffy** (`swiffy-runtime.js`, file date December 2014) displaying an animated machine graphic and a *"Click to Continue"* prompt leading to `/home`.
- **CSS Framework:** Custom legacy layout based on the `coolblue` template by `styleshout` (dating back to 2013).
- **Mobile Responsiveness:** **Non-responsive.** Hard-coded fixed container width of `1000px`. Broken on modern mobile viewports (requires horizontal scrolling and pinching).

### 1.2 Information Architecture & Navigation

The primary website consists of four core functional pages plus external redirects:

```
http://www.nagjan.com/
├── / (Flash Swiffy splash page)
├── /home (Main landing page with Nivo Slider & company overview)
├── /infra (Facilities, warehouse, customization, service motto)
├── /products (Machinery catalog listing 20+ equipment types)
├── /contact-us (Contact info, office addresses, and inquiry form)
├── http://blog.nagjan.com (External Blogspot link)
└── http://www.maxdura.com.tw/english.html (External Taiwanese partner link)
```

### 1.3 Detailed Page-by-Page Breakdown

#### A. Splash Screen (`/`)
- **Technology:** 1.28 MB Swiffy-converted Flash object (`swiffyobject`).
- **Shortcomings:** Modern web browsers no longer execute Flash runtimes reliably. Massive overhead for a single click-through banner.
- **Action for New Site:** **Completely eliminate.** Direct users straight to the modern Next.js homepage.

#### B. Homepage (`/home`)
- **Header:** Brand title *"Mount Kailash Printpack Machines - A new trend in Corrugation industry"*, horizontal navigation links, search input, RSS/Email subscribe buttons.
- **Hero Area:** jQuery `nivo-slider` carousel cycling through low-resolution machine photos.
- **Ticker / Banner:** *"Winners of India Independence Day 2013 lucky draw"* and announcement of *"Live demo at Stall: B-12 and B-14, Pragati Maidan, New Delhi on 17th, 18th and 19th October, 2013"*. (Severely dated).
- **Company Introduction:** High-value authentic copy describing:
  - Founded in May 2010 by proprietor Mr. A. Nagarajan.
  - Sister enterprise: M/s Printo Machines and Tools (Regd) in Puducherry and Chennai (15+ years).
  - Sole selling dealer for Tamil Nadu & Puducherry for M/s. Associated Engineering Corporation, Amritsar.
  - Over 240 Corrugators supplied across India, plus international export clients.
  - The "SEMI-INDIAN" machine philosophy: importing top-grade machinery and upgrading them with Indian branded motors (Crompton / Siemens / ABB) and VFD drives.
- **Sidebar:** Categories list, contact card, video stream link, recent blog post titles.
- **Footer:** Dummy template comments ("Whoa! This one is really cool... - Erwin", "Naruto", "Shikamaru") left behind from the 2013 styleshout HTML template.

#### C. Infrastructure Page (`/infra`)
- **Warehouse (Godown):** Large inspection depot in Madhavaram, Chennai where imported units are tested, upgraded, and wrapped.
- **Engineering Quality:** Semi-Indian engineering highlights; Siemens/ABB/Crompton AC motors and variable-speed VFD drives that save electrical power.
- **Service Division:** Headed by chief engineer **Mr. D. Elumalai**.
- **Customer Commitment:** Customer-driven continuous improvement and guaranteed availability of both mechanical and electrical replacement parts.

#### D. Machinery Products Page (`/products`)
Lists 20 primary industrial machinery models across corrugation, converting, printing, and finishing:
1. `7m-single-colour-printer-slotter`: 7m Single Colour Printer Slotter
2. `single-facer-corrugation-360s`: SF - 280S / 320S / 360S Single Facer Fingerless Corrugation Machine
3. `hd-hydra-shaftless-roll-stand`: ZJ-YB Heavy Duty Hydraulic Shaftless Mill Roll Stand
4. `chain-feeding-rotary-slotting`: HY-B Chain Feeding Rotary Slotting Machine
5. `semi-servo-drive-box-stitching`: Semi Auto Servo Drive Box Stitching Machine
6. `hd-electric-shaftless-roll-stand`: ZJ-YB Heavy Duty Electric Operated Shaftless Mill Roll Stand
7. `nc-cutoff-auto-sheet-cutter`: N. C. Cut-Off Auto Sheet Cutter
8. `mech-cutoff-auto-sheet-cutter`: JH-80 Mechanical Cut-Off Auto Sheet Cutter
9. `tmb-semi-auto-flute-lamination`: TMB-C Semi Auto Flute Lamination Machine
10. `stm-fully-auto-flute-lamination`: STM Fully Auto Flute Lamination Machine
11. `stmt-fully-auto-flute-lamination`: STMT Fully Auto Flute Lamination Machine
12. `auto-printer-slotter-die-cutter`: HY-A Computerised Fully Auto Printer, Slotter, Die-Cutter With Stacker
13. `flexo-printing-slotting`: HY-A Semi Auto Waterbased Flexo Printing And Slotting Machine
14. `rotary-die-cutting`: HY-GM Semi Auto Rotary Die-Cutting Machine
15. `cutting-creasing`: BFY-DP Thin Blade Cutting and Creasing Machine
16. `fully-auto-box-flap-pasting`: Fully Auto Corrugated Box Flap Pasting Machine (Folder Gluer Machine)
17. `ylbzd-semi-auto-box-flap-pasting`: YL-BZD Semi Auto Corrugated Box Flap Pasting Machine
18. `cd-fully-auto-partion-slotter`: CD Fully Auto Partition Slotter
19. `sut-auto-feeder`: SUT Auto Feeder For All Type Of Chain Feeding Machines
20. `double-head-box-stitching-dxj`: Double Head Box Stitching Machine (DXJ Duty Model)
21. `double-head-box-stitching-gdj`: Double Head Box Stitching Machine (GDJ Heavy Model)

#### E. Contact Us Page (`/contact-us`)
- **Addresses Verified:**
  - **Registered Office:** Plot No. 21, Door No. 14, Third Cross, Thirumalai Nagar, Perungudi, Chennai - 600 096, India.
  - **Communication Office:** No. 11, Demonte Avenue, Fourth Cross, Ravi Garden, Thapal Petti, Madhavaram, Chennai - 600 060, India. Phone: 07299 20 7800.
  - **Godown / Depot:** No. 1, Perumal Koil Street, Near Madhavaram New Bus Depot, Madhavaram, Chennai - 600 060, India.
- **Direct Contacts:**
  - Phone: `+91-44-2496 2406`
  - Mobile: `+91-94455 66288`
  - Service & Spares Hotline: `+91-7299 20 7800`
  - Emails: `sales@nagjan.com`, `info.mountkailash@yahoo.com`, `nagarajan_6@sify.com`
- **Inquiry Form:** Standard fields: Subject, Name, Company, Phone, Email, Address, Message.

---

## 2. Spare Parts Shop Audit (`https://shop.nagjan.com/`)

### 2.1 Platform & Architecture
- **E-Commerce Engine:** WordPress 5.x/6.x with WooCommerce.
- **Server:** LiteSpeed Web Server, PHP 7.4.33 on Hostinger infrastructure.
- **REST APIs Available:** Verified active endpoints at `/wp-json/wc/store/v1/products` and `/wp-json/wc/store/v1/products/categories`.
- **Active SKUs:** Over **400+ spare parts** actively catalogued with INR pricing.

### 2.2 Category Hierarchy & Product Breakdown

| Category Name | Category Slug | Total SKUs | Sample Items & Verified Pricing |
| :--- | :--- | :--- | :--- |
| **Anvil Covers** | `anvil-covers` | 92 | MaxDura Knuckle Type Peach, Polyurethane anvil blankets |
| **Feeder Wheels** | `feeder-wheels` | 26 | 4-pillar split type feeder wheel, sun feeder wheels |
| **No Crush Wheels** | `no-crush-wheels` | 18 | Polyurethane no-crush wheels, dual durometer wheels |
| **Thin Blades** | `thin-blades` | 17 | Thinblade OD:100mm ID:20mm Thickness 1.2mm (₹2,200) |
| **Grinding Wheels** | `grinding-wheels` | 2 | Diamond cup grinding wheels, corrugator sharpening stones |
| **Stitching Spares** | `stitching-machine-spares` | 33 | Stitching heads, wire feeders, metal sensors (₹1,950) |
| **Bearings** | `bearings` | 16 | High-temp corrugator bearings, C&U precision bearings |
| **Belts** | `belt` | 22 | Timer Belt 5200-8M (₹10,800), PVC conveying belts |
| **Cylinders & Pneumatics** | `cylinders` | 4 | Cylinder MAL 40x50 (₹4,500), Cylinder MAL 25x125 (₹1,650) |
| **Solenoids & Valves** | `other-products` | 15+ | Hydraulic Reelstand Solenoid Valve (₹2,800) |
| **Electrical & Electronics**| `other-products` | 40+ | Contactor CJX2-18 (₹4,500), Auto Die Transformer (₹5,200), Remote Control for Folder Gluer (₹18,000) |
| **Sensors & Proximity** | `other-products` | 20+ | JIGO Sensor (₹1,950), Box Sensor NPN NO (₹2,100) |
| **Knives & Cutters** | `other-products` | 30+ | Female Slotting Knife OD:240 ID:160mm (₹2,850), Slitting Knife OD:182 ID:196 (₹1,600) |

### 2.3 Shop Deficiencies & Pain Points
1. **Unorganized Hierarchy:** Over 433 items are dumped into a generic *"Other Products"* category. Blades, contactors, cylinders, and sensors are mixed together without subcategory facets.
2. **Missing Compatibility Data:** Spare parts lack cross-reference tags showing which machine model they fit (e.g. *Fits SF-280, WJ-100, or standard Huayu/Chinese lines*).
3. **Slow Mobile Navigation:** Heavy PHP/WooCommerce page delivery with render-blocking scripts.
4. **Disjointed User Journey:** Customer must switch between two completely separate websites (`nagjan.com` and `shop.nagjan.com`) with inconsistent headers, colors, and navigation models.

---

## 3. Retain, Improve, Redesign Matrix

| Element | Legacy Implementation | Proposed Next.js Implementation | Classification |
| :--- | :--- | :--- | :--- |
| **Splash Screen** | 2014 Swiffy Flash animation (1.28 MB) | Remove completely; root `/` renders instant Next.js hero | **Redesign** |
| **Brand Identity** | Stylized NAGJAN logo | Use verified authentic `public/logo/nagjan-logo.png` | **Retain** |
| **Corporate Narrative** | May 2010 founding, 240+ corrugators, Semi-Indian concept | Highlight proudly in modern About & Story sections | **Retain & Elevate** |
| **Verified Contacts** | Offices in Perungudi, Madhavaram, Godown, Phones & Emails | Formatted with direct `tel:`, `mailto:`, and interactive maps | **Retain & Improve** |
| **Industrial Machinery** | Static low-res listing on single `/products` page | Rich dynamic `/products/[slug]` with tabs, specs, PDF downloads | **Redesign** |
| **Spare Parts Shop** | Separate WordPress/WooCommerce site on sub-domain | Unified under `/spare-parts` with modern instant search & filter | **Unify & Redesign** |
| **Machine Specs** | Brief bulleted lists | Multi-variant high-density comparison tables from PDF sources | **Redesign** |
| **Lead Generation** | Basic unvalidated contact form | Interactive "Request a Quote" modal with instant email triggers | **Redesign** |
| **Mobile Experience** | Broken 1000px fixed width layout | 100% fluid, responsive Tailwind v4 + Base UI components | **Redesign** |
| **Dated Content** | 2013 trade fair & lucky draw announcements | Replace with modern corporate milestones and capabilities | **Remove & Modernize** |

