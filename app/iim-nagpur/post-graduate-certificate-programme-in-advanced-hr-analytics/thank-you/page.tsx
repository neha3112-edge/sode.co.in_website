import type { Metadata } from "next";

import ThankYouClient from "@/app/thank-you/ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | IIM Nagpur Post Graduate Certificate Programme in Advanced HR Analytics | SODE",
  description:
    "Thank you for enquiring about the IIM Nagpur Post Graduate Certificate Programme in Advanced HR Analytics.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IIMNThankYouPage() {
  return (
    <ThankYouClient
      conversionSource="lp"
      homeHref="/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics"
    />
  );
}
