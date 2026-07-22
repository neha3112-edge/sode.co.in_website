"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IIMB_COURSE_OPTIONS } from "../../constants";



/* =========================================================
   PLACEMENT PARTNERS
========================================================= */

const partners = [
  {
    name: "Capco",
    src: "/iimb/assets/img/capco.webp",
  },
  {
    name: "Cognizant",
    src: "/iimb/assets/img/Cognizant.webp",
  },
  {
    name: "Delhivery",
    src: "/iimb/assets/img/Delhivery.webp",
  },
  {
    name: "Capita",
    src: "/iimb/assets/img/capita.webp",
  },
  {
    name: "Disney",
    src: "/iimb/assets/img/disnep.webp",
  },
  {
    name: "Codeyoung",
    src: "/iimb/assets/img/codeyoung.webp",
  },
  {
    name: "CBSPL",
    src: "/iimb/assets/img/cbspl.webp",
  },
];

type CertificatePoint = {
  id: number;
  title: string;
  desc: string;
};

const CERTIFICATION_POINTS: CertificatePoint[] = [
  {
    id: 1,
    title: "Assessment Approach",
    desc: "Participants are evaluated through continuous assessments, including quizzes, course-level evaluations, and applied projects designed to reinforce learning and real-world application."
  },
  {
    id: 2,
    title: "Weightage Distribution",
    desc: "Capstone Project and Graded course-level assessments"
  },
  {
    id: 3,
    title: "Certification",
    desc: "IIM Bangalore will award a Certificate of Successful Completion to participants who will successfully complete all the programme modules and assessments."
  }
];

/* =========================================================
   CERTIFICATE SECTION
========================================================= */

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

    if (formOpen) {
      window.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [formOpen]);

  /* =========================================================
     CLOSE FORM
  ========================================================= */

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      {/* =====================================================
          SAMPLE DEGREE SECTION
      ====================================================== */}

      <section
        id="sample-certificate"
        className="w-full bg-[#f8fafc] py-12 sm:py-16"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Certificate Image */}

            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-xl">
                <Image
                  src={getAssetPath("/iimb/assets/img/image (8).png")}
                  alt="IIM Bangalore Sample Degree Certificate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Right Content */}

            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-extrabold leading-tight text-[#0f3b8c] sm:text-4xl">
                Credential from India's # 3 ranked IIM, NIRF 2026
              </h2>

              {/* Assessment and Evaluation Pointers */}
              <div className="mt-5 space-y-4 text-left">
                {CERTIFICATION_POINTS.map((point) => (
                  <div key={point.id} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 size={15} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{point.title}</h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>



              <Button
                size="lg"
                type="button"
                onClick={() => setFormOpen(true)}
                className="mt-8 inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0f3b8c] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#0c2e6f]"
              >
                <span>Get Certificate</span>

                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          PLACEMENT PARTNERS SECTION
      ====================================================== */}

      {/* <section id="placement-partners" className="bg-white py-8 sm:py-12">
        <Container>
          <div className="rounded-[32px] border border-gray-100 bg-[#f2f2f2] px-6 py-10 shadow-xs sm:py-12">
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-[#0f3b8c] sm:text-[26px]">
              Placement Partners
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-14 w-32 shrink-0 items-center justify-center rounded-xl border border-gray-200/60 bg-white px-5 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-0.5 sm:h-16 sm:w-36"
                >
                  <div className="relative h-10 w-full">
                    <Image
                      src={getAssetPath(partner.src)}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section> */}

      {/* =====================================================
          GET DEGREE POPUP FORM
      ====================================================== */}

      {formOpen && (
        <div
          role="presentation"
          onClick={closeForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Get Certificate"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >
            <FormWrapper
              title="Get 1:1 Free Counselling"
              subtitle="Our academic experts will guide you step by step"
              onClose={closeForm}
              courseOptions={IIMB_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IIMB Sample Certificate Form"
              sourceOverride="IIM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIM_Organic"
              submitButtonText="Get Degree"
              submitButtonClassName="bg-[#1d3d82] hover:bg-[#142b5c]"
              redirectUrl="/iimb/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}
