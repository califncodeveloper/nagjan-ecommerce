"use client";

import React, { useState } from "react";
import { Filter, SlidersHorizontal, RotateCcw, ChevronDown, Check } from "lucide-react";
import { MACHINERY_CATEGORIES } from "@/data/machinery";
import { MachineType } from "@/types/machinery";

export interface MachineryFiltersProps {
  selectedCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  selectedMachineType: string;
  onSelectMachineType: (type: string) => void;
  sortBy: "featured" | "name-asc" | "name-desc" | "category";
  onSelectSortBy: (sort: "featured" | "name-asc" | "name-desc" | "category") => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  categoryCounts?: Record<string, number>;
}

const MACHINE_TYPES: { label: string; value: string }[] = [
  { label: "All Types", value: "all" },
  { label: "Complete Lines", value: "Complete Line" },
  { label: "Single Facers", value: "Single Facer" },
  { label: "Mill Roll Stands", value: "Mill Roll Stand" },
  { label: "Cut-Off & Stacking", value: "Cut-Off & Stacking" },
  { label: "Converting & Finishing", value: "Converting & Finishing" },
];

export function MachineryFilters({
  selectedCategory,
  onSelectCategory,
  selectedMachineType,
  onSelectMachineType,
  sortBy,
  onSelectSortBy,
  onClearFilters,
  hasActiveFilters,
  categoryCounts = {},
}: MachineryFiltersProps) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* Desktop & Tablet Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4">
        {/* Top Control Bar: Category Pills & Mobile Toggle */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Category Tabs (Desktop / Tablet Scroll) */}
          <div className="w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            <div className="flex items-center gap-1.5 min-w-max">
              <button
                type="button"
                onClick={() => onSelectCategory("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedCategory === "all"
                    ? "bg-[#013074] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>All Categories</span>
                {categoryCounts.all !== undefined && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      selectedCategory === "all"
                        ? "bg-white/20 text-white"
                        : "bg-white text-slate-600"
                    }`}
                  >
                    {categoryCounts.all}
                  </span>
                )}
              </button>

              {MACHINERY_CATEGORIES.map((cat) => {
                const isActive =
                  selectedCategory === cat.slug ||
                  (cat.aliases && cat.aliases.includes(selectedCategory));
                const count = categoryCounts[cat.slug] || 0;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => onSelectCategory(cat.slug)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#013074] text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    <span>{cat.title}</span>
                    {count > 0 && (
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-white text-slate-600"
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Utilities: Mobile Toggle, Clear Filters */}
          <div className="flex items-center justify-between w-full md:w-auto gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
            {/* Mobile Filter Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
            >
              <SlidersHorizontal className="size-3.5 text-[#FEA81D]" />
              <span>Filters & Sorting</span>
              <ChevronDown
                className={`size-3.5 transition-transform ${
                  isMobileFiltersOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Clear Filters (visible if active) */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onClearFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-800 transition-colors ml-auto md:ml-0"
              >
                <RotateCcw className="size-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Secondary Filter Row: Machine Type & Sort by Dropdown */}
        <div
          className={`pt-3 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 ${
            isMobileFiltersOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Machine Type Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Machine Type:
            </span>
            <div className="flex flex-wrap gap-1">
              {MACHINE_TYPES.map((type) => {
                const isActive = selectedMachineType === type.value;
                return (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => onSelectMachineType(type.value)}
                    className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-slate-900 text-white font-semibold"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <label
              htmlFor="machinery-sort"
              className="text-[11px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap"
            >
              Sort By:
            </label>
            <select
              id="machinery-sort"
              value={sortBy}
              onChange={(e) =>
                onSelectSortBy(
                  e.target.value as "featured" | "name-asc" | "name-desc" | "category"
                )
              }
              className="text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#013074]"
            >
              <option value="featured">Featured / Engineering Flagship</option>
              <option value="name-asc">Model & Name (A → Z)</option>
              <option value="name-desc">Model & Name (Z → A)</option>
              <option value="category">Category Grouping</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

