import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Approvals } from "./components/sections/Approvals";
import { Accreditations } from "./components/sections/Accreditations";
import { About } from "./components/sections/About";
import { WhyChooseESGCI } from "./components/sections/CoursesOffered";
import { CertificateSection } from "./components/sections/CertificateSection";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { OverviewAndEligibility } from "./components/sections/OverviewAndEligibility";

import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";
import CallCTA from "@/components/layout/CallCTA";
import { ESGCI_COURSE_OPTIONS } from "./constants";

export default function ESGCIPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-16">
        <Hero />
        <Approvals />
        <OverviewAndEligibility />
        <CertificateSection />
        <Accreditations />
        <About />
        <WhyChooseESGCI />
        <ApplyAndFaq />
      </main>

      <Footer />

      {/* =====================================================
          DESKTOP FLOATING BUTTONS
      ====================================================== */}

      <div className="fixed bottom-16 right-6 z-80 flex-col items-center lg:flex">
        <CallCTA />
        <FloatingButton
          courseOptions={ESGCI_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your preferred ESGCI course and our experts will contact you"
          formNameOverride="ESGCI Scholarship Floating Form"
          sourceOverride="ESGCI LP"
          utmSourceFallback="Organic"
          utmMediumFallback="ESGCI_Organic"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#009844] hover:bg-[#007d38]"
          redirectUrl="/thank-you"
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="esgci-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* =====================================================
          MOBILE BOTTOM CTA
      ====================================================== */}

      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={ESGCI_COURSE_OPTIONS}
          sourceOverride="ESGCI LP"
          utmSourceFallback="Organic"
          utmMediumFallback="ESGCI_Organic"
          redirectUrl="/thank-you"
          whatsappMessage="I want to download the ESGCI Online Program brochure"
          applyFormName="ESGCI Mobile Bottom Apply Form"
          brochureFormName="ESGCI Mobile Bottom Brochure Form"
          brochureUrl="/esgci/assets/brochures/main_brochure.pdf"
        />
      </div>
    </div>
  );
}
