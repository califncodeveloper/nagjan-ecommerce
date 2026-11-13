import { Variants, Transition } from "framer-motion";

// Premium industrial cubic-bezier easing curves
export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const; // Custom spring-like cubic bezier
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1.0] as const;
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const TRANSITION_FAST: Transition = {
  duration: 0.25,
  ease: EASE_PREMIUM,
};

export const TRANSITION_MEDIUM: Transition = {
  duration: 0.5,
  ease: EASE_PREMIUM,
};

export const TRANSITION_SLOW: Transition = {
  duration: 0.8,
  ease: EASE_OUT_EXPO,
};

export const TRANSITION_SPRING: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};

export const TRANSITION_BOUNCE: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 18,
};

// Fade Variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITION_MEDIUM,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_PREMIUM,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: EASE_PREMIUM,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASE_PREMIUM,
    },
  },
};

// Stagger Container
export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Image Reveal with clipping path mask
export const clipRevealVariants: Variants = {
  hidden: {
    clipPath: "inset(0% 100% 0% 0%)",
    scale: 1.08,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: {
      clipPath: { duration: 0.85, ease: EASE_OUT_EXPO },
      scale: { duration: 1.2, ease: EASE_OUT_EXPO },
    },
  },
};

// Card Lift Micro-interaction
export const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  hover: {
    y: -6,
    boxShadow: "0 20px 25px -5px rgba(1, 48, 116, 0.1), 0 8px 10px -6px rgba(1, 48, 116, 0.06)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

// Magnetic / Button Interactive Tap
export const buttonTapSpring = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

export const buttonHoverSpring = {
  scale: 1.025,
  transition: TRANSITION_SPRING,
};

