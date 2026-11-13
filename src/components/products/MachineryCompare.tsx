"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, X, ArrowRight, CheckCircle2, ChevronUp, ChevronDown } from "lucide-react";
import { MachineryItem } from "@/types/machinery";

export interface MachineryCompareProps {
  comparedItems: MachineryItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
}

export function MachineryCompare({
  comparedItems,
  onRemoveItem,
  onClearAll,
}: MachineryCompareProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (comparedItems.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Comparison Dock */}
      <aside
        aria-label="Machinery Comparison Bar"
        className="fixed bottom-20 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 max-w-4xl sm:mx-auto bg-slate-900/95 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-slate-700/80 p-3 sm:p-4 z-40 animate-in slide-in-from-bottom-4 duration-300"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left: Summary & Selected Items */}
          <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <div className="flex items-center gap-2 pr-2 border-r border-slate-700 shrink-0">
              <div className="size-8 rounded-lg bg-[#FEA81D] text-slate-950 flex items-center justify-center font-bold">
                <Scale className="size-4" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xs font-bold font-heading block">
                  Compare Specs
                </span>
                <span className="text-[10px] text-slate-400">
                  {comparedItems.length} of 3 selected
                </span>
              </div>
            </div>

            {/* Selected Machine Pills */}
            <div className="flex items-center gap-2">
              {comparedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 pl-1.5 pr-2 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs shrink-0"
                >
                  <div className="relative size-6 rounded overflow-hidden bg-slate-900 shrink-0">
                    <Image
                      src={item.primaryImage}
                      alt={item.model}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-mono font-semibold text-slate-200">
                    {item.model}
                  </span>
                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Remove ${item.model} from comparison`}
                    className="text-slate-400 hover:text-rose-400 transition-colors p-0.5"
                  >
                    <X className="size-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
            <button
              type="button"
              onClick={onClearAll}
              className="text-xs text-slate-400 hover:text-slate-200 px-2 py-1.5"
            >
              Clear All
            </button>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 text-xs font-bold transition-colors shadow-sm"
            >
              <span>Compare Specs ({comparedItems.length})</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Comparison Modal Dialog */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="comparison-modal-title"
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-6xl max-h-[92vh] overflow-y-auto flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-lg bg-[#013074] text-white flex items-center justify-center">
                  <Scale className="size-4 text-[#FEA81D]" />
                </div>
                <div>
                  <h2
                    id="comparison-modal-title"
                    className="text-base sm:text-lg font-bold font-heading text-slate-900"
                  >
                    Side-by-Side Machinery Technical Comparison
                  </h2>
                  <p className="text-xs text-slate-500">
                    Comparing {comparedItems.length} verified industrial machinery models
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Comparison Matrix Table */}
            <div className="p-4 sm:p-6 overflow-x-auto">
              <table className="w-full border-collapse text-xs min-w-[560px]">
                <thead>
                  <tr>
                    <th className="p-3 bg-slate-100/70 text-slate-500 font-bold uppercase tracking-wider text-left border border-slate-200 w-1/4">
                      Parameters
                    </th>
                    {comparedItems.map((item) => (
                      <th
                        key={item.id}
                        className="p-4 bg-slate-50 text-slate-900 border border-slate-200 text-left align-top"
                      >
                        <div className="space-y-2">
                          <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-900 border border-slate-200">
                            <Image
                              src={item.primaryImage}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="font-mono text-xs font-bold text-[#013074] block">
                            {item.model}
                          </span>
                          <span className="font-heading font-bold text-sm text-slate-900 block leading-snug">
                            {item.name}
                          </span>
                          <span className="text-[11px] text-slate-500 block">
                            {item.category}
                          </span>
                          <Link
                            href={`/request-quote?product=${item.slug}`}
                            className="mt-2 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-[#FEA81D] hover:bg-[#e59617] text-slate-950 font-bold transition-colors"
                          >
                            <span>Request Quote</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {/* Category & Type */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-700 bg-slate-50 border border-slate-200">
                      Machine Classification
                    </td>
                    {comparedItems.map((item) => (
                      <td
                        key={item.id}
                        className="p-3 border border-slate-200 text-slate-800"
                      >
                        <span className="font-semibold">{item.machineType}</span> —{" "}
                        {item.category}
                      </td>
                    ))}
                  </tr>

                  {/* Top Technical Specs */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-700 bg-slate-50 border border-slate-200">
                      Key Technical Parameters
                    </td>
                    {comparedItems.map((item) => (
                      <td
                        key={item.id}
                        className="p-3 border border-slate-200 align-top"
                      >
                        <ul className="space-y-1.5">
                          {item.technicalSpecifications.map((spec) => (
                            <li
                              key={spec.label}
                              className="flex items-start justify-between gap-2 border-b border-slate-100 pb-1"
                            >
                              <span className="text-slate-500 font-medium">
                                {spec.label}:
                              </span>
                              <span className="font-mono font-bold text-slate-900 text-right">
                                {spec.value}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Provenance Components */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-700 bg-slate-50 border border-slate-200">
                      Component Brands
                    </td>
                    {comparedItems.map((item) => (
                      <td
                        key={item.id}
                        className="p-3 border border-slate-200 align-top"
                      >
                        <div className="flex flex-wrap gap-1">
                          {item.componentBrands.map((brand) => (
                            <span
                              key={brand}
                              className="px-2 py-0.5 rounded bg-blue-50 text-[#013074] border border-blue-200 text-[10px] font-semibold"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Key Features */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-700 bg-slate-50 border border-slate-200">
                      Engineering Features
                    </td>
                    {comparedItems.map((item) => (
                      <td
                        key={item.id}
                        className="p-3 border border-slate-200 align-top"
                      >
                        <ul className="space-y-1 text-slate-700">
                          {item.keyFeatures.slice(0, 3).map((feat) => (
                            <li key={feat} className="flex items-start gap-1.5">
                              <CheckCircle2 className="size-3 text-[#FEA81D] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Primary Applications */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-700 bg-slate-50 border border-slate-200">
                      Applications
                    </td>
                    {comparedItems.map((item) => (
                      <td
                        key={item.id}
                        className="p-3 border border-slate-200 align-top"
                      >
                        <ul className="space-y-1 text-slate-600">
                          {item.applications.map((app) => (
                            <li key={app}>• {app}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Source Document Verification */}
                  <tr>
                    <td className="p-3 font-semibold text-slate-700 bg-slate-50 border border-slate-200">
                      Source Document
                    </td>
                    {comparedItems.map((item) => (
                      <td
                        key={item.id}
                        className="p-3 border border-slate-200 font-mono text-[11px] text-slate-600"
                      >
                        {item.sourceDocument || "NAGJAN Reference Catalogue"}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-between items-center z-10">
              <button
                type="button"
                onClick={onClearAll}
                className="text-xs font-semibold text-rose-600 hover:text-rose-800"
              >
                Clear Comparison
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

