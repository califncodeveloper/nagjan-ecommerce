"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { FEATURED_MACHINERY } from "@/data/homepage";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { ScrollParallaxCard } from "@/components/motion/ScrollParallaxCard";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function FeaturedMachinery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Featured Corrugation Machinery"
      className="py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden"
    >
      <Container size="wide">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" distance={20} className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-[#FEA81D] bg-[#013074] px-3 py-1.5 rounded-sm mb-3">
                Flagship Machinery
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-tight max-w-xl">
                High-Speed Corrugated{" "}
                <span className="text-[#013074]">Packaging Equipment</span>
              </h2>
              <p className="text-sm text-slate-500 mt-3 max-w-lg leading-relaxed">
                Heavy-duty corrugation lines and converting machinery engineered
                for continuous industrial uptime.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#013074] border border-[#013074]/30 px-5 py-2.5 rounded-lg hover:bg-[#013074] hover:text-white hover:border-[#013074] transition-all duration-200 shrink-0 group self-start md:self-auto shadow-xs"
              >
                <span>View Complete Catalogue</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Product Cards Grid with Stagger & Scroll Parallax Effect */}
        <StaggerContainer
          staggerChildren={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURED_MACHINERY.map((machine, index) => (
            <StaggerItem key={machine.id} distance={30}>
              <ScrollParallaxCard enableTilt={!shouldReduceMotion} className="h-full">
                <article className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-300 relative">
                  {/* Amber accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#013074] via-[#FEA81D] to-[#013074] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                  {/* Machine Image with Image Reveal & Clipping */}
                  <div
                    className="relative overflow-hidden bg-slate-900"
                    style={{ aspectRatio: "4/5", maxHeight: "380px" }}
                  >
                    <ImageReveal
                      direction={index % 2 === 0 ? "bottom-to-top" : "left-to-right"}
                      hoverZoom
                      className="w-full h-full"
                    >
                      <Image
                        src={machine.image}
                        alt={machine.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                        className="object-cover object-center transition-transform duration-700 ease-out"
                      />
                    </ImageReveal>

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/25 to-transparent pointer-events-none" />

                    {/* Top-left category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-[#013074]/90 backdrop-blur-sm text-white text-[9px] uppercase font-bold tracking-[0.15em] px-3 py-1.5 rounded-full border border-white/20 shadow">
                        {machine.badge}
                      </span>
                    </div>

                    {/* Bottom model number overlay */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="font-mono text-[#FEA81D] text-xs font-bold tracking-wider bg-[#0F172A]/85 backdrop-blur-sm px-3 py-1.5 rounded border border-white/10 shadow-sm">
                        {machine.model}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="bg-white p-6 flex-1 flex flex-col justify-between gap-5">
                    <div>
                      {/* Machine Name */}
                      <h3 className="font-heading font-bold text-xl text-[#0F172A] group-hover:text-[#013074] transition-colors leading-snug">
                        {machine.name}
                      </h3>
                      {/* 1-line subtitle */}
                      <p className="text-xs text-slate-500 mt-1.5 line-clamp-1 font-medium">
                        {machine.subtitle}
                      </p>

                      {/* 2-spec micro-grid with amber accents */}
                      <div className="mt-5 grid grid-cols-2 gap-2.5">
                        {machine.specs.slice(0, 2).map((sp, idx) => (
                          <div
                            key={idx}
                            className="bg-slate-50 border border-slate-100 rounded-lg p-3 group-hover:bg-slate-50/80 transition-colors"
                          >
                            <span className="text-[9px] text-slate-400 uppercase font-bold tracking-widest block mb-0.5">
                              {sp.label}
                            </span>
                            <span className="font-mono font-bold text-sm text-[#013074]">
                              {sp.value}
                            </span>
                            <div className="mt-2 h-0.5 w-6 bg-[#FEA81D] rounded-full group-hover:w-10 transition-all duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dual CTAs with micro-interactions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Link
                          href={machine.href}
                          className="w-full py-2.5 px-3 rounded-lg bg-[#013074] hover:bg-[#012060] text-white text-xs font-bold transition-all text-center inline-flex items-center justify-center gap-1.5 shadow-sm group/btn"
                        >
                          <span>View Details</span>
                          <ArrowRight className="size-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                        <Link
                          href={machine.quoteHref}
                          className="w-full py-2.5 px-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59516] text-[#0F172A] text-xs font-bold transition-all text-center inline-flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <FileText className="size-3.5" />
                          <span>Get Quote</span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </article>
              </ScrollParallaxCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

export default FeaturedMachinery;
