"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { StatCounter } from "@/components/ui/stat-counter";
import { CTASection } from "@/components/ui/cta-section";
import { StaggerWrapper } from "@/components/motion-wrapper";
import { heroTextReveal } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    highlight: "Precision in an Emergency",
    quote: "A main line burst at 3 AM. While other services gave us voicemail, PlumbMaster had a technician at our door in 45 minutes. They re-engineered the connection to ensure it never happens again.",
    author: "Marcus Thorne",
    location: "River North, Chicago",
    rating: 5,
  },
  {
    quote: "PlumbMaster handled our full renovation's pipe architectural layout. Their documentation and blue-printing phase was something I've never seen from a plumbing contractor. They are effectively engineers.",
    author: "Dr. Elena Rodriguez",
    location: "Evanston, IL",
    rating: 5,
  },
  {
    highlight: "The Cleanest Job Site Ever",
    quote: "Most plumbers leave a mess. These guys wore boot covers, laid down technical mats, and left our bathroom cleaner than when they arrived. The new water filtration system is whisper quiet.",
    author: "Jameson Holt",
    location: "Gold Coast",
    rating: 5,
  },
  {
    highlight: "Master Plumbers Indeed",
    quote: "Solved a recurring drainage issue that three other companies failed to fix. They used a high-definition thermal imaging camera to find the blockage behind a wall — no unnecessary demolition.",
    author: "Sarah Jenkins",
    location: "Lincoln Park",
    rating: 5,
  },
  {
    quote: "The technician, David, was extremely knowledgeable. He walked me through the entire tankless heater installation and explained the ROI on the energy savings. High-level service.",
    author: "Robert Chen",
    location: "Oak Park",
    rating: 5,
  },
  {
    highlight: "Transparency in Pricing",
    quote: "No hidden fees, no 'surprise' parts. They gave me a digital quote upfront and stuck to it. The craftsmanship on the copper soldering was beautiful — almost a work of art.",
    author: "Linda G.",
    location: "Winnetka, IL",
    rating: 5,
  },
];

export function ReviewsContent() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-secondary via-secondary/95 to-primary/20" />
        <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
        <div className="container-wide relative z-10">
          <motion.div initial="hidden" animate="visible" variants={heroTextReveal}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground tracking-tight leading-[1.05] max-w-3xl">
              The Standards of
              <br />
              <span className="text-primary">Mastery.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-secondary-foreground/70 max-w-xl">
              Infrastructure is the silent backbone of every home. We don&apos;t just
              fix pipes — we restore peace of mind.
            </p>
          </motion.div>

          {/* Platform badges */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroTextReveal}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Badge className="bg-white/10 text-secondary-foreground border-0 rounded-full px-4 py-2 text-sm backdrop-blur-sm gap-2">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              4.9/5 Google Business
            </Badge>
            <Badge className="bg-white/10 text-secondary-foreground border-0 rounded-full px-4 py-2 text-sm backdrop-blur-sm">
              ✓ Verified on Yelp
            </Badge>
            <Badge className="bg-white/10 text-secondary-foreground border-0 rounded-full px-4 py-2 text-sm backdrop-blur-sm">
              🏆 Angi Super Service Award
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* ═══ REVIEWS GRID ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <TestimonialCard key={review.author} {...review} />
            ))}
          </StaggerWrapper>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <StatCounter value={5000} suffix="+" label="Satisfied Homeowners" />
            <StatCounter value={4} suffix=".9" label="Average Rating" />
            <StatCounter value={15000} suffix="+" label="Projects Completed" />
            <StatCounter value={30} suffix="+" label="Years of Service" />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection
        title="Experience the Mastery Yourself."
        description="Join over 5,000 satisfied homeowners who trust PlumbMaster for their most critical infrastructure needs."
        primaryAction={{ label: "Book a Service", href: "/booking" }}
        secondaryAction={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
