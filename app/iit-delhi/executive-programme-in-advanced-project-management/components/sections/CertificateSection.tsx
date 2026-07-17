"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IITD_COURSE_OPTIONS } from "../../constants";

const partners = [
  {
    name: "Amazon",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/Amazone.png",
  },
  {
    name: "Asian Paints",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/Asian paint.png",
  },
  {
    name: "Brown Stack",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/Brown Stack.png",
  },
  {
    name: "Fortis",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/Forties.png",
  },
  {
    name: "HCCB",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/HCCB.png",
  },
  {
    name: "Hero",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/Hero.png",
  },
  {
    name: "MakeMyTrip",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/Make my Trip.png",
  },
  {
    name: "Pidilite",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/Pedlite.png",
  },
  {
    name: "Reliance",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/Reliance.png",
  },
  {
    name: "Tata Steel",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/Tata Steel.png",
  },
  {
    name: "Tech Mahindra",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/Tech Mahindra.png",
  },
  {
    name: "GMR",
    src: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/GAAR.png",
  },
];

export function CertificateSection() {
  const [formOpen, setFormOpen] = useState(false);

  const basePath = "/iit-delhi/executive-programme-in-advanced-project-management";
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
                  src={getAssetPath(`${assetsBase}/Sample Certificate.webp`)}
                  alt="IIT Delhi CEP Sample Certificate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left degree-info">
              <h2 className="text-xl font-extrabold leading-tight text-[#c21717] sm:text-3xl">
                Project Management Professional Certificate Of IIT Delhi
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                Upon completing the programme, Learners will receive a <strong>Certificate of Successful Completion</strong> from the <strong>Continuing Education Programme (CEP), IIT Delhi</strong>, validating their expertise in advanced project management. This industry-recognised credential in project management and training strengthens learners' professional profile and enhances their credibility for leadership and project management roles across industries.
              </p>

              <Button
                size="lg"
                type="button"
                onClick={() => setFormOpen(true)}
                className="mt-8 inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#C21717] hover:bg-[#a11313] px-6 py-3 text-sm font-bold text-white transition-colors duration-200"
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
              courseOptions={IITD_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IITD Sample Certificate Form"
              sourceOverride="IITD LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IITD_Organic"
              submitButtonText="Book Now"
              submitButtonClassName="bg-[#C21717] hover:bg-[#a11313]"
              redirectUrl={`${basePath}/thank-you`}
            />
          </div>
        </div>
      )}
    </>
  );
}
