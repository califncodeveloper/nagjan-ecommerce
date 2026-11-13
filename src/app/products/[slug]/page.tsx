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
      {/* 1. Breadcrumb Navigation */}
      <MachineryBreadcrumb
        categoryTitle={machinery.category}
        categorySlug={machinery.categorySlug}
        model={machinery.model}
      />

      <div className="py-8 sm:py-12 space-y-8 lg:space-y-10">
        {/* 2. Product Hero Dossier: Gallery + Key Info + Quotation Action */}
        <Container>
          <MachineryDetailHero machinery={machinery} />
        </Container>

        {/* 3. Technical Highlights Strip */}
        <Container>
          <MachineryTechnicalHighlights specifications={machinery.technicalSpecifications} />
        </Container>

        {/* 4. Machinery Function & Operating Characteristics */}
        <Container>
          <MachineryOverview
            model={machinery.model}
            name={machinery.name}
            detailedOverview={machinery.detailedOverview}
            workingPrinciple={machinery.workingPrinciple}
            machineType={machinery.machineType}
            category={machinery.category}
          />
        </Container>

        {/* 5. Modular Sub-Assemblies (for complex lines e.g. WJ-100-1800) */}
        {machinery.configurationModules && machinery.configurationModules.length > 0 && (
          <Container>
            <MachineryConfiguration
              model={machinery.model}
              modules={machinery.configurationModules}
            />
          </Container>
        )}

        {/* 6. Comprehensive Technical Specifications Table */}
        <Container>
          <MachineryTechnicalSpecs
            model={machinery.model}
            specifications={machinery.technicalSpecifications}
          />
        </Container>

        {/* 7. Key Features & Industrial Applications Grid */}
        <Container>
          <div className="grid grid-cols-1 gap-8">
            <MachineryFeatures
              features={machinery.keyFeatures}
              engineeringFeatures={machinery.engineeringFeatures}
            />
            <MachineryApplications
              model={machinery.model}
              applications={machinery.applications}
            />
          </div>
        </Container>

        {/* 8. Component Provenance (Siemens, ABB, Schneider, C&U) */}
        {machinery.componentBrands && machinery.componentBrands.length > 0 && (
          <Container>
            <MachineryComponents
              brands={machinery.componentBrands}
              componentDetails={machinery.componentDetails}
              sourceDocument={machinery.sourceDocument}
            />
          </Container>
        )}

        {/* 9. Related Machinery Lines */}
        <Container>
          <MachineryRelatedProducts
            currentSlug={machinery.slug}
            categorySlug={machinery.categorySlug}
            allItems={MACHINERY_ITEMS}
          />
        </Container>

        {/* 10. Direct Quote Callout */}
        <Container>
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
