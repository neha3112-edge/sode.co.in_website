"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { XLRI_COURSE_OPTIONS } from "../../constants";

type Profile = {
  title: string;
  desc: string;
};

const eligibleProfiles: Profile[] = [
  {
    title: "HR Professionals",
    desc: "Graduates with a minimum of 1 year of HR work experience seeking to enhance their HR expertise and strategic capabilities.",
  },
  {
    title: "Working Professionals",
    desc: "Non-HR professionals with a minimum of 2 years of work experience looking to build HR knowledge or transition into HR roles.",
  },
  {
    title: "Managers",
    desc: "Professionals managing teams or people responsibilities who aspire to grow into strategic HR leadership positions.",
  },
  {
    title: "Graduates",
    desc: "Candidates with a 10+2+3 graduation or diploma from a recognised university/institution approved by UGC/AICTE/DEC/AIU/State Government.",
  },
  {
    title: "International Applicants",
    desc: "Graduates with an equivalent recognised degree who meet the prescribed work experience requirements.",
  },
];

export function Eligibility() {
  const [formOpen, setFormOpen] = useState(false);

  const basePath = "/xlri/executive-development-programme-in-human-resource-management";
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
            src={getAssetPath(`${assetsBase}/BG.webp`)}
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
            <h2 className="text-[18px] font-extrabold text-[#BCCF17] sm:text-2xl leading-snug">
              Who Can Apply for the XLRI Executive Development Programme in Human Resource Management?
            </h2>

            <p className="mt-4 text-sm text-gray-200 leading-relaxed max-w-xl">
              The Executive Development Programme in Human Resource Management is designed for graduates and experienced professionals looking to build strategic HR capabilities, strengthen people management skills, or transition into HR leadership roles.
            </p>

            <div className="mt-8 space-y-6">
              {eligibleProfiles.map((profile) => (
                <div key={profile.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#10316A]">
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
              className="mt-10 inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-[#10316A] shadow-md transition duration-200 hover:bg-[#e2e8f5]"
            >
              Get 100% Free Counseling
            </button>

            {/* Mobile Only Image */}
            <div className="mt-6 w-full block md:hidden">
              <Image
                src={getAssetPath(`${assetsBase}/magnific_a-young-indian-woman-with_SO1rEPlUb8-Photoroom.png`)}
                alt="HR Student"
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
              courseOptions={XLRI_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="XLRI Eligibility Counselling Form"
              sourceOverride="XLRI LP"
              utmSourceFallback="Organic"
              utmMediumFallback="XLRI_Organic"
              submitButtonText="Get Free Counselling"
              submitButtonClassName="bg-[#10316A] hover:bg-[#0c2450] text-white"
              redirectUrl={`${basePath}/thank-you`}
            />
          </div>
        </div>
      )}
    </>
  );
}
