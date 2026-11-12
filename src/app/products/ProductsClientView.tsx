"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ChevronRight,
  FileText,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  SlidersHorizontal,
  Layers,
  ArrowRight,
  Award,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { MACHINERY_ITEMS, MACHINERY_CATEGORIES } from "@/data/machinery";
import { MachineryItem } from "@/types/machinery";
import { MachineryGrid } from "@/components/products/MachineryGrid";
import { MachineryFilters } from "@/components/products/MachineryFilters";
import { MachinerySearch } from "@/components/products/MachinerySearch";
import { TechnicalHighlights } from "@/components/products/TechnicalHighlights";
import { MachineryCompare } from "@/components/products/MachineryCompare";
import { COMPANY_CONTACT } from "@/data/navigation";

export function ProductsClientView() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategoryParam = searchParams.get("category") || "all";
  const initialViewParam = searchParams.get("view");

  // State management
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMachineType, setSelectedMachineType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<
    "featured" | "name-asc" | "name-desc" | "category"
  >("featured");

  // Modal & Comparison state
  const [selectedItemForDetails, setSelectedItemForDetails] =
    useState<MachineryItem | null>(null);
  const [comparedItems, setComparedItems] = useState<MachineryItem[]>([]);

  // Synchronize category from URL parameter on initial load or param change
  useEffect(() => {
    if (initialCategoryParam && initialCategoryParam !== "all") {
      // Find matching canonical category or alias
      const matchingCategory = MACHINERY_CATEGORIES.find(
        (cat) =>
          cat.slug === initialCategoryParam ||
          (cat.aliases && cat.aliases.includes(initialCategoryParam))
      );
      if (matchingCategory) {
        setSelectedCategory(matchingCategory.slug);
      } else {
        setSelectedCategory(initialCategoryParam);
      }
    } else {
      setSelectedCategory("all");
    }
  }, [initialCategoryParam]);

  // Synchronize initial view parameter if present
  useEffect(() => {
    if (initialViewParam) {
      const match = MACHINERY_ITEMS.find(
        (item) => item.slug === initialViewParam || item.id === initialViewParam
      );
      if (match) {
        setSelectedItemForDetails(match);
      }
    }
  }, [initialViewParam]);

  // Handle Category selection with URL synchronization
  const handleSelectCategory = useCallback(
    (catSlug: string) => {
      setSelectedCategory(catSlug);
      const url = new URL(window.location.href);
      if (catSlug === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", catSlug);
      }
      router.push(url.pathname + (url.search ? url.search : ""), {
        scroll: false,
      });
    },
    [router]
  );

  // Clear all filters
  const handleClearFilters = useCallback(() => {
    setSelectedCategory("all");
    setSelectedMachineType("all");
    setSearchQuery("");
    setSortBy("featured");
    const url = new URL(window.location.href);
    url.searchParams.delete("category");
    url.searchParams.delete("view");
    router.push(url.pathname, { scroll: false });
  }, [router]);

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedMachineType !== "all" ||
    searchQuery.trim().length > 0 ||
    sortBy !== "featured";

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: MACHINERY_ITEMS.length,
    };
    MACHINERY_CATEGORIES.forEach((cat) => {
      counts[cat.slug] = MACHINERY_ITEMS.filter(
        (item) =>
          item.categorySlug === cat.slug ||
          (cat.aliases && cat.aliases.includes(item.categorySlug))
      ).length;
    });
    return counts;
  }, []);

  // Filter and Sort machinery items
  const filteredMachinery = useMemo(() => {
    return MACHINERY_ITEMS.filter((item) => {
      // 1. Category Filter
      if (selectedCategory !== "all") {
        const cat = MACHINERY_CATEGORIES.find(
          (c) =>
            c.slug === selectedCategory ||
            (c.aliases && c.aliases.includes(selectedCategory))
        );
        const matchesCategory =
          item.categorySlug === selectedCategory ||
          (cat && cat.slug === item.categorySlug) ||
          (cat && cat.aliases.includes(item.categorySlug));
        if (!matchesCategory) return false;
      }

      // 2. Machine Type Filter
      if (
        selectedMachineType !== "all" &&
        item.machineType !== selectedMachineType
      ) {
        return false;
      }

      // 3. Search Query (matches name, model, specs, brands, description)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesModel = item.model.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription.toLowerCase().includes(query);
        const matchesSpecs = item.technicalSpecifications.some(
          (s) =>
            s.label.toLowerCase().includes(query) ||
            s.value.toLowerCase().includes(query)
        );
        const matchesBrand = item.componentBrands.some((b) =>
          b.toLowerCase().includes(query)
        );

        if (
          !matchesName &&
          !matchesModel &&
          !matchesDesc &&
          !matchesSpecs &&
          !matchesBrand
        ) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      // 'featured' keeps curated order
      return 0;
    });
  }, [selectedCategory, selectedMachineType, searchQuery, sortBy]);

  // Comparison Handlers
  const handleToggleCompare = useCallback((item: MachineryItem) => {
    setComparedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      }
      if (prev.length >= 3) {
        alert("You can compare up to 3 machines simultaneously.");
        return prev;
      }
      return [...prev, item];
    });
  }, []);

  const handleRemoveCompareItem = useCallback((id: string) => {
    setComparedItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const handleClearAllCompare = useCallback(() => {
    setComparedItems([]);
  }, []);

  // View Details handler
  const handleViewDetails = useCallback(
    (item: MachineryItem) => {
      setSelectedItemForDetails(item);
      const url = new URL(window.location.href);
      url.searchParams.set("view", item.slug);
      window.history.replaceState(null, "", url.toString());
    },
    []
  );

  const handleCloseDetails = useCallback(() => {
    setSelectedItemForDetails(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("view");
    window.history.replaceState(null, "", url.toString());
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Breadcrumbs Bar */}
      <div className="bg-white border-b border-slate-200 py-3">
        <Container>
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
                Machinery
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Hero Section */}
      <header className="relative bg-gradient-to-b from-[#013074] via-[#02285e] to-[#01214e] text-white py-12 sm:py-16 overflow-hidden">
        {/* Subtle Industrial Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-slate-200">
              <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" />
              <span>B2B Industrial Machinery Catalogue</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Industrial Corrugated Packaging Machinery
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Explore NAGJAN&apos;s range of corrugation production lines, single
              facers, paper handling systems, and converting equipment.
            </p>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <FileText className="size-4" />
                <span>Request a Quote</span>
              </Link>

              <Link
                href="/categories"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
              >
                <Layers className="size-4" />
                <span>Browse Categories Directory</span>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Verified Industrial Trust & Catalogue Statistics Bar */}
      <section
        aria-label="Catalogue Verification Statistics"
        className="bg-white border-b border-slate-200 py-6"
      >
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div className="px-3 pt-3 lg:pt-0">
              <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-[#013074]">
                240+
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mt-1">
                Corrugators Delivered
              </span>
              <span className="text-[11px] text-slate-500 block">
                Installed across Indian packaging plants
              </span>
            </div>

            <div className="px-3 pt-3 lg:pt-0">
              <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-[#013074]">
                15+ Years
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mt-1">
                Engineering Provenance
              </span>
              <span className="text-[11px] text-slate-500 block">
                Established May 2010 • Chennai, India
              </span>
            </div>

            <div className="px-3 pt-3 lg:pt-0">
              <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-[#013074]">
                5 Categories
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mt-1">
                Verified Machinery Lines
              </span>
              <span className="text-[11px] text-slate-500 block">
                Lines, Facers, Stands, Cutters & Converting
              </span>
            </div>

            <div className="px-3 pt-3 lg:pt-0">
              <span className="block font-heading text-2xl sm:text-3xl font-extrabold text-[#FEA81D]">
                100% Genuine
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mt-1">
                Component Provenance
              </span>
              <span className="text-[11px] text-slate-500 block">
                Siemens, ABB, Schneider, C&amp;U &amp; AirTac
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Main Catalogue Body: Search, Filters, and Grid */}
      <main className="py-8 sm:py-12">
        <Container>
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="max-w-2xl">
              <MachinerySearch
                value={searchQuery}
                onChange={setSearchQuery}
                totalResults={filteredMachinery.length}
              />
            </div>

            {/* Filters Bar */}
            <MachineryFilters
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              selectedMachineType={selectedMachineType}
              onSelectMachineType={setSelectedMachineType}
              sortBy={sortBy}
              onSelectSortBy={setSortBy}
              onClearFilters={handleClearFilters}
              hasActiveFilters={hasActiveFilters}
              categoryCounts={categoryCounts}
            />

            {/* Machinery Grid */}
            <MachineryGrid
              machinery={filteredMachinery}
              onViewDetails={handleViewDetails}
              comparedIds={comparedItems.map((i) => i.id)}
              onToggleCompare={handleToggleCompare}
              onClearFilters={handleClearFilters}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
            />
          </div>
        </Container>
      </main>

      {/* Technical Highlights Drawer/Modal */}
      <TechnicalHighlights
        item={selectedItemForDetails}
        onClose={handleCloseDetails}
      />

      {/* Machinery Comparison Dock & Modal */}
      <MachineryCompare
        comparedItems={comparedItems}
        onRemoveItem={handleRemoveCompareItem}
        onClearAll={handleClearAllCompare}
      />
    </div>
  );
}

