"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { MachineryItem } from "@/types/machinery";

export interface MachineryCardProps {
  machinery: MachineryItem;
  onViewDetails?: (item: MachineryItem) => void;
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

  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-[#013074]/30 hover:shadow-xl flex flex-col h-full"
    >
      {/* Amber left-border glow on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FEA81D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-l-xl"
        aria-hidden="true"
      />

      {/* Machinery Image — taller aspect ratio */}
      <div className="relative aspect-[16/11] w-full bg-slate-900 overflow-hidden flex-shrink-0">
        <Link href={`/products/${machinery.slug}`} className="block w-full h-full relative" tabIndex={-1}>
          <Image
            src={machinery.primaryImage}
            alt={machinery.imageAlt || `${machinery.name} - ${machinery.model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-106 transition-transform duration-600 opacity-90 group-hover:opacity-100"
          />
          {/* Strong gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent pointer-events-none" />
        </Link>

        {/* Top: Badge (top-left) + Compare button (top-right) */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          {/* Navy pill badge */}
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#013074] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {machinery.badge ?? machinery.machineType}
          </span>

          {/* Compare Button */}
          {onToggleCompare && (
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleCompare(machinery);
              }}
              aria-label={
                isCompared
                  ? `Remove ${machinery.model} from comparison`
                  : `Add ${machinery.model} to comparison`
              }
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all shadow-sm border ${
                isCompared
                  ? "bg-[#FEA81D] text-slate-950 border-[#FEA81D]"
                  : "bg-white/90 backdrop-blur-sm text-slate-800 border-white/30 hover:bg-white"
              }`}
            >
              <Scale className="size-3" />
              <span>{isCompared ? "Added" : "Compare"}</span>
            </motion.button>
          )}
        </div>

        {/* Bottom of image: Model chip (amber monospace on dark glass) */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="font-mono text-xs font-bold text-[#FEA81D] bg-slate-950/75 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
            {machinery.model}
          </span>
          <span className="text-[10px] font-semibold text-slate-300 bg-slate-950/50 backdrop-blur-sm px-2 py-0.5 rounded">
            {machinery.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-3">
          {/* Machine name + 1-line description */}
          <div>
            <Link href={`/products/${machinery.slug}`} className="block" onClick={() => onViewDetails?.(machinery)}>
              <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-[#013074] transition-colors line-clamp-1 leading-tight">
                {machinery.name}
              </h3>
            </Link>
            <p className="mt-1 text-xs text-slate-500 line-clamp-1 leading-relaxed">
              {machinery.shortDescription}
            </p>
          </div>

          {/* Specs: 3 key specs in horizontal row with amber dot separators */}
          {displaySpecs.length > 0 && (
            <div className="flex items-stretch divide-x divide-slate-100 bg-slate-50 rounded-lg border border-slate-100 overflow-hidden">
              {displaySpecs.map((spec, i) => (
                <div
                  key={spec.label}
                  className="flex-1 flex flex-col items-center justify-center px-2 py-2.5 min-w-0"
                >
                  <span className="font-mono font-bold text-[#013074] text-xs leading-tight text-center truncate w-full text-center">
                    {spec.value}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium mt-0.5 text-center truncate w-full leading-tight">
                    {spec.label}
                  </span>
                  {i < displaySpecs.length - 1 && (
                    <span className="sr-only">·</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action buttons with micro-interactions */}
        <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
            <Link
              href={`/products/${machinery.slug}`}
              onClick={() => onViewDetails?.(machinery)}
              className="w-full py-2 px-3 rounded-lg border border-[#013074] text-[#013074] bg-white text-xs font-bold hover:bg-[#013074] hover:text-white transition-all text-center inline-flex items-center justify-center gap-1.5"
            >
              <span>View Details</span>
              <ArrowRight className="size-3" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
            <Link
              href={`/request-quote?product=${machinery.slug}`}
              className="w-full py-2 px-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 text-xs font-bold transition-all text-center inline-flex items-center justify-center gap-1.5 shadow-sm"
            >
              <FileText className="size-3" />
              <span>Get Quote</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
