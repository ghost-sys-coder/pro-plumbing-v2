"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <MotionWrapper variants={fadeInUp} className={`mb-12 md:mb-16 ${className}`}>
      <div
        className={`max-w-2xl ${
          align === "center" ? "mx-auto text-center" : ""
        }`}
      >
        {label && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            {label}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </MotionWrapper>
  );
}
