"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

interface VisualCategory {
  id: string;
  name: string;
  models: string;
  href: string;
  image: string;
}

const VISUAL_CATEGORIES: VisualCategory[] = [
  {
    id: "production-lines",
    name: "Complete Corrugated Production Lines",
    models: "WJ-100-1800 2PLY",
    href: "/products?category=production-lines",
    image: "/images/products/wj_100_1800_2ply_plant__july__2023_img_1.jpg",
  },
  {
    id: "single-facers",
    name: "Single Facer Corrugators",
    models: "SF-280 & SF-10 Fingerless",
    href: "/products?category=single-facers",
    image: "/images/products/sf280_single_facer_corrugation_machine_1800mm_img_1.jpg",
  },
  {
    id: "mill-roll-stands",
    name: "Hydraulic Mill Roll Stands",
    models: "ZJ-V5B & Heavy Stands",
    href: "/products?category=mill-roll-stands",
    image: "/images/products/hydraulic_mill_roll_stand_img_1.jpg",
  },
  {
    id: "sheet-cutters",
    name: "Rotary Cut-Off & Slitter Scorers",
    models: "NC-1800 & Thin Blade Slitters",
    href: "/products?category=sheet-cutters",
    image: "/images/products/wj_100_1800_2ply_plant__july__2023_img_4.jpg",
  },
  {
    id: "converting-finishing",
    name: "Converting & Auto Folder Gluers",
    models: "High-Speed Gluers & Stitchers",
    href: "/products?category=converting-finishing",
    image: "/images/products/wj_100_1800_2ply_plant__july__2023_img_5.jpg",
  },
  {
    id: "flexo-printing",
    name: "Flexo Printing & Die Cutting",
    models: "Multi-Color Printer Slotters",
    href: "/products?category=flexo-printing",
    image: "/images/products/wj_100_1800_2ply_plant__july__2023_img_6.jpg",
  },
];

export function MachineryCategories() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Machinery Categories"
      className="py-20 lg:py-28 border-b border-slate-900 overflow-hidden"
      style={{ backgroundColor: "#010f29" }}
    >
      <Container size="wide">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="mb-12">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-[#0F172A] bg-[#FEA81D] px-3 py-1.5 rounded-sm mb-4">
            Machine Lines
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-xl">
              Comprehensive{" "}
              <span className="text-[#FEA81D]">Corrugation Solutions</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Explore dedicated machinery categories engineered for modern
              corrugator plants.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Grid — first card spans 2 columns on desktop */}
        <StaggerContainer
          staggerChildren={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {VISUAL_CATEGORIES.map((cat, idx) => (
            <StaggerItem
              key={cat.id}
              className={idx === 0 ? "sm:col-span-2" : ""}
              distance={25}
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full"
              >
                <Link
                  href={cat.href}
                  className="group relative block overflow-hidden rounded-2xl bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 w-full h-full border border-white/5 hover:border-[#FEA81D]/30"
                  style={{ aspectRatio: idx === 0 ? "21/9" : "16/10" }}
                >
                  {/* Background Image with smooth zoom */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes={
                      idx === 0
                        ? "(max-width: 640px) 100vw, 100vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    }
                    className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out opacity-75 group-hover:opacity-90"
                  />

                  {/* Strong gradient overlay from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010f29] via-[#013074]/40 to-transparent pointer-events-none" />

                  {/* Top-right arrow icon in glass circle with spring hover */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="size-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-[#FEA81D] group-hover:border-[#FEA81D] transition-all duration-300 shadow-sm">
                      <ArrowRight className="size-4 text-white group-hover:text-[#0F172A] group-hover:translate-x-0.5 transition-all duration-200" />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="font-mono text-[11px] font-semibold text-[#FEA81D] block mb-1 tracking-wider">
                      {cat.models}
                    </span>
                    <h3
                      className={[
                        "font-heading font-bold text-white leading-snug group-hover:text-[#FEA81D] transition-colors",
                        idx === 0
                          ? "text-xl sm:text-2xl lg:text-3xl"
                          : "text-base sm:text-lg",
                      ].join(" ")}
                    >
                      {cat.name}
                    </h3>
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

export default MachineryCategories;
