"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IIMN_COURSE_OPTIONS } from "../../constants";

const partners = [
  {
    name: "Amazon",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Amazone.png",
  },
  {
    name: "Asian Paints",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Asian paint.png",
  },
  {
    name: "Brown Stack",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Brown Stack.png",
  },
  {
    name: "Fortis",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Forties.png",
  },
  {
    name: "HCCB",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/HCCB.png",
  },
  {
    name: "Hero",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Hero.png",
  },
  {
    name: "MakeMyTrip",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Make my Trip.png",
  },
  {
    name: "Pidilite",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Pedlite.png",
  },
  {
    name: "Reliance",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Reliance.png",
  },
  {
    name: "Tata Steel",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Tata Steel.png",
  },
  {
    name: "Tech Mahindra",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Tech Mahindra.png",
  },
  {
    name: "GMR",
    src: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/GAAR.png",
  },
];

export function CertificateSection() {
  const [formOpen, setFormOpen] = useState(false);

  const basePath = "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics";
  const assetsBase = `${basePath}/assets/img`;

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

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      {/* SAMPLE DEGREE SECTION */}
      <section
        id="sample-degree"
        className="w-full bg-[#f8fafc] py-12 sm:py-16"
      >
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Certificate Image */}
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-xl">
                <Image
                  src={getAssetPath(`${assetsBase}/sample_certificate.webp`)}
                  alt="IIM Nagpur Advanced HR Analytics Sample Certificate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left degree-info">
              <h2 className="text-xl font-extrabold leading-tight text-[#231069] sm:text-3xl">
                Sample Certificate for the Post Graduate Certificate Programme in Advanced HR Analytics
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                The Post Graduate Certificate Programme in Advanced HR Analytics provides an industry-recognised certification from IIM Nagpur that validates learners’ ability to apply data and analytics for strategic HR decision-making. On successful completion, participants receive executive education alumni status and become part of an exclusive professional network.
              </p>

              <Button
                size="lg"
                type="button"
                onClick={() => setFormOpen(true)}
                className="mt-8 inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FCB042] hover:bg-[#d89127] text-black px-6 py-3 text-sm font-bold transition-colors duration-200"
              >
                <span>Get Certificate</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* GET DEGREE POPUP FORM */}
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
              courseOptions={IIMN_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IIMN Sample Certificate Form"
              sourceOverride="IIMN LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIMN_Organic"
              submitButtonText="Book Now"
              submitButtonClassName="bg-[#FCB042] hover:bg-[#d89127] text-black"
              redirectUrl={`${basePath}/thank-you`}
            />
          </div>
        </div>
      )}
    </>
  );
}
