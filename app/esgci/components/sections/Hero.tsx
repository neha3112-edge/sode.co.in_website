"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Download, Phone, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";

import ESGCIHeroBg from "../../assets/img/iiitb_new_logo_main.png";

/*
|--------------------------------------------------------------------------
| ESGCI Course Options
|--------------------------------------------------------------------------
*/

const ESGCI_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "Online Doctor of Business Administration",
    label: "Online Doctor of Business Administration",
  },
  {
    value: "Online DBA in Leadership",
    label: "Online DBA in Leadership",
  },
  {
    value: "Online DBA in Strategy",
    label: "Online DBA in Strategy",
  },
  {
    value: "Online DBA in International Business",
    label: "Online DBA in International Business",
  },
  {
    value: "Online DBA in Marketing",
    label: "Online DBA in Marketing",
  },
  {
    value: "Online DBA in Finance",
    label: "Online DBA in Finance",
  },
];

/*
|--------------------------------------------------------------------------
| Contact Number
|--------------------------------------------------------------------------
*/

const CONTACT_NUMBER = "+917065777755";
const DISPLAY_CONTACT_NUMBER = "+91 7065 777 755";

/*
|--------------------------------------------------------------------------
| Hero Section
|--------------------------------------------------------------------------
*/

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Lock body scroll while brochure modal is open
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
  | Close popup using Escape key
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
        className="relative min-h-[470px] overflow-hidden bg-[#eaf6fc]"
      >
        {/* ==========================================================
            Background Image
        ========================================================== */}

        <Image
          src={ESGCIHeroBg}
          alt="ESGCI Paris campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Light overlay on complete image */}
        <div className="absolute inset-0 bg-white/[0.03]" />

        {/* Desktop left gradient */}
        <div className="absolute inset-y-0 left-0 hidden w-[55%] bg-linear-to-r from-[#eaf6fc] via-[#eaf6fc]/90 to-transparent lg:block" />

        {/* Mobile background overlay */}
        <div className="absolute inset-0 bg-[#eaf6fc]/95 lg:hidden" />

        <Container className="relative z-10">
          <div className="grid min-h-[470px] grid-cols-1 items-center gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_370px] lg:gap-12 lg:py-[30px] xl:grid-cols-[minmax(0,1fr)_370px]">
            {/* ======================================================
                Left Content
            ====================================================== */}

            <div className="mx-auto w-full max-w-[600px] text-center lg:mx-0 lg:text-left">
              {/* ESGCI and upGrad Logos */}
              <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
                <div className="flex items-end">
                  <span className="text-[34px] font-black leading-none tracking-[-0.055em] text-black sm:text-[38px]">
                    ES
                  </span>

                  <span className="text-[34px] font-black leading-none tracking-[-0.055em] text-[#009b4d] sm:text-[38px]">
                    G
                  </span>

                  <span className="text-[34px] font-black leading-none tracking-[-0.055em] text-black sm:text-[38px]">
                    CI
                  </span>
                </div>

                <div className="h-[34px] w-px bg-[#8f9599]" />

                <span className="text-[22px] font-black tracking-[-0.04em] text-[#ef3340] sm:text-[25px]">
                  upGrad
                </span>
              </div>

              {/* Small heading */}
              <p className="text-[15px] font-extrabold leading-tight text-black sm:text-[17px]">
                Doctoral Program for Global Leaders
              </p>

              {/* Main heading */}
              <h1 className="mt-1 text-[55px] font-black leading-[0.95] tracking-[-0.055em] text-[#009c43] sm:text-[68px] lg:text-[74px]">
                Online DBA
              </h1>

              {/* Provider */}
              <p className="mt-3 text-[14px] font-semibold text-black sm:text-[15px]">
                By{" "}
                <span className="font-extrabold underline decoration-1 underline-offset-2">
                  ESGCI Online
                </span>{" "}
                via{" "}
                <span className="font-extrabold underline decoration-1 underline-offset-2">
                  upGrad
                </span>
              </p>

              {/* Course heading */}
              <h2 className="mt-5 text-[21px] font-black leading-tight text-black sm:text-[23px]">
                Doctor of Business Administration
              </h2>

              {/* Description */}
              <p className="mx-auto mt-2 max-w-[385px] text-[13px] font-medium leading-[1.45] text-black sm:text-[14px] lg:mx-0">
                Earn a prestigious Online DBA from Paris-based ESGCI while
                advancing your career from anywhere in the world.
              </p>

              {/* Download brochure button */}
              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="mt-5 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[6px] bg-[#009c43] px-5 py-2.5 text-[15px] font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00863a] hover:shadow-md"
              >
                Download Brochure
                <Download size={18} strokeWidth={2.8} />
              </button>
            </div>

            {/* ======================================================
                Desktop Enquiry Form
            ====================================================== */}

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-[370px] bg-white px-5 pb-[18px] pt-5 shadow-[0_5px_20px_rgba(0,0,0,0.16)]">
                {/* Form top heading */}
                <div className="mb-3 text-center">
                  <h2 className="text-[20px] font-black leading-tight text-[#009c43]">
                    Admission Open
                  </h2>

                  <p className="mt-0.5 text-[13px] font-medium text-black">
                    Academic Experts will assist you!
                  </p>

                  <a
                    href={`tel:${CONTACT_NUMBER}`}
                    className="mx-auto mt-2 inline-flex min-h-[28px] items-center justify-center gap-1.5 rounded-full bg-[#009c43] px-5 py-1 text-[14px] font-extrabold leading-none text-white transition-colors hover:bg-[#00863a]"
                  >
                    <Phone size={14} fill="currentColor" strokeWidth={2.5} />

                    {DISPLAY_CONTACT_NUMBER}
                  </a>
                </div>

                <FormWrapper
                  title=""
                  subtitle=""
                  courseOptions={ESGCI_COURSE_OPTIONS}
                  formNameOverride="ESGCI Hero Enquiry Form"
                  sourceOverride="ESGCI Landing Page"
                  utmSourceFallback="ESGCI Organic"
                  utmMediumFallback="ESGCI Website"
                  submitButtonText="Submit"
                />
              </div>
            </div>
          </div>

          {/* ========================================================
              Mobile Enquiry Form
          ======================================================== */}

          <div className="pb-10 lg:hidden">
            <div className="mx-auto w-full max-w-md bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
              <div className="mb-4 text-center">
                <h2 className="text-[22px] font-black text-[#009c43]">
                  Admission Open
                </h2>

                <p className="mt-1 text-[13px] font-medium text-black">
                  Academic Experts will assist you!
                </p>

                <a
                  href={`tel:${CONTACT_NUMBER}`}
                  className="mx-auto mt-2 inline-flex min-h-[30px] items-center justify-center gap-2 rounded-full bg-[#009c43] px-5 py-1 text-[14px] font-extrabold text-white"
                >
                  <Phone size={14} fill="currentColor" />

                  {DISPLAY_CONTACT_NUMBER}
                </a>
              </div>

              <FormWrapper
                title=""
                subtitle=""
                courseOptions={ESGCI_COURSE_OPTIONS}
                formNameOverride="ESGCI Mobile Hero Enquiry Form"
                sourceOverride="ESGCI Landing Page"
                utmSourceFallback="ESGCI Organic"
                utmMediumFallback="ESGCI Mobile Website"
                submitButtonText="Submit"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          Download Brochure Popup
      ============================================================ */}

      {downloadOpen && (
        <div
          role="presentation"
          onMouseDown={() => setDownloadOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download ESGCI Online DBA brochure"
            onMouseDown={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[410px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close brochure form"
              onClick={() => setDownloadOpen(false)}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f8ef] text-[#009c43] transition-colors hover:bg-[#d3f1df]"
            >
              <X size={20} />
            </button>

            {/* Popup heading */}
            <div className="mb-5 pr-10">
              <h2 className="text-[24px] font-black text-[#009c43]">
                Download Brochure
              </h2>

              <p className="mt-1 text-[13px] leading-5 text-gray-600">
                Fill in your details to receive the ESGCI Online DBA brochure.
              </p>
            </div>

            <FormWrapper
              title=""
              subtitle=""
              onClose={() => setDownloadOpen(false)}
              courseOptions={ESGCI_COURSE_OPTIONS}
              formNameOverride="ESGCI Download Brochure Form"
              sourceOverride="ESGCI Brochure"
              utmSourceFallback="ESGCI Organic"
              utmMediumFallback="ESGCI Brochure Popup"
              submitButtonText="Download Brochure"
            />
          </div>
        </div>
      )}
    </>
  );
}
