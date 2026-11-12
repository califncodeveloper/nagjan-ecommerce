"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, RotateCw, Scissors, Printer } from "lucide-react";
import { MachineryCategory } from "@/types/machinery";

export interface CategoryCardProps {
  category: MachineryCategory;
  machineCount?: number;
}

export function CategoryCard({ category, machineCount }: CategoryCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Layers":
        return <Layers className="size-4 text-[#FEA81D]" />;
      case "Cpu":
        return <Cpu className="size-4 text-[#FEA81D]" />;
      case "RotateCw":
        return <RotateCw className="size-4 text-[#FEA81D]" />;
      case "Scissors":
        return <Scissors className="size-4 text-[#FEA81D]" />;
      case "Printer":
      default:
        return <Printer className="size-4 text-[#FEA81D]" />;
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#013074]/30 transition-all flex flex-col h-full">
      {/* Category Image Header */}
      <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
        <Image
          src={category.primaryImage}
          alt={`${category.title} - Industrial packaging machinery category`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#013074]/90 backdrop-blur-sm text-white text-[11px] font-bold tracking-wider uppercase border border-white/20">
            {getIcon(category.iconName)}
            <span>{category.badge}</span>
          </span>
        </div>

        {typeof machineCount === "number" && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white font-mono text-xs font-semibold border border-white/10">
              {machineCount} {machineCount === 1 ? "Model" : "Models"}
            </span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-bold font-heading text-white drop-shadow-sm group-hover:text-[#FEA81D] transition-colors">
            {category.title}
          </h3>
        </div>
      </div>

      {/* Category Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {category.shortDescription}
          </p>

          {/* Model References */}
          {category.modelReferences && category.modelReferences.length > 0 && (
            <div className="mt-4 pt-3 border-t border-slate-100">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-2">
                Verified Machinery Models:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {category.modelReferences.map((model) => (
                  <span
                    key={model}
                    className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technical Specs Highlight */}
          {category.featuredSpecs && category.featuredSpecs.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {category.featuredSpecs.map((spec) => (
                <span
                  key={spec}
                  className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-50/70 text-[#013074] border border-blue-100"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTA Link to filtered products */}
        <div className="pt-3 border-t border-slate-100">
          <Link
            href={`/products?category=${category.slug}`}
            className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-slate-50 text-[#013074] text-xs font-bold hover:bg-[#013074] hover:text-white transition-all group/btn border border-slate-200 hover:border-[#013074]"
          >
            <span>Explore {category.title}</span>
            <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

