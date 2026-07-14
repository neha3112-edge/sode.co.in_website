"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Download, Phone, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Golden Gate University Course Options
|--------------------------------------------------------------------------
*/

const GGU_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "Doctor of Business Administration",
    label: "Doctor of Business Administration",
  },
  {
    value: "Master of Business Administration",
    label: "Master of Business Administration",
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
  | Lock body scrolling when popup is open
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
  | Close popup with Escape key
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
        className="relative min-h-101.75 overflow-hidden bg-[#eaf1ff]"
      >
        {/* =========================================================
            Desktop Background Image
        ========================================================== */}

        <Image
          src={getAssetPath(
            "/assets/images/golden-gate-university-hero-bg.webp",
          )}
          alt="Golden Gate University campus"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
        />

        {/* =========================================================
            Left Gradient Overlay
        ========================================================== */}

        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(237,243,255,0.99)_0%,rgba(237,243,255,0.97)_27%,rgba(237,243,255,0.78)_40%,rgba(237,243,255,0.10)_62%,rgba(237,243,255,0)_100%)] lg:block" />

        {/* =========================================================
            Mobile Background
        ========================================================== */}

        <div className="absolute inset-0 bg-[#edf3ff] lg:hidden" />

        <Container className="relative z-10">
          <div className="grid min-h-[407px] grid-cols-1 gap-8 py-9 lg:grid-cols-[minmax(0,1fr)_372px] lg:items-center lg:gap-12 lg:py-7">
            {/* =====================================================
                Left Content
            ====================================================== */}

            <div className="mx-auto w-full max-w-[570px] text-center lg:mx-0 lg:text-left">
              {/* University and upGrad Logos */}

              <div className="mb-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Image
                  src={getAssetPath(
                    "/assets/images/golden-gate-university-logo.png",
                  )}
                  alt="Golden Gate University"
                  width={166}
                  height={46}
                  priority
                  className="h-auto w-[166px] object-contain"
                />

                <div className="h-[28px] w-px bg-[#6f7784]" />

                <Image
                  src={getAssetPath("/assets/images/upgrad-logo.png")}
                  alt="upGrad"
                  width={81}
                  height={31}
                  priority
                  className="h-auto w-[81px] object-contain"
                />
              </div>

              {/* Small Heading */}

              <p className="text-[13px] font-bold leading-[1.4] text-black sm:text-[14px]">
                Leadership Advancement or a Doctoral Degree
              </p>

              {/* Main Heading */}

              <h1 className="mt-3 max-w-[470px] font-black leading-[0.9] tracking-[-0.035em] text-[#003d78]">
                <span className="block text-[43px] sm:text-[50px] lg:text-[51px]">
                  Golden Gate University
                </span>

                <span className="mt-1 block text-[43px] sm:text-[50px] lg:text-[51px]">
                  Online Courses
                </span>
              </h1>

              {/* Provider */}

              <p className="mt-5 text-[15px] font-semibold leading-[1.4] text-black">
                By{" "}
                <span className="font-bold underline decoration-[1.5px] underline-offset-2">
                  Golden Gate University
                </span>{" "}
                via{" "}
                <span className="font-bold underline decoration-[1.5px] underline-offset-2">
                  upGrad
                </span>
              </p>

              {/* Course Badge */}

              <div className="mx-auto mt-5 w-fit lg:mx-0">
                <div className="rounded-[19px] border-2 border-[#ec4d0d] bg-white/60 px-6 py-2">
                  <p className="whitespace-nowrap text-[26px] font-black italic leading-none tracking-[0.01em] text-[#003d78] sm:text-[30px]">
                    DBA / MBA
                  </p>
                </div>
              </div>

              {/* Course Features */}

              <div className="mx-auto mt-3 max-w-[440px] text-[14px] font-medium leading-[1.55] text-black lg:mx-0">
                <p>100% Online | U.S.-Accredited University |</p>

                <p>Working-Professional Focus | No Cost EMI |</p>

                <p>2500+ Global CXOs</p>
              </div>

              {/* Download Brochure Button */}

              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="mt-4 inline-flex min-h-[39px] items-center justify-center gap-1.5 rounded-[5px] bg-[#ee5105] px-5 py-2.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d94800] hover:shadow-lg"
              >
                Download Brochure
                <Download size={15} strokeWidth={2.8} />
              </button>
            </div>

            {/* =====================================================
                Desktop Admission Form
            ====================================================== */}

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-[372px] rounded-[11px] bg-white px-5 pb-4 pt-4 shadow-[0_10px_30px_rgba(0,0,0,0.20)]">
                {/* Form Heading */}

                <div className="mb-3 text-center">
                  <h2 className="text-[21px] font-black leading-none text-[#003d78]">
                    Admission Open
                  </h2>

                  <p className="mt-1 text-[13px] font-medium leading-none text-black">
                    Academic Experts will assist you!
                  </p>

                  <a
                    href="tel:+917065777755"
                    className="mx-auto mt-2 inline-flex min-h-[28px] items-center justify-center gap-1 rounded-full bg-[#003d78] px-5 text-[14px] font-bold text-white transition-colors hover:bg-[#002d5a]"
                  >
                    <Phone size={14} strokeWidth={3} className="fill-white" />
                    +91 7065 7777 55
                  </a>
                </div>

                <FormWrapper
                  hideHeader
                  courseOptions={GGU_COURSE_OPTIONS}
                  formNameOverride="GGU Hero Enquiry Form"
                  sourceOverride="GGU Landing Page"
                  utmSourceFallback="GGU Organic"
                  utmMediumFallback="GGU Website"
                  submitButtonText="Submit"
                />
              </div>
            </div>
          </div>

          {/* =======================================================
              Mobile Form
          ======================================================== */}

          <div className="pb-10 lg:hidden">
            <div className="mx-auto w-full max-w-md rounded-[12px] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <div className="mb-4 text-center">
                <h2 className="text-[22px] font-black leading-none text-[#003d78]">
                  Admission Open
                </h2>

                <p className="mt-1 text-[13px] font-medium text-black">
                  Academic Experts will assist you!
                </p>

                <a
                  href="tel:+917065777755"
                  className="mx-auto mt-3 inline-flex min-h-[30px] items-center justify-center gap-1.5 rounded-full bg-[#003d78] px-5 text-[14px] font-bold text-white"
                >
                  <Phone size={14} strokeWidth={3} className="fill-white" />
                  +91 7065 7777 55
                </a>
              </div>

              <FormWrapper
                hideHeader
                courseOptions={GGU_COURSE_OPTIONS}
                formNameOverride="GGU Mobile Hero Enquiry Form"
                sourceOverride="GGU Landing Page"
                utmSourceFallback="GGU Organic"
                utmMediumFallback="GGU Mobile Website"
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
            aria-label="Download Golden Gate University brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[410px] overflow-y-auto rounded-[12px] bg-white p-6 shadow-2xl"
          >
            {/* Close Button */}

            <button
              type="button"
              aria-label="Close brochure form"
              onClick={() => setDownloadOpen(false)}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200"
            >
              <X size={20} />
            </button>

            <FormWrapper
              title="Download Brochure"
              subtitle="Fill your details to receive the Golden Gate University brochure"
              onClose={() => setDownloadOpen(false)}
              courseOptions={GGU_COURSE_OPTIONS}
              formNameOverride="GGU Download Brochure Form"
              sourceOverride="GGU Brochure"
              utmSourceFallback="GGU Organic"
              utmMediumFallback="GGU Brochure Popup"
              submitButtonText="Download Brochure"
            />
          </div>
        </div>
      )}
    </>
  );
}
