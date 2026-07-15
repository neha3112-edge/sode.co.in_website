import type { Metadata } from "next";
import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | IIIT Bangalore Online Courses | SODE",
  description:
    "Thank you for enquiring about IIIT Bangalore online courses through SODE.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IIITBThankYouPage() {
  return <ThankYouClient conversionSource="iiitb" homeHref="/iiitb" />;
}
