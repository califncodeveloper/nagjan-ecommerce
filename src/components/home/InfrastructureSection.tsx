import React from "react";
import Link from "next/link";
import { Building2, MapPin, CheckCircle2, Phone, Mail, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { INFRASTRUCTURE_FACILITIES } from "@/data/homepage";
import { COMPANY_CONTACT } from "@/data/navigation";

export function InfrastructureSection() {
  return (
    <section
      aria-label="Infrastructure & Technical Support Depots"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-border"
    >
      <Container size="wide">
        <SectionHeading
          badge="Physical Facilities & Depots"
          title="Engineering & Assembly Infrastructure"
          subtitle="Two dedicated facilities in Chennai provide comprehensive machine customization, electrical retrofitting, spare-parts storage, and technical support."
          className="mb-12"
        />

        {/* 2 Facility Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {INFRASTRUCTURE_FACILITIES.map((facility, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      {facility.title}
                    </h3>
                    <p className="text-xs font-semibold text-accent-foreground/80 mt-0.5">
                      {facility.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-muted-foreground bg-slate-50 p-3 rounded-md border border-border">
                  <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{facility.address}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {facility.role}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Facility Capabilities:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground">
                    {facility.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-accent shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Contact */}
              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4 text-slate-600">
                  <a
                    href={`tel:${COMPANY_CONTACT.phones.service.tel}`}
                    className="inline-flex items-center gap-1.5 hover:text-primary font-medium"
                  >
                    <Phone className="size-3 text-primary" />
                    <span>{COMPANY_CONTACT.phones.service.display}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email.sales}`}
                    className="inline-flex items-center gap-1.5 hover:text-primary font-medium"
                  >
                    <Mail className="size-3 text-primary" />
                    <span>{COMPANY_CONTACT.email.sales}</span>
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="font-bold text-primary inline-flex items-center gap-1 hover:underline"
                >
                  <span>Facility Details</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default InfrastructureSection;

