import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustMetrics } from "@/components/home/TrustMetrics";
import { FeaturedMachinery } from "@/components/home/FeaturedMachinery";
import { MachineryCategories } from "@/components/home/MachineryCategories";
import { WhyNAGJAN } from "@/components/home/WhyNAGJAN";
import { InfrastructureSection } from "@/components/home/InfrastructureSection";
import { SparePartsQuickFinder } from "@/components/home/SparePartsQuickFinder";
import { TestimonialsMarquee } from "@/components/home/TestimonialsMarquee";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "NAGJAN | Industrial Corrugated Packaging Machinery & Spare Parts | Chennai, India",
  description:
    "Mount Kailash Printpack Machines manufactures and supplies NAGJAN corrugated cardboard production lines, WJ-100-1800 2PLY plants, SF-280 single facers, hydraulic mill roll stands, and 400+ ready spare parts in Chennai, India.",
  keywords: [
    "corrugated packaging machinery",
    "2PLY production line",
    "single facer corrugation machine",
    "SF-280 single facer",
    "hydraulic mill roll stand",
    "slitter scorer thin blade",
    "corrugation spare parts Chennai",
    "Mount Kailash Printpack Machines",
    "NAGJAN",
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Premium Hero */}
      <HeroSection />

      {/* 2. Compact Trust Strip */}
      <TrustMetrics />

      {/* 3. Featured Machinery */}
      <FeaturedMachinery />

      {/* 4. Machinery Categories */}
      <MachineryCategories />

      {/* 5. Why NAGJAN */}
      <WhyNAGJAN />

      {/* 6. Engineering and Infrastructure */}
      <InfrastructureSection />

      {/* 7. Spare Parts */}
      <SparePartsQuickFinder />

      {/* 8. Animated Client Testimonials Marquee */}
      <TestimonialsMarquee />

      {/* 9. Final CTA */}
      <FinalCTA />
    </div>
  );
}
