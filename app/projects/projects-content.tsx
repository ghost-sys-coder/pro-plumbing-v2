"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import { CTASection } from "@/components/ui/cta-section";
import { StaggerWrapper } from "@/components/motion-wrapper";
import { heroTextReveal } from "@/lib/animations";


const projects = [
  {
    title: "Master Bath Renovation",
    description: "Complete overhaul of a 1920s infrastructure. Integrated precision copper manifold system and hidden drain lines within structural load-bearing walls.",
    category: "Residential",
    imageBg: "from-primary/20 via-primary/10 to-tertiary/5",
    imageUrl: "/assets/service-image1.png"
  },
  {
    title: "Emergency Sewer Repair",
    description: "Rapid deployment for a main line collapse. Used trenchless technology to restore 40ft of sewer line with zero disruption to historic landscaping.",
    category: "Emergency",
    imageBg: "from-destructive/15 via-primary/10 to-secondary/10",
    imageUrl: "/assets/service-image2.png"
  },
  {
    title: "Commercial Boiler Stack",
    description: "Multi-unit residential boiler array modernization. Improved thermal efficiency by 34% through technical calibration and high-flow manifold engineering.",
    category: "Commercial",
    imageBg: "from-secondary/20 via-tertiary/10 to-primary/5",
    imageUrl: "/assets/service-image3.png"
  },
  {
    title: "Kitchen Technical Suite",
    description: "Integration of smart water filtration systems and custom-gauge copper piping for a high-performance culinary environment.",
    category: "Residential",
    imageBg: "from-tertiary/15 via-secondary/10 to-primary/10",
    imageUrl: "/assets/service-image4.png"
  },
  {
    title: "Historic Building Retrofit",
    description: "Full plumbing system modernization for a 100-year-old building while preserving original architectural elements and meeting modern code requirements.",
    category: "Heritage",
    imageBg: "from-secondary/25 via-primary/10 to-tertiary/5",
    imageUrl: "/assets/service-image5.png"
  },
  {
    title: "Smart Home Integration",
    description: "Complete smart water management system with leak detection sensors, automated shut-off valves, and real-time monitoring dashboard.",
    category: "Technology",
    imageBg: "from-tertiary/20 via-primary/15 to-secondary/5",
    imageUrl: "/assets/service-image6.png"
  },
];

export function ProjectsContent() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-secondary via-secondary/95 to-primary/20" />
        <div className="absolute inset-0 grid-overlay opacity-[0.05]" />
        <div className="container-wide relative z-10">
          <motion.div initial="hidden" animate="visible" variants={heroTextReveal}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground tracking-tight leading-[1.05] max-w-3xl">
              Infrastructure
              <br />
              <span className="text-primary">Mastery</span> Portfolio.
            </h1>
            <p className="mt-5 text-base md:text-lg text-secondary-foreground/70 max-w-xl">
              A curated selection of our finest work — from intricate residential
              technical stacks to heavy industrial sewer systems, treated as pieces
              of architectural engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </StaggerWrapper>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection
        title="Let's Discuss Your Next Project."
        description="Every plumbing challenge is an opportunity for technical excellence. Tell us about your requirements."
        primaryAction={{ label: "Start a Conversation", href: "/contact" }}
        secondaryAction={{ label: "Book an Audit", href: "/booking" }}
      />
    </>
  );
}
