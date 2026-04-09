"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { staggerItem } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageBg?: string;
  imageUrl?: string;
}

export function ProjectCard({
  title,
  description,
  category,
  imageBg = "from-primary/20 to-secondary/10",
  imageUrl
}: ProjectCardProps) {
  const hasImage = !!imageUrl;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative rounded-2xl overflow-hidden bg-card ghost-border hover:ambient-shadow transition-all duration-300"
    >
      <div
        className={`relative h-52 md:h-64 bg-linear-to-br ${imageBg} overflow-hidden`}
      >
        {hasImage && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-card to-transparent" />
        <Badge className="absolute top-4 left-4 bg-tertiary text-tertiary-foreground border-0 rounded-full text-xs font-semibold">
          {category}
        </Badge>
        <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
