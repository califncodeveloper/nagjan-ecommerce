import React from "react";
import Link from "next/link";
import { Phone, Wrench, Mail, ShieldCheck } from "lucide-react";
import { Container } from "./Container";
import { COMPANY_CONTACT } from "@/data/navigation";

export function TopBar() {
  return (
    <div className="bg-[#013074] text-white text-xs border-b border-blue-900/50">
      <Container size="default">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:h-9 sm:py-0 gap-1.5 sm:gap-4">
          {/* Left: Positioning statement & Trust credentials */}
          <div className="flex items-center gap-2 text-slate-200 text-center sm:text-left">
            <ShieldCheck className="size-3.5 text-[#FEA81D] shrink-0 hidden md:inline-block" />
            <span className="font-medium tracking-tight text-[11px] sm:text-xs">
              {COMPANY_CONTACT.tagline}
            </span>
            <span className="hidden lg:inline text-blue-300/60">•</span>
            <span className="hidden lg:inline text-slate-300 font-normal text-[11px]">
              {COMPANY_CONTACT.legalName} (Est. {COMPANY_CONTACT.establishedYear})
            </span>
          </div>

          {/* Right: Verified Direct Contacts */}
          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-x-4 gap-y-1 text-slate-200">
            {/* Sales Contact */}
            <a
              href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
              className="flex items-center gap-1.5 hover:text-[#FEA81D] transition-colors group"
              title="Direct Sales Inquiry Phone"
            >
              <Phone className="size-3 text-[#FEA81D] group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-slate-300 text-[11px] hidden xl:inline">Sales:</span>
              <span className="font-semibold tabular-nums text-white group-hover:text-[#FEA81D] text-[11px] sm:text-xs">
                {COMPANY_CONTACT.phones.sales.display}
              </span>
            </a>

            <span className="text-blue-300/40 hidden sm:inline">|</span>

            {/* Service & Spares Hotline */}
            <a
              href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
              className="flex items-center gap-1.5 hover:text-[#FEA81D] transition-colors group"
              title="24/7 Service & Ready-Stock Spares Hotline"
            >
              <Wrench className="size-3 text-[#FEA81D] group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-slate-300 text-[11px] hidden xl:inline">Service:</span>
              <span className="font-semibold tabular-nums text-white group-hover:text-[#FEA81D] text-[11px] sm:text-xs">
                {COMPANY_CONTACT.phones.service.display}
              </span>
            </a>

            <span className="text-blue-300/40 hidden md:inline">|</span>

            {/* Official Sales Email */}
            <a
              href={`mailto:${COMPANY_CONTACT.email.sales}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#FEA81D] transition-colors group"
              title="Official Sales Inquiry Email"
            >
              <Mail className="size-3 text-[#FEA81D] group-hover:scale-110 transition-transform shrink-0" />
              <span className="font-medium text-white group-hover:text-[#FEA81D] text-[11px] sm:text-xs">
                {COMPANY_CONTACT.email.sales}
              </span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;

