/**
 * NAGJAN Navigation & Company Contact Data
 * Brand: NAGJAN | Company: Mount Kailash Printpack Machines
 * All details strictly verified from source documentation.
 */

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface MachineryCategoryGroup {
  id: string;
  name: string;
  description: string;
  models: {
    name: string;
    model: string;
    href: string;
    description: string;
    specs: string;
    badge?: string;
  }[];
}

export interface SparePartCategoryItem {
  name: string;
  href: string;
  description: string;
  itemCountNote?: string;
  badge?: string;
}

export const COMPANY_CONTACT = {
  brandName: "NAGJAN",
  legalName: "Mount Kailash Printpack Machines",
  tagline: "Industrial Corrugated Packaging Machinery Solutions",
  establishedYear: 2010,
  installedUnits: "240+ Corrugators Delivered",

  // Verified Contacts
  phones: {
    sales: {
      display: "+91-94455 66288",
      tel: "+919445566288",
      label: "Sales Inquiry",
    },
    service: {
      display: "+91-7299 20 7800",
      tel: "+917299207800",
      label: "Service & Spares Hotline",
    },
    landline: {
      display: "+91-44-2496 2406",
      tel: "+914424962406",
      label: "Office Landline",
    },
  },
  email: {
    sales: "sales@nagjan.com",
    label: "Official Sales Desk",
  },
  addresses: {
    registeredOffice: {
      title: "Registered Corporate Office",
      address: "Plot No. 21, Door No. 14, Third Cross, Thirumalai Nagar, Perungudi, Chennai – 600 096, Tamil Nadu, India",
    },
    godownDepot: {
      title: "Assembly & Spares Depot (Godown)",
      address: "No. 1, Perumal Koil Street, Near Madhavaram New Bus Depot, Madhavaram, Chennai – 600 060, Tamil Nadu, India",
      notes: "400+ Spare Parts Ready Stock & Machine Testing Depot",
    },
    communicationOffice: {
      title: "Madhavaram Communication Office",
      address: "No. 11, Demonte Avenue, Fourth Cross, Ravi Garden, Thapal Petti, Madhavaram, Chennai – 600 060, Tamil Nadu, India",
    },
  },
  // WhatsApp Hotline: Kept unconfirmed until Mount Kailash Printpack Machines explicitly confirms official number
  whatsapp: {
    isConfigured: false,
    number: null,
  },
};

export const MACHINERY_NAV_DATA: MachineryCategoryGroup[] = [
  {
    id: "corrugation-lines",
    name: "Corrugation Production Lines",
    description: "Complete single-face corrugated cardboard manufacturing lines",
    models: [
      {
        name: "WJ-100-1800 2PLY Plant",
        model: "WJ-100-1800",
        href: "/products?category=corrugation-production-lines&view=wj-100-1800-2ply-plant",
        description: "Complete high-speed 2PLY single-face corrugation line with integrated mill roll stand, bridge, NC cutter, and rotary stacker.",
        specs: "1800 mm Width • 100 m/min • 50 KW Total Power",
        badge: "Flagship Line",
      },
    ],
  },
  {
    id: "single-facers",
    name: "Single Facer Corrugators",
    description: "Precision fingerless fluting machines with negative pressure suction",
    models: [
      {
        name: "SF-280 Single Facer",
        model: "SF-280 (1800mm)",
        href: "/products?category=single-facer-corrugators&view=sf-280-single-facer",
        description: "Standalone high-speed single facer with Φ280mm 48CrMo alloy rolls, ABB inverter drive, and negative pressure suction.",
        specs: "1800 mm Width • 100 m/min • Φ280 mm Roll",
        badge: "ABB Drive",
      },
      {
        name: "SF-10 Single Facer",
        model: "SF-10 (2PLY Line)",
        href: "/products?category=single-facer-corrugators&view=sf-10-single-facer",
        description: "Heavy-duty single facer engineered for continuous production with Φ292mm 50CrMo tungsten carbide roll treatment.",
        specs: "1800 mm Width • 100 m/min • Φ292 mm Tungsten Roll",
      },
      {
        name: "SF-360S Fingerless Single Facer",
        model: "SF-280S / 320S / 360S",
        href: "/products?category=single-facer-corrugators&view=sf-360s-fingerless-single-facer",
        description: "High-speed fingerless corrugator with quick-change flute cassettes and electric glue adjustment.",
        specs: "Multiple Widths • Negative Pressure Suction",
      },
    ],
  },
  {
    id: "mill-roll-stands",
    name: "Hydraulic & Electric Reel Stands",
    description: "Shaftless mill roll unwinding systems for continuous non-stop production",
    models: [
      {
        name: "ZJ-V5B Heavy Duty Hydraulic Stand",
        model: "ZJ-V5B (3-Ton Duty)",
        href: "/products?category=hydraulic-electric-mill-roll-stands&view=zj-v5b-hydraulic-mill-roll-stand",
        description: "Heavy-duty hydraulic shaftless mill roll stand with 3-ton capacity per arm, Φ242mm shaft, and Siemens electricals.",
        specs: "3-Ton per Side • Φ242 mm Shaft • 7 Ocean Taiwan Hydraulics",
        badge: "3-Ton Rating",
      },
      {
        name: "Standard Hydraulic Shaftless Stand",
        model: "1400 / 1600mm (2-Ton Duty)",
        href: "/products?category=hydraulic-electric-mill-roll-stands&view=hydraulic-mill-roll-stand-2ton",
        description: "Precision dual-arm hydraulic roll stand with 2-ton per side capacity, multi-point disc brakes, and Schneider electricals.",
        specs: "2-Ton per Side • Φ219 mm Shaft • Multi-Point Brakes",
        badge: "2-Ton Rating",
      },
      {
        name: "ZJ-YB Electric Shaftless Roll Stand",
        model: "ZJ-YB Electric",
        href: "/products?category=hydraulic-electric-mill-roll-stands&view=zj-yb-electric-mill-roll-stand",
        description: "Electric mechanical shaftless reel stand with independent dual arms and power clamped chucks.",
        specs: "Electric Motor Clamp & Lift",
      },
    ],
  },
  {
    id: "cutters-stackers",
    name: "Cut-Off & Stacking Systems",
    description: "Computerized high-accuracy rotary cutters and automatic sheet stackers",
    models: [
      {
        name: "NC-1800 Computer Rotary Cutter",
        model: "NC-1800",
        href: "/products?category=cut-off-stacking-systems&view=nc-1800-rotary-cutter",
        description: "High-accuracy rotary sheet cutter with servo motor drive, 200-order memory, and non-stop auto order change.",
        specs: "1800 mm Width • 100 m/min • ±1.5 mm Precision",
      },
      {
        name: "JH-80 Mechanical Cut-Off Cutter",
        model: "JH-80 Mechanical",
        href: "/products?category=cut-off-stacking-systems&view=jh-80-mechanical-cutter",
        description: "Rugged mechanical sheet cut-off machine for reliable continuous carton board cutting.",
        specs: "Continuous In-line Cutting",
      },
      {
        name: "SZJ Automatic Rotary Stacker",
        model: "SZJ Stacker",
        href: "/products?category=cut-off-stacking-systems&view=szj-rotary-stacker",
        description: "Automatic sheet counting, batch stacking up to 100 mm height, and automatic batch stamping.",
        specs: "70 m/min Stacking • Auto Counting & Stamping",
      },
    ],
  },
  {
    id: "printing-converting",
    name: "Printing, Slotting & Converting",
    description: "Flexo printing, rotary die cutting, thin-blade slitting, and box stitching machinery",
    models: [
      {
        name: "HY-A Auto Printer Slotter Die-Cutter",
        model: "HY-A Computerised",
        href: "/products?category=printing-slotting-converting&view=hy-a-auto-printer-slotter-die-cutter",
        description: "Multi-color flexographic printer, slotter, and rotary die-cutter with automated sheet stacker.",
        specs: "High-Speed Flexo Printing & Die-Cutting",
      },
      {
        name: "BFY-DP Thin Blade Slitter Scorer",
        model: "BFY-DP Thin Blade",
        href: "/products?category=printing-slotting-converting&view=bfy-dp-thin-blade-slitter-scorer",
        description: "Burr-free thin alloy slitting and scoring with pneumatic blade positioning and automatic grinding.",
        specs: "Sharp Burr-Free Slitting & Creasing",
      },
      {
        name: "Fully Auto Box Flap Pasting Machine",
        model: "Folder Gluer",
        href: "/products?category=printing-slotting-converting&view=fully-auto-box-flap-pasting",
        description: "High-efficiency automatic carton box folding and flap gluing machine for RSC boxes.",
        specs: "High-Speed Flap Gluing & Folding",
      },
      {
        name: "Semi Auto Servo Drive Box Stitching",
        model: "Servo Stitcher",
        href: "/products?category=printing-slotting-converting&view=semi-auto-servo-box-stitching",
        description: "Heavy-duty wire box joint stitching with high-precision servo drive and touch screen control.",
        specs: "Servo Wire Feeder • Single/Double/Reinforced Stitch",
      },
    ],
  },
];

export const SPARE_PARTS_NAV_DATA: SparePartCategoryItem[] = [
  {
    name: "Anvil Covers",
    href: "/spare-parts?category=anvil-covers",
    description: "MaxDura knuckle type peach & polyurethane die-cutting blankets for rotary die cutters.",
    itemCountNote: "90+ Models in Stock",
    badge: "MaxDura",
  },
  {
    name: "Feeder Wheels",
    href: "/spare-parts?category=feeder-wheels",
    description: "4-pillar split type feeder wheels and Sun Feeder friction rubber wheels.",
    itemCountNote: "Split & Solid Types",
  },
  {
    name: "No-Crush Wheels",
    href: "/spare-parts?category=no-crush-wheels",
    description: "Dual-durometer polyurethane non-marking wheels protecting corrugated flute profile.",
    itemCountNote: "Zero-Flute Damage",
  },
  {
    name: "Grinding Wheels",
    href: "/spare-parts?category=grinding-wheels",
    description: "Diamond cup grinding wheels and sharpening stones for slitter scorer thin blades.",
    itemCountNote: "Cup & Stone Formats",
  },
  {
    name: "Thin Blades & Slitting Knives",
    href: "/spare-parts?category=thin-blades-knives",
    description: "Tungsten alloy thin blades (100x20x1.2mm) & half-round female slotting knives.",
    itemCountNote: "Tungsten Alloy",
    badge: "High Demand",
  },
  {
    name: "Belts & Transmission",
    href: "/spare-parts?category=belts-transmission",
    description: "High-torque synchronous timing belts (5200-8M) and PVC corrugated conveying belts.",
    itemCountNote: "Timing & Conveyor",
  },
  {
    name: "High-Temperature Bearings",
    href: "/spare-parts?category=bearings",
    description: "C&U precision bearings engineered for 200°C steam heat on corrugating rolls.",
    itemCountNote: "200°C Steam Rated",
  },
  {
    name: "Electricals & Automation",
    href: "/spare-parts?category=electricals-automation",
    description: "Siemens/Chint contactors, transformers, sensors, proximity switches, and solenoid valves.",
    itemCountNote: "Siemens & Schneider",
  },
  {
    name: "Stitching Machine Spares",
    href: "/spare-parts?category=stitching-machine-spares",
    description: "Stitching heads, wire feeders, cutter blocks, and inductive metal proximity sensors.",
    itemCountNote: "Heads & Wire Feeders",
  },
];

export const PRIMARY_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Machinery", href: "/products", hasMegaMenu: true },
  { label: "Spare Parts", href: "/spare-parts", hasMegaMenu: true },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

