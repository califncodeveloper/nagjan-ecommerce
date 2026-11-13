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
  Sparkles,
  CheckCircle2,
  Package,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { COMPANY_CONTACT } from "@/data/navigation";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | NAGJAN - Mount Kailash Printpack Machines",
  description:
    "Connect with Mount Kailash Printpack Machines in Chennai. Registered office in Perungudi, assembly godown & 400+ spares depot in Madhavaram. Direct sales & engineering hotlines.",
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
      <div className="bg-white border-b border-slate-200 py-3.5">
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
              <li className="text-[#013074] font-semibold" aria-current="page">
                Contact & Facilities
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Hero Section */}
      <header className="relative bg-gradient-to-b from-[#011744] via-[#01255e] to-[#010f29] text-white py-16 sm:py-24 overflow-hidden">
        {/* Glow & Texture */}
        <div
          className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#FEA81D]/10 blur-[100px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-slate-200 shadow-xs">
              <span className="size-2 rounded-full bg-[#FEA81D] animate-pulse" />
              <span className="tracking-wide">Direct Sales & Engineering Desks</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white leading-[1.15]">
              Contact Mount Kailash <span className="text-[#FEA81D]">Printpack Machines</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-sans">
              Connect with our corporate office in Perungudi or our assembly and spares depot in Madhavaram, Chennai. We provide rapid technical consulting, plant layout planning, and express spare parts dispatch.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FEA81D] hover:bg-[#e59617] text-[#0F172A] font-extrabold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="size-4" />
                <span>Sales: {COMPANY_CONTACT.phones.sales.display}</span>
              </a>

              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 backdrop-blur-sm hover:-translate-y-0.5"
              >
                <Wrench className="size-4 text-[#FEA81D]" />
                <span>Spares Depot: {COMPANY_CONTACT.phones.service.display}</span>
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Direct Contact Directory (Cards) */}
      <section className="py-12 bg-white border-b border-slate-200 shadow-xs" aria-label="Direct Communication Channels">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sales Channel */}
            <div className="relative bg-white p-6 rounded-2xl border-2 border-slate-200 hover:border-[#013074] transition-all shadow-xs hover:shadow-md group">
              <div className="absolute top-0 left-6 right-6 h-1 bg-[#013074] rounded-t-sm" />
              <div className="size-10 rounded-xl bg-blue-50 text-[#013074] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Phone className="size-5 text-[#013074]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Machinery Sales Desk
              </span>
              <a
                href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                className="text-base font-extrabold text-[#013074] hover:text-[#FEA81D] hover:underline block mb-1 font-heading"
              >
                {COMPANY_CONTACT.phones.sales.display}
              </a>
              <p className="text-xs text-slate-500 leading-normal">
                New corrugated lines, fingerless facers & RFQs
              </p>
            </div>

            {/* Service & Spares Channel */}
            <div className="relative bg-white p-6 rounded-2xl border-2 border-slate-200 hover:border-[#FEA81D] transition-all shadow-xs hover:shadow-md group">
              <div className="absolute top-0 left-6 right-6 h-1 bg-[#FEA81D] rounded-t-sm" />
              <div className="size-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Wrench className="size-5 text-amber-600" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Service & Spares Hotline
              </span>
              <a
                href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                className="text-base font-extrabold text-slate-900 hover:text-[#FEA81D] hover:underline block mb-1 font-heading"
              >
                {COMPANY_CONTACT.phones.service.display}
              </a>
              <p className="text-xs text-slate-500 leading-normal">
                400+ SKUs, emergency field repairs & dispatch
              </p>
            </div>

            {/* Corporate Landline */}
            <div className="relative bg-white p-6 rounded-2xl border-2 border-slate-200 hover:border-[#013074] transition-all shadow-xs hover:shadow-md group">
              <div className="absolute top-0 left-6 right-6 h-1 bg-[#013074] rounded-t-sm" />
              <div className="size-10 rounded-xl bg-blue-50 text-[#013074] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Building2 className="size-5 text-[#013074]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Corporate Landline
              </span>
              <a
                href={`tel:${COMPANY_CONTACT.phones.landline.tel}`}
                className="text-base font-extrabold text-slate-900 hover:text-[#013074] hover:underline block mb-1 font-heading"
              >
                {COMPANY_CONTACT.phones.landline.display}
              </a>
              <p className="text-xs text-slate-500 leading-normal">
                Headquarters administrative & commercial desk
              </p>
            </div>

            {/* Email Desk */}
            <div className="relative bg-white p-6 rounded-2xl border-2 border-slate-200 hover:border-[#013074] transition-all shadow-xs hover:shadow-md group">
              <div className="absolute top-0 left-6 right-6 h-1 bg-[#013074] rounded-t-sm" />
              <div className="size-10 rounded-xl bg-blue-50 text-[#013074] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Mail className="size-5 text-[#013074]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Official Email Desk
              </span>
              <a
                href={`mailto:${COMPANY_CONTACT.email.sales}`}
                className="text-base font-extrabold text-[#013074] hover:text-[#FEA81D] hover:underline block truncate mb-1 font-heading"
                title={COMPANY_CONTACT.email.sales}
              >
                {COMPANY_CONTACT.email.sales}
              </a>
              <p className="text-xs text-slate-500 leading-normal">
                Tender documentation, formal quotes & POs
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Contact Form & Operational Guidelines Section */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (7 cols): Functional Contact Form */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="mb-6 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#013074] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Fast Direct Inquiry
                </span>
                <h2 className="text-2xl font-extrabold font-heading text-slate-900 tracking-tight pt-2">
                  Send Commercial or Technical Inquiry
                </h2>
                <p className="text-xs text-slate-500">
                  Receive engineering response with layout guidelines and pricing within 4 business hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right Column (5 cols): Office Hours & Instructions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#013074] text-xs font-bold border border-blue-200">
                  <Clock className="size-3.5 text-[#FEA81D]" />
                  <span>Business Operations</span>
                </div>

                <h3 className="text-lg font-bold font-heading text-slate-900">
                  Operating & Dispatch Timings
                </h3>

                <div className="space-y-3 text-xs text-slate-600 border-b border-slate-100 pb-5">
                  <div className="flex justify-between items-center py-1">
                    <span className="font-semibold text-slate-800">Monday – Saturday:</span>
                    <span className="font-mono text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">09:30 AM – 06:30 PM IST</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-semibold text-slate-800">Sunday:</span>
                    <span className="text-amber-800 font-semibold bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">Emergency Spares Dispatch Active</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <span className="font-bold text-slate-900 text-sm block">
                    Important Guidance for Fast Quotes:
                  </span>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-[#013074] shrink-0 mt-0.5" />
                      <span><strong>Machinery Lines:</strong> Specify paper width (1400/1600/1800mm), design speed (m/min), and steam boiler status.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-[#013074] shrink-0 mt-0.5" />
                      <span><strong>Consumable Spares:</strong> Provide outer/inner diameter and machine make for anvil covers, slitting knives or friction wheels.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-[#013074] shrink-0 mt-0.5" />
                      <span><strong>Free Layout Plans:</strong> Complete foundation civil blueprint supplied with every plant purchase order.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="size-4 text-[#013074] shrink-0" />
                    <span>Proprietorship: <strong>{COMPANY_CONTACT.legalName}</strong></span>
                  </div>
                </div>
              </div>

              {/* Quick Communication Office Card */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-6 rounded-3xl border border-blue-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Building2 className="size-4 text-[#013074]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#013074]">
                    Madhavaram Communication Office
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-sans">
                  {COMPANY_CONTACT.addresses.communicationOffice.address}
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs text-slate-700">
                  <Phone className="size-3.5 text-[#013074]" />
                  <span><strong>Support Line:</strong> {COMPANY_CONTACT.phones.service.display}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Verified Facilities & Maps Section */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#013074] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              Chennai Facilities & Godowns
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              Visit Our Chennai Corporate Office & Spares Depot
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Visiting in person? Use the verified Google Maps direct links below for turn-by-turn navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Facility 1: Perungudi Corporate Office */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-lg bg-[#013074] text-white flex items-center justify-center">
                      <Building2 className="size-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-heading text-slate-900">
                        Registered Corporate Office
                      </h3>
                      <span className="text-[11px] text-slate-500">Commercial & Executive HQ</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-[#013074] uppercase tracking-wider">
                    Perungudi
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <MapPin className="size-4 text-[#FEA81D] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {COMPANY_CONTACT.addresses.registeredOffice.address}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * Primary venue for contract signing, machinery technical layout reviews, and commercial negotiations.
                </p>

                {/* Map Representation Container */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white h-48 relative flex items-center justify-center text-center p-6 shadow-inner">
                  <div className="space-y-2 max-w-xs">
                    <div className="size-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-[#013074]">
                      <MapPin className="size-6 text-[#013074]" />
                    </div>
                    <p className="text-xs font-bold text-slate-900 font-heading">
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
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#013074] text-white text-xs font-bold hover:bg-[#022557] transition-all shadow-sm hover:shadow"
                >
                  <NavIcon className="size-3.5 text-[#FEA81D]" />
                  <span>Navigate with Google Maps</span>
                  <ExternalLink className="size-3 opacity-70" />
                </a>
              </div>
            </div>

            {/* Facility 2: Madhavaram Assembly Godown & Spares Depot */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-lg bg-[#FEA81D] text-[#0F172A] flex items-center justify-center">
                      <Wrench className="size-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-heading text-slate-900">
                        Assembly Godown & Spares Depot
                      </h3>
                      <span className="text-[11px] text-slate-500">Logistics & Testing Workshop</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 uppercase tracking-wider">
                    Madhavaram
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <MapPin className="size-4 text-[#FEA81D] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {COMPANY_CONTACT.addresses.godownDepot.address}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * 400+ spare parts ready warehouse, machine testing bay, electrical retrofitting & live inspections.
                </p>

                {/* Map Representation Container */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white h-48 relative flex items-center justify-center text-center p-6 shadow-inner">
                  <div className="space-y-2 max-w-xs">
                    <div className="size-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto text-[#FEA81D]">
                      <Package className="size-6 text-amber-600" />
                    </div>
                    <p className="text-xs font-bold text-slate-900 font-heading">
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
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#013074] text-white text-xs font-bold hover:bg-[#022557] transition-all shadow-sm hover:shadow"
                >
                  <NavIcon className="size-3.5 text-[#FEA81D]" />
                  <span>Navigate with Google Maps</span>
                  <ExternalLink className="size-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-slate-500">
              * In-person inspections of machinery and spare parts warehouse available Monday through Saturday.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
