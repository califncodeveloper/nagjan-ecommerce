"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/motion";

export interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "bottom-to-top" | "left-to-right" | "top-to-bottom";
  delay?: number;
  duration?: number;
  viewportMargin?: string;
  once?: boolean;
  hoverZoom?: boolean;
}

export function ImageReveal({
  children,
  className = "",
  direction = "bottom-to-top",
  delay = 0,
  duration = 0.9,
  viewportMargin = "-50px",
  once = true,
  hoverZoom = true,
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={`relative overflow-hidden ${className}`}>{children}</div>;
  }

  const getInitialClip = () => {
    switch (direction) {
      case "left-to-right":
        return "inset(0% 100% 0% 0%)";
      case "top-to-bottom":
        return "inset(0% 0% 100% 0%)";
      case "bottom-to-top":
      default:
        return "inset(100% 0% 0% 0%)";
    }
  };

  return (
    <motion.div
      initial={{
        clipPath: getInitialClip(),
        opacity: 0,
      }}
      whileInView={{
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
      }}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        clipPath: { duration, delay, ease: EASE_OUT_EXPO },
        opacity: { duration: 0.3, delay },
      }}
      className={`relative overflow-hidden group ${className}`}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        whileHover={hoverZoom ? { scale: 1.04 } : undefined}
        viewport={{ once, margin: viewportMargin }}
        transition={{
          scale: { duration: 0.8, ease: EASE_OUT_EXPO },
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default ImageReveal;

