"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IIMN_COURSE_OPTIONS } from "../../constants";

type Profile = {
  title: string;
  desc: string;
};

const eligibleProfiles: Profile[] = [
  {
    title: "Working Professionals",
    desc: "HR professionals with a minimum of 2 years of work experience seeking to build expertise in analytics-driven HR practices.",
  },
  {
    title: "Managers",
    desc: "HR managers and team leaders who want to leverage analytics, AI, and workforce insights for strategic decision-making.",
  },
  {
    title: "Graduates",
    desc: "Candidates with a Bachelor's degree in any discipline or a 10+2+3 Diploma along with the required work experience.",
  },
  {
    title: "Entrepreneurs",
    desc: "Business owners and founders looking to apply HR analytics for workforce planning, talent management, and organisational growth.",
  },
  {
    title: "Career Switchers",
    desc: "Professionals aiming to transition into strategic HR roles by developing skills in advanced workforce analytics and people analytics.",
  },
];

export function Eligibility() {
  const [formOpen, setFormOpen] = useState(false);

  const basePath = "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics";
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
            src={getAssetPath(`${assetsBase}/Blue banner image.webp`)}
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
            <h2 className="text-[18px] font-extrabold text-[#FCB042] sm:text-2xl leading-snug">
              Who Can Apply for the Post Graduate Certificate Programme in Advanced HR Analytics?
            </h2>

            <p className="mt-4 text-sm text-gray-200 leading-relaxed max-w-xl">
              This HRM postgraduate programme is designed for professionals looking to strengthen their analytical capabilities and use data-driven HR strategies to create measurable business impact.
            </p>

            <div className="mt-8 space-y-6">
              {eligibleProfiles.map((profile) => (
                <div key={profile.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#231069]">
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
              className="mt-10 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-[#231069] shadow-md transition duration-200 hover:bg-[#e2e8f5]"
            >
              Get 100% Free Counseling
            </button>

            {/* Mobile Only Image */}
            <div className="mt-6 w-full block md:hidden">
              <Image
                src={getAssetPath(`${assetsBase}/blue_banner_lady_image.webp`)}
                alt="HR Analytics Student"
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
              courseOptions={IIMN_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IIMN Eligibility Counselling Form"
              sourceOverride="IIMN LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIMN_Organic"
              submitButtonText="Get Free Counselling"
              submitButtonClassName="bg-[#FCB042] hover:bg-[#d89127] text-black"
              redirectUrl={`${basePath}/thank-you`}
            />
          </div>
        </div>
      )}
    </>
  );
}
