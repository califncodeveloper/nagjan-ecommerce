import React from "react";
import Link from "next/link";
import {
  Layers,
  Cpu,
  RotateCw,
  Scissors,
  PackageCheck,
  Printer,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { MACHINERY_CATEGORIES } from "@/data/homepage";

export function MachineryCategories() {
  const iconMap = {
    Layers: Layers,
    Cpu: Cpu,
    RotateCw: RotateCw,
    Scissors: Scissors,
    PackageCheck: PackageCheck,
    Printer: Printer,
  };

  return (
    <section
      aria-label="Machinery Capabilities & Categories"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-border"
    >
      <Container size="wide">
        <SectionHeading
          align="center"
          badge="Product Lines"
          title="Machinery Capabilities Across Corrugation Plants"
          subtitle="From complete 2-ply production lines to standalone converting and finishing systems, explore equipment engineered for dependable output."
          className="mb-12"
        />

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MACHINERY_CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Layers;

            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="group flex flex-col justify-between p-6 rounded-lg bg-white border border-border hover:border-primary/50 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="size-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded border border-border">
                      {cat.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 font-mono">
                      Models: {cat.keyModels}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-[#013074]">
                  <span>Explore Equipment</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default MachineryCategories;

