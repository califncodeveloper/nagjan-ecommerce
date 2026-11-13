"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";
import { useLenis } from "lenis/react";

export interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const lenis = useLenis();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      onAnimationComplete={() => {
        lenis?.resize();
      }}
      transition={{
        duration: 0.35,
        ease: EASE_PREMIUM,
      }}
      className="flex-1 flex flex-col w-full"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
