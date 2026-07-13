"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";

import AboutIIITBImage from "../../assets/img/iiit-b-about-image.webp";

type AboutFormType = "counselling" | null;

const IIITB_COURSES = [
  {
    value: "Executive Programme in Generative AI for Leaders",
    label: "Executive Programme in Generative AI for Leaders",
  },
  {
    value: "Executive Post Graduate Certificate Programme in Data Science & AI",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },
  {
    value:
      "Professional Certificate Programme in Data Science with Generative AI",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },
  {
    value: "Executive Post Graduate Programme in Applied AI and Agentic AI",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },
  {
    value: "Executive Diploma in Machine Learning & Artificial Intelligence",
    label: "Executive Diploma in Machine Learning & Artificial Intelligence",
  },
  {
    value: "Chief Technology Officer & AI Leadership Programme",
    label: "Chief Technology Officer & AI Leadership Programme",
  },
  {
    value: "Master of Science in Machine Learning & Artificial Intelligence",
    label: "Master of Science in Machine Learning & Artificial Intelligence",
  },
  {
    value: "Master of Science in Data Science with Generative AI",
    label: "Master of Science in Data Science with Generative AI",
  },
];

export function About() {
  const [activeForm, setActiveForm] = useState<AboutFormType>(null);

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Body Scroll Lock
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.body.style.overflow = activeForm ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeForm]);

  /*
  |--------------------------------------------------------------------------
  | Escape Key Close
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!activeForm) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeForm();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeForm, closeForm]);

  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-[#171717] py-14 text-white sm:py-16 lg:py-[78px]"
      >
        {/* Background Campus Image */}
        <div className="absolute inset-x-0 bottom-0 h-[72%] opacity-20">
          <Image
            src={AboutIIITBImage}
            alt=""
            fill
            aria-hidden="true"
            sizes="100vw"
            className="object-cover object-center grayscale"
          />

          {/* Dark background overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Top blend */}
          <div className="absolute inset-0 bg-linear-to-b from-[#171717] via-[#171717]/60 to-black/20" />
        </div>

        <Container className="relative z-10">
          {/* Heading */}
          <div className="mx-auto max-w-[850px] text-center">
            <h2 className="text-[29px] font-extrabold leading-tight text-white sm:text-[34px] lg:text-[36px]">
              About IIIT Bangalore Online
            </h2>

            <div className="mx-auto mt-2 h-px w-full max-w-[555px] bg-white/80" />

            <p className="mt-5 text-[14px] leading-[1.4] text-white/85 sm:text-[15px]">
              IIIT Bangalore is a premier technology institute established in
              1998, known for industry-focused education and strong academic
              depth. Its IIIT Bangalore online courses are designed for working
              professionals, combining academic rigour with real-world
              application. The institute offers carefully structured
              certification courses in emerging technology domains, supported by
              expert faculty and industry mentors. Learners gain practical
              exposure through projects, case studies, and capstones that align
              skills with current business and technology needs.
            </p>
          </div>

          {/* Campus Image */}
          <div className="relative mx-auto mt-8 max-w-[900px] pb-7 sm:mt-9">
            <div className="relative h-[245px] overflow-hidden rounded-[34px] shadow-[0_20px_45px_rgba(0,0,0,0.45)] sm:h-[315px] lg:h-[300px]">
              <Image
                src={AboutIIITBImage}
                alt="IIIT Bangalore campus"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-center"
              />
            </div>

            {/* Overlapping Counselling Button */}
            <button
              type="button"
              onClick={() => setActiveForm("counselling")}
              className="absolute bottom-0 left-1/2 flex min-h-[54px] w-[calc(100%-40px)] max-w-[345px] -translate-x-1/2 items-center justify-center rounded-[13px] bg-[#d32308] px-6 py-3 text-center text-[16px] font-extrabold text-white shadow-[0_8px_18px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b91f07] sm:text-[18px]"
            >
              Get FREE Career Counseling
            </button>
          </div>
        </Container>
      </section>

      {/* Counselling Modal */}
      {activeForm === "counselling" && (
        <AboutFormModal title="Get Free Career Counseling" onClose={closeForm}>
          <FormWrapper
            title="Get FREE Career Counseling"
            subtitle="Our academic experts will guide you step by step"
            onClose={closeForm}
            courseOptions={IIITB_COURSES}
            formNameOverride="IIITB About Free Counselling Form"
            sourceOverride="IIITB About Counselling"
            utmSourceFallback="IIITB Organic"
            utmMediumFallback="IIITB About Counselling Button"
            submitButtonText="Get Free Counselling"
          />
        </AboutFormModal>
      )}
    </>
  );
}

type AboutFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function AboutFormModal({ title, children, onClose }: AboutFormModalProps) {
  return (
    <div
      role="presentation"
      onMouseDown={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          aria-label="Close counselling form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#fff0ed] text-[#c9230c] transition hover:bg-[#ffe2dc]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
