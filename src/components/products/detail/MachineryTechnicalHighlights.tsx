import React from "react";
import {
  Gauge,
  Activity,
  Maximize2,
  Zap,
  Weight,
  Layers,
  Sparkles,
} from "lucide-react";
import { TechnicalSpecification } from "@/types/machinery";

interface MachineryTechnicalHighlightsProps {
  specifications: TechnicalSpecification[];
}

export function MachineryTechnicalHighlights({
  specifications,
}: MachineryTechnicalHighlightsProps) {
  // Select highlighted specs (or fallback to top 4)
  const highlightedSpecs = specifications
    .filter((s) => s.highlight)
    .slice(0, 5);

  const displaySpecs =
    highlightedSpecs.length >= 3 ? highlightedSpecs : specifications.slice(0, 4);

  if (displaySpecs.length === 0) return null;

  // Icon selector based on label semantics
  const getSpecIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("width") || l.includes("size") || l.includes("reach") || l.includes("area")) {
      return <Maximize2 className="size-5 text-[#FEA81D]" />;
    }
    if (l.includes("speed") || l.includes("capacity") || l.includes("cycle") || l.includes("output")) {
      return <Gauge className="size-5 text-[#FEA81D]" />;
    }
    if (l.includes("power") || l.includes("motor") || l.includes("drive") || l.includes("electric")) {
      return <Zap className="size-5 text-[#FEA81D]" />;
    }
    if (l.includes("weight") || l.includes("ton") || l.includes("load") || l.includes("shaft")) {
      return <Weight className="size-5 text-[#FEA81D]" />;
    }
    if (l.includes("roll") || l.includes("flute") || l.includes("diameter") || l.includes("blade")) {
      return <Layers className="size-5 text-[#FEA81D]" />;
    }
    return <Activity className="size-5 text-[#FEA81D]" />;
  };

  return (
    <section aria-labelledby="tech-highlights-heading" className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#013074]">
            Engineering Highlights
          </span>
          <h2
            id="tech-highlights-heading"
            className="text-xl sm:text-2xl font-bold font-heading text-slate-900"
          >
            Key Machine Parameters
          </h2>
        </div>
        <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#013074] border border-blue-200">
          Source Document Verified
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {displaySpecs.map((spec) => (
          <div
            key={spec.label}
            className="relative overflow-hidden bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm hover:border-[#013074]/40 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="size-10 rounded-xl bg-slate-50 group-hover:bg-blue-50/80 border border-slate-200/80 flex items-center justify-center transition-colors">
                {getSpecIcon(spec.label)}
              </div>
              <span className="text-[10px] font-mono text-slate-600 uppercase font-semibold">
                Parameter
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-500 block truncate">
                {spec.label}
              </span>
              <span className="font-mono font-bold text-slate-900 text-sm sm:text-base lg:text-lg block tracking-tight">
                {spec.value}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FEA81D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
}
