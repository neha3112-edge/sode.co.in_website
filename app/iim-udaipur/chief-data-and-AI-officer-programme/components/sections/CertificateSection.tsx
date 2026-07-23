"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import FormWrapper from "@/components/forms/FormWrapper";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";
import { IIMU_COURSE_OPTIONS } from "../../constants";

type CertificateFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function CertificateSection() {
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
      <div id="sample-certificate" className="relative w-full bg-[#fcfdfe] py-14 sm:py-16 lg:py-20 border-b border-gray-100 px-4 md:px-0">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
            {/* Left Certificate Image Wrapper */}

            <div className="w-full max-w-lg lg:w-1/2">
              <div className="relative aspect-[4.2/3] w-full overflow-hidden rounded-[10px] shadow-lg border-1 border-gray-200">
                <Image
                  src={getAssetPath(
                    "/iim-udaipur/chief-data-and-AI-officer-programme/img/sample-certificate.webp",
                  )}
                  alt="IIM Udaipur sample certificate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content */}

            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="text-2xl font-extrabold leading-tight text-[#01519A] sm:text-4xl">
                Blend of tech &amp; business excellence: IIIT-B &amp; IIMU
              </h2>

              <div className="mt-6 space-y-4">
                {/* Points */}
                <div className="flex items-start gap-3 text-left">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#01519A] text-white text-[10px] mt-1 font-bold">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">IIIT-Bangalore: Technical Authority</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      NAAC A+ accredited. NIRF Top 100. India’s premier institution for applied technology, data engineering, &amp; AI research. Delivers the technical half of the CDAIO mandate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#01519A] text-white text-[10px] mt-1 font-bold">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">IIM Udaipur: Business &amp; Leadership Authority</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      AACSB accredited and a leading B-school in India. Delivers the business half of the CDAIO mandate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#01519A] text-white text-[10px] mt-1 font-bold">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">2-Day Data &amp; AI Leadership Workshop at IIIT-Bangalore</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      The culminating immersive experience of the programme. Identify high-impact data and AI opportunities, stress-test your governance architecture against real-world failure modes, and defend your data strategy.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                type="button"
                onClick={() => setFormOpen(true)}
                className="mt-4 cursor-pointer inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#01519A] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#064b79]"
              >
                Get Certificate
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* =====================================================
          SAMPLE CERTIFICATE POPUP FORM
      ====================================================== */}

      {formOpen && (
        <CertificateFormModal title="Get Certificate" onClose={closeForm}>
          <FormWrapper
            title="Get Program Certificate Info"
            subtitle="Fill in details to get syllabus & certificate guide"
            onClose={closeForm}
            defaultCourse=""
            courseOptions={IIMU_COURSE_OPTIONS}
            formNameOverride="IIMU Certificate Download Form"
            sourceOverride="IIMU LP"
            utmSourceFallback="Organic"
            utmMediumFallback="IIMU_Organic"
            submitButtonText="Get Certificate"
            redirectUrl="/iim-udaipur/chief-data-and-AI-officer-programme/thank-you"
          />
        </CertificateFormModal>
      )}
    </>
  );
}

function CertificateFormModal({ title, children, onClose }: CertificateFormModalProps) {
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
