"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

type Profile = {
  title: string;
  desc: string;
};

const eligibleProfiles: Profile[] = [
  {
    title: "HR Professionals",
    desc: "Working HR professionals can enroll in the IIM Kozhikode HR Analytics Course to enhance decision-making skills and apply analytics in workforce management.",
  },
  {
    title: "Business and Analytics Managers",
    desc: "Managers from different fields can join IIM Kozhikode HRM online courses to integrate data-driven strategies into business and people management.",
  },
  {
    title: "Non-HR Professionals",
    desc: "Graduates or executives from other domains can pursue the HR Analytics programs at IIM Kozhikode to transition into HR-focused or leadership roles.",
  },
  {
    title: "MBA Graduates",
    desc: "Fresh MBA graduates can strengthen their profiles with specialized certification courses in IIM Kozhikode, gaining practical HR analytics expertise for better career opportunities.",
  },
];

const IIMK_COURSES = [
  {
    value: "HRM Analytics Online Certification",
    label: "HRM Analytics Online Certification",
  },
];

export function Eligibility() {
  const [formOpen, setFormOpen] = useState(false);

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

  return (
    <>
      {/* Eligibility Section */}
      <section id="benefits" className="relative text-white py-16 overflow-hidden">
        {/* Decorative background image overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/iimk/assets/img/benefit-bg.webp")}
            alt="Background pattern"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-[24px] font-extrabold text-white sm:text-3xl">
              Eligibility for IIM Kozhikode HRM Online Courses
            </h2>

            <div className="mt-8 space-y-6">
              {eligibleProfiles.map((profile) => (
                <div key={profile.title} className="flex gap-4 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c9232c] text-white mt-1">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{profile.title}</h3>
                    <p className="mt-1 text-sm text-gray-200 leading-relaxed max-w-2xl">{profile.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setFormOpen(true)}
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-md bg-[#c9232c] px-8 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-[#aa1c25] cursor-pointer"
            >
              Get 100% Free Counseling
            </button>
          </div>
        </Container>
      </section>

      {/* Counselling Popup */}
      {formOpen && (
        <div
          role="presentation"
          onClick={() => setFormOpen(false)}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
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
              subtitle="Our academic experts will guide you step by step"
              onClose={() => setFormOpen(false)}
              courseOptions={IIMK_COURSES}
              defaultCourse="HRM Analytics Online Certification"
              hideCourseField
              formNameOverride="IIMK Eligibility Counselling Form"
              sourceOverride="IIMK Eligibility Section"
              utmSourceFallback="IIMK Organic"
              utmMediumFallback="IIMK Eligibility Counselling Button"
              submitButtonText="Get Free Counselling"
              submitButtonClassName="bg-[#1d3d82] hover:bg-[#142b5c]"
            />
          </div>
        </div>
      )}
    </>
  );
}
