"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Check,
  ArrowRight,
  FileText,
  ShieldCheck,
  Boxes,
} from "lucide-react";
import { SparePart } from "@/types/spare-parts";
import { formatINR } from "@/lib/spare-parts-utils";
import { useCart } from "@/hooks/useCart";

interface SparePartsCardProps {
  part: SparePart;
}

export function SparePartsCard({ part }: SparePartsCardProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (part.hasVerifiedPrice && part.price) {
      const success = addItem(part, 1);
      if (success) {
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 2000);
      }
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-slate-200 hover:border-[#013074]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Thumbnail & Badges */}
        <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
          <Link href={`/spare-parts/${part.slug}`} className="block w-full h-full">
            <Image
              src={part.images[0] || "/logo/nagjan-logo.png"}
              alt={part.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </Link>

          {/* Category Pill */}
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-xs text-white">
              {part.categoryName}
            </span>
          </div>

          {/* Brand or Stock Badge */}
          <div className="absolute top-2.5 right-2.5">
            {part.brand && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FEA81D] text-slate-950 font-mono shadow-xs">
                {part.brand}
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* SKU Code */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] font-bold text-[#013074] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              SKU: {part.sku}
            </span>
            <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
              <ShieldCheck className="size-3 text-emerald-600" />
              <span>Chennai Stock</span>
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-sm sm:text-base font-bold font-heading text-slate-900 group-hover:text-[#013074] line-clamp-2 transition-colors">
            <Link href={`/spare-parts/${part.slug}`}>
              {part.name}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {part.shortDescription}
          </p>

          {/* Specification Highlights */}
          {Object.entries(part.specifications).length > 0 && (
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 space-y-1">
              {Object.entries(part.specifications).slice(0, 2).map(([key, value]) => (
                <div key={key} className="flex justify-between text-[11px]">
                  <span className="text-slate-500">{key}:</span>
                  <span className="font-semibold text-slate-800 text-right truncate max-w-[60%]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Pricing & Action Buttons */}
      <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 mt-2 space-y-3">
        {/* Pricing Area */}
        <div className="pt-3 flex items-baseline justify-between">
          <div>
            {part.hasVerifiedPrice && part.price !== null ? (
              <div className="space-y-0.5">
                <span className="text-lg sm:text-xl font-bold font-heading text-[#013074] font-mono">
                  {formatINR(part.price)}
                </span>
                <span className="block text-[10px] text-slate-400">
                  Unit Price (Excl. 18% GST)
                </span>
              </div>
            ) : (
              <div className="space-y-0.5">
                <span className="text-sm font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Pricing on Request
                </span>
                <span className="block text-[10px] text-slate-400">
                  Requires dimension matching
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={`/spare-parts/${part.slug}`}
            className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-md border border-slate-200 hover:border-[#013074] text-xs font-semibold text-slate-800 hover:text-[#013074] hover:bg-slate-50 transition-colors text-center"
          >
            <span>Details</span>
            <ArrowRight className="size-3" />
          </Link>

          {part.hasVerifiedPrice && part.price !== null ? (
            <button
              type="button"
              onClick={handleAddToCart}
              aria-label={`Add ${part.name} to cart`}
              className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-md text-xs font-semibold shadow-xs transition-all ${
                justAdded
                  ? "bg-emerald-600 text-white"
                  : "bg-[#FEA81D] hover:bg-[#E59516] active:bg-[#D4860D] text-[#0F172A] border border-amber-500/30"
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="size-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="size-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          ) : (
            <Link
              href={`/request-quote?part=${encodeURIComponent(part.slug)}&sku=${encodeURIComponent(part.sku)}`}
              className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-md bg-[#013074] hover:bg-[#002255] text-white text-xs font-semibold shadow-xs transition-colors text-center"
            >
              <FileText className="size-3.5 text-[#FEA81D]" />
              <span>Enquire</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

