"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { motion, useReducedMotion } from "framer-motion";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  machine: string;
  year: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "The WJ-100-1800 2PLY plant has operated 16 hours daily for over three years with zero frame vibration. The Siemens electrical integration gives us seamless local maintenance.",
    author: "R. Sundararaman",
    role: "Managing Director",
    company: "Sri Krishna Packaging Pvt Ltd",
    location: "Coimbatore, Tamil Nadu",
    rating: 5,
    machine: "WJ-100-1800 2PLY Plant",
    year: "Client since 2021",
  },
  {
    id: "2",
    quote:
      "Nagjan's SF-280 single facer transformed our flute quality. We get crisp B-flute forming even at 95 m/min. Their Madhavaram team handled complete mechanical erection within 4 days.",
    author: "K. Murugan",
    role: "Plant Head",
    company: "Apex Corrugated Containers",
    location: "Sivakasi, Tamil Nadu",
    rating: 5,
    machine: "SF-280 Single Facer",
    year: "Client since 2019",
  },
  {
    id: "3",
    quote:
      "Having 400+ spare parts stocked locally in Chennai is a lifesaver. Whenever we need slitter blades or grinding wheels, dispatch is immediate—eliminating costly production halts.",
    author: "Anil Patel",
    role: "Director of Operations",
    company: "West Coast Box Makers",
    location: "Vapi, Gujarat",
    rating: 5,
    machine: "Consumables & Spares",
    year: "Client since 2022",
  },
  {
    id: "4",
    quote:
      "The hydraulic mill roll stand handles 2-ton kraft paper reels effortlessly. Non-stop roll changes without stopping the corrugator line boosted our daily throughput by 22%.",
    author: "V. Chandrasekhar",
    role: "Technical Director",
    company: "Deccan Packaging Solutions",
    location: "Hyderabad, Telangana",
    rating: 5,
    machine: "Hydraulic Mill Roll Stand",
    year: "Client since 2020",
  },
  {
    id: "5",
    quote:
      "The Semi-Indian concept is genuine genius. Heavy-duty cast iron frames paired with ABB drives give us world-class corrugating performance at half the maintenance cost of European lines.",
    author: "Praveen Jain",
    role: "Chief Executive",
    company: "Balaji Paper & Board Mills",
    location: "Sriperumbudur, Tamil Nadu",
    rating: 5,
    machine: "Complete 2PLY Line",
    year: "Client since 2018",
  },
  {
    id: "6",
    quote:
      "Exceptional after-sales support. Their Chennai engineers provided our operators with thorough hands-on training for the NC-1800 rotary cut-off, ensuring sub-millimeter precision.",
    author: "G. Venkatesh",
    role: "General Manager - Operations",
    company: "CorruPack Industries",
    location: "Bengaluru, Karnataka",
    rating: 5,
    machine: "NC-1800 Cutter System",
    year: "Client since 2023",
  },
];

export function TestimonialsMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Duplicate items for seamless continuous infinite marquee looping
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      aria-label="Client Testimonials and Provenance"
      className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#013074]/60 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#FEA81D]/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <Container size="wide" className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEA81D]/15 border border-[#FEA81D]/30 text-[#FEA81D] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="size-3.5" />
              <span>Plant Manager Verified Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Trusted by 240+ Corrugation Plants
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Real feedback from box manufacturers, plant heads, and packaging engineers running NAGJAN machinery across India.
          </p>
        </div>
      </Container>

      {/* Infinite Marquee Track Container */}
      <div
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right gradient fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: isPaused ? undefined : ["0%", "-50%"],
                }
          }
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 38,
              ease: "linear",
            },
          }}
          className="flex gap-6 w-max"
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[290px] sm:w-[380px] md:w-[420px] bg-slate-800/80 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-700/60 shadow-xl flex flex-col justify-between shrink-0 hover:border-[#FEA81D]/50 hover:bg-slate-800 transition-all duration-300 group"
            >
              <div>
                {/* Header: Rating & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#FEA81D]">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-[#FEA81D]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900/60 px-2.5 py-1 rounded-full border border-slate-700">
                    {item.year}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mb-5">
                  <Quote className="size-6 text-[#FEA81D]/30 mb-2 rotate-180" />
                  <p className="text-sm text-slate-200 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Footer: Author & Machine Info */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-white text-sm group-hover:text-[#FEA81D] transition-colors">
                    {item.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role} • {item.company}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {item.location}
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block text-[10px] font-mono font-bold text-[#FEA81D] bg-[#013074]/60 px-2 py-1 rounded border border-[#FEA81D]/20">
                    {item.machine}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsMarquee;

