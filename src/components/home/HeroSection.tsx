"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, ChevronDown, Gauge, Ruler, Layers } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { HERO_CONTENT } from "@/data/homepage";
import { StaggerText } from "@/components/motion/StaggerText";
import { EASE_PREMIUM } from "@/lib/motion";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax for background and floating elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={containerRef}
      aria-label="Hero - NAGJAN Corrugated Packaging Machinery"
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#011d47] text-white"
    >
      {/* Full-bleed background image with subtle parallax depth */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : bgY }}
        className="absolute inset-0 z-0 scale-105"
        aria-hidden="true"
      >
        <Image
          src={HERO_CONTENT.heroImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011d47] via-[#013074]/90 to-[#011d47]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011d47] via-transparent to-[#011d47]/40" />
      </motion.div>

      {/* Diagonal stripe texture overlay */}
      <div
        className="absolute inset-0 z-[1] texture-diagonal-stripes opacity-100 pointer-events-none"
        aria-hidden="true"
      />

      {/* Amber ambient glow with parallax */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : glowY }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FEA81D]/12 rounded-full blur-[90px] pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <Container size="wide" className="py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* ── Left Column: Copy & CTAs ── */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : textY }}
              className="lg:col-span-7 space-y-7"
            >
              {/* Eyebrow badge with fade-in and subtle scale */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FEA81D]/15 border border-[#FEA81D]/30"
              >
                <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" aria-hidden="true" />
                <span className="eyebrow-label text-[#FEA81D]">
                  Engineering Excellence Since 2010 · Chennai
                </span>
              </motion.div>

              {/* Headline with staggered word reveal */}
              <div className="space-y-1">
                <StaggerText
                  text="Engineering High-Speed Corrugated Packaging Machinery."
                  as="h1"
                  delay={0.1}
                  stagger={0.05}
                  className="heading-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]"
                />
              </div>

              {/* Sub-headline with smooth slide-up */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: EASE_PREMIUM }}
                className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal"
              >
                Heavy-duty corrugation production lines, precision single facers, and 400+ ready spare parts engineered for non-stop industrial productivity.
              </motion.p>

              {/* CTAs with magnetic micro-interactions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: EASE_PREMIUM }}
                className="flex flex-wrap items-center gap-4 pt-1"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href={HERO_CONTENT.primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-lg bg-[#FEA81D] hover:bg-[#e59516] text-[#0F172A] font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-[0_0_24px_rgba(254,168,29,0.4)] transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA81D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#013074] group"
                  >
                    <span>Explore Machinery</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href={HERO_CONTENT.secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 h-13 px-7 rounded-lg glass-card text-white font-semibold text-sm sm:text-base hover:bg-white/15 transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#013074]"
                  >
                    <FileText className="size-4 text-slate-300" aria-hidden="true" />
                    <span>Request a Quote</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ── Right Column: Spec Glass Card with 3D Float ── */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : cardY }}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE_PREMIUM }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 35px -5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(254, 168, 29, 0.15)",
                }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 w-full max-w-sm relative overflow-hidden group border border-white/15 backdrop-blur-md bg-white/10"
                role="complementary"
                aria-label="Flagship machine specifications"
              >
                {/* Subtle sheen highlight line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FEA81D] to-transparent opacity-80" />

                {/* Card header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" aria-hidden="true" />
                    <span className="eyebrow-label text-slate-300 text-[10px] uppercase font-bold tracking-wider">
                      WJ-100-1800 · Flagship Spec
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#FEA81D] bg-[#011d47]/80 px-2 py-0.5 rounded border border-[#FEA81D]/30">
                    NAGJAN
                  </span>
                </div>

                {/* Spec rows with staggered entry */}
                <div className="space-y-4">
                  {[
                    {
                      icon: Gauge,
                      val: "100 m/min",
                      lbl: "Design Speed",
                      sub: "High output",
                    },
                    {
                      icon: Ruler,
                      val: "1800 mm",
                      lbl: "Working Width",
                      sub: "Heavy corrugator",
                    },
                    {
                      icon: Layers,
                      val: "HT250",
                      lbl: "Cast Iron Frame",
                      sub: "Vibration dampening",
                    },
                  ].map((row, idx) => {
                    const Icon = row.icon;
                    return (
                      <motion.div
                        key={row.lbl}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1, ease: EASE_PREMIUM }}
                        className="flex items-center gap-4 group/row"
                      >
                        <div className="size-10 rounded-lg bg-[#FEA81D]/15 flex items-center justify-center shrink-0 border border-[#FEA81D]/20 group-hover/row:bg-[#FEA81D]/25 transition-colors">
                          <Icon className="size-5 text-[#FEA81D]" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-2xl font-extrabold font-mono text-[#FEA81D] tabular-nums leading-none">
                            {row.val}
                          </div>
                          <div className="text-[11px] text-slate-300 mt-0.5 uppercase tracking-wider">
                            {row.lbl}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Provenance strip */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">Electrical Partners</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Siemens", "ABB", "Delta", "Schneider"].map((brand) => (
                      <span
                        key={brand}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold text-slate-200 bg-white/8 border border-white/10 hover:border-[#FEA81D]/40 transition-colors"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* ── Trust bar at bottom of hero with stagger ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: EASE_PREMIUM }}
        className="relative z-10 border-t border-white/10 bg-[#011d47]/80 backdrop-blur-sm"
        aria-label="Key performance indicators"
      >
        <Container size="wide">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "240+", label: "Corrugators Delivered" },
              { value: "15+",  label: "Years in Industry" },
              { value: "18+",  label: "Machinery Models" },
              { value: "400+", label: "Spare Parts Stocked" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + idx * 0.08 }}
                className="flex flex-col items-center justify-center py-5 px-4 text-center hover:bg-white/5 transition-colors"
              >
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-[#FEA81D] tabular-nums leading-none">
                  {item.value}
                </span>
                <span className="text-[11px] text-slate-300 mt-1 uppercase tracking-wide">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/60">Scroll</span>
        <ChevronDown className="size-4 text-white animate-bounce-scroll" />
      </div>
    </section>
  );
}

export default HeroSection;
