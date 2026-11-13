"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_PREMIUM } from "@/lib/motion";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
  animate?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
  titleAs: TitleTag = "h2",
  animate = true,
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion || !animate ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: EASE_PREMIUM,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion || !animate ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={cn(
        "space-y-3",
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {badge && (
        <motion.div variants={itemVariants}>
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md",
              isDark
                ? "bg-[#FEA81D]/20 text-[#FEA81D] border border-[#FEA81D]/30"
                : "bg-primary/10 text-primary border border-primary/20",
              isCenter && "justify-center"
            )}
          >
            <span className="size-1.5 rounded-full bg-[#FEA81D] animate-pulse" />
            {badge}
          </div>
        </motion.div>
      )}
      <motion.div variants={itemVariants}>
        <TitleTag
          className={cn(
            "font-heading font-bold tracking-tight text-balance",
            TitleTag === "h1"
              ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]"
              : "text-2xl sm:text-3xl lg:text-4xl leading-[1.2]",
            isDark ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </TitleTag>
      </motion.div>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={cn(
            "text-base sm:text-lg leading-relaxed text-balance",
            isDark ? "text-slate-300" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
