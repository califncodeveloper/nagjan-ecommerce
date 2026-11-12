"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/types/cart";
import { formatINR } from "@/lib/spare-parts-utils";
import { useCart } from "@/hooks/useCart";

interface CartItemProps {
  item: CartItemType;
  onItemClick?: () => void;
  compact?: boolean;
}

export function CartItem({ item, onItemClick, compact = false }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-3 py-3 border-b border-slate-100 last:border-0 group">
      {/* Thumbnail */}
      <Link
        href={`/spare-parts/${item.slug}`}
        onClick={onItemClick}
        className="relative size-16 sm:size-20 shrink-0 bg-slate-100 rounded-md overflow-hidden border border-slate-200"
      >
        <Image
          src={item.image || "/logo/nagjan-logo.png"}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-200"
          sizes="80px"
        />
      </Link>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/spare-parts/${item.slug}`}
              onClick={onItemClick}
              className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#013074] line-clamp-2 transition-colors"
            >
              {item.name}
            </Link>
            <button
              type="button"
              onClick={() => removeItem(item.id)}
              aria-label={`Remove ${item.name} from cart`}
              className="text-slate-400 hover:text-red-600 transition-colors p-1 rounded hover:bg-slate-50 shrink-0"
            >
              <Trash2 className="size-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
              SKU: {item.sku}
            </span>
            <span className="text-[11px] text-slate-400">
              {formatINR(item.price)} each
            </span>
          </div>
        </div>

        {/* Quantity Controls & Line Total */}
        <div className="flex items-center justify-between mt-2 pt-1">
          {/* Quantity Stepper */}
          <div className="flex items-center border border-slate-200 rounded-md bg-white">
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
              className="size-7 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            >
              <Minus className="size-3" />
            </button>
            <span className="w-8 text-center text-xs font-semibold text-slate-900 font-mono">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
              className="size-7 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <Plus className="size-3" />
            </button>
          </div>

          {/* Line Total */}
          <div className="text-right">
            <span className="text-xs sm:text-sm font-bold text-[#013074] font-heading">
              {formatINR(item.price * item.quantity)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

