"use client";

import React from "react";
import { SearchX, RotateCcw, PhoneCall, Mail } from "lucide-react";
import Link from "next/link";
import { COMPANY_CONTACT } from "@/data/navigation";

export interface EmptyCatalogueProps {
  onClearFilters: () => void;
  searchQuery?: string;
  selectedCategory?: string;
}

export function EmptyCatalogue({
  onClearFilters,
  searchQuery,
  selectedCategory,
}: EmptyCatalogueProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-white rounded-xl border border-dashed border-slate-300 p-8 sm:p-12 text-center max-w-2xl mx-auto my-8 shadow-sm"
    >
      <div className="size-16 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
        <SearchX className="size-8 text-[#013074]" />
      </div>

      <h3 className="text-xl font-bold font-heading text-slate-900">
        No Machinery Matches Found
      </h3>

      <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
        {searchQuery ? (
          <>
            No machines matched your search for{" "}
            <span className="font-semibold text-slate-900">&ldquo;{searchQuery}&rdquo;</span>
            {selectedCategory && selectedCategory !== "all" ? " within this category" : ""}.
          </>
        ) : (
          "No machinery found matching the selected filter criteria."
        )}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onClearFilters}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#013074] text-white text-xs font-semibold hover:bg-[#022558] transition-colors focus:outline-none focus:ring-2 focus:ring-[#013074] focus:ring-offset-2"
        >
          <RotateCcw className="size-3.5" />
          <span>Clear All Filters</span>
        </button>

        <Link
          href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:border-[#013074] hover:text-[#013074] transition-colors"
        >
          <PhoneCall className="size-3.5 text-[#FEA81D]" />
          <span>Call Sales Desk</span>
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
        <p>
          Need a customized plant configuration or unlisted converting model?{" "}
          <Link
            href={`mailto:${COMPANY_CONTACT.email.sales}?subject=Custom%20Machinery%20Inquiry`}
            className="text-[#013074] font-semibold underline underline-offset-2 hover:text-[#FEA81D]"
          >
            Email engineering directly
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

