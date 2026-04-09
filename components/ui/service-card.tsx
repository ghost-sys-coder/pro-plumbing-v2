"use client";

import { motion } from "framer-motion";
import { type LucideIcon, CheckCircle } from "lucide-react";
import { staggerItem } from "@/lib/animations";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  accent?: boolean;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  accent = false,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className={`group relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        accent
          ? "bg-primary text-primary-foreground"
          : "card-elevated ghost-border hover:shadow-lg"
      }`}
    >
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
          accent
            ? "bg-white/20"
            : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p
        className={`text-sm leading-relaxed mb-4 ${
          accent ? "opacity-90" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-2 text-sm ${
                accent ? "opacity-90" : "text-muted-foreground"
              }`}
            >
              <CheckCircle
                className={`h-4 w-4 shrink-0 mt-0.5 ${
                  accent ? "text-white/70" : "text-primary"
                }`}
              />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
