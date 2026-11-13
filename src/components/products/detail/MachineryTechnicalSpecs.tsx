"use client";

import React, { useState, useMemo } from "react";
import {
  Gauge,
  Layers,
  Zap,
  Settings,
  Scale,
  Maximize2,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";
import { TechnicalSpecification, SpecGroupType } from "@/types/machinery";

interface MachineryTechnicalSpecsProps {
  model: string;
  specifications: TechnicalSpecification[];
}

export function MachineryTechnicalSpecs({
  model,
  specifications,
}: MachineryTechnicalSpecsProps) {
  // Predefined group taxonomy
  const standardGroups: SpecGroupType[] = [
    "General Specifications",
    "Mechanical Specifications",
    "Drive & Motor Specifications",
    "Electrical & Automation",
    "Production Specifications",
    "Dimensions & Utilities",
  ];

  // Group specifications dynamically based on explicit `group` property or auto-inference
  const groupedSpecs = useMemo(() => {
    const map = new Map<string, TechnicalSpecification[]>();

    specifications.forEach((spec) => {
      let groupName = spec.group;

      if (!groupName) {
        // Auto-infer group if not explicitly set
        const l = spec.label.toLowerCase();
        if (l.includes("width") || l.includes("space") || l.includes("dimension") || l.includes("length") || l.includes("heating") || l.includes("steam") || l.includes("weight capacity") || l.includes("capacity")) {
          groupName = "Dimensions & Utilities";
        } else if (l.includes("roll") || l.includes("flute") || l.includes("shaft") || l.includes("cylinder") || l.includes("brake") || l.includes("blade") || l.includes("chuck") || l.includes("wallboard") || l.includes("wall plate") || l.includes("knife")) {
          groupName = "Mechanical Specifications";
        } else if (l.includes("motor") || l.includes("drive") || l.includes("power") || l.includes("inverter") || l.includes("hydraulic station") || l.includes("blower")) {
          groupName = "Drive & Motor Specifications";
        } else if (l.includes("plc") || l.includes("screen") || l.includes("control") || l.includes("hmi") || l.includes("electrical") || l.includes("voltage") || l.includes("sensor")) {
          groupName = "Electrical & Automation";
        } else if (l.includes("speed") || l.includes("accuracy") || l.includes("precision") || l.includes("order") || l.includes("stitch") || l.includes("feeding") || l.includes("cut-off")) {
          groupName = "Production Specifications";
        } else {
          groupName = "General Specifications";
        }
      }

      if (!map.has(groupName)) {
        map.set(groupName, []);
      }
      map.get(groupName)!.push(spec);
    });

    return map;
  }, [specifications]);

  const availableGroups = Array.from(groupedSpecs.keys());
  const [selectedGroup, setSelectedGroup] = useState<string>("ALL");

  const filteredGroups = useMemo(() => {
    if (selectedGroup === "ALL") {
      return Array.from(groupedSpecs.entries());
    }
    const list = groupedSpecs.get(selectedGroup);
    return list ? [[selectedGroup, list] as [string, TechnicalSpecification[]]] : [];
  }, [selectedGroup, groupedSpecs]);

  const getGroupIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("mechanical") || n.includes("roll")) return <Settings className="size-4 text-[#FEA81D]" />;
    if (n.includes("drive") || n.includes("motor")) return <Zap className="size-4 text-[#FEA81D]" />;
    if (n.includes("electrical") || n.includes("automation")) return <Layers className="size-4 text-[#FEA81D]" />;
    if (n.includes("dimension") || n.includes("utility")) return <Maximize2 className="size-4 text-[#FEA81D]" />;
    if (n.includes("production")) return <Gauge className="size-4 text-[#FEA81D]" />;
    return <FileSpreadsheet className="size-4 text-[#FEA81D]" />;
  };

  return (
    <section aria-labelledby="tech-specs-heading" className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#013074]">
            Engineering Data Matrix
          </span>
          <h2
            id="tech-specs-heading"
            className="text-xl sm:text-2xl font-bold font-heading text-slate-900"
          >
            Detailed Technical Specifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Confirmed parameters for model <span className="font-mono font-bold text-slate-700">{model}</span> derived strictly from authentic quotation dossiers.
          </p>
        </div>

        {/* Group Filter Tabs */}
        {availableGroups.length > 1 && (
          <div className="flex items-center flex-wrap gap-1.5 p-1 bg-slate-100/80 rounded-xl text-xs font-semibold">
            <button
              type="button"
              onClick={() => setSelectedGroup("ALL")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedGroup === "ALL"
                  ? "bg-white text-[#013074] shadow-xs font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Categories ({specifications.length})
            </button>
            {availableGroups.map((group) => (
              <button
                key={group}
                type="button"
                onClick={() => setSelectedGroup(group)}
                className={`px-3 py-1.5 rounded-lg transition-all hidden md:inline-flex ${
                  selectedGroup === group
                    ? "bg-white text-[#013074] shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Specifications Grouped Tables */}
      <div className="space-y-6">
        {filteredGroups.map(([groupName, specs]) => (
          <div
            key={groupName}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs"
          >
            <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getGroupIcon(groupName)}
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 uppercase tracking-wider font-heading">
                  {groupName}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                {specs.length} {specs.length === 1 ? "metric" : "metrics"}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[360px]">
                <tbody>
                  {specs.map((spec, idx) => (
                    <tr
                      key={`${groupName}-${spec.label}`}
                      className={`transition-colors hover:bg-amber-50/30 ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <th
                        scope="row"
                        className="py-2.5 sm:py-3.5 px-3.5 sm:px-6 font-semibold text-slate-700 w-1/2 border-b border-slate-100"
                      >
                        <div className="flex items-center gap-2">
                          {spec.highlight && (
                            <span
                              title="Key Design Parameter"
                              className="size-1.5 rounded-full bg-[#FEA81D] shrink-0"
                            />
                          )}
                          <span>{spec.label}</span>
                        </div>
                      </th>
                      <td className="py-2.5 sm:py-3.5 px-3.5 sm:px-6 font-mono font-medium text-slate-900 w-1/2 border-b border-slate-100">
                        {spec.value || (
                          <span className="text-slate-400 italic font-sans text-xs">
                            To be confirmed
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
        <span>
          Note: Values reflect verified mechanical quotation standards. Optional customized widths and speeds are configured upon order.
        </span>
        <span className="font-mono text-slate-600">
          Mount Kailash Printpack Machines
        </span>
      </div>
    </section>
  );
}
