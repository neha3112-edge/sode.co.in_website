"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Download, Globe2, GraduationCap, Laptop, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";

import SSBMHeroBg from "../../assets/img/iiitb_mobile_new_img.png";
import SSBMUpgradLogo from "../../assets/img/iiitb_new_logo_main.png";

/*
|--------------------------------------------------------------------------
| SSBM Course Options
|--------------------------------------------------------------------------
*/

const SSBM_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "Global Doctor of Business Administration",
    label: "Global Doctor of Business Administration",
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
        className="relative min-h-[394px] overflow-hidden bg-[#edf1fb]"
      >
        {/* Background Image */}
        <Image
          src={SSBMHeroBg}
          alt="SSBM Geneva campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Left light overlay like screenshot */}
        <div className="absolute inset-y-0 left-0 hidden w-[56%] bg-gradient-to-r from-[#edf1fb] via-[#edf1fb]/90 to-transparent lg:block" />

        {/* Small overall soft overlay */}
        <div className="absolute inset-0 bg-white/[0.03]" />

        {/* Mobile background overlay */}
        <div className="absolute inset-0 bg-[#edf1fb]/95 lg:hidden" />

        <Container className="relative z-10">
          <div className="grid min-h-[394px] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_372px] lg:gap-[90px] lg:py-5">
            {/* =========================================================
                Left Content
            ========================================================== */}

            <div className="mx-auto w-full max-w-[620px] text-center lg:mx-0 lg:text-left">
              {/* SSBM + upGrad Logo */}
              <div className="mb-4 flex justify-center lg:justify-start">
                <Image
                  src={SSBMUpgradLogo}
                  alt="SSBM Geneva and upGrad"
                  width={240}
                  height={53}
                  priority
                  className="h-auto w-[210px] object-contain sm:w-[230px]"
                />
              </div>

              {/* Small heading */}
              <p className="text-[13px] font-extrabold uppercase leading-tight tracking-[-0.01em] text-black sm:text-[14px]">
                Global Doctor of Business Administration
              </p>

              {/* Main heading */}
              <h1 className="mt-1 font-black leading-[0.92] tracking-[-0.045em] text-[#c9232c]">
                <span className="block text-[54px] sm:text-[66px] lg:text-[72px]">
                  Online DBA
                </span>
              </h1>

              {/* Provider */}
              <p className="mt-3 text-[14px] font-semibold text-black sm:text-[15px]">
                By{" "}
                <span className="font-extrabold underline decoration-1 underline-offset-2">
                  SSBM Geneva
                </span>{" "}
                via{" "}
                <span className="font-extrabold underline decoration-1 underline-offset-2">
                  upGrad
                </span>
              </p>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-[430px] text-[13px] font-medium leading-[1.45] text-black sm:text-[14px] lg:mx-0">
                Take your leadership journey into your hands with top-notch
                Swiss quality education that is designed for working
                professionals. This Online SSBM Doctorate is for students
                seeking greater opportunities and wanting to improve the real
                business world.
              </p>

              {/* Features */}
              <div className="mx-auto mt-4 w-fit space-y-1.5 text-left lg:mx-0">
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

              {/* Download Button */}
              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="mt-3 inline-flex min-h-[39px] items-center justify-center gap-2 rounded-[5px] bg-[#c9232c] px-5 py-2.5 text-[15px] font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ab1d25] hover:shadow-md"
              >
                Download Brochure
                <Download size={16} strokeWidth={2.7} />
              </button>
            </div>

            {/* =========================================================
                Desktop Enquiry Form
            ========================================================== */}

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-[372px] bg-white px-5 pb-5 pt-4 shadow-[0_3px_14px_rgba(0,0,0,0.12)]">
                {/* Custom Form Header */}
                <div className="mb-3 text-center">
                  <h2 className="text-[20px] font-extrabold leading-tight text-[#c9232c]">
                    Admission Open
                  </h2>

                  <p className="mt-0.5 text-[13px] font-medium leading-tight text-black">
                    Academic Experts will assist you!
                  </p>

                  <a
                    href="tel:+917065777755"
                    className="mx-auto mt-2 inline-flex min-h-[27px] items-center justify-center rounded-full bg-[#c9232c] px-5 text-[14px] font-bold text-white transition-colors hover:bg-[#ab1d25]"
                  >
                    ☎ +91 7065 7777 55
                  </a>
                </div>

                <FormWrapper
                  hideHeader
                  courseOptions={SSBM_COURSE_OPTIONS}
                  formNameOverride="SSBM DBA Hero Enquiry Form"
                  sourceOverride="SSBM DBA Landing Page"
                  utmSourceFallback="SSBM Organic"
                  utmMediumFallback="SSBM Website"
                  submitButtonText="Submit"
                  submitButtonClassName="!rounded-none !bg-[#c9232c] hover:!bg-[#ab1d25]"
                />
              </div>
            </div>
          </div>

          {/* =========================================================
              Mobile Form
          ========================================================== */}

          <div className="pb-10 lg:hidden">
            <div className="mx-auto w-full max-w-md bg-white p-5 shadow-xl">
              <div className="mb-4 text-center">
                <h2 className="text-[22px] font-extrabold text-[#c9232c]">
                  Admission Open
                </h2>

                <p className="mt-1 text-[13px] font-medium text-black">
                  Academic Experts will assist you!
                </p>

                <a
                  href="tel:+917065777755"
                  className="mx-auto mt-2 inline-flex min-h-[29px] items-center justify-center rounded-full bg-[#c9232c] px-5 text-[14px] font-bold text-white"
                >
                  ☎ +91 7065 7777 55
                </a>
              </div>

              <FormWrapper
                hideHeader
                courseOptions={SSBM_COURSE_OPTIONS}
                formNameOverride="SSBM DBA Mobile Hero Enquiry Form"
                sourceOverride="SSBM DBA Landing Page"
                utmSourceFallback="SSBM Organic"
                utmMediumFallback="SSBM Mobile Website"
                submitButtonText="Submit"
                submitButtonClassName="!rounded-none !bg-[#c9232c] hover:!bg-[#ab1d25]"
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
            aria-label="Download SSBM DBA brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[400px] overflow-y-auto bg-white p-6 shadow-2xl"
          >
            <button
              type="button"
              aria-label="Close brochure form"
              onClick={() => setDownloadOpen(false)}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200"
            >
              <X size={20} />
            </button>

            <FormWrapper
              title="Download Brochure"
              subtitle="Fill your details to receive the SSBM Online DBA brochure"
              onClose={() => setDownloadOpen(false)}
              courseOptions={SSBM_COURSE_OPTIONS}
              formNameOverride="SSBM DBA Download Brochure Form"
              sourceOverride="SSBM DBA Brochure"
              utmSourceFallback="SSBM Organic"
              utmMediumFallback="SSBM Brochure Popup"
              submitButtonText="Download Brochure"
              submitButtonClassName="!rounded-none !bg-[#c9232c] hover:!bg-[#ab1d25]"
            />
          </div>
        </div>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Feature Item
|--------------------------------------------------------------------------
*/

type FeatureItemProps = {
  icon: React.ReactNode;
  text: string;
};

function FeatureItem({ icon, text }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2 text-[13px] font-medium leading-tight text-black">
      <span className="flex h-4.25 w-4.25 shrink-0 items-center justify-center text-black">
        {icon}
      </span>

      <span>{text}</span>
    </div>
  );
}
