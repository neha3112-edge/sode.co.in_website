"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IITR_COURSE_OPTIONS } from "../../constants";

type Profile = {
  title: string;
  desc: string;
};

const eligibleProfiles: Profile[] = [
  {
    title: "Working Professionals",
    desc: "Professionals with a minimum of 1 year of experience, preferably in IT, software, technology, or engineering domains.",
  },
  {
    title: "Graduates",
    desc: "Candidates with a Bachelor's degree are eligible to apply.",
  },
  {
    title: "Technology Professionals",
    desc: "Applicants from Engineering, Technology, Computer Science, IT, Mathematical Sciences, and related disciplines will be preferred.",
  },
];

export function Eligibility() {
  const [formOpen, setFormOpen] = useState(false);

  const basePath = "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai";
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
            src={getAssetPath(`${assetsBase}/Blue banner.webp`)}
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
              Who Can Apply for IIT Roorkee Certificate in Data Science, Machine Learning & Generative AI?
            </h2>

            <div className="mt-8 space-y-6">
              {eligibleProfiles.map((profile) => (
                <div key={profile.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#3585C1]">
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
              className="mt-10 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-[#f0f3fa] px-8 py-3 text-sm font-bold text-[#3585C1] shadow-md transition duration-200 hover:bg-[#e2e8f5]"
            >
              Get 100% Free Counseling
            </button>

            {/* Mobile Only Image */}
            <div className="mt-6 w-full block md:hidden">
              <Image
                src={getAssetPath(`${assetsBase}/Blue banner man image.webp`)}
                alt="Data Science Learning Professional"
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
              courseOptions={IITR_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IITR Eligibility Counselling Form"
              sourceOverride="IITR LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IITR_Organic"
              submitButtonText="Get Free Counselling"
              submitButtonClassName="bg-[#3585C1] hover:bg-[#256c9e]"
              redirectUrl={`${basePath}/thank-you`}
            />
          </div>
        </div>
      )}
    </>
  );
}
