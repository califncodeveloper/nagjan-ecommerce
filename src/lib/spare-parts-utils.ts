/**
 * Utility functions for Spare Parts catalogue and pricing
 */

import { SparePart, SparePartsFilterState } from "@/types/spare-parts";

/**
 * Format an integer or float amount into Indian Rupee (INR) representation
 * e.g., 2200 -> "₹2,200", 18000 -> "₹18,000"
 */
export function formatINR(amount: number | null | undefined): string {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return "Contact for Price";
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Filters and sorts a collection of spare parts
 */
export function filterAndSortSpareParts(
  parts: SparePart[],
  filterState: SparePartsFilterState
): SparePart[] {
  let result = [...parts];

  // 1. Search Query
  if (filterState.searchQuery.trim()) {
    const q = filterState.searchQuery.toLowerCase().trim();
    result = result.filter((part) => {
      const matchName = part.name.toLowerCase().includes(q);
      const matchSku = part.sku.toLowerCase().includes(q);
      const matchCat = part.categoryName.toLowerCase().includes(q);
      const matchBrand = part.brand ? part.brand.toLowerCase().includes(q) : false;
      const matchDesc = part.description.toLowerCase().includes(q) || part.shortDescription.toLowerCase().includes(q);
      const matchSpecs = Object.entries(part.specifications).some(
        ([k, v]) => k.toLowerCase().includes(q) || v.toLowerCase().includes(q)
      );
      const matchCompatible = part.compatibleMachines
        ? part.compatibleMachines.some((m) => m.toLowerCase().includes(q))
        : false;

      return matchName || matchSku || matchCat || matchBrand || matchDesc || matchSpecs || matchCompatible;
    });
  }

  // 2. Category Filter
  if (filterState.category && filterState.category !== "all") {
    result = result.filter((part) => part.category === filterState.category);
  }

  // 3. Price Availability Filter
  if (filterState.priceFilter === "priced") {
    result = result.filter((part) => part.hasVerifiedPrice && part.price !== null);
  } else if (filterState.priceFilter === "quote") {
    result = result.filter((part) => !part.hasVerifiedPrice || part.price === null);
  }

  // 4. Sorting
  switch (filterState.sortBy) {
    case "name-asc":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      result.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price-asc":
      result.sort((a, b) => {
        const pA = a.price ?? Infinity;
        const pB = b.price ?? Infinity;
        return pA - pB;
      });
      break;
    case "price-desc":
      result.sort((a, b) => {
        const pA = a.price ?? -Infinity;
        const pB = b.price ?? -Infinity;
        return pB - pA;
      });
      break;
    default:
      // Default: preserve original catalog priority
      break;
  }

  return result;
}

