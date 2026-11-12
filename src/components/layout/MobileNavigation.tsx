"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  ChevronDown,
  Phone,
  Wrench,
  Mail,
  MapPin,
  ArrowRight,
  Cog,
  Boxes,
  ShoppingCart,
} from "lucide-react";
import {
  COMPANY_CONTACT,
  MACHINERY_NAV_DATA,
  SPARE_PARTS_NAV_DATA,
} from "@/data/navigation";
import { useCart } from "@/hooks/useCart";

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const [machineryOpen, setMachineryOpen] = useState(false);
  const [sparePartsOpen, setSparePartsOpen] = useState(false);
  const { itemCount } = useCart();

  // Close drawer on path change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer Container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 z-10">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-slate-50">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center"
            aria-label="NAGJAN Home"
          >
            <div className="relative flex items-center" style={{ width: 120, height: 40 }}>
              <Image
                src="/logo/nagjan-logo.png"
                alt="NAGJAN Logo"
                width={120}
                height={40}
                className="w-auto h-9 object-contain"
              />
            </div>
          </Link>

          <div className="flex items-center gap-1">
            <Link
              href="/cart"
              onClick={onClose}
              aria-label={`View Shopping Cart (${itemCount} items)`}
              className="relative p-2 rounded-md text-slate-700 hover:text-[#013074] hover:bg-slate-200/60 transition-colors"
            >
              <ShoppingCart className="size-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-[#FEA81D] text-slate-950 text-[10px] font-bold rounded-full font-mono">
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074]"
            >
              <X className="size-6 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {/* Quick Primary Links */}
          <nav aria-label="Mobile Menu Links" className="space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className={`flex items-center justify-between px-3 min-h-[44px] text-sm font-semibold rounded-md transition-colors ${
                pathname === "/"
                  ? "bg-slate-100 text-[#013074]"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              <span>Home</span>
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className={`flex items-center justify-between px-3 min-h-[44px] text-sm font-semibold rounded-md transition-colors ${
                pathname === "/about"
                  ? "bg-slate-100 text-[#013074]"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              <span>About Us</span>
            </Link>

            {/* Accordion: Machinery */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setMachineryOpen((prev) => !prev)}
                aria-expanded={machineryOpen}
                className="w-full flex items-center justify-between px-3 min-h-[44px] text-sm font-semibold text-slate-900 bg-slate-50/80 hover:bg-slate-100 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <Cog className="size-4 text-[#FEA81D]" />
                  <span>Machinery Lines</span>
                </div>
                <ChevronDown
                  className={`size-4 text-slate-500 transition-transform duration-200 ${
                    machineryOpen ? "rotate-180 text-[#FEA81D]" : ""
                  }`}
                />
              </button>

              {machineryOpen && (
                <div className="p-3 bg-white space-y-4 border-t border-slate-200 animate-in fade-in duration-200">
                  {MACHINERY_NAV_DATA.map((cat) => (
                    <div key={cat.id} className="space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#013074]">
                        {cat.name}
                      </p>
                      <ul className="space-y-1">
                        {cat.models.map((model) => (
                          <li key={model.model}>
                            <Link
                              href={model.href}
                              onClick={onClose}
                              className="block p-2 rounded text-xs text-slate-700 hover:text-[#013074] hover:bg-slate-50"
                            >
                              <div className="font-semibold text-slate-900">
                                {model.name}
                              </div>
                              <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                                {model.specs}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href="/products"
                      onClick={onClose}
                      className="flex items-center justify-between text-xs font-semibold text-[#013074] hover:text-[#FEA81D] py-1"
                    >
                      <span>Explore All Machinery Catalogue</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion: Spare Parts */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setSparePartsOpen((prev) => !prev)}
                aria-expanded={sparePartsOpen}
                className="w-full flex items-center justify-between px-3 min-h-[44px] text-sm font-semibold text-slate-900 bg-slate-50/80 hover:bg-slate-100 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <Boxes className="size-4 text-[#FEA81D]" />
                  <span>Spare Parts & Consumables</span>
                </div>
                <ChevronDown
                  className={`size-4 text-slate-500 transition-transform duration-200 ${
                    sparePartsOpen ? "rotate-180 text-[#FEA81D]" : ""
                  }`}
                />
              </button>

              {sparePartsOpen && (
                <div className="p-3 bg-white space-y-2 border-t border-slate-200 animate-in fade-in duration-200">
                  <ul className="grid grid-cols-1 gap-1">
                    {SPARE_PARTS_NAV_DATA.map((part) => (
                      <li key={part.name}>
                        <Link
                          href={part.href}
                          onClick={onClose}
                          className="flex items-center justify-between p-2 rounded text-xs text-slate-800 hover:bg-slate-50 hover:text-[#013074]"
                        >
                          <span className="font-medium">{part.name}</span>
                          {part.itemCountNote && (
                            <span className="text-[10px] text-slate-400">
                              {part.itemCountNote}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href="/spare-parts"
                      onClick={onClose}
                      className="flex items-center justify-between text-xs font-semibold text-[#013074] hover:text-[#FEA81D] py-1"
                    >
                      <span>View All Spare Parts (400+ SKUs)</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/categories"
              onClick={onClose}
              className={`flex items-center justify-between px-3 min-h-[44px] text-sm font-semibold rounded-md transition-colors ${
                pathname === "/categories"
                  ? "bg-slate-100 text-[#013074]"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              <span>Categories Directory</span>
            </Link>

            <Link
              href="/services"
              onClick={onClose}
              className={`flex items-center justify-between px-3 min-h-[44px] text-sm font-semibold rounded-md transition-colors ${
                pathname === "/services"
                  ? "bg-slate-100 text-[#013074]"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              <span>Services & Support</span>
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className={`flex items-center justify-between px-3 min-h-[44px] text-sm font-semibold rounded-md transition-colors ${
                pathname === "/contact"
                  ? "bg-slate-100 text-[#013074]"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              <span>Contact Us</span>
            </Link>
          </nav>

          {/* Contact & Support Section */}
          <div className="pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600">
            <p className="font-bold text-[#013074] uppercase tracking-wider text-[11px]">
              Direct Support & Hotline
            </p>

            <a
              href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              <Phone className="size-4 text-[#FEA81D] shrink-0" />
              <div>
                <span className="text-[11px] text-slate-500 block">Sales Desk:</span>
                <span className="font-semibold text-slate-900 tabular-nums">
                  {COMPANY_CONTACT.phones.sales.display}
                </span>
              </div>
            </a>

            <a
              href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              <Wrench className="size-4 text-[#FEA81D] shrink-0" />
              <div>
                <span className="text-[11px] text-slate-500 block">Service & Spares Depot:</span>
                <span className="font-semibold text-slate-900 tabular-nums">
                  {COMPANY_CONTACT.phones.service.display}
                </span>
              </div>
            </a>

            <a
              href={`mailto:${COMPANY_CONTACT.email.sales}`}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              <Mail className="size-4 text-[#FEA81D] shrink-0" />
              <div>
                <span className="text-[11px] text-slate-500 block">Official Email:</span>
                <span className="font-semibold text-slate-900">
                  {COMPANY_CONTACT.email.sales}
                </span>
              </div>
            </a>

            <div className="flex items-start gap-2 p-2 text-slate-500 text-[11px]">
              <MapPin className="size-4 text-[#FEA81D] shrink-0 mt-0.5" />
              <span>Madhavaram Assembly Godown & Spares Depot, Chennai</span>
            </div>
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-slate-200 bg-slate-50">
          <Link
            href="/request-quote"
            onClick={onClose}
            className="w-full min-h-[44px] flex items-center justify-center bg-[#FEA81D] hover:bg-[#E59516] active:bg-[#D4860D] text-[#0F172A] font-semibold text-sm px-4 py-2.5 rounded-md shadow-xs border border-amber-500/30 transition-colors text-center"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;

