import type { Metadata } from "next";

import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | PG Certificate in Data Science, Machine Learning & Generative AI | IIT Roorkee | SODE",
  description:
    "Thank you for enquiring about the IIT Roorkee PG Certificate in Data Science, Machine Learning & Generative AI program.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IITRThankYouPage() {
  return (
    <ThankYouClient
      conversionSource="lp"
      homeHref="/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai"
    />
  );
}
