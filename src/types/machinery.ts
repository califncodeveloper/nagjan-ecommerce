/**
 * NAGJAN Machinery Types & Interfaces
 * Company: Mount Kailash Printpack Machines
 * Brand: NAGJAN
 * 
 * Strictly typed definitions for B2B industrial corrugation machinery,
 * technical parameter specifications, categories, and comparison attributes.
 */

export type MachineryAvailability =
  | "Verified Available"
  | "Manufactured to Order"
  | "In Stock at Depot";

export type MachineType =
  | "Complete Line"
  | "Single Facer"
  | "Mill Roll Stand"
  | "Cut-Off & Stacking"
  | "Converting & Finishing";

export type SpecGroupType =
  | "General Specifications"
  | "Mechanical Specifications"
  | "Drive & Motor Specifications"
  | "Electrical & Automation"
  | "Production Specifications"
  | "Dimensions & Utilities";

export interface TechnicalSpecification {
  label: string;
  value: string;
  highlight?: boolean;
  group?: SpecGroupType | string;
}

export interface EngineeringFeature {
  title: string;
  description: string;
  context?: string;
  icon?: string;
}

export interface ConfigurationModule {
  name: string;
  modelCode?: string;
  summary: string;
  specs?: { label: string; value: string }[];
  image?: string;
}

export interface ComponentBrandDetail {
  name: string;
  role: string;
  provenance?: string;
}

export interface MachineryItem {
  id: string;
  slug: string;
  name: string;
  model: string;
  category: string;
  categorySlug: string;
  machineType: MachineType;
  shortDescription: string;
  detailedOverview: string;
  workingPrinciple?: string;
  primaryImage: string;
  additionalImages: string[];
  imageAlt: string;
  technicalSpecifications: TechnicalSpecification[];
  keyFeatures: string[];
  engineeringFeatures?: EngineeringFeature[];
  applications: string[];
  componentBrands: string[];
  componentDetails?: ComponentBrandDetail[];
  configurationModules?: ConfigurationModule[];
  availabilityStatus: MachineryAvailability;
  quotationEligible: boolean;
  sourceDocument?: string;
  badge?: string;
}

export interface MachineryCategory {
  id: string;
  slug: string;
  aliases: string[];
  title: string;
  shortDescription: string;
  description: string;
  primaryImage: string;
  modelReferences: string[];
  badge: string;
  iconName: string;
  featuredSpecs: string[];
}

export interface MachineryFilterState {
  searchQuery: string;
  category: string;
  machineType: string;
  sortBy: "name-asc" | "name-desc" | "category" | "featured";
}
