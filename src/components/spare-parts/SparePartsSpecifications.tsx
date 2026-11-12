import React from "react";
import { CheckCircle2, Wrench } from "lucide-react";

interface SparePartsSpecificationsProps {
  specifications: Record<string, string>;
  attributes?: Record<string, string>;
}

export function SparePartsSpecifications({
  specifications,
  attributes,
}: SparePartsSpecificationsProps) {
  const specEntries = Object.entries(specifications);
  const attrEntries = attributes ? Object.entries(attributes) : [];

  if (specEntries.length === 0 && attrEntries.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
        <Wrench className="size-4 text-[#FEA81D]" />
        <h3 className="text-base font-bold font-heading text-slate-900">
          Technical Specifications
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm text-left">
          <tbody className="divide-y divide-slate-100">
            {specEntries.map(([label, val]) => (
              <tr key={label} className="hover:bg-slate-50/60 transition-colors">
                <th className="py-2.5 px-3 font-semibold text-slate-600 bg-slate-50/50 w-2/5">
                  {label}
                </th>
                <td className="py-2.5 px-3 font-medium text-slate-900 font-mono">
                  {val}
                </td>
              </tr>
            ))}
            {attrEntries.map(([label, val]) => (
              <tr key={label} className="hover:bg-slate-50/60 transition-colors">
                <th className="py-2.5 px-3 font-semibold text-slate-600 bg-slate-50/50 w-2/5">
                  {label}
                </th>
                <td className="py-2.5 px-3 font-medium text-slate-900">
                  {val}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

