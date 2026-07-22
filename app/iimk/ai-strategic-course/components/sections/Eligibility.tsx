"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

/* =========================================================
   TYPES
========================================================= */

type Profile = {
  title: string;
  desc: string;
};

/* =========================================================
   ELIGIBLE PROFILES
========================================================= */

const eligibleProfiles: Profile[] = [
  {
    title: "Functional Leaders",
    desc: "In Marketing, Finance, HR, Operations, Sales, and Supply Chain seeking to integrate AI into their workflows.",
  },
  {
    title: "Product, Strategy & Growth Professionals",
    desc: "Aiming to leverage AI for innovation, decision-making, and business growth.",
  },
  {
    title: "Business & Analytics Professionals",
    desc: "Who want to use AI for sharper insights, reporting, and organisational impact.",
  },
  {
    title: "Consultants & Client-Facing Professionals",
    desc: "Looking to deliver AI-driven solutions and strategic business value.",
  },
];

/* =========================================================
   IIM KOZHIKODE COURSE OPTIONS

   Dropdown label:
   HR & Analytics

   API payload value:
   IIM HR
========================================================= */

const IIMK_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "IIM HR",
    label: "HR & Analytics",
  },
];

/* =========================================================
   ELIGIBILITY COMPONENT
========================================================= */

export function Eligibility() {
  const [formOpen, setFormOpen] = useState(false);

  /* =========================================================
     LOCK BODY SCROLL WHEN MODAL IS OPEN
  ========================================================= */

  useEffect(() => {
    if (!formOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [formOpen]);

  /* =========================================================
     CLOSE MODAL ON ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    if (!formOpen) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFormOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [formOpen]);

  /* =========================================================
     OPEN AND CLOSE FORM
  ========================================================= */

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      {/* =====================================================
          ELIGIBILITY SECTION
      ====================================================== */}

      <section
        id="eligibility"
        className="relative overflow-hidden py-16 text-white"
      >
        {/* Decorative background image overlay */}

        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/iimk/ai-strategic-course/assets/img/benefit-bg.webp")}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
          />

          <div className="absolute inset-0 bg-black/10" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-[20px] font-extrabold text-white sm:text-3xl">
              Who Should Apply for the IIM Kozhikode AI for Business Professionals program?
            </h2>

            <div className="mt-8 space-y-6">
              {eligibleProfiles.map((profile) => (
                <div key={profile.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3ab449] text-white">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {profile.title}
                    </h3>

                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-gray-200">
                      {profile.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={openForm}
              className="mt-10 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md bg-[#3ab449] px-8 py-3 text-sm font-bold text-white shadow-md transition duration-200"
            >
              Get 100% Free Counseling
            </button>
          </div>
        </Container>
      </section>

      {/* =====================================================
          COUNSELLING POPUP
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
            aria-label="Get Free Counselling"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >
            <FormWrapper
              title="Get 1:1 FREE Counselling"
              subtitle="Select your course and our academic experts will guide you step by step"
              onClose={closeForm}
              courseOptions={IIMK_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IIMK Eligibility Counselling Form"
              sourceOverride="IIM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIM_Organic"
              submitButtonText="Get Free Counselling"
              submitButtonClassName="bg-[#0f3b8c]"
              redirectUrl="/iimk/ai-strategic-course/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}
