import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Wrench, Zap } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ABOUT_PREVIEW } from "@/data/homepage";

export function AboutPreview() {
  return (
    <section
      aria-label="About NAGJAN & Mount Kailash Printpack Machines"
      className="py-12 sm:py-16 lg:py-24 bg-slate-50 border-b border-border"
    >
      <Container size="wide">
        {/* Mobile-only Section Title: Renders at top before the image on mobile/tablet */}
        <div className="block lg:hidden mb-6 sm:mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-primary/10 text-primary border border-primary/20">
            <span className="size-1.5 rounded-full bg-[#FEA81D] animate-pulse" />
            {ABOUT_PREVIEW.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight leading-[1.2]">
            {ABOUT_PREVIEW.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Machine & Depot Image Column:
              - On mobile/tablet: Renders immediately between Section Title and Description
              - On desktop (lg+): Maintains original left column placement (order-1)
          */}
          <div className="lg:col-span-5 order-1 lg:order-1">
            <div className="relative rounded-xl overflow-hidden border border-border bg-white shadow-md group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={ABOUT_PREVIEW.image.src}
                  alt={ABOUT_PREVIEW.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-slate-900/80 backdrop-blur-xs p-3 rounded border border-white/10">
                  <p className="font-semibold text-white">
                    Heavy-Duty SF-280 Single Facer Assembly
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Inspected & Retrofitted at Madhavaram Assembly Godown
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Spec Highlights Card under image */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-white p-2.5 rounded-md border border-border">
                <Shield className="size-4 text-primary mx-auto mb-1" />
                <p className="text-[10px] uppercase font-bold text-muted-foreground">
                  Frame Alloy
                </p>
                <p className="text-xs font-bold text-foreground">HT250 Iron</p>
              </div>
              <div className="bg-white p-2.5 rounded-md border border-border">
                <Zap className="size-4 text-accent mx-auto mb-1" />
                <p className="text-[10px] uppercase font-bold text-muted-foreground">
                  Electricals
                </p>
                <p className="text-xs font-bold text-foreground">Siemens / ABB</p>
              </div>
              <div className="bg-white p-2.5 rounded-md border border-border">
                <Wrench className="size-4 text-primary mx-auto mb-1" />
                <p className="text-[10px] uppercase font-bold text-muted-foreground">
                  Support
                </p>
                <p className="text-xs font-bold text-foreground">In-House Team</p>
              </div>
            </div>
          </div>

          {/* Editorial Copy Column:
              - On mobile/tablet: Description, bullets, and CTA follow after the image
              - On desktop (lg+): Preserves original full SectionHeading and editorial layout
          */}
          <div className="lg:col-span-7 order-2 lg:order-2 space-y-6">
            {/* Desktop-only full SectionHeading */}
            <div className="hidden lg:block">
              <SectionHeading
                badge={ABOUT_PREVIEW.eyebrow}
                title={ABOUT_PREVIEW.heading}
                subtitle={ABOUT_PREVIEW.intro}
              />
            </div>

            {/* Mobile-only subtitle positioned right after the image */}
            <p className="block lg:hidden text-base text-slate-700 font-medium leading-relaxed">
              {ABOUT_PREVIEW.intro}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>{ABOUT_PREVIEW.body1}</p>
              <p className="text-slate-800 font-medium">
                {ABOUT_PREVIEW.body2}
              </p>
            </div>

            {/* Verified Provenance Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ABOUT_PREVIEW.provenancePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-2 sm:pt-4">
              <Link
                href={ABOUT_PREVIEW.cta.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group"
              >
                <span>{ABOUT_PREVIEW.cta.label}</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;

