"use client";

import React from "react";
import Image from "next/image";
import { MapPin, CheckCircle2, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function InfrastructureSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Engineering Facilities and Depots"
      style={{ backgroundColor: "#010f29" }}
      className="py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-900"
    >
      <Container size="wide">
        {/* Centered heading with ScrollReveal */}
        <ScrollReveal direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#FEA81D] bg-[#FEA81D]/10 px-3 py-1 rounded-full border border-[#FEA81D]/20 mb-3">
            Dedicated Facilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white mt-2 tracking-tight">
            Engineering &amp; Assembly Infrastructure
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Two specialized Chennai facilities dedicated to machine retrofitting, spares inventory, and customer plant engineering.
          </p>
        </ScrollReveal>

        {/* 2-column card grid with stagger & hover lift */}
        <StaggerContainer
          staggerChildren={0.15}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Card 1: Assembly & Customization Godown */}
          <StaggerItem distance={30}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/5 hover:border-[#FEA81D]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(254,168,29,0.12)] h-full"
              style={{ backgroundColor: "#011744" }}
            >
              {/* Amber accent top line */}
              <div className="h-[3px] w-full bg-[#FEA81D] shrink-0" />

              {/* Image with Image Reveal & Clipping */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <ImageReveal direction="left-to-right" hoverZoom className="w-full h-full">
                  <Image
                    src="/images/products/wj_100_1800_2ply_plant__july__2023_img_2.jpg"
                    alt="NAGJAN Assembly & Customization Godown in Madhavaram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                </ImageReveal>

                {/* Strong gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#010f29] via-[#010f29]/40 to-transparent pointer-events-none" />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#013074]/90 text-white text-[11px] font-bold uppercase px-3 py-1 rounded backdrop-blur-sm border border-white/20 z-10 shadow-sm">
                  Customization Godown &amp; Spares Depot
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Address pill */}
                  <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/5 px-3.5 py-3 rounded-lg border border-white/8 group-hover:border-white/15 transition-colors">
                    <MapPin className="size-4 text-[#FEA81D] shrink-0 mt-0.5 animate-pulse" />
                    <span>{COMPANY_CONTACT.addresses.godownDepot.address}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Dedicated facility for machine unboxing, HT250 frame inspection, electrical integration with Siemens/ABB switchgear, and instant spares fulfillment.
                  </p>

                  {/* 2×2 feature grid */}
                  <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300 pt-2">
                    {[
                      "Trial run under power",
                      "Tungsten roll inspection",
                      "Same-day spares dispatch",
                      "Siemens & ABB wiring",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-[#FEA81D] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone CTA with micro-interaction */}
                <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">Spares &amp; Depot Hotline:</span>
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                    className="font-mono font-bold text-[#FEA81D] hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-[#FEA81D]/30"
                  >
                    <Phone className="size-3" />
                    <span>{COMPANY_CONTACT.phones.service.display}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Card 2: Corporate & Engineering Office */}
          <StaggerItem distance={30}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/5 hover:border-[#FEA81D]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(254,168,29,0.12)] h-full"
              style={{ backgroundColor: "#011744" }}
            >
              {/* Amber accent top line */}
              <div className="h-[3px] w-full bg-[#FEA81D] shrink-0" />

              {/* Image with Image Reveal & Clipping */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <ImageReveal direction="bottom-to-top" hoverZoom className="w-full h-full">
                  <Image
                    src="/images/products/hydraulic_mill_roll_stand_img_2.jpg"
                    alt="NAGJAN Corporate Office and Engineering Consultation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                </ImageReveal>

                {/* Strong gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#010f29] via-[#010f29]/40 to-transparent pointer-events-none" />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#013074]/90 text-white text-[11px] font-bold uppercase px-3 py-1 rounded backdrop-blur-sm border border-white/20 z-10 shadow-sm">
                  Corporate &amp; Technical Consultation
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Address pill */}
                  <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/5 px-3.5 py-3 rounded-lg border border-white/8 group-hover:border-white/15 transition-colors">
                    <MapPin className="size-4 text-[#FEA81D] shrink-0 mt-0.5 animate-pulse" />
                    <span>{COMPANY_CONTACT.addresses.registeredOffice.address}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Coordinates pan-India sales, machine configuration engineering, plant foundation drawings, and on-site erection management led by experienced engineers.
                  </p>

                  {/* 2×2 feature grid */}
                  <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300 pt-2">
                    {[
                      "Civil foundation layouts",
                      "Production line audits",
                      "Commercial project quotes",
                      "Pan-India service teams",
                    ].map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-[#FEA81D] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone CTA with micro-interaction */}
                <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">Sales &amp; Quotations Hotline:</span>
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                    className="font-mono font-bold text-[#FEA81D] hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-[#FEA81D]/30"
                  >
                    <Phone className="size-3" />
                    <span>{COMPANY_CONTACT.phones.sales.display}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </section>
  );
}

export default InfrastructureSection;
