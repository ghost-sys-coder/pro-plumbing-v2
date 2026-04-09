"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials?: string;
}

export function TeamCard({ name, role, bio, initials }: TeamCardProps) {
  const displayInitials = initials || name.split(" ").map((n) => n[0]).join("");

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="group rounded-2xl bg-card p-6 ghost-border hover:ambient-shadow transition-all duration-300"
    >
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-105">
        {displayInitials}
      </div>
      <h3 className="text-lg font-bold text-foreground">{name}</h3>
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1 mb-3">
        {role}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
    </motion.div>
  );
}
