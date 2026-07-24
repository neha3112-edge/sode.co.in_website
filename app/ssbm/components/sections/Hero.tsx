"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Download, Globe2, GraduationCap, Laptop } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { SSBM_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Contact Number
|--------------------------------------------------------------------------
*/

const CONTACT_NUMBER = "+917065777755";
const DISPLAY_CONTACT_NUMBER = "+91 7065 7777 55";

/*
|--------------------------------------------------------------------------
| Hero Section
|--------------------------------------------------------------------------
*/

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Disable body scrolling while popup is open
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
  | Close popup on Escape
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
        className="relative min-h-[394px] overflow-hidden bg-[#edf1ff]"
      >
        {/* Background Image */}
        <Image
          src={getAssetPath("/ssbm/assets/img/ssbm_new_Desktop_bg.png")}
          alt="SSBM Geneva campus background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Left light overlay like screenshot */}
        <div className="absolute inset-y-0 left-0 hidden w-[56%] bg-gradient-to-r from-[#edf1ff] via-[#edf1ff]/90 to-transparent lg:block" />

        {/* Small overall soft overlay */}
        <div className="absolute inset-0 bg-white/[0.03]" />

        {/* Mobile background overlay */}
        <div className="absolute inset-0 bg-[#edf1ff]/95 lg:hidden" />

        <Container className="relative z-10 p-0">
          <div className="grid min-h-[394px] grid-cols-1 items-center gap-10 py-5 lg:grid-cols-[minmax(0,1fr)_372px] lg:gap-[90px] lg:py-[30px] xl:grid-cols-[minmax(0,1fr)_372px]">
            {/* =========================================================
                Left Content
            ========================================================== */}

            <div className="mx-auto w-full max-w-[620px] text-center lg:mx-0 lg:text-left md:px-4 md:px-0">
              {/* SSBM Logo */}
              <div className="mb-4 flex justify-center lg:justify-start hidden lg:block">
                <Image
                  src={getAssetPath("/ssbm/assets/img/ssbm_new_logo.png")}
                  alt="SSBM Geneva logo"
                  width={210}
                  height={75}
                  priority
                  className="h-14 pb-2 w-auto object-contain"
                />
              </div>

              {/* Eyebrow */}
              <p className="text-[13px] font-bold uppercase leading-tight tracking-[-0.01em] text-black sm:text-[14px] pt-4 md:pt-0">
                Global Doctor of Business Administration
              </p>

              {/* Main heading */}
              <h1 className="mt-2 font-black leading-[0.92] tracking-[-0.045em] text-[#c9232c]">
                <span className="block text-[54px] sm:text-[66px] lg:text-[68px]">
                  Online DBA
                </span>
              </h1>

              {/* Provider */}
              <p className="mt-3 text-[14px] text-black sm:text-[15px]">
                By{" "}
                <span className="font-bold underline decoration-1 underline-offset-2">
                  SSBM Geneva
                </span>{" "}
                via{" "}
                <span className="font-bold underline decoration-1 underline-offset-2">
                  upGrad
                </span>
              </p>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-[430px] text-[13px] font-medium leading-[1.45] text-black sm:text-[14px] lg:mx-0 px-4 md:px-0">
                Take your leadership journey into your hands with top-notch
                Swiss quality education that is designed for working
                professionals. This Online SSBM Doctorate is for students
                seeking greater opportunities and wanting to improve the real
                business world.
              </p>

              {/* Features */}
              <div className="mx-auto mt-3 w-fit space-y-1 text-left lg:mx-0">
                <FeatureItem
                  icon={<Laptop size={17} strokeWidth={2.2} />}
                  text="100% Online Learning"
                />

                <FeatureItem
                  icon={<Globe2 size={17} strokeWidth={2.2} />}
                  text="Worldwide circle with a DBA Degree"
                />

                <FeatureItem
                  icon={<GraduationCap size={17} strokeWidth={2.2} />}
                  text="36 Months"
                />
              </div>

              {/* Download Button (desktop only) */}
              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="mt-5 hidden lg:inline-flex items-center justify-center gap-2 rounded-[5px] bg-[#c9232c] px-4 py-2 text-[15px] font-md text-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#ab1d25] hover:shadow-md"
              >
                Download Brochure
                <Download size={16} strokeWidth={2.7} />
              </button>

              {/* Mobile Only Banner Image */}
              <div className="block lg:hidden">
                <div className="relative w-full h-[400px] max-h-[450px]">
                  <Image
                    src={getAssetPath("/ssbm/assets/img/ssbm_new_mobile_img.png")}
                    alt="SSBM DBA program details"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* =========================================================
                Desktop Enquiry Form
            ========================================================== */}

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-[372px] bg-white px-5 pb-5 pt-4 shadow-[0_3px_14px_rgba(0,0,0,0.12)] rounded-xl">
                {/* Custom Form Header */}
                <div className="mb-3 text-center">
                  <h2 className="text-[24px] font-extrabold leading-tight text-[#c9232c]">
                    Admission Open
                  </h2>

                  <p className="mt-0.5 text-[13px] font-medium leading-tight text-black">
                    Academic Experts will assist you!
                  </p>
                </div>

                <FormWrapper
                  title=""
                  subtitle=""
                  courseOptions={SSBM_COURSE_OPTIONS}
                  defaultCourse=""
                  formNameOverride="SSBM Hero Enquiry Form"
                  sourceOverride="SSBM LP"
                  utmSourceFallback="Organic"
                  utmMediumFallback="SSBM_Organic"
                  submitButtonText="Submit"
                  redirectUrl="/thank-you"
                />
              </div>
            </div>
          </div>

          {/* =========================================================
              Mobile Form
          ========================================================== */}

          <div className="pb-10 lg:hidden px-4 -mt-[80px]">
            <div className="mx-auto w-full max-w-md bg-white p-5 shadow-xl rounded-xl">
              <div className="mb-4 text-center">
                <h2 className="text-[22px] font-extrabold text-[#c9232c]">
                  Admission Open
                </h2>

                <p className="mt-1 text-[13px] font-medium text-black">
                  Academic Experts will assist you!
                </p>
              </div>

              <FormWrapper
                title=""
                subtitle=""
                courseOptions={SSBM_COURSE_OPTIONS}
                defaultCourse=""
                formNameOverride="SSBM Mobile Hero Enquiry Form"
                sourceOverride="SSBM LP"
                utmSourceFallback="Organic"
                utmMediumFallback="SSBM_Organic"
                submitButtonText="Submit"
                redirectUrl="/thank-you"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          Download Brochure Popup
      ========================================================= */}

      {downloadOpen && (
        <div
          role="presentation"
          onMouseDown={() => setDownloadOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download brochure"
            onMouseDown={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[410px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Please enter your details to download the brochure:"
              onClose={() => setDownloadOpen(false)}
              courseOptions={SSBM_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="SSBM Download Brochure Form"
              sourceOverride="SSBM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="SSBM_Organic"
              submitButtonText="Submit"
              isBrochureForm
              brochureUrl="/ssbm/assets/brochures/main_brochure.pdf"
              redirectUrl="/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Feature Item Component
|--------------------------------------------------------------------------
*/

type FeatureItemProps = {
  icon: React.ReactNode;
  text: string;
};

function FeatureItem({ icon, text }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center text-[#c9232c]">
        {icon}
      </div>

      <p className="text-[13px] font-semibold text-gray-800 sm:text-[14px]">
        {text}
      </p>
    </div>
  );
}
