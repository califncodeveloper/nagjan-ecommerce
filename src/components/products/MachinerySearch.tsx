"use client";

import React from "react";
import { Search, X } from "lucide-react";

export interface MachinerySearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  totalResults?: number;
}

export function MachinerySearch({
  value,
  onChange,
  placeholder = "Search by model (e.g., SF-280, ZJ-V5B, WJ-100) or machinery name...",
  totalResults,
}: MachinerySearchProps) {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <label htmlFor="machinery-search" className="sr-only">
          Search Machinery Catalogue
        </label>
        <div className="absolute left-3.5 pointer-events-none text-slate-400">
          <Search className="size-4" />
        </div>
        <input
          id="machinery-search"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013074] focus:border-transparent transition-all shadow-sm"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="absolute right-3 p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>

      {typeof totalResults === "number" && (
        <div className="mt-1.5 flex justify-between items-center text-[11px] text-slate-500 px-1">
          <span>
            {value ? (
              <>
                Matches for &ldquo;<strong className="text-slate-700">{value}</strong>&rdquo;:
              </>
            ) : (
              "Available Industrial Units:"
            )}
          </span>
          <span className="font-mono font-semibold text-slate-700">
            {totalResults} {totalResults === 1 ? "machine" : "machines"}
          </span>
        </div>
      )}
    </div>
  );
}

