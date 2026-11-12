import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Boxes,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SEMI_INDIAN_ADVANTAGE } from "@/data/homepage";

export function SemiIndianAdvantage() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Zap: Zap,
    Boxes: Boxes,
    Wrench: Wrench,
    Gauge: Zap,
  };

  const electricalBrands = [
    { name: "Siemens", role: "Contactors & Relays" },
    { name: "ABB", role: "VFD Drive Motors" },
    { name: "Schneider", role: "Control Gear" },
    { name: "Crompton Greaves", role: "Heavy Duty Motors" },
    { name: "Delta", role: "PLC Automation" },
    { name: "Inovance", role: "Precision Inverters" },
    { name: "C&U", role: "Industrial Bearings" },
    { name: "AirTac", role: "Pneumatics" },
  ];

  return (
    <section
      aria-label="The Semi-Indian Machine Advantage"
      className="py-16 sm:py-20 lg:py-24 bg-[#01255e] text-white border-b border-[#0f3b7d] relative overflow-hidden"
    >
      {/* Background Engineering Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionHeading
            align="center"
            theme="dark"
            badge="Brand Differentiator"
            title="Global Mechanical Strength. Indian Engineering Intelligence."
            subtitle="NAGJAN combines heavy-duty structural cast frames with selected Indian and internationally recognized electrical systems—giving manufacturers maximum uptime, local serviceability, and energy efficiency."
          />
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SEMI_INDIAN_ADVANTAGE.map((pillar, idx) => {
            const IconComp = iconMap[pillar.iconName] || ShieldCheck;

            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-xs flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div className="space-y-4">
                  <div className="size-12 rounded-md bg-[#FEA81D]/20 border border-[#FEA81D]/40 flex items-center justify-center text-[#FEA81D]">
                    <IconComp className="size-6" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FEA81D] font-mono">
                      {pillar.highlight}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white mt-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Component Provenance Integration Showcase */}
        <div className="bg-slate-900/90 border border-white/15 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-[#FEA81D]">
                Component Integration Provenance
              </p>
              <h4 className="font-heading font-bold text-xl text-white mt-1">
                Standardized Components with Off-the-Shelf Availability
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                Every machine is customized to eliminate black-box proprietary parts so your maintenance team can source spares quickly across India.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-[#FEA81D] text-[#0F172A] font-bold text-xs tracking-wide hover:bg-[#e59516] transition-colors shrink-0 self-start md:self-auto"
            >
              <span>Learn About Our Engineering</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-6">
            {electricalBrands.map((brand, bIdx) => (
              <div
                key={bIdx}
                className="bg-white/5 border border-white/10 rounded p-2.5 text-center flex flex-col justify-center"
              >
                <div className="flex items-center justify-center gap-1 text-[#FEA81D] mb-1">
                  <CheckCircle2 className="size-3" />
                  <span className="text-xs font-bold font-heading text-white">
                    {brand.name}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">
                  {brand.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SemiIndianAdvantage;

