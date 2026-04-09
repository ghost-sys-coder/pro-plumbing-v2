"use client";

import { motion } from "framer-motion";
import { Gem, Heart, ShieldCheck, GraduationCap, Droplets, Leaf } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamCard } from "@/components/ui/team-card";
import { StatCounter } from "@/components/ui/stat-counter";
import { CTASection } from "@/components/ui/cta-section";
import { MotionWrapper, StaggerWrapper } from "@/components/motion-wrapper";
import { fadeInLeft, fadeInRight, heroTextReveal, staggerItem } from "@/lib/animations";
import Image from "next/image";

const team = [
  { name: "Marcus Thorne", role: "Senior Hydronics Engineer", bio: "Expert in high-efficiency boiler systems and radiant heating design with 18 years of field mastery." },
  { name: "Elena Rodriguez", role: "Systems Architect", bio: "Specializes in large-scale residential infrastructure and smart-home water integration." },
  { name: "David Chen", role: "Master Plumber", bio: "25 years of diagnostic excellence. The person we call for the \"impossible\" issues." },
  { name: "Sarah Jenkins", role: "Service Director", bio: "Ensures every project meets the PlumbMaster standard of surgical cleanliness and client care." },
];

const values = [
  { icon: Gem, title: "Technical Quality", desc: "We use hospital-grade components and aerospace-standard fittings. Every joint is a signature of our craft." },
  { icon: Heart, title: "Radical Integrity", desc: "No hidden fees, no unnecessary upsells. We provide technical diagnostics that respect your home and your budget." },
  { icon: ShieldCheck, title: "Unwavering Reliability", desc: "Infrastructure doesn't sleep. Neither does our commitment to being there when the critical moments occur." },
];

const community = [
  { icon: GraduationCap, title: "Local Apprenticeship Program", desc: "We partner with local technical colleges to train the next generation of master plumbers through hands-on mentorship." },
  { icon: Droplets, title: "Clean Water Initiative", desc: "Every year, we donate 1,000 hours of service to community housing projects and local non-profit shelters." },
  { icon: Leaf, title: "Sustainable Infrastructure", desc: "Leading the city's transition to greywater recycling and high-efficiency urban plumbing systems." },
];

export function AboutContent() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-secondary via-secondary/95 to-tertiary/20" />
        <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.div initial="hidden" animate="visible" variants={heroTextReveal}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
                Est. 1994
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground tracking-tight leading-[1.05]">
                Engineering Water
                <br />
                With Architectural
                <br />
                <span className="text-primary">Precision.</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-secondary-foreground/70 max-w-xl">
                Based in the heart of the city, we&apos;ve spent three decades
                redefining modern plumbing through integrity and technical mastery.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroTextReveal}
              transition={{ delay: 0.2 }}
              className="flex justify-start lg:justify-end"
            >
              <div className="text-right">
                <p className="text-6xl md:text-7xl font-bold text-primary">30+</p>
                <p className="text-sm text-secondary-foreground/60 mt-1">Years of Practice</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ ORIGIN STORY ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Container with Left Gradient Overlay */}
            <MotionWrapper variants={fadeInLeft}>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary/70">

                {/* Main Image */}
                <Image
                  src="/assets/about-page.png"
                  alt="PlumbMaster Workshop & Team"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient Overlay - Foreshadows from the left */}
                <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/80 to-transparent" />

                {/* Optional subtle dark vignette for depth */}
                <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-transparent" />

                {/* Grid texture overlay */}
                <div className="absolute inset-0 grid-overlay opacity-[0.07]" />
              </div>
            </MotionWrapper>

            {/* Text Content */}
            <MotionWrapper variants={fadeInRight}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
                Our Origins
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
                Founded on Grit
                <br />
                <span className="text-muted-foreground">and Flow Calculations.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 1994, Arthur Vance started PlumbMaster with a single toolkit
                and a commitment to &ldquo;The Architectural Plumb&rdquo; — the idea that
                mechanical systems should be as beautiful and precise as the
                structures they inhabit.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, we remain a family-operated technical atelier. We don&apos;t just
                fix leaks — we optimize the lifeblood of your home using
                sustainable materials and veteran expertise.
              </p>
              <blockquote className="border-l-2 border-primary pl-5">
                <p className="text-sm italic text-foreground/80">
                  &ldquo;A master plumber is an architect of the unseen. Our goal is to
                  make the invisible infrastructure of your life perfectly silent
                  and perfectly efficient.&rdquo;
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-semibold">
                  — Arthur Vance, Founder
                </p>
              </blockquote>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            label="By The Numbers"
            title="Proven Excellence"
            description="Three decades of delivering exceptional plumbing solutions across the city."
            className="mb-12"
          />

          <StaggerWrapper className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCounter
              value={30}
              suffix="+"
              label="Years in Business"
            />
            <StatCounter
              value={1248}
              suffix="+"
              label="Projects Completed"
            />
            <StatCounter
              value={875}
              suffix="+"
              label="Happy Clients"
            />
            <StatCounter
              value={12}
              label="Master Technicians"
            />
          </StaggerWrapper>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            label="Our Pillars"
            title="Foundational Values"
            description="The technical pillars that support every project we undertake."
          />
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="text-center rounded-2xl bg-card p-8 ghost-border"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </StaggerWrapper>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="The Crew"
            title="The Technical Team"
            description="Every technician at PlumbMaster carries a Master's Certification and over 10,000 hours of field experience."
          />
          <StaggerWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <TeamCard key={t.name} {...t} />
            ))}
          </StaggerWrapper>
        </div>
      </section>

      {/* ═══ COMMUNITY ═══ */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <SectionHeading
            label="Our Impact"
            title="Deeply Rooted in the Grid"
            description="We grew up in these streets, and we've mapped every pipe under them. This city is our legacy."
          />
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {community.map((c) => (
              <motion.div
                key={c.title}
                variants={staggerItem}
                className="rounded-2xl bg-card p-6 md:p-8 ghost-border"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-tertiary/10 text-tertiary">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </StaggerWrapper>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection
        title="Join the PlumbMaster Family."
        description="Whether you need service, want to join our team, or just want to learn about our trade — we'd love to hear from you."
        primaryAction={{ label: "Contact Us", href: "/contact" }}
        secondaryAction={{ label: "View Projects", href: "/projects" }}
      />
    </>
  );
}
