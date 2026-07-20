import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { WhyChoose } from "./components/sections/WhyChoose";
import { Eligibility } from "./components/sections/Eligibility";
import { CertificateSection } from "./components/sections/CertificateSection";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { BestCourseSlider } from "./components/sections/BestCourseSlider";
import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";
import CallCTA from "@/components/layout/CallCTA";
import { IITM_COURSE_OPTIONS } from "./constants";


/* =========================================================
   IIT MADRAS APPLIED AI & DL PAGE
========================================================= */

export default function IITMAPage() {
  const pagePath = "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning";

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-white">
        <Hero />
        <WhyChoose />
        <About />
        <Eligibility />
        <BestCourseSlider />
        <CertificateSection />
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
          courseOptions={IITM_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your course and our academic experts will contact you"
          formNameOverride="IITM Scholarship Floating Form"
          sourceOverride="IITM LP"
          utmSourceFallback="Organic"
          utmMediumFallback="IITM_Organic"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#2C5E7C] hover:bg-[#20465c]"
          redirectUrl={`${pagePath}/thank-you`}
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="iitm-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* Mobile bottom CTA */}
      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={IITM_COURSE_OPTIONS}
          sourceOverride="IITM LP"
          utmSourceFallback="Organic"
          utmMediumFallback="IITM_Organic"
          redirectUrl={`${pagePath}/thank-you`}
          whatsappMessage="I want to download the IIT Madras Applied AI & Deep Learning Advanced Certificate brochure"
          applyFormName="IITM Mobile Bottom Apply Form"
          brochureFormName="IITM Mobile Bottom Brochure Form"
          brochureUrl={`${pagePath}/assets/brochures/main_brochure.pdf`}
        />
      </div>
    </div>
  );
}
