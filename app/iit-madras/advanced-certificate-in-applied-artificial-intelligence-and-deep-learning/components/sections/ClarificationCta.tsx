"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { IITM_COURSE_OPTIONS } from "../../constants";


export function ClarificationCta() {
  const [formOpen, setFormOpen] = useState(false);

  const basePath = "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning";

  useEffect(() => {
    if (!formOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [formOpen]);

  useEffect(() => {
    if (!formOpen) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFormOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [formOpen]);

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <section id="clarification" className="w-full bg-[#1d3d82] py-8 sm:py-10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Need clarification?
              </h2>

              <p className="mt-1 text-lg font-semibold text-white/90 sm:text-xl">
                Interact with experts, get a free consultation.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              type="button"
              onClick={openForm}
              className="inline-flex min-h-12 w-fit cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#1d3d82] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-md md:w-auto"
            >
              <Phone
                size={16}
                fill="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              />

              <span>Talk to Experts</span>
            </Button>
          </div>
        </Container>
      </section>

      {/* TALK TO EXPERTS POPUP */}
      {formOpen && (
        <div
          role="presentation"
          onClick={closeForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Talk to Experts"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >
            <FormWrapper
              title="Talk to Experts"
              subtitle="Select your course and our academic expert will contact you"
              onClose={closeForm}
              courseOptions={IITM_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IITM Clarification CTA Form"
              sourceOverride="IITM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IITM_Organic"
              submitButtonText="Talk to Experts"
              submitButtonClassName="bg-[#1d3d82] hover:bg-[#142b5c]"
              showPhoneCallLink
              redirectUrl={`${basePath}/thank-you`}
            />
          </div>
        </div>
      )}
    </>
  );
}
