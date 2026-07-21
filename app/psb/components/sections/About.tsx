"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { PSB_COURSE_OPTIONS } from "../../constants";
import { ArrowRight, Download } from "lucide-react";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type AboutFormType = "curriculum" | "apply" | null;

/*
|--------------------------------------------------------------------------
| About Component
|--------------------------------------------------------------------------
*/

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
      <section id="about" className="bg-white py-12 sm:py-14">
        <Container>
          <div className="mx-auto max-w-7xl text-center">
            {/* Heading */}
            <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
              About <span className="text-[#233568]">the Master of Business Administration</span>
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                The Master of Business Administration from Paris School of Business, with an Executive Programme Certification from IIM Lucknow, is designed for ambitious working professionals seeking a globally recognised management qualification without taking a career break. The programme is delivered entirely online over 18 months. It combines international academic standards with live learning from renowned IIM Lucknow faculty and world-class Paris School of Business faculty.
              </p>

              <p>
                The course is built on an international standards curriculum including  14 courses, five modern specialisations, and a CEO Challenge Project that enables participants to apply classroom learning to real business challenges. Learners also have the opportunity to participate in an optional one-week Paris immersion with international peers, further enriching their global learning experience.
              </p>

              <p>
                Every stage of this programme curriculum is structured to prepare participants for greater leadership responsibilities in a rapidly evolving global business environment.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setActiveForm("curriculum")}
                className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[#AF1062] hover:bg-[#9e0a56] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                Get Curriculum
                <Download size={14} strokeWidth={2.5} />
              </button>

              <button
                type="button"
                onClick={() => setActiveForm("apply")}
                className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[#233568] hover:bg-[#1a2850] px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                Apply Now
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Curriculum Modal */}
      {activeForm === "curriculum" && (
        <AboutFormModal
          title="Get PSB MBA Curriculum"
          onClose={closeForm}
        >
          <FormWrapper
            title="Get Curriculum"
            subtitle="Fill your details to receive the Paris School of Business Online MBA curriculum"
            onClose={closeForm}
            courseOptions={PSB_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="PSB About Curriculum Form"
            sourceOverride="PSB LP"
            utmSourceFallback="PSB Organic"
            utmMediumFallback="PSB Curriculum Button"
            submitButtonText="Get Curriculum"
            submitButtonClassName="bg-[#AF1062] hover:bg-[#9e0a56] text-white"
            isBrochureForm
            brochureUrl="/psb/assets/img/main_brochure.pdf"
            redirectUrl="/thank-you"
          />
        </AboutFormModal>
      )}

      {/* Apply Modal */}
      {activeForm === "apply" && (
        <AboutFormModal
          title="Apply for Paris School of Business MBA"
          onClose={closeForm}
        >
          <FormWrapper
            title="Apply Now"
            subtitle="Fill your details to start the application process"
            onClose={closeForm}
            courseOptions={PSB_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="PSB About Apply Form"
            sourceOverride="PSB LP"
            utmSourceFallback="PSB Organic"
            utmMediumFallback="PSB About Apply Button"
            submitButtonText="Apply Now"
            submitButtonClassName="bg-[#233568] hover:bg-[#1a2850] text-white"
            redirectUrl="/thank-you"
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
