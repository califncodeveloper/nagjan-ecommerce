import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Cpu,
  FileCheck2,
  CalendarCheck2,
  SearchCheck,
  Boxes,
  Phone,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  HardHat,
  CheckCircle2,
  Gauge,
  Layers,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

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
};

const SERVICES_LIST = [
  {
    icon: HardHat,
    title: "Plant Erection & Commissioning",
    categoryBadge: "Turnkey Installation",
    tagline: "Turnkey installation led by seasoned engineers.",
    image: "/images/services/plant-erection-commissioning.jpg",
    imageAlt: "Indian engineers and technicians assembling and leveling industrial corrugation production line",
    description:
      "Complete mechanical assembly, alignment, and trial run testing for single facers, 2PLY production lines, mill roll stands, and rotary cutters at your factory.",
    features: [
      "Rigid mechanical leveling and roll alignment",
      "Steam piping & pneumatic circuit integration",
      "Trial run testing under power before handover",
      "On-site factory operator and technician training",
    ],
  },
  {
    icon: FileCheck2,
    title: "Civil Foundation Layout Drawings",
    categoryBadge: "Civil & Blueprint",
    tagline: "Precision engineered structural blueprints.",
    image: "/images/services/civil-foundation-drawings.jpg",
    imageAlt: "Architectural blueprints and CAD foundation layouts for corrugation machinery",
    description:
      "Tailored architectural and civil foundation schematics designed specifically for your factory floor plan, ensuring structural stability and vibration damping.",
    features: [
      "Dynamic load calculations for high-speed operation",
      "Steam boiler, condensate, and electrical trench routing",
      "Optimized paper roll infeed and stacker outfeed zones",
      "Pre-installation civil engineer consultation",
    ],
  },
  {
    icon: CalendarCheck2,
    title: "Preventive Maintenance & Tune-Ups",
    categoryBadge: "Plant Uptime",
    tagline: "Maximize uptime and corrugated sheet quality.",
    image: "/images/services/preventive-maintenance.jpg",
    imageAlt: "Precision dial gauge calibration and fluting roll inspection by mechanical engineer",
    description:
      "Scheduled health checks and calibration services to prevent unexpected plant shutdowns, maintain uniform flute heights, and extend roll lifespan.",
    features: [
      "Corrugator roll gap calibration and flute wear audits",
      "Hydraulic system pressure tests & cylinder resealing",
      "Gearbox lubrication check and bearing vibration analysis",
      "Emergency breakdown troubleshooting pan-India",
    ],
  },
  {
    icon: Cpu,
    title: "Electrical & Automation Upgrades",
    categoryBadge: "Automation Retrofits",
    tagline: "Semi-Indian Siemens, ABB & Schneider retrofits.",
    image: "/images/services/electrical-automation-retrofit.jpg",
    imageAlt: "Industrial automation control cabinet with Siemens PLCs, VFD inverters and HMI panel",
    description:
      "Upgrading outdated or non-serviceable electronic systems on existing corrugated machinery to modern, energy-efficient automation with local Indian parts.",
    features: [
      "Up to 30–40% lower power consumption with VFD inverters",
      "Replacing unserviceable imported PLCs with Siemens/ABB",
      "Schneider switchgear for surge and overload protection",
      "Elimination of long shutdowns waiting for overseas boards",
    ],
  },
  {
    icon: SearchCheck,
    title: "Machine Inspection & Plant Audit",
    categoryBadge: "Technical Audit",
    tagline: "Technical evaluations and feasibility studies.",
    image: "/images/services/machine-inspection-audit.jpg",
    imageAlt: "Chief engineer conducting plant audit with digital tablet and laser diagnostic tools",
    description:
      "Independent engineering inspections of existing corrugator units to evaluate mechanical integrity, flute profiles, safety parameters, and capacity bottlenecks.",
    features: [
      "Precision measurement of corrugating roll diameter",
      "Operating speed and paper tension analysis",
      "Safety interlock and emergency stop verification",
      "Detailed written engineering condition report",
    ],
  },
  {
    icon: Boxes,
    title: "Madhavaram Spares Dispatch Support",
    categoryBadge: "Chennai Stock",
    tagline: "400+ SKUs stocked in Chennai for instant courier.",
    image: "/images/services/spares-dispatch-warehouse.jpg",
    imageAlt: "NAGJAN Madhavaram spare parts warehouse stocked with precision knives, belts and spares",
    description:
      "Rapid delivery of high-wear consumable components to keep client manufacturing lines running smoothly without extended lead times.",
    features: [
      "Tungsten carbide thin blades and slitting knives",
      "Polyurethane anvil covers and diamond grinding wheels",
      "Heavy-duty electrical contactors, sensors, and relays",
      "Same-day dispatch via cargo and express courier",
    ],
  },
];

const EXECUTION_STEPS = [
  {
    step: "01",
    title: "Site Survey & Foundation",
    desc: "Civil blueprints and ground load calculations custom drawn to your plant layout.",
    image: "/images/services/civil-foundation-drawings.jpg",
  },
  {
    step: "02",
    title: "Precision Mechanical Erection",
    desc: "Rigid leveling, roll parallelism, and high-temperature steam joint assembly.",
    image: "/images/services/plant-erection-commissioning.jpg",
  },
  {
    step: "03",
    title: "Electrical & VFD Synchronization",
    desc: "Siemens/ABB automation wiring, tension sensors, and emergency safety loops.",
    image: "/images/services/electrical-automation-retrofit.jpg",
  },
  {
    step: "04",
    title: "Power Trial Run & Handover",
    desc: "Continuous paper run testing, flute verification, and hands-on operator training.",
    image: "/images/services/machine-inspection-audit.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
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
                Services &amp; Engineering Support
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Enhanced Hero Section with Visual Showcase */}
      <header className="relative bg-[#011a47] text-white py-14 sm:py-20 overflow-hidden border-b border-blue-950">
        {/* Subtle grid background pattern */}
        <div
          className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-[#FEA81D]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-[#013074]/60 blur-3xl pointer-events-none" />

        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Text & Key Proof Points */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-slate-200">
                <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" />
                <span>Full Lifecycle Engineering Backup • Pan-India</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
                Industrial Engineering Services &amp;{" "}
                <span className="text-[#FEA81D]">Turnkey Plant Support</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Led by Chief Engineer Mr. D. Elumalai (30+ years industry experience), Mount Kailash
                Printpack Machines provides turnkey erection, foundation layout schematics, Siemens automation
                retrofits, and emergency spares dispatch from our Madhavaram depot in Chennai.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                  <div className="text-xl sm:text-2xl font-extrabold font-heading text-[#FEA81D]">
                    240+
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5 font-medium">
                    Plants Commissioned
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                  <div className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                    400+
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5 font-medium">
                    Chennai Stock Spares
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                  <div className="text-xl sm:text-2xl font-extrabold font-heading text-emerald-400">
                    24/7
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5 font-medium">
                    Technical Hotline
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FEA81D] hover:bg-[#e59617] active:bg-[#d0850e] text-[#0F172A] font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="size-4" />
                  <span>Call Chief Engineer: {COMPANY_CONTACT.phones.service.display}</span>
                </a>

                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all backdrop-blur-xs"
                >
                  <span>Request Service Consultation</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right: Authentic Factory Installation Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/15 shadow-2xl group">
                <div className="relative h-72 sm:h-84 md:h-96 w-full">
                  <Image
                    src="/images/services/plant-erection-commissioning.jpg"
                    alt="Turnkey 2PLY Corrugation Line Field Erection in Operation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                </div>

                {/* Floating Info Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-2 text-white">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FEA81D] text-[#0F172A]">
                      <ShieldCheck className="size-3" /> Certified On-Site
                    </span>
                    <span className="text-[11px] text-slate-300">
                      WJ-100-1800 2PLY High Speed Plant
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    Turnkey mechanical alignment, roll gap calibration, and power trial testing at customer factory.
                  </p>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    <span>Madhavaram Engineering Hub, Chennai</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Visual 6-Card Services Grid with Photographic Headers */}
      <main className="py-16 sm:py-24">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#013074] bg-[#FEA81D]/20 border border-[#FEA81D]/40 px-3 py-1 rounded-full">
              Full Lifecycle Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Specialized Engineering Solutions for Corrugators
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every service is executed by factory-trained mechanics and automation specialists with decades of hands-on experience in corrugated box plants.
            </p>
          </div>

          <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <StaggerItem key={idx} distance={25}>
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#013074]/30 transition-all duration-300 flex flex-col justify-between h-full group">
                    {/* Mobile-Only Header: Title & Category above image on small screens */}
                    <div className="block sm:hidden p-5 pb-3 border-b border-slate-100">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#013074] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 font-semibold">
                          {svc.categoryBadge}
                        </span>
                        <div className="size-7 rounded-lg bg-[#013074] text-[#FEA81D] flex items-center justify-center">
                          <Icon className="size-3.5" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold font-heading text-slate-900 leading-snug">
                        {svc.title}
                      </h3>
                    </div>

                    {/* Photographic Service Header (Desktop: top of card; Mobile: between title and description) */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={svc.image}
                        alt={svc.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                      />

                      {/* Top Gradient & Category Tag (Desktop) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                      <div className="hidden sm:block absolute top-3.5 right-3.5 z-10">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20 shadow-xs">
                          {svc.categoryBadge}
                        </span>
                      </div>

                      {/* Floating Service Icon Badge (Desktop) */}
                      <div className="hidden sm:flex absolute bottom-3.5 left-4 z-10 items-center gap-3">
                        <div className="size-11 rounded-xl bg-[#013074] text-[#FEA81D] flex items-center justify-center shadow-lg border border-[#FEA81D]/40 group-hover:bg-[#FEA81D] group-hover:text-[#013074] transition-all duration-300">
                          <Icon className="size-5 transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content Area */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div>
                          {/* Desktop Title (Hidden on Mobile since rendered above image) */}
                          <h3 className="hidden sm:block text-lg font-bold font-heading text-slate-900 group-hover:text-[#013074] transition-colors leading-snug">
                            {svc.title}
                          </h3>
                          <p className="text-xs font-semibold text-[#013074] mt-0.5 sm:mt-1">
                            {svc.tagline}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {svc.description}
                        </p>

                        <div className="pt-3 border-t border-slate-100 space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            Included Engineering Deliverables:
                          </span>
                          {svc.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <Link
                          href={`/contact?subject=${encodeURIComponent(svc.title)}`}
                          className="text-xs font-bold text-[#013074] hover:text-[#FEA81D] inline-flex items-center gap-1.5 transition-colors group/link"
                        >
                          <span>Inquire About {svc.title}</span>
                          <ArrowRight className="size-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </main>

      {/* 4. Visual 4-Step Engineering Execution Timeline */}
      <section className="py-16 sm:py-20 bg-white border-t border-b border-slate-200">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F172A] bg-[#FEA81D] px-3 py-1 rounded-sm">
              Standard Operating Procedure
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Our 4-Phase Plant Commissioning Protocol
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every installation follows calibrated mechanical and safety milestones to guarantee design speeds on handover day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXECUTION_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="group bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#013074]/30 transition-all duration-300 flex flex-col"
              >
                {/* Step Thumbnail */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-[#013074] text-[#FEA81D] font-mono font-bold text-xs px-2.5 py-1 rounded-md shadow border border-[#FEA81D]/30">
                    Phase {step.step}
                  </div>
                </div>

                {/* Step Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-[#013074] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Support Hotline & Emergency Callout Banner */}
      <section className="bg-[#011a47] text-white py-14 sm:py-16 border-t border-blue-950">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold text-[#FEA81D] uppercase tracking-wider">
                Direct Engineering Helpline • Pan-India
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Facing Machine Breakdown or Need Plant Inspection?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect directly with Mr. D. Elumalai and our Chennai technical engineering team for instant diagnostics and emergency technician dispatch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FEA81D] hover:bg-[#e59617] active:bg-[#d0850e] text-[#0F172A] font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="size-4" />
                <span>Call {COMPANY_CONTACT.phones.service.display}</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all backdrop-blur-xs"
              >
                <span>Write to Desk</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
