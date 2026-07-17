"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IITM_COURSE_OPTIONS } from "../../constants";

const partners = [
  {
    name: "Accenture",
    src: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/Accenture.webp",
  },
  {
    name: "Cognizant",
    src: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/Cognizant.webp",
  },
  {
    name: "FedEx",
    src: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/FedEx.webp",
  },
  {
    name: "JPM",
    src: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/JPM.webp",
  },
  {
    name: "LTIM",
    src: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/LTIM.webp",
  },
  {
    name: "PHILIPS",
    src: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/PHILIPS.webp",
  },
  {
    name: "RBI",
    src: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/RBI.webp",
  },
  {
    name: "TCS",
    src: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/TCS.webp",
  },
];

export function CertificateSection() {
  const [formOpen, setFormOpen] = useState(false);

  const basePath = "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning";
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
                  alt="IIT Madras Pravartak Sample Advanced Certificate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left degree-info">
              <h2 className="text-xl font-extrabold leading-tight text-[#2C5E7C] sm:text-3xl">
                Sample Certificate Of Applied Artificial Intelligence & Deep Learning Program
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                Upon successfully completing the programme, learners will receive a Certificate of Completion from IITM Pravartak, the Technology Innovation Hub of IIT Madras. This certificate validates your learning in applied artificial intelligence and deep learning and strengthens your professional credentials.
              </p>

              <Button
                size="lg"
                type="button"
                onClick={() => setFormOpen(true)}
                className="mt-8 inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#21A12E] hover:bg-[#1a8224] px-6 py-3 text-sm font-bold text-white transition-colors duration-200"
              >
                <span>Get Certificate</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* PLACEMENT PARTNERS SECTION */}
      <section id="placement" className="bg-white py-8 sm:py-12">
        <Container>
          <div className="rounded-[32px] border border-gray-100 bg-[#f2f2f2] px-6 py-10 shadow-xs sm:py-12">
            <h2 className="text-center text-xl font-extrabold tracking-wide text-[#2C5E7C] sm:text-[26px]">
              Our Participants Hail from prestigious Organisations
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-14 w-32 shrink-0 items-center justify-center rounded-xl border border-gray-200/60 bg-white px-5 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-0.5 sm:h-35 sm:w-55"
                >
                  <div className="relative h-20 w-full">
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
              courseOptions={IITM_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IITM Sample Certificate Form"
              sourceOverride="IITM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IITM_Organic"
              submitButtonText="Book Now"
              submitButtonClassName="bg-[#2C5E7C] hover:bg-[#20465c]"
              redirectUrl={`${basePath}/thank-you`}
            />
          </div>
        </div>
      )}
    </>
  );
}
