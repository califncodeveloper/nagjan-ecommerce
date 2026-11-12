import React from "react";
import { Container } from "@/components/layout/Container";
import { TRUST_METRICS } from "@/data/homepage";

export function TrustMetrics() {
  return (
    <section
      aria-label="Company Trust Indicators"
      className="bg-white border-b border-border py-8 sm:py-10 shadow-xs"
    >
      <Container size="wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center text-center ${
                idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary font-mono tabular-nums tracking-tight">
                {metric.value}
              </div>
              <h3 className="font-heading font-semibold text-sm sm:text-base text-foreground mt-1">
                {metric.label}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 max-w-[240px] mx-auto leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrustMetrics;

