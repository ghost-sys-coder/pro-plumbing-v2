"use client";

import Link from "next/link";
import { MotionWrapper } from "@/components/motion-wrapper";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
}: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/30" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="container-wide relative z-10 text-center">
        <MotionWrapper variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground tracking-tight max-w-3xl mx-auto leading-[1.1]">
            {title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-secondary-foreground/70 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryAction.href}>
              <Button
                size="lg"
                className="gradient-cta rounded-full px-8 h-12 text-sm font-semibold border-0 gap-2"
              >
                {primaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            {secondaryAction && (
              <Link href={secondaryAction.href}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 text-sm font-semibold border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10"
                >
                  {secondaryAction.label}
                </Button>
              </Link>
            )}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
