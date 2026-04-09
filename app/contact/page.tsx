import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Submit your technical requirements. Our master plumbers respond within 60 minutes for high-priority infrastructure requests.",
};

export default function ContactPage() {
  return <ContactContent />;
}
