"use client";

import { useState } from "react";
import Image from "next/image";

import FormWrapper from "@/components/forms/FormWrapper";
import GlobalDialog from "@/components/layout/GlobalDialog";
import DisclaimerContent from "@/components/legal/DisclaimerContent";
import PrivacyContent from "@/components/legal/PrivacyContent";
import TermsContent from "@/components/legal/TermsContent";
import { getAssetPath } from "@/lib/utils";

type LegalDialogType = "disclaimer" | "terms" | "privacy" | null;

export function MainFooter() {
  const [expertOpen, setExpertOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState<LegalDialogType>(null);

  const openExpertForm = () => {
    setExpertOpen(true);
  };

  const closeExpertForm = () => {
    setExpertOpen(false);
  };

  return (
    <footer className="w-full">
      {/* =====================================================
          NEED CLARIFICATION CTA
      ====================================================== */}
      <section className="bg-[#1d3557] py-8 md:py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-[#f1dfa0] md:text-4xl">
                Need clarification?
              </h3>

              <p className="mt-2 text-sm font-medium text-white md:text-[18px]">
                Interact with experts, Get free consultation.
              </p>
            </div>

            <button
              type="button"
              onClick={openExpertForm}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-linear-to-r from-[#EEC471] via-[#F3CD73] to-[#FADA9A] px-8 py-3.5 text-base font-extrabold text-[#1d3557] shadow-md transition duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Talk to Experts
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <section className="border-t border-[#A66E38]/20 bg-linear-to-r from-[#EEC471] via-[#F3CD73] to-[#FADA9A] pb-8 pt-12 text-gray-800 md:pt-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          {/* Footer Columns */}
          <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* =================================================
                COLUMN 1: LOGO, ADDRESS, SOCIALS AND MAP
            ================================================== */}
            <div className="flex flex-col items-start sm:col-span-2 lg:col-span-4">
              <Image
                src={getAssetPath("/assets/images/sode_footer_logo.png")}
                alt="School of Online and Distance Education"
                width={230}
                height={105}
                className="mb-5 h-auto w-[200px] object-contain md:w-[230px]"
              />

              <p className="max-w-[310px] text-[13px] leading-6 text-[#263957] md:text-[13.5px]">
                Unit No. 1, 3rd Floor Vardhman Trade Centre,
                <br />
                Nehru Place, New Delhi - 110019
              </p>

              {/* Social Media Icons */}
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d3557] text-[#f4cc78] transition hover:-translate-y-1 hover:bg-[#142943]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1.01.28-1.7 1.75-1.7H17V2.42C16.7 2.38 15.67 2.3 14.45 2.3c-2.55 0-4.3 1.56-4.3 4.42V9.5H7.25V13h2.9v9h3.35Z" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d3557] text-[#f4cc78] transition hover:-translate-y-1 hover:bg-[#142943]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[16px] w-[16px]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.9 2H22l-6.77 7.74L23 22h-6.09l-4.77-6.24L6.68 22H3.56l7.13-8.15L3.24 2h6.24l4.31 5.7L18.9 2Zm-1.09 17.84h1.72L8.54 4.05H6.69l11.12 15.79Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d3557] text-[#f4cc78] transition hover:-translate-y-1 hover:bg-[#142943]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d3557] text-[#f4cc78] transition hover:-translate-y-1 hover:bg-[#142943]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[17px] w-[17px]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.34 3.5A2.34 2.34 0 1 1 5.34 8.18 2.34 2.34 0 0 1 5.34 3.5ZM3.32 9.86h4.04V22H3.32V9.86ZM9.78 9.86h3.87v1.66h.06c.54-1.02 1.86-2.1 3.82-2.1 4.09 0 4.84 2.69 4.84 6.19V22h-4.03v-5.66c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V22H9.78V9.86Z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d3557] text-[#f4cc78] transition hover:-translate-y-1 hover:bg-[#142943]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.5 6.2a3.03 3.03 0 0 0-2.13-2.14C19.49 3.55 12 3.55 12 3.55s-7.49 0-9.37.51A3.03 3.03 0 0 0 .5 6.2 31.48 31.48 0 0 0 0 12a31.48 31.48 0 0 0 .5 5.8 3.03 3.03 0 0 0 2.13 2.14c1.88.51 9.37.51 9.37.51s7.49 0 9.37-.51a3.03 3.03 0 0 0 2.13-2.14A31.48 31.48 0 0 0 24 12a31.48 31.48 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.23 3.6L9.6 15.6Z" />
                  </svg>
                </a>

                {/* Pinterest */}
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d3557] text-[#f4cc78] transition hover:-translate-y-1 hover:bg-[#142943]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 0 0-3.64 19.31c-.09-1.69-.02-3.72.42-5.58l1.29-5.47s-.32-.65-.32-1.61c0-1.51.87-2.64 1.96-2.64.93 0 1.37.7 1.37 1.53 0 .93-.59 2.32-.9 3.61-.26 1.08.54 1.96 1.6 1.96 1.92 0 3.4-2.03 3.4-4.95 0-2.59-1.86-4.4-4.52-4.4-3.08 0-4.89 2.31-4.89 4.7 0 .93.36 1.93.81 2.47.09.11.1.2.08.31l-.3 1.24c-.05.2-.16.24-.37.15-1.38-.64-2.24-2.65-2.24-4.27 0-3.48 2.53-6.67 7.29-6.67 3.83 0 6.8 2.73 6.8 6.37 0 3.8-2.4 6.86-5.72 6.86-1.12 0-2.17-.58-2.53-1.27l-.69 2.62c-.25.96-.92 2.16-1.37 2.89.84.26 1.71.4 2.61.4A10 10 0 0 0 12 2Z" />
                  </svg>
                </a>
              </div>

              {/* Google Map */}
              <div className="mt-6 h-[132px] w-full max-w-[300px] overflow-hidden rounded-xl bg-white shadow-sm">
                <iframe
                  title="SODE Counseling Services LLP Location"
                  src="https://www.google.com/maps?q=SODE%20Counseling%20Services%20LLP%20Nehru%20Place%20New%20Delhi&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            {/* =================================================
                COLUMN 2: TOP UNIVERSITIES
            ================================================== */}
            <div className="lg:col-span-3">
              <h4 className="mb-6 text-[14px] font-extrabold uppercase tracking-wider text-[#16223a]">
                Top Universities
              </h4>

              <ul className="space-y-3.5 text-[14px] font-medium text-[#263957]">
                <li>
                  <a
                    href="#prestigious-institutions"
                    className="transition-colors hover:text-black"
                  >
                    Golden Gate University
                  </a>
                </li>

                <li>
                  <a
                    href="#prestigious-institutions"
                    className="transition-colors hover:text-black"
                  >
                    Rushford University
                  </a>
                </li>

                <li>
                  <a
                    href="#prestigious-institutions"
                    className="transition-colors hover:text-black"
                  >
                    ESGCI Paris
                  </a>
                </li>

                <li>
                  <a
                    href="#prestigious-institutions"
                    className="transition-colors hover:text-black"
                  >
                    SSBM GENEVA
                  </a>
                </li>

                <li>
                  <a
                    href="#prestigious-institutions"
                    className="transition-colors hover:text-black"
                  >
                    IIIT Bangalore
                  </a>
                </li>

                <li>
                  <a
                    href="#prestigious-institutions"
                    className="transition-colors hover:text-black"
                  >
                    Liverpool Business School
                  </a>
                </li>

                <li>
                  <a
                    href="#prestigious-institutions"
                    className="transition-colors hover:text-black"
                  >
                    IIM Kozhikode
                  </a>
                </li>

                <li>
                  <a
                    href="#prestigious-institutions"
                    className="transition-colors hover:text-black"
                  >
                    MICA
                  </a>
                </li>
              </ul>
            </div>

            {/* =================================================
                COLUMN 3: ONLINE PROGRAMS
            ================================================== */}
            <div className="lg:col-span-3">
              <h4 className="mb-6 text-[14px] font-extrabold uppercase tracking-wider text-[#16223a]">
                Online Programs
              </h4>

              <ul className="space-y-3.5 text-[14px] font-medium text-[#263957]">
                <li>
                  <a
                    href="#premium-programs"
                    className="transition-colors hover:text-black"
                  >
                    Doctorate · DBA
                  </a>
                </li>

                <li>
                  <a
                    href="#premium-programs"
                    className="transition-colors hover:text-black"
                  >
                    Master · MBA
                  </a>
                </li>

                <li>
                  <a
                    href="#premium-programs"
                    className="transition-colors hover:text-black"
                  >
                    DBA + MBA Dual
                  </a>
                </li>

                <li>
                  <a
                    href="#premium-programs"
                    className="transition-colors hover:text-black"
                  >
                    HR Analytics
                  </a>
                </li>

                <li>
                  <a
                    href="#premium-programs"
                    className="transition-colors hover:text-black"
                  >
                    Data Science &amp; AI
                  </a>
                </li>

                <li>
                  <a
                    href="#premium-programs"
                    className="transition-colors hover:text-black"
                  >
                    Certifications
                  </a>
                </li>

                <li>
                  <a
                    href="#premium-programs"
                    className="transition-colors hover:text-black"
                  >
                    Executive Programs
                  </a>
                </li>
              </ul>
            </div>

            {/* =================================================
                COLUMN 4: GET STARTED
            ================================================== */}
            <div className="lg:col-span-2">
              <h4 className="mb-6 text-[14px] font-extrabold uppercase tracking-wider text-[#16223a]">
                Get Started
              </h4>

              <ul className="space-y-3.5 text-[14px] font-medium text-[#263957]">
                <li>
                  <a
                    href="#about-sode"
                    className="transition-colors hover:text-black"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={openExpertForm}
                    className="cursor-pointer text-left transition-colors hover:text-black"
                  >
                    Contact Us
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={openExpertForm}
                    className="cursor-pointer text-left transition-colors hover:text-black"
                  >
                    Book Free Counseling
                  </button>
                </li>

                <li>
                  <a
                    href="#alumni-voices"
                    className="transition-colors hover:text-black"
                  >
                    Alumni Voices
                  </a>
                </li>

                <li>
                  <a href="#faq" className="transition-colors hover:text-black">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* =================================================
              COPYRIGHT BAR
          ================================================== */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#A66E38]/25 pt-6 text-[13.5px] font-medium text-[#263957] md:flex-row">
            <div className="order-2 text-center md:order-1 md:text-left">
              Copyright 2026 SODE Counseling Services LLP | All Rights Reserved
            </div>

            <div className="order-1 flex flex-wrap items-center justify-center gap-2 md:order-2">
              <button
                type="button"
                onClick={() => setActiveDialog("disclaimer")}
                className="cursor-pointer transition-colors hover:text-black"
              >
                Disclaimer
              </button>

              <span aria-hidden="true">|</span>

              <button
                type="button"
                onClick={() => setActiveDialog("privacy")}
                className="cursor-pointer transition-colors hover:text-black"
              >
                Privacy
              </button>

              <span aria-hidden="true">|</span>

              <button
                type="button"
                onClick={() => setActiveDialog("terms")}
                className="cursor-pointer transition-colors hover:text-black"
              >
                Terms &amp; Condition
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERT FORM POPUP
      ====================================================== */}
      {expertOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Talk to Our Experts"
          onClick={closeExpertForm}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6 shadow-2xl animate-[scaleIn_0.2s_ease]"
          >
            <FormWrapper
              title="Talk to Our Experts"
              subtitle="Get personalized guidance from our specialists"
              onClose={closeExpertForm}
            />
          </div>
        </div>
      )}

      {/* =====================================================
          LEGAL CONTENT DIALOG
      ====================================================== */}
      <GlobalDialog
        open={activeDialog !== null}
        setOpen={(open) => {
          if (!open) {
            setActiveDialog(null);
          }
        }}
      >
        <div className="max-h-[80vh] space-y-4 overflow-y-auto">
          {activeDialog === "disclaimer" && (
            <DisclaimerContent onClose={() => setActiveDialog(null)} />
          )}

          {activeDialog === "privacy" && (
            <PrivacyContent onClose={() => setActiveDialog(null)} />
          )}

          {activeDialog === "terms" && (
            <TermsContent onClose={() => setActiveDialog(null)} />
          )}
        </div>
      </GlobalDialog>
    </footer>
  );
}
