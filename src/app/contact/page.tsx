import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Wrench,
  Navigation as NavIcon,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | NAGJAN - Mount Kailash Printpack Machines",
  description:
    "Contact Mount Kailash Printpack Machines in Chennai. Registered office in Perungudi, assembly godown & spares depot in Madhavaram. Direct sales & service hotlines.",
  keywords: [
    "Contact NAGJAN",
    "Mount Kailash Printpack Machines contact",
    "NAGJAN phone number",
    "corrugated machine manufacturer Chennai",
    "Madhavaram spares godown",
    "Perungudi office NAGJAN",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact NAGJAN | Mount Kailash Printpack Machines",
    description:
      "Get in touch with our sales, engineering, and spare parts desks in Chennai. Direct phone and email assistance.",
    url: "/contact",
    siteName: "NAGJAN",
    type: "website",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_CONTACT.legalName,
    alternateName: COMPANY_CONTACT.brandName,
    image: "https://nagjan.com/logo/nagjan-logo.png",
    telephone: COMPANY_CONTACT.phones.sales.display,
    email: COMPANY_CONTACT.email.sales,
    url: "https://nagjan.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 21, Door No. 14, Third Cross, Thirumalai Nagar, Perungudi",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600096",
      addressCountry: "IN",
    },
    department: [
      {
        "@type": "LocalBusiness",
        name: "NAGJAN Assembly Godown & Spares Depot",
        telephone: COMPANY_CONTACT.phones.service.display,
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 1, Perumal Koil Street, Near Madhavaram New Bus Depot",
          addressLocality: "Madhavaram, Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600060",
          addressCountry: "IN",
        },
      },
    ],
  };

  // Google Maps external query URLs
  const perungudiMapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Plot No. 21 Door No. 14 Third Cross Thirumalai Nagar Perungudi Chennai 600096");

  const madhavaramMapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("No. 1 Perumal Koil Street Near Madhavaram New Bus Depot Madhavaram Chennai 600060");

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
                Contact Us
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Hero Section */}
      <header className="relative bg-gradient-to-b from-[#013074] via-[#02285e] to-[#01214e] text-white py-14 sm:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold text-slate-200">
              <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" />
              <span>Direct Commercial & Technical Desks</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
              Contact Mount Kailash Printpack Machines
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Connect with our corporate office in Perungudi or our assembly and spare-parts godown in Madhavaram, Chennai. We are ready to assist with machinery quotations, technical layout drawings, and express spare parts dispatch.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md"
              >
                <Phone className="size-4" />
                <span>Sales: {COMPANY_CONTACT.phones.sales.display}</span>
              </a>

              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all border border-white/20"
              >
                <Wrench className="size-4 text-[#FEA81D]" />
                <span>Spares Hotline: {COMPANY_CONTACT.phones.service.display}</span>
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Central Contact Directory (Cards) */}
      <section className="py-10 bg-white border-b border-slate-200" aria-label="Direct Communication Channels">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Sales Channel */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="size-9 rounded-lg bg-blue-100/70 text-[#013074] flex items-center justify-center">
                <Phone className="size-4 text-[#013074]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Machinery Sales Desk
              </span>
              <a
                href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                className="text-base font-bold text-[#013074] hover:underline block"
              >
                {COMPANY_CONTACT.phones.sales.display}
              </a>
              <p className="text-[11px] text-slate-500">
                New production lines & machine quotations
              </p>
            </div>

            {/* Service & Spares Channel */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="size-9 rounded-lg bg-amber-100/70 text-amber-900 flex items-center justify-center">
                <Wrench className="size-4 text-amber-700" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Service & Spares Hotline
              </span>
              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="text-base font-bold text-slate-900 hover:text-[#013074] hover:underline block"
              >
                {COMPANY_CONTACT.phones.service.display}
              </a>
              <p className="text-[11px] text-slate-500">
                400+ SKUs & technical troubleshooting
              </p>
            </div>

            {/* Corporate Landline */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="size-9 rounded-lg bg-blue-100/70 text-[#013074] flex items-center justify-center">
                <Building2 className="size-4 text-[#013074]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Office Landline
              </span>
              <a
                href={`tel:${COMPANY_CONTACT.phones.landline.tel}`}
                className="text-base font-bold text-slate-900 hover:text-[#013074] hover:underline block"
              >
                {COMPANY_CONTACT.phones.landline.display}
              </a>
              <p className="text-[11px] text-slate-500">
                Corporate administrative inquiries
              </p>
            </div>

            {/* Email Desk */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="size-9 rounded-lg bg-blue-100/70 text-[#013074] flex items-center justify-center">
                <Mail className="size-4 text-[#013074]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Official Email Desk
              </span>
              <a
                href={`mailto:${COMPANY_CONTACT.email.sales}`}
                className="text-base font-bold text-[#013074] hover:underline block truncate"
                title={COMPANY_CONTACT.email.sales}
              >
                {COMPANY_CONTACT.email.sales}
              </a>
              <p className="text-[11px] text-slate-500">
                Quotations, RFQs & tender documentation
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Contact Form & Operational Guidelines Section */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (7 cols): Functional Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column (5 cols): Office Hours & Instructions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-[#013074] text-xs font-bold border border-blue-200">
                  <Clock className="size-3.5 text-[#FEA81D]" />
                  <span>Business Operations</span>
                </div>

                <h3 className="text-lg font-bold font-heading text-slate-900">
                  Commercial & Dispatch Timings
                </h3>

                <div className="space-y-2 text-xs text-slate-600 border-b border-slate-100 pb-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Monday – Saturday:</span>
                    <span>09:30 AM – 06:30 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-700">Sunday:</span>
                    <span className="text-amber-800 font-medium">Closed (Emergency Hotline Active)</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <span className="font-bold text-slate-800 block">
                    Important Guidance for Packaging Plants:
                  </span>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      <strong>Machinery Quotations:</strong> Please specify required fluting width (1400/1600/1800mm), design speed, and whether live steam is already piped.
                    </li>
                    <li>
                      <strong>Consumable Spare Parts:</strong> For thin slitter blades or anvil covers, kindly mention the outer diameter (OD), inner bore (ID), and machine brand.
                    </li>
                    <li>
                      <strong>Civil Foundation Layouts:</strong> Provided free of charge with all confirmed machinery purchase orders.
                    </li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="size-4 text-[#013074] shrink-0" />
                    <span>Proprietorship: Mount Kailash Printpack Machines</span>
                  </div>
                </div>
              </div>

              {/* Quick Communication Office Card */}
              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#013074]">
                  Madhavaram Communication Office
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {COMPANY_CONTACT.addresses.communicationOffice.address}
                </p>
                <p className="text-xs text-slate-600">
                  <strong>Phone:</strong> {COMPANY_CONTACT.phones.service.display}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Verified Facilities & Maps Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#013074] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Chennai Facilities & Locations
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              Our Chennai Offices & Spares Depot
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Visiting our facilities? Click the direct directions links below to navigate with Google Maps.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Facility 1: Perungudi Corporate Office */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="size-5 text-[#013074]" />
                    <h3 className="text-base font-bold font-heading text-slate-900">
                      Registered Corporate Office
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-[#013074] uppercase">
                    Perungudi
                  </span>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <MapPin className="size-4 text-[#FEA81D] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {COMPANY_CONTACT.addresses.registeredOffice.address}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * Primary venue for formal contract signing, commercial negotiations, and corporate administration.
                </p>

                {/* Map Representation Container */}
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white h-48 relative flex items-center justify-center text-center p-4">
                  <div className="space-y-2 max-w-xs">
                    <MapPin className="size-8 text-[#013074] mx-auto animate-bounce" />
                    <p className="text-xs font-semibold text-slate-800">
                      Perungudi Corporate Office, Chennai
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Thirumalai Nagar, Perungudi, Chennai – 600 096
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={perungudiMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#013074] text-white text-xs font-bold hover:bg-[#022557] transition-colors"
                >
                  <NavIcon className="size-3.5 text-[#FEA81D]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="size-3 opacity-70" />
                </a>
              </div>
            </div>

            {/* Facility 2: Madhavaram Assembly Godown & Spares Depot */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Wrench className="size-5 text-[#013074]" />
                    <h3 className="text-base font-bold font-heading text-slate-900">
                      Assembly Godown & Spares Depot
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 uppercase">
                    Madhavaram
                  </span>
                </div>

                <div className="flex items-start gap-2 text-xs text-slate-600">
                  <MapPin className="size-4 text-[#FEA81D] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {COMPANY_CONTACT.addresses.godownDepot.address}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * 400+ spare parts ready stock warehouse, machinery testing bay, and electrical retrofitting workshop.
                </p>

                {/* Map Representation Container */}
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white h-48 relative flex items-center justify-center text-center p-4">
                  <div className="space-y-2 max-w-xs">
                    <MapPin className="size-8 text-[#FEA81D] mx-auto animate-bounce" />
                    <p className="text-xs font-semibold text-slate-800">
                      Madhavaram Assembly Godown & Depot
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Near Madhavaram New Bus Depot, Chennai – 600 060
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={madhavaramMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#013074] text-white text-xs font-bold hover:bg-[#022557] transition-colors"
                >
                  <NavIcon className="size-3.5 text-[#FEA81D]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="size-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              * Exact doorstep GPS pinpoint coordinates pending on-site verification beacon; verified locality links provided.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
