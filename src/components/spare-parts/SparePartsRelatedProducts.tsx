import React from "react";
import Link from "next/link";
import { Boxes, ArrowRight } from "lucide-react";
import { SparePart } from "@/types/spare-parts";
import { SparePartsCard } from "./SparePartsCard";

interface SparePartsRelatedProductsProps {
  relatedParts: SparePart[];
  categoryName: string;
}

export function SparePartsRelatedProducts({
  relatedParts,
  categoryName,
}: SparePartsRelatedProductsProps) {
  if (relatedParts.length === 0) return null;

  return (
    <div className="space-y-6 pt-6 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#013074] mb-1">
            <Boxes className="size-3.5 text-[#FEA81D]" />
            <span>Related Spare Parts</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            More in {categoryName}
          </h3>
        </div>

        <Link
          href={`/spare-parts`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#013074] hover:text-[#FEA81D] transition-colors"
        >
          <span>View All Spare Parts</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {relatedParts.map((part) => (
          <SparePartsCard key={part.id} part={part} />
        ))}
      </div>
    </div>
  );
}

