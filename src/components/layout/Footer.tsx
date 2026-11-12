import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { COMPANY_CONTACT } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#01255a] text-slate-200 border-t-4 border-[#FEA81D] mt-auto">
      {/* Main 4-Column Grid */}
      <Container size="default" className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Column 1 (4 cols): Company Profile & Verified Facilities */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block bg-white p-2.5 rounded-md shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA81D]"
              title="NAGJAN - Mount Kailash Printpack Machines"
              aria-label="NAGJAN Home"
            >
              <div className="relative flex items-center" style={{ width: 140, height: 45 }}>
                <Image
                  src="/logo/nagjan-logo.png"
                  alt="NAGJAN Logo"
                  width={140}
                  height={45}
                  className="w-auto h-10 object-contain"
                />
              </div>
            </Link>

            <div className="space-y-2">
              <h3 className="text-white font-bold text-sm tracking-tight font-heading">
                {COMPANY_CONTACT.legalName}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Established in May 2010 in Chennai, specializing in the import, engineering customization, and pan-India supply of high-speed corrugated packaging lines and Semi-Indian machine retrofits with Siemens and ABB automation.
              </p>
            </div>

            <div className="pt-2 border-t border-blue-900/60 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-[#FEA81D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    Registered Corporate Office:
                  </span>
                  <span>{COMPANY_CONTACT.addresses.registeredOffice.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-[#FEA81D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">
                    Assembly Godown & Spares Depot:
                  </span>
                  <span>{COMPANY_CONTACT.addresses.godownDepot.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 (2 cols): Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-heading border-b border-blue-900/80 pb-2">
              Quick Links
            </h4>

            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FEA81D] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="size-3 text-slate-400" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FEA81D] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="size-3 text-slate-400" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#FEA81D] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="size-3 text-slate-400" />
                  <span>Machinery Lines</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/spare-parts"
                  className="hover:text-[#FEA81D] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="size-3 text-slate-400" />
                  <span>Spare Parts Store</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-[#FEA81D] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="size-3 text-slate-400" />
                  <span>Categories Directory</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#FEA81D] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="size-3 text-slate-400" />
                  <span>Services & Support</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FEA81D] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="size-3 text-slate-400" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-1 text-[#FEA81D] font-semibold hover:underline"
                >
                  <span>Request a Quote →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (3 cols): Machinery Lines */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-heading border-b border-blue-900/80 pb-2">
              Machinery Lines
            </h4>

            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#FEA81D] transition-colors block"
                >
                  <span className="font-semibold text-white">WJ-100-1800 2PLY Plant</span>
                  <span className="text-[11px] text-slate-400 block">Complete 1800mm Corrugation Line</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#FEA81D] transition-colors block"
                >
                  <span className="font-semibold text-white">SF-280 Single Facer</span>
                  <span className="text-[11px] text-slate-400 block">ABB Inverter & Φ280mm 48CrMo Roll</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#FEA81D] transition-colors block"
                >
                  <span className="font-semibold text-white">SF-10 Single Facer</span>
                  <span className="text-[11px] text-slate-400 block">Φ292mm Tungsten Carbide Roller</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#FEA81D] transition-colors block"
                >
                  <span className="font-semibold text-white">Hydraulic Mill Roll Stands</span>
                  <span className="text-[11px] text-slate-400 block">2-Ton (1400/1600mm) & 3-Ton ZJ-V5B</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#FEA81D] transition-colors block"
                >
                  <span className="font-semibold text-white">NC-1800 Computer Rotary Cutter</span>
                  <span className="text-[11px] text-slate-400 block">Servo Driven • 200 Order Memory</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#FEA81D] transition-colors block"
                >
                  <span className="font-semibold text-white">Converting & Box Stitchers</span>
                  <span className="text-[11px] text-slate-400 block">Flexo Printer Slotters & Servo Stitchers</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/products"
                  className="text-xs text-[#FEA81D] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View All 20+ Machinery Lines</span>
                  <ArrowRight className="size-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (3 cols): Spare Parts & Support Hotlines */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-heading border-b border-blue-900/80 pb-2">
              Spare Parts & Hotline
            </h4>

            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <Link href="/spare-parts" className="hover:text-[#FEA81D] transition-colors">
                  • Anvil Covers (MaxDura Knuckle Type)
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="hover:text-[#FEA81D] transition-colors">
                  • Feeder & Sun Feeder Friction Wheels
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="hover:text-[#FEA81D] transition-colors">
                  • Polyurethane No-Crush Wheels
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="hover:text-[#FEA81D] transition-colors">
                  • Thin Blades & Slitting Knives
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="hover:text-[#FEA81D] transition-colors">
                  • 200°C High-Temp C&U Bearings
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="hover:text-[#FEA81D] transition-colors">
                  • Timing Belts & Conveyor Belts
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="hover:text-[#FEA81D] transition-colors">
                  • Electricals, Sensors & Solenoids
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/spare-parts"
                  className="text-xs text-[#FEA81D] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Explore Spare Parts Catalog (400+ SKUs)</span>
                  <ArrowRight className="size-3" />
                </Link>
              </li>
            </ul>

            {/* Direct Contacts Box */}
            <div className="pt-3 border-t border-blue-900/80 space-y-2 text-xs">
              <div className="bg-blue-950/60 p-3 rounded-md border border-blue-900/60 space-y-2">
                <a
                  href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                  className="flex items-center gap-2 hover:text-[#FEA81D] transition-colors"
                >
                  <Phone className="size-3.5 text-[#FEA81D] shrink-0" />
                  <span>
                    Sales: <strong>{COMPANY_CONTACT.phones.sales.display}</strong>
                  </span>
                </a>

                <a
                  href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                  className="flex items-center gap-2 hover:text-[#FEA81D] transition-colors"
                >
                  <Wrench className="size-3.5 text-[#FEA81D] shrink-0" />
                  <span>
                    Service: <strong>{COMPANY_CONTACT.phones.service.display}</strong>
                  </span>
                </a>

                <a
                  href={`mailto:${COMPANY_CONTACT.email.sales}`}
                  className="flex items-center gap-2 hover:text-[#FEA81D] transition-colors"
                >
                  <Mail className="size-3.5 text-[#FEA81D] shrink-0" />
                  <span>{COMPANY_CONTACT.email.sales}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Trust Bar */}
        <div className="mt-10 pt-6 border-t border-blue-900/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-[#FEA81D]" />
            <span className="font-semibold text-white">
              The Semi-Indian Machine Advantage:
            </span>
            <span>Heavy Cast-Iron Mechanicals Upgraded with Siemens / ABB / Crompton Electricals</span>
          </div>
          <div className="text-slate-400">
            Over 240 Corrugators Installed Pan-India
          </div>
        </div>
      </Container>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#001d47] text-slate-400 text-xs py-4 border-t border-blue-950">
        <Container size="default">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <div>
              <p>
                © 2026 {COMPANY_CONTACT.legalName}. All rights reserved. Brand: <strong>{COMPANY_CONTACT.brandName}</strong>.
              </p>
            </div>
            <div className="text-[11px] text-slate-400">
              <span>Engineered in Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
