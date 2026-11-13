"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ShoppingCart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";
import { MachineryMegaMenu } from "./MachineryMegaMenu";
import { SparePartsMegaMenu } from "./SparePartsMegaMenu";
import { PRIMARY_NAV_LINKS } from "@/data/navigation";
import { useCart } from "@/hooks/useCart";

export interface NavigationProps {
  onOpenMobileNav: () => void;
}

export function Navigation({ onOpenMobileNav }: NavigationProps) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<"machinery" | "spare-parts" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const { itemCount, toggleCart } = useCart();

  // Scroll detection for sticky enhancement
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menus on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close menu when pathname changes
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  const handleMenuToggle = (menu: "machinery" | "spare-parts") => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <motion.div
      ref={navContainerRef}
      animate={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 1)",
      }}
      className={`relative transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md shadow-md border-b-2 border-[#FEA81D]/30"
          : "border-b border-border"
      }`}
    >
      <Container size="default">
        <motion.div
          animate={{
            height: isScrolled ? 64 : 80,
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between"
        >
          {/* Left: Authentic NAGJAN Logo with smooth shrink scaling */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074] focus-visible:ring-offset-2 rounded-sm group"
              title="NAGJAN - Mount Kailash Printpack Machines"
              aria-label="NAGJAN Home"
            >
              <motion.div
                animate={{
                  scale: isScrolled ? 0.88 : 1,
                  y: isScrolled ? -1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center origin-left"
                style={{ width: 165, height: 56 }}
              >
                <Image
                  src="/logo/nagjan-logo.png"
                  alt="NAGJAN Industrial Corrugated Packaging Machinery"
                  width={165}
                  height={56}
                  priority
                  className="w-auto h-12 sm:h-14 object-contain transition-transform group-hover:scale-102"
                />
              </motion.div>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links (Hidden on Mobile/Tablet < 1024px) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {PRIMARY_NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.label === "Machinery") {
                const isMenuOpen = activeMenu === "machinery";
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveMenu("machinery")}
                  >
                    <button
                      type="button"
                      onClick={() => handleMenuToggle("machinery")}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleMenuToggle("machinery");
                        }
                      }}
                      aria-expanded={isMenuOpen}
                      aria-haspopup="true"
                      className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074] ${
                        isMenuOpen || isActive
                          ? "text-[#013074] bg-slate-50"
                          : "text-slate-800 hover:text-[#013074] hover:bg-slate-50/80"
                      }`}
                    >
                      <span>Machinery</span>
                      <ChevronDown
                        className={`size-4 transition-transform duration-200 text-slate-400 group-hover:text-[#013074] ${
                          isMenuOpen ? "rotate-180 text-[#FEA81D]" : ""
                        }`}
                      />
                      {/* Active indicator bar — 3px amber */}
                      {(isMenuOpen || isActive) && (
                        <span className="absolute bottom-[-16px] left-3.5 right-3.5 h-[3px] bg-[#FEA81D] rounded-t-sm" />
                      )}
                    </button>
                  </div>
                );
              }

              if (link.label === "Spare Parts") {
                const isMenuOpen = activeMenu === "spare-parts";
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveMenu("spare-parts")}
                  >
                    <button
                      type="button"
                      onClick={() => handleMenuToggle("spare-parts")}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleMenuToggle("spare-parts");
                        }
                      }}
                      aria-expanded={isMenuOpen}
                      aria-haspopup="true"
                      className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074] ${
                        isMenuOpen || isActive
                          ? "text-[#013074] bg-slate-50"
                          : "text-slate-800 hover:text-[#013074] hover:bg-slate-50/80"
                      }`}
                    >
                      <span>Spare Parts</span>
                      <ChevronDown
                        className={`size-4 transition-transform duration-200 text-slate-400 group-hover:text-[#013074] ${
                          isMenuOpen ? "rotate-180 text-[#FEA81D]" : ""
                        }`}
                      />
                      {/* Active indicator bar — 3px amber */}
                      {(isMenuOpen || isActive) && (
                        <span className="absolute bottom-[-16px] left-3.5 right-3.5 h-[3px] bg-[#FEA81D] rounded-t-sm" />
                      )}
                    </button>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setActiveMenu(null)}
                  className={`relative inline-flex items-center px-3.5 py-2 text-sm font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074] ${
                    isActive
                      ? "text-[#013074] bg-slate-50"
                      : "text-slate-800 hover:text-[#013074] hover:bg-slate-50/80"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-[-16px] left-3.5 right-3.5 h-[3px] bg-[#FEA81D] rounded-t-sm" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Cart Button + Request a Quote CTA Button + Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart Trigger Button with spring micro-interaction */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={toggleCart}
              aria-label={`Open Spare Parts Cart (${itemCount} items)`}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#013074] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074]"
            >
              <ShoppingCart className="size-5" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 bg-[#FEA81D] text-slate-950 text-[10px] font-bold rounded-full border-2 border-white shadow-sm font-mono"
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </motion.span>
              )}
            </motion.button>

            {/* Desktop Request a Quote CTA with spring micro-interaction */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-block"
            >
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 bg-[#FEA81D] hover:bg-[#E59516] active:bg-[#D4860D] text-[#0F172A] font-bold text-sm px-6 py-2.5 rounded-md shadow-sm border border-amber-500/30 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074] focus-visible:ring-offset-2 group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Mobile Hamburger Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={onOpenMobileNav}
              aria-label="Open mobile navigation menu"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#013074] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074]"
            >
              <Menu className="size-6 text-slate-800" />
            </motion.button>
          </div>
        </motion.div>
      </Container>

      {/* Mega Menus rendered as dropdown beneath the navigation container */}
      <MachineryMegaMenu
        isOpen={activeMenu === "machinery"}
        onClose={() => setActiveMenu(null)}
      />
      <SparePartsMegaMenu
        isOpen={activeMenu === "spare-parts"}
        onClose={() => setActiveMenu(null)}
      />
    </motion.div>
  );
}

export default Navigation;
