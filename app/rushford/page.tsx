import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { Hero } from "./components/sections/Hero";
import { StatsBar } from "./components/sections/StatsBar";
import { CoursesOffered } from "./components/sections/CoursesOffered";
import { About } from "./components/sections/About";
import { Accreditations } from "./components/sections/Accreditations";
import { MicrosoftCopilot } from "./components/sections/MicrosoftCopilot";
import { DBABenefits } from "./components/sections/DBABenefits";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { ClarificationCta } from "./components/sections/ClarificationCta";

import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";
import CallCTA from "@/components/layout/CallCTA";

import { RUSHFORD_COURSE_OPTIONS } from "./constants";

/* =========================================================
   RUSHFORD PAGE
 ========================================================= */

export default function RushfordPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Hero />
        <StatsBar />
        <CoursesOffered />
        <About />
        <Accreditations />
        <MicrosoftCopilot />
        <DBABenefits />
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
          courseOptions={RUSHFORD_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your preferred Rushford course and our experts will contact you"
          formNameOverride="Rushford Scholarship Floating Form"
          sourceOverride="Rushford LP"
          utmSourceFallback="Organic"
          utmMediumFallback="Rushford_Organic"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
          redirectUrl="/rushford/thank-you"
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="rushford-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* =====================================================
          MOBILE BOTTOM CTA
      ====================================================== */}

      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={RUSHFORD_COURSE_OPTIONS}
          sourceOverride="Rushford LP"
          utmSourceFallback="Organic"
          utmMediumFallback="Rushford_Organic"
          redirectUrl="/rushford/thank-you"
          whatsappMessage="I want to download the Rushford Online Program brochure"
          applyFormName="Rushford Mobile Bottom Apply Form"
          brochureFormName="Rushford Mobile Bottom Brochure Form"
          brochureUrl="/rushford/assets/brochures/main_brochure.pdf"
        />
      </div>
    </div>
  );
}
