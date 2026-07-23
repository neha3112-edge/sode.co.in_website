"use client";

import { Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { EDGEWOOD_COURSE_OPTIONS } from "../../constants";

export function ClarificationCta() {
  const [formOpen, setFormOpen] = useState(false);

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <section id="clarification" className="w-full bg-[#076493] py-8 sm:py-10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Need clarification?
              </h2>

              <p className="mt-1 text-lg font-semibold text-white/90 sm:text-xl">
                Interact with experts, Get free consultation.
              </p>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              type="button"
              onClick={() => setFormOpen(true)}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-md md:w-auto"
            >
              <Phone size={16} fill="currentColor" strokeWidth={2} />
              Talk to Experts
            </Button>
          </div>
        </Container>
      </section>

      {/* Popup Form */}
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
              subtitle="Share your details and our academic expert will contact you"
              onClose={closeForm}
              courseOptions={EDGEWOOD_COURSE_OPTIONS}
              formNameOverride="Edgewood Clarification CTA Form"
              sourceOverride="Edgewood LP"
              utmSourceFallback="Edgewood Organic"
              utmMediumFallback="Edgewood Talk to Experts Button"
              submitButtonText="Talk to Experts"
              submitButtonClassName="bg-[#c9230c] hover:bg-[#aa1c08]"
              redirectUrl="/thank-you"
              showPhoneCallLink
            />
          </div>
        </div>
      )}
    </>
  );
}
