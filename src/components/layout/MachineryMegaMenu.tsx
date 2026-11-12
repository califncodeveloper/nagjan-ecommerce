"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cog, Gauge, Zap, CheckCircle2 } from "lucide-react";
import { MACHINERY_NAV_DATA } from "@/data/navigation";

export interface MachineryMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MachineryMegaMenu({ isOpen, onClose }: MachineryMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Machinery Catalogue Menu"
      className="absolute top-full left-0 w-full bg-white border-b border-border shadow-2xl transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Columns (8 cols): Categorized Industrial Machinery Lines */}
          <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-6">
            {MACHINERY_NAV_DATA.map((category) => (
              <div key={category.id} className="space-y-3">
                <div className="border-b border-slate-100 pb-1.5 flex items-center justify-between">
                  <Link
                    href={`/products?category=${category.id}`}
                    onClick={onClose}
                    className="text-xs font-bold uppercase tracking-wider text-[#013074] font-heading flex items-center gap-1.5 hover:text-[#FEA81D] transition-colors"
                  >
                    <Cog className="size-3.5 text-[#FEA81D]" />
                    {category.name}
                  </Link>
                </div>

                <ul className="space-y-2.5">
                  {category.models.map((model) => (
                    <li key={model.model}>
                      <Link
                        href={model.href}
                        onClick={onClose}
                        className="group block p-2 rounded-md hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-[#013074] transition-colors flex items-center gap-1.5">
                            {model.name}
                          </span>
                          {model.badge && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-[#013074] border border-blue-200 uppercase tracking-tight">
                              {model.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {model.description}
                        </p>
                        <span className="text-[11px] font-mono font-medium text-slate-600 block mt-1 text-slate-400 group-hover:text-slate-600">
                          {model.specs}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column (4 cols): Flagship Machine Spotlight & Quick Navigation */}
          <div className="col-span-4 bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold tracking-wider uppercase text-blue-900 bg-blue-100 px-2.5 py-1 rounded">
                  Flagship Corrugator Line
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  July 2023 Spec
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 font-heading">
                WJ-100-1800 2PLY Production Line
              </h4>

              <div className="relative aspect-[16/10] w-full rounded-md overflow-hidden my-3 border border-slate-200 bg-slate-900">
                <Image
                  src="/images/products/wj_100_1800_2ply_plant__july__2023_img_1.jpg"
                  alt="WJ-100-1800 2PLY Single Corrugated Cardboard Production Line"
                  fill
                  sizes="(max-width: 1200px) 33vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 mt-2">
                <div className="flex items-center gap-2">
                  <Gauge className="size-3.5 text-[#FEA81D] shrink-0" />
                  <span>
                    <strong>Speed:</strong> 100 m/min Design (50-70 m/min Econ)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="size-3.5 text-[#FEA81D] shrink-0" />
                  <span>
                    <strong>Power:</strong> ~50 KW Connected (30 KW Actual load)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Drives:</strong> Siemens PLC & Inovance/ABB Inverters
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 space-y-2">
              <Link
                href="/products"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-[#013074] hover:bg-[#022557] text-white text-xs font-semibold py-2.5 px-4 rounded-md transition-colors"
              >
                <span>Explore Full Machinery Catalogue</span>
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
                href="/request-quote"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-1.5 bg-[#FEA81D] hover:bg-[#E59516] text-[#0F172A] text-xs font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Request Machine Quotation
              </Link>
            </div>
          </div>
        </div>

        {/* Mega Menu Footer Strip */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-700">Engineering Highlights:</span>
            <span>Heavy-Duty HT250 Cast Iron</span>
            <span>•</span>
            <span>Semi-Indian Siemens/ABB Motors</span>
            <span>•</span>
            <span>240+ Plants Operating in India</span>
          </div>

          <Link
            href="/products"
            onClick={onClose}
            className="text-[#013074] font-semibold hover:text-[#FEA81D] flex items-center gap-1 transition-colors"
          >
            <span>View All 20+ Machinery Lines</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MachineryMegaMenu;

