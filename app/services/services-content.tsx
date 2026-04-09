"use client";

import { motion } from "framer-motion";
import {
  Home, Building2, AlertTriangle, Wrench, Shield, Camera, Award,
  CheckCircle, Clock, Truck, Droplets, Flame, Search, Settings2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { CTASection } from "@/components/ui/cta-section";
import { MotionWrapper, StaggerWrapper } from "@/components/motion-wrapper";
import { fadeInUp, fadeInLeft, fadeInRight, heroTextReveal } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";

export function ServicesContent() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-secondary via-secondary/95 to-primary/20" />
        <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
        <div className="container-wide relative z-10">
          <motion.div initial="hidden" animate="visible" variants={heroTextReveal}>
            <Badge className="bg-primary/20 text-primary border-0 rounded-full text-xs font-semibold mb-4 backdrop-blur-sm">
              Engineering-Grade Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground tracking-tight leading-[1.05] max-w-3xl">
              Technical Mastery for
              <br />
              Every System.
            </h1>
            <p className="mt-5 text-base md:text-lg text-secondary-foreground/70 max-w-xl">
              From boutique residential installations to heavy industrial systems,
              our master plumbers deliver precision at every scale.
            </p>
          </motion.div>

          {/* Stat badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroTextReveal}
            transition={{ delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-card/10 backdrop-blur-sm px-6 py-4"
          >
            <span className="text-4xl font-bold text-primary">99.8%</span>
            <span className="text-sm text-secondary-foreground/70 max-w-50">
              System reliability rating across 12,000+ technical installations
            </span>
          </motion.div>
        </div>
      </section>

      {/* ═══ ALL SERVICES GRID ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Our Services"
            title="Everything Your System Needs"
            description="Eight specialized divisions covering every dimension of residential and commercial plumbing — executed with master-level precision."
          />

          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon={Home}
              title="Residential Plumbing"
              description="Full-service home infrastructure from boutique fixture installs to complete system re-pipes."
              features={["Faucet & fixture installation", "Whole-home re-piping", "Smart shut-off valves"]}
            />
            <ServiceCard
              icon={Flame}
              title="Water Heater Systems"
              description="Tankless conversions, traditional replacements, and hybrid heat-pump water heater installs."
              features={["Tankless / on-demand systems", "Tank replacement & flushing", "Heat-pump hybrid units"]}
            />
            <ServiceCard
              icon={Droplets}
              title="Water Filtration"
              description="Whole-home and point-of-use filtration systems engineered for pristine water quality."
              features={["Reverse osmosis systems", "Whole-home softeners", "UV purification units"]}
            />
            <ServiceCard
              icon={AlertTriangle}
              title="Emergency Response"
              description="24/7 critical dispatch — a master plumber on-site within 60 minutes, fully workshop-equipped."
              features={["60-min target arrival", "Burst pipe containment", "After-hours flat rate"]}
              accent
            />
            <ServiceCard
              icon={Search}
              title="Leak Detection"
              description="Fiber-optic cameras and ultrasonic sound mapping pinpoint hidden leaks without demolition."
              features={["Slab leak detection", "Thermal imaging reports", "Non-invasive diagnosis"]}
            />
            <ServiceCard
              icon={Settings2}
              title="Drain & Sewer"
              description="Hydro-jetting, trenchless sewer repair, and root intrusion removal for lasting flow."
              features={["Hydro-jetting service", "Trenchless sewer repair", "Root intrusion clearing"]}
            />
            <ServiceCard
              icon={Building2}
              title="Commercial Systems"
              description="High-capacity plumbing management for offices, retail spaces, and multi-unit complexes."
              features={["Preventive maintenance contracts", "Backflow certification", "Grease trap service"]}
            />
            <ServiceCard
              icon={Wrench}
              title="Renovation & Remodel"
              description="Architectural rough-in, fixture selection consulting, and blueprint-accurate installation."
              features={["Kitchen & bath rough-in", "Fixture selection support", "Code compliance sign-off"]}
            />
          </StaggerWrapper>
        </div>
      </section>

      {/* ═══ RESIDENTIAL ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <MotionWrapper variants={fadeInLeft}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
                Division 01
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-[1.1] mb-4">
                Residential Mastery
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Premium solutions for modern living. We treat your home&apos;s
                infrastructure with the respect it deserves, ensuring every
                fitting is a testament to longevity and craftsmanship.
              </p>
              <ul className="space-y-3">
                {[
                  "Boutique Faucet & Fixture Installation",
                  "Silent Toilet Systems & Repairs",
                  "Precision Leak Detection & Mitigation",
                  "Whole-Home Water Filtration",
                  "Tankless Water Heater Systems",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </MotionWrapper>

            <MotionWrapper variants={fadeInRight}>
              <div className="rounded-3xl bg-linear-to-br from-primary/10 to-tertiary/10 p-8 md:p-10 grid-overlay relative overflow-hidden">
                <div className="relative z-10">
                  <Home className="h-10 w-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Your Home, Engineered.
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every residential project begins with a comprehensive
                    system audit and architectural blueprint review.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ═══ EMERGENCY RESPONSE ═══ */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <MotionWrapper variants={fadeInUp}>
            <div className="rounded-3xl bg-primary p-8 md:p-12 lg:p-16 text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-[0.08]" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70 mb-3 block">
                    Division 02
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] mb-4">
                    Critical Response Unit
                  </h2>
                  <p className="opacity-80 leading-relaxed mb-8">
                    When infrastructure failure is not an option. Our 24/7 technical
                    team is mobilized for immediate structural and plumbing emergencies
                    with fully equipped mobile workshops.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm px-4 py-3">
                      <Clock className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-bold">60-Min</p>
                        <p className="text-xs opacity-70">Target Arrival</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm px-4 py-3">
                      <Truck className="h-5 w-5" />
                      <div>
                        <p className="text-sm font-bold">Mobile</p>
                        <p className="text-xs opacity-70">Workshop Equipped</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-48 w-48 md:h-56 md:w-56 rounded-full bg-white/10 flex items-center justify-center">
                    <AlertTriangle className="h-20 w-20 opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ═══ COMMERCIAL ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Division 03"
            title="Commercial Infrastructure"
            description="Industrial-grade systems management — high-capacity sewer lines, preventive maintenance protocols, and enterprise-level water management."
          />

          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              icon={Wrench}
              title="Maintenance & Prevention"
              description="Scheduled inspections, pressure testing, and backflow certification programs to prevent costly failures."
              features={["Preventive maintenance contracts", "Annual pressure testing", "Backflow prevention certification"]}
            />
            <ServiceCard
              icon={Building2}
              title="Drainage & Sewer Systems"
              description="Main line hydro-jetting, trenchless sewer repair, and stack replacement for minimal disruption."
              features={["Hydro-jetting technology", "Trenchless sewer repair", "Stack replacement & rerouting"]}
            />
          </StaggerWrapper>
        </div>
      </section>

      {/* ═══ CREDENTIALS ═══ */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            label="Why PlumbMaster"
            title="The 24-Point Verification Standard"
            description="We don't just fix pipes — we engineer reliability. Every technician follows our rigorous checklist before any site is cleared."
          />

          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={Award}
              title="Licensed Masters"
              description="All lead technicians hold Master Plumber certifications with 10+ years of diagnostic field experience."
            />
            <ServiceCard
              icon={Camera}
              title="Digital Diagnostics"
              description="Fiber-optic camera inspections and ultrasonic sound mapping to find hidden issues without demolition."
            />
            <ServiceCard
              icon={Shield}
              title="Lifetime Technical Bond"
              description="Every installation is backed by our comprehensive lifetime warranty and satisfaction guarantee."
            />
          </StaggerWrapper>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection
        title="Ready for Precision Plumbing?"
        description="Whether it's a routine maintenance check or a complex commercial installation, we bring the same level of technical mastery."
        primaryAction={{ label: "Schedule Service", href: "/booking" }}
        secondaryAction={{ label: "Get a Quote", href: "/contact" }}
      />
    </>
  );
}
