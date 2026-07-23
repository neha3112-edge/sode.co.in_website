"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { EDGEWOOD_COURSE_OPTIONS } from "../../constants";

type AboutFormType = "counselling" | null;

export function About() {
  const [activeForm, setActiveForm] = useState<AboutFormType>(null);

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeForm ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeForm]);

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
        id="about-section"
        className="relative overflow-hidden py-14 text-white sm:py-16 lg:py-[78px]"
      >
        {/* Background Campus Image */}
        <div className="absolute inset-x-0 bottom-0 h-[100%]">
          <Image
            src={getAssetPath("/edgewood/assets/img/edegewood-about-image.webp")}
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
            <h2 className="text-[27px] font-bold leading-tight text-white sm:text-[32px] lg:text-[34px]">
              About Edgewood University Online
            </h2>

            <div className="mx-auto mt-2 h-px w-full max-w-[555px] bg-white/80" />

            <p className="mt-5 text-[13px] leading-[1.4] text-white/85 sm:text-[13px]">
              Edgewood University Online is a US-based university that was established in 1927, and the university is located in Madison. With 95+ years of excellence, the university is one that offers career-focused learning. The university has the approval of ACBSP, HLC, which make sure the education provided by Edgewood University Online is globally competitive. The university offers a dual program in Edgewood University Online MBA + DBA, and the university also provides a management degree, which is called Edgewood University Online MBA. Through their flexible programs, students can get an industry-relevant curriculum, faculty support, and a learning model built for working professionals.
            </p>
          </div>

          {/* Campus Image */}
          <div className="relative mx-auto mt-8 max-w-[900px] pb-7 sm:mt-9">
            <div className="relative h-[245px] overflow-hidden rounded-[34px] shadow-[0_20px_45px_rgba(0,0,0,0.45)] sm:h-[315px] lg:h-[300px]">
              <Image
                src={getAssetPath("/edgewood/assets/img/edegewood-about-image.webp")}
                alt="Edgewood campus building"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-center"
              />
            </div>

            {/* Overlapping Counselling Button */}
            <button
              type="button"
              onClick={() => setActiveForm("counselling")}
              className="absolute bottom-0 left-1/2 flex min-h-[50px] w-[calc(100%-40px)] max-w-[300px] -translate-x-1/2 items-center justify-center rounded-[13px] bg-[#d32308] px-6 py-2.5 text-center text-[15px] font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b91f07] sm:text-[16px]"
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
            courseOptions={EDGEWOOD_COURSE_OPTIONS}
            formNameOverride="Edgewood About Free Counselling Form"
            sourceOverride="Edgewood LP"
            utmSourceFallback="Edgewood Organic"
            utmMediumFallback="Edgewood About Counselling Button"
            submitButtonText="Get Free Counselling"
            submitButtonClassName="bg-[#c9230c] hover:bg-[#aa1c08]"
            redirectUrl="/thank-you"
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
        {children}
      </div>
    </div>
  );
}
