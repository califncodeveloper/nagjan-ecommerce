/**
 * NAGJAN Homepage Domain Type Definitions
 * Corporate Entity: Mount Kailash Printpack Machines
 * Commercial Brand: NAGJAN
 */

export interface TrustMetricItem {
  value: string;
  label: string;
  description: string;
}

export interface FeaturedMachineSpec {
  label: string;
  value: string;
}

export interface FeaturedMachineItem {
  id: string;
  name: string;
  model: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  badge: string;
  description: string;
  specs: FeaturedMachineSpec[];
  provenance: string[];
  href: string;
  quoteHref: string;
}

export interface MachineCategoryItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: "Layers" | "Cpu" | "RotateCw" | "Scissors" | "PackageCheck" | "Printer";
  image?: string;
  keyModels: string;
  href: string;
}

export interface SemiIndianAdvantagePillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: "ShieldCheck" | "Zap" | "Wrench" | "Boxes" | "Gauge";
  highlight: string;
}

export interface SparePartFinderCategory {
  id: string;
  name: string;
  description: string;
  badge?: string;
  iconName: "CircleDot" | "Disc" | "Settings" | "Sliders" | "Activity" | "Cog" | "Zap" | "CheckCircle2";
  href: string;
}

export interface WhyChooseUsPillar {
  title: string;
  description: string;
  iconName: "Award" | "CheckCircle" | "Settings" | "Layers" | "ShieldCheck" | "Clock";
  metric?: string;
}

export interface InfrastructureFacility {
  title: string;
  subtitle: string;
  address: string;
  role: string;
  features: string[];
}

