"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Check,
  FileText,
  Phone,
  Mail,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { SparePart } from "@/types/spare-parts";
import { formatINR } from "@/lib/spare-parts-utils";
import { useCart } from "@/hooks/useCart";
import { SparePartsQuantitySelector } from "./SparePartsQuantitySelector";
import { COMPANY_CONTACT } from "@/data/navigation";

interface SparePartsDetailActionProps {
  part: SparePart;
}

export function SparePartsDetailAction({ part }: SparePartsDetailActionProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    if (part.hasVerifiedPrice && part.price) {
      const success = addItem(part, quantity);
      if (success) {
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 2000);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
      {/* Price Header */}
      <div className="border-b border-slate-100 pb-4">
        {part.hasVerifiedPrice && part.price !== null ? (
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Verified Unit Price
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl sm:text-4xl font-bold font-heading text-[#013074] font-mono">
                {formatINR(part.price)}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                (Excl. 18% GST)
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Applicable GST &amp; dispatch freight from Chennai depot are billed on proforma invoice.
            </p>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold mb-2">
              <span>Price on Request</span>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900">
              Custom Sizing &amp; Dimension Matching
            </h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Pricing depends on cylinder circumference, bore diameter, or machine variant. Contact our engineering desk for immediate quote and dispatch timelines.
            </p>
          </div>
        )}
      </div>

      {/* Stock Status & Godown Dispatch Info */}
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2 text-emerald-800 font-semibold bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200/80">
          <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
          <span>Ready Stock at Madhavaram Godown, Chennai</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600 px-1">
          <Truck className="size-3.5 text-blue-600 shrink-0" />
          <span>Same-day packing &amp; dispatch via VRL Logistics, TCI, DTDC</span>
        </div>
      </div>

      {/* Purchase Actions */}
      {part.hasVerifiedPrice && part.price !== null ? (
        <div className="space-y-4 pt-2">
          {/* Quantity Selector */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Order Quantity:
            </span>
            <SparePartsQuantitySelector
              quantity={quantity}
              onChange={setQuantity}
              min={1}
              max={999}
            />
          </div>

          {/* Subtotal preview if qty > 1 */}
          {quantity > 1 && (
            <div className="flex justify-between items-center text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-100">
              <span>Subtotal ({quantity} units):</span>
              <span className="font-bold font-mono text-sm text-[#013074]">
                {formatINR(part.price * quantity)}
              </span>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={`Add ${quantity} of ${part.name} to cart`}
            className={`w-full flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-sm font-semibold shadow-xs transition-all ${
              justAdded
                ? "bg-emerald-600 text-white"
                : "bg-[#FEA81D] hover:bg-[#E59516] active:bg-[#D4860D] text-[#0F172A] border border-amber-500/30"
            }`}
          >
            {justAdded ? (
              <>
                <Check className="size-4" />
                <span>Added to Cart ({quantity})</span>
              </>
            ) : (
              <>
                <ShoppingCart className="size-4" />
                <span>Add {quantity} to Cart</span>
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="space-y-3 pt-2">
          <Link
            href={`/request-quote?part=${encodeURIComponent(part.slug)}&sku=${encodeURIComponent(part.sku)}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-sm font-semibold text-white bg-[#013074] hover:bg-[#002255] shadow-xs transition-colors"
          >
            <FileText className="size-4 text-[#FEA81D]" />
            <span>Request Quotation &amp; Sizing</span>
          </Link>
        </div>
      )}

      {/* Direct Contact Alternatives */}
      <div className="pt-4 border-t border-slate-100 space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
          Immediate Dispatch Phone Hotline:
        </span>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
            className="flex items-center justify-center gap-1.5 p-2 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            <Wrench className="size-3.5 text-[#FEA81D]" />
            <span>{COMPANY_CONTACT.phones.service.display}</span>
          </a>
          <a
            href={`mailto:${COMPANY_CONTACT.email.sales}?subject=Spare%20Part%20Inquiry%20-%20${encodeURIComponent(
              part.sku
            )}`}
            className="flex items-center justify-center gap-1.5 p-2 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors"
          >
            <Mail className="size-3.5 text-[#FEA81D]" />
            <span>Email Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}

