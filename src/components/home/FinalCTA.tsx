"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, FileText, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { EASE_PREMIUM } from "@/lib/motion";

export function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      aria-label="Request a Machinery Quotation"
      className="relative py-24 sm:py-32 overflow-hidden text-white"
    >
      {/* Full-bleed machinery background with parallax */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : bgY }}
        className="absolute inset-0 z-0 scale-110"
        aria-hidden="true"
      >
        <Image
          src="/images/products/wj_100_1800_2ply_plant__july__2023_img_2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        {/* Strong navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#011d47]/95 via-[#013074]/88 to-[#011d47]/98" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011d47]/60 via-transparent to-[#011d47]/60" />
      </motion.div>

      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 z-[1] texture-diagonal-stripes opacity-100 pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial glow behind headline with subtle pulse */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.6, 0.8, 0.6],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#013074]/60 blur-[80px] rounded-full z-[1] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-[#FEA81D]/8 blur-[60px] rounded-full z-[1] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10 text-center">
        <ScrollReveal direction="up" distance={25} className="max-w-3xl mx-auto space-y-7">
          {/* Decorative top element */}
          <div className="flex items-center justify-center gap-4" aria-hidden="true">
            <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-[#FEA81D]/50" />
            <div className="size-1.5 rounded-full bg-[#FEA81D]" />
            <div className="h-px w-10 bg-[#FEA81D]/70" />
            <div className="size-1.5 rounded-full bg-[#FEA81D]" />
            <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-[#FEA81D]/50" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/15 text-xs font-semibold text-slate-200">
            <ShieldCheck className="size-3.5 text-[#FEA81D]" aria-hidden="true" />
            <span>Pan-India Engineering &amp; Commissioning Support</span>
          </div>

          {/* Headline */}
          <h2 className="heading-section text-3xl sm:text-5xl text-white font-extrabold tracking-tight leading-tight">
            Ready to Upgrade Your{" "}
            <span className="text-[#FEA81D]">Corrugated Packaging</span> Plant?
          </h2>

          {/* Supporting copy */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Consult our engineering specialists in Chennai for complete plant layouts, single facers, retrofits, and immediate spare parts dispatch.
          </p>

          {/* CTAs with spring micro-interactions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 h-13 px-9 rounded-lg bg-[#FEA81D] hover:bg-[#e59516] text-[#0F172A] font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-[0_0_28px_rgba(254,168,29,0.45)] transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA81D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#013074] group"
              >
                <FileText className="size-4" aria-hidden="true" />
                <span>Request a Quote</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-lg glass-card text-white font-semibold text-sm sm:text-base hover:bg-white/15 transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#013074]"
              >
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </div>

          {/* Phone links */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-sm text-slate-300">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
              aria-label={`Call Sales: ${COMPANY_CONTACT.phones.sales.display}`}
              className="inline-flex items-center gap-2 hover:text-[#FEA81D] transition-colors duration-150 group"
            >
              <span className="size-7 rounded-full bg-[#FEA81D]/15 border border-[#FEA81D]/25 flex items-center justify-center group-hover:bg-[#FEA81D]/25 transition-colors duration-150">
                <Phone className="size-3.5 text-[#FEA81D]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider leading-none mb-0.5">Sales</span>
                {COMPANY_CONTACT.phones.sales.display}
              </span>
            </motion.a>

            <div className="h-8 w-px bg-white/15 hidden sm:block" aria-hidden="true" />

            <motion.a
              whileHover={{ scale: 1.05 }}
              href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
              aria-label={`Call Spares Hotline: ${COMPANY_CONTACT.phones.service.display}`}
              className="inline-flex items-center gap-2 hover:text-[#FEA81D] transition-colors duration-150 group"
            >
              <span className="size-7 rounded-full bg-[#FEA81D]/15 border border-[#FEA81D]/25 flex items-center justify-center group-hover:bg-[#FEA81D]/25 transition-colors duration-150">
                <Phone className="size-3.5 text-[#FEA81D]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider leading-none mb-0.5">Spares Hotline</span>
                {COMPANY_CONTACT.phones.service.display}
              </span>
            </motion.a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default FinalCTA;
