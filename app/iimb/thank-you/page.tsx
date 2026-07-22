import type { Metadata } from "next";

import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | IIM Bangalore HR Analytics | SODE",
  description:
    "Thank you for enquiring about the IIM Bangalore HR Management and Analytics program.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IIMBThankYouPage() {
  return <ThankYouClient conversionSource="iimk" homeHref="/iimb" />;
}
