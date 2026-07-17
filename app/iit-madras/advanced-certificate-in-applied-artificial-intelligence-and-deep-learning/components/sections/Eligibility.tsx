"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IITM_COURSE_OPTIONS } from "../../constants";

type Profile = {
  title: string;
  desc: string;
};

const eligibleProfiles: Profile[] = [

  {
    title: "Working Professionals",
    desc: "Professionals seeking to enhance their proficiency in analytics and deep learning tools for career growth.",
  },
  {
    title: "Graduates",
    desc: "Fresh graduates with a bent of mind for analytics and AI. Graduation or post-graduation in Engineering, Mathematical, or Computational Sciences with a minimum of 50% marks is required.",
  },
  {
    title: "Experienced Professionals",
    desc: "Professionals who want to apply deep learning and analytics to solve business challenges and drive organisational growth.",
  },
  {
    title: "AI & Analytics Aspirants",
    desc: "Individuals interested in developing practical skills in machine learning, deep learning, and real-world AI applications.",
  },
  {
    title: "Learners with Programming Basics",
    desc: "Applicants with exposure to high school mathematics and programming fundamentals are preferred.",
  },
];



export function Eligibility() {
  const [formOpen, setFormOpen] = useState(false);

  const basePath = "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning";
  const assetsBase = `${basePath}/assets/img`;

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

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      {/* ELIGIBILITY SECTION */}
      <section
        id="eligibility"
        className="relative overflow-hidden pt-16 md:py-16 text-white"
      >
        {/* Decorative background image overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath(`${assetsBase}/IITM Pravartak  Image.webp`)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-[18px] font-extrabold text-white sm:text-2xl">
              Who Can Apply to this IITM Pravartak Artificial Intelligence Certificate Course & Deep Learning Program?
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

            {/* Mobile Only Image */}
            <div className="mt-6 w-full block md:hidden">
              <Image
                src={getAssetPath(`${assetsBase}/magnific_a-medium-shot-captures-a-_CH8pFFHEEy-Photoroom.png`)}
                alt="AI Learning Student"
                width={500}
                height={300}
                priority
                className="h-auto w-full max-w-sm mx-auto object-contain rounded-xl"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* COUNSELLING POPUP */}
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
              courseOptions={IITM_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IITM Eligibility Counselling Form"
              sourceOverride="IITM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IITM_Organic"
              submitButtonText="Get Free Counselling"
              submitButtonClassName="bg-[#0f3b8c]"
              redirectUrl={`${basePath}/thank-you`}
            />
          </div>
        </div>
      )}
    </>
  );
}
