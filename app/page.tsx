"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home as HomeIcon, Building2, AlertTriangle, Search, CheckCircle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { StatCounter } from "@/components/ui/stat-counter";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CTASection } from "@/components/ui/cta-section";
import { MotionWrapper, StaggerWrapper } from "@/components/motion-wrapper";
import { fadeInLeft, fadeInRight, heroTextReveal, staggerItem } from "@/lib/animations";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-secondary via-secondary/95 to-secondary/80" />
        <div className="absolute inset-0 grid-overlay opacity-[0.06]" />
        {/* Decorative orbs */}
        <div className="absolute -top-40 -right-40 h-125 w-125 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-20 h-100 w-100 rounded-full bg-tertiary/10 blur-[100px]" />

        <div className="container-wide relative z-10 py-32 md:py-40">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroTextReveal}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-secondary-foreground/80 tracking-wide uppercase">
                Serving the Tri-State Since 1994
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={heroTextReveal}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground tracking-tight leading-[1.05]"
            >
              Precision Engineering
              <br />
              <span className="text-primary">Meets Master</span>
              <br />
              Craftsmanship.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={heroTextReveal}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base md:text-lg text-secondary-foreground/70 max-w-xl leading-relaxed"
            >
              We deliver sophisticated plumbing infrastructure solutions
              for residential and commercial systems with surgical accuracy
              and architectural precision.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroTextReveal}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/booking">
                <Button className="gradient-cta rounded-full px-8 h-12 text-sm font-semibold border-0 gap-2 w-full sm:w-auto">
                  Request Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="rounded-full px-8 h-12 text-sm font-semibold border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 w-full sm:w-auto"
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Emergency Service
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Our Divisions"
            title="Specialized Technical Solutions"
            description="From boutique residential installations to high-capacity industrial systems, our master plumbers deliver engineering-grade solutions."
          />

          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon={HomeIcon}
              title="Residential Infrastructure"
              description="Comprehensive home systems, architectural kitchen and bath installations, and whole-home filtration."
              features={["Boutique Fixture Installation", "Precision Leak Detection", "Smart Home Integration"]}
            />
            <ServiceCard
              icon={Building2}
              title="Commercial Systems"
              description="High-capacity maintenance for industrial and office complexes with enterprise-level water management."
            />
            <ServiceCard
              icon={AlertTriangle}
              title="Emergency Repair"
              description="Priority dispatch within 60 minutes. Our 24/7 technical team is mobilized for immediate structural emergencies."
              accent
            />
            <ServiceCard
              icon={Search}
              title="System Audit"
              description="Full diagnostic & efficiency reports using fiber-optic cameras and ultrasonic sound mapping."
            />
          </StaggerWrapper>

          <MotionWrapper className="mt-8 text-center">
            <Link href="/services">
              <Button variant="outline" className="rounded-full px-6 h-10 gap-2 text-sm font-medium">
                View All Services
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* ═══ STATS SECTION ═══ */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <StatCounter value={30} suffix="+" label="Years of Practice" />
            <StatCounter value={15000} suffix="+" label="Completed Projects" />
            <StatCounter value={4} suffix=".9" prefix="" label="Client Satisfaction" />
            <StatCounter value={99} suffix=".8%" label="System Reliability" />
          </div>
        </div>
      </section>

      {/* ═══ ABOUT TEASER ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image placeholder */}
            <MotionWrapper variants={fadeInLeft}>
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden">
                <Image
                  src="/assets/image-1.png"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-secondary/80 to-primary/30" />
                <div className="absolute inset-0 grid-overlay opacity-[0.08]" />
                {/* Floating stat card */}
                <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-64 rounded-2xl bg-card/95 backdrop-blur-sm p-5 ambient-shadow">
                  <p className="text-3xl font-bold text-foreground">
                    4.9<span className="text-primary">/5</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Across 15,000+ reviews on Google, Yelp, and Angi
                  </p>
                </div>
              </div>
            </MotionWrapper>

            {/* Right: Content */}
            <MotionWrapper variants={fadeInRight}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
                About the Atelier
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
                Deep Local Roots.
                <br />
                <span className="text-muted-foreground">Top-Rated Mastery.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Serving the tri-state area since 1994, we are more than
                technicians — we are neighbors dedicated to the region&apos;s
                structural integrity. With over 15,000 completed technical
                projects and a 4.9/5 client satisfaction rating, we set the
                gold standard in precision plumbing.
              </p>
              <blockquote className="border-l-2 border-primary pl-5 mb-8">
                <p className="text-sm italic text-foreground/80">
                  &ldquo;Exceptional technical precision. They didn&apos;t just fix the
                  issue — they re-engineered it to last a lifetime.&rdquo;
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  David K., Homeowner
                </p>
              </blockquote>
              <Link href="/about">
                <Button variant="outline" className="rounded-full px-6 h-10 gap-2 text-sm font-medium">
                  Our Story
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ═══ TECHNICAL STANDARD ═══ */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            label="The Standard"
            title="Why Clients Trust PlumbMaster"
            description="Every project follows our rigorous technical protocol — because your infrastructure deserves nothing less."
          />

          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Digital Diagnostic Reporting",
                desc: "Every job includes a comprehensive digital report with fiber-optic camera footage and system health analysis.",
              },
              {
                icon: CheckCircle,
                title: "Clean-Site Guarantee",
                desc: "No footprint left behind. Our technicians use protective mats, boot covers, and follow a strict cleanup protocol.",
              },
              {
                icon: Clock,
                title: "Transparent Flat-Rate Pricing",
                desc: "No hidden fees, no surprises. Digital quotes are provided upfront and honored to the penny.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="rounded-2xl bg-card p-6 md:p-8 ghost-border"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </StaggerWrapper>
        </div>
      </section>

      {/* ═══ FEATURED TESTIMONIAL ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <SectionHeading
            label="Client Voices"
            title="What Our Clients Say"
          />
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              highlight="Precision in an Emergency"
              quote="A main line burst at 3 AM. PlumbMaster had a technician at our door in 45 minutes. They re-engineered the connection to ensure it never happens again. Absolute technical masters."
              author="Marcus Thorne"
              location="River North, Chicago"
            />
            <TestimonialCard
              quote="PlumbMaster handled our full renovation's pipe layout. Their documentation and blue-printing phase was something I've never seen from a plumbing contractor. They are effectively engineers."
              author="Dr. Elena Rodriguez"
              location="Evanston, IL"
            />
          </StaggerWrapper>
          <MotionWrapper className="mt-8 text-center">
            <Link href="/reviews">
              <Button variant="outline" className="rounded-full px-6 h-10 gap-2 text-sm font-medium">
                Read All Reviews
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <CTASection
        title="Don't Wait for a Crisis."
        description="Schedule a precision audit or request a quote for your next major installation today."
        primaryAction={{ label: "Book a Consultation", href: "/booking" }}
        secondaryAction={{ label: "Call Now", href: "/contact" }}
      />
    </>
  );
}
