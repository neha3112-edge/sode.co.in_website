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
import { IITR_COURSE_OPTIONS } from "./constants";

/* =========================================================
   IIT ROORKEE PG CERTIFICATE IN DATA SCIENCE & ML
========================================================= */

export default function IITRPage() {
  const pagePath = "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai";

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
          courseOptions={IITR_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your course and our academic experts will contact you"
          formNameOverride="IITR Scholarship Floating Form"
          sourceOverride="IITR LP"
          utmSourceFallback="Organic"
          utmMediumFallback="IITR_Organic"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#3585C1] hover:bg-[#256c9e]"
          redirectUrl={`${pagePath}/thank-you`}
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="iitr-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* Mobile bottom CTA */}
      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={IITR_COURSE_OPTIONS}
          sourceOverride="IITR LP"
          utmSourceFallback="Organic"
          utmMediumFallback="IITR_Organic"
          redirectUrl={`${pagePath}/thank-you`}
          whatsappMessage="I want to download the IIT Roorkee Data Science, ML & Gen AI Online Program brochure"
          applyFormName="IITR Mobile Bottom Apply Form"
          brochureFormName="IITR Mobile Bottom Brochure Form"
          brochureUrl={`${pagePath}/assets/brochures/main_brochure.pdf`}
        />
      </div>
    </div>
  );
}
