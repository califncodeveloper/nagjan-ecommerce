import React from "react";
import Image from "next/image";
import { Layers, CheckCircle2, ChevronRight, Settings } from "lucide-react";
import { ConfigurationModule } from "@/types/machinery";

interface MachineryConfigurationProps {
  model: string;
  modules?: ConfigurationModule[];
}

export function MachineryConfiguration({
  model,
  modules,
}: MachineryConfigurationProps) {
  if (!modules || modules.length === 0) return null;

  return (
    <section aria-labelledby="configuration-heading" className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#013074]">
            Modular System Architecture
          </span>
          <h2
            id="configuration-heading"
            className="text-xl sm:text-2xl font-bold font-heading text-slate-900"
          >
            Constituent Modules &amp; Sub-Assemblies
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Integrated engineering sub-machines comprising the complete {model} installation.
          </p>
        </div>

        <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
          {modules.length} Integrated Modules
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, idx) => (
          <div
            key={mod.name}
            className="rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#013074]/30 transition-all p-5 flex flex-col justify-between shadow-2xs group"
          >
            <div className="space-y-4">
              {mod.image && (
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                  <Image
                    src={mod.image}
                    alt={mod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-slate-950/80 px-2 py-0.5 rounded text-[10px] font-mono text-white">
                    Module 0{idx + 1}
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  {mod.modelCode && (
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#013074] border border-blue-200">
                      {mod.modelCode}
                    </span>
                  )}
                  <span className="text-xs font-semibold text-slate-400">
                    Step {idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {mod.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {mod.summary}
                </p>
              </div>

              {mod.specs && mod.specs.length > 0 && (
                <div className="pt-3 border-t border-slate-200/80 space-y-1.5">
                  {mod.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between text-xs py-0.5"
                    >
                      <span className="text-slate-500 text-[11px]">{s.label}:</span>
                      <span className="font-mono font-semibold text-slate-800 text-[11px]">
                        {s.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
