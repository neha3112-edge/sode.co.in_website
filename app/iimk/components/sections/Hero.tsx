"use client";

import Image from "next/image";
import { useState } from "react";
import { Clock, Download, PhoneCall } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const IIMK_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "HRM Analytics Online Certification",
    label: "HRM Analytics Online Certification",
  },
];

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <>
      {/* ==========================================
          DESKTOP VIEW (Visible on lg and above)
          ========================================== */}
      <section
        id="home"
        className="relative hidden lg:block overflow-hidden min-h-[580px] pt-18"
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
          <div className="grid min-h-130 grid-cols-[1.1fr_0.9fr] gap-8 py-8 items-center">
            {/* Left Content Column (placed directly on light bg sky/fade area) */}
            <div className="flex flex-col items-start pr-4">
              {/* Logos */}
              <div className="mb-4">
                <Image
                  src={getAssetPath("/iimk/assets/img/upgrade_iim_logo.png")}
                  alt="IIM Kozhikode & upGrad Logo"
                  width={280}
                  height={60}
                  className="w-70 object-contain"
                  priority
                />
              </div>

              {/* Main Heading */}
              <h1
                className={`${anton.className} leading-[1.05] text-[#0f3b8c]`}
              >
                <span className="block text-[44px] xl:text-[40px]">
                  HRM Analytics
                </span>
                <span className="block text-[42px] xl:text-[38px]">
                  Online Certification
                </span>
              </h1>

              {/* Subheading/Provider */}
              <p className="mt-3 text-lg font-bold text-gray-800">
                By <span className="underline">IIM Kozhikode</span> via{" "}
                <span className="underline">Upgrade</span>
              </p>

              {/* Description */}
              <p className="mt-4 text-[13px] text-gray-700 max-w-md leading-relaxed">
                Earn a 6-month professional certificate from IIM Kozhikode. This
                HR Analytics course covers recruitment, job posting, and
                workforce management via case studies &amp; real-world projects.
              </p>

              {/* Duration Tag */}
              <div className="mt-4 flex items-center gap-2 font-bold text-black text-lg">
                <Clock className="text-[#0f3b8c]" size={20} />
                <span>6 Months</span>
              </div>

              {/* Download Brochure Button */}
              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[#0f3b8c] px-6 py-3 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-[#0c2e6f] cursor-pointer"
              >
                Get Brochure
                <Download size={16} />
              </button>
            </div>

            {/* Right Column (Form Card) */}
            <div className="flex justify-end pr-4">
              <div className="w-full max-w-md rounded-2xl bg-white px-6 py-6 shadow-2xl border border-gray-100">
                {/* Form Header */}
                <div className="text-center mb-4">
                  <h2 className="text-[25px] font-extrabold text-[#0f3b8c]">
                    Admission Open
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Academic Experts will assist you!
                  </p>

                  {/* Phone Button */}
                  <div className="mt-2.5 flex justify-center">
                    <a
                      href="tel:+917065777755"
                      className="inline-flex items-center gap-2 bg-[#0f3b8c] text-white px-5 py-1.5 rounded-full font-bold text-xs hover:bg-[#0c2e6f] transition-colors"
                    >
                      <PhoneCall size={12} fill="currentColor" />
                      <span>+91 7065 7777 55</span>
                    </a>
                  </div>
                </div>

                <FormWrapper
                  hideHeader
                  courseOptions={IIMK_COURSE_OPTIONS}
                  defaultCourse="HRM Analytics Online Certification"
                  hideCourseField
                  formNameOverride="IIMK Hero Enquiry Form"
                  sourceOverride="IIMK Landing Page"
                  utmSourceFallback="IIMK Organic"
                  utmMediumFallback="IIMK Website"
                  submitButtonText="Submit"
                  submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==========================================
          MOBILE VIEW (Visible below lg)
          ========================================== */}
      <section
        id="home-mobile"
        className="block lg:hidden bg-[#eef4fd] pt-22 pb-10"
      >
        <div className="md:px-4 flex flex-col items-center">
          {/* 1. Heading */}
          <h1 className="text-center font-extrabold leading-[1.1] text-[#0f3b8c] tracking-tight">
            <span className="block text-[34px] sm:text-[38px]">
              HRM Analytics
            </span>
            <span className="block text-[32px] sm:text-[36px]">
              Online Certification
            </span>
          </h1>

          {/* 2. Subheading */}
          <p className="mt-3 text-base sm:text-lg font-bold text-gray-800 text-center">
            By <span className="underline">IIM Kozhikode</span> via{" "}
            <span className="underline">Upgrade</span>
          </p>

          {/* 3. Description */}
          <p className="mt-4 text-sm sm:text-base text-gray-600 text-center max-w-md leading-relaxed px-4 md:px-0">
            Earn a 6-month professional certificate from IIM Kozhikode. This HR
            Analytics course covers recruitment, job posting, and workforce
            management via case studies &amp; real-world projects.
          </p>

          {/* 4. Duration Tag */}
          <div className="mt-4 flex items-center gap-2 font-bold text-black justify-center">
            <Clock className="text-[#0f3b8c]" size={18} />
            <span className="text-base">6 Months</span>
          </div>

          {/* 5. Logo */}
          {/* <div className="mt-5 flex justify-center">
            <Image
              src={getAssetPath("/iimk/assets/img/upgrade_iim_logo.png")}
              alt="IIM Kozhikode & upGrad Logo"
              width={220}
              height={50}
              className="object-contain"
            />
          </div> */}

          {/* 6. Campus Image */}
          <div className="mt-6 w-full">
            <Image
              src={getAssetPath("/iimk/assets/img/iim_mobile_new_img.png")}
              alt="IIM Kozhikode campus"
              width={500}
              height={290}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 7. Enquiry Form Card */}
          <div className="w-[90%] -mt-5 max-w-md rounded-2xl bg-white p-5 shadow-xl border border-gray-100">
            {/* Form Header */}
            <div className="text-center mb-4">
              <h2 className="text-[22px] font-extrabold text-[#0f3b8c]">
                Admission Open
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Academic Experts will assist you!
              </p>

              {/* Phone Button */}
              <div className="mt-2.5 flex justify-center">
                <a
                  href="tel:+917065777755"
                  className="inline-flex items-center gap-2 bg-[#0f3b8c] text-white px-5 py-1.5 rounded-full font-bold text-xs hover:bg-[#0c2e6f] transition-colors"
                >
                  <PhoneCall size={12} fill="currentColor" />
                  <span>+91 7065 7777 55</span>
                </a>
              </div>
            </div>

            <FormWrapper
              hideHeader
              courseOptions={IIMK_COURSE_OPTIONS}
              defaultCourse="HRM Analytics Online Certification"
              hideCourseField
              formNameOverride="IIMK Mobile Hero Enquiry Form"
              sourceOverride="IIMK Landing Page"
              utmSourceFallback="IIMK Organic"
              utmMediumFallback="IIMK Mobile Website"
              submitButtonText="Submit"
              submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS/ACHIEVEMENTS BAR (Common)
          ========================================== */}
      <section className="bg-[#fedfa9] py-8">
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
              label="Student Enrolled"
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

      {/* ==========================================
          DOWNLOAD BROCHURE POPUP
          ========================================== */}
      {downloadOpen && (
        <div
          role="presentation"
          onClick={() => setDownloadOpen(false)}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Fill your details to receive the IIM Kozhikode brochure"
              onClose={() => setDownloadOpen(false)}
              courseOptions={IIMK_COURSE_OPTIONS}
              defaultCourse="HRM Analytics Online Certification"
              hideCourseField
              formNameOverride="IIMK Download Brochure Form"
              sourceOverride="IIMK Brochure"
              utmSourceFallback="IIMK Organic"
              utmMediumFallback="IIMK Brochure Popup"
              submitButtonText="Download Brochure"
              submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
            />
          </div>
        </div>
      )}
    </>
  );
}

type StatItemProps = {
  imageSrc: string;
  value: string;
  label: string;
};

function StatItem({ imageSrc, value, label }: StatItemProps) {
  return (
    <div className="flex items-center gap-3.5 justify-center md:justify-start">
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
        <p className="text-2xl xl:text-3xl font-extrabold text-[#0f3b8c] leading-none">
          {value}
        </p>
        <p className="text-[13px] font-bold text-gray-900 leading-tight mt-1">
          {label}
        </p>
      </div>
    </div>
  );
}
