import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Approvals } from "./components/sections/Approvals";
import { DualCertification } from "./components/sections/DualCertification";
import { About } from "./components/sections/About";
import { ProgramJourney } from "./components/sections/ProgramJourney";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { CoursesOffered } from "./components/sections/CoursesOffered";
import { ClarificationCta } from "./components/sections/ClarificationCta";
import { WhyChoose } from "./components/sections/WhyChoose";
import { AboutLbs } from "./components/sections/AboutLBS";
import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";
import CallCTA from "@/components/layout/CallCTA";
import { PSB_COURSE_OPTIONS } from "./constants";

export default function PSBPage() {
  const pagePath = "/psb";

  return (
    <>
      <Header />
      {/* Fixed header height padding */}
      <main className="pt-14 bg-white">
        <Hero />
        <Approvals />
        <About />
        <ProgramJourney />
        <DualCertification />
        <CoursesOffered />
        <ClarificationCta />
        <WhyChoose />
        <AboutLbs />
        <ApplyAndFaq />
      </main>
      <Footer />

      {/* =====================================================
          FLOATING CALL AND SCHOLARSHIP BUTTONS
          Page scroll threshold at 45% opens floating scholarship form.
      ====================================================== */}
      <div className="fixed bottom-16 right-4 z-80 flex flex-col items-center lg:bottom-6 lg:right-6">
        <CallCTA />

        <FloatingButton
          courseOptions={PSB_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your course and our academic experts will contact you"
          formNameOverride="PSB Scholarship Floating Form"
          sourceOverride="PSB LP"
          utmSourceFallback="PSB Organic"
          utmMediumFallback="PSB Scholarship Floating Button"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#233568] hover:bg-[#1a2850]"
          redirectUrl="/thank-you"
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="psb-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* Mobile bottom CTA */}
      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={PSB_COURSE_OPTIONS}
          sourceOverride="PSB LP"
          utmSourceFallback="PSB Organic"
          utmMediumFallback="PSB Mobile Bottom CTA"
          redirectUrl="/thank-you"
          whatsappMessage="I want to download the Paris School of Business Business School Online Program brochure"
          applyFormName="PSB Mobile Bottom Apply Form"
          brochureFormName="PSB Mobile Bottom Brochure Form"
          brochureUrl={`${pagePath}/assets/img/main_brochure.pdf`}
        />
      </div>
    </>
  );
}
