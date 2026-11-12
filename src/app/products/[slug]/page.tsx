import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { MACHINERY_ITEMS } from "@/data/machinery";
import {
  MachineryBreadcrumb,
  MachineryDetailHero,
  MachineryTechnicalHighlights,
  MachineryOverview,
  MachineryTechnicalSpecs,
  MachineryFeatures,
  MachineryApplications,
  MachineryComponents,
  MachineryConfiguration,
  MachineryRelatedProducts,
  MachineryQuoteCTA,
} from "@/components/products/detail";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return MACHINERY_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const machinery = MACHINERY_ITEMS.find((item) => item.slug === resolvedParams.slug);

  if (!machinery) {
    return {
      title: "Machinery Not Found | NAGJAN",
      description: "The requested NAGJAN corrugated packaging machinery could not be found.",
    };
  }

  const pageTitle = `${machinery.model} - ${machinery.name} | NAGJAN Machinery`;
  const canonicalUrl = `https://nagjan.com/products/${machinery.slug}`;

  return {
    title: pageTitle,
    description: machinery.shortDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${machinery.model} | ${machinery.name} - NAGJAN`,
      description: machinery.shortDescription,
      url: canonicalUrl,
      siteName: "NAGJAN - Mount Kailash Printpack Machines",
      images: [
        {
          url: machinery.primaryImage,
          width: 1200,
          height: 750,
          alt: machinery.imageAlt || machinery.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: machinery.shortDescription,
      images: [machinery.primaryImage],
    },
    keywords: [
      machinery.model,
      machinery.name,
      machinery.category,
      machinery.machineType,
      "NAGJAN",
      "Mount Kailash Printpack Machines",
      "corrugation machinery India",
      "corrugated cardboard equipment",
      "B2B packaging machinery",
    ],
  };
}

export default async function ProductDetailPage({
  params,
}: ProductPageProps) {
  const resolvedParams = await params;
  const machinery = MACHINERY_ITEMS.find((item) => item.slug === resolvedParams.slug);

  if (!machinery) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Section 1: Breadcrumb Navigation */}
      <MachineryBreadcrumb
        categoryTitle={machinery.category}
        categorySlug={machinery.categorySlug}
        model={machinery.model}
      />

      <div className="py-8 sm:py-12 space-y-10 sm:space-y-12">
        <Container>
          {/* Section 2: Product Hero (incorporates authentic image gallery, model info, technical parameters & quote action) */}
          <MachineryDetailHero machinery={machinery} />
        </Container>

        <Container>
          {/* Section 3: Technical Highlights (3-5 key parameters) */}
          <MachineryTechnicalHighlights specifications={machinery.technicalSpecifications} />
        </Container>

        <Container>
          {/* Section 4: Product Overview (purpose, working principle, operating characteristics) */}
          <MachineryOverview
            model={machinery.model}
            name={machinery.name}
            detailedOverview={machinery.detailedOverview}
            workingPrinciple={machinery.workingPrinciple}
            machineType={machinery.machineType}
            category={machinery.category}
          />
        </Container>

        {/* Modular Line Breakdown / Flute Sub-Assemblies (e.g. WJ-100-1800 6-module line) */}
        {machinery.configurationModules && machinery.configurationModules.length > 0 && (
          <Container>
            <MachineryConfiguration
              model={machinery.model}
              modules={machinery.configurationModules}
            />
          </Container>
        )}

        <Container>
          {/* Section 5: Detailed Technical Specifications (structured engineering tables grouped by General, Mechanical, Drive & Motor, Electrical & Automation, Production, Dimensions & Utilities) */}
          <MachineryTechnicalSpecs
            model={machinery.model}
            specifications={machinery.technicalSpecifications}
          />
        </Container>

        <Container>
          {/* Section 6: Key Engineering Features (verified features with headings, descriptions, and technical context) */}
          <MachineryFeatures
            features={machinery.keyFeatures}
            engineeringFeatures={machinery.engineeringFeatures}
          />
        </Container>

        <Container>
          {/* Section 7: Applications (documented manufacturing applications) */}
          <MachineryApplications
            model={machinery.model}
            applications={machinery.applications}
          />
        </Container>

        {/* Section 8: Components and Integration (provenance brands e.g. Siemens, ABB, Schneider, Delta, Inovance, AirTac, C&U) */}
        {machinery.componentBrands && machinery.componentBrands.length > 0 && (
          <Container>
            <MachineryComponents
              brands={machinery.componentBrands}
              componentDetails={machinery.componentDetails}
              sourceDocument={machinery.sourceDocument}
            />
          </Container>
        )}

        <Container>
          {/* Section 10: Related Machinery (up to 3 relevant products, excluding current) */}
          <MachineryRelatedProducts
            currentSlug={machinery.slug}
            categorySlug={machinery.categorySlug}
            allItems={MACHINERY_ITEMS}
          />
        </Container>

        <Container>
          {/* Section 11: Request a Quote (prominent industrial CTA) */}
          <MachineryQuoteCTA
            model={machinery.model}
            slug={machinery.slug}
            name={machinery.name}
          />
        </Container>
      </div>
    </div>
  );
}
