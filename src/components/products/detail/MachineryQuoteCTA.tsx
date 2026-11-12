import React from "react";
import Link from "next/link";
import { FileText, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_CONTACT } from "@/data/navigation";

interface MachineryQuoteCTAProps {
  model: string;
  slug: string;
  name: string;
}

export function MachineryQuoteCTA({ model, slug, name }: MachineryQuoteCTAProps) {
  return (
    <section aria-labelledby="quote-cta-heading" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#013074] via-[#01255a] to-[#0b192c] text-white p-8 sm:p-12 lg:p-14 shadow-xl">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#fea81d_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 size-80 rounded-full bg-[#FEA81D]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FEA81D] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="size-4" />
          <span>B2B Industrial Quotation Desk</span>
        </div>

        <div className="space-y-3">
          <h2
            id="quote-cta-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight"
          >
            Discuss Your Machinery Requirements with NAGJAN
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Share your production requirements with our team to discuss the appropriate machine configuration for <span className="font-semibold text-white">{name} ({model})</span>.
          </p>
        </div>

        {/* Benefits checklist */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300 pt-2">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-4 text-[#FEA81D]" />
            <span>Detailed Parameter Sheet</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-4 text-[#FEA81D]" />
            <span>Factory Foundation Layout</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-4 text-[#FEA81D]" />
            <span>FOB / CIF Quotations</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="size-4 text-[#FEA81D]" />
            <span>Madhavaram Depot Inspection</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/request-quote?product=${slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#FEA81D] focus:ring-offset-2 focus:ring-offset-[#013074]"
          >
            <FileText className="size-5 shrink-0" />
            <span>Request a Machine Quote</span>
            <ArrowRight className="size-5 shrink-0" />
          </Link>

          <a
            href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base transition-colors border border-white/20 backdrop-blur-sm"
          >
            <Phone className="size-5 text-[#FEA81D] shrink-0" />
            <span>Call Sales Desk: {COMPANY_CONTACT.phones.sales.display}</span>
          </a>
        </div>

        <div className="pt-2 text-xs text-slate-400">
          Mount Kailash Printpack Machines • Sales &amp; Technical Consultation Support
        </div>
      </div>
    </section>
  );
}
