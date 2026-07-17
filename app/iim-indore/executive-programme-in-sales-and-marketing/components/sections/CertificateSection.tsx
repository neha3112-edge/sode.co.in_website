"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IIMI_COURSE_OPTIONS } from "../../constants";

const partners = [
  {
    name: "Amazon",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Amazone.png",
  },
  {
    name: "Asian Paints",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Asian paint.png",
  },
  {
    name: "Brown Stack",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Brown Stack.png",
  },
  {
    name: "Fortis",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Forties.png",
  },
  {
    name: "HCCB",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/HCCB.png",
  },
  {
    name: "Hero",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Hero.png",
  },
  {
    name: "MakeMyTrip",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Make my Trip.png",
  },
  {
    name: "Pidilite",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Pedlite.png",
  },
  {
    name: "Reliance",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Reliance.png",
  },
  {
    name: "Tata Steel",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Tata Steel.png",
  },
  {
    name: "Tech Mahindra",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Tech Mahindra.png",
  },
  {
    name: "GMR",
    src: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/GAAR.png",
  },
];

export function CertificateSection() {
  const [formOpen, setFormOpen] = useState(false);

  const basePath = "/iim-indore/executive-programme-in-sales-and-marketing";
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
                  src={getAssetPath(`${assetsBase}/IIM_Indore_Executive_Programme_In_Sales_and_Marketing_certificate_d679e8f32c.webp`)}
                  alt="IIM Indore EPSM Sample Certificate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left degree-info">
              <h2 className="text-xl font-extrabold leading-tight text-[#231069] sm:text-3xl">
                Industry-Recognized Certificate for Sales and Marketing Course Online
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                Professionals can earn a Certificate of Completion from IIM Indore upon successfully completing the programme. This certificate for sales and marketing validates your learning in contemporary sales and marketing practices while enhancing your professional credentials.
              </p>

              <Button
                size="lg"
                type="button"
                onClick={() => setFormOpen(true)}
                className="mt-8 inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#231069] hover:bg-[#1a0c50] px-6 py-3 text-sm font-bold text-white transition-colors duration-200"
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
            <h2 className="text-center text-xl font-extrabold tracking-wide text-[#231069] sm:text-[26px]">
              Our Participants Hail from prestigious Organisations
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex h-14 w-32 shrink-0 items-center justify-center rounded-xl border border-gray-200/60 bg-white px-3 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-0.5 sm:h-20 sm:w-40"
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
              courseOptions={IIMI_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IIMI Sample Certificate Form"
              sourceOverride="IIMI LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIMI_Organic"
              submitButtonText="Book Now"
              submitButtonClassName="bg-[#231069] hover:bg-[#1a0c50]"
              redirectUrl={`${basePath}/thank-you`}
            />
          </div>
        </div>
      )}
    </>
  );
}
