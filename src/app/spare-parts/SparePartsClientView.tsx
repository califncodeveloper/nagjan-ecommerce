"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SparePartsFilters } from "@/components/spare-parts/SparePartsFilters";
import { SparePartsGrid } from "@/components/spare-parts/SparePartsGrid";
import { SparePartsEnquiryCTA } from "@/components/spare-parts/SparePartsEnquiryCTA";
import { SPARE_PARTS_ITEMS } from "@/data/spare-parts";
import { SPARE_PARTS_CATEGORIES } from "@/data/spare-parts-categories";
import {
  SparePartsFilterState,
  SparePartsSortOption,
} from "@/types/spare-parts";
import { filterAndSortSpareParts } from "@/lib/spare-parts-utils";

export function SparePartsClientView() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlCategory = searchParams.get("category") || "all";
  const urlSearch = searchParams.get("search") || "";

  const [filterState, setFilterState] = useState<SparePartsFilterState>({
    searchQuery: urlSearch,
    category: urlCategory,
    priceFilter: "all",
    sortBy: "default",
  });

  // Sync category from URL parameter when changed externally
  useEffect(() => {
    if (urlCategory !== filterState.category) {
      setFilterState((prev) => ({ ...prev, category: urlCategory }));
    }
  }, [urlCategory]);

  const handleFilterChange = (updates: Partial<SparePartsFilterState>) => {
    setFilterState((prev) => {
      const next = { ...prev, ...updates };

      // Update URL query parameters shallowly
      const params = new URLSearchParams();
      if (next.category && next.category !== "all") {
        params.set("category", next.category);
      }
      if (next.searchQuery.trim()) {
        params.set("search", next.searchQuery.trim());
      }
      const newQuery = params.toString();
      const targetUrl = newQuery ? `/spare-parts?${newQuery}` : "/spare-parts";
      window.history.replaceState(null, "", targetUrl);

      return next;
    });
  };

  const handleResetFilters = () => {
    setFilterState({
      searchQuery: "",
      category: "all",
      priceFilter: "all",
      sortBy: "default",
    });
    window.history.replaceState(null, "", "/spare-parts");
  };

  // Derive dynamic category counts from the catalogue
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const part of SPARE_PARTS_ITEMS) {
      counts[part.category] = (counts[part.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filter and sort items
  const filteredParts = useMemo(() => {
    return filterAndSortSpareParts(SPARE_PARTS_ITEMS, filterState);
  }, [filterState]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Breadcrumbs Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <Container size="default">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#013074] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3.5 text-slate-400" />
              </li>
              <li className="text-slate-900 font-semibold" aria-current="page">
                Spare Parts
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Page Title Header */}
      <div className="bg-white border-b border-slate-200 py-6 sm:py-8">
        <Container size="default">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
                Industrial Spare Parts &amp; Consumables
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
                Authentic replacement components, wear parts, and electrical consumables with ready stock dispatch from Chennai depot.
              </p>
            </div>
            <a
              href="tel:+917299207800"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs transition-all shadow-xs self-start sm:self-auto"
            >
              <Phone className="size-3.5" />
              <span>Spares Hotline: +91-7299 20 7800</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Content Area */}
      <div className="py-8 sm:py-12">
        <Container size="default">
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <SparePartsFilters
              categories={SPARE_PARTS_CATEGORIES}
              filterState={filterState}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              totalCount={SPARE_PARTS_ITEMS.length}
              filteredCount={filteredParts.length}
              categoryCounts={categoryCounts}
            />

            {/* Product Cards Grid */}
            <SparePartsGrid
              parts={filteredParts}
              onResetFilters={handleResetFilters}
            />

            {/* Bottom Support & Godown Contact Callout */}
            <SparePartsEnquiryCTA />
          </div>
        </Container>
      </div>
    </div>
  );
}

