"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { Headphones, Home, Mail } from "lucide-react";

import successAnimation from "@/public/assets/animations/check.json";
import { getAssetPath } from "@/lib/utils";

export default function ThankYouClient() {
  const [progress, setProgress] = useState(0);
  const [isBrochure, setIsBrochure] = useState(() => {
    try {
      return sessionStorage.getItem("isBrochureFlow") === "true";
    } catch {
      return false;
    }
  });
  const [brochureOpened, setBrochureOpened] = useState(false);

  /*
   * React Strict Mode mein effect development ke andar
   * do baar run ho sakta hai. Ye ref duplicate brochure
   * opening ko prevent karta hai.
   */
  const brochureProcessStarted = useRef(false);

  /* CHECK BROCHURE FLOW is initialized from sessionStorage synchronously
      to avoid a synchronous setState inside an effect. */

  /* =========================================================
     BROCHURE PROGRESS AND AUTO OPEN
  ========================================================= */

  useEffect(() => {
    if (!isBrochure) {
      return;
    }

    if (brochureProcessStarted.current) {
      return;
    }

    brochureProcessStarted.current = true;

    let currentProgress = 0;

    const progressInterval = window.setInterval(() => {
      currentProgress += 1;

      if (currentProgress <= 100) {
        setProgress(currentProgress);
      }

      if (currentProgress >= 100) {
        window.clearInterval(progressInterval);
      }
    }, 10);

    const brochureTimer = window.setTimeout(() => {
      const storedBrochureUrl = sessionStorage.getItem("brochureUrl");

      const brochureUrl =
        storedBrochureUrl?.trim() || getAssetPath("/assets/pdf/brochure.pdf");

      /*
       * New tab open karne ki koshish.
       */
      const newTab = window.open(brochureUrl, "_blank", "noopener,noreferrer");

      /*
       * Browser popup block kare to same tab mein brochure khulega.
       */
      if (!newTab) {
        window.location.href = brochureUrl;
        return;
      }

      setBrochureOpened(true);

      sessionStorage.removeItem("isBrochureFlow");
      sessionStorage.removeItem("brochureUrl");
    }, 1000);

    return () => {
      window.clearInterval(progressInterval);
      window.clearTimeout(brochureTimer);
    };
  }, [isBrochure]);

  /* =========================================================
     MANUAL BROCHURE OPEN
  ========================================================= */

  const handleOpenBrochure = () => {
    const storedBrochureUrl = sessionStorage.getItem("brochureUrl");

    const brochureUrl =
      storedBrochureUrl?.trim() || getAssetPath("/assets/pdf/brochure.pdf");

    window.open(brochureUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="mx-auto flex min-h-[calc(100vh-80px)] w-full items-center justify-center bg-gray-50 px-4 py-20">
      <div className="w-full max-w-sm overflow-hidden rounded-[30px] bg-white shadow-2xl transition-all duration-300 md:max-w-4xl">
        <div className="p-6 text-center md:p-12">
          {/* =================================================
              SUCCESS ANIMATION AND HEADING
          ================================================== */}

          <div className="mb-8 flex flex-col items-center">
            <div className="mb-4 h-32 w-32 md:h-40 md:w-40">
              <Lottie
                animationData={successAnimation}
                loop={false}
                autoplay
                className="h-full w-full"
              />
            </div>

            <p className="mb-2 text-xs font-bold tracking-widest text-[#8B7500]">
              INQUIRY SUCCESSFUL
            </p>

            <h1 className="mb-3 text-2xl font-bold text-[#1C3569] md:text-4xl">
              Thank You for Enquiring
            </h1>

            {/* =============================================
                BROCHURE DOWNLOAD PROGRESS
            ============================================== */}

            {isBrochure && (
              <div className="mx-auto mb-5 w-full max-w-lg">
                <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                  {brochureOpened
                    ? "Your brochure has been opened in a new tab."
                    : "Your brochure is being prepared. It will open automatically."}
                </p>

                {!brochureOpened && (
                  <>
                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full bg-[#22c55e] transition-all duration-75"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </div>

                    <p className="mt-2 text-xs text-gray-400">
                      Preparing your brochure... {progress}%
                    </p>
                  </>
                )}

                <button
                  type="button"
                  onClick={handleOpenBrochure}
                  className="mt-4 cursor-pointer text-sm font-semibold text-[#1C3569] underline underline-offset-4 transition-colors hover:text-[#8B7500]"
                >
                  Click here if the brochure does not open
                </button>
              </div>
            )}

            <p className="mx-auto max-w-lg text-sm leading-relaxed text-gray-600 md:text-base">
              Our counselor will contact you shortly to discuss your academic
              aspirations and guide you through the next steps.
            </p>
          </div>

          {/* =================================================
              INFORMATION BOXES
          ================================================== */}

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Check Inbox */}
            <div className="rounded-2xl border border-transparent bg-[#F1F5F9] p-5 text-left transition-all hover:border-[#FFC107]">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-white p-2 shadow-sm">
                  <Mail
                    className="text-[#8B7500]"
                    size={22}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-[#1C3569] md:text-base">
                    Check Your Inbox
                  </h2>

                  <p className="mt-1 text-xs leading-relaxed text-gray-600 md:text-sm">
                    We’ve sent a digital brochure and program details to your
                    registered email address.
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Guidance */}
            <div className="rounded-2xl border border-transparent bg-[#F1F5F9] p-5 text-left transition-all hover:border-[#FFC107]">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-white p-2 shadow-sm">
                  <Headphones
                    className="text-[#8B7500]"
                    size={22}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-[#1C3569] md:text-base">
                    Expert Guidance
                  </h2>

                  <p className="mt-1 text-xs leading-relaxed text-gray-600 md:text-sm">
                    Expect a call within the next 24 business hours from our
                    dedicated admissions desk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              ACTION BUTTON
          ================================================== */}

          <div className="mx-auto max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#FFC107] py-3.5 font-bold text-black transition-colors hover:bg-[#e6af06]"
              >
                <Home size={18} aria-hidden="true" />

                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
