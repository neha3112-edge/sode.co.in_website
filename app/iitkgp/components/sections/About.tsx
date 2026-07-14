"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ArrowRight, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

type AboutFormType = "consultation" | null;

const IIT_KGP_COURSES: FormCourseOption[] = [
  {
    value: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
    label: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
  },
];

export function About() {
  const [activeForm, setActiveForm] = useState<AboutFormType>(null);

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Lock body scroll while modal is open
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
  | Close modal using Escape key
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
        className="relative min-h-138.75 scroll-mt-21 overflow-hidden bg-[#657187]"
      >
        {/* =============================================================
            Full Background Campus Image
        ============================================================== */}

        <Image
          src={getAssetPath("iitkgp/assets/img/kharagpur-about-image-6969d7452ec55.webp")}
          alt="Indian Institute of Technology Kharagpur campus"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Blue-grey overlay */}
        <div className="absolute inset-0" />

        {/* Bottom dark transparent layer */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20" />

        {/* =============================================================
            Main Content
        ============================================================== */}

        <Container className="relative z-10">
          <div className="flex min-h-138.75 items-start justify-center py-15 sm:py-17.5">
            <div className="w-full max-w-240 rounded-[42px] bg-white/95 px-5 py-8 text-center shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-[2px] sm:px-12 sm:py-12 lg:px-10.5 lg:py-7.75">
              {/* Heading */}
              <h2 className="text-[29px] font-black uppercase leading-tight tracking-[-0.03em] text-[#342184] sm:text-[34px] lg:text-[30px]">
                About IIT Kharagpur
              </h2>

              {/* First paragraph */}
              <p className="mx-auto mt-4 max-w-222.5 text-[14px] font-normal leading-[1.55] text-[#404040] sm:text-[13px]">
                Established in 1951, the Indian Institute of Technology
                Kharagpur is India&apos;s first IIT and was declared an
                Institute of National Importance under the Indian Institute of
                Technology (Kharagpur) Act, 1956. Located in Kharagpur, West
                Bengal, the institute occupies a 2,100-acre campus and has
                consistently ranked among India&apos;s leading engineering
                institutions, ranking 5th nationally in the NIRF 2025
                Engineering category.
              </p>

              {/* Second paragraph */}
              <p className="mx-auto mt-8 max-w-205 text-[14px] font-normal leading-[1.55] text-[#404040] sm:text-[13px]">
                IIT Kharagpur&apos;s research ecosystem is built on
                interdisciplinary collaboration, with a dedicated focus on AI
                research, industry-relevant solutions, and the advancement of
                machine learning systems.
              </p>

              {/* Consultation Button */}
              <button
                type="button"
                onClick={() => setActiveForm("consultation")}
                className="mt-5 inline-flex min-h-12.5 items-center justify-center gap-4 rounded-full bg-[#ff5318] px-7 py-3 text-[15px] font-extrabold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e9460d] hover:shadow-lg sm:text-[13px]"
              >
                Get FREE 1:1 Consultation
                <ArrowRight size={21} strokeWidth={2.7} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Consultation Modal
      ============================================================== */}

      {activeForm === "consultation" && (
        <AboutFormModal title="Get Free 1:1 Consultation" onClose={closeForm}>
          <FormWrapper
            title="Get FREE 1:1 Consultation"
            subtitle="Our academic experts will guide you through the IIT Kharagpur programme"
            onClose={closeForm}
            courseOptions={IIT_KGP_COURSES}
            formNameOverride="IIT Kharagpur About Consultation Form"
            sourceOverride="IIT Kharagpur About Section"
            utmSourceFallback="IIT Kharagpur Organic"
            utmMediumFallback="IIT Kharagpur About Consultation"
            submitButtonText="Book Free Consultation"
          />
        </AboutFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Form Modal
|--------------------------------------------------------------------------
*/

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
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-y-auto bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        className="relative max-h-[92vh] w-full max-w-105 overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close consultation form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#fff0eb] text-[#ff5318] transition-colors duration-200 hover:bg-[#ffe1d7]"
        >
          <X size={20} strokeWidth={2.3} />
        </button>

        {children}
      </div>
    </div>
  );
}
