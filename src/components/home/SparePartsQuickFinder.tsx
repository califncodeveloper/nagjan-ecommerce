import React from "react";
import Link from "next/link";
import {
  Disc,
  CircleDot,
  Cog,
  Activity,
  Sliders,
  Settings,
  Zap,
  CheckCircle2,
  ArrowRight,
  Package,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SPARE_PARTS_FINDER } from "@/data/homepage";

export function SparePartsQuickFinder() {
  const iconMap = {
    Disc: Disc,
    CircleDot: CircleDot,
    Cog: Cog,
    Activity: Activity,
    Sliders: Sliders,
    Settings: Settings,
    Zap: Zap,
    CheckCircle2: CheckCircle2,
  };

  return (
    <section
      aria-label="Spare Parts Quick Finder"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border"
    >
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Consumables & Spares Depot"
            title="Keep Your Production Running."
            subtitle="Find essential consumables, replacement components, and machine accessories for corrugated packaging operations. Ready stock available at our Madhavaram Godown in Chennai."
          />
          <Link
            href="/spare-parts"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors shrink-0 group self-start md:self-auto"
          >
            <span>Explore All 400+ Spare Parts</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 9 Spare Part Categories Grid (3x3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPARE_PARTS_FINDER.map((part) => {
            const IconComp = iconMap[part.iconName] || Disc;

            return (
              <Link
                key={part.id}
                href={part.href}
                className="group flex flex-col justify-between p-5 rounded-lg border border-border bg-slate-50/50 hover:bg-white hover:border-primary/40 hover:shadow-sm transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="size-10 rounded-md bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComp className="size-5" />
                    </div>
                    {part.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded border border-border">
                        {part.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-base text-foreground group-hover:text-primary transition-colors">
                      {part.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {part.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Browse Category</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Madhavaram Depot Trust Note */}
        <div className="mt-10 p-5 rounded-lg bg-slate-50 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-accent/20 text-accent-foreground flex items-center justify-center shrink-0">
              <Package className="size-5 text-[#013074]" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-foreground">
                Madhavaram Assembly & Spares Depot Stock
              </h4>
              <p className="text-xs text-muted-foreground">
                We maintain active inventory of over 400 consumable items in Chennai to minimize emergency downtime for packaging plants across India.
              </p>
            </div>
          </div>

          <Link
            href="/spare-parts"
            className="inline-flex items-center justify-center h-10 px-5 rounded-md bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors shrink-0"
          >
            Open Spares Catalogue
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default SparePartsQuickFinder;

