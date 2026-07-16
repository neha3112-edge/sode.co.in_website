"use client";

import { useEffect, useState } from "react";
import BottomCTA from "./BottomCTA";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";

/* =========================================================
   PROPS
========================================================= */

export type GlobalCTAProps = {
  courseOptions?: FormCourseOption[];

  sourceOverride?: string;

  utmSourceFallback?: string;
  utmMediumFallback?: string;

  redirectUrl?: string;

  whatsappPhone?: string;
  whatsappMessage?: string;

  brochureButtonText?: string;
  applyButtonText?: string;

  applyFormTitle?: string;
  applyFormSubtitle?: string;
  applyFormName?: string;
  applySubmitButtonText?: string;
  applySubmitButtonClassName?: string;

  brochureFormTitle?: string;
  brochureFormSubtitle?: string;
  brochureFormName?: string;
  brochureSubmitButtonText?: string;
  brochureSubmitButtonClassName?: string;

  brochureUrl?: string;
  showBrochureFormOnClick?: boolean;
};

/* =========================================================
   GLOBAL CTA
========================================================= */

export default function GlobalCTA({
  courseOptions = [],

  sourceOverride = "SODE",

  utmSourceFallback = "Organic",
  utmMediumFallback = "SODE_Organic",

  redirectUrl = "/thank-you",

  whatsappPhone = "917065777755",

  whatsappMessage = "I want to know more about the online degree and certification courses offered by SODE.",

  brochureButtonText = "Get Brochure",
  applyButtonText = "Apply Now",

  applyFormTitle = "Apply Now",

  applyFormSubtitle = "Select your preferred course and start your application journey",

  applyFormName = "SODE Mobile Bottom Apply Form",

  applySubmitButtonText = "Apply Now",

  applySubmitButtonClassName = "bg-[#0f3b8c] hover:bg-[#0c2e6f]",

  brochureFormTitle = "Download Brochure",

  brochureFormSubtitle = "Select your preferred course to receive the brochure",

  brochureFormName = "SODE Mobile Bottom Brochure Form",

  brochureSubmitButtonText = "Download Brochure",

  brochureSubmitButtonClassName = "bg-[#0f3b8c] hover:bg-[#0c2e6f]",

  brochureUrl = "/assets/pdf/brochure.pdf",
  showBrochureFormOnClick = false,
}: GlobalCTAProps) {
  const [applyOpen, setApplyOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  /* =========================================================
     CLOSE APPLY FORM
  ========================================================= */

  const closeApplyForm = () => {
    setApplyOpen(false);
  };

  /* =========================================================
     CLOSE BROCHURE FORM
  ========================================================= */

  const closeBrochureForm = () => {
    setBrochureOpen(false);
  };

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (!applyOpen && !brochureOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [applyOpen, brochureOpen]);

  /* =========================================================
     ESCAPE KEY CLOSE
  ========================================================= */

  useEffect(() => {
    if (!applyOpen && !brochureOpen) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setApplyOpen(false);
        setBrochureOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [applyOpen, brochureOpen]);

  return (
    <>
      {/* =====================================================
          MOBILE BOTTOM CTA

          WhatsApp button direct WhatsApp open karega.
          Apply button application form open karega.
      ====================================================== */}

      <BottomCTA
        onApply={() => setApplyOpen(true)}
        onBrochure={
          showBrochureFormOnClick ? () => setBrochureOpen(true) : undefined
        }
        whatsappPhone={whatsappPhone}
        whatsappMessage={whatsappMessage}
        brochureButtonText={brochureButtonText}
        applyButtonText={applyButtonText}
      />

      {/* =====================================================
          APPLY MODAL
      ====================================================== */}

      {applyOpen && (
        <div
          role="presentation"
          onClick={closeApplyForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={applyFormTitle}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6 shadow-2xl animate-[scaleIn_0.2s_ease]"
          >
            <FormWrapper
              title={applyFormTitle}
              subtitle={applyFormSubtitle}
              onClose={closeApplyForm}
              defaultCourse=""
              courseOptions={courseOptions}
              formNameOverride={applyFormName}
              sourceOverride={sourceOverride}
              utmSourceFallback={utmSourceFallback}
              utmMediumFallback={utmMediumFallback}
              submitButtonText={applySubmitButtonText}
              submitButtonClassName={applySubmitButtonClassName}
              redirectUrl={redirectUrl}
            />
          </div>
        </div>
      )}

      {/* =====================================================
          BROCHURE MODAL

          Abhi bottom WhatsApp button direct WhatsApp kholta hai.
          Ye modal future me kisi separate brochure trigger se bhi
          open kiya ja sakta hai.
      ====================================================== */}

      {brochureOpen && (
        <div
          role="presentation"
          onClick={closeBrochureForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={brochureFormTitle}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6 shadow-2xl animate-[scaleIn_0.2s_ease]"
          >
            <FormWrapper
              title={brochureFormTitle}
              subtitle={brochureFormSubtitle}
              onClose={closeBrochureForm}
              defaultCourse=""
              courseOptions={courseOptions}
              formNameOverride={brochureFormName}
              sourceOverride={sourceOverride}
              utmSourceFallback={utmSourceFallback}
              utmMediumFallback={utmMediumFallback}
              submitButtonText={brochureSubmitButtonText}
              submitButtonClassName={brochureSubmitButtonClassName}
              isBrochureForm
              brochureUrl={brochureUrl}
              redirectUrl={redirectUrl}
            />
          </div>
        </div>
      )}
    </>
  );
}
