import type { Metadata } from "next";

import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { WhyChoose } from "./components/sections/WhyChoose";
import { Eligibility } from "./components/sections/Eligibility";
import { CertificateSection } from "./components/sections/CertificateSection";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";

import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";
import CallCTA from "@/components/layout/CallCTA";

export const metadata: Metadata = {
  title:
    "IIM Kozhikode HRM Course | IIM Kozhikode HR Analytics & Online HR Courses",

  description:
    "IIM Kozhikode HRM program and IIM Kozhikode HRM course in HR Analytics. Explore IIM Kozhikode online HR courses, IIM Kozhikode HR analytics fees, eligibility, certification details, and IIM Kozhikode HRM program admission process.",

  alternates: {
    canonical: "/iimk",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function IIMKPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
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

      {/* Desktop: Call and Gift buttons side by side */}
      <div className="fixed bottom-16 right-6 z-80 items-center space-y-1.5">
        <CallCTA />
        <FloatingButton />
      </div>

      {/* Mobile bottom CTA */}
      <div className="lg:hidden">
        <GlobalCTA />
      </div>
    </div>
  );
}
