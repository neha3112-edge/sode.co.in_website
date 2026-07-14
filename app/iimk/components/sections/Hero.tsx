"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| IIT Kharagpur Course Options
|--------------------------------------------------------------------------
*/

const IIT_KGP_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "Executive Post-Graduate Certificate in Generative AI & Agentic AI",
    label: "Executive Post-Graduate Certificate in Generative AI & Agentic AI",
  },
];

/*
|--------------------------------------------------------------------------
| Hero Section
|--------------------------------------------------------------------------
*/

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Stop body scrolling when popup is open
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.body.style.overflow = downloadOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [downloadOpen]);

  /*
  |--------------------------------------------------------------------------
  | Close popup when Escape key is pressed
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDownloadOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[430px] scroll-mt-[84px] overflow-hidden bg-[#e9f0ff]"
      >
        {/* =============================================================
            Desktop Background Image
        ============================================================== */}

        <Image
          src={getAssetPath("/assets/images/iit-kgp-hero-bg.webp")}
          alt="Indian Institute of Technology Kharagpur campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Light overlay on complete hero */}
        <div className="absolute inset-0 bg-white/5" />

        {/* Left side light gradient for readable content */}
        <div className="absolute inset-y-0 left-0 hidden w-[59%] bg-gradient-to-r from-[#eef2ff] via-[#eef2ff]/95 to-transparent lg:block" />

        {/* Mobile solid overlay */}
        <div className="absolute inset-0 bg-[#eef2ff]/95 lg:hidden" />

        {/* =============================================================
            Main Content
        ============================================================== */}

        <Container className="relative z-10">
          <div className="grid min-h-[430px] grid-cols-1 items-center gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_376px] lg:gap-12 lg:py-[22px]">
            {/* =========================================================
                Left Content
            ========================================================== */}

            <div className="mx-auto w-full max-w-[650px] text-center lg:mx-0 lg:text-left">
              {/* IIT Kharagpur + upGrad Logo */}
              <div className="mb-4 flex justify-center lg:justify-start">
                <Image
                  src={getAssetPath("/assets/images/iit-kgp-upgrad-logo.webp")}
                  alt="IIT Kharagpur and upGrad"
                  width={430}
                  height={65}
                  priority
                  className="h-auto w-full max-w-[430px] object-contain object-left"
                />
              </div>

              {/* Certificate label */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex rounded-[9px] border border-[#174da5] bg-white/35 px-3 py-[5px]">
                  <p className="text-[14px] font-extrabold leading-none text-[#174da5] sm:text-[16px]">
                    Executive Post-Graduate Certificate in
                  </p>
                </div>
              </div>

              {/* Main heading */}
              <h1 className="mt-2 text-[37px] font-black leading-[0.98] tracking-[-0.045em] text-[#174da5] sm:text-[47px] lg:text-[54px]">
                Generative AI &amp; Agentic AI
              </h1>

              {/* Provider */}
              <p className="mt-3 text-[15px] font-medium leading-tight text-[#111111] sm:text-[17px]">
                From{" "}
                <span className="font-extrabold underline decoration-[1.5px] underline-offset-[2px]">
                  IIT Kharagpur
                </span>{" "}
                via{" "}
                <span className="font-extrabold underline decoration-[1.5px] underline-offset-[2px]">
                  upGrad
                </span>
              </p>

              {/* Description */}
              <p className="mx-auto mt-3 max-w-[520px] text-[14px] font-medium leading-[1.2] text-[#161616] sm:text-[15.5px] lg:mx-0">
                An industry-first Generative AI program from IIT Kharagpur,
                designed for professionals and led live by CSE faculty. Gain
                job-ready skills to lead AI-driven projects with confidence in
                real business environments.
              </p>

              {/* Download Brochure Button */}
              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="mt-7 inline-flex min-h-[41px] items-center justify-center gap-2 rounded-[8px] bg-[#174da5] px-5 py-3 text-[13px] font-extrabold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#103d87] hover:shadow-md"
              >
                Download Brochure
                <Download size={15} strokeWidth={2.8} />
              </button>
            </div>

            {/* =========================================================
                Desktop Enquiry Form
            ========================================================== */}

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-[376px] rounded-[11px] bg-white px-5 pb-[18px] pt-[18px] shadow-[0_8px_24px_rgba(0,0,0,0.24)]">
                <FormWrapper
                  title="Enquire Now"
                  subtitle="Academic Experts will assist you!"
                  courseOptions={IIT_KGP_COURSE_OPTIONS}
                  formNameOverride="IIT Kharagpur Hero Enquiry Form"
                  sourceOverride="IIT Kharagpur Landing Page"
                  utmSourceFallback="IIT Kharagpur Organic"
                  utmMediumFallback="IIT Kharagpur Website"
                  submitButtonText="Submit"
                />
              </div>
            </div>
          </div>

          {/* =============================================================
              Mobile Enquiry Form
          ============================================================== */}

          <div className="pb-10 lg:hidden">
            <div className="mx-auto w-full max-w-md rounded-xl bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.22)]">
              <FormWrapper
                title="Enquire Now"
                subtitle="Academic Experts will assist you!"
                courseOptions={IIT_KGP_COURSE_OPTIONS}
                formNameOverride="IIT Kharagpur Mobile Hero Enquiry Form"
                sourceOverride="IIT Kharagpur Landing Page"
                utmSourceFallback="IIT Kharagpur Organic"
                utmMediumFallback="IIT Kharagpur Mobile Website"
                submitButtonText="Submit"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Download Brochure Popup
      ============================================================== */}

      {downloadOpen && (
        <div
          role="presentation"
          onClick={() => setDownloadOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download IIT Kharagpur brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close brochure form"
              onClick={() => setDownloadOpen(false)}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Brochure Form */}
            <FormWrapper
              title="Download Brochure"
              subtitle="Fill your details to receive the IIT Kharagpur brochure"
              onClose={() => setDownloadOpen(false)}
              courseOptions={IIT_KGP_COURSE_OPTIONS}
              formNameOverride="IIT Kharagpur Download Brochure Form"
              sourceOverride="IIT Kharagpur Brochure"
              utmSourceFallback="IIT Kharagpur Organic"
              utmMediumFallback="IIT Kharagpur Brochure Popup"
              submitButtonText="Download Brochure"
            />
          </div>
        </div>
      )}
    </>
  );
}
