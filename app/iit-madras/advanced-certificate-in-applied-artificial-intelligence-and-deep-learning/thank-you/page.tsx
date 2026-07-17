import type { Metadata } from "next";

import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | IIT Madras Applied AI & Deep Learning | SODE",
  description:
    "Thank you for enquiring about the IIT Madras Applied Artificial Intelligence and Deep Learning program.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IITMThankYouPage() {
  return (
    <ThankYouClient
      conversionSource="lp"
      homeHref="/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning"
    />
  );
}
