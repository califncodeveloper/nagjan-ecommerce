import React from "react";
import { CheckCircle2, Cog, AlertCircle } from "lucide-react";

interface SparePartsCompatibilityProps {
  compatibleMachines?: string[];
}

export function SparePartsCompatibility({
  compatibleMachines,
}: SparePartsCompatibilityProps) {
  if (!compatibleMachines || compatibleMachines.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Cog className="size-4 text-[#FEA81D]" />
          <h3 className="text-base font-bold font-heading text-slate-900">
            Machinery Compatibility
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Standard industrial consumable compatible across standard Chinese, Taiwanese, and Indian corrugated carton manufacturing equipment. Please verify your shaft diameter or mounting dimensions before dispatch.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
        <Cog className="size-4 text-[#FEA81D]" />
        <h3 className="text-base font-bold font-heading text-slate-900">
          Documented Machinery Compatibility
        </h3>
      </div>

      <p className="text-xs text-slate-500">
        This spare part is confirmed compatible with the following machinery models:
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {compatibleMachines.map((machine, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800"
          >
            <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>{machine}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

