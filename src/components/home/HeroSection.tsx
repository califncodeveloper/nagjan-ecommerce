"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { HERO_CONTENT } from "@/data/homepage";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" as const },
    },
  };

  return (
    <section
      aria-label="Hero - Engineering Corrugated Packaging Machinery"
      className="relative overflow-hidden bg-gradient-to-b from-[#01255e] via-[#013074] to-[#01255e] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#0f3b7d]"
    >
      {/* Background Engineering Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Decorative Technical Accent glow */}
      <div
        className="absolute top-0 right-1/4 -mt-16 w-96 h-96 bg-[#FEA81D]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Origin & Experience Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FEA81D] bg-[#FEA81D]/15 border border-[#FEA81D]/30 rounded-md">
                <span className="size-2 rounded-full bg-[#FEA81D] animate-ping" />
                {HERO_CONTENT.badge}
              </span>
            </motion.div>

            {/* Main H1 Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              {HERO_CONTENT.headline}
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed max-w-xl font-normal"
            >
              {HERO_CONTENT.supportingCopy}
            </motion.p>

            {/* Technical Highlights Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-2"
            >
              {HERO_CONTENT.technicalBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-md p-2.5 backdrop-blur-xs"
                >
                  <p className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                    {badge.label}
                  </p>
                  <p className="text-sm sm:text-base font-bold font-mono text-[#FEA81D] mt-0.5">
                    {badge.value}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href={HERO_CONTENT.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-[#FEA81D] text-[#0F172A] font-bold text-sm sm:text-base tracking-wide shadow-md hover:bg-[#e59516] hover:shadow-lg transition-all active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#013074]"
              >
                <span>{HERO_CONTENT.secondaryCta.label}</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href={HERO_CONTENT.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-white/10 text-white border border-white/25 font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-white/40 transition-all active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#013074]"
              >
                <FileText className="size-4 text-slate-300" />
                <span>{HERO_CONTENT.primaryCta.label}</span>
              </Link>
            </motion.div>

            {/* Quick Trust Checklist */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300 pt-2"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#FEA81D]" />
                <span>Heavy-Duty HT250 Cast Frames</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#FEA81D]" />
                <span>Siemens / ABB Electricals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-[#FEA81D]" />
                <span>Madhavaram Spares Depot</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Authentic Flagship Machinery Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-slate-900 group">
              {/* Product Showcase Aspect Container */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10]">
                <Image
                  src={HERO_CONTENT.heroImage.src}
                  alt={HERO_CONTENT.heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 640px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient vignette for readability & framing */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Top overlay badge */}
                <div className="absolute top-3 left-3 bg-[#013074]/90 backdrop-blur-md text-white text-[11px] font-mono uppercase px-2.5 py-1 rounded-sm border border-white/20">
                  Model: WJ-100-1800 2PLY Line
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-slate-950/85 backdrop-blur-md px-3.5 py-2.5 rounded border border-white/10">
                  <div>
                    <p className="font-semibold text-white">
                      Complete Corrugation Production Line
                    </p>
                    <p className="text-[11px] text-slate-300">
                      Mill Roll Stand • SF-10 • Bridge • NC Cutter • Stacker
                    </p>
                  </div>
                  <div className="text-right font-mono text-[#FEA81D] font-bold shrink-0 pl-2">
                    100 m/min
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial Spec Tag underneath image */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-300 px-1 font-mono">
              <span>Authentic Factory Machinery Photograph</span>
              <span className="text-[#FEA81D]">Effective Width: 1800 mm</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
