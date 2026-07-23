import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Approvals } from "./components/sections/Approvals";
import { CoursesOffered } from "./components/sections/CoursesOffered";
import { About } from "./components/sections/About";
import { WhyChoose } from "./components/sections/WhyChoose";
import { CertificateSection } from "./components/sections/CertificateSection";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";
import CallCTA from "@/components/layout/CallCTA";
import { EDGEWOOD_COURSE_OPTIONS } from "./constants";

export default function EdgewoodPage() {
  return (
    <>
      <Header />

      {/* Fixed header ki height ke barabar padding */}
      <main className="pt-14">
        <Hero />
        <Approvals />
        <CoursesOffered />
        <About />
        <WhyChoose />
        <CertificateSection />
        <ApplyAndFaq />
      </main>

      <Footer />

      {/* Floating buttons and forms */}
      <div className="fixed bottom-16 right-4 z-80 flex flex-col items-center lg:bottom-6 lg:right-6">
        <CallCTA />

        <FloatingButton
          courseOptions={EDGEWOOD_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your course and our academic experts will contact you"
          formNameOverride="Edgewood Scholarship Floating Form"
          sourceOverride="Edgewood LP"
          utmSourceFallback="Edgewood Organic"
          utmMediumFallback="Edgewood Website"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#c9230c] hover:bg-[#aa1c08]"
          redirectUrl="/thank-you"
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="edgewood-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* Mobile bottom CTA */}
      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={EDGEWOOD_COURSE_OPTIONS}
          sourceOverride="Edgewood LP"
          utmSourceFallback="Edgewood Organic"
          utmMediumFallback="Edgewood Mobile Website"
          redirectUrl="/thank-you"
          whatsappMessage="I want to download the Edgewood University Online Program brochure"
          applyFormName="Edgewood Mobile Bottom Apply Form"
          brochureFormName="Edgewood Mobile Bottom Brochure Form"
        />
      </div>
    </>
  );
}
