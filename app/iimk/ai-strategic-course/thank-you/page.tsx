import type { Metadata } from "next";

import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | IIM Kozhikode HR Analytics | SODE",
  description:
    "Thank you for enquiring about the IIM Kozhikode HR Management and Analytics program.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IIMKThankYouPage() {
  return <ThankYouClient conversionSource="iimk" homeHref="/iimk/ai-strategic-course" />;
}
