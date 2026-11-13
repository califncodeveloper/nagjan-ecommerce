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
  ArrowRight,
  Phone,
  FileText,
  Boxes,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { ImageReveal } from "@/components/motion/ImageReveal";

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
};

const TIMELINE_EVENTS = [
  {
    year: "May 2010",
    title: "Founding in Chennai",
    description: "Mount Kailash Printpack Machines was founded by Mr. A. Nagarajan to supply industrial packaging and corrugation equipment to Indian converters.",
  },
  {
    year: "2014",
    title: "Semi-Indian Engineering Concept",
    description: "Pioneered replacing imported generic electricals with globally reputable Siemens, ABB, and Schneider systems for superior energy efficiency and local serviceability.",
  },
  {
    year: "2018",
    title: "Madhavaram Assembly Godown Expansion",
    description: "Established a dedicated assembly, customization, and 400+ SKU spare parts warehouse near Madhavaram New Bus Depot, Chennai.",
  },
  {
    year: "Present",
    title: "240+ Corrugators & Pan-India Footprint",
    description: "Over 240 corrugators delivered across India and international markets, supported by full turnkey erection and civil foundation drawings.",
  },
];

const LEADERSHIP = [
  {
    name: "Mr. A. Nagarajan",
    role: "Proprietor & Managing Director",
    credentials: "Business Administration Graduate • 20+ Years Converting Expertise",
    bio: "Leads commercial operations, machinery import specifications, and customer partnerships. Also leads sister enterprise M/s. Printo Machines and Tools (Regd).",
  },
  {
    name: "Mr. D. Elumalai",
    role: "Chief Mechanical & Electrical Engineer",
    credentials: "Lead Technical Director • Specialized Corrugation Engineer",
    bio: "Directs machine retrofitting, Siemens/ABB automation programming, electrical testing, and on-site factory plant commissioning teams.",
  },
];

const ENGINEERING_PILLARS = [
  {
    icon: ShieldCheck,
    title: "Heavy HT250 Cast-Iron Frames",
    description: "Massive wallboard construction absorbs high-speed mechanical vibrations, ensuring sheet parallelism and smooth operation at up to 100 m/min.",
  },
  {
    icon: Cpu,
    title: "Global Automation Integration",
    description: "Standardizing on Siemens motors, ABB drives, and Schneider switchgear achieves 30–40% lower power draw and zero electronic downtime.",
  },
  {
    icon: Boxes,
    title: "Chennai Ready Spares Godown",
    description: "Permanent stock of tungsten carbide thin blades, anvil covers, slitting rings, and bearings at Madhavaram prevents plant halts.",
  },
  {
    icon: Wrench,
    title: "Turnkey Plant Blueprints",
    description: "Complete plant planning, from civil foundation schematics and steam piping layouts to trial run testing and operator training.",
  },
];

const TRUST_METRICS = [
  { value: "2010", label: "Founded", sub: "Chennai, India" },
  { value: "240+", label: "Corrugators Delivered", sub: "Pan-India & Exports" },
  { value: "18+", label: "Machinery Models", sub: "In Active Production" },
  { value: "400+", label: "Spare Parts SKUs", sub: "In-Stock at Godown" },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
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

      {/* ── 1. HERO — full-bleed dark navy with side machinery visual ── */}
      <header className="relative bg-[#010f2b] text-white overflow-hidden">
        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none"
          aria-hidden="true"
        />
        {/* Radial glow behind headline */}
        <div
          className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#013074]/40 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-16 sm:py-20 lg:py-24">
            {/* Left: Text */}
            <div className="lg:col-span-6 space-y-6 z-10">
              {/* Amber eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEA81D]/15 border border-[#FEA81D]/30 text-[#FEA81D] text-xs font-bold uppercase tracking-widest">
                <span className="size-1.5 rounded-full bg-[#FEA81D] animate-pulse" />
                Mount Kailash Printpack Machines · NAGJAN Brand
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold font-heading tracking-tight text-white leading-tight">
                Pioneering Practical{" "}
                <span className="text-[#FEA81D]">Corrugated Packaging</span>{" "}
                Machinery Since 2010
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                We specialize in heavy-duty corrugation production lines, precision fingerless single facers, and Semi-Indian machine retrofits engineered for non-stop industrial productivity.
              </p>

              {/* 2 CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-[#0F172A] font-bold text-sm transition-all shadow-md"
                >
                  <span>Explore Machinery Lines</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
                >
                  <FileText className="size-4" />
                  <span>Request a Quotation</span>
                </Link>
              </div>
            </div>

            {/* Right: Machinery photo with ImageReveal */}
            <div className="lg:col-span-6 z-10">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-[4/3] group">
                <ImageReveal direction="bottom-to-top" hoverZoom className="w-full h-full">
                  <Image
                    src="/images/products/wj_100_1800_2ply_plant__july__2023_img_1.jpg"
                    alt="NAGJAN WJ-100-1800 2PLY Industrial Corrugator Plant"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 580px"
                    className="object-cover"
                  />
                </ImageReveal>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FEA81D] block">
                    Verified Field Installation
                  </span>
                  <p className="text-sm font-semibold mt-0.5">
                    WJ-100-1800 2PLY Complete Production Line
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* ── 2. TRUST METRICS STRIP — dark navy, 4 amber numbers ── */}
      <section
        className="bg-[#013074] border-y border-[#FEA81D]/20 py-10"
        aria-label="Verified Trust Metrics"
      >
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {TRUST_METRICS.map((m) => (
              <div key={m.label} className="flex flex-col items-center text-center px-6 py-2">
                <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-[#FEA81D] leading-none">
                  {m.value}
                </span>
                <span className="text-sm font-semibold text-white mt-1.5">
                  {m.label}
                </span>
                <span className="text-xs text-slate-300 mt-0.5">{m.sub}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. TIMELINE — horizontal desktop, vertical mobile ── */}
      <section
        className="bg-[#010f2b] py-16 sm:py-20 border-b border-white/5"
        aria-label="Company History Timeline"
      >
        <Container size="default">
          <ScrollReveal direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FEA81D] bg-[#FEA81D]/10 border border-[#FEA81D]/20 px-3 py-1 rounded-full">
              Company Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-3 tracking-tight">
              15+ Years of Engineering Growth
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From an engineering supply firm to an established manufacturer of high-speed corrugation lines.
            </p>
          </ScrollReveal>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div
              className="absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-[#FEA81D]/40 to-transparent"
              aria-hidden="true"
            />

            <StaggerContainer staggerChildren={0.12} className="grid grid-cols-4 gap-6 relative">
              {TIMELINE_EVENTS.map((event, idx) => (
                <StaggerItem key={idx} distance={20} className="flex flex-col items-center text-center px-2">
                  {/* Dot */}
                  <div
                    className="relative z-10 size-5 rounded-full bg-[#FEA81D] border-4 border-[#010f2b] shadow-lg shadow-[#FEA81D]/30 mb-4"
                    aria-hidden="true"
                  />
                  {/* Year pill */}
                  <span className="inline-block font-mono font-bold text-xs text-[#010f2b] bg-[#FEA81D] px-3 py-1 rounded-full mb-3 shadow-sm">
                    {event.year}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-white mb-2 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {event.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative pl-8">
            {/* Vertical line */}
            <div
              className="absolute left-[1.1rem] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#FEA81D]/60 via-[#FEA81D]/30 to-transparent"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {TIMELINE_EVENTS.map((event, idx) => (
                <div key={idx} className="relative">
                  {/* Dot */}
                  <div
                    className="absolute -left-[2.1rem] top-1 size-4 rounded-full bg-[#FEA81D] border-4 border-[#010f2b] shadow-md"
                    aria-hidden="true"
                  />
                  <span className="inline-block font-mono font-bold text-xs text-[#010f2b] bg-[#FEA81D] px-2.5 py-0.5 rounded-full mb-2">
                    {event.year}
                  </span>
                  <h3 className="font-heading font-bold text-sm text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4. LEADERSHIP — 2 premium cards side by side ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <Container size="default">
          <ScrollReveal direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#013074] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mt-3 tracking-tight">
              Practical Engineering & Operational Leadership
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Guided by veterans with decades of hands-on technical and packaging experience.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {LEADERSHIP.map((leader, idx) => (
              <StaggerItem key={idx} distance={25}>
                <div
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group h-full"
                >
                  {/* Navy top bar */}
                  <div className="h-2 bg-[#013074] group-hover:bg-[#FEA81D] transition-colors duration-300" />

                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Icon */}
                    <div className="size-12 rounded-xl bg-[#013074] flex items-center justify-center shadow-sm">
                      <UserCheck className="size-6 text-[#FEA81D]" />
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-lg text-slate-900">
                        {leader.name}
                      </h3>
                      {/* Role in amber */}
                      <p className="text-xs font-bold text-[#FEA81D] mt-0.5 uppercase tracking-wide">
                        {leader.role}
                      </p>
                      {/* Credentials in mono */}
                      <p className="text-[11px] font-mono text-slate-400 mt-1">
                        {leader.credentials}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* ── 5. ENGINEERING PILLARS — 2×2 grid, navy icon col / white content col ── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#013074] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Engineering Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mt-3 tracking-tight">
              The Semi-Indian Engineering Advantage
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Combining heavy-duty mechanical cast iron with globally reputable automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ENGINEERING_PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="group flex rounded-xl border border-slate-200 overflow-hidden hover:border-[#013074]/30 hover:shadow-md transition-all"
                >
                  {/* Navy icon column */}
                  <div className="relative bg-[#013074] flex items-center justify-center p-6 min-w-[80px]">
                    {/* Amber hover accent line */}
                    <div className="absolute top-0 left-0 right-0 h-0 group-hover:h-[3px] bg-[#FEA81D] transition-all duration-300" />
                    <Icon className="size-7 text-[#FEA81D]" />
                  </div>

                  {/* White content column */}
                  <div className="bg-white p-5 flex-1">
                    <h3 className="font-heading font-bold text-base text-slate-900 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1.5">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 6. FINAL CTA BANNER — dark navy, centered, amber primary + outline secondary ── */}
      <section className="relative bg-[#010f2b] py-16 sm:py-20 text-white overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-[500px] h-[300px] rounded-full bg-[#013074]/60 blur-[100px]" />
        </div>
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none"
          aria-hidden="true"
        />

        <Container size="default">
          <div className="relative text-center max-w-2xl mx-auto space-y-6">
            {/* Decorative rule */}
            <div className="flex items-center justify-center gap-3" aria-hidden="true">
              <div className="h-px w-16 bg-[#FEA81D]/40" />
              <div className="size-1.5 rounded-full bg-[#FEA81D]" />
              <div className="h-px w-16 bg-[#FEA81D]/40" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              Visit Our Facilities in Chennai
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Experience our machinery firsthand at our Madhavaram Customization Godown or discuss your plant layout with our team at Perungudi.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-[#0F172A] font-bold text-sm shadow-lg shadow-[#FEA81D]/20 transition-all"
              >
                <span>View Contact & Locations</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold text-sm transition-all"
              >
                <span>Browse Machinery</span>
              </Link>
            </div>

            {/* Phone links */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
              <a
                href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-[#FEA81D] transition-colors"
              >
                <Phone className="size-3.5 text-[#FEA81D]" />
                <span>Sales: {COMPANY_CONTACT.phones.sales.display}</span>
              </a>
              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-[#FEA81D] transition-colors"
              >
                <Phone className="size-3.5 text-[#FEA81D]" />
                <span>Spares Depot: {COMPANY_CONTACT.phones.service.display}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
