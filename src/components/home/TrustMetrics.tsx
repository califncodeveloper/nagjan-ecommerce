"use client";

import React from "react";
import { Award, Calendar, Cog, Boxes } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { EASE_PREMIUM } from "@/lib/motion";

const verifiedStats = [
  {
    value: "240+",
    label: "Corrugators Delivered",
    sublabel: "Operating across India",
    icon: Award,
  },
  {
    value: "2010",
    label: "Established Year",
    sublabel: "15+ years in Chennai",
    icon: Calendar,
  },
  {
    value: "18+",
    label: "Machinery Models",
    sublabel: "Production lines & converting",
    icon: Cog,
  },
  {
    value: "400+",
    label: "Spare Parts Stocked",
    sublabel: "Ready at Madhavaram Depot",
    icon: Boxes,
  },
] as const;

export function TrustMetrics() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <section
      aria-label="Verified Company Trust Indicators"
      className="bg-[#013074] py-10 sm:py-12 overflow-hidden border-b border-[#01255c]"
    >
      <Container size="wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {verifiedStats.map((stat, idx) => {
            const Icon = stat.icon;
            const isLast = idx === verifiedStats.length - 1;

            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className={[
                  "relative flex flex-col items-center justify-center text-center px-6 py-6 sm:py-8 group cursor-default",
                  !isLast
                    ? "after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-white/15 after:content-['']"
                    : "",
                ].join(" ")}
              >
                {/* Icon with interactive spring on hover */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="size-11 rounded-full bg-[#FEA81D]/15 border border-[#FEA81D]/25 flex items-center justify-center mb-3 group-hover:bg-[#FEA81D]/25 group-hover:border-[#FEA81D]/40 transition-colors"
                  aria-hidden="true"
                >
                  <Icon className="size-5 text-[#FEA81D]" />
                </motion.div>

                {/* Value */}
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FEA81D] font-mono tabular-nums leading-none tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="mt-2 font-semibold text-sm text-white leading-tight">
                  {stat.label}
                </div>

                {/* Sublabel */}
                <div className="mt-1 text-xs text-slate-300 hidden sm:block">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

export default TrustMetrics;
