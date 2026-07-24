import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Approvals } from "./components/sections/Approvals";
import { CoursesOffered } from "./components/sections/CoursesOffered";
import { CertificateSection } from "./components/sections/CertificateSection";
import { About } from "./components/sections/About";
import { WhyChoose } from "./components/sections/WhyChoose";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";

import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";
import CallCTA from "@/components/layout/CallCTA";
import { SSBM_COURSE_OPTIONS } from "./constants";

export default function SSBMPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-16">
        <Hero />
        <Approvals />
        <CoursesOffered />
        <WhyChoose />
        <CertificateSection />
        <About />
        <ApplyAndFaq />
      </main>

      <Footer />

      {/* =====================================================
          DESKTOP FLOATING BUTTONS
      ====================================================== */}

      <div className="fixed bottom-16 right-6 z-80 flex-col items-center lg:flex">
        <CallCTA />
        <FloatingButton
          courseOptions={SSBM_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your preferred SSBM course and our experts will contact you"
          formNameOverride="SSBM Scholarship Floating Form"
          sourceOverride="SSBM LP"
          utmSourceFallback="Organic"
          utmMediumFallback="SSBM_Organic"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#c11f28] hover:bg-[#a8141c]"
          redirectUrl="/thank-you"
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="ssbm-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* =====================================================
          MOBILE BOTTOM CTA
      ====================================================== */}

      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={SSBM_COURSE_OPTIONS}
          sourceOverride="SSBM LP"
          utmSourceFallback="Organic"
          utmMediumFallback="SSBM_Organic"
          redirectUrl="/thank-you"
          whatsappMessage="I want to download the SSBM Online Program brochure"
          applyFormName="SSBM Mobile Bottom Apply Form"
          brochureFormName="SSBM Mobile Bottom Brochure Form"
          brochureUrl="/ssbm/assets/brochures/main_brochure.pdf"
        />
      </div>
    </div>
  );
}
