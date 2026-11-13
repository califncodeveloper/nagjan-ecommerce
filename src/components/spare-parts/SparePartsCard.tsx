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
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
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

  const isPurchasable = part.hasVerifiedPrice && part.price !== null;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group bg-white rounded-xl border border-slate-200 hover:border-l-4 hover:border-l-[#FEA81D] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
    >
      {/* Amber left accent bar on hover — always present but only visible on hover via group */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FEA81D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />

      <div>
        {/* Thumbnail & Badges */}
        <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
          <Link href={`/spare-parts/${part.slug}`} className="block w-full h-full relative">
            <Image
              src={part.images[0] || "/logo/nagjan-logo.png"}
              alt={part.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
            />
            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </Link>

          {/* Category Pill — top left */}
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-sm text-white">
              {part.categoryName}
            </span>
          </div>

          {/* SKU Badge — top right, monospace dark glass */}
          <div className="absolute top-2.5 right-2.5">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white shadow-sm">
              {part.sku}
            </span>
          </div>

          {/* In-stock indicator — bottom left over gradient */}
          <div className="absolute bottom-2 left-2.5">
            {isPurchasable ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-white bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
                <span className="size-1.5 rounded-full bg-emerald-400 inline-block" />
                In Stock
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-white bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded">
                <span className="size-1.5 rounded-full bg-[#FEA81D] inline-block" />
                Quote Only
              </span>
            )}
          </div>

          {/* Brand badge if present */}
          {part.brand && (
            <div className="absolute bottom-2 right-2.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FEA81D] text-slate-950 font-mono shadow-sm">
                {part.brand}
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 space-y-2.5">
          {/* Chennai Stock badge */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
              <ShieldCheck className="size-3 text-emerald-600" />
              <span>Chennai Stock</span>
            </span>
          </div>

          {/* Product Name */}
          <h3 className="text-sm font-bold font-heading text-slate-900 group-hover:text-[#013074] line-clamp-2 transition-colors leading-snug">
            <Link href={`/spare-parts/${part.slug}`}>
              {part.name}
            </Link>
          </h3>

          {/* Key Dimensions / Parameter Tags */}
          {Object.entries(part.specifications).length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {Object.entries(part.specifications).slice(0, 2).map(([key, value]) => (
                <span
                  key={key}
                  className="text-[10px] px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-100 font-mono"
                >
                  {key}: <strong className="text-slate-800">{value}</strong>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Pricing & Action Buttons */}
      <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 mt-2 space-y-3">
        {/* Pricing Area */}
        <div className="pt-2">
          {isPurchasable ? (
            <div>
              <span className="text-lg sm:text-xl font-extrabold font-heading text-[#013074] font-mono">
                {formatINR(part.price!)}
              </span>
              <span className="block text-[10px] text-slate-400">
                Unit (Excl. 18% GST)
              </span>
            </div>
          ) : (
            <div>
              <span className="text-sm font-bold italic text-slate-500">
                Price on Request
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">
                Dimensions customized
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {isPurchasable ? (
            <motion.button
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={handleAddToCart}
              className={`w-full py-2.5 px-3 rounded-lg text-xs font-bold transition-all inline-flex items-center justify-center gap-1.5 shadow-sm ${
                justAdded
                  ? "bg-emerald-600 text-white"
                  : "bg-[#FEA81D] hover:bg-[#d4890f] text-slate-950"
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="size-3.5" />
                  <span>Added to Cart</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="size-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </motion.button>
          ) : (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={`/request-quote?part=${part.slug}&sku=${part.sku}`}
                className="w-full py-2.5 px-3 rounded-lg border-2 border-[#013074] text-[#013074] hover:bg-[#013074] hover:text-white text-xs font-bold transition-all text-center inline-flex items-center justify-center gap-1.5"
              >
                <FileText className="size-3.5" />
                <span>Request Quote</span>
              </Link>
            </motion.div>
          )}

          <Link
            href={`/spare-parts/${part.slug}`}
            className="w-full py-2 px-2.5 rounded-lg border border-slate-200 hover:border-[#013074] text-slate-600 hover:text-[#013074] hover:bg-slate-50 text-xs font-semibold transition-all text-center inline-flex items-center justify-center gap-1"
          >
            <span>View Details</span>
            <ArrowRight className="size-3 text-slate-400" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
