import React from "react";
import { Package, Factory, CheckCircle2, ArrowRight } from "lucide-react";

interface MachineryApplicationsProps {
  model: string;
  applications: string[];
}

export function MachineryApplications({
  model,
  applications,
}: MachineryApplicationsProps) {
  if (!applications || applications.length === 0) return null;

  return (
    <section aria-labelledby="applications-heading" className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#013074]">
            Industrial Deployment
          </span>
          <h2
            id="applications-heading"
            className="text-xl sm:text-2xl font-bold font-heading text-slate-900"
          >
            Intended Applications &amp; Board Formats
          </h2>
        </div>
        <span className="text-xs font-medium text-slate-500">
          Target Manufacturing Environments
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {applications.map((app, idx) => (
          <div
            key={app}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#013074]/30 hover:bg-blue-50/30 transition-all space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="size-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FEA81D] shadow-2xs">
                <Package className="size-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-snug font-heading">
                {app}
              </h3>
            </div>

            <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-slate-500">
              <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
              <span>Standard plant application</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
