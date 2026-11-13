"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Maximize2,
} from "lucide-react";

interface MachineryImageGalleryProps {
  primaryImage: string;
  additionalImages?: string[];
  imageAlt: string;
  model: string;
  sourceDocument?: string;
}

export function MachineryImageGallery({
  primaryImage,
  additionalImages = [],
  imageAlt,
  model,
  sourceDocument,
}: MachineryImageGalleryProps) {
  // Combine genuine images without duplicates
  const allImages = React.useMemo(() => {
    const list = [primaryImage];
    if (additionalImages && additionalImages.length > 0) {
      additionalImages.forEach((img) => {
        if (img && !list.includes(img)) {
          list.push(img);
        }
      });
    }
    return list;
  }, [primaryImage, additionalImages]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = allImages[activeIndex] || primaryImage;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  // Keyboard accessibility for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll when lightbox is active
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen, handleNext, handlePrev, closeLightbox]);

  return (
    <div className="space-y-4">
      {/* Primary Display Frame */}
      <div
        className="relative group w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-md"
        style={{ aspectRatio: "16 / 10", minHeight: "260px" }}
      >
        <Image
          src={activeImage}
          alt={`${imageAlt} - View ${activeIndex + 1} of ${allImages.length}`}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          priority
        />

        {/* Gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

        {/* Authentic Machinery Badge */}
        <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-md border border-white/20 text-white text-[11px] font-semibold tracking-wide flex items-center gap-1.5 shadow-sm">
          <ShieldCheck className="size-3.5 text-[#FEA81D]" />
          <span>Authentic NAGJAN Machine View</span>
        </div>

        {/* Click to expand button */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-slate-900/85 hover:bg-[#013074] text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/20 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#FEA81D]"
          aria-label="Expand image to fullscreen lightbox"
        >
          <ZoomIn className="size-3.5 text-[#FEA81D]" />
          <span>Inspect Machine ({activeIndex + 1}/{allImages.length})</span>
        </button>

        {/* In-Frame Prev/Next navigation if multiple genuine images */}
        {allImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous machine photograph"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 size-9 rounded-full bg-slate-900/75 hover:bg-[#013074] text-white flex items-center justify-center border border-white/20 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100 shadow-lg"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next machine photograph"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 size-9 rounded-full bg-slate-900/75 hover:bg-[#013074] text-white flex items-center justify-center border border-white/20 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100 shadow-lg"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {/* Genuine Sub-Assembly Thumbnail Row (Only shown when multiple authentic photos exist) */}
      {allImages.length > 1 && (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-0.5">
            <span>Verified Photographic Perspectives:</span>
            <span className="font-mono text-[11px]">
              {activeIndex + 1} of {allImages.length}
            </span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {allImages.map((img, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={`${img}-${idx}`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all bg-slate-900 focus:outline-none ${
                    isActive
                      ? "border-[#013074] ring-2 ring-[#FEA81D]/80 shadow-md scale-[1.03]"
                      : "border-slate-200 hover:border-slate-400 opacity-80 hover:opacity-100"
                  }`}
                  aria-label={`Switch to perspective ${idx + 1} of ${model}`}
                >
                  <Image
                    src={img}
                    alt={`${model} viewpoint ${idx + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#013074]/15 border-b-2 border-[#FEA81D]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Source Document Provenance Note */}
      {sourceDocument && (
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 text-xs text-slate-600 flex items-start gap-2.5">
          <ShieldCheck className="size-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-semibold text-slate-900 block">
              Verified Technical Engineering Provenance
            </span>
            <p className="text-slate-600 leading-snug">
              Machine specifications &amp; assembly photographs verified against engineering quotation{" "}
              <span className="font-mono font-medium text-slate-800">
                {sourceDocument}
              </span>
              .
            </p>
          </div>
        </div>
      )}

      {/* Fullscreen Accessible Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Detailed machine view of ${model}`}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Header Toolbar */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-sm sm:text-base text-[#FEA81D]">
                {model}
              </span>
              <span className="text-slate-400 text-xs hidden sm:inline">
                | Engineering Specification Photo Inspection
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 font-mono">
                Image {activeIndex + 1} of {allImages.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="size-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#FEA81D]"
                aria-label="Close image lightbox (Escape)"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Central Image Viewport with Nav Arrows */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <div className="relative w-full h-full max-w-5xl max-h-[75vh]">
              <Image
                src={activeImage}
                alt={`${imageAlt} - Full resolution view`}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/60 hover:bg-[#013074] text-white flex items-center justify-center border border-white/20 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FEA81D]"
                  aria-label="Previous photograph (Left arrow)"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-black/60 hover:bg-[#013074] text-white flex items-center justify-center border border-white/20 transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-[#FEA81D]"
                  aria-label="Next photograph (Right arrow)"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}
          </div>

          {/* Footer Lightbox Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-white/10 overflow-x-auto py-2">
              {allImages.map((img, idx) => (
                <button
                  key={`lightbox-${img}-${idx}`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`relative size-14 sm:size-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    idx === activeIndex
                      ? "border-[#FEA81D] scale-105"
                      : "border-white/20 hover:border-white/50 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
