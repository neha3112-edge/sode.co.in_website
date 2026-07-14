"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Download } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";

import IIITBImg from "../../assets/img/iiitb_desktop_new_bg.png";
import logo from "../../assets/img/iiitb_new_logo_main.png";
import MobileImg from "../../assets/img/iiitb_mobile_new_img.png";

/*
|--------------------------------------------------------------------------
| IIITB Page Courses
|--------------------------------------------------------------------------
| Dusre landing page par sirf ye list change karni hai.
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

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-[#eef4fd] pt-18"
      >
        {/* Desktop Background */}
        <div className="absolute inset-x-0 bottom-0 top-18 z-0 hidden lg:block">
          <Image
            src={IIITBImg}
            alt="IIIT Bangalore campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-white/5" />
        </div>

        <Container className="relative z-10 px-0">
          <div className="grid min-h-115 grid-cols-1 items-center pt-8 gap-8 lg:grid-cols-[1fr_0.75fr] lg:gap-16 lg:py-5 z-999">
            {/* Left Content */}
            <div className="text-center lg:text-left flex flex-col items-center justify-center md:items-baseline md:justify-left  px-4">
              {/* Logos */}
              <Image
                src={logo}
                alt="IIIT Bangalore Logo"
                className="w-70 pb-5 text-center md:text-left hidden md:block"
              />

              {/* Small Heading */}
              <p className="text-lg font-bold leading-tight text-black sm:text-xl">
                Build Leadership quality
                <br />
                with AI Generative courses from
              </p>

              {/* Main Heading */}
              <h1 className="mt-2 leading-[0.95] text-[#0757a4] font-semibold">
                <span className="block text-[44px] sm:text-[56px] lg:text-[58px]">
                  IIIT Bangalore
                </span>
                <span className="mt-2 block text-[42px] sm:text-[54px] lg:text-[56px]">
                  Online Courses
                </span>
              </h1>

              {/* Provider */}
              <p className="mt-5 text-base font-medium text-black sm:text-lg">
                By <span className="underline font-bold">IIIT Bangalore</span>{" "}
                via <span className="underline font-bold">upGrad</span>
              </p>

              {/* Features */}
              <div className="mx-auto mt-5 space-y-2 text-left md:text-center lg:mx-0">
                <FeatureItem text="NAAC A+ accredited" />
                <FeatureItem text="6+ Certification courses" />
                <FeatureItem text="Partnership of IIIT & IIM Udaipur" />
                <FeatureItem text="5-14 Months" />
              </div>

              {/* Download Button */}
              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-[#0757a4] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-[#064987]"
              >
                Download Brochure
                <Download size={17} />
              </button>
            </div>

            <div className="mobile_banner_img md:hidden">
              <Image
                src={MobileImg}
                alt="IIIT Bangalore mobile banner"
                width={420}
                height={360}
                className="w-full h-auto"
              />
            </div>

            {/* Desktop Form */}
            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-97.5 rounded-xl bg-white px-5 py-5 shadow-2xl">
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
          <div className="pb-10 lg:hidden -mt-4 z-9999 px-4">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
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

      {/* Download Brochure Popup */}
      {downloadOpen && (
        <div
          role="presentation"
          onClick={() => setDownloadOpen(false)}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download IIIT Bangalore brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
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

type FeatureItemProps = {
  text: string;
};

function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="w-full flex items-center justify-left gap-2 text-sm font-semibold italic text-black sm:text-base">
      <span className="flex h-4 w-4 shrink-0 items-center justify-left rounded-sm bg-[#20d83d] text-white">
        <Check size={13} strokeWidth={4} />
      </span>

      <span>{text}</span>
    </div>
  );
}
