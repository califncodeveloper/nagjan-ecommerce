import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FEATURED_MACHINERY } from "@/data/homepage";

export function FeaturedMachinery() {
  return (
    <section
      aria-label="Featured Corrugation Machinery"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border"
    >
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Verified Machine Configurations"
            title="Precision Machinery for Modern Corrugated Packaging"
            subtitle="Explore industrial machinery designed for corrugation production, paper handling, cutting, and converting applications."
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors shrink-0 group self-start md:self-auto"
          >
            <span>Explore All Machinery</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Flagship Machinery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_MACHINERY.map((machine) => (
            <article
              key={machine.id}
              className="flex flex-col rounded-lg border border-border bg-white shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden group"
            >
              {/* Machine Photograph Container */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden border-b border-border">
                <Image
                  src={machine.image}
                  alt={machine.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-sm shadow-xs">
                  {machine.badge}
                </div>

                {/* Model Number Chip */}
                <div className="absolute bottom-2.5 right-3 bg-slate-900/90 text-[#FEA81D] font-mono text-xs font-bold px-2.5 py-1 rounded-sm border border-white/10">
                  {machine.model}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {machine.name}
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground mt-1">
                    {machine.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {machine.description}
                  </p>
                </div>

                {/* Technical Parameters Matrix */}
                <div className="bg-slate-50 rounded-md p-3.5 border border-slate-200/80 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Verified Parameters:
                  </p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs font-mono">
                    {machine.specs.slice(0, 4).map((spec, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase font-sans">
                          {spec.label}
                        </span>
                        <span className="font-bold text-foreground truncate">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Component Provenance Badges */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Component Provenance:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {machine.provenance.map((prov, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-border"
                      >
                        {prov}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="pt-2 flex items-center gap-3 border-t border-border">
                  <Link
                    href={machine.quoteHref}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-md bg-[#FEA81D] text-[#0F172A] font-bold text-xs tracking-wide hover:bg-[#e59516] transition-colors shadow-xs"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>

                  <Link
                    href={machine.href}
                    className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-white border border-border text-foreground hover:bg-slate-100 text-xs font-semibold transition-colors"
                  >
                    <span>Full Specs</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedMachinery;

