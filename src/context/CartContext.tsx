"use client";

import React, { createContext, useState, useEffect, useMemo, useCallback } from "react";
import { CartItem, CartContextType } from "@/types/cart";
import { SparePart } from "@/types/spare-parts";

const CART_STORAGE_KEY = "nagjan_spare_parts_cart_v1";

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Validate stored structure
          const validItems: CartItem[] = parsed.filter(
            (item) =>
              item &&
              typeof item.id === "string" &&
              typeof item.price === "number" &&
              item.price > 0 &&
              typeof item.quantity === "number" &&
              item.quantity > 0
          );
          setItems(validItems);
        }
      }
    } catch (e) {
      console.warn("Failed to load spare parts cart from localStorage", e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Persist to localStorage when items change (after initial hydration)
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to save spare parts cart to localStorage", e);
    }
  }, [items, isHydrated]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), []);

  /**
   * Add a spare part to the cart.
   * STRICT BUSINESS RULES:
   * 1. Only spare parts with verified purchasable prices can be added.
   * 2. Machinery products are never eligible for cart operations.
   * 3. Duplicates update the existing line item quantity.
   */
  const addItem = useCallback(
    (part: SparePart, quantity: number = 1): boolean => {
      if (!part.hasVerifiedPrice || part.price === null || part.price <= 0) {
        console.warn(`Attempted to add part "${part.name}" without verified pricing.`);
        return false;
      }

      const verifiedPrice = part.price;
      const validQty = Math.max(1, Math.floor(quantity));

      setItems((prevItems) => {
        const existingIndex = prevItems.findIndex((item) => item.id === part.id);
        if (existingIndex > -1) {
          const updated = [...prevItems];
          const currentItem = updated[existingIndex];
          updated[existingIndex] = {
            ...currentItem,
            quantity: currentItem.quantity + validQty,
          };
          return updated;
        } else {
          const newItem: CartItem = {
            id: part.id,
            slug: part.slug,
            sku: part.sku,
            name: part.name,
            category: part.category,
            categoryName: part.categoryName,
            price: verifiedPrice,
            quantity: validQty,
            image: part.images[0] || "/logo/nagjan-logo.png",
          };
          return [...prevItems, newItem];
        }
      });

      // Automatically open drawer to confirm addition to customer
      setIsCartOpen(true);
      return true;
    },
    []
  );

  const removeItem = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      return;
    }
    const safeQty = Math.max(1, Math.floor(quantity));
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: safeQty } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const uniqueCount = items.length;

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );

  const value: CartContextType = {
    items,
    itemCount,
    uniqueCount,
    subtotal,
    isCartOpen,
    openCart,
    closeCart,
    toggleCart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
