import type { FormCourseOption } from "@/components/forms/FormWrapper";

import { Header } from "@/components/layout/Header";
import { MainFooter } from "@/components/layout/MainFooter";
import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";

import { Hero } from "@/sections/Hero";
import { StatsRibbon } from "@/sections/StatsRibbon";
import { AboutSode } from "@/sections/AboutSode";
import { Testimonials } from "@/sections/Testimonials";
import { Universities } from "@/sections/Universities";
import { PremiumPrograms } from "@/sections/PremiumPrograms";
import { FAQ } from "@/sections/FAQ";

/* =========================================================
   SODE COURSE OPTIONS
========================================================= */

const SODE_COURSE_OPTIONS: FormCourseOption[] = [
  /* =========================
     DOCTORATE
  ========================== */

  {
    value: "__DOCTORATE__",
    label: "Doctorate ━━",
    disabled: true,
  },
  {
    value: "DBA",
    label: "DBA",
  },
  {
    value: "MBA+DBA",
    label: "MBA + DBA",
  },

  /* =========================
     MASTER
  ========================== */

  {
    value: "__MASTER__",
    label: "Master ━━",
    disabled: true,
  },
  {
    value: "MBA",
    label: "MBA",
  },
  {
    value: "MSC",
    label: "M.Sc. Data Science",
  },
  {
    value: "MSC",
    label: "M.Sc. Machine Learning & AI",
  },
  {
    value: "DIPLOMA",
    label: "Executive Diploma in Machine Learning & AI",
  },

  /* =========================
     CERTIFICATION
  ========================== */

  {
    value: "__CERTIFICATION__",
    label: "Certification ━━",
    disabled: true,
  },
  {
    value: "CERTIFICATE",
    label: "Professional Certificate Programme in HR Management and Analytics",
  },
  {
    value: "CERTIFICATE",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
  },
  {
    value: "CERTIFICATE",
    label: "Advanced Certificate in Digital Marketing & Communication",
  },
  {
    value: "CERTIFICATE",
    label: "Advanced Certificate in Digital Brand Communication Strategy",
  },

  /* =========================
     EXECUTIVE PROGRAMS
  ========================== */

  {
    value: "__EXECUTIVE_PROGRAMS__",
    label: "Executive Programs ━━",
    disabled: true,
  },
  {
    value: "PG PROGRAMS",
    label: "Executive Programme in Generative AI for Leaders",
  },
  {
    value: "PG PROGRAMS",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },
  {
    value: "PG PROGRAMS",
    label: "Chief Technology Officer & AI Leadership Programme",
  },
];

/* =========================================================
   HOME PAGE
========================================================= */

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex w-full flex-1 flex-col md:mt-10">
        <Hero />
        <StatsRibbon />
        <PremiumPrograms />
        <Universities />
        <AboutSode />
        <Testimonials />
        <FAQ />
      </main>

      <MainFooter />

      {/* =====================================================
          FLOATING SCHOLARSHIP BUTTON
      ====================================================== */}

      <div className="fixed bottom-20 right-4 z-[80] flex flex-col items-center gap-2 lg:bottom-6 lg:right-6">
        <FloatingButton
          courseOptions={SODE_COURSE_OPTIONS}
          title="Get Scholarship Coupon Code"
          subtitle="Select your course and our academic experts will contact you"
          formNameOverride="SODE Scholarship Floating Form"
          sourceOverride="SODE"
          utmSourceFallback="Organic"
          utmMediumFallback="SODE_Organic"
          submitButtonText="Get Coupon Code"
          submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
          redirectUrl="/thank-you"
          autoOpenAtScrollPercent={45}
          autoOpenSessionKey="sode-scholarship-form-auto-opened"
          showConfettiOnAutoOpen
        />
      </div>

      {/* =====================================================
          MOBILE BOTTOM CTA
      ====================================================== */}

      <div className="lg:hidden">
        <GlobalCTA
          courseOptions={SODE_COURSE_OPTIONS}
          sourceOverride="SODE"
          utmSourceFallback="Organic"
          utmMediumFallback="SODE_Organic"
          redirectUrl="/thank-you"
          whatsappPhone="917065777755"
          whatsappMessage="I want to download the certification or online degree brochure"
          brochureButtonText="Get Brochure"
          applyButtonText="Apply Now"
          applyFormTitle="Apply Now"
          applyFormSubtitle="Select your preferred course and start your application journey"
          applyFormName="SODE Mobile Bottom Apply Form"
          applySubmitButtonText="Apply Now"
          applySubmitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
          brochureFormTitle="Download Brochure"
          brochureFormSubtitle="Select your preferred course to receive the brochure"
          brochureFormName="SODE Mobile Bottom Brochure Form"
          brochureSubmitButtonText="Download Brochure"
          brochureSubmitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
          brochureUrl="/assets/pdf/brochure.pdf"
        />
      </div>
    </div>
  );
}
