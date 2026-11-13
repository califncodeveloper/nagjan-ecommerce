"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // positive moves down with scroll, negative moves up (counter-scroll)
  className?: string;
  offset?: ["start end", "end start"] | ["start start", "end end"];
}

export function ParallaxElement({
  children,
  speed = 0.15,
  className = "",
  offset = ["start end", "end start"],
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const range = 100 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`relative overflow-visible ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

export default ParallaxElement;

