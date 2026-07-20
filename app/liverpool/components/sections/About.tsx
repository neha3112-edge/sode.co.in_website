"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { LIVERPOOL_COURSE_OPTIONS } from "../../constants";
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
              About <span className="text-[#00499b]">Online MBA From Liverpool Business School</span>
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-gray-700 sm:text-base">
              <p>
                The Liverpool Online MBA programme is an 18-month MBA journey designed to develop strategic thinking, leadership capabilities, and practical business skills. The programme combines the academic expertise of Liverpool Business School with the Executive Programme in Business Management & AI Leadership certification from IIM Udaipur.
              </p>

              <p>
                MBA in Liverpool is a distinctive and intellectually challenging course designed for professionals seeking career growth. This Liverpool online MBA offers a personalised, research-focused learning experience with live sessions, industry-led insights, HBR case studies, simulations, and hands-on projects.
              </p>

              <p>
                Learners can customise their curriculum through specialisations in this MBA Liverpool University programme, which helps professionals enhance their business expertise and leadership potential with a global alumni network.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setActiveForm("curriculum")}
                className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[#25cfbf] hover:bg-[#1ebdae] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                Get Curriculum
                <Download size={14} strokeWidth={2.5} />
              </button>

              <button
                type="button"
                onClick={() => setActiveForm("apply")}
                className="inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-black hover:bg-gray-900 px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
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
          title="Get Liverpool MBA Curriculum"
          onClose={closeForm}
        >
          <FormWrapper
            title="Get Curriculum"
            subtitle="Fill your details to receive the Liverpool Online MBA curriculum"
            onClose={closeForm}
            courseOptions={LIVERPOOL_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="Liverpool About Curriculum Form"
            sourceOverride="Liverpool LP"
            utmSourceFallback="Liverpool Organic"
            utmMediumFallback="Liverpool Curriculum Button"
            submitButtonText="Get Curriculum"
            submitButtonClassName="bg-[#25cfbf] hover:bg-[#1ebdae] text-white"
            isBrochureForm
            brochureUrl="/liverpool/assets/img/main_brochure.pdf"
            redirectUrl="/thank-you"
          />
        </AboutFormModal>
      )}

      {/* Apply Modal */}
      {activeForm === "apply" && (
        <AboutFormModal
          title="Apply for Liverpool MBA"
          onClose={closeForm}
        >
          <FormWrapper
            title="Apply Now"
            subtitle="Fill your details to start the application process"
            onClose={closeForm}
            courseOptions={LIVERPOOL_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="Liverpool About Apply Form"
            sourceOverride="Liverpool LP"
            utmSourceFallback="Liverpool Organic"
            utmMediumFallback="Liverpool About Apply Button"
            submitButtonText="Apply Now"
            submitButtonClassName="bg-[#00499b] hover:bg-[#003d83] text-white"
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
