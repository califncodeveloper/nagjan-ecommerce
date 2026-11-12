import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustMetrics } from "@/components/home/TrustMetrics";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedMachinery } from "@/components/home/FeaturedMachinery";
import { MachineryCategories } from "@/components/home/MachineryCategories";
import { SemiIndianAdvantage } from "@/components/home/SemiIndianAdvantage";
import { SparePartsQuickFinder } from "@/components/home/SparePartsQuickFinder";
import { InfrastructureSection } from "@/components/home/InfrastructureSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { QuoteLeadSection } from "@/components/home/QuoteLeadSection";
import { ContactPreview } from "@/components/home/ContactPreview";

export const metadata: Metadata = {
  title: "NAGJAN | Industrial Corrugated Packaging Machinery & Spare Parts | Chennai, India",
  description:
    "Mount Kailash Printpack Machines manufactures and supplies NAGJAN corrugated cardboard production lines, WJ-100-1800 2PLY plants, SF-280 single facers, hydraulic mill roll stands, and 400+ ready spare parts in Chennai, India.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Company Trust Indicators */}
      <TrustMetrics />

      {/* 3. About NAGJAN & Mount Kailash Printpack Machines */}
      <AboutPreview />

      {/* 4. Featured Flagship Machinery */}
      <FeaturedMachinery />

      {/* 5. Machinery Capabilities & Categories */}
      <MachineryCategories />

      {/* 6. Semi-Indian Machine Advantage */}
      <SemiIndianAdvantage />

      {/* 7. Spare Parts Quick Finder */}
      <SparePartsQuickFinder />

      {/* 8. Infrastructure & Engineering Support Depots */}
      <InfrastructureSection />

      {/* 9. Why Choose NAGJAN */}
      <WhyChooseUs />

      {/* 10. Request a Quote Lead Generation CTA */}
      <QuoteLeadSection />

      {/* 11. Contact Information & Locations */}
      <ContactPreview />
    </div>
  );
}
