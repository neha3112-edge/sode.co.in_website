"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { SSBM_COURSE_OPTIONS } from "../../constants";

type AboutFormType = "counselling" | null;

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
        className="relative overflow-hidden py-14 text-white sm:py-16 lg:py-[50px] px-6 md:px-0"
      >
        {/* Background Campus Image */}
        <Image
          src={getAssetPath("/ssbm/assets/img/About-pic.webp")}
          alt="SSBM University campus"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Screenshot-style dark overlay */}
        <div className="absolute inset-0" />

        <Container className="relative z-10 p-0 max-w-8xl lg:px-20">
          <div className="flex items-center md:px-0">
            <div className="w-full max-w-[1020px]">
              <h2 className="text-[31px] font-black uppercase leading-tight tracking-[-0.025em] text-white sm:text-[34px]">
                About Online SSBM
              </h2>

              <p className="mt-5 max-w-[660px] text-[14px] font-medium leading-[1.65] text-gray-200 sm:text-[13px]">
                SSBM University, located in Switzerland, offer morden industry-accredited management courses. The institution helps students get a flexible higher education in online mode, which is specifically made for working professionals across the globe. Their digital learning curriculum offers interactive classes, real business case studies, international faculty access, and a properly structured research environment. Students looking to take admission in SSBM DBA can develop practical knowledge, apply research and leadership skills that match the global business standards. As a globally known university who are offering executive and doctoral education support learners through personalised academic guidance, dedicated mentorship, and international networking opportunities.
              </p>

              <button
                type="button"
                onClick={() => setActiveForm("counselling")}
                className="mt-7 inline-flex min-h-[42px] items-center justify-center rounded-[5px] bg-[#c11f28] px-6 py-2.5 text-[15px] font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#a8141c] hover:shadow-lg"
              >
                Request Call Back
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Counselling Form Modal */}
      {activeForm === "counselling" && (
        <CustomFormModal title="Request SSBM Call Back" onClose={closeForm}>
          <FormWrapper
            title="Request Call Back"
            subtitle="Our academic expert will connect with you shortly"
            onClose={closeForm}
            courseOptions={SSBM_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="SSBM About Callback Form"
            sourceOverride="SSBM LP"
            utmSourceFallback="Organic"
            utmMediumFallback="SSBM_Organic"
            submitButtonText="Request Call Back"
            redirectUrl="/thank-you"
          />
        </CustomFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Form Modal
|--------------------------------------------------------------------------
*/

type CustomFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function CustomFormModal({ title, children, onClose }: CustomFormModalProps) {
  return (
    <div
      role="presentation"
      onMouseDown={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {children}
      </div>
    </div>
  );
}
