import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, Boxes, FileText, ArrowLeft, Tag } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SPARE_PARTS_ITEMS } from "@/data/spare-parts";
import { SparePartsGallery } from "@/components/spare-parts/SparePartsGallery";
import { SparePartsSpecifications } from "@/components/spare-parts/SparePartsSpecifications";
import { SparePartsCompatibility } from "@/components/spare-parts/SparePartsCompatibility";
import { SparePartsDetailAction } from "@/components/spare-parts/SparePartsDetailAction";
import { SparePartsRelatedProducts } from "@/components/spare-parts/SparePartsRelatedProducts";
import { SparePartsEnquiryCTA } from "@/components/spare-parts/SparePartsEnquiryCTA";
import { formatINR } from "@/lib/spare-parts-utils";

interface SparePartDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SPARE_PARTS_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: SparePartDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const part = SPARE_PARTS_ITEMS.find((p) => p.slug === slug);

  if (!part) {
    return {
      title: "Spare Part Not Found | NAGJAN",
      description: "The requested industrial spare part could not be found.",
    };
  }

  const priceNote = part.hasVerifiedPrice && part.price
    ? `Available for ${formatINR(part.price)}.`
    : "Contact for pricing and dimensional specs.";

  return {
    title: `${part.name} (SKU: ${part.sku}) | NAGJAN Spare Parts`,
    description: `${part.shortDescription} ${priceNote} Ready stock at Madhavaram Godown, Chennai.`,
    keywords: [
      part.name,
      part.sku,
      part.categoryName,
      part.brand || "NAGJAN",
      ...(part.tags || []),
    ],
    alternates: {
      canonical: `https://nagjan.com/spare-parts/${part.slug}`,
    },
    openGraph: {
      title: `${part.name} (SKU: ${part.sku}) | NAGJAN`,
      description: part.shortDescription,
      url: `https://nagjan.com/spare-parts/${part.slug}`,
      siteName: "NAGJAN",
      type: "website",
    },
  };
}

export default async function SparePartDetailPage({
  params,
}: SparePartDetailPageProps) {
  const { slug } = await params;
  const part = SPARE_PARTS_ITEMS.find((p) => p.slug === slug);

  if (!part) {
    notFound();
  }

  // Related parts in the same category (excluding current part)
  const relatedParts = SPARE_PARTS_ITEMS.filter(
    (p) => p.category === part.category && p.id !== part.id
  ).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <Container size="default">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
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
            <li>
              <Link
                href={`/spare-parts?category=${part.category}`}
                className="hover:text-[#013074] transition-colors"
              >
                {part.categoryName}
              </Link>
            </li>
            <li className="text-slate-400">/</li>
            <li className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {part.name}
            </li>
          </ol>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/spare-parts"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#013074] hover:text-[#FEA81D] transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Spare Parts Catalogue</span>
          </Link>
        </div>

        {/* Mobile-Only Header: Title, SKU & Category rendered at top before gallery on smaller screens */}
        <div className="block lg:hidden space-y-2.5 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#013074] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              SKU: {part.sku}
            </span>

            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
              {part.categoryName}
            </span>

            {part.brand && (
              <span className="text-xs font-bold text-slate-900 bg-[#FEA81D] px-2 py-0.5 rounded font-mono shadow-2xs">
                {part.brand}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 leading-tight">
            {part.name}
          </h1>
        </div>

        {/* Two-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Gallery, followed on mobile by Description & Action, and Specifications/Compatibility */}
          <div className="lg:col-span-7 space-y-6">
            {/* Gallery Image: Positioned between title and description on mobile */}
            <SparePartsGallery
              images={part.images}
              name={part.name}
              sku={part.sku}
            />

            {/* Mobile-Only: Description & Purchase Action placed right after image */}
            <div className="block lg:hidden space-y-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                {part.description}
              </p>

              {/* Purchase Action Box (Price, Quantity, Add to Cart / Inquiry) */}
              <SparePartsDetailAction part={part} />

              {/* Product Tags (Mobile) */}
              {part.tags && part.tags.length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                    <Tag className="size-3.5" />
                    <span>Product Keywords:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {part.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <SparePartsSpecifications
              specifications={part.specifications}
              attributes={part.attributes}
            />

            <SparePartsCompatibility
              compatibleMachines={part.compatibleMachines}
            />
          </div>

          {/* Right Column (Desktop Only): Original Title, SKU, Description, Pricing & Add to Cart */}
          <div className="hidden lg:block lg:col-span-5 space-y-6">
            {/* Title & Header */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#013074] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                  SKU: {part.sku}
                </span>

                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                  {part.categoryName}
                </span>

                {part.brand && (
                  <span className="text-xs font-bold text-slate-900 bg-[#FEA81D] px-2 py-0.5 rounded font-mono shadow-2xs">
                    {part.brand}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 leading-tight">
                {part.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {part.description}
              </p>
            </div>

            {/* Purchase Action Box (Price, Quantity, Add to Cart / Inquiry) */}
            <SparePartsDetailAction part={part} />

            {/* Product Tags */}
            {part.tags && part.tags.length > 0 && (
              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                  <Tag className="size-3.5" />
                  <span>Product Keywords:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {part.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {relatedParts.length > 0 && (
          <SparePartsRelatedProducts
            relatedParts={relatedParts}
            categoryName={part.categoryName}
          />
        )}

        {/* Enquiry Callout */}
        <SparePartsEnquiryCTA />
      </Container>
    </div>
  );
}

