"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Clock, Download, PhoneCall } from "lucide-react";
import { Anton } from "next/font/google";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/* =========================================================
   IIM KOZHIKODE COURSE OPTION

   Dropdown label:
   HR & Analytics

   API payload value:
   IIM HR
========================================================= */

const IIMK_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "IIM HR",
    label: "HR & Analytics",
  },
];

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  /* =========================================================
     LOCK BODY SCROLL WHEN BROCHURE MODAL IS OPEN
  ========================================================= */

  useEffect(() => {
    if (!downloadOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [downloadOpen]);

  /* =========================================================
     CLOSE BROCHURE MODAL WITH ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    if (!downloadOpen) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDownloadOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [downloadOpen]);

  const openDownloadForm = () => {
    setDownloadOpen(true);
  };

  const closeDownloadForm = () => {
    setDownloadOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP VIEW
      ====================================================== */}

      <section
        id="hero-section"
        className="relative hidden min-h-[580px] overflow-hidden pt-18 lg:block"
      >
        {/* Background Image */}

        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/iimk/assets/img/iim_desktop_new_img.png")}
            alt="IIM Kozhikode campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <Container className="relative z-10 p-0">
          <div className="grid min-h-130 grid-cols-[1.1fr_0.9fr] items-center gap-8 py-8">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="flex flex-col items-start pr-4">
              {/* Logos */}

              <div className="mb-4">
                <Image
                  src={getAssetPath("/iimk/assets/img/upgrade_iim_logo.png")}
                  alt="IIM Kozhikode and upGrad logo"
                  width={280}
                  height={60}
                  className="w-70 object-contain"
                  priority
                />
              </div>

              {/* Main Heading */}

              <h1
                className={`${anton.className} leading-[1.05] text-[#0f3b8c] text-5xl`}
              >
                <span className="block">HRM Analytics</span>
                <span className="block">Online Certification</span>
              </h1>

              {/* Provider */}

              <p className="mt-3 text-lg font-bold text-gray-800">
                By <span className="underline">IIM Kozhikode</span> via{" "}
                <span className="underline">upGrad</span>
              </p>

              {/* Description */}

              <p className="mt-4 max-w-md text-[13px] leading-relaxed text-gray-700">
                Earn a 6-month professional certificate from IIM Kozhikode. This
                HR Analytics course covers recruitment, job posting, and
                workforce management through case studies and real-world
                projects.
              </p>

              {/* Duration */}

              <div className="mt-4 flex items-center gap-2 text-lg font-bold text-black">
                <Clock
                  className="text-[#0f3b8c]"
                  size={20}
                  aria-hidden="true"
                />

                <span>6 Months</span>
              </div>

              {/* Download Brochure Button */}

              <button
                type="button"
                onClick={openDownloadForm}
                className="mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#0f3b8c] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-[#0c2e6f]"
              >
                <span>Get Brochure</span>
                <Download size={16} aria-hidden="true" />
              </button>
            </div>

            {/* =================================================
                DESKTOP FORM
            ================================================== */}

            <div className="flex justify-end pr-4">
              <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white px-6 py-6 shadow-2xl">
                {/* Form Heading */}

                <div className="mb-4 text-center">
                  <h2 className="text-[25px] font-extrabold text-[#0f3b8c]">
                    Admission Open
                  </h2>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Academic Experts will assist you!
                  </p>

                  {/* Phone Button */}

                  <div className="mt-2.5 flex justify-center">
                    <a
                      href="tel:+917065777755"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0f3b8c] px-5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#0c2e6f]"
                    >
                      <PhoneCall
                        size={12}
                        fill="currentColor"
                        aria-hidden="true"
                      />

                      <span>+91 7065 7777 55</span>
                    </a>
                  </div>
                </div>

                <FormWrapper
                  hideHeader
                  courseOptions={IIMK_COURSE_OPTIONS}
                  defaultCourse=""
                  formNameOverride="IIMK Hero Enquiry Form"
                  sourceOverride="IIM LP"
                  utmSourceFallback="Organic"
                  utmMediumFallback="IIM_Organic"
                  submitButtonText="Submit"
                  submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
                  redirectUrl="/iimk/thank-you"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          MOBILE VIEW
      ====================================================== */}

      <section
        id="home-mobile"
        className="block bg-[#eef4fd] pb-10 pt-22 lg:hidden"
      >
        <div className="flex flex-col items-center md:px-4">
          {/* Heading */}

          <h1
            className={`${anton.className} text-center leading-[1.1] tracking-tight text-[#0f3b8c]`}
          >
            <span className="block text-[34px] sm:text-[38px]">
              HRM Analytics
            </span>

            <span className="block text-[32px] sm:text-[36px]">
              Online Certification
            </span>
          </h1>

          {/* Provider */}

          <p className="mt-3 text-center text-base font-bold text-gray-800 sm:text-lg">
            By <span className="underline">IIM Kozhikode</span> via{" "}
            <span className="underline">upGrad</span>
          </p>

          {/* Description */}

          <p className="mt-4 max-w-md px-4 text-center text-sm leading-relaxed text-gray-600 sm:text-base md:px-0">
            Earn a 6-month professional certificate from IIM Kozhikode. This HR
            Analytics course covers recruitment, job posting, and workforce
            management through case studies and real-world projects.
          </p>

          {/* Duration */}

          <div className="mt-4 flex items-center justify-center gap-2 font-bold text-black">
            <Clock className="text-[#0f3b8c]" size={18} aria-hidden="true" />

            <span className="text-base">6 Months</span>
          </div>

          {/* Campus Image */}

          <div className="mt-6 w-full">
            <Image
              src={getAssetPath("/iimk/assets/img/iim_mobile_new_img.png")}
              alt="IIM Kozhikode campus"
              width={500}
              height={290}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          {/* =================================================
              MOBILE FORM
          ================================================== */}

          <div className="-mt-5 w-[90%] max-w-md rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">
            {/* Form Heading */}

            <div className="mb-4 text-center">
              <h2 className="text-[22px] font-extrabold text-[#0f3b8c]">
                Admission Open
              </h2>

              <p className="mt-0.5 text-xs text-gray-500">
                Academic Experts will assist you!
              </p>

              {/* Phone Button */}

              <div className="mt-2.5 flex justify-center">
                <a
                  href="tel:+917065777755"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0f3b8c] px-5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#0c2e6f]"
                >
                  <PhoneCall size={12} fill="currentColor" aria-hidden="true" />

                  <span>+91 7065 7777 55</span>
                </a>
              </div>
            </div>

            <FormWrapper
              hideHeader
              courseOptions={IIMK_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IIMK Mobile Hero Enquiry Form"
              sourceOverride="IIM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIM_Organic"
              submitButtonText="Submit"
              submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
              redirectUrl="/iimk/thank-you"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS BAR
      ====================================================== */}

      <section className="bg-[#fedfa9] py-8" id="stats">
        <Container>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-x-8 md:gap-y-0">
            <StatItem
              imageSrc="/iimk/assets/img/ic-01.webp"
              value="50%"
              label="Avg Salary Hike"
            />

            <StatItem
              imageSrc="/iimk/assets/img/ic-02.webp"
              value="10K+"
              label="Students Enrolled"
            />

            <StatItem
              imageSrc="/iimk/assets/img/ic-03.webp"
              value="100+"
              label="Hiring Partners"
            />

            <StatItem
              imageSrc="/iimk/assets/img/ic-04.webp"
              value="500+"
              label="Industry Experts"
            />
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
            aria-label="Download IIM Kozhikode brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Select your course to receive the IIM Kozhikode brochure"
              onClose={closeDownloadForm}
              courseOptions={IIMK_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="IIMK Download Brochure Form"
              sourceOverride="IIM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="IIM_Organic"
              submitButtonText="Download Brochure"
              submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
              isBrochureForm
              brochureUrl="/iimk/assets/brochures/main_brochure.pdf"
              redirectUrl="/iimk/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================
   STAT ITEM
========================================================= */

type StatItemProps = {
  imageSrc: string;
  value: string;
  label: string;
};

function StatItem({ imageSrc, value, label }: StatItemProps) {
  return (
    <div className="flex items-center justify-center gap-3.5 md:justify-start">
      <div className="relative h-14 w-14 shrink-0">
        <Image
          src={getAssetPath(imageSrc)}
          alt={label}
          fill
          sizes="56px"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col text-left">
        <p className="text-2xl font-extrabold leading-none text-[#0f3b8c] xl:text-3xl">
          {value}
        </p>

        <p className="mt-1 text-[13px] font-bold leading-tight text-gray-900">
          {label}
        </p>
      </div>
    </div>
  );
}
