/**
 * NAGJAN Spare Parts Cart Types
 * Strictly limited to purchasable spare parts with verified pricing.
 * Industrial machinery is excluded by business policy.
 */

import { SparePart } from "./spare-parts";

export interface CartItem {
  id: string; // matches spare part id
  slug: string;
  sku: string;
  name: string;
  category: string;
  categoryName: string;
  price: number; // Unit price in INR (verified)
  quantity: number;
  image?: string;
}

export interface CartContextType {
  items: CartItem[];
  itemCount: number; // Total units
  uniqueCount: number; // Distinct line items
  subtotal: number; // Total price in INR
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (part: SparePart, quantity?: number) => boolean;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

