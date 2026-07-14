"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";

/* =========================================================
   IIIT BANGALORE COURSE OPTIONS

   label:
   User ko dropdown me full course name dikhega.

   value:
   API payload me CERTIFICATE ya MSC jayega.
========================================================= */

const IIITB_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "CERTIFICATE",
    label: "Executive Programme in Generative AI for Leaders",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },
  {
    value: "CERTIFICATE",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Diploma in Machine Learning & Artificial Intelligence",
  },
  {
    value: "CERTIFICATE",
    label: "Chief Technology Officer & AI Leadership Programme",
  },
  {
    value: "MSC",
    label: "Master of Science in Machine Learning & Artificial Intelligence",
  },
  {
    value: "MSC",
    label:
      "Master of Science in Data Science Now integrated with Generative AI",
  },
];

export function ClarificationCta() {
  const [formOpen, setFormOpen] = useState(false);

  /* =========================================================
     LOCK BODY SCROLL WHEN MODAL IS OPEN
  ========================================================= */

  useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [formOpen]);

  /* =========================================================
     CLOSE MODAL ON ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFormOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <section id="clarification" className="w-full bg-[#076493] py-8 sm:py-10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Need clarification?
              </h2>

              <p className="mt-1 text-lg font-semibold text-white/90 sm:text-xl">
                Interact with experts, get a free consultation.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              type="button"
              onClick={() => setFormOpen(true)}
              className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-md md:w-auto"
            >
              <Phone
                size={16}
                fill="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              />

              <span>Talk to Experts</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* =====================================================
          TALK TO EXPERTS POPUP FORM
      ====================================================== */}

      {formOpen && (
        <div
          role="presentation"
          onClick={closeForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Talk to Experts"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >
            <FormWrapper
              title="Talk to Experts"
              subtitle="Select your preferred course and our academic expert will contact you"
              onClose={closeForm}
              defaultCourse=""
              courseOptions={IIITB_COURSE_OPTIONS}
              formNameOverride="IIITB Clarification CTA Form"
              sourceOverride="IIITB LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIITB_Organic"
              submitButtonText="Talk to Experts"
              showPhoneCallLink
            />
          </div>
        </div>
      )}
    </>
  );
}
