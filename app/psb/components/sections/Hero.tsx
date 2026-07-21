"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BookOpen, Download, Globe2, Phone, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { PSB_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Hero Features
|--------------------------------------------------------------------------
*/

const heroFeatures = [
  {
    id: 1,
    text: "Triple Crown Accredited MBA Degree",
    icon: <BookOpen size={20} strokeWidth={2} />,
  },
  {
    id: 2,
    text: "PSB-IIM L Dual Credentials",
    icon: <ShieldCheck size={20} strokeWidth={2} />,
  },
  {
    id: 3,
    text: "Global Recognition",
    icon: <Globe2 size={20} strokeWidth={2} />,
  },
  {
    id: 4,
    text: "18-Month Online MBA Programme",
    icon: <ShieldCheck size={20} strokeWidth={2} />,
  },
];

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
      <section id="home" className="relative overflow-hidden bg-[#edf1ff] pb-10 pt-6 lg:py-16">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src={getAssetPath("/psb/assets/img/Pari School of bussines Desktop.webp")}
            alt="Paris School of Business campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <Container className="relative z-10 p-0">
          <div className="grid min-h-[420px] grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
            {/* Left Content */}
            <div className="mx-auto w-full max-w-[620px] text-center lg:mx-0 lg:text-left">
              {/* Logos */}
              <div className="mb-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start hidden md:block">
                <Image
                  src={getAssetPath("/psb/assets/img/Paris School of bussines logo.webp")}
                  alt="Paris School of Business logo"
                  width={210}
                  height={75}
                  priority
                  className="h-13 w-auto object-contain"
                />
              </div>

              {/* Eyebrow */}
              <p className="text-[15px] font-semibold text-gray-800 sm:text-[14px] pt-4 md:pt-0">
                Where Business Excellence Meets International Opportunity
              </p>

              {/* Main Heading */}
              <h1 className="mt-2 text-[56px] font-black leading-[1.1] text-[#233568] sm:text-[50px] lg:text-[58px]">
                Online MBA
              </h1>

              {/* Program Description */}
              <p className="mt-3 text-[16px] leading-snug text-gray-900 sm:text-[14px]">
                By <span className="underline font-semibold">Paris School of Business</span> with <br /> <span className="underline font-semibold">Certification</span> from <span className="underline font-semibold">IIM Lucknow.</span>
              </p>

              {/* Features */}
              <div className="mx-auto mt-6 w-fit space-y-1 text-left lg:mx-0">
                {heroFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center text-[#AF1062]">
                      {feature.icon}
                    </div>
                    <p className="text-[13px] font-semibold text-gray-800 sm:text-[14px] italic">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start hidden md:block">
                <button
                  type="button"
                  onClick={() => setDownloadOpen(true)}
                  className="inline-flex min-h-[30px] items-center justify-center gap-2 rounded-[6px] bg-[#233568] px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1a2850] hover:shadow-lg"
                >
                  Download Brochure
                  <Download size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Mobile / Tablet Campus Image */}
            <div className="w-full lg:hidden">
              <Image
                src={getAssetPath("/psb/assets/img/Pari School of bussines Mobile.webp")}
                alt="PSB Mobile Banner"
                width={500}
                height={290}
                priority
                className="h-auto w-full mx-auto object-cover"
              />
            </div>

            {/* Right Column Enquiry Form */}
            <div className="flex justify-center lg:justify-end px-4 md:px-0 -mt-12 md:mt-0">
              <div className="w-full max-w-[400px] rounded-2xl border border-gray-100 bg-white px-6 py-6 shadow-2xl">
                <div className="mb-4 text-center">
                  <h2 className="text-[22px] font-extrabold leading-none text-[#233568] sm:text-[25px]">
                    Admission Open
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Academic Experts will assist you!
                  </p>
                  <div className="mt-2.5 flex justify-center">
                    <a
                      href="tel:+917065777755"
                      className="inline-flex items-center gap-2 rounded-full bg-[#233568] px-5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#1a2850]"
                    >
                      <Phone size={12} strokeWidth={3} className="fill-white" />
                      <span>+91 7065 7777 55</span>
                    </a>
                  </div>
                </div>

                <FormWrapper
                  hideHeader
                  courseOptions={PSB_COURSE_OPTIONS}
                  defaultCourse=""
                  formNameOverride="PSB Hero Enquiry Form"
                  sourceOverride="PSB LP"
                  utmSourceFallback="PSB Organic"
                  utmMediumFallback="PSB Website"
                  submitButtonText="Submit"
                  submitButtonClassName="bg-[#233568] hover:bg-[#1a2850] text-white"
                  redirectUrl="/thank-you"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Download Brochure Popup */}
      {downloadOpen && (
        <div
          role="presentation"
          onMouseDown={() => setDownloadOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download PSB MBA brochure"
            onMouseDown={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[400px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Fill your details to receive the Paris School of Business Online MBA brochure"
              onClose={() => setDownloadOpen(false)}
              courseOptions={PSB_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="PSB Download Brochure Form"
              sourceOverride="PSB LP"
              utmSourceFallback="PSB Organic"
              utmMediumFallback="PSB Brochure Popup"
              submitButtonText="Download Brochure"
              submitButtonClassName="bg-[#233568] hover:bg-[#1a2850]"
              isBrochureForm
              brochureUrl="/psb/assets/img/main_brochure.pdf"
              redirectUrl="/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}
