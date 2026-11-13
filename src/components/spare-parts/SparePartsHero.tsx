"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Boxes, ShieldCheck, Clock, Award, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { EASE_PREMIUM } from "@/lib/motion";

export function SparePartsHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative bg-gradient-to-br from-[#0F172A] via-[#013074] to-[#01255e] text-white pt-10 pb-14 overflow-hidden border-b border-[#01255c]">
      {/* Dot-grid industrial pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#FEA81D_1px,transparent_1px)] [background-size:18px_18px]"
        aria-hidden="true"
      />
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#FEA81D]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="default">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="space-y-6"
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-xs text-blue-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-blue-400/60">/</li>
                <li className="font-semibold text-white" aria-current="page">
                  Spare Parts Catalogue
                </li>
              </ol>
            </nav>

            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEA81D]/15 border border-[#FEA81D]/30 text-[#FEA81D] text-xs font-bold uppercase tracking-widest"
            >
              <Boxes className="size-3.5 text-[#FEA81D]" />
              <span>Chennai Spares Depot — Madhavaram Godown</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              NAGJAN Industrial{" "}
              <span className="text-[#FEA81D]">Spare Parts</span>{" "}
              &amp; Consumables
            </h1>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-xl">
              Authentic replacement components, tungsten thin blades, slitting rings, pneumatic cylinders, sensors, and contactors. Ready stock for immediate dispatch across India.
            </p>

            {/* Trust Badge Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { icon: Boxes, label: "400+ SKUs Stocked" },
                { icon: Clock, label: "Same-Day Dispatch" },
                { icon: ShieldCheck, label: "100% Genuine OEM" },
                { icon: Award, label: "Direct Factory Sourced" },
              ].map(({ icon: Icon, label }, idx) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 + idx * 0.06 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white backdrop-blur-sm cursor-default"
                >
                  <Icon className="size-3.5 text-[#FEA81D]" />
                  {label}
                </motion.span>
              ))}
            </div>

            {/* Engineer Hotline */}
            <div className="flex items-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FEA81D] hover:bg-[#d4890f] text-[#0F172A] font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <Phone className="size-4" />
                <span>Engineer Hotline: {COMPANY_CONTACT.phones.service.display}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column — Machinery Image Card with ImageReveal */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE_PREMIUM }}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group"
            >
              <ImageReveal direction="bottom-to-top" hoverZoom className="w-full h-full">
                <Image
                  src="/images/products/hydraulic_mill_roll_stand_img_1.jpg"
                  alt="Hydraulic Mill Roll Stand — NAGJAN Spare Parts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 600px"
                  priority
                />
              </ImageReveal>
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#013074]/80 via-transparent to-transparent pointer-events-none" />
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg">
                  <p className="text-xs font-bold text-[#FEA81D] uppercase tracking-wider">
                    Hydraulic Mill Roll Stand
                  </p>
                  <p className="text-[11px] text-white/80 mt-0.5">
                    OEM spare parts stocked in Chennai for instant dispatch
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom trust metrics strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-white/10 text-xs">
          {[
            {
              icon: Boxes,
              title: "400+ SKUs Stocked",
              desc: "Madhavaram Depot",
            },
            {
              icon: Clock,
              title: "Same-Day Dispatch",
              desc: "Courier & Cargo Freight",
            },
            {
              icon: ShieldCheck,
              title: "100% Genuine OEM",
              desc: "Direct Factory Sourced",
            },
            {
              icon: Phone,
              title: "Engineer Hotline",
              desc: COMPANY_CONTACT.phones.service.display,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
                className="flex items-center gap-2.5"
              >
                <div className="size-9 rounded-lg bg-[#FEA81D]/15 border border-[#FEA81D]/20 flex items-center justify-center shrink-0">
                  <Icon className="size-4 text-[#FEA81D]" />
                </div>
                <div>
                  <div className="font-bold text-white">{item.title}</div>
                  <div className="text-[11px] text-blue-200">{item.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default SparePartsHero;
