import React, { Suspense } from "react";
import { Metadata } from "next";
import { SparePartsClientView } from "./SparePartsClientView";

export const metadata: Metadata = {
  title: "Spare Parts & Consumables Catalogue (400+ SKUs) | NAGJAN",
  description:
    "Explore authentic NAGJAN corrugation machinery spare parts, tungsten thin blades, slitting knives, contactors, and pneumatic cylinders. Ready stock at Madhavaram Godown, Chennai.",
  keywords: [
    "corrugation spare parts",
    "slitter scorer thin blade",
    "MaxDura anvil cover",
    "corrugator bearings",
    "box stitching machine spares",
    "Chennai corrugated machine spares",
    "NAGJAN parts",
  ],
  alternates: {
    canonical: "https://nagjan.com/spare-parts",
  },
  openGraph: {
    title: "NAGJAN Spare Parts & Consumables Catalogue",
    description:
      "400+ ready stock spare parts for corrugated packaging machinery. Dispatched daily from Chennai Depot.",
    url: "https://nagjan.com/spare-parts",
    siteName: "NAGJAN",
    type: "website",
  },
};

export default function SparePartsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-slate-500 font-semibold text-sm">
          Loading NAGJAN spare parts catalogue...
        </div>
      }
    >
      <SparePartsClientView />
    </Suspense>
  );
}
