"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";

type AboutFormType = "callback" | null;

const RUSHFORD_COURSES = [
  {
    value: "Doctorate of Business Administration",
    label: "Doctorate of Business Administration",
  },
  {
    value: "DBA in International Business",
    label: "DBA in International Business",
  },
  {
    value: "DBA in Healthcare Management",
    label: "DBA in Healthcare Management",
  },
  {
    value: "DBA in Human Resource Management",
    label: "DBA in Human Resource Management",
  },
  {
    value: "DBA in Supply Chain Management",
    label: "DBA in Supply Chain Management",
  },
  {
    value: "DBA in Finance",
    label: "DBA in Finance",
  },
  {
    value: "DBA in Data Science",
    label: "DBA in Data Science",
  },
  {
    value: "DBA in Marketing",
    label: "DBA in Marketing",
  },
  {
    value: "DBA in Business Analytics",
    label: "DBA in Business Analytics",
  },
];

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
  | Lock Body Scroll
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
  | Close With Escape Key
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
        className="relative overflow-hidden bg-[#0C66AE] text-white"
      >
        <Container>
          <div className="relative grid min-h-[330px] grid-cols-1 items-center lg:grid-cols-[52%_48%]">
            {/* =============================================================
                Left Content
            ============================================================== */}

            <div className="relative z-20 px-1 py-12 sm:py-14 lg:py-[46px]">
              <div className="max-w-[680px]">
                <h2 className="text-[27px] font-normal uppercase leading-none tracking-[-0.02em] text-white sm:text-[29px] lg:text-[30px]">
                  About Us
                </h2>

                <p className="mt-4 text-[14px] font-medium leading-[1.25] text-white sm:text-[15px]">
                  Rushford Business School offers a globally recognized Doctor
                  of Business Administration (DBA) fully in online learning
                  mode. It is a recognised doctorate degree valid worldwide. The
                  DBA program helps to equip learners with high-level knowledge,
                  research, and analytical skills.
                </p>

                <p className="mt-5 text-[14px] font-medium leading-[1.25] text-white sm:text-[15px]">
                  With a 5-star QS rating for teaching and online learning,
                  Rushford Business School in Switzerland stands out for its 50+
                  programs, 45+ nationalities, 2 campuses, 25+ subject areas,
                  and a strong network of 9k+ alumni. Rushford continues to
                  inspire future leaders through innovation, excellence, and
                  global impact.
                </p>

                <button
                  type="button"
                  onClick={() => setActiveForm("callback")}
                  className="mt-5 inline-flex min-h-[39px] cursor-pointer items-center justify-center rounded-[4px] bg-[#FF2A62] px-5 py-2 text-[14px] font-bold text-white transition-all duration-200 hover:bg-[#e91f55] focus:outline-none focus:ring-4 focus:ring-white/20 sm:text-[15px]"
                >
                  Request Call Back
                </button>
              </div>
            </div>

            {/* =============================================================
                Right Building Image
            ============================================================== */}

            <div className="relative h-[280px] w-full sm:h-[330px] lg:absolute lg:bottom-0 lg:right-[-60px] lg:h-[330px] lg:w-[58%] xl:right-[-35px]">
              <Image
                src="/rushford/assets/img/rushford_new_desktop_bg.png"
                alt="Rushford Business School campus building"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain object-bottom-right"
              />

              {/* Left image blend */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[32%] bg-linear-to-r from-[#0C66AE] via-[#0C66AE]/75 to-transparent" />

              {/* Bottom image blend */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%] bg-linear-to-t from-[#0C66AE]/40 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Callback Form Modal
      ============================================================== */}

      {activeForm === "callback" && (
        <AboutFormModal title="Request Call Back" onClose={closeForm}>
          <FormWrapper
            title="Request Call Back"
            subtitle="Fill your details and our counsellor will contact you"
            onClose={closeForm}
            courseOptions={RUSHFORD_COURSES}
            formNameOverride="Rushford About Request Callback Form"
            sourceOverride="Rushford About Callback"
            utmSourceFallback="Rushford Organic"
            utmMediumFallback="Rushford About Callback Button"
            submitButtonText="Request Call Back"
          />
        </AboutFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| About Form Modal
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
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/65 px-4 py-6 backdrop-blur-sm"
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
          aria-label="Close callback form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#eaf4ff] text-[#0C66AE] transition-colors duration-200 hover:bg-[#d7eaff]"
        >
          <X size={20} strokeWidth={2.3} />
        </button>

        {children}
      </div>
    </div>
  );
}
