import type { Metadata } from "next";
import { ReviewsContent } from "./reviews-content";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what our clients say about PlumbMaster. 4.9/5 rating across Google, Yelp, and Angi with over 5,000 satisfied homeowners.",
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
