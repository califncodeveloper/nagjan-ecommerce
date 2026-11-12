import {
  TrustMetricItem,
  FeaturedMachineItem,
  MachineCategoryItem,
  SemiIndianAdvantagePillar,
  SparePartFinderCategory,
  WhyChooseUsPillar,
  InfrastructureFacility,
} from "@/types/homepage";

export const HERO_CONTENT = {
  badge: "Engineering Excellence Since 2010 • Chennai, India",
  headline: "Engineering the Future of Corrugated Packaging.",
  supportingCopy:
    "Industrial corrugation machinery, precision engineering, and dependable spare-parts solutions from NAGJAN.",
  primaryCta: {
    label: "Explore Our Machinery",
    href: "/products",
  },
  secondaryCta: {
    label: "Request a Quote",
    href: "/request-quote",
  },
  heroImage: {
    src: "/images/products/wj_100_1800_2ply_plant__july__2023_img_1.jpg",
    alt: "NAGJAN WJ-100-1800 2PLY Single Corrugated Cardboard Production Line",
  },
  technicalBadges: [
    { label: "Design Speed", value: "100 m/min" },
    { label: "Working Width", value: "1800 mm" },
    { label: "Frame Material", value: "Heavy HT250 Cast Iron" },
    { label: "Electricals", value: "Siemens & ABB" },
  ],
};

export const TRUST_METRICS: TrustMetricItem[] = [
  {
    value: "240+",
    label: "Corrugators Delivered",
    description: "Installed and operating across Indian corrugation plants",
  },
  {
    value: "2010",
    label: "Established Year",
    description: "Founded in Chennai by industry engineering veterans",
  },
  {
    value: "15+",
    label: "Years Engineering",
    description: "Dedicated to corrugated machinery customization & service",
  },
  {
    value: "400+",
    label: "Spare Parts Stocked",
    description: "Ready stock at our Madhavaram Assembly & Spares Depot",
  },
];

export const ABOUT_PREVIEW = {
  eyebrow: "Mount Kailash Printpack Machines • NAGJAN Brand",
  heading: "Built on Engineering. Driven by Reliability.",
  intro:
    "Mount Kailash Printpack Machines was established in May 2010 in Chennai, Tamil Nadu, specializing in the import, engineering customization, supply, and servicing of high-performance corrugation equipment.",
  body1:
    "Under our commercial brand NAGJAN, we deliver heavy-duty single facers, complete 2PLY production lines, mill roll stands, and over 400 specialized spare parts engineered for high uptime and rigorous round-the-clock plant demands.",
  body2:
    "Our unique Semi-Indian Machine Advantage combines heavy-duty mechanical cast-iron frames with reputable Indian and international electrical systems—giving box manufacturers lower operational costs, local serviceability, and lasting production stability.",
  provenancePoints: [
    "Heavy-duty HT250 cast-iron wallboards and alloy steel rollers",
    "Selected electrical integration: Siemens, ABB, Delta, and Inovance",
    "Dedicated assembly depot and machine testing facility in Madhavaram, Chennai",
    "Full engineering erection, commissioning, and on-site operator training",
  ],
  cta: {
    label: "Discover Our Story",
    href: "/about",
  },
  image: {
    src: "/images/products/sf280_single_facer_corrugation_machine_1800mm_img_1.jpg",
    alt: "NAGJAN SF-280 Single Facer Corrugation Machine Frame with Precision Rollers",
  },
};

export const FEATURED_MACHINERY: FeaturedMachineItem[] = [
  {
    id: "wj-100-1800-2ply",
    name: "WJ-100-1800 2PLY Plant",
    model: "WJ-100-1800",
    subtitle: "Complete Single Corrugated Cardboard Production Line",
    image: "/images/products/wj_100_1800_2ply_plant__july__2023_img_1.jpg",
    imageAlt: "NAGJAN WJ-100-1800 2PLY Complete Corrugation Production Line",
    badge: "Flagship Production Line",
    description:
      "A complete industrial 2-ply single-face corrugated board production line integrating the ZJ-V5B hydraulic mill roll stand, SF-10 single facer, conveyor bridge, NC-1800 computer rotary cut-off, and SZJ rotary stacker.",
    specs: [
      { label: "Working Width", value: "1800 mm" },
      { label: "Design Speed", value: "100 m/min" },
      { label: "Economic Speed", value: "50 – 70 m/min" },
      { label: "Total Power", value: "Approx. 50 KW (30 KW actual)" },
      { label: "Corrugator Roll", value: "Φ 292 mm (Tungsten Carbide)" },
      { label: "Cutting Range", value: "300 – 9000 mm (±1.5mm)" },
    ],
    provenance: ["Siemens", "Delta", "Inovance", "C&U Bearings", "Schneider"],
    href: "/products?category=corrugation-production-lines&view=wj-100-1800-2ply-plant",
    quoteHref: "/request-quote?product=wj-100-1800-2ply-plant",
  },
  {
    id: "sf-280-single-facer",
    name: "SF-280 Single Facer Corrugation Machine",
    model: "SF-280",
    subtitle: "Standalone Fingerless High-Speed Single Facer (1800mm)",
    image: "/images/products/sf280_single_facer_corrugation_machine_1800mm_img_1.jpg",
    imageAlt: "NAGJAN SF-280 Fingerless Single Facer Corrugation Machine",
    badge: "Precision Single Facer",
    description:
      "Heavy-duty standalone single facer with negative pressure hood suction, precision ground 48CrMo alloy corrugated rollers with induction hardening, and ABB variable frequency motor drive.",
    specs: [
      { label: "Working Width", value: "1800 mm" },
      { label: "Design Speed", value: "100 m/min" },
      { label: "Economic Speed", value: "80 – 100 m/min" },
      { label: "Main Motor", value: "10 KW (ABB VFD)" },
      { label: "Corrugator Roll", value: "Φ 280 mm (48CrMo Hardened)" },
      { label: "Flute Profile", value: "B Flute (161/159 teeth)" },
    ],
    provenance: ["ABB Motor", "C&U Bearings", "Chint Low Voltage", "Jade Jie Joints"],
    href: "/products?category=single-facer-corrugators&view=sf-280-single-facer",
    quoteHref: "/request-quote?product=sf-280-single-facer",
  },
  {
    id: "hydraulic-mill-roll-stand",
    name: "Hydraulic Shaftless Mill Roll Stand",
    model: "Standard 2-Ton Series",
    subtitle: "Dual-Reel Heavy-Duty Paper Roll Unwinding Stand",
    image: "/images/products/hydraulic_mill_roll_stand_img_1.jpg",
    imageAlt: "NAGJAN Heavy Duty Hydraulic Shaftless Mill Roll Stand",
    badge: "Dual Reel Handling",
    description:
      "Robust dual-arm shaftless paper mill roll stand enabling non-stop reel loading while the corrugator runs. Features 6 independent hydraulic cylinders, multi-point pneumatic disc brakes, and expansion chucks.",
    specs: [
      { label: "Working Width", value: "1400 / 1600 mm" },
      { label: "Max Reel Dia", value: "Φ 1500 mm" },
      { label: "Roll Weight", value: "2 Tons per arm (dual-sided)" },
      { label: "Main Shaft", value: "Φ 219 mm Heavy Steel" },
      { label: "Pneumatics", value: "0.4 – 0.8 MPa Disc Brakes" },
      { label: "Hydraulics", value: "6 Hydraulic Cylinders" },
    ],
    provenance: ["Schneider Electric", "Gear-Disc Brakes", "Shandong Hydraulic Station"],
    href: "/products?category=hydraulic-electric-mill-roll-stands&view=hydraulic-mill-roll-stand-2ton",
    quoteHref: "/request-quote?product=hydraulic-mill-roll-stand-2ton",
  },
];

export const MACHINERY_CATEGORIES: MachineCategoryItem[] = [
  {
    id: "corrugation-lines",
    title: "Corrugation Production Lines",
    description:
      "Complete 2-ply industrial corrugator plants engineered for continuous single-face cardboard production at up to 100 m/min.",
    badge: "Complete Lines",
    iconName: "Layers",
    keyModels: "WJ-100-1800 2PLY Line",
    href: "/products?category=corrugation-production-lines",
  },
  {
    id: "single-facers",
    title: "Single Facer Corrugators",
    description:
      "Fingerless negative-pressure suction single facers with induction hardened alloy corrugating rolls and electric glue width adjustment.",
    badge: "Flute Forming",
    iconName: "Cpu",
    keyModels: "SF-280, SF-10, SF-360S",
    href: "/products?category=single-facer-corrugators",
  },
  {
    id: "mill-roll-stands",
    title: "Hydraulic & Electric Mill Roll Stands",
    description:
      "Heavy-duty shaftless reel unwinding stands with independent dual arms, 2-ton to 3-ton capacity, and pneumatic disc brakes.",
    badge: "Reel Handling",
    iconName: "RotateCw",
    keyModels: "2-Ton Stand, ZJ-V5B 3-Ton Stand",
    href: "/products?category=hydraulic-electric-mill-roll-stands",
  },
  {
    id: "rotary-cutters",
    title: "Rotary Cut-Off Systems",
    description:
      "In-line high-precision computer rotary cut-off machines with 200-group order memory and continuous non-stop order switching.",
    badge: "Precision Cutting",
    iconName: "Scissors",
    keyModels: "NC-1800 Computer Cutter",
    href: "/products?category=cut-off-stacking-systems",
  },
  {
    id: "stacking-systems",
    title: "Automatic Stacking Systems",
    description:
      "Continuous rotary stackers with non-stop automatic counting, batch stacking, and stamping designed for minimal plant footprint.",
    badge: "End-of-Line",
    iconName: "PackageCheck",
    keyModels: "SZJ Rotary Stacker",
    href: "/products?category=cut-off-stacking-systems",
  },
  {
    id: "converting-equipment",
    title: "Printing, Slotting & Converting Equipment",
    description:
      "Flexo printer-slotters, rotary die-cutters, semi and fully automatic folder gluers, and dual-head box wire stitching machines.",
    badge: "Converting",
    iconName: "Printer",
    keyModels: "7M Printer-Slotter, Box Stitchers",
    href: "/products?category=printing-slotting-converting",
  },
];

export const SEMI_INDIAN_ADVANTAGE: SemiIndianAdvantagePillar[] = [
  {
    title: "Heavy-Duty Mechanical Foundation",
    subtitle: "Rigid Structural Machine Frames",
    description:
      "Constructed with thick HT250 cast-iron wallboards, precision-welded Q235A steel structures, and quenched alloy steel corrugating rolls (48CrMo / 50CrMo) designed to absorb vibration during continuous industrial shifts.",
    iconName: "ShieldCheck",
    highlight: "Cast Iron HT250 & Alloy Rollers",
  },
  {
    title: "Indian Electrical & Drive Integration",
    subtitle: "Recognized Component Provenance",
    description:
      "Standardized with verified electrical switchgear, VFD inverters, and drive motors from Siemens, ABB, Crompton Greaves, Schneider Electric, Delta, and Inovance—eliminating proprietary electronic locks.",
    iconName: "Zap",
    highlight: "Siemens • ABB • Schneider • Delta",
  },
  {
    title: "Immediate Spares & Local Service",
    subtitle: "Eliminating Costly Plant Downtime",
    description:
      "Because all vital electrical components, bearings, and pneumatic controls use standard metric industrial ratings, replacement parts are readily available off-the-shelf across India and from our Madhavaram depot.",
    iconName: "Boxes",
    highlight: "400+ Ready Parts in Chennai",
  },
  {
    title: "Dedicated Engineering Support",
    subtitle: "Chennai-Based Technical Team",
    description:
      "Our in-house installation engineers provide full plant layout planning, mechanical erection, electrical wiring, boiler piping assistance, and hands-on machine operator training across client factories.",
    iconName: "Wrench",
    highlight: "Erection, Commissioning & Training",
  },
];

export const SPARE_PARTS_FINDER: SparePartFinderCategory[] = [
  {
    id: "anvil-covers",
    name: "Anvil Covers",
    description: "MaxDura knuckle-type polyurethane blankets for rotary die-cutters.",
    badge: "Ready Stock",
    iconName: "Disc",
    href: "/spare-parts?category=anvil-covers",
  },
  {
    id: "feeder-wheels",
    name: "Feeder Wheels",
    description: "4-pillar split-type sun feeder polyurethane & rubber friction wheels.",
    badge: "High Wear",
    iconName: "CircleDot",
    href: "/spare-parts?category=feeder-wheels",
  },
  {
    id: "no-crush-wheels",
    name: "No-Crush Wheels",
    description: "Polyurethane wheels designed to transport corrugated board without flute damage.",
    badge: "Board Protection",
    iconName: "Disc",
    href: "/spare-parts?category=no-crush-wheels",
  },
  {
    id: "grinding-wheels",
    name: "Grinding Wheels",
    description: "Diamond and CBN sharpening wheels for slitting knives and thin blades.",
    badge: "Sharpening",
    iconName: "Cog",
    href: "/spare-parts?category=grinding-wheels",
  },
  {
    id: "thin-blades",
    name: "Thin Blades & Slitting Knives",
    description: "Tungsten carbide and alloy steel razor-sharp circular cutting knives.",
    badge: "Precision Cutting",
    iconName: "Activity",
    href: "/spare-parts?category=thin-blades-knives",
  },
  {
    id: "belts-transmission",
    name: "Belts & Transmission",
    description: "High-torque synchronous timing belts, PVC take-up belts, and conveyor belts.",
    badge: "Transmission",
    iconName: "Sliders",
    href: "/spare-parts?category=belts-transmission",
  },
  {
    id: "bearings",
    name: "Industrial Bearings",
    description: "Heavy-duty spherical roller and deep groove bearings from C&U and leading makers.",
    badge: "Heavy Duty",
    iconName: "Settings",
    href: "/spare-parts?category=bearings",
  },
  {
    id: "electricals-automation",
    name: "Electricals & Automation",
    description: "Industrial contactors, relays, photoelectric sensors, solenoids, and transformers.",
    badge: "Automation",
    iconName: "Zap",
    href: "/spare-parts?category=electricals-automation",
  },
  {
    id: "stitching-spares",
    name: "Stitching Machine Spares",
    description: "Wire feed gears, stitching heads, cutters, and proximity sensors.",
    badge: "Finishing Spares",
    iconName: "CheckCircle2",
    href: "/spare-parts?category=stitching-machine-spares",
  },
];

export const INFRASTRUCTURE_FACILITIES: InfrastructureFacility[] = [
  {
    title: "Madhavaram Assembly & Spares Depot (Godown)",
    subtitle: "Machine Testing, Electrical Retrofitting & Spares Depot",
    address:
      "No. 1, Perumal Koil Street, Near Madhavaram New Bus Depot, Madhavaram, Chennai – 600 060, Tamil Nadu, India",
    role: "Central engineering hub where imported machinery frames are inspected, retrofitted with Indian electrical switchgear, tested under electrical power, and dispatched. Houses 400+ spare parts for instant dispatch.",
    features: [
      "400+ Spare Parts Permanent Stock",
      "Electrical Retrofitting & Panel Assembly",
      "Pre-Dispatch Machine Power Testing",
      "Direct Road Connectivity via Chennai Transport Hub",
    ],
  },
  {
    title: "Perungudi Registered Corporate Office",
    subtitle: "Corporate Administration & Client Relations",
    address:
      "Plot No. 21, Door No. 14, Third Cross, Thirumalai Nagar, Perungudi, Chennai – 600 096, Tamil Nadu, India",
    role: "Corporate headquarters handling quotation processing, technical project consultations, machine supply contracts, and customer relationship coordination.",
    features: [
      "Technical Machinery Consultation Desk",
      "Commercial Quotation & Proposal Engineering",
      "Executive Project Management",
      "Direct Access to Engineering Leadership",
    ],
  },
];

export const WHY_CHOOSE_US: WhyChooseUsPillar[] = [
  {
    title: "15+ Years Specialized Domain Focus",
    description:
      "Founded in May 2010 by industry veterans with over two decades of corrugation, converting, and packaging machinery experience.",
    iconName: "Award",
    metric: "Est. 2010",
  },
  {
    title: "240+ Corrugators Delivered",
    description:
      "Proven track record of supplying, erecting, and supporting corrugation lines across major packaging clusters in India and abroad.",
    iconName: "Layers",
    metric: "240+ Plants",
  },
  {
    title: "The Semi-Indian Machine Advantage",
    description:
      "Combines heavy-duty mechanical cast-iron structural durability with reputable Indian electrical systems for cost-effective uptime.",
    iconName: "Settings",
    metric: "Hybrid Value",
  },
  {
    title: "Globally Reputable Components",
    description:
      "Standardized integration with Siemens, ABB, Schneider Electric, Crompton Greaves, Delta, and Inovance for worry-free operation.",
    iconName: "ShieldCheck",
    metric: "Top Brands",
  },
  {
    title: "Dedicated Assembly & Spares Godown",
    description:
      "Permanent stock of over 400 spare parts maintained at Madhavaram, Chennai, ensuring minimal disruption to client production lines.",
    iconName: "Clock",
    metric: "400+ Parts",
  },
  {
    title: "Direct Engineering & Commissioning",
    description:
      "Comprehensive end-to-end service including site layout planning, machine erection, electrical cabling, boiler hookup, and operator guidance.",
    iconName: "CheckCircle",
    metric: "In-House Team",
  },
];

export const QUOTE_LEAD_CONTENT = {
  heading: "Planning Your Next Production Upgrade?",
  subheading:
    "Connect with our engineering team to discuss corrugator lines, standalone single facers, or customized plant layouts tailored to your packaging requirements.",
  primaryCta: {
    label: "Request a Machine Quote",
    href: "/request-quote",
  },
  secondaryCta: {
    label: "Speak with Our Engineers",
    href: "/contact",
  },
  highlights: [
    "Comprehensive technical layout consultation",
    "Flute profile options: A, B, C, E flutes",
    "Left-hand or right-hand operational direction",
    "Indian electrical & drive integration choices",
  ],
};

