import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
  titleAs: TitleTag = "h2",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-3",
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md",
            isDark
              ? "bg-accent/20 text-accent border border-accent/30"
              : "bg-primary/10 text-primary border border-primary/20",
            isCenter && "justify-center"
          )}
        >
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          {badge}
        </div>
      )}
      <TitleTag
        className={cn(
          "font-heading font-bold tracking-tight text-balance",
          TitleTag === "h1"
            ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12]"
            : "text-2xl sm:text-3xl lg:text-4xl leading-[1.2]",
          isDark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </TitleTag>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed text-balance",
            isDark ? "text-slate-300" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;

