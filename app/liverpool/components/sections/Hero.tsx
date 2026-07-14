"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BookOpen,
  Download,
  Globe2,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Liverpool Course Options
|--------------------------------------------------------------------------
*/

const LIVERPOOL_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "Online MBA",
    label: "Online MBA",
  },
  {
    value: "MBA in Leadership",
    label: "MBA in Leadership",
  },
  {
    value: "MBA in Business Analytics",
    label: "MBA in Business Analytics",
  },
  {
    value: "MBA in Marketing",
    label: "MBA in Marketing",
  },
  {
    value: "MBA in Finance",
    label: "MBA in Finance",
  },
];

/*
|--------------------------------------------------------------------------
| Hero Features
|--------------------------------------------------------------------------
*/

const heroFeatures = [
  {
    id: 1,
    text: "30+ Years of Excellence & Legacy",
    icon: <BookOpen size={22} strokeWidth={2.3} />,
  },
  {
    id: 2,
    text: "Internationally Recognised",
    icon: <Globe2 size={22} strokeWidth={2.3} />,
  },
  {
    id: 3,
    text: "LBS–IMT Integrated Credentials",
    icon: <ShieldCheck size={22} strokeWidth={2.3} />,
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
  | Body Scroll Lock
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
  | Escape Key Close
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
      <section id="home" className="relative overflow-hidden bg-[#edf1ff]">
        {/* =========================================================
            Desktop Background Image
        ========================================================== */}

        <Image
          src={getAssetPath("/assets/images/liverpool-hero-campus.webp")}
          alt="Liverpool John Moores University campus"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center lg:block"
        />

        {/* =========================================================
            Desktop Left Overlay
        ========================================================== */}

        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(239,243,255,1)_0%,rgba(239,243,255,0.99)_31%,rgba(239,243,255,0.92)_39%,rgba(239,243,255,0.34)_53%,rgba(239,243,255,0)_67%)] lg:block" />

        {/* =========================================================
            Mobile Background
        ========================================================== */}

        <div className="absolute inset-0 bg-[#edf1ff] lg:hidden" />

        <Container className="relative z-10">
          <div className="grid min-h-[635px] grid-cols-1 gap-10 py-9 lg:grid-cols-[minmax(0,1fr)_505px] lg:items-center lg:gap-12 lg:py-5">
            {/* =====================================================
                Left Content
            ====================================================== */}

            <div className="mx-auto w-full max-w-[620px] text-center lg:mx-0 lg:text-left">
              {/* Logos */}

              <div className="mb-5 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Image
                  src={getAssetPath(
                    "/assets/images/liverpool-john-moores-university-logo.webp",
                  )}
                  alt="Liverpool John Moores University"
                  width={175}
                  height={60}
                  priority
                  className="h-auto w-[155px] object-contain sm:w-[175px]"
                />

                <div className="hidden h-[45px] w-px bg-[#6d7890] sm:block" />

                <Image
                  src={getAssetPath(
                    "/assets/images/liverpool-business-school-logo.webp",
                  )}
                  alt="Liverpool Business School"
                  width={100}
                  height={52}
                  priority
                  className="h-auto w-[90px] object-contain sm:w-[100px]"
                />

                <Image
                  src={getAssetPath("/assets/images/upgrad-logo.png")}
                  alt="upGrad"
                  width={125}
                  height={42}
                  priority
                  className="h-auto w-[110px] object-contain sm:w-[125px]"
                />
              </div>

              {/* Eyebrow */}

              <p className="text-[17px] font-extrabold leading-[1.25] text-black sm:text-[20px]">
                Where Career Growth Meets Global Prestige
              </p>

              {/* Main Heading */}

              <h1 className="mt-3 font-black leading-[0.88] tracking-[-0.04em] text-[#00499b]">
                <span className="block text-[56px] sm:text-[72px] lg:text-[88px]">
                  Online MBA
                </span>
              </h1>

              {/* Program Description */}

              <p className="mt-4 max-w-[560px] text-[16px] font-extrabold leading-[1.25] text-black sm:text-[19px]">
                18-Month Program By Liverpool Business
                <span className="block">
                  School with IMT Ghaziabad via upGrad
                </span>
              </p>

              {/* Features */}

              <div className="mx-auto mt-7 w-fit space-y-3 text-left lg:mx-0">
                {heroFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#1dcdb9]">
                      {feature.icon}
                    </div>

                    <p className="text-[15px] font-extrabold italic leading-[1.2] text-black sm:text-[18px]">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Download Button */}

              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="mt-8 inline-flex min-h-[58px] items-center justify-center gap-2 rounded-[6px] bg-[#00499b] px-8 py-3 text-[18px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#003d83] hover:shadow-lg sm:text-[20px]"
              >
                Download Brochure
                <Download size={24} strokeWidth={2.6} />
              </button>
            </div>

            {/* =====================================================
                Desktop Enquiry Form
            ====================================================== */}

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-[505px] bg-white px-7 pb-7 pt-6 shadow-[0_10px_28px_rgba(0,0,0,0.12)]">
                {/* Custom Form Heading */}

                <div className="mb-5 text-center">
                  <h2 className="text-[29px] font-black leading-none text-[#00499b]">
                    Admission Open
                  </h2>

                  <p className="mt-1 text-[18px] font-medium leading-none text-black">
                    Academic Experts will assist you!
                  </p>

                  <a
                    href="tel:+917065777755"
                    className="mx-auto mt-3 inline-flex min-h-[38px] items-center justify-center gap-2 rounded-full bg-[#00499b] px-6 text-[18px] font-bold text-white transition-colors hover:bg-[#003d83]"
                  >
                    <Phone size={18} strokeWidth={3} className="fill-white" />
                    +91 7065 7777 55
                  </a>
                </div>

                <FormWrapper
                  hideHeader
                  courseOptions={LIVERPOOL_COURSE_OPTIONS}
                  formNameOverride="Liverpool Hero Enquiry Form"
                  sourceOverride="Liverpool Landing Page"
                  utmSourceFallback="Liverpool Organic"
                  utmMediumFallback="Liverpool Website"
                  submitButtonText="Submit"
                  submitButtonClassName="!bg-[#00499b] hover:!bg-[#003d83]"
                />
              </div>
            </div>
          </div>

          {/* =======================================================
              Mobile Form
          ======================================================== */}

          <div className="pb-10 lg:hidden">
            <div className="mx-auto w-full max-w-md bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="mb-5 text-center">
                <h2 className="text-[25px] font-black leading-none text-[#00499b]">
                  Admission Open
                </h2>

                <p className="mt-2 text-[15px] font-medium text-black">
                  Academic Experts will assist you!
                </p>

                <a
                  href="tel:+917065777755"
                  className="mx-auto mt-3 inline-flex min-h-[36px] items-center justify-center gap-2 rounded-full bg-[#00499b] px-5 text-[15px] font-bold text-white"
                >
                  <Phone size={16} strokeWidth={3} className="fill-white" />
                  +91 7065 7777 55
                </a>
              </div>

              <FormWrapper
                hideHeader
                courseOptions={LIVERPOOL_COURSE_OPTIONS}
                formNameOverride="Liverpool Mobile Hero Enquiry Form"
                sourceOverride="Liverpool Landing Page"
                utmSourceFallback="Liverpool Organic"
                utmMediumFallback="Liverpool Mobile Website"
                submitButtonText="Submit"
                submitButtonClassName="!bg-[#00499b] hover:!bg-[#003d83]"
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
          onMouseDown={() => setDownloadOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download Liverpool MBA brochure"
            onMouseDown={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <button
              type="button"
              aria-label="Close brochure form"
              onClick={() => setDownloadOpen(false)}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#edf4ff] text-[#00499b] transition-colors hover:bg-[#dceaff]"
            >
              <X size={20} />
            </button>

            <FormWrapper
              title="Download Brochure"
              subtitle="Fill your details to receive the Liverpool Online MBA brochure"
              onClose={() => setDownloadOpen(false)}
              courseOptions={LIVERPOOL_COURSE_OPTIONS}
              defaultCourse="Online MBA"
              hideCourseField
              formNameOverride="Liverpool Download Brochure Form"
              sourceOverride="Liverpool Brochure"
              utmSourceFallback="Liverpool Organic"
              utmMediumFallback="Liverpool Brochure Popup"
              submitButtonText="Download Brochure"
              submitButtonClassName="!bg-[#00499b] hover:!bg-[#003d83]"
            />
          </div>
        </div>
      )}
    </>
  );
}
