import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineering water systems with architectural precision. Based in the heart of the city, we've spent three decades redefining modern plumbing through integrity and technical mastery.",
};

export default function AboutPage() {
  return <AboutContent />;
}
