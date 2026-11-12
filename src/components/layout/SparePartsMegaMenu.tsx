"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Disc,
  CircleDot,
  Scissors,
  Cpu,
  Layers,
  Wrench,
  Boxes,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { SPARE_PARTS_NAV_DATA } from "@/data/navigation";

export interface SparePartsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SparePartsMegaMenu({ isOpen, onClose }: SparePartsMegaMenuProps) {
  if (!isOpen) return null;

  // Icon mapping for spare parts categories
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Disc className="size-4 text-[#FEA81D]" />;
      case 1:
        return <CircleDot className="size-4 text-[#FEA81D]" />;
      case 2:
        return <Layers className="size-4 text-[#FEA81D]" />;
      case 3:
        return <CircleDot className="size-4 text-[#FEA81D]" />;
      case 4:
        return <Scissors className="size-4 text-[#FEA81D]" />;
      case 5:
        return <Layers className="size-4 text-[#FEA81D]" />;
      case 6:
        return <Disc className="size-4 text-[#FEA81D]" />;
      case 7:
        return <Cpu className="size-4 text-[#FEA81D]" />;
      case 8:
        return <Wrench className="size-4 text-[#FEA81D]" />;
      default:
        return <Boxes className="size-4 text-[#FEA81D]" />;
    }
  };

  return (
    <div
      role="region"
      aria-label="Spare Parts Catalogue Menu"
      className="absolute top-full left-0 w-full bg-white border-b border-border shadow-2xl transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Grid (8 cols): 9 Verified Spare Parts Categories */}
          <div className="col-span-8">
            <div className="border-b border-slate-100 pb-2 mb-4 flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#013074] font-heading flex items-center gap-1.5">
                <Boxes className="size-4 text-[#FEA81D]" />
                Industrial Consumable Spare Parts (400+ SKUs)
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                Direct Dispatch from Madhavaram Godown
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {SPARE_PARTS_NAV_DATA.map((category, idx) => (
                <Link
                  key={category.name}
                  href={category.href}
                  onClick={onClose}
                  className="group p-3 rounded-lg border border-slate-200/80 hover:border-[#013074]/30 hover:bg-slate-50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(idx)}
                        <span className="text-xs font-semibold text-slate-900 group-hover:text-[#013074] transition-colors">
                          {category.name}
                        </span>
                      </div>
                      {category.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                          {category.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                      {category.description}
                    </p>
                  </div>

                  {category.itemCountNote && (
                    <span className="text-[10px] font-medium text-slate-400 mt-2 block">
                      {category.itemCountNote}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column (4 cols): Spares Depot Commitment & Quick Action */}
          <div className="col-span-4 bg-blue-50/60 p-6 rounded-lg border border-blue-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#013074]">
                <Truck className="size-5 text-[#FEA81D]" />
                <h4 className="text-sm font-bold font-heading uppercase tracking-wide">
                  Zero Downtime Spares Depot
                </h4>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed">
                Our dedicated <strong>Madhavaram Godown in Chennai</strong> maintains permanent inventory across 400+ critical corrugator components, wear parts, and electrical replacements.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Ready Stock Guarantee:</strong> Thin blades, slotting knives, MaxDura covers, and sensors.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Pan-India Dispatch:</strong> Emergency dispatch within 24 hours via air courier or express transport.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Universal Compatibility:</strong> Parts engineered for NAGJAN, Huayu, Xianghai & standard Indian corrugators.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-blue-200/60 space-y-2">
              <Link
                href="/spare-parts"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-[#013074] hover:bg-[#022557] text-white text-xs font-semibold py-2.5 px-4 rounded-md transition-colors"
              >
                <span>Explore All Spare Parts</span>
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/categories"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2 px-4 rounded-md transition-colors border border-slate-200"
              >
                Browse Master Directory
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#013074] border border-[#013074]/30 text-xs font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Inquire for Custom Part Dimensions
              </Link>
            </div>
          </div>
        </div>

        {/* Mega Menu Footer Strip */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-700">Fast Inquiries:</span>
            <span>Emergency Spares: <strong>+91-7299 20 7800</strong></span>
            <span>•</span>
            <span>Email Orders: <strong>sales@nagjan.com</strong></span>
          </div>

          <Link
            href="/spare-parts"
            onClick={onClose}
            className="text-[#013074] font-semibold hover:text-[#FEA81D] flex items-center gap-1 transition-colors"
          >
            <span>Browse Full Consumables Catalog</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SparePartsMegaMenu;

