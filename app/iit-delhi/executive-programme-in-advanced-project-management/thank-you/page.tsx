import type { Metadata } from "next";

import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | IIT Delhi Advanced Project Management | SODE",
  description:
    "Thank you for enquiring about the IIT Delhi Executive Programme in Advanced Project Management.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IITDThankYouPage() {
  return (
    <ThankYouClient
      conversionSource="lp"
      homeHref="/iit-delhi/executive-programme-in-advanced-project-management"
    />
  );
}
