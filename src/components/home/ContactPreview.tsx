import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Building2, Wrench, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { COMPANY_CONTACT } from "@/data/navigation";

export function ContactPreview() {
  return (
    <section
      aria-label="Direct Company Contact"
      className="py-14 sm:py-16 bg-white border-b border-border"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title */}
          <div className="lg:col-span-4 space-y-3">
            <SectionHeading
              badge="Factory & Sales Access"
              title="Speak Directly with Our Engineering Team"
              subtitle="Connect with technical sales, machine commissioning engineers, or our Madhavaram spares depot in Chennai."
            />
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline group"
              >
                <span>View Full Contact & Location Details</span>
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Cards: Sales Desk, Service Hotline, Depots */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Sales Inquiries */}
            <div className="p-4 rounded-lg border border-border bg-slate-50/70 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="size-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Phone className="size-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground">
                  {COMPANY_CONTACT.phones.sales.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  New machinery lines, 2PLY plants & quotes
                </p>
              </div>
              <div className="pt-2 border-t border-border/60">
                <a
                  href={`tel:${COMPANY_CONTACT.phones.sales.tel}`}
                  className="font-mono text-sm font-bold text-primary hover:underline block"
                >
                  {COMPANY_CONTACT.phones.sales.display}
                </a>
              </div>
            </div>

            {/* Service & Spares Hotline */}
            <div className="p-4 rounded-lg border border-border bg-slate-50/70 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="size-8 rounded bg-accent/20 text-[#013074] flex items-center justify-center">
                  <Wrench className="size-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground">
                  {COMPANY_CONTACT.phones.service.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Madhavaram depot parts & technical support
                </p>
              </div>
              <div className="pt-2 border-t border-border/60">
                <a
                  href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                  className="font-mono text-sm font-bold text-foreground hover:text-primary hover:underline block"
                >
                  {COMPANY_CONTACT.phones.service.display}
                </a>
              </div>
            </div>

            {/* Official Sales Email */}
            <div className="p-4 rounded-lg border border-border bg-slate-50/70 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="size-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="size-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground">
                  {COMPANY_CONTACT.email.label}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Formal RFQs, technical drawings & proposals
                </p>
              </div>
              <div className="pt-2 border-t border-border/60">
                <a
                  href={`mailto:${COMPANY_CONTACT.email.sales}`}
                  className="font-mono text-xs font-bold text-primary hover:underline block truncate"
                >
                  {COMPANY_CONTACT.email.sales}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Physical Locations Strip */}
        <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
          <div className="flex items-start gap-2.5">
            <Building2 className="size-4 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-foreground">
                {COMPANY_CONTACT.addresses.registeredOffice.title}:
              </span>{" "}
              {COMPANY_CONTACT.addresses.registeredOffice.address}
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="size-4 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-foreground">
                {COMPANY_CONTACT.addresses.godownDepot.title}:
              </span>{" "}
              {COMPANY_CONTACT.addresses.godownDepot.address}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactPreview;

