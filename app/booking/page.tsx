import type { Metadata } from "next";
import { BookingContent } from "./booking-content";

export const metadata: Metadata = {
  title: "Book a Service",
  description:
    "Schedule your plumbing service online. Choose your service type, pick a time slot, and get matched with a master technician.",
};

export default function BookingPage() {
  return <BookingContent />;
}
