"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CheckSquare, Download, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";

import IIITBImg from "../../assets/img/iiitb_desktop_new_bg.png";

/*
|--------------------------------------------------------------------------
| IIIT Bangalore Course Options
|--------------------------------------------------------------------------
*/

const IIITB_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "Executive Programme in Generative AI for Leaders",
    label: "Executive Programme in Generative AI for Leaders",
  },
  {
    value: "Executive Post Graduate Certificate Programme in Data Science & AI",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },
  {
    value:
      "Professional Certificate Programme in Data Science with Generative AI",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },
  {
    value: "Executive Post Graduate Programme in Applied AI and Agentic AI",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },
  {
    value: "Executive Diploma in Machine Learning & Artificial Intelligence",
    label: "Executive Diploma in Machine Learning & Artificial Intelligence",
  },
  {
    value: "Chief Technology Officer & AI Leadership Programme",
    label: "Chief Technology Officer & AI Leadership Programme",
  },
  {
    value: "Master of Science in Machine Learning & Artificial Intelligence",
    label: "Master of Science in Machine Learning & Artificial Intelligence",
  },
  {
    value: "Master of Science in Data Science with Generative AI",
    label: "Master of Science in Data Science with Generative AI",
  },
];

/*
|--------------------------------------------------------------------------
| Hero Section
|--------------------------------------------------------------------------
*/

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
        className="relative min-h-[430px] overflow-hidden bg-[#edf2ff]"
      >
        {/* Background campus image */}
        <Image
          src={IIITBImg}
          alt="IIIT Bangalore campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Screenshot jaisa overall subtle white layer */}
        <div className="absolute inset-0 bg-white/5" />

        {/* Screenshot jaisa left light-blue gradient */}
        <div className="absolute inset-y-0 left-0 hidden w-[48%] bg-linear-to-r from-[#edf2ff] via-[#edf2ff]/95 to-transparent lg:block" />

        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-[#edf2ff]/94 lg:hidden" />

        <Container className="relative z-10">
          <div className="grid min-h-[430px] grid-cols-1 items-center gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_372px] lg:gap-14 lg:py-5">
            {/* =========================================================
                Left Content
            ========================================================== */}

            <div className="mx-auto w-full max-w-[570px] text-center lg:mx-0 lg:text-left">
              {/* Logos */}
              <div className="mb-3 flex items-center justify-center gap-3 lg:justify-start">
                {/* IIIT logo placeholder */}
                <div className="flex items-center gap-2">
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#173d68] text-[10px] font-black uppercase text-white">
                    IIIT
                  </div>

                  <div className="text-left">
                    <p className="text-[9px] font-bold uppercase leading-[1.1] text-[#1f2f43]">
                      International Institute of
                    </p>

                    <p className="text-[9px] font-semibold leading-[1.1] text-[#1f2f43]">
                      Information Technology Bangalore
                    </p>
                  </div>
                </div>

                <div className="h-7 w-px bg-[#9aa2ad]" />

                <span className="text-[22px] font-black tracking-tight text-[#ef3340]">
                  upGrad
                </span>
              </div>

              {/* Small Heading */}
              <p className="text-[19px] font-extrabold leading-[1.05] text-black sm:text-[21px]">
                Build Leadership Skills With
              </p>

              {/* Main Heading */}
              <h1 className="mt-2 font-black leading-[0.93] tracking-[-0.035em] text-[#c9230c]">
                <span className="block text-[45px] sm:text-[54px] lg:text-[58px]">
                  IIIT Bangalore
                </span>

                <span className="mt-2 block text-[43px] sm:text-[52px] lg:text-[56px]">
                  Online Courses
                </span>
              </h1>

              {/* Provider */}
              <p className="mt-5 text-[15px] font-semibold text-black sm:text-[16px]">
                By{" "}
                <span className="font-bold underline decoration-1 underline-offset-2">
                  IIIT Bangalore via upGrad
                </span>
              </p>

              {/* Screenshot jaisa bordered course box */}
              <div className="mx-auto mt-7 w-fit lg:mx-0">
                <div className="relative rounded-[20px] border-2 border-[#727272] bg-white/5 px-5 pb-4 pt-5">
                  <span className="absolute -top-[15px] left-4 rounded-[7px] bg-[#ffc55b] px-3 py-1 text-[14px] font-extrabold text-[#c9230c]">
                    Online
                  </span>

                  <p className="whitespace-nowrap text-[22px] font-black text-[#c9230c] sm:text-[27px]">
                    AI
                    <span className="mx-2 text-[#c9230c]">|</span>
                    Data Science
                    <span className="mx-2 text-[#c9230c]">|</span>
                    Leadership
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mx-auto mt-4 w-fit space-y-1 text-left lg:mx-0">
                <FeatureItem text="NAAC A+ accredited institution" />

                <FeatureItem text="Executive and professional certification programmes" />

                <FeatureItem text="Flexible online learning model" />

                <FeatureItem text="Course duration from 5 to 14 months" />
              </div>

              {/* Download Button */}
              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="mt-3 inline-flex min-h-[41px] items-center justify-center gap-2 rounded-[11px] bg-[#cf240b] px-7 py-3 text-[14px] font-extrabold text-white shadow-[0_5px_10px_rgba(0,0,0,0.22)] transition-all duration-200 hover:bg-[#b91f09]"
              >
                Download Brochure
                <Download size={15} strokeWidth={2.7} />
              </button>
            </div>

            {/* =========================================================
                Desktop Enquiry Form
            ========================================================== */}

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-[372px] rounded-[11px] border border-[#d7d7d7] bg-white px-5 pb-5 pt-4 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
                <FormWrapper
                  title="Enquire Now"
                  subtitle="Academic Experts will assist you!"
                  courseOptions={IIITB_COURSE_OPTIONS}
                  formNameOverride="IIITB Hero Enquiry Form"
                  sourceOverride="IIITB Landing Page"
                  utmSourceFallback="IIITB Organic"
                  utmMediumFallback="IIITB Website"
                  submitButtonText="Submit"
                />
              </div>
            </div>
          </div>

          {/* Mobile Form */}
          <div className="pb-10 lg:hidden">
            <div className="mx-auto w-full max-w-md rounded-xl border border-gray-200 bg-white p-5 shadow-2xl">
              <FormWrapper
                title="Enquire Now"
                subtitle="Academic Experts will assist you!"
                courseOptions={IIITB_COURSE_OPTIONS}
                formNameOverride="IIITB Mobile Hero Enquiry Form"
                sourceOverride="IIITB Landing Page"
                utmSourceFallback="IIITB Organic"
                utmMediumFallback="IIITB Mobile Website"
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
            aria-label="Download IIIT Bangalore brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[400px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
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
              subtitle="Fill your details to receive the IIIT Bangalore brochure"
              onClose={() => setDownloadOpen(false)}
              courseOptions={IIITB_COURSE_OPTIONS}
              formNameOverride="IIITB Download Brochure Form"
              sourceOverride="IIITB Brochure"
              utmSourceFallback="IIITB Organic"
              utmMediumFallback="IIITB Brochure Popup"
              submitButtonText="Download Brochure"
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
    <div className="flex items-start gap-1 text-[13px] font-semibold italic leading-[1.25] text-black sm:text-[14px]">
      <CheckSquare
        size={14}
        strokeWidth={2.8}
        className="mt-[1px] shrink-0 text-black"
      />

      <span>{text}</span>
    </div>
  );
}
