"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  FileText,
  ArrowRight,
  Gauge,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Building2,
  Phone,
} from "lucide-react";
import { MachineryItem } from "@/types/machinery";
import { COMPANY_CONTACT } from "@/data/navigation";

export interface TechnicalHighlightsProps {
  item: MachineryItem | null;
  onClose: () => void;
}

export function TechnicalHighlights({ item, onClose }: TechnicalHighlightsProps) {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="technical-highlights-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#013074] border border-blue-200">
              {item.model}
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">•</span>
            <span className="text-xs font-medium text-slate-600 hidden sm:inline">
              {item.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close technical specification highlights"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Top Overview: Photo & Core Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Machine Photography & Thumbnails */}
            <div className="md:col-span-6 space-y-3">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-950">
                <Image
                  src={item.primaryImage}
                  alt={item.imageAlt || item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>

              {/* Additional Thumbnails if available */}
              {item.additionalImages && item.additionalImages.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-[#013074]">
                    <Image
                      src={item.primaryImage}
                      alt="Primary View"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {item.additionalImages.slice(0, 3).map((img, idx) => (
                    <div
                      key={img}
                      className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-100"
                    >
                      <Image
                        src={img}
                        alt={`${item.name} sub-assembly view ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Source Document Provenance Note */}
              {item.sourceDocument && (
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">
                      Engineering Verified Specifications
                    </span>
                    <p className="text-slate-500 mt-0.5">
                      Extracted directly from technical documentation:{" "}
                      <code className="text-[#013074] font-semibold">
                        {item.sourceDocument}
                      </code>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Title, Overview, and Quick Facts */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <h2
                  id="technical-highlights-title"
                  className="text-xl sm:text-2xl font-bold font-heading text-slate-900"
                >
                  {item.name}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.detailedOverview}
                </p>
              </div>

              {/* Component Provenance Brands */}
              {item.componentBrands && item.componentBrands.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Integrated Component Brands:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.componentBrands.map((brand) => (
                      <span
                        key={brand}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#013074] border border-blue-200 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="size-3 text-[#FEA81D]" />
                        <span>{brand}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Target Applications */}
              {item.applications && item.applications.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Primary Plant Applications:
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {item.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[#FEA81D]" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Full Technical Specifications Matrix Table */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading flex items-center gap-2">
              <Gauge className="size-4 text-[#FEA81D]" />
              <span>Full Engineering Specification Matrix</span>
            </h3>

            <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <tbody>
                  {item.technicalSpecifications.map((spec, idx) => (
                    <tr
                      key={spec.label}
                      className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                    >
                      <th
                        scope="row"
                        className="py-2.5 px-4 font-semibold text-slate-700 w-1/2 border-b border-slate-100"
                      >
                        {spec.label}
                      </th>
                      <td className="py-2.5 px-4 font-mono font-medium text-slate-900 w-1/2 border-b border-slate-100">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Engineering Features */}
          {item.keyFeatures && item.keyFeatures.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading">
                Engineering Highlights & Design Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {item.keyFeatures.map((feat) => (
                  <div
                    key={feat}
                    className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2 text-slate-700"
                  >
                    <CheckCircle2 className="size-4 text-[#FEA81D] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 7 Foundation Notice & Inspection Invitation */}
          <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <span className="font-bold text-amber-950 flex items-center gap-1.5">
                <Factory className="size-4 text-amber-700" />
                Physical Machine Inspection at Madhavaram Depot, Chennai
              </span>
              <p className="text-amber-900/80">
                Contact our sales engineering team to arrange an on-site demonstration or receive custom foundation engineering drawings.
              </p>
            </div>
            <Link
              href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-700 transition-colors shrink-0"
            >
              <Phone className="size-3.5" />
              <span>Call Sales: {COMPANY_CONTACT.phones.sales.display}</span>
            </Link>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 z-10">
          <div className="text-xs text-slate-500">
            Model Ref: <strong className="text-slate-800">{item.model}</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
            >
              Close
            </button>

            <Link
              href={`/request-quote?product=${item.slug}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 text-xs font-bold transition-all shadow-sm"
            >
              <span>Request Quotation for {item.model}</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

