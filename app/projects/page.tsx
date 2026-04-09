import type { Metadata } from "next";
import { ProjectsContent } from "./projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated selection of our infrastructure mastery. From intricate residential builds to heavy industrial systems, every project is a piece of architectural engineering.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
