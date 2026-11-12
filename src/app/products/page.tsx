import React, { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsClientView } from "./ProductsClientView";

export const metadata: Metadata = {
  title: "Industrial Machinery Catalogue | NAGJAN Corrugated Packaging Equipment",
  description:
    "Explore NAGJAN's verified range of industrial corrugation production lines, single facers, hydraulic mill roll stands, computerized rotary cutters, and converting equipment.",
  keywords: [
    "NAGJAN machinery catalogue",
    "corrugation production lines",
    "single facer corrugators",
    "hydraulic mill roll stand",
    "rotary cut-off cutter",
    "carton converting equipment",
    "Mount Kailash Printpack Machines",
  ],
};

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 bg-slate-50 min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="size-10 rounded-full border-4 border-[#013074] border-t-transparent animate-spin" />
            <p className="text-xs font-semibold text-slate-600 font-mono">
              Loading NAGJAN Machinery Catalogue...
            </p>
          </div>
        </div>
      }
    >
      <ProductsClientView />
    </Suspense>
  );
}
