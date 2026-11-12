import React from "react";
import Link from "next/link";
import { Boxes, ShieldCheck, Clock, Award, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";

export function SparePartsHero() {
  return (
    <div className="bg-[#013074] text-white pt-8 pb-10 border-b border-blue-900/60 relative overflow-hidden">
      {/* Background Subtle Industrial Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FEA81D_1px,transparent_1px)] [background-size:16px_16px]" />

      <Container size="default">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-blue-200">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-blue-300/60">/</li>
            <li className="font-semibold text-white" aria-current="page">
              Spare Parts Catalogue
            </li>
          </ol>
        </nav>

        {/* Title & Description */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-400/30 text-amber-300 text-xs font-semibold">
            <Boxes className="size-3.5 text-[#FEA81D]" />
            <span>Chennai Central Spares Depot (Madhavaram Godown)</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            NAGJAN Industrial Spare Parts &amp; Consumables
          </h1>

          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-2xl">
            Authentic replacement components, tungsten thin blades, slitting rings, pneumatic cylinders, sensors, and contactors. Ready stock for immediate dispatch across India.
          </p>
        </div>

        {/* 4 Trust Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-blue-800/80 text-xs">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Boxes className="size-4 text-[#FEA81D]" />
            </div>
            <div>
              <div className="font-bold text-white">400+ SKUs Stocked</div>
              <div className="text-[11px] text-blue-200">Madhavaram Depot</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Clock className="size-4 text-[#FEA81D]" />
            </div>
            <div>
              <div className="font-bold text-white">Same-Day Dispatch</div>
              <div className="text-[11px] text-blue-200">Courier &amp; Cargo Freight</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="size-4 text-[#FEA81D]" />
            </div>
            <div>
              <div className="font-bold text-white">100% Genuine OEM</div>
              <div className="text-[11px] text-blue-200">Direct Factory Sourced</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Phone className="size-4 text-[#FEA81D]" />
            </div>
            <div>
              <div className="font-bold text-white">Engineer Hotline</div>
              <div className="text-[11px] text-blue-200">{COMPANY_CONTACT.phones.service.display}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

