import React from "react";
import {
  Award,
  Layers,
  Settings,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { WHY_CHOOSE_US } from "@/data/homepage";

export function WhyChooseUs() {
  const iconMap = {
    Award: Award,
    Layers: Layers,
    Settings: Settings,
    ShieldCheck: ShieldCheck,
    Clock: Clock,
    CheckCircle: CheckCircle,
  };

  return (
    <section
      aria-label="Why Choose NAGJAN Machinery"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border"
    >
      <Container size="wide">
        <SectionHeading
          align="center"
          badge="Engineering Trust"
          title="Engineered for Continuous Corrugation Production"
          subtitle="Discover why packaging manufacturers across India depend on Mount Kailash Printpack Machines and the NAGJAN brand for production lines, single facers, and spare components."
          className="mb-14"
        />

        {/* 6 Trust Pillars Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((pillar, idx) => {
            const IconComp = iconMap[pillar.iconName] || ShieldCheck;

            return (
              <div
                key={idx}
                className="p-6 rounded-lg border border-border bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="size-11 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                      <IconComp className="size-5" />
                    </div>
                    {pillar.metric && (
                      <span className="font-mono text-xs font-bold text-primary bg-white px-2.5 py-1 rounded border border-border">
                        {pillar.metric}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;

