"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { Button } from "@/components/ui/Button";
import { RUSHFORD_COURSE_OPTIONS } from "../../constants";

/* =========================================================
   TYPES
 ========================================================= */

type AboutFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

/* =========================================================
   ABOUT COMPONENT
 ========================================================= */

export function About() {
  const [formOpen, setFormOpen] = useState(false);

  /* =========================================================
     LOCK BODY SCROLL WHEN MODAL IS OPEN
  ========================================================= */

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

  /* =========================================================
     CLOSE MODAL ON ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFormOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <section id="about" className="relative w-full bg-[#005ca8] text-white overflow-hidden">
        {/* Desktop Background Image (right-aligned) */}
        <div className="absolute inset-y-0 right-0 z-0 hidden lg:block w-1/2">
          <Image
            src="/rushford/assets/img/rushford-campus-buiding.webp"
            alt="Rushford Switzerland Campus"
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
          {/* Fade to blue background on the left of the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#005ca8] via-[#005ca8]/60 to-transparent z-10" />
        </div>

        <Container className="relative z-10 px-6 sm:px-8 lg:px-12 p-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] pt-12 md:py-12 lg:py-10 items-center">
            {/* Left Text Column */}
            <div className="max-w-[620px] px-6 md:px-0">
              <h2 className="text-[28px] sm:text-[34px] font-bold text-white tracking-wide uppercase mb-3">
                ABOUT US
              </h2>
              <div className="space-y-2 text-[13px] leading-relaxed text-white">
                <p>
                  Rushford Business School offers a globally recognized Doctor of Business Administration (DBA) fully in online learning mode. It is a recognised doctorate degree valid worldwide. The DBA program helps to equip learners with high-level knowledge, research, and analytical skills.
                </p>
                <p>
                  With a 5-star QS rating for teaching and online learning, Rushford Business School in Switzerland stands out for its 50+ programs, 45+ nationalities, 2 campuses, 25+ subject areas, and a strong network of 9k+ alumni. Rushford continues to inspire future leaders through innovation, excellence, and global impact.
                </p>
              </div>

              {/* Button */}
              <div className="mt-6">
                <Button
                  size="lg"
                  type="button"
                  onClick={() => setFormOpen(true)}
                  className="inline-flex min-h-[46px] cursor-pointer items-center justify-center rounded-lg bg-[#ff0054] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#d00045] hover:-translate-y-0.5"
                >
                  Request Call Back
                </Button>
              </div>
            </div>

            {/* Right Image Column (only shown on mobile/tablet since it's absolute on desktop) */}
            <div className="mt-4 w-full max-w-lg mx-auto lg:hidden">
              <img
                src="/rushford/assets/img/rushford-campus-buiding.webp"
                alt="Rushford Switzerland Campus"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          REQUEST CALL BACK POPUP
      ====================================================== */}

      {formOpen && (
        <AboutFormModal title="Request Call Back" onClose={closeForm}>
          <FormWrapper
            title="Request Call Back"
            subtitle="Share your details and our academic expert will contact you"
            onClose={closeForm}
            courseOptions={RUSHFORD_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="Rushford About Request Call Back Form"
            sourceOverride="Rushford LP"
            utmSourceFallback="Organic"
            utmMediumFallback="Rushford_Organic"
            submitButtonText="Request Call Back"
            submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
            showPhoneCallLink
            redirectUrl="/rushford/thank-you"
          />
        </AboutFormModal>
      )}
    </>
  );
}

/* =========================================================
   ABOUT FORM MODAL
 ========================================================= */

function AboutFormModal({ title, children, onClose }: AboutFormModalProps) {
  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {children}
      </div>
    </div>
  );
}
