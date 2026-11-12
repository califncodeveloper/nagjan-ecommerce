import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  Layers,
  Boxes,
  FileText,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Cpu,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { MACHINERY_CATEGORIES, MACHINERY_ITEMS } from "@/data/machinery";
import { SPARE_PARTS_CATEGORIES } from "@/data/spare-parts-categories";
import { SPARE_PARTS_ITEMS } from "@/data/spare-parts";
import { SparePartsCard } from "@/components/spare-parts/SparePartsCard";
import { COMPANY_CONTACT } from "@/data/navigation";
import { MachineryItem } from "@/types/machinery";
import { SparePart } from "@/types/spare-parts";

interface CategoryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper to resolve category information
function resolveCategory(slug: string) {
  // 1. Check Machinery Categories
  const machCat = MACHINERY_CATEGORIES.find(
    (c) => c.slug === slug || (c.aliases && c.aliases.includes(slug))
  );

  if (machCat) {
    const items = MACHINERY_ITEMS.filter(
      (item) =>
        item.categorySlug === machCat.slug ||
        (machCat.aliases && machCat.aliases.includes(item.categorySlug))
    );
    return {
      type: "machinery" as const,
      category: machCat,
      items,
      count: items.length,
    };
  }

  // 2. Check Spare Parts Categories
  const spareCat = SPARE_PARTS_CATEGORIES.find((c) => c.slug === slug);
  if (spareCat) {
    const items = SPARE_PARTS_ITEMS.filter((item) => item.category === spareCat.slug);
    return {
      type: "spare-parts" as const,
      category: spareCat,
      items,
      count: items.length,
    };
  }

  return null;
}

export async function generateStaticParams() {
  const machinerySlugs: { slug: string }[] = [];
  MACHINERY_CATEGORIES.forEach((cat) => {
    machinerySlugs.push({ slug: cat.slug });
    if (cat.aliases) {
      cat.aliases.forEach((alias) => machinerySlugs.push({ slug: alias }));
    }
  });

  const sparePartsSlugs = SPARE_PARTS_CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));

  return [...machinerySlugs, ...sparePartsSlugs];
}

export async function generateMetadata({
  params,
}: CategoryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveCategory(slug);

  if (!resolved) {
    return {
      title: "Category Not Found | NAGJAN",
      description: "The requested category could not be located in our catalogue.",
    };
  }

  if (resolved.type === "machinery") {
    const cat = resolved.category;
    return {
      title: `${cat.title} | NAGJAN Machinery Categories`,
      description: `${cat.description.slice(0, 155)}... Verified industrial packaging machinery by Mount Kailash Printpack Machines.`,
      keywords: [
        cat.title,
        "corrugated packaging machinery",
        "NAGJAN machinery categories",
        cat.slug,
        "Chennai machinery",
      ],
      alternates: {
        canonical: `/categories/${cat.slug}`,
      },
      openGraph: {
        title: `${cat.title} | NAGJAN`,
        description: cat.shortDescription,
        url: `/categories/${cat.slug}`,
        images: [
          {
            url: cat.primaryImage,
            width: 1200,
            height: 630,
            alt: cat.title,
          },
        ],
      },
    };
  } else {
    const cat = resolved.category;
    return {
      title: `${cat.name} | NAGJAN Spare Parts Categories`,
      description: `${cat.description.slice(0, 155)}... Genuine replacement consumable spare parts in stock at Madhavaram Godown, Chennai.`,
      keywords: [
        cat.name,
        "corrugator spare parts",
        "NAGJAN spare parts categories",
        cat.slug,
        "Madhavaram depot",
      ],
      alternates: {
        canonical: `/categories/${cat.slug}`,
      },
      openGraph: {
        title: `${cat.name} | NAGJAN Spare Parts`,
        description: cat.description,
        url: `/categories/${cat.slug}`,
      },
    };
  }
}

export default async function CategoryDetailPage({ params }: CategoryDetailPageProps) {
  const { slug } = await params;
  const resolved = resolveCategory(slug);

  if (!resolved) {
    notFound();
  }

  const isMachinery = resolved.type === "machinery";
  const title = isMachinery
    ? (resolved.category as (typeof MACHINERY_CATEGORIES)[0]).title
    : (resolved.category as (typeof SPARE_PARTS_CATEGORIES)[0]).name;

  const description = isMachinery
    ? (resolved.category as (typeof MACHINERY_CATEGORIES)[0]).description
    : (resolved.category as (typeof SPARE_PARTS_CATEGORIES)[0]).description;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-3">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-slate-500 font-medium flex-wrap">
              <li>
                <Link href="/" className="hover:text-[#013074] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3.5 text-slate-400" />
              </li>
              <li>
                <Link href="/categories" className="hover:text-[#013074] transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3.5 text-slate-400" />
              </li>
              <li className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Category Detail Hero */}
      <header className="relative bg-gradient-to-b from-[#013074] via-[#02285e] to-[#01214e] text-white py-12 sm:py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-slate-200">
              {isMachinery ? (
                <>
                  <Layers className="size-3.5 text-[#FEA81D]" />
                  <span>Industrial Machinery Classification</span>
                </>
              ) : (
                <>
                  <Boxes className="size-3.5 text-[#FEA81D]" />
                  <span>Consumable Spare Parts Classification</span>
                </>
              )}
              <span>•</span>
              <span>{resolved.count} {resolved.count === 1 ? "Item" : "Items"} Listed</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {isMachinery ? (
                <Link
                  href={`/products?category=${slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <span>Filter in Machinery Catalogue</span>
                  <ArrowRight className="size-4" />
                </Link>
              ) : (
                <Link
                  href={`/spare-parts?category=${slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <span>Filter in Spare Parts Store</span>
                  <ArrowRight className="size-4" />
                </Link>
              )}

              <Link
                href="/categories"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
              >
                <ArrowLeft className="size-4" />
                <span>All Categories</span>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Product Listings Section */}
      <main className="py-12 sm:py-16">
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                  {isMachinery ? "Machinery Models in this Category" : "Spare Parts in this Category"}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Showing {resolved.count} verified {resolved.count === 1 ? "record" : "records"} with authentic specifications.
                </p>
              </div>

              {isMachinery ? (
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#013074] hover:text-[#FEA81D] transition-colors"
                >
                  <FileText className="size-3.5" />
                  <span>Request Custom Plant Layout</span>
                </Link>
              ) : (
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white px-3 py-1 rounded-md border border-slate-200">
                  <ShieldCheck className="size-3.5 text-[#013074]" />
                  <span>Dispatched from Madhavaram Godown, Chennai</span>
                </div>
              )}
            </div>

            {resolved.count === 0 ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-4">
                <Boxes className="size-12 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">
                  No products currently catalogued in this category
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Our engineering team regularly adds new machinery and spare parts. Contact our sales desk for custom inquiries.
                </p>
                <div className="pt-2">
                  <Link
                    href="/categories"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#013074] text-white text-xs font-semibold"
                  >
                    <span>Browse All Categories</span>
                  </Link>
                </div>
              </div>
            ) : isMachinery ? (
              /* Grid of Machinery Items */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {(resolved.items as MachineryItem[]).map((machine) => {
                  const keySpecs = machine.technicalSpecifications
                    .filter((s) => s.highlight)
                    .slice(0, 3);
                  const displaySpecs =
                    keySpecs.length >= 2
                      ? keySpecs
                      : machine.technicalSpecifications.slice(0, 3);

                  return (
                    <article
                      key={machine.id}
                      className="group bg-white rounded-xl border border-slate-200 hover:border-[#013074]/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      <div>
                        {/* Machine Image */}
                        <div className="aspect-[16/10] relative bg-slate-900 overflow-hidden">
                          <Image
                            src={machine.primaryImage}
                            alt={machine.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                          {/* Model Code Badge */}
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded bg-[#013074]/90 backdrop-blur-xs text-white text-[11px] font-bold font-mono border border-white/20">
                              {machine.model}
                            </span>
                          </div>

                          {machine.badge && (
                            <div className="absolute top-3 right-3">
                              <span className="px-2 py-0.5 rounded bg-[#FEA81D] text-slate-950 text-[10px] font-bold uppercase tracking-tight shadow-xs">
                                {machine.badge}
                              </span>
                            </div>
                          )}

                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <h3 className="text-base font-bold font-heading drop-shadow-sm leading-tight">
                              {machine.name}
                            </h3>
                          </div>
                        </div>

                        {/* Machine Specs Body */}
                        <div className="p-5 space-y-4">
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {machine.shortDescription}
                          </p>

                          {/* Technical Highlights Table */}
                          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1.5 text-xs">
                            {displaySpecs.map((spec) => (
                              <div
                                key={spec.label}
                                className="flex justify-between items-center text-[11px] py-0.5 border-b border-slate-200/60 last:border-b-0"
                              >
                                <span className="text-slate-500 font-medium">
                                  {spec.label}:
                                </span>
                                <span className="font-semibold text-slate-900 font-mono text-right">
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Component Provenance Badges */}
                          {machine.componentBrands && machine.componentBrands.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {machine.componentBrands.slice(0, 3).map((brand) => (
                                <span
                                  key={brand}
                                  className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-50 text-[#013074] border border-blue-200 flex items-center gap-1"
                                >
                                  <CheckCircle2 className="size-2.5 text-[#FEA81D]" />
                                  <span>{brand}</span>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center gap-2">
                        <Link
                          href={`/products/${machine.slug}`}
                          className="flex-1 py-2.5 px-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 hover:border-[#013074] text-[#013074] text-xs font-bold transition-colors text-center inline-flex items-center justify-center gap-1"
                        >
                          <span>Full Specifications</span>
                          <ArrowRight className="size-3.5" />
                        </Link>

                        <Link
                          href={`/request-quote?product=${machine.slug}`}
                          className="flex-1 py-2.5 px-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 text-xs font-bold transition-all text-center inline-flex items-center justify-center gap-1 shadow-xs"
                        >
                          <FileText className="size-3.5" />
                          <span>Request Quote</span>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              /* Grid of Spare Parts Items */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {(resolved.items as SparePart[]).map((part) => (
                  <SparePartsCard key={part.id} part={part} />
                ))}
              </div>
            )}
          </div>

          {/* Bottom Category Back Navigation */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#013074] hover:text-[#FEA81D] transition-colors"
            >
              <ArrowLeft className="size-4" />
              <span>Back to Master Categories Directory</span>
            </Link>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <Link
                href="/products"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                All Machinery Lines
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                href="/spare-parts"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                All Spare Parts Store
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                href="/contact"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Chennai Facilities
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

