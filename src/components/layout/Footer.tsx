import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Cpu,
  Clock,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Container } from "./Container";
import { COMPANY_CONTACT } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="relative bg-[#010f29] text-slate-300 border-t-4 border-[#FEA81D] mt-auto overflow-hidden">
      {/* Ambient Top Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-36 bg-gradient-to-r from-transparent via-[#013074]/50 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main 4-Column Grid */}
      <Container size="default" className="relative py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1 (4 cols): Company Profile & Verified Facilities */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center bg-white px-3.5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA81D]"
              title="NAGJAN - Mount Kailash Printpack Machines"
              aria-label="NAGJAN Home"
            >
              <div className="relative flex items-center" style={{ width: 145, height: 44 }}>
                <Image
                  src="/logo/nagjan-logo.png"
                  alt="NAGJAN Logo"
                  width={145}
                  height={44}
                  className="w-auto h-10 object-contain"
                />
              </div>
            </Link>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FEA81D]" />
                <h3 className="text-white font-extrabold text-sm tracking-tight font-heading uppercase">
                  {COMPANY_CONTACT.legalName}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Founded May 2010 in Chennai. Specializing in high-speed corrugated packaging production lines, Semi-Indian retrofits with Siemens/ABB drives, and 400+ genuine spare parts ready for same-day dispatch pan-India.
              </p>
            </div>

            {/* Verified Chennai Locations */}
            <div className="pt-4 border-t border-white/10 space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5 group">
                <div className="size-6 rounded-md bg-[#013074] border border-[#FEA81D]/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#FEA81D] transition-colors">
                  <MapPin className="size-3.5 text-[#FEA81D]" />
                </div>
                <div>
                  <span className="font-semibold text-white block">
                    Registered Corporate Office:
                  </span>
                  <span className="text-slate-300 text-[11px] leading-relaxed block">
                    {COMPANY_CONTACT.addresses.registeredOffice.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 group">
                <div className="size-6 rounded-md bg-[#013074] border border-[#FEA81D]/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#FEA81D] transition-colors">
                  <Wrench className="size-3.5 text-[#FEA81D]" />
                </div>
                <div>
                  <span className="font-semibold text-white block">
                    Assembly Godown & Spares Depot:
                  </span>
                  <span className="text-slate-300 text-[11px] leading-relaxed block">
                    {COMPANY_CONTACT.addresses.godownDepot.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 (2 cols): Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-heading">
                Quick Navigation
              </h4>
              <div className="h-0.5 w-10 bg-[#FEA81D] mt-2 rounded-full" />
            </div>

            <ul className="space-y-2.5 text-xs">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Machinery Lines", href: "/products" },
                { name: "Spare Parts Catalog", href: "/spare-parts" },
                { name: "Machinery Categories", href: "/categories" },
                { name: "Engineering Services", href: "/services" },
                { name: "Contact & Godown", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FEA81D] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="size-3 text-slate-500 group-hover:text-[#FEA81D] group-hover:translate-x-0.5 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FEA81D] hover:bg-[#e59617] text-[#0F172A] font-bold text-xs shadow-sm transition-all"
                >
                  <Sparkles className="size-3" />
                  <span>Request RFQ Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (3 cols): Machinery Lines */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-heading">
                Core Machinery Lines
              </h4>
              <div className="h-0.5 w-10 bg-[#FEA81D] mt-2 rounded-full" />
            </div>

            <ul className="space-y-3 text-xs text-slate-300">
              <li>
                <Link
                  href="/products/wj-100-1800-2ply-plant"
                  className="hover:text-[#FEA81D] transition-colors block group"
                >
                  <span className="font-semibold text-white group-hover:text-[#FEA81D] transition-colors">
                    WJ-100-1800 2PLY Plant
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    Complete 1800mm High-Speed Corrugation Line
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/sf-280-single-facer"
                  className="hover:text-[#FEA81D] transition-colors block group"
                >
                  <span className="font-semibold text-white group-hover:text-[#FEA81D] transition-colors">
                    SF-280 Single Facer
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    ABB Inverter • Φ280mm 48CrMo Laser Corrugating Roll
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/sf-10-fingerless-single-facer"
                  className="hover:text-[#FEA81D] transition-colors block group"
                >
                  <span className="font-semibold text-white group-hover:text-[#FEA81D] transition-colors">
                    SF-10 Fingerless Single Facer
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    Φ292mm Tungsten Carbide Roller • Negative Pressure Suction
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/hydraulic-mill-roll-stand-2-ton"
                  className="hover:text-[#FEA81D] transition-colors block group"
                >
                  <span className="font-semibold text-white group-hover:text-[#FEA81D] transition-colors">
                    Hydraulic Mill Roll Stands
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    2-Ton & 3-Ton ZJ-V5B Dual-Arm Heavy Duty
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/nc-1800-computer-rotary-cutter"
                  className="hover:text-[#FEA81D] transition-colors block group"
                >
                  <span className="font-semibold text-white group-hover:text-[#FEA81D] transition-colors">
                    NC-1800 Rotary Sheet Cutter
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    Servo Helical Cutter • 200 Order Production Memory
                  </span>
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/products"
                  className="text-xs text-[#FEA81D] hover:underline font-semibold flex items-center gap-1.5 group"
                >
                  <span>Explore Full 20+ Machinery Catalog</span>
                  <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (3 cols): Spare Parts & Support Hotlines */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-heading">
                Depot Spares & Hotlines
              </h4>
              <div className="h-0.5 w-10 bg-[#FEA81D] mt-2 rounded-full" />
            </div>

            <ul className="space-y-1.5 text-xs text-slate-300">
              {[
                "MaxDura Knuckle-Joint Anvil Covers",
                "Sun Feeder High-Friction Wheels",
                "Polyurethane No-Crush Feed Rollers",
                "Tungsten Carbide Thin Slitter Blades",
                "200°C High-Temp C&U Sealed Bearings",
                "DuPont Kevlar Corrugator Belts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-3 text-[#FEA81D] shrink-0" />
                  <Link href="/spare-parts" className="hover:text-[#FEA81D] transition-colors truncate">
                    {item}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/spare-parts"
                  className="text-xs text-[#FEA81D] hover:underline font-semibold flex items-center gap-1.5 group"
                >
                  <span>Search 400+ In-Stock SKUs</span>
                  <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>

            {/* Direct Contacts Box */}
            <div className="pt-2">
              <div className="bg-[#00173d] p-4 rounded-xl border border-white/10 space-y-2.5 text-xs shadow-inner">
                <a
                  href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-[#FEA81D] transition-colors group"
                >
                  <div className="size-7 rounded-md bg-[#013074] flex items-center justify-center shrink-0 group-hover:bg-[#FEA81D] group-hover:text-[#0F172A] transition-colors">
                    <Phone className="size-3.5 text-[#FEA81D] group-hover:text-[#0F172A] transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Sales Hotline</span>
                    <strong className="text-white text-xs">{COMPANY_CONTACT.phones.sales.display}</strong>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-[#FEA81D] transition-colors group"
                >
                  <div className="size-7 rounded-md bg-[#013074] flex items-center justify-center shrink-0 group-hover:bg-[#FEA81D] group-hover:text-[#0F172A] transition-colors">
                    <Wrench className="size-3.5 text-[#FEA81D] group-hover:text-[#0F172A] transition-colors" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Spares & Support</span>
                    <strong className="text-white text-xs">{COMPANY_CONTACT.phones.service.display}</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_CONTACT.email.sales}`}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-[#FEA81D] transition-colors group pt-1 border-t border-white/5"
                >
                  <div className="size-7 rounded-md bg-[#013074] flex items-center justify-center shrink-0 group-hover:bg-[#FEA81D] group-hover:text-[#0F172A] transition-colors">
                    <Mail className="size-3.5 text-[#FEA81D] group-hover:text-[#0F172A] transition-colors" />
                  </div>
                  <span className="truncate text-slate-300 group-hover:text-[#FEA81D] transition-colors text-[11px]">{COMPANY_CONTACT.email.sales}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Trust Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="size-5 text-[#FEA81D] shrink-0" />
            <div>
              <span className="font-bold text-white">The Semi-Indian Advantage: </span>
              <span className="text-slate-300">Heavy-gauge cast iron frameworks integrated with Siemens PLC, ABB inverters & Schneider electricals.</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              240+ Corrugators Running Pan-India
            </span>
          </div>
        </div>
      </Container>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#000a18] text-slate-400 text-xs py-5 border-t border-white/5">
        <Container size="default">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="text-[11px] text-slate-400">
                © 2026 {COMPANY_CONTACT.legalName}. All rights reserved. Brand: <strong className="text-white">{COMPANY_CONTACT.brandName}</strong>.
              </p>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <span>Engineered in Chennai, Tamil Nadu, India 🇮🇳</span>
              <span className="text-slate-600">•</span>
              <span>ISO 9001:2015 Quality Standards</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
