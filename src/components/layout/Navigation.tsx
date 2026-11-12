"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, ShoppingCart } from "lucide-react";
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
  const navContainerRef = useRef<HTMLDivElement>(null);
  const { itemCount, toggleCart } = useCart();

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
    <div ref={navContainerRef} className="relative bg-white border-b border-border">
      <Container size="default">
        <div className="flex items-center justify-between h-20">
          {/* Left: Authentic NAGJAN Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074] focus-visible:ring-offset-2 rounded-sm group"
              title="NAGJAN - Mount Kailash Printpack Machines"
              aria-label="NAGJAN Home"
            >
              <div className="relative flex items-center" style={{ width: 155, height: 50 }}>
                <Image
                  src="/logo/nagjan-logo.png"
                  alt="NAGJAN Industrial Corrugated Packaging Machinery"
                  width={155}
                  height={50}
                  priority
                  className="w-auto h-11 sm:h-12 object-contain"
                />
              </div>
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
                      {/* Active indicator bar */}
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
                      {/* Active indicator bar */}
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
            {/* Cart Trigger Button */}
            <button
              type="button"
              onClick={toggleCart}
              aria-label={`Open Spare Parts Cart (${itemCount} items)`}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#013074] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074]"
            >
              <ShoppingCart className="size-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 bg-[#FEA81D] text-slate-950 text-[10px] font-bold rounded-full border-2 border-white shadow-xs font-mono">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </button>

            {/* Desktop Request a Quote CTA */}
            <Link
              href="/request-quote"
              className="hidden sm:inline-flex items-center justify-center bg-[#FEA81D] hover:bg-[#E59516] active:bg-[#D4860D] text-[#0F172A] font-semibold text-sm px-5 py-2.5 rounded-md shadow-xs border border-amber-500/30 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074] focus-visible:ring-offset-2"
            >
              Request a Quote
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={onOpenMobileNav}
              aria-label="Open mobile navigation menu"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-[#013074] hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074]"
            >
              <Menu className="size-6 text-slate-800" />
            </button>
          </div>
        </div>
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
    </div>
  );
}

export default Navigation;

