import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Gauge } from "lucide-react";
import { MachineryItem } from "@/types/machinery";

interface MachineryRelatedProductsProps {
  currentSlug: string;
  categorySlug: string;
  allItems: MachineryItem[];
}

export function MachineryRelatedProducts({
  currentSlug,
  categorySlug,
  allItems,
}: MachineryRelatedProductsProps) {
  // Filter candidates: same category first, excluding current
  const categoryRelated = allItems.filter(
    (item) => item.categorySlug === categorySlug && item.slug !== currentSlug
  );

  // If fewer than 3 in same category, supplement from other categories
  const otherCandidates = allItems.filter(
    (item) => item.categorySlug !== categorySlug && item.slug !== currentSlug
  );

  const relatedList = [...categoryRelated, ...otherCandidates].slice(0, 3);

  if (relatedList.length === 0) return null;

  return (
    <section aria-labelledby="related-machinery-heading" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#013074]">
            Complementary Equipment
          </span>
          <h2
            id="related-machinery-heading"
            className="text-xl sm:text-2xl font-bold font-heading text-slate-900"
          >
            Related Corrugation &amp; Converting Machinery
          </h2>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#013074] hover:text-[#FEA81D] transition-colors"
        >
          <span>View Complete Machinery Catalogue</span>
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedList.map((item) => {
          const mainSpec =
            item.technicalSpecifications.find((s) => s.highlight) ||
            item.technicalSpecifications[0];

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-[#013074]/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Photo */}
                <div
                  className="relative w-full overflow-hidden bg-slate-900"
                  style={{ aspectRatio: "16 / 10", minHeight: "180px" }}
                >
                  <Image
                    src={item.primaryImage}
                    alt={item.imageAlt || item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold text-white border border-white/10">
                    {item.model}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 pt-0 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#013074] transition-colors line-clamp-1 font-heading">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>

                  {mainSpec && (
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 text-[11px]">{mainSpec.label}:</span>
                      <span className="font-mono font-bold text-slate-900">
                        {mainSpec.value}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                <Link
                  href={`/products/${item.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-50 hover:bg-[#013074] text-[#013074] hover:text-white font-bold text-xs transition-colors border border-slate-200 hover:border-[#013074]"
                >
                  <span>Inspect Technical Dossier</span>
                  <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
