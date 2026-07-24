"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { ESGCI_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type AboutFormType = "callback" | null;

/*
|--------------------------------------------------------------------------
| About Section
|--------------------------------------------------------------------------
*/

export function About() {
  const [activeForm, setActiveForm] = useState<AboutFormType>(null);

  /*
  |--------------------------------------------------------------------------
  | Close Form
  |--------------------------------------------------------------------------
  */

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
  | Close Modal With Escape Key
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
      <section id="about" className="relative overflow-hidden bg-black">
        <div className="grid min-h-[286px] grid-cols-1 lg:grid-cols-2">
          {/* ========================================================
              Left Content
          ======================================================== */}

          <div className="relative z-10 flex items-center px-5 py-10 sm:px-8 lg:px-0 lg:py-12">
            <Container className="mx-auto">
              <div className="max-w-[800px]">
                <h2 className="text-[30px] font-black uppercase leading-none tracking-[-0.025em] text-white sm:text-[34px] lg:text-[36px]">
                  About Us
                </h2>

                <p className="mt-5 max-w-[750px] text-[14px] leading-[1.45] text-white sm:text-[13px]">
                  ESGCI (Ecoles Supérieur de Gestion – Commerce International)
                  was founded in 1986 in Paris. It is a famous management school
                  known for its global approach. About 20% of its students come
                  from 65 countries. Recognized by the French government, ESGCI
                  offers high-quality training through its Qualiopi
                  certification. The school is part of Galileo Global Education,
                  a large group with over 200,000 students across 91 campuses in
                  13 countries. Other top schools in the group include Paris
                  School of Business, Cours Florent, and Instituto Marangoni.
                </p>

                <button
                  type="button"
                  onClick={() => setActiveForm("callback")}
                  className="mt-6 inline-flex items-center justify-center rounded-[6px] bg-[#ffe500] px-5 py-2.5 text-[15px] font-bold text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#f1d900] hover:shadow-lg"
                >
                  Request Call Back
                </button>
              </div>
            </Container>
          </div>

          {/* ========================================================
              Right Campus Image
          ======================================================== */}

          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[320px] lg:min-h-full hidden md:block">
            <Image
              src={getAssetPath("/esgci/assets/img/about-us.webp")}
              alt="ESGCI Paris campus"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Dark gradient from left */}
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/35 to-transparent" />

            {/* Mobile readability overlay */}
            <div className="absolute inset-0 bg-black/10 lg:hidden" />
          </div>
        </div>
      </section>

      {/* ============================================================
          Request Callback Modal Overlay
      ============================================================ */}

      {activeForm === "callback" && (
        <AboutFormModal title="Request Call Back" onClose={closeForm}>
          <FormWrapper
            title="Request Call Back"
            subtitle="Our academic experts will contact you shortly"
            onClose={closeForm}
            courseOptions={ESGCI_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="ESGCI About Callback Form"
            sourceOverride="ESGCI LP"
            utmSourceFallback="Organic"
            utmMediumFallback="ESGCI_Organic"
            submitButtonText="Request Call Back"
            redirectUrl="/thank-you"
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
