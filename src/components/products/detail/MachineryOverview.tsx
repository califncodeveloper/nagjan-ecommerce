import React from "react";
import { BookOpen, Cpu, Target, CheckCircle2, ShieldCheck } from "lucide-react";

interface MachineryOverviewProps {
  model: string;
  name: string;
  detailedOverview: string;
  workingPrinciple?: string;
  machineType: string;
  category: string;
}

export function MachineryOverview({
  model,
  name,
  detailedOverview,
  workingPrinciple,
  machineType,
  category,
}: MachineryOverviewProps) {
  return (
    <section aria-labelledby="overview-heading" className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#013074]">
            Engineering Overview
          </span>
          <h2
            id="overview-heading"
            className="text-xl sm:text-2xl font-bold font-heading text-slate-900"
          >
            Machinery Purpose &amp; Operational Architecture
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
            {machineType}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#013074] border border-blue-200">
            {category}
          </span>
        </div>
      </div>

      {/* Main Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="size-4 text-[#FEA81D]" />
            <span>Industrial Function &amp; Operating Characteristics</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {detailedOverview}
          </p>

          {/* Working Principle Section (where documented in source quotation) */}
          {workingPrinciple && (
            <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Cpu className="size-4 text-[#013074]" />
                <span>Documented Engineering Working Principle</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {workingPrinciple}
              </p>
            </div>
          )}
        </div>

        {/* Operational Highlights Aside */}
        <div className="lg:col-span-4 bg-slate-50/80 rounded-2xl border border-slate-200 p-5 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
            <Target className="size-4 text-[#FEA81D]" />
            <span>Design Standards</span>
          </h3>

          <ul className="space-y-3 text-xs text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Heavy-duty continuous industrial packaging production</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Precision-machined structural casting and dynamic balancing</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Standard 380V, 50Hz 3-phase industrial power compatibility</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Operator safety guards with emergency stops integrated</span>
            </li>
          </ul>

          <div className="pt-3 border-t border-slate-200/80">
            <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-[#013074]" />
              <span>Factory testing and alignment conducted prior to dispatch.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
