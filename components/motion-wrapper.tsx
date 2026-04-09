"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface MotionWrapperProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function MotionWrapper({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

interface StaggerWrapperProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  staggerDelay?: number;
}

export function StaggerWrapper({
  children,
  className,
  once = true,
  amount = 0.15,
  staggerDelay = 0.1,
}: StaggerWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
