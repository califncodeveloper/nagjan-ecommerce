import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ShieldCheck,
  Building2,
  Cpu,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileText,
  Boxes,
  Layers,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";

export const metadata: Metadata = {
  title: "About Us | NAGJAN - Mount Kailash Printpack Machines",
  description:
    "Learn about Mount Kailash Printpack Machines, established in May 2010 in Chennai. Pioneer of Semi-Indian corrugated packaging machinery, 240+ corrugators delivered across India.",
  keywords: [
    "About NAGJAN",
    "Mount Kailash Printpack Machines",
    "Semi-Indian Corrugation Machine",
    "corrugated packaging machinery Chennai",
    "Mr A Nagarajan",
    "Printo Machines and Tools",
    "Madhavaram godown packaging",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Mount Kailash Printpack Machines | NAGJAN",
    description:
      "Pioneering heavy-duty corrugated packaging machinery and Semi-Indian engineering retrofits with Siemens & ABB automation in Chennai since 2010.",
    url: "/about",
    siteName: "NAGJAN",
    type: "website",
    images: [
      {
        url: "/images/products/wj_100_1800_2ply_plant__july__2023_img_1.jpg",
        width: 1200,
        height: 630,
        alt: "NAGJAN Industrial Corrugation Machinery",
      },
    ],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_CONTACT.legalName,
    alternateName: COMPANY_CONTACT.brandName,
    url: "https://nagjan.com",
    logo: "https://nagjan.com/logo/nagjan-logo.png",
    foundingDate: "2010-05",
    founder: {
      "@type": "Person",
      name: "Mr. A. Nagarajan",
      jobTitle: "Proprietor",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 21, Door No. 14, Third Cross, Thirumalai Nagar, Perungudi",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600096",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_CONTACT.phones.sales.display,
        contactType: "sales",
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: COMPANY_CONTACT.phones.service.display,
        contactType: "technical support",
        areaServed: "IN",
      },
    ],
    sameAs: [],
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-3">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <li>
                <Link href="/" className="hover:text-[#013074] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3.5 text-slate-400" />
              </li>
              <li className="text-slate-900 font-semibold" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Corporate Hero Section */}
      <header className="relative bg-gradient-to-b from-[#013074] via-[#02285e] to-[#01214e] text-white py-14 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-slate-200">
                <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" />
                <span>Corporate Heritage & Engineering Excellence</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
                Pioneering Practical Corrugated Packaging Machinery Since 2010
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                <strong>{COMPANY_CONTACT.legalName}</strong> is the corporate engineering backbone behind the <strong>{COMPANY_CONTACT.brandName}</strong> brand. Headquartered in Chennai, we specialize in heavy-duty corrugation production lines, precision fingerless single facers, and Semi-Indian machine retrofits engineered for non-stop industrial productivity.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <span>Explore Machinery Lines</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
                >
                  <FileText className="size-4" />
                  <span>Request a Quotation</span>
                </Link>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900/40">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/products/wj_100_1800_2ply_plant__july__2023_img_1.jpg"
                    alt="NAGJAN WJ-100-1800 2PLY Industrial Corrugator Plant"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FEA81D] block">
                      Verified Field Machinery
                    </span>
                    <p className="text-xs sm:text-sm font-semibold">
                      WJ-100-1800 2PLY Complete Corrugator Line
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Verified Experience & Trust Metrics Bar */}
      <section className="bg-white border-b border-slate-200 py-6" aria-label="Verified Trust Metrics">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3 border-r last:border-r-0 border-slate-200">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-[#013074]">
                May 2010
              </span>
              <span className="text-xs text-slate-500 font-medium">Established in Chennai</span>
            </div>

            <div className="p-3 border-r last:border-r-0 border-slate-200">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-[#013074]">
                240+
              </span>
              <span className="text-xs text-slate-500 font-medium">Corrugators Delivered</span>
            </div>

            <div className="p-3 border-r last:border-r-0 border-slate-200">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-[#013074]">
                18+
              </span>
              <span className="text-xs text-slate-500 font-medium">Machinery Models</span>
            </div>

            <div className="p-3">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-[#013074]">
                400+
              </span>
              <span className="text-xs text-slate-500 font-medium">Spare Parts SKUs</span>
            </div>
          </div>
          <p className="text-[11px] text-center text-slate-400 mt-3 italic">
            * Operational figures reflect documented deliveries and baseline catalogue records; periodic audit updates pending client confirmation.
          </p>
        </Container>
      </section>

      {/* 4. Company History & Leadership */}
      <section className="py-14 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 text-[#013074] text-xs font-bold border border-blue-200">
                <Building2 className="size-3.5 text-[#FEA81D]" />
                <span>Documented Corporate Heritage</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
                Built on Practical Packaging & Converting Expertise
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Mount Kailash Printpack Machines</strong> was established in <strong>May 2010</strong> in Chennai, Tamil Nadu, to supply reliable, cost-efficient machinery and engineering backup to the rapidly expanding Indian corrugated packaging sector.
              </p>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-lg bg-blue-100/70 text-[#013074] flex items-center justify-center shrink-0 font-bold font-heading">
                    AN
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      Leadership: Mr. A. Nagarajan, Proprietor
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      A Business Administration graduate with over two decades of practical expertise in printing, converting, and corrugated packaging engineering. Under his direction, the firm established strong sourcing networks and practical local technical support for box manufacturers across India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-1 text-xs text-slate-600">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Associated Sister Enterprise:
                </h4>
                <p className="leading-relaxed">
                  <strong>M/s. Printo Machines and Tools (Regd)</strong>, established in Puducherry and Chennai with over 15 years of industry standing, represents Indian printing and packaging machines and serves as the exclusive distributor for Tamil Nadu and Puducherry for <strong>M/s. Associated Engineering Corporation</strong>, Amritsar.
                </p>
              </div>
            </div>

            {/* Visual Callout Box */}
            <div className="lg:col-span-6">
              <div className="relative bg-gradient-to-br from-slate-900 to-[#01255a] text-white p-8 sm:p-10 rounded-2xl shadow-xl overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-10 space-y-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FEA81D] block">
                    Corporate Entity vs Product Brand
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    Clear Institutional Distinction
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                    <div className="border-l-2 border-[#FEA81D] pl-3">
                      <strong className="text-white block">Mount Kailash Printpack Machines</strong>
                      <span>The registered enterprise, commercial importer, engineering customizer, warranty guarantor, and service provider.</span>
                    </div>

                    <div className="border-l-2 border-blue-400 pl-3">
                      <strong className="text-white block">NAGJAN</strong>
                      <span>The commercial equipment brand affixed to all high-performance machinery lines, single facers, roll stands, and genuine replacement spare parts.</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
                    <ShieldCheck className="size-4 text-[#FEA81D]" />
                    <span>Integrity, honest technical disclosures, and zero fabricated claims.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. The "Semi-Indian Machine" Engineering Philosophy */}
      <section className="py-14 sm:py-20 bg-slate-100 border-y border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-100/70 text-amber-900 text-xs font-bold border border-amber-300">
              <Cpu className="size-3.5 text-amber-700" />
              <span>Core Value Proposition</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              The "Semi-Indian Machine" Engineering Concept
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Packaging machinery imported directly from abroad often incorporates proprietary electronic controllers and non-standard electrical components that cause prolonged factory shutdowns when faults occur. NAGJAN pioneered the Semi-Indian engineering approach to eliminate this vulnerability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="size-11 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center border border-blue-200">
                <Layers className="size-5 text-[#FEA81D]" />
              </div>
              <h3 className="text-base font-bold font-heading text-slate-900">
                1. Heavy Cast-Iron Core
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Utilizes high-mass HT250 cast-iron side frames and structural steel bases with 48CrMo / 50CrMo alloy fluting rolls treated with tungsten carbide or induction hardening. High mechanical rigidity dampens vibration and ensures decades of continuous structural stability.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="size-11 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center border border-blue-200">
                <Cpu className="size-5 text-[#FEA81D]" />
              </div>
              <h3 className="text-base font-bold font-heading text-slate-900">
                2. Standard Indian & Global Electrics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All generic or proprietary electrical components are systematically replaced with standard, globally reputable drives and switchgear: <strong>Siemens, ABB, Crompton Greaves, Schneider Electric, Delta</strong>, and <strong>AirTac pneumatics</strong>.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="size-11 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center border border-blue-200">
                <Wrench className="size-5 text-[#FEA81D]" />
              </div>
              <h3 className="text-base font-bold font-heading text-slate-900">
                3. Practical Industrial Performance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plant technicians in any Indian industrial hub can source replacement contactors, sensors, bearings, or VFD drives within hours. Our engineering design prioritizes straightforward maintenance and maximum running uptime over fragile proprietary electronics.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50/70 border border-blue-200 rounded-xl p-4 sm:p-5 flex items-start gap-3">
            <ShieldCheck className="size-5 text-[#013074] shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Engineering Integrity Notice:</strong> While the Semi-Indian configuration combines high-rigidity mechanical casting with tier-1 electrical drives to optimize thermal efficiency and smooth speed regulation, NAGJAN avoids making unverified universal guarantees regarding fixed percentage power savings or cost reductions. Actual operating performance depends on plant steam conditions, paper grammage, and operating speeds.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. Manufacturing & Infrastructure Distinction */}
      <section className="py-14 sm:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 text-[#013074] text-xs font-bold border border-blue-200">
              <MapPin className="size-3.5 text-[#FEA81D]" />
              <span>Chennai Operational Infrastructure</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              Verified Operational Facilities
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To maintain total transparency with procurement officers and plant engineers, we clearly distinguish our corporate administrative offices from our Chennai assembly, inspection, and spares godown.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Facility 1: Registered Office */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Building2 className="size-5 text-[#013074]" />
                  <h3 className="text-base font-bold font-heading text-slate-900">
                    Registered Corporate Office
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#013074] uppercase">
                  Perungudi, Chennai
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Address:</strong> {COMPANY_CONTACT.addresses.registeredOffice.address}
              </p>

              <div className="space-y-2 text-xs text-slate-600">
                <span className="font-semibold text-slate-800 block">Core Functions:</span>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Corporate executive management and legal administration.</li>
                  <li>Machinery sales inquiries, proforma quotations, and contract reviews.</li>
                  <li>International supply chain coordination and import documentation.</li>
                  <li>Client technical layout and project financing consultations.</li>
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">Corporate Landline:</span>
                <a
                  href={`tel:${COMPANY_CONTACT.phones.landline.tel}`}
                  className="font-semibold text-[#013074] hover:underline"
                >
                  {COMPANY_CONTACT.phones.landline.display}
                </a>
              </div>
            </div>

            {/* Facility 2: Assembly Godown & Spares Depot */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Wrench className="size-5 text-[#013074]" />
                  <h3 className="text-base font-bold font-heading text-slate-900">
                    Assembly Godown & Spares Depot
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 uppercase">
                  Madhavaram, Chennai
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Address:</strong> {COMPANY_CONTACT.addresses.godownDepot.address}
              </p>

              <div className="space-y-2 text-xs text-slate-600">
                <span className="font-semibold text-slate-800 block">Core Functions:</span>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Technical inspection of incoming cast-iron machine frames and sub-assemblies.</li>
                  <li>Electrical retrofitting: wiring Siemens/ABB motors, VFDs, and control panels.</li>
                  <li>Pre-dispatch mechanical testing and powered verification runs.</li>
                  <li>Warehousing 400+ critical spare parts for rapid pan-India customer dispatch.</li>
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">Spares & Service Hotline:</span>
                <a
                  href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                  className="font-semibold text-[#013074] hover:underline"
                >
                  {COMPANY_CONTACT.phones.service.display}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#013074] hover:text-[#FEA81D] transition-colors"
            >
              <span>View full facility details, maps, and directions on Contact Page</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 7. Comprehensive Machinery & Spare Parts Portfolio Links */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              Explore the Complete NAGJAN Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From heavy-duty 2PLY single-face production lines to genuine replacement tungsten slitting knives and engineering erection services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/products"
              className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-[#013074] hover:shadow-md transition-all space-y-3"
            >
              <div className="size-10 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center group-hover:bg-[#013074] group-hover:text-white transition-colors">
                <Layers className="size-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-slate-900 group-hover:text-[#013074] transition-colors">
                Machinery Lines (18 Models)
              </h3>
              <p className="text-xs text-slate-500 line-clamp-3">
                Complete 2PLY plants, standalone single facers, hydraulic roll stands, rotary cutters, and converting machines.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#013074] flex items-center gap-1">
                <span>View Machinery</span>
                <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/spare-parts"
              className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-[#013074] hover:shadow-md transition-all space-y-3"
            >
              <div className="size-10 rounded-lg bg-amber-50 text-[#FEA81D] flex items-center justify-center group-hover:bg-[#FEA81D] group-hover:text-slate-950 transition-colors">
                <Boxes className="size-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-slate-900 group-hover:text-[#013074] transition-colors">
                Spare Parts Store (400+ SKUs)
              </h3>
              <p className="text-xs text-slate-500 line-clamp-3">
                Thin slitting blades, MaxDura anvil covers, feeder wheels, grinding stones, and 200°C steam bearings.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#013074] flex items-center gap-1">
                <span>Browse Spares</span>
                <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/services"
              className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-[#013074] hover:shadow-md transition-all space-y-3"
            >
              <div className="size-10 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center group-hover:bg-[#013074] group-hover:text-white transition-colors">
                <Wrench className="size-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-slate-900 group-hover:text-[#013074] transition-colors">
                Engineering & Support
              </h3>
              <p className="text-xs text-slate-500 line-clamp-3">
                On-site plant erection, foundation blueprints, preventive maintenance contracts, and electrical retrofits.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#013074] flex items-center gap-1">
                <span>Service Details</span>
                <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/categories"
              className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-[#013074] hover:shadow-md transition-all space-y-3"
            >
              <div className="size-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-[#013074] group-hover:text-white transition-colors">
                <Sparkles className="size-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-slate-900 group-hover:text-[#013074] transition-colors">
                Master Directory
              </h3>
              <p className="text-xs text-slate-500 line-clamp-3">
                Browse our comprehensive master category directory covering all machinery and spare parts classifications.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#013074] flex items-center gap-1">
                <span>Explore Directory</span>
                <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* 8. Final Call to Action */}
      <section className="bg-gradient-to-r from-[#013074] via-[#02285e] to-[#01214e] text-white py-12 sm:py-16">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FEA81D] text-xs font-semibold border border-white/20">
              <ShieldCheck className="size-3.5" />
              <span>Direct Engineering Consultation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white">
              Plan Your Corrugated Packaging Line with NAGJAN
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
              Whether you are planning a complete 1800mm high-speed 2PLY installation or seeking replacement consumable parts for existing converting lines, our technical team in Chennai is ready to assist.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <FileText className="size-4" />
                <span>Request a Machinery Quotation</span>
              </Link>

              <a
                href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
              >
                <Phone className="size-4 text-[#FEA81D]" />
                <span>Call Sales: {COMPANY_CONTACT.phones.sales.display}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
