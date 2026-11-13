"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

export interface StaggerTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  viewportMargin?: string;
  once?: boolean;
}

export function StaggerText({
  text,
  as: Component = "h2",
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.04,
  viewportMargin = "-40px",
  once = true,
}: StaggerTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: viewportMargin }}
        className="inline-block"
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
            <motion.span
              variants={wordVariants}
              className={`inline-block ${wordClassName}`}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

export default StaggerText;

