"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IIMB_COURSE_OPTIONS } from "../../constants";

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
    title: "Early-Career Professionals",
    desc: "Build a strong management foundation and leadership skills through the Young Leaders Development Programme before stepping into managerial responsibilities.",
  },
  {
    title: "Functional Specialists",
    desc: "Expand beyond technical expertise with cross-functional business knowledge through one of the leading IIM Bangalore online courses with certificates.",
  },
  {
    title: "Aspiring Managers",
    desc: "Develop communication, finance, strategy, and people management capabilities to confidently lead teams in the young leaders program India.",
  },
  {
    title: "Founders & Family Business Professionals",
    desc: "Strengthen business, operations, and strategic decision-making with practical learning from IIM Bangalore online programs designed for future business leaders.",
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
        className="relative overflow-hidden pt-12 md:py-16 text-white"
      >
        {/* Decorative background image overlay */}

        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/iimb/assets/img/Red cover banner.webp")}
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
              Who Should Apply for the Young Leaders Programme?
            </h2>

            <p className="pt-4">
              The Young Leaders Programme is designed for graduates and early-career professionals looking to build management expertise, strengthen leadership skills, and prepare for larger responsibilities through an IIM Bangalore online course.
            </p>

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

            <div className="mt-0 lg:hidden">
              <Image
                src={getAssetPath("/iimb/assets/img/Model image.webp")}
                alt="IIM Bangalore lady"
                width={400}
                height={290}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
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
              courseOptions={IIMB_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IIMB Eligibility Counselling Form"
              sourceOverride="IIM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIM_Organic"
              submitButtonText="Get Free Counselling"
              submitButtonClassName="bg-[#0f3b8c]"
              redirectUrl="/iimb/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}
