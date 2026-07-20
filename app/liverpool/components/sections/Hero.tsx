"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BookOpen, Download, Globe2, Phone, ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { LIVERPOOL_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Hero Features
|--------------------------------------------------------------------------
*/

const heroFeatures = [
  {
    id: 1,
    text: "Three Decades of Excellence",
    icon: <BookOpen size={20} strokeWidth={2} />,
  },
  {
    id: 2,
    text: "LBS–IIM U Credential Pathway",
    icon: <ShieldCheck size={20} strokeWidth={2} />,
  },
  {
    id: 3,
    text: "Globally Recognised",
    icon: <Globe2 size={20} strokeWidth={2} />,
  },
  {
    id: 4,
    text: "18 Months Duration",
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
            src={getAssetPath("/liverpool/assets/img/liverpool_desktop_new_bg.webp")}
            alt="Liverpool John Moores University campus"
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
                  src={getAssetPath("/liverpool/assets/img/logo_for_liverpool_upgrade.png")}
                  alt="Liverpool Business School"
                  width={210}
                  height={75}
                  priority
                  className="h-10 w-auto object-contain"
                />
              </div>

              {/* Eyebrow */}
              <p className="text-[15px] font-semibold text-gray-800 sm:text-[14px]">
                Where Global Business Education Meets Leadership Excellence
              </p>

              {/* Main Heading */}
              <h1 className="mt-2 text-[38px] font-extrabold leading-[1.1] tracking-tight text-[#00499b] sm:text-[50px] lg:text-[58px]">
                Online MBA
              </h1>

              {/* Program Description */}
              <p className="mt-3 text-[16px] leading-snug text-gray-900 sm:text-[14px]">
                By <span className="underline font-semibold">Liverpool Business School</span> with <br /> <span className="underline font-semibold">IIM Udaipur</span> via <span className="underline font-semibold">upGrad.</span>
              </p>

              {/* Features */}
              <div className="mx-auto mt-6 w-fit space-y-3.5 text-left lg:mx-0">
                {heroFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center text-[#25cfbf]">
                      {feature.icon}
                    </div>
                    <p className="text-[14px] font-semibold text-gray-800 sm:text-[16px]">
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
                  className="inline-flex min-h-[30px] items-center justify-center gap-2 rounded-[6px] bg-[#00499b] px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#003d83] hover:shadow-lg"
                >
                  Download Brochure
                  <Download size={18} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Mobile / Tablet Campus Image */}
            <div className="w-full lg:hidden">
              <Image
                src={getAssetPath("/liverpool/assets/img/liverpool_mobile_new_img.png")}
                alt="Liverpool Mobile Banner"
                width={500}
                height={290}
                priority
                className="h-auto w-full mx-auto object-cover"
              />
            </div>

            {/* Right Column Enquiry Form */}
            <div className="flex justify-center lg:justify-end px-4 md:px-0 -mt-12 md:mt-0">
              <div className="w-full max-w-[440px] rounded-2xl border border-gray-100 bg-white px-6 py-6 shadow-2xl">
                <div className="mb-4 text-center">
                  <h2 className="text-[22px] font-extrabold leading-none text-[#00499b] sm:text-[25px]">
                    Admission Open
                  </h2>
                  <p className="mt-1 text-xs text-gray-500">
                    Academic Experts will assist you!
                  </p>
                  <div className="mt-2.5 flex justify-center">
                    <a
                      href="tel:+917065777755"
                      className="inline-flex items-center gap-2 rounded-full bg-[#00499b] px-5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#003d83]"
                    >
                      <Phone size={12} strokeWidth={3} className="fill-white" />
                      <span>+91 7065 7777 55</span>
                    </a>
                  </div>
                </div>

                <FormWrapper
                  hideHeader
                  courseOptions={LIVERPOOL_COURSE_OPTIONS}
                  defaultCourse=""
                  formNameOverride="Liverpool Hero Enquiry Form"
                  sourceOverride="Liverpool LP"
                  utmSourceFallback="Liverpool Organic"
                  utmMediumFallback="Liverpool Website"
                  submitButtonText="Submit"
                  submitButtonClassName="bg-[#00499b] hover:bg-[#003d83] text-white"
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
            aria-label="Download Liverpool MBA brochure"
            onMouseDown={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[400px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Fill your details to receive the Liverpool Online MBA brochure"
              onClose={() => setDownloadOpen(false)}
              courseOptions={LIVERPOOL_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="Liverpool Download Brochure Form"
              sourceOverride="Liverpool LP"
              utmSourceFallback="Liverpool Organic"
              utmMediumFallback="Liverpool Brochure Popup"
              submitButtonText="Download Brochure"
              submitButtonClassName="bg-[#00499b] hover:bg-[#003d83]"
              isBrochureForm
              brochureUrl="/liverpool/assets/img/main_brochure.pdf"
              redirectUrl="/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}
