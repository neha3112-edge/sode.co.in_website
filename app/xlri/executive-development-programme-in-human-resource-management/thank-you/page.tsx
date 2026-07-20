import type { Metadata } from "next";

import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | XLRI Executive Development Programme in Human Resource Management | SODE",
  description:
    "Thank you for enquiring about the XLRI Executive Development Programme in Human Resource Management.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function XLRIThankYouPage() {
  return (
    <ThankYouClient
      conversionSource="lp"
      homeHref="/xlri/executive-development-programme-in-human-resource-management"
    />
  );
}
