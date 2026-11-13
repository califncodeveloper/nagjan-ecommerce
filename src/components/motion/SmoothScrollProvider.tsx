"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  createContext,
  useContext,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import type Lenis from "lenis";
import { frame, cancelFrame } from "framer-motion";
import "lenis/dist/lenis.css";

// Use layout effect on client to ensure immediate scroll reset before paint
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface SmoothScrollContextType {
  lenis: Lenis | undefined;
  scrollTo: (
    target: number | string | HTMLElement,
    options?: {
      offset?: number;
      immediate?: boolean;
      duration?: number;
      lock?: boolean;
    }
  ) => void;
  stop: () => void;
  start: () => void;
  resize: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

/**
 * Hook to access Lenis smooth scroll instance and control methods
 */
export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext);
  const directLenis = useLenis();

  const scrollTo = useCallback(
    (
      target: number | string | HTMLElement,
      options?: {
        offset?: number;
        immediate?: boolean;
        duration?: number;
        lock?: boolean;
      }
    ) => {
      const instance = context?.lenis || directLenis;
      instance?.scrollTo(target, options);
    },
    [context?.lenis, directLenis]
  );

  const stop = useCallback(() => {
    const instance = context?.lenis || directLenis;
    instance?.stop();
  }, [context?.lenis, directLenis]);

  const start = useCallback(() => {
    const instance = context?.lenis || directLenis;
    instance?.start();
  }, [context?.lenis, directLenis]);

  const resize = useCallback(() => {
    const instance = context?.lenis || directLenis;
    instance?.resize();
  }, [context?.lenis, directLenis]);

  return {
    lenis: context?.lenis || directLenis,
    scrollTo,
    stop,
    start,
    resize,
  };
}

/**
 * Handles seamless route change transitions:
 * - Instantly displays the new page from top section
 * - Eliminates previous page's scroll retention
 * - Prevents unwanted automatic scrolling or delayed scroll jumps
 * - Ensures Framer Motion whileInView reveal animations trigger cleanly from the top
 */
function RouteScrollResetHandler() {
  const pathname = usePathname();
  const lenis = useLenis();

  // Prevent browser native scroll restoration from interfering with Lenis & route changes
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Handle immediate scroll-to-top synchronously before browser paint
  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Check if the current URL has an in-page anchor hash
    const hash = window.location.hash;
    if (hash) {
      try {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          // If hash element exists, let Lenis smoothly target it with header offset
          if (lenis) {
            lenis.scrollTo(targetElement as HTMLElement, {
              offset: -84,
              duration: 1.0,
            });
          }
          return;
        }
      } catch {
        // Fall through to top scroll if hash is invalid selector
      }
    }

    // 1. Instantly reset native browser window and document scroll
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 2. Immediately cancel in-flight momentum and reset Lenis scroll position
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.resize();
    }
  }, [pathname, lenis]);

  // Recalculate dimensions on next animation frame and after layout settles
  useEffect(() => {
    if (!lenis) return;

    // First frame after DOM paints
    const rafId = requestAnimationFrame(() => {
      lenis.resize();
    });

    // Secondary recalculation once lazy images/fonts might have settled
    const timer = setTimeout(() => {
      lenis.resize();
    }, 120);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [pathname, lenis]);

  // Handle browser back and forward (popstate) buttons
  useEffect(() => {
    const handlePopState = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
        lenis.resize();
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [lenis]);

  // Intercept in-page hash links (e.g. href="#machinery-categories") for smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement && lenis) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -84,
            duration: 1.1,
          });
          // Update URL hash without native browser jump
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  // Auto-pause Lenis when a modal or drawer locks body scroll with overflow: hidden
  useEffect(() => {
    if (!lenis || typeof document === "undefined") return;

    const observer = new MutationObserver(() => {
      const isBodyLocked =
        document.body.style.overflow === "hidden" ||
        document.documentElement.style.overflow === "hidden";

      if (isBodyLocked) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      observer.disconnect();
    };
  }, [lenis]);

  return null;
}

export interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<LenisRef>(null);

  // Synchronize Lenis with Framer Motion render loop:
  // By running lenis.raf on Framer Motion's frame.update, scroll transforms
  // (useScroll, useTransform) and parallax components are guaranteed frame-accurate
  // synchronization with zero frame delay or jitter.
  useEffect(() => {
    function update({ timestamp }: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(timestamp);
    }

    frame.update(update, true);

    return () => {
      cancelFrame(update);
    };
  }, []);

  const scrollTo = useCallback(
    (
      target: number | string | HTMLElement,
      options?: {
        offset?: number;
        immediate?: boolean;
        duration?: number;
        lock?: boolean;
      }
    ) => {
      lenisRef.current?.lenis?.scrollTo(target, options);
    },
    []
  );

  const stop = useCallback(() => {
    lenisRef.current?.lenis?.stop();
  }, []);

  const start = useCallback(() => {
    lenisRef.current?.lenis?.start();
  }, []);

  const resize = useCallback(() => {
    lenisRef.current?.lenis?.resize();
  }, []);

  const contextValue: SmoothScrollContextType = {
    get lenis() {
      return lenisRef.current?.lenis;
    },
    scrollTo,
    stop,
    start,
    resize,
  };

  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf={false}
      options={{
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.2,
        overscroll: true,
        respectReducedMotion: true,
        prevent: (node) => {
          return (
            node.hasAttribute("data-lenis-prevent") ||
            Boolean(node.closest("[data-lenis-prevent]"))
          );
        },
      }}
    >
      <SmoothScrollContext.Provider value={contextValue}>
        <RouteScrollResetHandler />
        {children}
      </SmoothScrollContext.Provider>
    </ReactLenis>
  );
}

export default SmoothScrollProvider;

