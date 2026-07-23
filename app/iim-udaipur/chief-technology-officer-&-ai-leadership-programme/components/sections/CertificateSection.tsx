"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, GraduationCap } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper from "@/components/forms/FormWrapper";
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
      <section id="sample-certificate" className="px-2 w-full bg-grey-bg">


        {/* =================================================
            CERTIFICATE CONTENT
        ================================================== */}

        <div className="py-10 sm:py-12 lg:py-16">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
              {/* Left Certificate Image */}

              <div className="relative mx-auto w-full max-w-200">
                <div className="relative aspect-[1.40/1] w-full overflow-hidden border border-gray-200 rounded-lg shadow-sm">
                  <Image
                    src={getAssetPath("/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/sample-certificate.webp")}
                    alt="IIM Udaipur sample certificate"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Content */}

              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-extrabold leading-tight text-[#01519A] sm:text-4xl">
                  Blend of tech &amp; business excellence: IIIT-B &amp; IIMU
                </h2>

                <div className="mt-6 space-y-4">
                  {/* Points */}
                  <div className="flex items-start gap-3 text-left">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#01519A] text-white text-[10px] mt-1 font-bold">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm md:text-base">IIIT-Bangalore: Deep-Tech Credibility</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        IIIT-B, an A+ NAAC-accredited institute, is a top AI and tech school with 5000+ research papers, 100+ patents, and strong industry ties.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-left">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#01519A] text-white text-[10px] mt-1 font-bold">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm md:text-base">IIM Udaipur: Business Strategy &amp; Executive Leadership</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        IIM Udaipur, a top 6% global B-school with AACSB accreditation, ranks in QS 2026, FT 2025, NIRF 2025 #21, and ranks #4 in India by UT Dallas 2025 for research.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-left">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#01519A] text-white text-[10px] mt-1 font-bold">✓</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm md:text-base">AI Success Planning workshop at IIIT-B</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        AI Success Planning workshop at IIIT Bangalore to build the strategic depth required for modern AI-driven leadership.
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
      </section>

      {/* =====================================================
          GET DEGREE POPUP FORM
      ====================================================== */}

      {formOpen && (
        <CertificateFormModal title="Get Degree" onClose={closeForm}>
          <FormWrapper
            title="Get 1:1 Free Counselling"
            subtitle="Our academic experts will guide you step by step"
            onClose={closeForm}
            defaultCourse=""
            courseOptions={IIMU_COURSE_OPTIONS}
            formNameOverride="IIMU Sample Certificate Form"
            sourceOverride="IIMU LP"
            utmSourceFallback="Organic"
            utmMediumFallback="IIMU_Organic"
            submitButtonText="Get Degree"
            redirectUrl="/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/thank-you"
          />
        </CertificateFormModal>
      )}
    </>
  );
}

function CertificateFormModal({
  title,
  children,
  onClose,
}: CertificateFormModalProps) {
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
