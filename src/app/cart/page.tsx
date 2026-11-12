"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  ShoppingBag,
  Trash2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Truck,
  FileText,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  Wrench,
  Boxes,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/components/cart/CartItem";
import { formatINR } from "@/lib/spare-parts-utils";
import { COMPANY_CONTACT } from "@/data/navigation";
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

function CartContent() {
  const { items, itemCount, subtotal, clearCart } = useCart();
  const [inquiryInitiated, setInquiryInitiated] = useState(false);
  const searchParams = useSearchParams();

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

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-[75vh]">
      <Container size="default">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-[#013074] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-slate-400">/</li>
            <li>
              <Link
                href="/spare-parts"
                className="hover:text-[#013074] transition-colors"
              >
                Spare Parts
              </Link>
            </li>
            <li className="text-slate-400">/</li>
            <li className="font-semibold text-slate-900" aria-current="page">
              Shopping Cart
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[#013074] text-xs font-semibold mb-2">
              <Boxes className="size-3.5 text-[#FEA81D]" />
              <span>B2B Industrial Spares Dispatch</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Spare Parts Cart &amp; Order Review
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Direct dispatch from Madhavaram Godown, Chennai. Proforma invoices issued with verified GSTIN.
            </p>
          </div>

          {displayItems.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium font-mono">
                {displayCount} {displayCount === 1 ? "unit" : "units"} ({displayItems.length} {displayItems.length === 1 ? "part" : "parts"})
              </span>
              <button
                type="button"
                onClick={clearCart}
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-red-600 font-medium py-1 px-2.5 rounded border border-slate-200 bg-white hover:bg-red-50 transition-colors"
              >
                <Trash2 className="size-3.5" />
                <span>Clear Cart</span>
              </button>
            </div>
          )}
        </div>

        {/* Cart Contents */}
        {displayItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-16 text-center max-w-xl mx-auto shadow-xs space-y-5">
            <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <ShoppingBag className="size-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold font-heading text-slate-900">
                Your Spare Parts Cart is Currently Empty
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You have not added any spare parts yet. Explore our verified inventory of thin blades, slitting knives, contactors, pneumatic cylinders, and consumable components.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/spare-parts"
                className="inline-flex items-center gap-2 bg-[#013074] hover:bg-[#002255] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-md shadow-xs transition-colors"
              >
                <Boxes className="size-4 text-[#FEA81D]" />
                <span>Browse Spare Parts Catalogue (400+ SKUs)</span>
              </Link>
            </div>

            {/* Direct Helpline */}
            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-700">Need immediate part identification assistance?</p>
              <p>
                Call Chief Engineer Mr. D. Elumalai at Chennai Depot:{" "}
                <a
                  href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                  className="font-bold text-[#013074] hover:underline"
                >
                  {COMPANY_CONTACT.phones.service.display}
                </a>
              </p>
            </div>
          </div>
        ) : (
          /* Active Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Items List (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-xs">
                <div className="border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 font-heading">
                    Selected Spare Parts ({displayItems.length})
                  </h2>
                  <span className="text-xs text-slate-500">Unit Price &amp; Quantity</span>
                </div>

                <div className="space-y-1 divide-y divide-slate-100">
                  {displayItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/spare-parts"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#013074] hover:text-[#FEA81D] transition-colors"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>Continue Adding Spare Parts</span>
                  </Link>

                  <span className="text-xs text-slate-500 font-mono">
                    Total Items: {displayCount} units
                  </span>
                </div>
              </div>

              {/* Godown Dispatch Reassurance */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <Truck className="size-5 text-[#013074] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-[#013074]">
                    Dispatch Protocol from Madhavaram Depot, Chennai:
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Standard in-stock spare parts are packed and dispatched via trusted cargo/courier (VRL Logistics, TCI Express, DTDC) within 24 hours of proforma invoice settlement.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary & B2B Checkout Next Steps (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-5 sticky top-28">
                <h2 className="text-base font-bold font-heading text-slate-900 border-b border-slate-100 pb-3">
                  Order Summary
                </h2>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Parts Subtotal ({displayCount} units)</span>
                    <span className="font-semibold text-slate-900 font-mono text-sm">
                      {formatINR(displaySubtotal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span>Applicable GST (18%)</span>
                    <span className="text-slate-500 italic">Added on Proforma Invoice</span>
                  </div>

                  <div className="flex items-center justify-between text-slate-600">
                    <span>Transport Freight</span>
                    <span className="text-slate-500 italic">To-Pay / Billed at Actuals</span>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-900">Estimated Subtotal</span>
                    <span className="text-lg font-bold text-[#013074] font-heading font-mono">
                      {formatINR(displaySubtotal)}
                    </span>
                  </div>
                </div>

                {/* Next Step / Quotation Notice */}
                <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200 text-[11px] text-slate-600 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <FileText className="size-3.5 text-[#FEA81D]" />
                    <span>B2B Proforma Invoicing Workflow</span>
                  </div>
                  <p className="leading-relaxed">
                    Mount Kailash Printpack Machines operates on verified B2B proforma invoicing. To proceed, click below to submit your cart list directly to our dispatch desk.
                  </p>
                </div>

                {/* Submission Form / Action */}
                {!inquiryInitiated ? (
                  <button
                    type="button"
                    onClick={() => setInquiryInitiated(true)}
                    className="w-full flex items-center justify-center gap-2 bg-[#FEA81D] hover:bg-[#E59516] active:bg-[#D4860D] text-[#0F172A] text-sm font-semibold py-3 px-4 rounded-md shadow-xs border border-amber-500/30 transition-all text-center"
                  >
                    <span>Proceed to Proforma Order Inquiry</span>
                    <ArrowRight className="size-4" />
                  </button>
                ) : (
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-xs space-y-3 animate-in fade-in">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold">
                      <CheckCircle2 className="size-4 text-emerald-600" />
                      <span>Order Items Ready for Dispatch Desk</span>
                    </div>
                    <p className="text-emerald-800 text-[11px] leading-relaxed">
                      Connect directly with our Chennai Spares Coordinator to confirm your delivery address and receive your formal proforma invoice with bank details:
                    </p>
                    <div className="space-y-2 pt-1">
                      <a
                        href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                        className="flex items-center justify-center gap-2 py-2 px-3 bg-white rounded border border-emerald-300 font-semibold text-emerald-900 hover:bg-emerald-100 transition-colors"
                      >
                        <Wrench className="size-3.5 text-[#FEA81D]" />
                        <span>Call Hotline: {COMPANY_CONTACT.phones.service.display}</span>
                      </a>
                      <a
                        href={`mailto:${COMPANY_CONTACT.email.sales}?subject=${encodeURIComponent(
                          `Spare Parts Order Inquiry (${displayCount} items - ${formatINR(displaySubtotal)})`
                        )}&body=${encodeURIComponent(
                          `Dear NAGJAN Sales Team,\n\nI would like to order the following spare parts:\n\n` +
                            displayItems
                              .map(
                                (it) =>
                                  `- ${it.name} (SKU: ${it.sku}) | Qty: ${it.quantity} | Unit: ${formatINR(
                                    it.price
                                  )} | Total: ${formatINR(it.price * it.quantity)}`
                              )
                              .join("\n") +
                            `\n\nSubtotal: ${formatINR(displaySubtotal)} (Excl. GST & Freight)\n\nPlease share the formal proforma invoice with bank details for NEFT/RTGS.\n\nCompany Name:\nGSTIN:\nDelivery Address:\nContact Phone:`
                        )}`}
                        className="flex items-center justify-center gap-2 py-2 px-3 bg-[#013074] rounded text-white font-semibold hover:bg-[#002255] transition-colors"
                      >
                        <Mail className="size-3.5 text-[#FEA81D]" />
                        <span>Send Cart via Official Email</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Trust Points */}
                <div className="pt-2 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-3.5 text-emerald-600 shrink-0" />
                    <span>100% Genuine Provenance Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="size-3.5 text-blue-600 shrink-0" />
                    <span>Daily Dispatch from Chennai Godown</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default function CartPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-slate-500 font-semibold text-sm">
          Loading spare parts cart...
        </div>
      }
    >
      <CartContent />
    </Suspense>
  );
}

