import React from "react";
import {
  CheckCircle2,
  Cpu,
  Wrench,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Settings,
} from "lucide-react";
import { EngineeringFeature } from "@/types/machinery";

interface MachineryFeaturesProps {
  features?: string[];
  engineeringFeatures?: EngineeringFeature[];
}

export function MachineryFeatures({
  features = [],
  engineeringFeatures = [],
}: MachineryFeaturesProps) {
  // Combine structured engineering features or parse string features
  const featureList: EngineeringFeature[] = React.useMemo(() => {
    if (engineeringFeatures && engineeringFeatures.length > 0) {
      return engineeringFeatures;
    }

    return features.map((feat) => {
      // If feature contains a colon or em-dash, split into heading and description
      if (feat.includes(":") || feat.includes(" - ")) {
        const parts = feat.includes(":") ? feat.split(":") : feat.split(" - ");
        return {
          title: parts[0].trim(),
          description: parts.slice(1).join(":").trim(),
          context: "Standard equipment configuration",
        };
      }

      // First few words as title
      const words = feat.split(" ");
      const titleWords = words.slice(0, 3).join(" ");
      return {
        title: titleWords,
        description: feat,
        context: "Factory verified specification",
      };
    });
  }, [features, engineeringFeatures]);

  if (featureList.length === 0) return null;

  const getFeatureIcon = (idx: number) => {
    const icons = [
      <Cpu key="cpu" className="size-5 text-[#FEA81D]" />,
      <Settings key="settings" className="size-5 text-[#FEA81D]" />,
      <ShieldCheck key="shield" className="size-5 text-[#FEA81D]" />,
      <Zap key="zap" className="size-5 text-[#FEA81D]" />,
      <Layers key="layers" className="size-5 text-[#FEA81D]" />,
      <Wrench key="wrench" className="size-5 text-[#FEA81D]" />,
    ];
    return icons[idx % icons.length];
  };

  return (
    <section aria-labelledby="engineering-features-heading" className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#013074]">
            Engineering Highlights
          </span>
          <h2
            id="engineering-features-heading"
            className="text-xl sm:text-2xl font-bold font-heading text-slate-900"
          >
            Key Engineering &amp; Mechanical Features
          </h2>
        </div>
        <span className="text-xs font-medium text-slate-500">
          {featureList.length} Verified Systems
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {featureList.map((feature, idx) => (
          <div
            key={`${feature.title}-${idx}`}
            className="relative bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 transition-all hover:border-[#013074]/30 hover:shadow-md space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <div className="size-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                {getFeatureIcon(idx)}
              </div>
              {feature.context && (
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/60 text-slate-700">
                  {feature.context}
                </span>
              )}
            </div>

            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#013074] transition-colors font-heading">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
