"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, ZoomIn } from "lucide-react";

interface SparePartsGalleryProps {
  images: string[];
  name: string;
  sku: string;
}

export function SparePartsGallery({ images, name, sku }: SparePartsGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeImage = images[selectedIndex] || images[0] || "/logo/nagjan-logo.png";

  return (
    <div className="space-y-4">
      {/* Primary Display */}
      <div className="relative aspect-4/3 sm:aspect-square w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group">
        <Image
          src={activeImage}
          alt={`${name} - ${sku}`}
          fill
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Stock status badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-xs text-white text-xs font-semibold shadow-xs">
            <ShieldCheck className="size-3.5 text-emerald-400" />
            <span>Madhavaram Godown Stock</span>
          </span>
        </div>
      </div>

      {/* Thumbnails (if multiple) */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`relative size-16 sm:size-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                selectedIndex === idx
                  ? "border-[#013074] ring-2 ring-[#013074]/30"
                  : "border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

