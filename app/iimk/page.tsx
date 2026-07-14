import type { Metadata } from "next";

import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { WhyChoose } from "./components/sections/WhyChoose";
import { Eligibility } from "./components/sections/Eligibility";
import { CertificateSection } from "./components/sections/CertificateSection";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { ClarificationCta } from "./components/sections/ClarificationCta";
import { FloatingWidgets } from "./components/sections/FloatingWidgets";

export const metadata: Metadata = {
  title:
    "IIM Kozhikode HRM Course | IIM Kozhikode HR Analytics & Online HR Courses",
  description:
    "IIM Kozhikode HRM program and IIM Kozhikode HRM course in HR Analytics. Explore IIM Kozhikode online HR courses, IIM Kozhikode HR analytics fees, eligibility, certification details, and IIM Kozhikode HRM program admission process.",
  keywords: [
    "IIM Kozhikode",
    "hr analytics course",
    "hr analytics certification",
  ],
  openGraph: {
    title:
      "IIM Kozhikode HRM Course | IIM Kozhikode HR Analytics & Online HR Courses",
    description:
      "IIM Kozhikode HRM program and IIM Kozhikode HRM course in HR Analytics. Explore IIM Kozhikode online HR courses, IIM Kozhikode HR analytics fees, eligibility, certification details, and IIM Kozhikode HRM program admission process.",
    type: "website",
  },
};

export default function IIMKPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-white">
        <Hero />
        <WhyChoose />
        <About />
        <Eligibility />
        <CertificateSection />
        <ApplyAndFaq />
      </main>

      <Footer />

      {/* Sticky & Floating Buttons */}
      {/* <FloatingWidgets /> */}
    </>
  );
}
