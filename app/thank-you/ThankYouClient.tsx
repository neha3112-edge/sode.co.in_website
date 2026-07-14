"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { Headphones, Home, Mail } from "lucide-react";

import successAnimation from "@/public/assets/animations/check.json";
import { getAssetPath } from "@/lib/utils";

/* =========================================================
   SUPPORTED GOOGLE ADS CONVERSION SOURCES
========================================================= */

type ConversionSource = "iimk" | "iiitb" | "lp";

/* =========================================================
   GOOGLE TAG ARGUMENT TYPES
========================================================= */

type GoogleTagArguments = [
  command: "event" | "config" | "js",
  action: string | Date,
  parameters?: Record<string, unknown>,
];

/* =========================================================
   WINDOW GLOBAL TYPES
========================================================= */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: GoogleTagArguments) => void;
  }
}

/* =========================================================
   GOOGLE ADS CONVERSION LABELS

   iimk:
   SODE IIM Kozhikode conversion

   iiitb:
   SODE IIIT Bangalore conversion

   lp:
   SODE main landing-page conversion
========================================================= */

const GOOGLE_ADS_CONVERSION_LABELS: Record<ConversionSource, string> = {
  iimk: "AW-17946162864/M_ZICKbCrNAcELDtsu1C",
  iiitb: "AW-17946162864/j5BSCL-P3sgcELDtsu1C",
  lp: "AW-17946162864/sLquCMiuu8YcELDtsu1C",
};

/* =========================================================
   VALIDATE CONVERSION SOURCE
========================================================= */

function isConversionSource(source: string | null): source is ConversionSource {
  return source === "iimk" || source === "iiitb" || source === "lp";
}

/* =========================================================
   THANK YOU CLIENT COMPONENT
========================================================= */

export default function ThankYouClient() {
  const [progress, setProgress] = useState(0);
  const [isBrochure, setIsBrochure] = useState(false);
  const [brochureOpened, setBrochureOpened] = useState(false);
  const [isClientReady, setIsClientReady] = useState(false);

  /*
   * React Strict Mode development me effects ko dobara run kar sakta hai.
   *
   * brochureProcessStarted:
   * Brochure ko duplicate open hone se rokta hai.
   *
   * conversionSent:
   * Google Ads conversion ko duplicate fire hone se rokta hai.
   */

  const brochureProcessStarted = useRef(false);
  const conversionSent = useRef(false);

  /* =========================================================
     INITIALIZE CLIENT-SIDE VALUES
  ========================================================= */

  useEffect(() => {
    try {
      const brochureFlow = sessionStorage.getItem("isBrochureFlow") === "true";

      setIsBrochure(brochureFlow);
    } catch (error) {
      console.error("Unable to read brochure session:", error);

      setIsBrochure(false);
    } finally {
      setIsClientReady(true);
    }
  }, []);

  /* =========================================================
     GOOGLE ADS CONVERSION TRACKING

     Supported URLs:

     /thank-you?source=iimk
     /thank-you?source=iiitb
     /thank-you?source=lp
  ========================================================= */

  useEffect(() => {
    if (conversionSent.current) {
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);

    const querySource =
      searchParams.get("source")?.trim().toLowerCase() ?? null;

    /*
     * Query parameter missing ho to sessionStorage fallback use hoga.
     */

    let storedSource: string | null = null;

    try {
      storedSource =
        sessionStorage.getItem("conversionSource")?.trim().toLowerCase() ??
        null;
    } catch (error) {
      console.error("Unable to read conversion source:", error);
    }

    /*
     * Priority:
     *
     * 1. URL query parameter
     * 2. sessionStorage conversionSource
     */

    const source = isConversionSource(querySource)
      ? querySource
      : isConversionSource(storedSource)
        ? storedSource
        : null;

    if (!source) {
      console.warn(
        "Google Ads conversion was not sent because conversion source is missing or invalid.",
      );

      return;
    }

    const sendTo = GOOGLE_ADS_CONVERSION_LABELS[source];

    /*
     * Current browser tab/session me same source ki conversion
     * dobara fire nahi hogi.
     *
     * Example keys:
     *
     * googleAdsConversionSent:iimk
     * googleAdsConversionSent:iiitb
     * googleAdsConversionSent:lp
     */

    const conversionSessionKey = `googleAdsConversionSent:${source}`;

    try {
      const alreadySent =
        sessionStorage.getItem(conversionSessionKey) === "true";

      if (alreadySent) {
        conversionSent.current = true;

        return;
      }
    } catch (error) {
      console.error("Unable to check Google Ads conversion state:", error);
    }

    conversionSent.current = true;

    /*
     * Google tag script layout me load hona chahiye.
     *
     * Ye fallback ensure karta hai ki gtag function missing hone par
     * event dataLayer me queue ho jaye.
     */

    window.dataLayer = window.dataLayer || [];

    window.gtag =
      window.gtag ||
      function gtag(...args: GoogleTagArguments) {
        window.dataLayer.push(args);
      };

    /*
     * Equivalent Google Ads event:
     *
     * gtag("event", "conversion", {
     *   send_to: "AW-17946162864/CONVERSION_LABEL",
     * });
     */

    window.gtag("event", "conversion", {
      send_to: sendTo,
    });

    try {
      sessionStorage.setItem(conversionSessionKey, "true");

      sessionStorage.removeItem("conversionSource");
    } catch (error) {
      console.error("Unable to store Google Ads conversion state:", error);
    }

    console.info(`Google Ads conversion event sent for source: ${source}`);
  }, []);

  /* =========================================================
     GET BROCHURE URL
  ========================================================= */

  const getBrochureUrl = useCallback(() => {
    try {
      const storedBrochureUrl = sessionStorage.getItem("brochureUrl");

      return (
        storedBrochureUrl?.trim() || getAssetPath("/assets/pdf/brochure.pdf")
      );
    } catch (error) {
      console.error("Unable to read brochure URL from session:", error);

      return getAssetPath("/assets/pdf/brochure.pdf");
    }
  }, []);

  /* =========================================================
     CLEAR BROCHURE SESSION
  ========================================================= */

  const clearBrochureSession = useCallback(() => {
    try {
      sessionStorage.removeItem("isBrochureFlow");
      sessionStorage.removeItem("brochureUrl");
    } catch (error) {
      console.error("Unable to clear brochure session:", error);
    }
  }, []);

  /* =========================================================
     BROCHURE PROGRESS AND AUTO OPEN
  ========================================================= */

  useEffect(() => {
    if (!isClientReady || !isBrochure) {
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
      const brochureUrl = getBrochureUrl();

      /*
       * New tab me brochure open karne ki koshish.
       */

      const newTab = window.open(brochureUrl, "_blank", "noopener,noreferrer");

      /*
       * Browser popup block kare to same tab me brochure open hoga.
       */

      if (!newTab) {
        clearBrochureSession();

        window.location.assign(brochureUrl);

        return;
      }

      setBrochureOpened(true);

      clearBrochureSession();
    }, 1000);

    return () => {
      window.clearInterval(progressInterval);
      window.clearTimeout(brochureTimer);
    };
  }, [clearBrochureSession, getBrochureUrl, isBrochure, isClientReady]);

  /* =========================================================
     MANUAL BROCHURE OPEN
  ========================================================= */

  const handleOpenBrochure = () => {
    const brochureUrl = getBrochureUrl();

    const newTab = window.open(brochureUrl, "_blank", "noopener,noreferrer");

    if (!newTab) {
      clearBrochureSession();

      window.location.assign(brochureUrl);

      return;
    }

    setBrochureOpened(true);

    clearBrochureSession();
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

            {isClientReady && isBrochure && (
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
