"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  duration?: number;
  distance?: number;
  staggerChildren?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 28,
  staggerChildren,
  className = "",
  viewportMargin = "-50px",
  once = true,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is requested, fall back to pure instant/gentle fade
  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, margin: viewportMargin }}
        transition={{ duration: 0.3, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "scale":
        return { opacity: 0, scale: 0.94 };
      case "fade":
      default:
        return { opacity: 0 };
    }
  };

  const getTargetPosition = () => {
    switch (direction) {
      case "scale":
        return { opacity: 1, scale: 1 };
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "fade":
      default:
        return { opacity: 1 };
    }
  };

  const variants: Variants = {
    hidden: getInitialPosition(),
    visible: {
      ...getTargetPosition(),
      transition: {
        duration,
        delay,
        ease: EASE_PREMIUM,
        ...(staggerChildren && {
          staggerChildren,
          delayChildren: delay,
        }),
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;

