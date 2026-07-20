"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Clock, Download, PhoneCall } from "lucide-react";
import { Anton } from "next/font/google";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { XLRI_COURSE_OPTIONS } from "../../constants";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  const basePath = "/xlri/executive-development-programme-in-human-resource-management";
  const assetsBase = `${basePath}/assets/img`;

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
          RESPONSIVE HERO SECTION
      ====================================================== */}
      <section
        id="hero-section"
        className="relative overflow-hidden bg-[#eef4fd] lg:bg-transparent pt-22 pb-10 lg:pt-28 lg:pb-16 lg:min-h-[580px]"
      >
        {/* Background Image (Only visible on Desktop) */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src={getAssetPath(`${assetsBase}/xlri jamshedpur Desktop .webp`)}
            alt="XLRI Jamshedpur Campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <Container className="relative z-10 px-0 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-8 lg:gap-12">
            {/* LEFT COLUMN (CONTENT) */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 md:px-0">
              {/* Logos */}
              <div className="mb-5 flex items-center justify-center lg:justify-start hidden lg:block">
                <Image
                  src={getAssetPath(`${assetsBase}/xlri jamshedpur With Tpro logo.webp`)}
                  alt="XLRI Jamshedpur and TimesPro logo"
                  width={250}
                  height={100}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>

              {/* Main Heading */}
              <h1
                className={`${anton.className} text-[#10316A] text-2xl sm:text-3xl leading-[1.1] lg:leading-[1.05]`}
              >
                <span className="block">XLRI Executive Development</span>
                <span className="block">Programme in Human Resource Management</span>
              </h1>

              {/* Provider */}
              <p className="mt-3 text-base sm:text-lg text-gray-800 font-medium">
                By <span className="underline font-bold">XLRI Jamshedpur</span> via{" "}
                <span className="underline font-bold">TimesPro</span>
              </p>

              {/* Description */}
              <p className="mt-4 max-w-md text-sm sm:text-base lg:text-[12px] leading-relaxed text-gray-700">
                Advance your HR expertise with executive management programs from XLRI Jamshedpur. This helps in building strategic HR capabilities through an industry-focused management development program in HRM designed for today's evolving workplace.
              </p>

              {/* Duration */}
              <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-base sm:text-lg font-bold text-black">
                <Clock
                  className="text-[#10316A]"
                  size={20}
                  aria-hidden="true"
                />
                <span>7 Months</span>
              </div>

              {/* Download Brochure Button */}
              <button
                type="button"
                onClick={openDownloadForm}
                className="mt-6 hidden lg:inline-flex cursor-pointer items-center justify-center gap-2 rounded-[6px] bg-[#10316A] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-[#0c2450]"
              >
                <span>Get Brochure</span>
                <Download size={16} aria-hidden="true" />
              </button>
            </div>

            {/* Campus Image (Visible only on Mobile/Tablet) */}
            <div className="w-full block lg:hidden">
              <Image
                src={getAssetPath(`${assetsBase}/xlri jamshedpur Mobile.webp`)}
                alt="XLRI Jamshedpur Campus"
                width={500}
                height={290}
                priority
                className="h-auto w-full max-w-md mx-auto object-cover rounded-xl shadow-md"
              />
            </div>

            {/* RIGHT COLUMN (FORM) */}
            <div className="flex justify-center lg:justify-end w-full px-4 md:px-0 -mt-10 md:mt-0">
              <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white px-5 py-6 sm:px-6 shadow-2xl">
                {/* Form Heading */}
                <div className="mb-4 text-center">
                  <h2 className="text-[22px] sm:text-[25px] font-extrabold text-[#10316A]">
                    Admission Open
                  </h2>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Academic Experts will assist you!
                  </p>

                  {/* Phone Button */}
                  <div className="mt-2.5 flex justify-center">
                    <a
                      href="tel:+917065777755"
                      className="inline-flex items-center gap-2 rounded-full bg-[#10316A] px-5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#0c2450]"
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
                  courseOptions={XLRI_COURSE_OPTIONS}
                  defaultCourse=""
                  formNameOverride="XLRI Hero Enquiry Form"
                  sourceOverride="XLRI LP"
                  utmSourceFallback="Organic"
                  utmMediumFallback="XLRI_Organic"
                  submitButtonText="Submit"
                  submitButtonClassName="bg-[#10316A] hover:bg-[#0c2450] text-white"
                  redirectUrl={`${basePath}/thank-you`}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          STATS BAR
      ====================================================== */}
      <section className="bg-[#BCCF17] py-8 text-black" id="stats">
        <Container>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-x-8 md:gap-y-0">
            <StatItem
              imageSrc={`${assetsBase}/ic-01.png`}
              value="7 Months"
              label="Program Duration"
            />

            <StatItem
              imageSrc={`${assetsBase}/ic-02.png`}
              value="22 September"
              label="Application deadline"
            />

            <StatItem
              imageSrc={`${assetsBase}/ic-01.webp`}
              value="50%"
              label="Average Salary Hike"
            />

            <StatItem
              imageSrc={`${assetsBase}/ic-02.webp`}
              value="Eligibility"
              label="Bachelor's Degree + 1 yr Exp"
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
            aria-label="Download XLRI brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Select your course to receive the XLRI brochure"
              onClose={closeDownloadForm}
              courseOptions={XLRI_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="XLRI Download Brochure Form"
              sourceOverride="XLRI LP"
              utmSourceFallback="Organic"
              utmMediumFallback="XLRI_Organic"
              submitButtonText="Download Brochure"
              submitButtonClassName="bg-[#10316A] hover:bg-[#0c2450] text-white"
              isBrochureForm
              brochureUrl={`${basePath}/assets/brochures/main_brochure.pdf`}
              redirectUrl={`${basePath}/thank-you`}
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
    <div className="flex flex-col md:flex-row items-center justify-center gap-3.5 md:justify-start">
      <div className="relative h-14 w-14 shrink-0 bg-black/10 p-1 rounded-full">
        <Image
          src={getAssetPath(imageSrc)}
          alt={label}
          fill
          sizes="56px"
          className="object-contain filter invert-0"
        />
      </div>

      <div className="flex flex-col text-center md:text-left text-black">
        <p className="text-xl font-extrabold leading-none xl:text-2xl">
          {value}
        </p>

        <p className="mt-2 text-[13px] leading-tight font-medium">
          {label}
        </p>
      </div>
    </div>
  );
}
