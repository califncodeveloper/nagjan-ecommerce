"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  Gauge,
  Sliders,
  CheckCircle2,
  Scale,
  Sparkles,
} from "lucide-react";
import { MachineryItem } from "@/types/machinery";

export interface MachineryCardProps {
  machinery: MachineryItem;
  onViewDetails: (item: MachineryItem) => void;
  isCompared?: boolean;
  onToggleCompare?: (item: MachineryItem) => void;
}

export function MachineryCard({
  machinery,
  onViewDetails,
  isCompared = false,
  onToggleCompare,
}: MachineryCardProps) {
  // Extract top 3 technical specifications
  const keySpecs = machinery.technicalSpecifications
    .filter((s) => s.highlight)
    .slice(0, 3);
  const displaySpecs =
    keySpecs.length >= 3
      ? keySpecs
      : machinery.technicalSpecifications.slice(0, 3);

  return (
    <article className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#013074]/40 transition-all flex flex-col h-full">
      {/* Machinery Image Header */}
      <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
        <Image
          src={machinery.primaryImage}
          alt={machinery.imageAlt || `${machinery.name} - ${machinery.model}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-95 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          {machinery.badge ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#013074]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
              <Sparkles className="size-3 text-[#FEA81D]" />
              <span>{machinery.badge}</span>
            </span>
          ) : (
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold tracking-wider uppercase border border-white/10">
              {machinery.machineType}
            </span>
          )}

          {/* Compare Checkbox / Button */}
          {onToggleCompare && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(machinery);
              }}
              aria-label={
                isCompared
                  ? `Remove ${machinery.model} from comparison`
                  : `Add ${machinery.model} to comparison`
              }
              className={`pointer-events-auto inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-semibold transition-colors border shadow-sm ${
                isCompared
                  ? "bg-[#FEA81D] text-slate-950 border-[#FEA81D]"
                  : "bg-white/90 backdrop-blur-sm text-slate-800 border-white/30 hover:bg-white"
              }`}
            >
              <Scale className="size-3" />
              <span>{isCompared ? "Compared" : "Compare"}</span>
            </button>
          )}
        </div>

        {/* Bottom Model & Availability Overlay */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="font-mono text-xs font-bold text-white tracking-wide bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
            {machinery.model}
          </span>
          <span className="text-[10px] font-medium text-slate-300">
            {machinery.category}
          </span>
        </div>
      </div>

      {/* Machinery Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Title & Short Description */}
          <div>
            <h3 className="text-base font-bold font-heading text-slate-900 group-hover:text-[#013074] transition-colors line-clamp-1">
              {machinery.name}
            </h3>
            <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
              {machinery.shortDescription}
            </p>
          </div>

          {/* Key 3 Technical Specifications Grid */}
          <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-200 space-y-1.5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <Gauge className="size-3 text-[#FEA81D]" />
              <span>Key Technical Parameters:</span>
            </div>
            <div className="grid grid-cols-1 gap-1 text-xs">
              {displaySpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between text-slate-700 py-0.5 border-b border-slate-100 last:border-b-0"
                >
                  <span className="text-[11px] text-slate-500 font-medium">
                    {spec.label}:
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-slate-900 text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Provenance Components Badges */}
          {machinery.componentBrands && machinery.componentBrands.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {machinery.componentBrands.slice(0, 3).map((brand) => (
                <span
                  key={brand}
                  className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-blue-50 text-[#013074] border border-blue-100 flex items-center gap-1"
                >
                  <CheckCircle2 className="size-2.5 text-[#FEA81D]" />
                  <span>{brand}</span>
                </span>
              ))}
              {machinery.componentBrands.length > 3 && (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                  +{machinery.componentBrands.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Dual Actions: View Details (Technical Highlights) + Request a Quote */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onViewDetails(machinery)}
            className="flex-1 py-2 px-3 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-semibold hover:border-[#013074] hover:text-[#013074] hover:bg-slate-50 transition-colors text-center inline-flex items-center justify-center gap-1.5"
          >
            <FileText className="size-3.5 text-slate-500" />
            <span>View Details</span>
          </button>

          <Link
            href={`/request-quote?product=${machinery.slug}`}
            className="flex-1 py-2 px-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 text-xs font-bold transition-all text-center inline-flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>Request Quote</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

