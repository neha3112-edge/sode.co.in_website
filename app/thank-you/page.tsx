import type { Metadata } from "next";
import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | SODE",
  description:
    "Thank you for contacting SODE. Our academic counsellor will connect with you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SODEThankYouPage() {
  return <ThankYouClient conversionSource="lp" homeHref="/" />;
}
