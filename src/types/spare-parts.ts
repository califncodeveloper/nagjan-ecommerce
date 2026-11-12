/**
 * NAGJAN Spare Parts & Consumables Data Types
 * Brand: NAGJAN | Mount Kailash Printpack Machines
 * All specifications and pricing strictly sourced from active shop catalog and source documentation.
 */

export interface SparePartCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCountNote?: string;
  badge?: string;
  iconName: string;
}

export type StockStatus = "in_stock" | "available_on_order" | "enquire";

export interface SparePart {
  id: string;
  slug: string;
  sku: string;
  name: string;
  category: string; // Slug of SparePartCategory
  categoryName: string;
  shortDescription: string;
  description: string;
  images: string[];
  brand?: string;
  price: number | null; // Verified unit price in INR; null if pricing is on inquiry
  salePrice?: number | null;
  hasVerifiedPrice: boolean;
  stockStatus: StockStatus;
  stockLocation?: string; // e.g. "Madhavaram Godown, Chennai"
  stockQuantity?: number;
  minOrderQuantity?: number;
  compatibleMachines?: string[];
  specifications: Record<string, string>;
  attributes?: Record<string, string>;
  tags?: string[];
}

export type SparePartsSortOption =
  | "default"
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc";

export interface SparePartsFilterState {
  searchQuery: string;
  category: string;
  priceFilter: "all" | "priced" | "quote";
  sortBy: SparePartsSortOption;
}

