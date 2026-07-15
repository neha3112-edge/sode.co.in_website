"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, Download } from "lucide-react";
import { Anton } from "next/font/google";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";

import IIITBImg from "../../assets/img/iiitb_desktop_new_bg.png";
import logo from "../../assets/img/iiitb_new_logo_main.png";
import MobileImg from "../../assets/img/iiitb_mobile_new_img.png";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/* =========================================================
   IIITB PAGE COURSES

   label:
   User ko dropdown me full course name dikhega.

   value:
   Form submit hone par API payload me CERTIFICATE ya MSC jayega.
========================================================= */

const IIITB_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "CERTIFICATE",
    label: "Executive Programme in Generative AI for Leaders",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },
  {
    value: "CERTIFICATE",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Diploma in Machine Learning & Artificial Intelligence",
  },
  {
    value: "CERTIFICATE",
    label: "Chief Technology Officer & AI Leadership Programme",
  },
  {
    value: "MSC",
    label: "Master of Science in Machine Learning & Artificial Intelligence",
  },
  {
    value: "MSC",
    label:
      "Master of Science in Data Science Now integrated with Generative AI",
  },
];

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

    return () => {
      document.body.style.overflow = "";
    };
  }, [downloadOpen]);

  /* =========================================================
     CLOSE MODAL ON ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDownloadOpen(false);
      }
    };

    if (downloadOpen) {
      window.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [downloadOpen]);

  const closeDownloadForm = () => {
    setDownloadOpen(false);
  };

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-[#eef4fd] pt-18"
      >
        {/* =================================================
            DESKTOP BACKGROUND
        ================================================== */}

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
          <div className="grid min-h-115 grid-cols-1 items-center gap-8 pt-8 lg:grid-cols-[1fr_0.75fr] lg:gap-16 lg:py-5">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="flex flex-col items-center justify-center px-4 text-center md:items-baseline md:text-left lg:justify-start">
              {/* Logo */}

              <Image
                src={logo}
                alt="IIIT Bangalore Logo"
                priority
                className="hidden w-70 pb-5 md:block"
              />

              {/* Small Heading */}

              <p className="text-lg font-bold leading-tight text-black sm:text-xl">
                Build Leadership quality
                <br />
                with AI Generative courses from
              </p>

              {/* Main Heading */}

              <h1
                className={`${anton.className} mt-2 leading-[0.95] text-[#0757a4]`}
              >
                <span className="block text-[42px] sm:text-[52px] lg:text-[52px]">
                  IIIT Bangalore
                </span>

                <span className="mt-2 block text-[42px] sm:text-[52px] lg:text-[52px]">
                  Online Courses
                </span>
              </h1>

              {/* Provider */}

              <p className="mt-5 text-base font-medium text-black sm:text-lg">
                By <span className="font-bold underline">IIIT Bangalore</span>{" "}
                via <span className="font-bold underline">upGrad</span>
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
                className="mt-5 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#0757a4] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-[#064987]"
              >
                Download Brochure
                <Download size={17} aria-hidden="true" />
              </button>
            </div>

            {/* =================================================
                MOBILE BANNER IMAGE
            ================================================== */}

            <div className="mobile_banner_img md:hidden">
              <Image
                src={MobileImg}
                alt="IIIT Bangalore mobile banner"
                width={420}
                height={360}
                priority
                className="h-auto w-full"
              />
            </div>

            {/* =================================================
                DESKTOP FORM
            ================================================== */}

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-97.5 rounded-xl bg-white px-5 py-5 shadow-2xl">
                <FormWrapper
                  title="Enquire Now"
                  subtitle="Academic Experts will assist you!"
                  defaultCourse=""
                  courseOptions={IIITB_COURSE_OPTIONS}
                  formNameOverride="IIITB Hero Enquiry Form"
                  sourceOverride="IIITB LP"
                  utmSourceFallback="Organic"
                  utmMediumFallback="IIITB_Organic"
                  submitButtonText="Submit"
                  redirectUrl="/iiitb/thank-you"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE FORM
          ================================================== */}

          <div className="-mt-4 px-4 pb-10 lg:hidden">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
              <FormWrapper
                title="Enquire Now"
                subtitle="Academic Experts will assist you!"
                defaultCourse=""
                courseOptions={IIITB_COURSE_OPTIONS}
                formNameOverride="IIITB Mobile Hero Enquiry Form"
                sourceOverride="IIITB LP"
                utmSourceFallback="Organic"
                utmMediumFallback="IIITB_Organic"
                submitButtonText="Submit"
                redirectUrl="/iiitb/thank-you"
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
            aria-label="Download IIIT Bangalore brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Select your preferred course to receive the IIIT Bangalore brochure"
              onClose={closeDownloadForm}
              defaultCourse=""
              courseOptions={IIITB_COURSE_OPTIONS}
              formNameOverride="IIITB Download Brochure Form"
              sourceOverride="IIITB LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIITB_Organic"
              submitButtonText="Download Brochure"
              isBrochureForm
              brochureUrl="/assets/pdf/brochure.pdf"
              redirectUrl="/iiitb/thank-you"
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
    <div className="flex w-full items-center justify-start gap-2 text-sm font-semibold italic text-black sm:text-base">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[#20d83d] text-white">
        <Check size={13} strokeWidth={4} aria-hidden="true" />
      </span>

      <span>{text}</span>
    </div>
  );
}
