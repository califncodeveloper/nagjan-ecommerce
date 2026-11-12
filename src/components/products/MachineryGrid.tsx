"use client";

import React from "react";
import { MachineryItem } from "@/types/machinery";
import { MachineryCard } from "./MachineryCard";
import { EmptyCatalogue } from "./EmptyCatalogue";

export interface MachineryGridProps {
  machinery: MachineryItem[];
  onViewDetails: (item: MachineryItem) => void;
  comparedIds?: string[];
  onToggleCompare?: (item: MachineryItem) => void;
  onClearFilters: () => void;
  searchQuery?: string;
  selectedCategory?: string;
}

export function MachineryGrid({
  machinery,
  onViewDetails,
  comparedIds = [],
  onToggleCompare,
  onClearFilters,
  searchQuery,
  selectedCategory,
}: MachineryGridProps) {
  if (machinery.length === 0) {
    return (
      <EmptyCatalogue
        onClearFilters={onClearFilters}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {machinery.map((item) => (
          <MachineryCard
            key={item.id}
            machinery={item}
            onViewDetails={onViewDetails}
            isCompared={comparedIds.includes(item.id)}
            onToggleCompare={onToggleCompare}
          />
        ))}
      </div>
    </div>
  );
}

