"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { X, ShoppingBag, ArrowRight, ShieldCheck, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "./CartItem";
import { formatINR } from "@/lib/spare-parts-utils";
import { CartItem as CartItemType } from "@/types/cart";

const SAMPLE_ITEMS: CartItemType[] = [
  {
    id: "sp-thin-blade-100-20-1-2",
    slug: "thin-blade-100-20-1-2",
    sku: "TB-100-20-12",
    name: "Thinblade OD:100mm ID:20mm Thickness 1.2mm",
    category: "thin-blades-knives",
    categoryName: "Thin Blades & Slitting Knives",
    price: 2200,
    quantity: 2,
    image: "/images/products/wj_100_1800_2ply_plant__july__2023_img_5.jpg",
  },
  {
    id: "sp-contactor-cjx2-18",
    slug: "contactor-cjx2-18",
    sku: "EL-CJX2-18",
    name: "Contactor CJX2-18 Power Switchgear",
    category: "electricals-automation",
    categoryName: "Electricals & Automation",
    price: 4500,
    quantity: 1,
    image: "/images/products/wj_100_1800_2ply_plant__july__2023_img_4.jpg",
  },
];

export function CartDrawer() {
  const {
    items,
    itemCount,
    subtotal,
    isCartOpen,
    openCart,
    closeCart,
    clearCart,
  } = useCart();

  const searchParams = useSearchParams();

  // Open drawer if url param ?cart=open or ?drawer=open
  useEffect(() => {
    if (
      searchParams.get("cart") === "open" ||
      searchParams.get("drawer") === "open"
    ) {
      openCart();
    }
  }, [searchParams, openCart]);

  // Check preview mode
  const isPreview = searchParams.get("preview") === "sample";
  const displayItems = items.length > 0 ? items : isPreview ? SAMPLE_ITEMS : [];
  const displayCount =
    items.length > 0
      ? itemCount
      : isPreview
      ? displayItems.reduce((acc, it) => acc + it.quantity, 0)
      : 0;
  const displaySubtotal =
    items.length > 0
      ? subtotal
      : isPreview
      ? displayItems.reduce((acc, it) => acc + it.price * it.quantity, 0)
      : 0;

  // Close on Escape key press
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isCartOpen) {
        closeCart();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, closeCart]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Spare Parts Shopping Cart"
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-5 text-[#013074]" />
            <h2 className="text-base font-bold font-heading text-slate-900">
              Spare Parts Cart
            </h2>
            <span className="text-xs font-bold bg-[#FEA81D] text-slate-950 px-2 py-0.5 rounded-full font-mono">
              {displayCount}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {displayItems.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="text-xs text-slate-500 hover:text-red-600 px-2 py-1 rounded transition-colors flex items-center gap-1"
                title="Clear all spare parts"
              >
                <Trash2 className="size-3.5" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            )}
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart drawer"
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {displayItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
              <div className="size-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <ShoppingBag className="size-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900 font-heading">
                  Your Spare Parts Cart is Empty
                </h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Browse our verified spare parts catalogue for blades, sensors, cylinders, and consumable components.
                </p>
              </div>
              <Link
                href="/spare-parts"
                onClick={closeCart}
                className="inline-flex items-center gap-2 bg-[#013074] hover:bg-[#002255] text-white text-xs font-semibold px-4 py-2 rounded-md shadow-xs transition-colors"
              >
                <span>Browse Spare Parts</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ) : (
            <div className="space-y-1 divide-y divide-slate-100">
              {displayItems.map((item) => (
                <CartItem key={item.id} item={item} onItemClick={closeCart} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {displayItems.length > 0 && (
          <div className="border-t border-slate-200 bg-slate-50 p-4 sm:p-5 space-y-4">
            {/* Subtotal */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">Subtotal</span>
                <span className="text-lg font-bold text-[#013074] font-heading">
                  {formatINR(displaySubtotal)}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Taxes (18% GST) and freight will be calculated on the official proforma order invoice from Chennai Godown.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <Link
                href="/cart"
                onClick={closeCart}
                className="w-full flex items-center justify-center gap-2 bg-[#FEA81D] hover:bg-[#E59516] active:bg-[#D4860D] text-[#0F172A] text-sm font-semibold py-2.5 px-4 rounded-md shadow-xs border border-amber-500/30 transition-all text-center"
              >
                <span>View Full Cart &amp; Order Inquiry</span>
                <ArrowRight className="size-4" />
              </Link>

              <button
                type="button"
                onClick={closeCart}
                className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors text-center"
              >
                Continue Shopping
              </button>
            </div>

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
              <ShieldCheck className="size-3.5 text-emerald-600" />
              <span>Authentic OEM parts dispatched from Madhavaram Godown</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
