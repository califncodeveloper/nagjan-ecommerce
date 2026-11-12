import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Wrench,
  Cpu,
  FileCheck2,
  CalendarCheck2,
  SearchCheck,
  Boxes,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Truck,
  Layers,
  Settings,
  HardHat,
  Compass,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Services & Engineering Support | NAGJAN Corrugated Machinery",
  description:
    "Industrial plant erection, foundation drawings, electrical automation retrofits, preventive maintenance, and spares support for corrugation plants across India.",
  keywords: [
    "corrugation machine service",
    "plant erection Chennai",
    "corrugator foundation drawings",
    "corrugation electrical retrofitting",
    "Siemens ABB retrofit corrugator",
    "preventive maintenance corrugation",
    "Mr D Elumalai engineer",
    "NAGJAN services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Engineering Support | NAGJAN",
    description:
      "Expert industrial erection, Siemens & ABB automation retrofitting, foundation blueprints, and pan-India maintenance support for corrugation plants.",
    url: "/services",
    siteName: "NAGJAN",
    type: "website",
    images: [
      {
        url: "/images/products/sf280_single_facer_corrugation_machine_1800mm_img_1.jpg",
        width: 1200,
        height: 630,
        alt: "NAGJAN Industrial Engineering Services",
      },
    ],
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Industrial Corrugated Packaging Machinery Services",
    provider: {
      "@type": "Organization",
      name: COMPANY_CONTACT.legalName,
      url: "https://nagjan.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "NAGJAN Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "On-site Plant Erection & Commissioning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Foundation Drawings & Civil Installation Planning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Preventive Maintenance Contracts (PMC)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Upgrades & Automation Retrofits",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Machine Technical Inspection & Flute Consultation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spare Parts & Consumables Support",
          },
        },
      ],
    },
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
                Services & Support
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Hero Section */}
      <header className="relative bg-gradient-to-b from-[#013074] via-[#02285e] to-[#01214e] text-white py-14 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-slate-200">
              <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" />
              <span>Pan-India Technical Backing & Field Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Industrial Engineering, Plant Erection & Technical Support
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              From civil foundation blueprints and precision on-site machine leveling to Siemens/ABB automation retrofits and emergency spares logistics from our Chennai depot, NAGJAN provides end-to-end engineering support for corrugated packaging plants.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <Phone className="size-4" />
                <span>Call Service Hotline: {COMPANY_CONTACT.phones.service.display}</span>
              </a>

              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
              >
                <FileCheck2 className="size-4" />
                <span>Request Service Consultation</span>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Engineering Leadership Spotlight */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <Container>
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-100 text-[#013074] text-xs font-bold border border-blue-200">
                  <HardHat className="size-3.5 text-[#FEA81D]" />
                  <span>Engineering Division Leadership</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
                  Headed by Mr. D. Elumalai
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The NAGJAN Technical and Service Division is led by <strong>Mr. D. Elumalai</strong>, an eminent Indian mechanical and electrical engineer. Based out of Chennai, Mr. Elumalai directs an in-house team of specialized installation technicians, machine fitters, and electrical controls engineers who oversee plant erection, electrical commissioning, and ongoing preventive maintenance for corrugated packaging clients across India.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-[#013074]" />
                    <span>In-House Installation Team</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Cpu className="size-4 text-[#013074]" />
                    <span>Electrical & Mechanical Integration</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Compass className="size-4 text-[#013074]" />
                    <span>Civil Foundation Blueprints</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 space-y-3 text-center">
                <div className="size-16 rounded-full bg-blue-50 text-[#013074] mx-auto flex items-center justify-center border border-blue-200">
                  <Wrench className="size-8 text-[#FEA81D]" />
                </div>
                <h3 className="text-sm font-bold font-heading text-slate-900">
                  Direct Field Engineering Desk
                </h3>
                <p className="text-xs text-slate-500">
                  Speak directly with our technical support coordinators regarding machine issues, fluting problems, or erection scheduling.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#013074] text-white text-xs font-bold hover:bg-[#022557] transition-colors"
                  >
                    <Phone className="size-3.5 text-[#FEA81D]" />
                    <span>{COMPANY_CONTACT.phones.service.display}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Comprehensive Service Catalogue (6 Dedicated Service Cards) */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#013074] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Full Industrial Lifecycle Support
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Our Core Engineering Services
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every corrugated cardboard packaging facility requires specialized mechanical precision and robust electrical reliability. We offer six core technical service streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#013074] hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="size-12 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center border border-blue-200">
                  <Settings className="size-6 text-[#FEA81D]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">
                  1. On-Site Plant Erection & Commissioning
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our specialized field technicians handle complete machine placement, precision spirit-leveling, flute roll dynamic alignment, pneumatic line piping, and power cable termination. We execute test fluting runs under actual factory steam pressure before handing over the line.
                </p>
                <ul className="text-xs text-slate-500 space-y-1 pt-1 list-disc list-inside">
                  <li>Machine leveling and structural anchoring</li>
                  <li>Fluting roll parallel alignment checks</li>
                  <li>Initial steam and live board test runs</li>
                  <li>Basic machine operator safety briefing</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`mailto:${COMPANY_CONTACT.email.sales}?subject=Plant%20Erection%20Service%20Inquiry`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#013074] hover:text-[#FEA81D] transition-colors"
                >
                  <span>Inquire for Erection</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#013074] hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="size-12 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center border border-blue-200">
                  <Compass className="size-6 text-[#FEA81D]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">
                  2. Foundation Drawings & Installation Planning
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Prior to machine dispatch, we supply detailed civil foundation blueprints specifying footing depth, dynamic load weight distribution, cable trench pathways, steam header positions, and pneumatic piping conduits to ensure factory readiness.
                </p>
                <ul className="text-xs text-slate-500 space-y-1 pt-1 list-disc list-inside">
                  <li>Machine footprint layout drawings</li>
                  <li>Civil trench and foundation depth specs</li>
                  <li>Connected electrical load schedules</li>
                  <li>Steam boiler pressure recommendations</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`mailto:${COMPANY_CONTACT.email.sales}?subject=Foundation%20Drawings%20Request`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#013074] hover:text-[#FEA81D] transition-colors"
                >
                  <span>Request Foundation Layouts</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#013074] hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="size-12 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center border border-blue-200">
                  <CalendarCheck2 className="size-6 text-[#FEA81D]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">
                  3. Preventive Maintenance Contracts (PMC)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unplanned machine downtime halts entire box-making operations. NAGJAN offers structured preventive maintenance audits covering corrugating roll flute wear, hydraulic seal integrity, pneumatic cylinder operation, and mechanical gear train backlash.
                </p>
                <ul className="text-xs text-slate-500 space-y-1 pt-1 list-disc list-inside">
                  <li>Corrugating flute caliper wear audits</li>
                  <li>Hydraulic pump and valve calibration</li>
                  <li>Drive belt tension and gear train checks</li>
                  <li>Comprehensive mechanical health report</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`mailto:${COMPANY_CONTACT.email.sales}?subject=PMC%20Contract%20Inquiry`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#013074] hover:text-[#FEA81D] transition-colors"
                >
                  <span>Inquire for PMC Contract</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#013074] hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="size-12 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center border border-blue-200">
                  <Cpu className="size-6 text-[#FEA81D]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">
                  4. Electrical Upgrades & Automation Retrofits
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We replace failed or obsolete imported electronic controller cards with standard, locally serviceable automation. We retrofit variable frequency drives from <strong>Siemens, ABB, or Delta</strong> and low-voltage switchgear from <strong>Schneider Electric</strong>.
                </p>
                <ul className="text-xs text-slate-500 space-y-1 pt-1 list-disc list-inside">
                  <li>Obsolete DC to modern AC inverter conversion</li>
                  <li>Siemens / ABB variable speed drive panels</li>
                  <li>Schneider contactor and breaker upgrades</li>
                  <li>Standard industrial schematic wiring manuals</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`mailto:${COMPANY_CONTACT.email.sales}?subject=Electrical%20Automation%20Retrofit%20Inquiry`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#013074] hover:text-[#FEA81D] transition-colors"
                >
                  <span>Inquire for Electrical Retrofit</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#013074] hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="size-12 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center border border-blue-200">
                  <SearchCheck className="size-6 text-[#FEA81D]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">
                  5. Machine Inspection & Technical Consultation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Experiencing fluting fractures, uneven board caliper, glue blistering, or excessive paper waste? Our senior technical engineers conduct diagnostic evaluations on site to pinpoint temperature imbalances, improper roll nip pressure, or glue gap errors.
                </p>
                <ul className="text-xs text-slate-500 space-y-1 pt-1 list-disc list-inside">
                  <li>Flute fracturing and blistering diagnosis</li>
                  <li>Glue film thickness and gap adjustment</li>
                  <li>Board warpage and moisture assessment</li>
                  <li>Machine speed and throughput optimization</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`mailto:${COMPANY_CONTACT.email.sales}?subject=Technical%20Inspection%20Consultation`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#013074] hover:text-[#FEA81D] transition-colors"
                >
                  <span>Book Technical Inspection</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#013074] hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="size-12 rounded-lg bg-blue-50 text-[#013074] flex items-center justify-center border border-blue-200">
                  <Boxes className="size-6 text-[#FEA81D]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">
                  6. Spare Parts & Consumables Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our Madhavaram spares depot stocks 400+ critical mechanical and electrical spare parts. From tungsten slitter blades and MaxDura anvil blankets to C&U steam bearings and pneumatic cylinders, we coordinate rapid transport dispatch across India.
                </p>
                <ul className="text-xs text-slate-500 space-y-1 pt-1 list-disc list-inside">
                  <li>Tungsten carbide thin blades and anvil blankets</li>
                  <li>High-temperature steam-rated bearings</li>
                  <li>Shaftless chucks, disc brakes, and air valves</li>
                  <li>Pan-India courier and transport dispatch</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/spare-parts"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#013074] hover:text-[#FEA81D] transition-colors"
                >
                  <span>Explore Spare Parts Store</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Service Process Workflow (6 Transparent Steps) */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#013074] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Clear Support Workflow
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              How Our Engineering Engagement Works
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We operate an honest, structured engineering service pipeline without promising unverified fixed turnaround times. Every engagement is technically evaluated before engineer deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 relative">
              <span className="text-2xl font-black text-slate-300 font-heading block">01</span>
              <h3 className="text-sm font-bold font-heading text-slate-900">
                Customer Enquiry
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Client submits initial requirement or machinery issue via phone, email, or our online consultation desk, detailing the machine type, problem, or plant location.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 relative">
              <span className="text-2xl font-black text-slate-300 font-heading block">02</span>
              <h3 className="text-sm font-bold font-heading text-slate-900">
                Requirement Assessment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our Chennai engineering desk reviews machine model, roller dimensions, flute profiles, electrical drawings, and photos/videos of the operational defect.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 relative">
              <span className="text-2xl font-black text-slate-300 font-heading block">03</span>
              <h3 className="text-sm font-bold font-heading text-slate-900">
                Technical Discussion
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct consultation between client plant managers and our engineering leads (headed by Mr. D. Elumalai) to determine optimal mechanical or electrical solution.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 relative">
              <span className="text-2xl font-black text-slate-300 font-heading block">04</span>
              <h3 className="text-sm font-bold font-heading text-slate-900">
                Scope & Commercial Quote
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A formal service quotation is issued specifying scope of work, engineer per-diem terms, required client utilities (crane, electrical power, steam), and replacement part costs.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 relative">
              <span className="text-2xl font-black text-slate-300 font-heading block">05</span>
              <h3 className="text-sm font-bold font-heading text-slate-900">
                Scheduling & Deployment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upon quotation sign-off, service dates are scheduled and specialized technicians or commissioning engineers are dispatched directly to the customer's factory.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 relative">
              <span className="text-2xl font-black text-slate-300 font-heading block">06</span>
              <h3 className="text-sm font-bold font-heading text-slate-900">
                Support Follow-Up
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                After successful commissioning or repair, our technical desk conducts a follow-up call to review live fluting quality and address ongoing operator questions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Spare Parts Support & Warehouse Stock Notice */}
      <section className="py-14 sm:py-20 bg-slate-100 border-t border-slate-200">
        <Container>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-100/70 text-amber-900 text-xs font-bold border border-amber-300">
                  <Truck className="size-3.5 text-amber-700" />
                  <span>Depot Logistics Disclosure</span>
                </div>

                <h2 className="text-2xl font-bold font-heading text-slate-900 tracking-tight">
                  Madhavaram Spares Depot & Dispatch Terms
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our Chennai spares depot at Madhavaram stocks critical consumable parts (thin blades, slitting knives, MaxDura anvil blankets, and standard steam bearings). Items in ready stock are dispatched via express transport (VRL Logistics, TCI Freight, or DTDC) with freight payable on delivery.
                </p>

                <p className="text-xs text-slate-500 leading-relaxed">
                  <em>Notice regarding custom dimensions:</em> Special shaft diameters, non-standard anvil blankets, custom female slotter knives, and machine-specific feed wheels require verified dimensional measurements before order confirmation. We do not make unsupported claims of unconditional immediate availability for bespoke parts.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/spare-parts"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#013074] hover:bg-[#022557] text-white text-xs font-bold transition-colors"
                  >
                    <span>Browse 400+ Spare Parts Catalogue</span>
                    <ArrowRight className="size-4 text-[#FEA81D]" />
                  </Link>

                  <a
                    href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-colors border border-slate-300"
                  >
                    <Phone className="size-3.5 text-[#FEA81D]" />
                    <span>Check Spares Stock: {COMPANY_CONTACT.phones.service.display}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Depot Location
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {COMPANY_CONTACT.addresses.godownDepot.address}
                </p>
                <div className="pt-2 text-xs text-slate-500 border-t border-slate-200 space-y-1">
                  <p><strong>Hotline:</strong> {COMPANY_CONTACT.phones.service.display}</p>
                  <p><strong>Email:</strong> {COMPANY_CONTACT.email.sales}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Service Enquiry CTA Banner */}
      <section className="bg-gradient-to-r from-[#013074] via-[#02285e] to-[#01214e] text-white py-12 sm:py-16">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FEA81D] text-xs font-semibold border border-white/20">
              <Wrench className="size-3.5" />
              <span>Get Immediate Technical Guidance</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white">
              Need Engineering Support for Your Corrugation Plant?
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
              Connect with our Chennai engineering division to discuss installation planning, electrical retrofits, or emergency spare parts.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <Phone className="size-4" />
                <span>Call Service Hotline: {COMPANY_CONTACT.phones.service.display}</span>
              </a>

              <a
                href={`mailto:${COMPANY_CONTACT.email.sales}?subject=Engineering%20Service%20Enquiry`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
              >
                <Mail className="size-4 text-[#FEA81D]" />
                <span>Email: {COMPANY_CONTACT.email.sales}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
