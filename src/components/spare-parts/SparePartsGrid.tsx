"use client";

import React from "react";
import { Boxes, RotateCcw } from "lucide-react";
import { SparePart } from "@/types/spare-parts";
import { SparePartsCard } from "./SparePartsCard";

interface SparePartsGridProps {
  parts: SparePart[];
  onResetFilters?: () => void;
}

export function SparePartsGrid({ parts, onResetFilters }: SparePartsGridProps) {
  if (parts.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-12 text-center max-w-lg mx-auto shadow-xs space-y-4">
        <div className="size-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
          <Boxes className="size-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-bold font-heading text-slate-900">
            No Spare Parts Found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            No items matched your current filter or search criteria. Try clearing search terms or selecting another category.
          </p>
        </div>
        {onResetFilters && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#013074] hover:bg-[#002255] text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
            >
              <RotateCcw className="size-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {parts.map((part) => (
        <SparePartsCard key={part.id} part={part} />
      ))}
    </div>
  );
}

