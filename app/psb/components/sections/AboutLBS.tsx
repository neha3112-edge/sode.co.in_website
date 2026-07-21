"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { PSB_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type AboutFormType = "callback" | null;

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function AboutLbs() {
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
        id="about-lbs"
        className="relative min-h-[400px] overflow-hidden bg-black text-white"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/psb/assets/img/background image PSOB.webp")}
            alt="Paris School of Business campus background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-100"
          />
          <div className="absolute inset-0" />
        </div>

        <Container className="relative z-10">
          <div className="flex min-h-[400px] items-center py-12">
            <div className="w-full max-w-[620px] text-center md:text-left">
              {/* Heading */}
              <h2 className="text-xl font-extrabold tracking-tight text-[#AF1062] sm:text-2xl lg:text-3xl text-center md:text-left">
                About Paris School of Business
              </h2>

              {/* Description */}
              <div className="mt-5 space-y-4 text-xs font-md leading-relaxed text-gray-200 sm:text-sm text-center md:text-left">
                <p>
                  The Paris School of Business (PSB) was established in 1974 and is a state-recognised French management school committed to delivering quality education through academic excellence, international awareness, and professional experience. It is accredited by the French Ministry for Higher Education and Research and is a member of the prestigious French Grande École (CGE) network.
                </p>

                <p>
                  The institute holds the prestigious Triple Crown accreditation AMBA, AACSB, and EFMD, an achievement earned by fewer than 5% of business schools worldwide. This recognition reflects PSB's commitment to maintaining globally recognised academic standards and excellence in management education.
                </p>

                <p>
                  The institute has a vibrant international community comprising 4,000+ students, 20,000+ alumni, and learners from 80+ nationalities. Located in the heart of Paris, PSB offers a globally connected learning environment that supports academic growth, professional networking, and international exposure.
                </p>
              </div>

              {/* Request Call Back Button */}
              <button
                type="button"
                onClick={() => setActiveForm("callback")}
                className="mt-6 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[6px] bg-[#AF1062] hover:bg-[#9e0a56] px-6 py-2 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-center md:text-left"
              >
                <Phone size={14} fill="currentColor" strokeWidth={2} />
                Request Call Back
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Callback Modal */}
      {activeForm === "callback" && (
        <AboutLbsModal title="Request Call Back" onClose={closeForm}>
          <FormWrapper
            title="Request Call Back"
            subtitle="Share your details and our academic experts will contact you"
            onClose={closeForm}
            courseOptions={PSB_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="PSB About LBS Callback Form"
            sourceOverride="PSB LP"
            utmSourceFallback="PSB Organic"
            utmMediumFallback="PSB About Callback Button"
            submitButtonText="Request Call Back"
            submitButtonClassName="bg-[#AF1062] hover:bg-[#9e0a56]"
            redirectUrl="/thank-you"
          />
        </AboutLbsModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Modal
|--------------------------------------------------------------------------
*/

type AboutLbsModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function AboutLbsModal({ title, children, onClose }: AboutLbsModalProps) {
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
        className="relative max-h-[92vh] w-full max-w-[400px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {children}
      </div>
    </div>
  );
}
