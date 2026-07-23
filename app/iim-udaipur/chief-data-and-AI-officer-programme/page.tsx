import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { Hero } from "./components/sections/Hero";
import { Highlights } from "./components/sections/Highlights";
import { AboutCDAO } from "./components/sections/AboutCDAO";
import { WhoShouldApply } from "./components/sections/WhoShouldApply";
import { ProgramJourney } from "./components/sections/ProgramJourney";
import { Approvals } from "./components/sections/Approvals";
import { WhyChoose } from "./components/sections/WhyChoose";
import { CertificateSection } from "./components/sections/CertificateSection";
import { About } from "./components/sections/About";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { ClarificationCta } from "./components/sections/ClarificationCta";

import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";
import CallCTA from "@/components/layout/CallCTA";

import { IIMU_COURSE_OPTIONS } from "./constants";

/* =========================================================
   IIM UDAIPUR PAGE
========================================================= */

export default function IIMUPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Hero />
        <Highlights />
        <Approvals />
        <AboutCDAO />
        <WhoShouldApply />
        <ProgramJourney />
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
          courseOptions={IIMU_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your preferred IIM Udaipur course and our experts will contact you"
          formNameOverride="IIMU Scholarship Floating Form"
          sourceOverride="IIMU LP"
          utmSourceFallback="Organic"
          utmMediumFallback="IIMU_Organic"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#076493] hover:bg-[#05547c]"
          redirectUrl="/iim-udaipur/chief-data-and-AI-officer-programme/thank-you"
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="iimu-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* =====================================================
          MOBILE BOTTOM CTA
      ====================================================== */}

      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={IIMU_COURSE_OPTIONS}
          sourceOverride="IIMU LP"
          utmSourceFallback="Organic"
          utmMediumFallback="IIMU_Organic"
          redirectUrl="/iim-udaipur/chief-data-and-AI-officer-programme/thank-you"
          whatsappMessage="I want to download the IIM Udaipur Online Program brochure"
          applyFormName="IIMU Mobile Bottom Apply Form"
          brochureFormName="IIMU Mobile Bottom Brochure Form"
          brochureUrl="/iim-udaipur/chief-data-and-AI-officer-programme/img/CDAIO_leadership_program.pdf"
        />
      </div>
    </div>
  );
}
