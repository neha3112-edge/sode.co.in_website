"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, Download } from "lucide-react";
import { Anton } from "next/font/google";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { RUSHFORD_COURSE_OPTIONS } from "../../constants";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  /* =========================================================
     BODY SCROLL LOCK FOR BROCHURE MODAL
  ========================================================= */

  useEffect(() => {
    if (downloadOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [downloadOpen]);

  const closeDownloadForm = () => {
    setDownloadOpen(false);
  };

  return (
    <>
      <section
        id="hero-section"
        className="relative overflow-hidden bg-white pt-18 lg:pt-24 min-h-[500px]"
      >
        {/* =================================================
            DESKTOP BACKGROUND
        ================================================== */}

        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src="/rushford/assets/img/rushford_new_desktop_bg.png"
            alt="Rushford Business School campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />

          {/* Fade effect matching screenshot - fades white on the left into the building image on the right */}
          <div className="absolute inset-0 z-10" />
        </div>

        <Container className="relative z-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-8 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-4">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              {/* Logo */}
              <div className="mb-3">
                <img
                  src="/rushford/assets/img/rushford_new_logo.png"
                  alt="Rushford Business School via upGrad"
                  className="w-full max-w-[200px] sm:max-w-[240px] h-auto object-contain"
                />
              </div>

              {/* Blue Badge */}
              <div className="mb-4">
                <span className="inline-block bg-[#0f3b8c] text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-[4px] uppercase tracking-wider">
                  Doctorate of Business Administration
                </span>
              </div>

              {/* Main Heading */}
              <h1 className={`${anton.className} leading-none font-black text-left`}>
                <span className="block text-[48px] sm:text-[68px] lg:text-[70px] text-[#e0007a] tracking-tight">
                  ONLINE DBA
                </span>
              </h1>

              {/* Provider Info */}
              <p className="mt-3 text-[14px] text-black font-bold">
                By <span className="underline decoration-1">Rushford Business School</span> via <span className="underline decoration-1">upGrad</span>
              </p>

              {/* Sub-headline */}
              <p className="mt-3 text-[16px] text-black font-medium leading-tight">
                Earn a Doctorate Title <br />
                along with Management Expertise
              </p>

              {/* 2x2 Badge Grid */}
              <div className="flex flex-cols flex-wrap gap-3 mt-6 w-full max-w-[340px]">
                <div className="border-2 border-[#0f3b8c] text-black py-2 bg-[#fff]/50 px-3 rounded-[4px] text-[13px] sm:text-[14px] font-medium text-center flex items-center justify-center">
                  100% Online
                </div>
                <div className="border-2 border-[#0f3b8c] text-black py-2 bg-[#fff]/50 px-3 rounded-[4px] text-[13px] sm:text-[14px] font-medium text-center flex items-center justify-center">
                  08+ Specialization
                </div>
                <div className="border-2 border-[#0f3b8c] text-black py-2 bg-[#fff]/50 px-3 rounded-[4px] text-[13px] sm:text-[14px] font-medium text-center flex items-center justify-center">
                  1:1 Thesis Mentorship
                </div>
                <div className="border-2 border-[#0f3b8c] text-black py-2 bg-[#fff]/50 px-3 rounded-[4px] text-[13px] sm:text-[14px] font-medium text-center flex items-center justify-center">
                  No Cost EMI
                </div>
              </div>

              {/* Download Brochure Button */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setDownloadOpen(true)}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[4px] bg-[#0f3b8c] hover:bg-[#0c2e6f] px-6 py-3 text-sm sm:text-base font-bold text-white shadow-md transition duration-200"
                >
                  Download Brochure
                  <Download size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* =================================================
                MOBILE BANNER IMAGE (rendered below text, above mobile form)
            ================================================== */}

            <div className="w-full md:max-w-md mx-auto lg:hidden">
              <img
                src="/rushford/assets/img/rushford_new_mobile.png"
                alt="Rushford Mobile Banner"
                className="h-auto w-full rounded-xl object-cover shadow-md"
              />
            </div>

            {/* =================================================
                DESKTOP FORM
            ================================================== */}

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-[400px] rounded-2xl bg-white px-6 py-6 shadow-2xl rushford-form-container">
                <FormWrapper
                  title="Admission Open"
                  subtitle="Academic Experts will assist you!"
                  showPhoneCallLink={true}
                  defaultCourse=""
                  courseOptions={RUSHFORD_COURSE_OPTIONS}
                  formNameOverride="Rushford Hero Enquiry Form"
                  sourceOverride="Rushford LP"
                  utmSourceFallback="Organic"
                  utmMediumFallback="Rushford_Organic"
                  submitButtonText="Submit"
                  submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
                  redirectUrl="/rushford/thank-you"
                />
              </div>
            </div>

          </div>

          {/* =================================================
              MOBILE FORM
          ================================================== */}

          <div className="mt-4 pb-10 lg:hidden">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl rushford-form-container">
              <FormWrapper
                title="Admission Open"
                subtitle="Academic Experts will assist you!"
                showPhoneCallLink={true}
                defaultCourse=""
                courseOptions={RUSHFORD_COURSE_OPTIONS}
                formNameOverride="Rushford Mobile Hero Enquiry Form"
                sourceOverride="Rushford LP"
                utmSourceFallback="Organic"
                utmMediumFallback="Rushford_Organic"
                submitButtonText="Submit"
                submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
                redirectUrl="/rushford/thank-you"
              />
            </div>
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
            aria-label="Download Rushford brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Select your preferred course to receive the Rushford brochure"
              onClose={closeDownloadForm}
              defaultCourse=""
              courseOptions={RUSHFORD_COURSE_OPTIONS}
              formNameOverride="Rushford Download Brochure Form"
              sourceOverride="Rushford LP"
              utmSourceFallback="Organic"
              utmMediumFallback="Rushford_Organic"
              submitButtonText="Download Brochure"
              isBrochureForm
              brochureUrl="/rushford/assets/brochures/main_brochure.pdf"
              redirectUrl="/rushford/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}
