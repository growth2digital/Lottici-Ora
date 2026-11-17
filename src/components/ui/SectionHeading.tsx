import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  variant?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "light",
  className,
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl", alignStyles[align], className)}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1.5px] bg-[#C9974A]" />
          <span
            className={cn(
              "text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase",
              isDark ? "text-[#C9974A]" : "text-[#A07430]"
            )}
          >
            {eyebrow}
          </span>
          <span className="w-6 h-[1.5px] bg-[#C9974A]" />
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight leading-[1.15]",
          isDark ? "text-[#FAF8F5]" : "text-[#073B32]"
        )}
        style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal max-w-2xl",
            isDark ? "text-[#F3EFE6]/80" : "text-[#4A5D58]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

