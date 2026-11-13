"use client";

import React from "react";
import { ShieldCheck, Cpu, Boxes, Wrench, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";

interface FeaturePillar {
  icon: typeof ShieldCheck;
  title: string;
  tagline: string;
  points: string[];
}

const PILLARS: FeaturePillar[] = [
  {
    icon: ShieldCheck,
    title: "Heavy HT250 Cast-Iron Frames",
    tagline: "Vibration-free high-speed continuous stability.",
    points: [
      "Rigid HT250 cast-iron wallboards",
      "Dynamic balancing for speeds up to 100 m/min",
      "Alloy steel rolls with tungsten carbide options",
    ],
  },
  {
    icon: Cpu,
    title: "Semi-Indian Electrical Integration",
    tagline: "Siemens, ABB & Schneider automation.",
    points: [
      "30–40% electrical energy efficiency",
      "Locally serviceable components across India",
      "Eliminates imported electronic controller lock-in",
    ],
  },
  {
    icon: Boxes,
    title: "Chennai Ready Spares Depot",
    tagline: "400+ consumable SKUs in active stock.",
    points: [
      "Thin blades, anvil covers, slitting knives",
      "Direct dispatch from Madhavaram godown",
      "Zero plant downtime waiting for imports",
    ],
  },
  {
    icon: Wrench,
    title: "Turnkey Plant Erection & Backup",
    tagline: "Engineering support led by experienced specialists.",
    points: [
      "Custom civil foundation layout blueprints",
      "Mechanical assembly & trial run testing",
      "On-site factory operator and maintenance training",
    ],
  },
];

export function WhyNAGJAN() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Why NAGJAN Engineering"
      className="relative py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle industrial grid background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              #013074 0px,
              #013074 1px,
              transparent 1px,
              transparent 24px
            ),
            repeating-linear-gradient(
              -45deg,
              #013074 0px,
              #013074 1px,
              transparent 1px,
              transparent 24px
            )
          `,
        }}
      />

      <Container size="wide">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="mb-14">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] text-[#FEA81D] bg-[#013074] px-3 py-1.5 rounded-sm mb-4">
            The NAGJAN Difference
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-tight max-w-2xl">
              Engineered for{" "}
              <span className="text-[#013074]">High-Uptime</span> Corrugated
              Production
            </h2>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed shrink-0">
              Combining robust mechanical castings with globally trusted
              electrical systems.
            </p>
          </div>
        </ScrollReveal>

        {/* 2×2 Card Grid with Stagger & Lift */}
        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={idx} distance={25}>
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group flex flex-row items-stretch rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#FEA81D] transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Left navy icon block */}
                  <div className="flex flex-col items-center justify-start gap-0 bg-[#013074] p-5 shrink-0 w-16 sm:w-20 group-hover:bg-[#01255c] transition-colors">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { rotate: 8, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="size-10 sm:size-12 flex items-center justify-center rounded-lg bg-white/10 mt-1"
                    >
                      <Icon className="size-5 sm:size-6 text-[#FEA81D]" />
                    </motion.div>
                    {/* Decorative amber line */}
                    <div className="mt-4 w-0.5 flex-1 bg-[#FEA81D]/30 rounded-full min-h-[32px] group-hover:bg-[#FEA81D] transition-colors" />
                  </div>

                  {/* Right content */}
                  <div className="flex-1 p-5 sm:p-6 border-t-2 border-t-[#FEA81D] flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-[#0F172A] group-hover:text-[#013074] transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 mt-1">
                        {pillar.tagline}
                      </p>

                      <ul className="mt-4 space-y-2.5 pt-3 border-t border-slate-100">
                        {pillar.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-600"
                          >
                            <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}

export default WhyNAGJAN;
