import React from "react";
import Link from "next/link";
import { Phone, Mail, Wrench, MapPin, ArrowRight } from "lucide-react";
import { COMPANY_CONTACT } from "@/data/navigation";

export function SparePartsEnquiryCTA() {
  return (
    <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 border border-slate-800 shadow-sm mt-12">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/20 text-[#FEA81D] text-xs font-bold border border-amber-500/30">
            <Wrench className="size-3.5" />
            <span>Chennai Central Spare Parts Depot</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Cannot find your exact machine part or need custom bore sizing?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our Madhavaram Godown stocks over 400+ spare parts for all Chinese, Taiwanese, and Indian corrugators. Speak directly with our chief spares engineer for dimensional matching and urgent dispatch.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
          <a
            href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
            className="inline-flex items-center justify-center gap-2 bg-[#FEA81D] hover:bg-[#E59516] active:bg-[#D4860D] text-[#0F172A] font-semibold text-xs sm:text-sm px-5 py-3 rounded-md shadow-xs transition-colors"
          >
            <Phone className="size-4" />
            <span>Hotline: {COMPANY_CONTACT.phones.service.display}</span>
          </a>

          <a
            href={`mailto:${COMPANY_CONTACT.email.sales}?subject=Custom%20Spare%20Parts%20Inquiry`}
            className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-xs sm:text-sm px-5 py-3 rounded-md transition-colors"
          >
            <Mail className="size-4 text-[#FEA81D]" />
            <span>Email Parts Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}

