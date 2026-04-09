"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { staggerItem } from "@/lib/animations";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating?: number;
  highlight?: string;
}

export function TestimonialCard({
  quote,
  author,
  location,
  rating = 5,
  highlight,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -2, transition: { duration: 0.25 } }}
      className="relative rounded-2xl bg-card p-6 md:p-8 ghost-border hover:ambient-shadow transition-all duration-300"
    >
      <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
      {highlight && (
        <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
          {highlight}
        </p>
      )}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-foreground mb-5">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}
