"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Clock, Download, PhoneCall } from "lucide-react";
import { Anton } from "next/font/google";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IIMK_COURSE_OPTIONS } from "../../constants";

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
            src={getAssetPath("/iimk/ai-strategic-course/assets/img/iim_desktop_new_img.png")}
            alt="IIM Kozhikode campus"
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
                  src={getAssetPath("/iimk/ai-strategic-course/assets/img/upgrade_iim_logo.png")}
                  alt="IIM Kozhikode and upGrad logo"
                  width={280}
                  height={60}
                  className="w-70 object-contain mx-auto lg:mx-0"
                  priority
                />
              </div>

              {/* Main Heading */}
              <h1
                className={`${anton.className} text-[#0f3b8c] text-center leading-[1.2] text-[34px] sm:text-[38px] lg:text-left lg:text-4xl lg:max-w-[450px] lg:leading-[1.15] lg:tracking-normal`}
              >
                Certificate Programme in Strategic AI for Business Professionals
              </h1>

              {/* Provider */}
              <p className="mt-3 text-base text-black sm:text-lg lg:text-left lg:text-base">
                By <span className="underline font-bold">IIM Kozhikode</span> in collaboration with{" "}
                <span className="underline font-bold">upGrad</span>
              </p>

              {/* Description */}
              <p className="mt-4 max-w-md px-4 text-center text-sm leading-relaxed text-gray-600 sm:text-base md:px-0 lg:px-0 lg:text-left lg:text-[13px] lg:text-gray-700">
                Master practical AI strategies with the AI for Business Professionals programme from IIM Kozhikode Online Certificate Courses. Learn to drive business growth, lead AI initiatives, and deliver measurable organisational impact.
              </p>

              {/* Duration */}
              <div className="mt-4 flex items-center justify-center gap-2 font-bold text-black lg:justify-start lg:text-lg">
                <Clock
                  className="text-[#0f3b8c]"
                  size={20}
                  aria-hidden="true"
                />
                <span>6 Months</span>
              </div>

              {/* Download Brochure Button (Desktop only) */}
              <button
                type="button"
                onClick={openDownloadForm}
                className="mt-6 hidden lg:inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#0f3b8c] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-[#0c2e6f]"
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
                  src={getAssetPath("/iimk/ai-strategic-course/assets/img/iim_mobile_new_img.png")}
                  alt="IIM Kozhikode campus"
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
                  <h2 className="text-[22px] font-extrabold text-[#0f3b8c] lg:text-[25px]">
                    Admission Open
                  </h2>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Academic Experts will assist you!
                  </p>

                  {/* Phone Button */}
                  <div className="mt-2.5 flex justify-center">
                    <a
                      href="tel:+917065777755"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0f3b8c] px-5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#0c2e6f]"
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
                  courseOptions={IIMK_COURSE_OPTIONS}
                  defaultCourse=""
                  formNameOverride="IIMK Hero Enquiry Form"
                  sourceOverride="IIM LP"
                  utmSourceFallback="Organic"
                  utmMediumFallback="IIM_Organic"
                  submitButtonText="Submit"
                  submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
                  redirectUrl="/iimk/ai-strategic-course/thank-you"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          STATS BAR
      ====================================================== */}

      <section className="bg-[#fedfa9] py-8" id="stats">
        <Container>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-x-8 md:gap-y-0">
            <StatItem
              imageSrc="/iimk/ai-strategic-course/assets/img/ic-01.webp"
              value="50%"
              label="Avg Salary Hike"
            />

            <StatItem
              imageSrc="/iimk/ai-strategic-course/assets/img/ic-02.webp"
              value="10K+"
              label="Students Enrolled"
            />

            <StatItem
              imageSrc="/iimk/ai-strategic-course/assets/img/ic-03.webp"
              value="100+"
              label="Hiring Partners"
            />

            <StatItem
              imageSrc="/iimk/ai-strategic-course/assets/img/ic-04.webp"
              value="500+"
              label="Industry Experts"
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
            aria-label="Download IIM Kozhikode brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Select your course to receive the IIM Kozhikode brochure"
              onClose={closeDownloadForm}
              courseOptions={IIMK_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IIMK Download Brochure Form"
              sourceOverride="IIM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIM_Organic"
              submitButtonText="Download Brochure"
              submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
              isBrochureForm
              brochureUrl="/iimk/ai-strategic-course/assets/brochures/main_brochure.pdf"
              redirectUrl="/iimk/ai-strategic-course/thank-you"
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
        <p className="text-2xl font-extrabold leading-none text-[#0f3b8c] xl:text-3xl">
          {value}
        </p>

        <p className="mt-1 text-[13px] font-bold leading-tight text-gray-900">
          {label}
        </p>
      </div>
    </div>
  );
}
