"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Phone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { LIVERPOOL_COURSE_OPTIONS } from "../../constants";

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
            src={getAssetPath("/liverpool/assets/img/ljmu-rev.png")}
            alt="Liverpool John Moores University campus background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 grayscale"
          />
          <div className="absolute inset-0" />
        </div>

        <Container className="relative z-10">
          <div className="flex min-h-[400px] items-center py-12">
            <div className="w-full max-w-[620px]">
              {/* Heading */}
              <h2 className="text-xl font-extrabold tracking-tight text-[#25cfbf] sm:text-2xl lg:text-3xl">
                About Liverpool Business School
              </h2>

              {/* Description */}
              <div className="mt-5 space-y-4 text-xs font-md leading-relaxed text-gray-200 sm:text-sm">
                <p>
                  Liverpool Business School (LBS), a renowned school within Liverpool John Moores University (LJMU), brings over three decades of excellence in business education. The institution is recognised for its innovative approach, impactful research, and industry-focused learning. LBS provides a globally relevant learning experience for aspiring business leaders.
                </p>

                <p>
                  The Liverpool online MBA programme is designed to help professionals enhance their business knowledge through a research-focused curriculum, practical learning, and global exposure. This MBA University of Liverpool pathway offers an MBA degree from Liverpool Business School along with IIM Udaipur certification, providing learners with double credentials and alumni status from both institutions.
                </p>

                <p>
                  Through the MBA in Liverpool learning journey, professionals can customise their curriculum, gain hands-on learning through HBR case studies, simulations, real-world projects, and access to a thriving network of 3,000+ alumni.
                </p>
              </div>

              {/* Request Call Back Button */}
              <button
                type="button"
                onClick={() => setActiveForm("callback")}
                className="mt-6 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[6px] bg-[#25cfbf] hover:bg-[#1ebdae] px-6 py-2 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
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
            courseOptions={LIVERPOOL_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="Liverpool About LBS Callback Form"
            sourceOverride="Liverpool LP"
            utmSourceFallback="Liverpool Organic"
            utmMediumFallback="Liverpool About Callback Button"
            submitButtonText="Request Call Back"
            submitButtonClassName="bg-[#25cfbf] hover:bg-[#1ebdae]"
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
