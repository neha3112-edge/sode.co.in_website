import type { Metadata } from "next";
import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | IIM Udaipur Chief Technology Officer & AI Leadership Programme | SODE",
  description:
    "Thank you for enquiring about IIM Udaipur Chief Technology Officer & AI Leadership Programme through SODE.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IIMUThankYouPage() {
  return (
    <ThankYouClient
      conversionSource="iimk"
      homeHref="/iim-udaipur/chief-technology-officer-&-ai-leadership-programme"
    />
  );
}
