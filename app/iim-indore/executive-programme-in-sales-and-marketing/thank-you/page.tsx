import type { Metadata } from "next";

import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | IIM Indore Executive Programme in Sales and Marketing | SODE",
  description:
    "Thank you for enquiring about the IIM Indore Executive Programme in Sales and Marketing.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IIMIThankYouPage() {
  return (
    <ThankYouClient
      conversionSource="lp"
      homeHref="/iim-indore/executive-programme-in-sales-and-marketing"
    />
  );
}
