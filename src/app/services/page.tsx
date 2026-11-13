import React from "react";
import type { Metadata } from "next";
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
    tagline: "Turnkey installation led by seasoned engineers.",
    description: "Complete mechanical assembly, alignment, and trial run testing for single facers, 2PLY production lines, mill roll stands, and rotary cutters at your factory.",
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
    tagline: "Precision engineered structural blueprints.",
    description: "Tailored architectural and civil foundation schematics designed specifically for your factory floor plan, ensuring structural stability and vibration damping.",
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
    tagline: "Maximize uptime and corrugated sheet quality.",
    description: "Scheduled health checks and calibration services to prevent unexpected plant shutdowns, maintain uniform flute heights, and extend roll lifespan.",
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
    tagline: "Semi-Indian Siemens, ABB & Schneider retrofits.",
    description: "Upgrading outdated or non-serviceable electronic systems on existing corrugated machinery to modern, energy-efficient automation with local Indian parts.",
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
    tagline: "Technical evaluations and feasibility studies.",
    description: "Independent engineering inspections of existing corrugator units to evaluate mechanical integrity, flute profiles, safety parameters, and capacity bottlenecks.",
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
    tagline: "400+ SKUs stocked in Chennai for instant courier.",
    description: "Rapid delivery of high-wear consumable components to keep client manufacturing lines running smoothly without extended lead times.",
    features: [
      "Tungsten carbide thin blades and slitting knives",
      "Polyurethane anvil covers and diamond grinding wheels",
      "Heavy-duty electrical contactors, sensors, and relays",
      "Same-day dispatch via cargo and express courier",
    ],
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

      {/* 2. Hero Section */}
      <header className="relative bg-gradient-to-b from-[#01255e] via-[#013074] to-[#01255e] text-white py-14 sm:py-18 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"
          aria-hidden="true"
        />

        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-slate-200">
              <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" />
              <span>Full Lifecycle Engineering Backup • Pan-India</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Industrial Engineering Services &amp; Plant Support
            </h1>

            <p className="text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
              From turnkey factory erection and foundation blueprints to Siemens electrical automation upgrades and rapid spares dispatch.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-[#0F172A] font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <Phone className="size-4" />
                <span>Call Chief Engineer: {COMPANY_CONTACT.phones.service.display}</span>
              </a>

              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
              >
                <span>Request Service Consultation</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Visual 6-Card Services Grid with Stagger */}
      <main className="py-14 sm:py-20">
        <Container size="wide">
          <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <StaggerItem key={idx} distance={25}>
                  <div
                    className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#013074]/30 transition-all duration-300 flex flex-col justify-between h-full group"
                  >
                    <div className="space-y-4">
                      <div className="size-12 rounded-lg bg-[#013074] text-[#FEA81D] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                        <Icon className="size-6 text-[#FEA81D]" />
                      </div>

                      <div>
                        <h2 className="text-lg font-bold font-heading text-slate-900 group-hover:text-[#013074] transition-colors">
                          {svc.title}
                        </h2>
                        <p className="text-xs font-semibold text-[#013074] mt-0.5">
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
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-5 mt-4 border-t border-slate-100">
                      <Link
                        href={`/contact?subject=${encodeURIComponent(svc.title)}`}
                        className="text-xs font-bold text-[#013074] hover:text-[#FEA81D] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Inquire About {svc.title}</span>
                        <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </main>

      {/* 4. Support Hotline Banner */}
      <section className="bg-[#01255e] text-white py-12 border-t border-blue-900/60">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs font-mono font-bold text-[#FEA81D] uppercase">
                Direct Engineering Helpline
              </span>
              <h2 className="text-2xl font-bold font-heading text-white mt-1">
                Need Immediate Plant Assistance or Machine Inspection?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Connect directly with Mr. D. Elumalai and our Chennai technical team.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-[#0F172A] font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <Phone className="size-4" />
                <span>{COMPANY_CONTACT.phones.service.display}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
