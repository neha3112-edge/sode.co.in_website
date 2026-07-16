import type { Metadata } from "next";
import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Rushford Online Courses | SODE",
  description:
    "Thank you for enquiring about Rushford online courses through SODE.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RushfordThankYouPage() {
  return <ThankYouClient conversionSource="lp" homeHref="/rushford" />;
}
