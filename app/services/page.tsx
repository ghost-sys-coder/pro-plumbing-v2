import type { Metadata } from "next";
import { ServicesContent } from "./services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From high-pressure industrial systems to boutique residential installations, our master plumbers deliver engineering-grade solutions with architectural precision.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
