import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { Hero } from "./components/sections/Hero";
import { CoursesOffered } from "./components/sections/CoursesOffered";
import { Specialization } from "./components/sections/Specialization";
import { About } from "./components/sections/About";
import { Accreditations } from "./components/sections/Accreditations";
import { LearningOutcomes } from "./components/sections/LearningOutcomes";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";

import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";
import CallCTA from "@/components/layout/CallCTA";

import { GGU_COURSE_OPTIONS } from "./constants";

export default function GGUPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <Hero />
        <CoursesOffered />
        <Specialization />
        <About />
        <Accreditations />
        <LearningOutcomes />
        <ApplyAndFaq />
      </main>

      <Footer />

      {/* =====================================================
          DESKTOP FLOATING BUTTONS
      ====================================================== */}

      <div className="fixed bottom-16 right-6 z-80 flex-col items-center lg:flex">
        <CallCTA />
        <FloatingButton
          courseOptions={GGU_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your preferred GGU course and our experts will contact you"
          formNameOverride="GGU Scholarship Floating Form"
          sourceOverride="GGU LP"
          utmSourceFallback="Organic"
          utmMediumFallback="GGU_Organic"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#ee5105] hover:bg-[#d94800]"
          redirectUrl="/thank-you"
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="ggu-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* =====================================================
          MOBILE BOTTOM CTA
      ====================================================== */}

      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={GGU_COURSE_OPTIONS}
          sourceOverride="GGU LP"
          utmSourceFallback="Organic"
          utmMediumFallback="GGU_Organic"
          redirectUrl="/thank-you"
          whatsappMessage="I want to download the Golden Gate University Online Program brochure"
          applyFormName="GGU Mobile Bottom Apply Form"
          brochureFormName="GGU Mobile Bottom Brochure Form"
          brochureUrl="/ggu/assets/img/GGU_brochure.pdf"
        />
      </div>
    </div>
  );
}
