"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { SparePartsHero } from "@/components/spare-parts/SparePartsHero";
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
      {/* Hero Banner */}
      <SparePartsHero />

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

