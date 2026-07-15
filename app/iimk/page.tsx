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

import type { FormCourseOption } from "@/components/forms/FormWrapper";

/* =========================================================
   METADATA
========================================================= */

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

/* =========================================================
   IIM KOZHIKODE COURSE OPTIONS

   label:
   Dropdown me user ko "HR & Analytics" dikhega.

   value:
   Submit payload me "IIM HR" jayega.
========================================================= */

const IIMK_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "IIM HR",
    label: "HR & Analytics",
  },
];

/* =========================================================
   IIMK PAGE
========================================================= */

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

      {/* =====================================================
          FLOATING CALL AND SCHOLARSHIP BUTTONS

          Page ke 45% scroll par floating scholarship form
          automatically open hoga.
      ====================================================== */}

      <div className="fixed bottom-20 right-4 z-[80] flex flex-col items-center gap-2 lg:bottom-6 lg:right-6">
        <CallCTA />

        <FloatingButton
          courseOptions={IIMK_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your course and our academic experts will contact you"
          formNameOverride="IIMK Scholarship Floating Form"
          sourceOverride="IIM LP"
          utmSourceFallback="Organic"
          utmMediumFallback="IIM_Organic"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
          redirectUrl="/iimk/thank-you"
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="iimk-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* Mobile bottom CTA */}
      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={IIMK_COURSE_OPTIONS}
          sourceOverride="IIM LP"
          utmSourceFallback="Organic"
          utmMediumFallback="IIM_Organic"
          redirectUrl="/iimk/thank-you"
          whatsappMessage="I want to download the IIM Kozhikode Online Program brochure"
          applyFormName="IIMK Mobile Bottom Apply Form"
          brochureFormName="IIMK Mobile Bottom Brochure Form"
          brochureUrl="/assets/pdf/iim-kozhikode-brochure.pdf"
        />
      </div>
    </div>
  );
}
