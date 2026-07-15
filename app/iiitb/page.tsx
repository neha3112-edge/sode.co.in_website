import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { Hero } from "./components/sections/Hero";
import { Approvals } from "./components/sections/Approvals";
import { CoursesOffered } from "./components/sections/CoursesOffered";
import { About } from "./components/sections/About";
import { WhyChoose } from "./components/sections/WhyChoose";
import { CertificateSection } from "./components/sections/CertificateSection";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { ClarificationCta } from "./components/sections/ClarificationCta";

import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";
import CallCTA from "@/components/layout/CallCTA";

import type { FormCourseOption } from "@/components/forms/FormWrapper";

/* =========================================================
   IIITB COURSE OPTIONS
========================================================= */

const IIITB_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "CERTIFICATE",
    label: "Executive Programme in Generative AI for Leaders",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },
  {
    value: "CERTIFICATE",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Diploma in Machine Learning & Artificial Intelligence",
  },
  {
    value: "CERTIFICATE",
    label: "Chief Technology Officer & AI Leadership Programme",
  },
  {
    value: "MSC",
    label: "Master of Science in Machine Learning & Artificial Intelligence",
  },
  {
    value: "MSC",
    label:
      "Master of Science in Data Science Now integrated with Generative AI",
  },
];

/* =========================================================
   IIITB PAGE
========================================================= */

export default function IIITBPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Hero />
        <Approvals />
        <CoursesOffered />
        <About />
        <WhyChoose />
        <CertificateSection />
        <ApplyAndFaq />
        <ClarificationCta />
      </main>

      <Footer />

      {/* =====================================================
          DESKTOP FLOATING BUTTONS

          Floating scholarship form page ke 45% scroll par
          automatically open hoga.
      ====================================================== */}

      <div className="fixed bottom-16 right-6 z-80 flex-col items-center lg:flex">
        <CallCTA />
        <FloatingButton
          courseOptions={IIITB_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your preferred IIIT Bangalore course and our experts will contact you"
          formNameOverride="IIITB Scholarship Floating Form"
          sourceOverride="IIITB LP"
          utmSourceFallback="Organic"
          utmMediumFallback="IIITB_Organic"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#076493] hover:bg-[#05547c]"
          redirectUrl="/iiitb/thank-you"
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="iiitb-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* =====================================================
          MOBILE BOTTOM CTA
      ====================================================== */}

      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={IIITB_COURSE_OPTIONS}
          sourceOverride="IIITB LP"
          utmSourceFallback="Organic"
          utmMediumFallback="IIITB_Organic"
          redirectUrl="/iiitb/thank-you"
          whatsappMessage="I want to download the IIIT Bangalore Online Program brochure"
          applyFormName="IIITB Mobile Bottom Apply Form"
          brochureFormName="IIITB Mobile Bottom Brochure Form"
          brochureUrl="/assets/pdf/iiitb-brochure.pdf"
        />
      </div>
    </div>
  );
}
