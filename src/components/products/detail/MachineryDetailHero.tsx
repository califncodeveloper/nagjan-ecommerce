import React from "react";
import Link from "next/link";
import {
  FileText,
  Phone,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { MachineryItem } from "@/types/machinery";
import { COMPANY_CONTACT } from "@/data/navigation";
import { MachineryImageGallery } from "./MachineryImageGallery";

interface MachineryDetailHeroProps {
  machinery: MachineryItem;
}

export function MachineryDetailHero({ machinery }: MachineryDetailHeroProps) {
  // Extract up to 4 key highlight specs for the hero quick-reference table
  const heroSpecs = machinery.technicalSpecifications
    .filter((s) => s.highlight)
    .slice(0, 4);

  const fallbackSpecs = heroSpecs.length >= 3
    ? heroSpecs
    : machinery.technicalSpecifications.slice(0, 4);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Authentic Machinery Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <MachineryImageGallery
            primaryImage={machinery.primaryImage}
            additionalImages={machinery.additionalImages}
            imageAlt={machinery.imageAlt || machinery.name}
            model={machinery.model}
            sourceDocument={machinery.sourceDocument}
          />
        </div>

        {/* Right Column: Machinery Identification, Specs & Quotation CTA */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          {/* Header Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-[#013074]/10 text-[#013074] border border-[#013074]/20">
              {machinery.model}
            </span>
            <Link
              href={`/products?category=${machinery.categorySlug}`}
              className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              {machinery.category}
            </Link>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
              {machinery.availabilityStatus}
            </span>
          </div>

          {/* Machine Name & Headline */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              {machinery.name}
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              {machinery.shortDescription}
            </p>
          </div>

          {/* Hero Quick Engineering Parameter Matrix */}
          <div className="bg-slate-50/90 rounded-2xl border border-slate-200 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-900 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Zap className="size-3.5 text-[#FEA81D]" />
                <span>Primary Technical Metrics</span>
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-normal">
                Engineering Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {fallbackSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-0.5"
                >
                  <span className="text-[11px] font-medium text-slate-500 block truncate">
                    {spec.label}
                  </span>
                  <span className="font-mono font-bold text-slate-900 block truncate text-xs sm:text-sm">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Component Reliability Summary */}
          {machinery.componentBrands && machinery.componentBrands.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Integrated Component Standards:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {machinery.componentBrands.slice(0, 4).map((brand) => (
                  <span
                    key={brand}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-1"
                  >
                    <CheckCircle2 className="size-3 text-[#FEA81D]" />
                    <span>{brand}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quotation & Sales Desk CTA Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/request-quote?product=${machinery.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-sm transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FEA81D] focus:ring-offset-2"
            >
              <FileText className="size-4 shrink-0" />
              <span>Request Official Quotation</span>
              <ArrowRight className="size-4 shrink-0" />
            </Link>

            <a
              href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#013074]"
            >
              <Phone className="size-4 text-[#FEA81D] shrink-0" />
              <span className="whitespace-nowrap">Call Sales</span>
            </a>
          </div>

          {/* B2B Quotation Assurance */}
          <p className="text-[11px] text-slate-500 leading-normal flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-[#013074] shrink-0" />
            <span>
              Formal proforma quotations include technical parameters, CIF/FOB delivery, and factory foundation layout.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
