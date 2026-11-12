"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  X,
  SlidersHorizontal,
  RotateCcw,
  Tag,
  Boxes,
} from "lucide-react";
import {
  SparePartsFilterState,
  SparePartsSortOption,
  SparePartCategory,
} from "@/types/spare-parts";

interface SparePartsFiltersProps {
  categories: SparePartCategory[];
  filterState: SparePartsFilterState;
  onFilterChange: (updates: Partial<SparePartsFilterState>) => void;
  onResetFilters: () => void;
  totalCount: number;
  filteredCount: number;
  categoryCounts: Record<string, number>;
}

export function SparePartsFilters({
  categories,
  filterState,
  onFilterChange,
  onResetFilters,
  totalCount,
  filteredCount,
  categoryCounts,
}: SparePartsFiltersProps) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const hasActiveFilters =
    filterState.searchQuery.trim() !== "" ||
    filterState.category !== "all" ||
    filterState.priceFilter !== "all" ||
    filterState.sortBy !== "default";

  return (
    <div className="space-y-4">
      {/* Top Search & Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input
            type="text"
            value={filterState.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            placeholder="Search by part name, SKU, category, or dimension (OD, ID)..."
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#013074] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
          />
          {filterState.searchQuery && (
            <button
              type="button"
              onClick={() => onFilterChange({ searchQuery: "" })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {/* Desktop Controls & Mobile Drawer Trigger */}
        <div className="flex items-center gap-2">
          {/* Mobile Filter Drawer Button */}
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
            className="md:hidden flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold text-slate-800 transition-colors"
          >
            <SlidersHorizontal className="size-3.5 text-[#013074]" />
            <span>Filters &amp; Categories</span>
            {hasActiveFilters && (
              <span className="size-2 bg-[#FEA81D] rounded-full" />
            )}
          </button>

          {/* Pricing Filter Buttons (Desktop) */}
          <div className="hidden lg:flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
            <button
              type="button"
              onClick={() => onFilterChange({ priceFilter: "all" })}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterState.priceFilter === "all"
                  ? "bg-white text-[#013074] shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Parts
            </button>
            <button
              type="button"
              onClick={() => onFilterChange({ priceFilter: "priced" })}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterState.priceFilter === "priced"
                  ? "bg-white text-[#013074] shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Buy Online (INR)
            </button>
            <button
              type="button"
              onClick={() => onFilterChange({ priceFilter: "quote" })}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterState.priceFilter === "quote"
                  ? "bg-white text-[#013074] shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Enquiry Only
            </button>
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-1.5 shrink-0">
            <label htmlFor="sort-select" className="text-xs text-slate-500 hidden sm:inline">
              Sort:
            </label>
            <select
              id="sort-select"
              value={filterState.sortBy}
              onChange={(e) =>
                onFilterChange({ sortBy: e.target.value as SparePartsSortOption })
              }
              className="py-2 px-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#013074]"
            >
              <option value="default">Default Order</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Horizontal Pill Navigation (Desktop & Tablet) */}
      <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <button
          type="button"
          onClick={() => onFilterChange({ category: "all" })}
          className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            filterState.category === "all"
              ? "bg-[#013074] text-white shadow-xs"
              : "bg-white border border-slate-200 text-slate-700 hover:border-[#013074] hover:bg-slate-50"
          }`}
        >
          <span>All Categories</span>
          <span
            className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
              filterState.category === "all"
                ? "bg-white/20 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {totalCount}
          </span>
        </button>

        {categories.map((cat) => {
          const count = categoryCounts[cat.slug] || 0;
          const isActive = filterState.category === cat.slug;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onFilterChange({ category: cat.slug })}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? "bg-[#013074] text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-700 hover:border-[#013074] hover:bg-slate-50"
              }`}
            >
              <span>{cat.name}</span>
              {count > 0 && (
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Filters Summary & Result Count */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900">
            Showing {filteredCount} of {totalCount} spare parts
          </span>

          {filterState.category !== "all" && (
            <span className="inline-flex items-center gap-1 bg-blue-50 border border-blue-200 text-[#013074] px-2 py-0.5 rounded-md font-medium">
              <span>
                {categories.find((c) => c.slug === filterState.category)?.name}
              </span>
              <button
                type="button"
                onClick={() => onFilterChange({ category: "all" })}
                className="hover:text-blue-900"
              >
                <X className="size-3" />
              </button>
            </span>
          )}

          {filterState.priceFilter !== "all" && (
            <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2 py-0.5 rounded-md font-medium">
              <span>
                {filterState.priceFilter === "priced"
                  ? "Verified Pricing Only"
                  : "Enquiry Only"}
              </span>
              <button
                type="button"
                onClick={() => onFilterChange({ priceFilter: "all" })}
                className="hover:text-amber-950"
              >
                <X className="size-3" />
              </button>
            </span>
          )}

          {filterState.searchQuery && (
            <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 text-slate-800 px-2 py-0.5 rounded-md font-medium">
              <span>&ldquo;{filterState.searchQuery}&rdquo;</span>
              <button
                type="button"
                onClick={() => onFilterChange({ searchQuery: "" })}
                className="hover:text-black"
              >
                <X className="size-3" />
              </button>
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-[#013074] font-semibold transition-colors"
          >
            <RotateCcw className="size-3" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Mobile Filters Drawer */}
      {mobileDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filter Spare Parts"
          className="fixed inset-0 z-50 flex justify-end md:hidden"
        >
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right z-10">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-4 text-[#013074]" />
                <h3 className="text-sm font-bold font-heading text-slate-900">
                  Filters &amp; Categories
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 rounded text-slate-500 hover:text-slate-900"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs">
              {/* Pricing Filter */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Pricing &amp; Purchase
                </h4>
                <div className="space-y-1">
                  {[
                    { key: "all", label: "All Spare Parts" },
                    { key: "priced", label: "Buy Online (Verified INR Price)" },
                    { key: "quote", label: "Enquiry Only (Custom Dimensions)" },
                  ].map((opt) => (
                    <label
                      key={opt.key}
                      className="flex items-center gap-2 p-2 rounded hover:bg-slate-50 cursor-pointer text-slate-700"
                    >
                      <input
                        type="radio"
                        name="mobilePriceFilter"
                        checked={filterState.priceFilter === opt.key}
                        onChange={() =>
                          onFilterChange({
                            priceFilter: opt.key as "all" | "priced" | "quote",
                          })
                        }
                        className="text-[#013074] focus:ring-[#013074]"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Categories
                </h4>
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => {
                      onFilterChange({ category: "all" });
                      setMobileDrawerOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded text-left transition-colors ${
                      filterState.category === "all"
                        ? "bg-blue-50 text-[#013074] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>All Categories</span>
                    <span className="font-mono text-[10px] text-slate-500">
                      {totalCount}
                    </span>
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        onFilterChange({ category: cat.slug });
                        setMobileDrawerOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded text-left transition-colors ${
                        filterState.category === cat.slug
                          ? "bg-blue-50 text-[#013074] font-bold"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="font-mono text-[10px] text-slate-500">
                        {categoryCounts[cat.slug] || 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center gap-2">
              <button
                type="button"
                onClick={onResetFilters}
                className="flex-1 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-100"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                className="flex-1 py-2 text-xs font-semibold text-white bg-[#013074] rounded-md hover:bg-[#002255]"
              >
                Apply ({filteredCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

