import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  FileText,
  Phone,
  ArrowRight,
  ShieldCheck,
  Boxes,
  Layers,
  Wrench,
  Disc,
  CircleDot,
  Scissors,
  Cpu,
  Package,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { MACHINERY_CATEGORIES, MACHINERY_ITEMS } from "@/data/machinery";
import { SPARE_PARTS_CATEGORIES } from "@/data/spare-parts-categories";
import { SPARE_PARTS_ITEMS } from "@/data/spare-parts";
import { CategoryCard } from "@/components/products/CategoryCard";
import { COMPANY_CONTACT } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Master Category Directory | NAGJAN Machinery & Spare Parts",
  description:
    "Explore the complete category directory of NAGJAN industrial corrugated packaging machinery and 400+ replacement spare parts from Mount Kailash Printpack Machines.",
  keywords: [
    "corrugation machinery categories",
    "spare parts categories",
    "single facer categories",
    "thin blades categories",
    "anvil covers categories",
    "packaging machinery directory",
    "NAGJAN master directory",
  ],
  alternates: {
    canonical: "/categories",
  },
  openGraph: {
    title: "Master Category Directory | NAGJAN",
    description:
      "Complete visual directory of 5 machinery groups and 10 consumable spare parts classifications.",
    url: "/categories",
    siteName: "NAGJAN",
    type: "website",
  },
};

// Helper to resolve an authentic image for spare parts categories
function getSparePartCategoryImage(slug: string): string {
  const matchingPart = SPARE_PARTS_ITEMS.find(
    (p) => p.category === slug && p.images && p.images.length > 0
  );
  if (matchingPart && matchingPart.images[0]) {
    return matchingPart.images[0];
  }
  return "/images/products/sf280_single_facer_corrugation_machine_1800mm_img_1.jpg";
}

// Icon helper for spare parts categories
function getSparePartCategoryIcon(iconName: string) {
  switch (iconName) {
    case "Scissors":
      return <Scissors className="size-5 text-[#FEA81D]" />;
    case "Disc":
      return <Disc className="size-5 text-[#FEA81D]" />;
    case "CircleDot":
      return <CircleDot className="size-5 text-[#FEA81D]" />;
    case "Layers":
      return <Layers className="size-5 text-[#FEA81D]" />;
    case "Cpu":
      return <Cpu className="size-5 text-[#FEA81D]" />;
    case "Wrench":
      return <Wrench className="size-5 text-[#FEA81D]" />;
    case "Boxes":
      return <Boxes className="size-5 text-[#FEA81D]" />;
    default:
      return <Package className="size-5 text-[#FEA81D]" />;
  }
}

export default function CategoriesPage() {
  const totalMachineryCount = MACHINERY_ITEMS.length;
  const totalSparePartsCount = SPARE_PARTS_ITEMS.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NAGJAN Master Category Directory",
    description:
      "Directory of 5 industrial machinery categories and 10 consumable spare parts classifications.",
    url: "https://nagjan.com/categories",
    publisher: {
      "@type": "Organization",
      name: COMPANY_CONTACT.legalName,
      logo: "https://nagjan.com/logo/nagjan-logo.png",
    },
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-3">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <li>
                <Link href="/" className="hover:text-[#013074] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3.5 text-slate-400" />
              </li>
              <li className="text-slate-900 font-semibold" aria-current="page">
                Master Category Directory
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Hero Section */}
      <header className="relative bg-gradient-to-b from-[#013074] via-[#02285e] to-[#01214e] text-white py-12 sm:py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-slate-200">
              <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" />
              <span>Full Portfolio Classification</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Master Category Directory
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Browse NAGJAN&apos;s complete taxonomy across <strong>5 heavy machinery production lines</strong> ({totalMachineryCount} verified models) and <strong>10 industrial consumable spare parts categories</strong> ({totalSparePartsCount} verified SKUs).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#machinery-categories"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <Layers className="size-4" />
                <span>Machinery Lines (5)</span>
              </a>

              <a
                href="#spare-parts-categories"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
              >
                <Boxes className="size-4 text-[#FEA81D]" />
                <span>Spare Parts (10)</span>
              </a>

              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
              >
                <FileText className="size-4" />
                <span>Request Quotation</span>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Section: Machinery Categories (5 Groups) */}
      <section id="machinery-categories" className="py-12 sm:py-16 scroll-mt-6">
        <Container>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#013074] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                  Industrial Machinery
                </span>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mt-2">
                  5 Core Machinery Classifications
                </h2>
              </div>
              <div className="text-xs text-slate-500 max-w-md sm:text-right">
                <Link
                  href="/products"
                  className="font-bold text-[#013074] hover:text-[#FEA81D] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View All {totalMachineryCount} Machinery Models</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Grid of Machinery Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {MACHINERY_CATEGORIES.map((category) => {
                const count = MACHINERY_ITEMS.filter(
                  (item) =>
                    item.categorySlug === category.slug ||
                    (category.aliases && category.aliases.includes(item.categorySlug))
                ).length;

                return (
                  <div key={category.id} className="relative group">
                    <CategoryCard
                      category={category}
                      machineCount={count}
                    />
                    {/* Secondary link directly to dedicated category route */}
                    <div className="mt-2 text-right">
                      <Link
                        href={`/categories/${category.slug}`}
                        className="text-[11px] font-semibold text-[#013074] hover:text-[#FEA81D] inline-flex items-center gap-1"
                      >
                        <span>View Category Details Page</span>
                        <ChevronRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Section: Spare Parts Categories (10 Groups) */}
      <section
        id="spare-parts-categories"
        className="py-12 sm:py-16 bg-white border-t border-slate-200 scroll-mt-6"
      >
        <Container>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/70 px-2.5 py-1 rounded border border-amber-300">
                  Consumables & Spares
                </span>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mt-2">
                  10 Spare Parts & Consumables Classifications
                </h2>
              </div>
              <div className="text-xs text-slate-500 max-w-md sm:text-right">
                <Link
                  href="/spare-parts"
                  className="font-bold text-[#013074] hover:text-[#FEA81D] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore All {totalSparePartsCount} Spare Parts SKUs</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Grid of Spare Parts Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {SPARE_PARTS_CATEGORIES.map((category) => {
                const count = SPARE_PARTS_ITEMS.filter(
                  (item) => item.category === category.slug
                ).length;
                const categoryImg = getSparePartCategoryImage(category.slug);

                return (
                  <div
                    key={category.id}
                    className="group bg-white rounded-xl border border-slate-200 hover:border-[#013074] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Preview Container */}
                      <div className="aspect-[16/9] relative bg-slate-100 overflow-hidden">
                        <Image
                          src={categoryImg}
                          alt={category.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-bold text-slate-900 shadow-xs">
                            {getSparePartCategoryIcon(category.iconName)}
                            <span>{count} {count === 1 ? "Part" : "Parts"}</span>
                          </span>

                          {category.badge && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FEA81D] text-slate-950 shadow-xs uppercase tracking-tight">
                              {category.badge}
                            </span>
                          )}
                        </div>

                        {/* Bottom Title on Image */}
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <h3 className="text-base font-bold font-heading leading-tight drop-shadow-sm">
                            {category.name}
                          </h3>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 space-y-3">
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {category.description}
                        </p>

                        {category.itemCountNote && (
                          <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#013074] bg-blue-50 px-2 py-0.5 rounded">
                            <span>Spec Note: {category.itemCountNote}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                      <Link
                        href={`/categories/${category.slug}`}
                        className="text-xs font-bold text-[#013074] group-hover:text-[#FEA81D] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>View Category Products</span>
                        <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href={`/spare-parts?category=${category.slug}`}
                        className="text-[11px] text-slate-400 hover:text-slate-700 underline"
                      >
                        Filter in Store
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Bottom Consultation Assistance */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-[#013074] text-xs font-semibold border border-blue-200">
                <ShieldCheck className="size-3.5 text-[#FEA81D]" />
                <span>Technical Selection Guidance</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                Unsure Which Machinery Group or Spare Part Dimensions You Need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our Chennai engineering team provides technical sizing consultation for roll stands, flute profiles, and replacement consumable tooling. Contact our technical desk for tailored recommendations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#013074] text-white text-xs font-semibold hover:bg-[#022558] transition-colors"
              >
                <Phone className="size-3.5 text-[#FEA81D]" />
                <span>Call Sales: {COMPANY_CONTACT.phones.sales.display}</span>
              </a>

              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 text-xs font-bold transition-all shadow-sm"
              >
                <FileText className="size-3.5" />
                <span>Request Custom Quotation</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
