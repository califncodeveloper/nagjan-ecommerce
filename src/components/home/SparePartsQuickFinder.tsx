"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

interface SpareShortcut {
  name: string;
  count: string;
  image: string;
  href: string;
  description: string;
  category: string;
}

const SHORTCUTS: SpareShortcut[] = [
  {
    name: "Thin Blades & Slitting Knives",
    count: "4 SKUs",
    image: "/images/products/wj_100_1800_2ply_plant__july__2023_img_5.jpg",
    href: "/spare-parts?category=thin-blades-knives",
    description: "Tungsten carbide slitter blades for burr-free corrugating sheet cutting.",
    category: "Cutting Tools",
  },
  {
    name: "Anvil Covers & Grinding Wheels",
    count: "5 SKUs",
    image: "/images/products/wj_100_1800_2ply_plant__july__2023_img_4.jpg",
    href: "/spare-parts?category=anvil-covers-blankets",
    description: "Durable polyurethane covers and diamond grinding cup wheels.",
    category: "Consumables",
  },
  {
    name: "Electricals & Automation",
    count: "4 SKUs",
    image: "/images/products/wj_100_1800_2ply_plant__july__2023_img_6.jpg",
    href: "/spare-parts?category=electricals-automation",
    description: "Heavy-duty contactors, thermal relays, and solid-state sensors.",
    category: "Electrical",
  },
  {
    name: "Belts, Bearings & Pneumatics",
    count: "6 SKUs",
    image: "/images/products/hydraulic_mill_roll_stand_img_3.jpg",
    href: "/spare-parts?category=bearings-bushings",
    description: "High-temperature spherical roller bearings and pneumatic valves.",
    category: "Mechanical",
  },
];

export function SparePartsQuickFinder() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Spare Parts Storefront"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden"
    >
      <Container size="wide">
        {/* Header row */}
        <ScrollReveal direction="up" distance={20} className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#013074] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
                Chennai Spares Depot
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                Essential Consumables &amp; Replacement Spares
              </h2>
              <p className="text-sm text-slate-500 mt-2 max-w-xl">
                Over 400 consumable items permanently stocked at our Madhavaram godown for zero-downtime dispatch.
              </p>
              {/* Trust note */}
              <p className="text-[11px] font-semibold text-slate-400 mt-2 tracking-wide">
                400+ items&nbsp;•&nbsp;Madhavaram Depot&nbsp;•&nbsp;Same-day dispatch
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/spare-parts"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-[#FEA81D] hover:bg-[#E59516] active:bg-[#D4860D] text-[#0F172A] font-bold text-xs sm:text-sm transition-all shadow-sm shrink-0 self-start md:self-auto border border-amber-500/30 group"
              >
                <ShoppingCart className="size-4" />
                <span>Shop All Spare Parts</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* 4-column cards with Stagger */}
        <StaggerContainer
          staggerChildren={0.09}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SHORTCUTS.map((sc, idx) => (
            <StaggerItem key={idx} distance={20}>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full"
              >
                <Link
                  href={sc.href}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#013074]/30 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image area with subtle zoom */}
                  <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={sc.image}
                      alt={sc.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover group-hover:scale-108 transition-transform duration-600 ease-out opacity-90 group-hover:opacity-100"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                    {/* SKU badge */}
                    <div className="absolute top-2.5 right-2.5 bg-[#013074] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow z-10">
                      {sc.count}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-4 space-y-1.5 flex-1">
                    {/* Category name in amber */}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FEA81D]">
                      {sc.category}
                    </span>
                    <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-[#013074] transition-colors line-clamp-1">
                      {sc.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {sc.description}
                    </p>
                  </div>

                  {/* Footer strip with arrow shift */}
                  <div className="px-4 py-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#013074] group-hover:text-[#FEA81D] transition-colors bg-slate-50/50 group-hover:bg-slate-50">
                    <span>Browse Category</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

export default SparePartsQuickFinder;
