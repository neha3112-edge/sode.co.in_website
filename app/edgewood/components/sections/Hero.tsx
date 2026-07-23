"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CheckSquare, Download, X } from "lucide-react";
import { Anton } from "next/font/google";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { EDGEWOOD_COURSE_OPTIONS } from "../../constants";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = downloadOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [downloadOpen]);

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
        className="relative overflow-hidden bg-[#eef4fd] py-6"
      >
        {/* Background campus image */}
        <Image
          src={getAssetPath("/edgewood/assets/img/edgewood_desktop_new_bg.png")}
          alt="Edgewood campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hidden md:block"
        />

        {/* Screenshot jaisa overall subtle white layer */}
        <div className="absolute inset-0 bg-white/5" />

        {/* Screenshot jaisa left light-blue gradient */}
        <div className="absolute inset-y-0 left-0 hidden w-[48%] bg-linear-to-r from-[#edf2ff] via-[#edf2ff]/95 to-transparent lg:block" />

        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-[#edf2ff]/94 lg:hidden" />

        <Container className="relative z-10 px-0">
          <div className="grid grid-cols-1 items-center gap-8 pt-2 lg:grid-cols-[minmax(0,1fr)_372px] lg:gap-14 lg:py-5">
            {/* =========================================================
                Left Content
            ========================================================== */}

            <div className="mx-auto w-full max-w-[570px] text-center lg:mx-0 lg:text-left">
              {/* Logos */}
              <div className="mb-3 flex items-center justify-center gap-3 lg:justify-start hidden md:block">
                <div className="relative h-[45px] w-[180px]">
                  <Image
                    src={getAssetPath("/edgewood/assets/img/edgewood-university-black.png")}
                    alt="Edgewood University logo"
                    fill
                    sizes="180px"
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Small Heading */}
              <p className="text-[17px] font-bold leading-[1.05] text-black/85 sm:text-[16px]">
                Learn Business Leadership Skills With
              </p>

              {/* Main Heading */}
              <h1 className={`${anton.className} mt-3 leading-[0.95] text-[#c9230c] font-semibold`}>
                <span className="block text-[50px] sm:text-[46px] lg:text-[50px]">
                  EdgeWood
                </span>

                <span className="mt-2 block text-[50px] sm:text-[44px] lg:text-[48px]">
                  Online University
                </span>
              </h1>

              {/* Provider */}
              <p className="mt-4 text-[15px] text-black/90 sm:text-[15px]">
                By{" "}
                <span className="font-bold underline decoration-1 underline-offset-2 font-semibold">
                  Edgewood University
                </span>
                {" "}via{" "}
                <span className="font-bold underline decoration-1 underline-offset-2 font-semibold">
                  upGrad
                </span>
              </p>

              {/* Screenshot jaisa bordered course box */}
              <div className="mx-auto mt-6 w-fit lg:mx-0">
                <div className="relative rounded-[20px] border-2 border-[#727272] bg-white/5 px-5 pb-4 pt-5">
                  <span className="absolute -top-[15px] left-4 rounded-[7px] bg-[#ffc55b] px-3 py-1 text-[13px] font-extrabold text-[#c9230c]">
                    Online
                  </span>

                  <p className="whitespace-nowrap text-[18px] font-bold text-[#c9230c] sm:text-[23px]">
                    DBA
                    <span className="mx-2 text-[#c9230c]">|</span>
                    MBA + DBA
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mx-auto mt-4 w-fit space-y-1 text-left lg:mx-0">
                <FeatureItem text="Globally recognised U.S. accreditation (HLC)" />

                <FeatureItem text="No GMAT/GRE + flexible pay-per-month model" />
              </div>

              {/* Download Button */}
              <div className="hidden md:block">
                <button
                  type="button"
                  onClick={() => setDownloadOpen(true)}
                  className="mt-5 inline-flex min-h-[38px] items-center justify-center gap-2 rounded-[11px] bg-[#cf240b] px-6 py-2.5 text-[13px] font-extrabold text-white shadow-[0_5px_10px_rgba(0,0,0,0.22)] transition-all duration-200 hover:bg-[#b91f09]"
                >
                  Download Brochure
                  <Download size={14} strokeWidth={2.7} />
                </button>
              </div>

            </div>

            {/* =========================================================
                Desktop Enquiry Form
            ========================================================== */}

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-[372px] rounded-[11px] border border-[#d7d7d7] bg-white px-5 pb-5 pt-4 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                <FormWrapper
                  title="Enquire Now"
                  subtitle="Academic Experts will assist you!"
                  courseOptions={EDGEWOOD_COURSE_OPTIONS}
                  formNameOverride="Edgewood Hero Enquiry Form"
                  sourceOverride="Edgewood LP"
                  utmSourceFallback="Edgewood Organic"
                  utmMediumFallback="Edgewood Website"
                  submitButtonText="Submit"
                  redirectUrl="/thank-you"
                />
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="relative mt-4 mx-auto h-[300px] w-full lg:hidden">
            <Image
              src={getAssetPath("/edgewood/assets/img/edgewood_mobile_new_img.png")}
              alt="Edgewood University mobile representation"
              fill
              priority
              sizes="280px"
              className="object-contain"
            />
          </div>

          {/* Mobile Form */}
          <div className="-mt-[30px] pb-6 lg:hidden px-6">
            <div className="mx-auto w-full max-w-md rounded-xl border border-gray-200 bg-white p-5 shadow-2xl">
              <FormWrapper
                title="Enquire Now"
                subtitle="Academic Experts will assist you!"
                courseOptions={EDGEWOOD_COURSE_OPTIONS}
                formNameOverride="Edgewood Mobile Hero Enquiry Form"
                sourceOverride="Edgewood LP"
                utmSourceFallback="Edgewood Organic"
                utmMediumFallback="Edgewood Mobile Website"
                submitButtonText="Submit"
                redirectUrl="/thank-you"
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
            aria-label="Download Edgewood brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[400px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >


            <FormWrapper
              title="Download Brochure"
              subtitle="Fill your details to receive the Edgewood brochure"
              onClose={() => setDownloadOpen(false)}
              courseOptions={EDGEWOOD_COURSE_OPTIONS}
              formNameOverride="Edgewood Download Brochure Form"
              sourceOverride="Edgewood LP"
              utmSourceFallback="Edgewood Organic"
              utmMediumFallback="Edgewood Brochure Popup"
              submitButtonText="Download Brochure"
              isBrochureForm
              brochureUrl="/edgewood/assets/brochures/main_brochure.pdf"
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
| Feature Item
|--------------------------------------------------------------------------
*/

type FeatureItemProps = {
  text: string;
};

function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-1 text-[12px] font-semibold italic leading-[1.25] text-black sm:text-[13px]">
      <CheckSquare
        size={13}
        strokeWidth={2.8}
        className="mt-[1px] shrink-0 text-black"
      />

      <span>{text}</span>
    </div>
  );
}
