import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  FileText,
  Phone,
  Mail,
  ArrowLeft,
  CheckCircle2,
  Wrench,
  Boxes,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";
import { MACHINERY_ITEMS } from "@/data/machinery";
import { SPARE_PARTS_ITEMS } from "@/data/spare-parts";
import { RequestQuoteEngine } from "@/components/quote/RequestQuoteEngine";

export const metadata: Metadata = {
  title: "Request an Industrial Quotation | NAGJAN Machinery & Spare Parts",
  description:
    "Request formal technical quotations for 2PLY corrugation plants, single facers, reel stands, and spare parts proforma pricing from Mount Kailash Printpack Machines, Chennai.",
  keywords: [
    "request quote corrugator",
    "NAGJAN machine quotation",
    "corrugated machinery pricing",
    "spare parts proforma invoice",
    "WJ-100 quotation",
  ],
  alternates: {
    canonical: "/request-quote",
  },
  openGraph: {
    title: "Request a Machinery Quotation | NAGJAN",
    description:
      "Direct B2B engineering quotations for corrugator production lines, converting equipment, and genuine spare parts.",
    url: "/request-quote",
    siteName: "NAGJAN",
    type: "website",
  },
};

interface RequestQuotePageProps {
  searchParams: Promise<{
    product?: string;
    part?: string;
    sku?: string;
    service?: string;
  }>;
}

export default async function RequestQuotePage({ searchParams }: RequestQuotePageProps) {
  const resolvedSearchParams = await searchParams;
  const productSlug = resolvedSearchParams.product;
  const partSlug = resolvedSearchParams.part;
  const partSku = resolvedSearchParams.sku;

  const matchedProduct = productSlug
    ? MACHINERY_ITEMS.find(
        (item) => item.slug === productSlug || item.id === productSlug
      ) || null
    : null;

  const matchedPart = partSlug
    ? SPARE_PARTS_ITEMS.find(
        (item) =>
          item.slug === partSlug || item.id === partSlug || item.sku === partSku
      ) || null
    : partSku
    ? SPARE_PARTS_ITEMS.find((item) => item.sku === partSku) || null
    : null;

  const isSparePart = !!matchedPart;

  return (
    <div className="bg-slate-50 min-h-screen">
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
                Request a Quote
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
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-slate-200">
              <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" />
              <span>B2B Commercial & Engineering Desk</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
              {isSparePart
                ? `Spare Parts Technical Quotation: ${matchedPart.name}`
                : matchedProduct
                ? `Machinery Quotation: ${matchedProduct.name}`
                : "Request an Industrial Quotation"}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              {isSparePart
                ? "Our Chennai technical spares desk verifies machine models, shaft dimensions, and courier dispatch timelines directly from our Madhavaram Godown."
                : matchedProduct
                ? "Our sales engineering desk provides formal technical quotations including roller alloy metallurgy, Siemens/ABB electrical configurations, and civil foundation drawings."
                : "Submit your packaging production requirements. Mount Kailash Printpack Machines supplies complete corrugation plants, standalone single facers, and 400+ genuine spare parts."}
            </p>

            {/* Direct hotline bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                className="inline-flex items-center gap-1.5 font-bold text-[#FEA81D] hover:underline"
              >
                <Phone className="size-3.5" />
                <span>Sales: {COMPANY_CONTACT.phones.sales.display}</span>
              </a>
              <span className="text-white/40">•</span>
              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white hover:underline"
              >
                <Wrench className="size-3.5 text-[#FEA81D]" />
                <span>Spares Desk: {COMPANY_CONTACT.phones.service.display}</span>
              </a>
              <span className="text-white/40">•</span>
              <a
                href={`mailto:${COMPANY_CONTACT.email.sales}`}
                className="inline-flex items-center gap-1.5 font-semibold text-slate-200 hover:text-white hover:underline"
              >
                <Mail className="size-3.5 text-[#FEA81D]" />
                <span>{COMPANY_CONTACT.email.sales}</span>
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Main Form Section */}
      <main className="py-12 sm:py-16">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (8 cols): Quotation Engine Form */}
            <div className="lg:col-span-8">
              <RequestQuoteEngine
                initialProductSlug={productSlug}
                initialPartSlug={partSlug}
                initialSku={partSku}
                matchedProduct={matchedProduct}
                matchedPart={matchedPart}
                allMachinery={MACHINERY_ITEMS}
                allSpareParts={SPARE_PARTS_ITEMS}
              />
            </div>

            {/* Right Column (4 cols): Trust, Terms & FAQs */}
            <div className="lg:col-span-4 space-y-6">
              {/* Trust Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-[#013074] text-xs font-bold border border-blue-200">
                  <ShieldCheck className="size-3.5 text-[#FEA81D]" />
                  <span>Commercial Assurance</span>
                </div>

                <h3 className="text-base font-bold font-heading text-slate-900">
                  Quotation & Delivery Terms
                </h3>

                <ul className="space-y-3 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#013074] shrink-0 mt-0.5" />
                    <span>
                      <strong>Transparent Quotations:</strong> Formal PDF quotations issued under corporate letterhead with full specification breakdown.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#013074] shrink-0 mt-0.5" />
                    <span>
                      <strong>Civil Foundation Blueprints:</strong> Architectural layout and power load drawings provided free of charge upon purchase.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#013074] shrink-0 mt-0.5" />
                    <span>
                      <strong>Semi-Indian Retrofits:</strong> Standard Siemens & ABB motor integration with local component availability across India.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#013074] shrink-0 mt-0.5" />
                    <span>
                      <strong>Spares Logistics:</strong> Consumable tooling dispatched via express transport (VRL / TCI Freight) from Madhavaram Godown.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Chennai Facilities Card */}
              <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <Building2 className="size-4 text-[#013074]" />
                  <span>Mount Kailash Printpack Machines</span>
                </div>
                <p>
                  <strong>Registered Office:</strong> {COMPANY_CONTACT.addresses.registeredOffice.address}
                </p>
                <p>
                  <strong>Assembly Godown:</strong> {COMPANY_CONTACT.addresses.godownDepot.address}
                </p>
              </div>

              {/* Back links */}
              <div className="pt-2 flex flex-col gap-2 text-xs">
                {isSparePart ? (
                  <Link
                    href="/spare-parts"
                    className="inline-flex items-center gap-2 text-[#013074] font-semibold hover:text-[#FEA81D] transition-colors"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>Return to Spare Parts Catalogue</span>
                  </Link>
                ) : (
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-[#013074] font-semibold hover:text-[#FEA81D] transition-colors"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>Return to Machinery Catalogue</span>
                  </Link>
                )}

                <Link
                  href="/categories"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <ArrowLeft className="size-3.5" />
                  <span>Browse Master Category Directory</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
