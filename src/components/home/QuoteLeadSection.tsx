import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { QUOTE_LEAD_CONTENT } from "@/data/homepage";
import { COMPANY_CONTACT } from "@/data/navigation";

export function QuoteLeadSection() {
  return (
    <section
      aria-label="Request a Machine Quote"
      className="py-16 sm:py-20 lg:py-24 bg-[#013074] text-white relative overflow-hidden"
    >
      {/* Decorative Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FEA81D] bg-[#FEA81D]/15 border border-[#FEA81D]/30 rounded-md">
              <span className="size-2 rounded-full bg-[#FEA81D]" />
              Direct Factory Quotations
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15]">
            {QUOTE_LEAD_CONTENT.heading}
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {QUOTE_LEAD_CONTENT.subheading}
          </p>

          {/* Consultation Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-200 pt-4 pb-2 text-left sm:text-center">
            {QUOTE_LEAD_CONTENT.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-md p-3 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="size-3.5 text-[#FEA81D] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={QUOTE_LEAD_CONTENT.primaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-[#FEA81D] text-[#0F172A] font-bold text-sm tracking-wide shadow-md hover:bg-[#e59516] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>{QUOTE_LEAD_CONTENT.primaryCta.label}</span>
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href={QUOTE_LEAD_CONTENT.secondaryCta.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-white/10 text-white border border-white/20 font-semibold text-sm hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <PhoneCall className="size-4 text-[#FEA81D]" />
              <span>{QUOTE_LEAD_CONTENT.secondaryCta.label}</span>
            </Link>
          </div>

          {/* Direct Emergency Telephone Note */}
          <p className="text-xs text-slate-300 pt-2 font-mono">
            Direct Sales Hotline:{" "}
            <a
              href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
              className="text-[#FEA81D] font-bold hover:underline"
            >
              {COMPANY_CONTACT.phones.sales.display}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}

export default QuoteLeadSection;

