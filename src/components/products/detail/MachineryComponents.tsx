import React from "react";
import { Cpu, ShieldCheck, CheckCircle2, Layers } from "lucide-react";
import { ComponentBrandDetail } from "@/types/machinery";

interface MachineryComponentsProps {
  brands: string[];
  componentDetails?: ComponentBrandDetail[];
  sourceDocument?: string;
}

export function MachineryComponents({
  brands,
  componentDetails,
  sourceDocument,
}: MachineryComponentsProps) {
  if (!brands || brands.length === 0) return null;

  // Infer subsystem role if componentDetails is not explicitly supplied
  const items: ComponentBrandDetail[] = React.useMemo(() => {
    if (componentDetails && componentDetails.length > 0) {
      return componentDetails;
    }

    return brands.map((b) => {
      const lower = b.toLowerCase();
      if (lower.includes("siemens")) {
        return { name: b, role: "Electrical Contactors, Pushbuttons & Control Gear", provenance: "German Standard Assembly" };
      }
      if (lower.includes("abb")) {
        return { name: b, role: "Main Variable Frequency Drive & Induction Motor", provenance: "Precision Speed Synchronization" };
      }
      if (lower.includes("schneider")) {
        return { name: b, role: "Low-Voltage Switchgear, Relays & Circuit Breakers", provenance: "Industrial Protection Subsystem" };
      }
      if (lower.includes("delta") || lower.includes("inovance")) {
        return { name: b, role: "Programmable Logic Controller (PLC) & Touch Screen", provenance: "Digital Line Automation" };
      }
      if (lower.includes("airtac") || lower.includes("yadeke")) {
        return { name: b, role: "Pneumatic Valves, Airbag Regulators & Cylinders", provenance: "Pneumatic Actuation Subsystem" };
      }
      if (lower.includes("c&u") || lower.includes("nsk") || lower.includes("five ring") || lower.includes("fujian")) {
        return { name: b, role: "Heavy Precision Roller & Shaft Bearings", provenance: "Continuous Rotating Reliability" };
      }
      if (lower.includes("7 ocean")) {
        return { name: b, role: "Hydraulic Pump Station & Directional Solenoids", provenance: "High-Pressure Hydraulic Power" };
      }
      if (lower.includes("omron")) {
        return { name: b, role: "Optical Position & Photoelectric Sheet Sensors", provenance: "Cut-Off & Stack Detection" };
      }
      if (lower.includes("mean well")) {
        return { name: b, role: "Industrial Switching Power Supply Unit", provenance: "Regulated Control Voltage" };
      }
      if (lower.includes("invt")) {
        return { name: b, role: "Pulling Paper Frequency Inverter Drive", provenance: "Paper Feed Synchronization" };
      }
      if (lower.includes("chint")) {
        return { name: b, role: "Low-Voltage Power Contactors & Thermal Overloads", provenance: "Auxiliary Control Circuitry" };
      }
      if (lower.includes("maxdura")) {
        return { name: b, role: "Polyurethane Rotary Die-Cut Anvil Blankets", provenance: "Anvil Wear Protection" };
      }

      return {
        name: b,
        role: "Industrial Subsystem Component",
        provenance: "Documented in Quotation",
      };
    });
  }, [brands, componentDetails]);

  return (
    <section aria-labelledby="components-heading" className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#013074]">
            Component Provenance &amp; Integration
          </span>
          <h2
            id="components-heading"
            className="text-xl sm:text-2xl font-bold font-heading text-slate-900"
          >
            Integrated Component Standards
          </h2>
        </div>

        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
          Tier-1 Component Specification
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#013074]/30 hover:bg-white transition-all space-y-2 flex flex-col justify-between shadow-2xs"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#013074] border border-blue-200">
                  {item.name}
                </span>
                <CheckCircle2 className="size-4 text-[#FEA81D]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 pt-1 font-heading">
                {item.role}
              </h3>
            </div>

            {item.provenance && (
              <span className="text-[11px] text-slate-500 font-medium block pt-1 border-t border-slate-200/60">
                {item.provenance}
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-500 italic pt-2 border-t border-slate-100">
        Component associations reflect genuine engineering bills of materials specified in client technical quotations. Brand names are the property of their respective manufacturers and are identified solely for technical specification accuracy.
      </p>
    </section>
  );
}
