"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, Download } from "lucide-react";
import { Anton } from "next/font/google";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { IIMU_COURSE_OPTIONS } from "../../constants";

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

  const IIITBImg = getAssetPath(
    "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/iiitb_desktop_new_bg.webp",
  );
  const logo = getAssetPath(
    "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/iiitb_new_logo_main.webp",
  );
  const MobileImg = getAssetPath(
    "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/iiitb_mobile_new_img.webp",
  );

  return (
    <>
      <section
        id="hero-section"
        className="relative overflow-hidden bg-[#eef4fd] pt-18"
      >
        {/* =================================================
            DESKTOP BACKGROUND
        ================================================== */}

        <div className="absolute inset-x-0 bottom-0 top-18 z-0 hidden lg:block">
          <Image
            src={IIITBImg}
            alt="IIM Udaipur campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-white/5" />
        </div>

        <Container className="relative z-10 px-0 md:py-3">
          <div className="grid min-h-115 grid-cols-1 items-center gap-8 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-5">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="flex flex-col items-center justify-center px-4 text-center md:items-baseline md:text-left lg:justify-start">
              {/* Logo */}

              <div className="relative hidden h-[65px] w-[350px] pb-5 md:block">
                <Image
                  src={logo}
                  alt="IIIT Bangalore & IIM Udaipur Logo"
                  fill
                  priority
                  sizes="240px"
                  className="object-contain object-left"
                />
              </div>

              {/* Small Heading */}

              <p className="text-md font-bold leading-tight text-black sm:text-[16px]">
                Where Technology Leadership Meets
                <br />
                AI-Driven Transformation
              </p>

              {/* Main Heading */}

              <h1
                className={`${anton.className} mt-3 leading-[0.95] text-[#0757a4] uppercase`}
              >
                <span className="block text-[46px] sm:text-[52px] lg:text-[52px]">
                  CTO &amp; AI Leadership
                </span>

                <span className="mt-2 block text-[42px] sm:text-[52px] lg:text-[52px]">
                  Programme
                </span>
              </h1>

              {/* Provider */}

              <p className="mt-5 text-base font-medium text-black sm:text-lg">
                By <span className="font-bold underline">IIIT Bangalore &amp; IIM Udaipur</span>{" "}
                via <span className="font-bold underline">upGrad</span>
              </p>

              {/* Features */}

              <div className="mx-auto mt-5 space-y-1 text-left md:text-center lg:mx-0">
                <FeatureItem text="24-Week Executive Programme" />
                <FeatureItem text="8 Strategic Modules for CTO &amp; AI Leadership Capabilities" />
                <FeatureItem text="Dual Executive Alumni Networks(IIIT-B &amp; IIM-U)" />
              </div>

              {/* Download Button */}
              <div className="hidden md:block">
                <button
                  type="button"
                  onClick={() => setDownloadOpen(true)}
                  className="mt-5 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#0757a4] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-[#064987]"
                >
                  Download Brochure
                  <Download size={17} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* =================================================
                MOBILE BANNER IMAGE
            ================================================== */}

            <div className="mobile_banner_img md:hidden">
              <Image
                src={MobileImg}
                alt="IIM Udaipur mobile banner"
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
                  courseOptions={IIMU_COURSE_OPTIONS}
                  formNameOverride="IIMU Hero Enquiry Form"
                  sourceOverride="IIMU LP"
                  utmSourceFallback="Organic"
                  utmMediumFallback="IIMU_Organic"
                  submitButtonText="Submit"
                  redirectUrl="/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/thank-you"
                />
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE FORM
          ================================================== */}

          <div className="px-4 pb-10 lg:hidden">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
              <FormWrapper
                title="Enquire Now"
                subtitle="Academic Experts will assist you!"
                defaultCourse=""
                courseOptions={IIMU_COURSE_OPTIONS}
                formNameOverride="IIMU Mobile Hero Enquiry Form"
                sourceOverride="IIMU LP"
                utmSourceFallback="Organic"
                utmMediumFallback="IIMU_Organic"
                submitButtonText="Submit"
                redirectUrl="/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/thank-you"
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
            aria-label="Download IIM Udaipur brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Select your preferred course to receive the IIM Udaipur brochure"
              onClose={closeDownloadForm}
              defaultCourse=""
              courseOptions={IIMU_COURSE_OPTIONS}
              formNameOverride="IIMU Download Brochure Form"
              sourceOverride="IIMU LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIMU_Organic"
              submitButtonText="Download Brochure"
              isBrochureForm
              brochureUrl="/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/brochure/main_brochure.pdf"
              redirectUrl="/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/thank-you"
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

      <span className="text-sm">{text}</span>
    </div>
  );
}
