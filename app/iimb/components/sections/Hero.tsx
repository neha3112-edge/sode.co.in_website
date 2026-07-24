"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Clock, Download, PhoneCall } from "lucide-react";
import { Anton } from "next/font/google";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IIMB_COURSE_OPTIONS } from "../../constants";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  /* =========================================================
     LOCK BODY SCROLL WHEN BROCHURE MODAL IS OPEN
  ========================================================= */

  useEffect(() => {
    if (!downloadOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [downloadOpen]);

  /* =========================================================
     CLOSE BROCHURE MODAL WITH ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    if (!downloadOpen) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDownloadOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [downloadOpen]);

  const openDownloadForm = () => {
    setDownloadOpen(true);
  };

  const closeDownloadForm = () => {
    setDownloadOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP VIEW
      ====================================================== */}

      <section
        id="hero-section"
        className="relative overflow-hidden pt-22 pb-10 bg-[#eef4fd] lg:bg-transparent lg:min-h-[580px] lg:pt-18 lg:pb-0"
      >
        {/* Background Image - Desktop only */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src={getAssetPath("/iimb/assets/img/Desktop banner.webp")}
            alt="IIM Bangalore campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <Container className="relative z-10 p-0">
          <div className="grid grid-cols-1 items-center gap-8 py-2 lg:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:min-h-130 lg:gap-12">
            {/* =================================================
                LEFT COLUMN: CONTENT
            ================================================== */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:pr-4 px-4 md:px-0">
              {/* Logos */}
              <div className="lg:mb-4 hidden lg:block">
                <Image
                  src={getAssetPath("/iimb/assets/img/Logo.webp")}
                  alt="IIM Bangalore and upGrad logo"
                  width={280}
                  height={60}
                  className="w-70 object-contain mx-auto lg:mx-0"
                  priority
                />
              </div>

              {/* Main Heading */}
              <h1
                className={`${anton.className} text-[#B12322] text-center leading-[1.2] tracking-tight text-[30px] sm:text-[38px] lg:text-left lg:text-4xl lg:tracking-normal lg:max-w-md`}
              >
                <span className="block">Young Leaders Programme in General Management by IIM Bangalore</span>
              </h1>

              {/* Provider */}
              <p className="mt-3 text-base text-black sm:text-lg lg:text-left lg:text-base md:max-w-[400px]">
                By <span className="underline font-bold">IIM Bangalore</span> via{" "}
                <span className="underline font-bold">upGrad</span>
              </p>

              {/* Description */}
              <p className="mt-4 max-w-sm px-4 text-center text-sm leading-relaxed text-gray-600 sm:text-base md:px-0 lg:px-0 lg:text-left lg:text-[13px] lg:text-gray-700">
                Accelerate your leadership journey with the Young Leaders Programme from IIM Bangalore. This IIM Bangalore online course helps graduates and early-career professionals to lead not just grow.
              </p>

              {/* Duration */}
              <div className="mt-4 flex items-center justify-center gap-2 font-bold text-black lg:justify-start lg:text-lg">
                <Clock
                  className="text-[#0f3b8c]"
                  size={20}
                  aria-hidden="true"
                />
                <span>11 Months</span>
              </div>

              {/* Download Brochure Button (Desktop only) */}
              <button
                type="button"
                onClick={openDownloadForm}
                className="mt-6 hidden lg:inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#B12322] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-200"
              >
                <span>Get Brochure</span>
                <Download size={16} aria-hidden="true" />
              </button>
            </div>

            {/* =================================================
                RIGHT COLUMN: FORM CARD
            ================================================== */}
            <div className="flex w-full flex-col items-center lg:items-end lg:pr-4">
              {/* Campus Image - Mobile only */}
              <div className="mt-6 w-full lg:hidden">
                <Image
                  src={getAssetPath("/iimb/assets/img/Mobile logo.webp")}
                  alt="IIM Bangalore campus"
                  width={500}
                  height={290}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Form Card Container */}
              <div className="-mt-5 w-[90%] max-w-md rounded-2xl border border-gray-100 bg-white p-5 shadow-xl lg:mt-0 lg:w-full lg:p-6 lg:shadow-2xl">
                {/* Form Heading */}
                <div className="mb-4 text-center">
                  <h2 className="text-[22px] font-extrabold text-[#B12322] lg:text-[25px]">
                    Admission Open
                  </h2>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Academic Experts will assist you!
                  </p>

                  {/* Phone Button */}
                  <div className="mt-2.5 flex justify-center">
                    <a
                      href="tel:+917065777755"
                      className="inline-flex items-center gap-2 rounded-full bg-[#B12322] px-5 py-1.5 text-xs font-bold text-white transition-colors"
                    >
                      <PhoneCall
                        size={12}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                      <span>+91 7065 7777 55</span>
                    </a>
                  </div>
                </div>

                <FormWrapper
                  hideHeader
                  courseOptions={IIMB_COURSE_OPTIONS}
                  defaultCourse=""
                  formNameOverride="IIMB Hero Enquiry Form"
                  sourceOverride="IIMB LP"
                  utmSourceFallback="Organic"
                  utmMediumFallback="IIMB_Organic"
                  submitButtonText="Submit"
                  submitButtonClassName="bg-[#B12322] hover:bg-[#B12322]"
                  redirectUrl="/iimb/thank-you"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          STATS BAR
      ====================================================== */}

      <section className="bg-[#B12322] py-8" id="stats">
        <Container>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-x-8 md:gap-y-0">
            <StatItem
              imageSrc="/iimb/assets/img/Alumni Network.webp"
              value="25000+"
              label="Alumni Network"
            />

            <StatItem
              imageSrc="/iimb/assets/img/Full-Time Faculty.webp"
              value="108"
              label="Full-Time Faculty"
            />

            <StatItem
              imageSrc="/iimb/assets/img/Academic Areas.webp"
              value="11"
              label="Academic Areas"
            />

            <StatItem
              imageSrc="/iimb/assets/img/Established.webp"
              value="1973"
              label="Established"
            />
          </div>
        </Container>
      </section>

      {/* =====================================================
          DOWNLOAD BROCHURE POPUP
      ====================================================== */}

      {downloadOpen && (
        <div
          role="presentation"
          onClick={closeDownloadForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download IIM Bangalore brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Select your course to receive the IIM Bangalore brochure"
              onClose={closeDownloadForm}
              courseOptions={IIMB_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IIMB Download Brochure Form"
              sourceOverride="IIMB LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIMB_Organic"
              submitButtonText="Download Brochure"
              submitButtonClassName="bg-[#B12322] hover:bg-[#B12322]"
              isBrochureForm
              brochureUrl="/iimb/assets/brochures/main_brochure.pdf"
              redirectUrl="/iimb/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================
   STAT ITEM
========================================================= */

type StatItemProps = {
  imageSrc: string;
  value: string;
  label: string;
};

function StatItem({ imageSrc, value, label }: StatItemProps) {
  return (
    <div className="flex items-center justify-center gap-3.5 md:justify-start">
      <div className="relative h-14 w-14 shrink-0">
        <Image
          src={getAssetPath(imageSrc)}
          alt={label}
          fill
          sizes="56px"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col text-left">
        <p className="text-2xl font-extrabold leading-none text-white xl:text-3xl">
          {value}
        </p>

        <p className="mt-1 text-[13px] font-bold leading-tight text-white/80">
          {label}
        </p>
      </div>
    </div>
  );
}
