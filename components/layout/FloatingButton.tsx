"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { X } from "lucide-react";

import { getAssetPath } from "@/lib/utils";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";

/* =========================================================
   PROPS
========================================================= */

export type FloatingButtonProps = {
  courseOptions?: FormCourseOption[];

  title?: string;
  subtitle?: string;

  formNameOverride?: string;
  sourceOverride?: string;

  utmSourceFallback?: string;
  utmMediumFallback?: string;

  submitButtonText?: string;
  submitButtonClassName?: string;

  /*
   * Page kitne percent scroll hone par form auto-open hoga.
   * Example: 45
   *
   * null ya undefined dene par auto-open disable rahega.
   */
  autoOpenAtScrollPercent?: number | null;

  /*
   * Auto-open ko current browser tab/session me sirf ek baar
   * chalane ke liye unique key.
   */
  autoOpenSessionKey?: string;

  /*
   * Auto-open hone par confetti chalani hai ya nahi.
   */
  showConfettiOnAutoOpen?: boolean;
};

/* =========================================================
   HELPERS
========================================================= */

function clampPercentage(value: number) {
  return Math.min(100, Math.max(0, value));
}

function getPageScrollPercentage() {
  const documentElement = document.documentElement;

  const scrollTop =
    window.scrollY || documentElement.scrollTop || document.body.scrollTop || 0;

  const scrollableHeight = documentElement.scrollHeight - window.innerHeight;

  if (scrollableHeight <= 0) {
    return 100;
  }

  return (scrollTop / scrollableHeight) * 100;
}

/* =========================================================
   FLOATING BUTTON COMPONENT
========================================================= */

export default function FloatingButton({
  courseOptions = [],

  title = "Get Scholarship Coupon Code",
  subtitle = "Our experts will contact you",

  formNameOverride = "Scholarship Floating Form",
  sourceOverride = "Website Floating Button",

  utmSourceFallback = "Organic",
  utmMediumFallback = "Floating Scholarship Button",

  submitButtonText = "Get Coupon Code",
  submitButtonClassName = "bg-[#1C3569] hover:bg-[#162a54]",

  autoOpenAtScrollPercent = null,
  autoOpenSessionKey = "scholarship-floating-form-auto-opened",
  showConfettiOnAutoOpen = true,
}: FloatingButtonProps) {
  const [open, setOpen] = useState(false);

  /*
   * React Strict Mode aur repeated scroll events se duplicate
   * auto-open prevent karega.
   */
  const autoOpenTriggeredRef = useRef(false);

  /* =========================================================
     CONFETTI EFFECT
  ========================================================= */

  const runConfetti = useCallback(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: {
        y: 0.6,
      },
    });

    window.setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: {
          x: 0,
        },
      });

      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: {
          x: 1,
        },
      });
    }, 300);
  }, []);

  /* =========================================================
     OPEN FORM
  ========================================================= */

  const openForm = useCallback(
    (withConfetti = true) => {
      setOpen(true);

      if (withConfetti) {
        runConfetti();
      }
    },
    [runConfetti],
  );

  /* =========================================================
     MANUAL BUTTON CLICK
  ========================================================= */

  const handleClick = () => {
    openForm(true);
  };

  /* =========================================================
     CLOSE FORM
  ========================================================= */

  const handleClose = () => {
    setOpen(false);
  };

  /* =========================================================
     AUTO-OPEN FORM AFTER PAGE SCROLL
  ========================================================= */

  useEffect(() => {
    if (
      autoOpenAtScrollPercent === null ||
      autoOpenAtScrollPercent === undefined
    ) {
      return;
    }

    const requiredScrollPercentage = clampPercentage(autoOpenAtScrollPercent);

    /*
     * Current session me pehle auto-open ho chuka hai ya nahi.
     */
    try {
      const alreadyOpened =
        sessionStorage.getItem(autoOpenSessionKey) === "true";

      if (alreadyOpened) {
        autoOpenTriggeredRef.current = true;
        return;
      }
    } catch (error) {
      console.error("Unable to read floating form auto-open session:", error);
    }

    const handleScroll = () => {
      if (autoOpenTriggeredRef.current || open) {
        return;
      }

      const currentScrollPercentage = getPageScrollPercentage();

      if (currentScrollPercentage < requiredScrollPercentage) {
        return;
      }

      autoOpenTriggeredRef.current = true;

      try {
        sessionStorage.setItem(autoOpenSessionKey, "true");
      } catch (error) {
        console.error("Unable to save floating form auto-open session:", error);
      }

      openForm(showConfettiOnAutoOpen);

      window.removeEventListener("scroll", handleScroll);
    };

    /*
     * Scroll listener performance ke liye passive rakha hai.
     */
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    /*
     * Agar user page refresh ke baad already 45% se neeche hai,
     * to initial check form auto-open kar dega.
     */
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    autoOpenAtScrollPercent,
    autoOpenSessionKey,
    open,
    openForm,
    showConfettiOnAutoOpen,
  ]);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /* =========================================================
     ESCAPE KEY CLOSE
  ========================================================= */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          GIFT FLOATING BUTTON
      ====================================================== */}

      <button
        type="button"
        onClick={handleClick}
        aria-label="Get scholarship coupon code"
        title="Get Scholarship Coupon Code"
        className="
          relative
          flex h-14 w-14 shrink-0
          cursor-pointer items-center justify-center
          rounded-full bg-white
          shadow-md
          transition-all duration-300
          hover:scale-110
          hover:shadow-lg
          focus:outline-none
          focus:ring-4
          focus:ring-[#1C3569]/20
        "
      >
        <Image
          src={getAssetPath("/assets/images/unnamed (1).gif")}
          alt="Get scholarship coupon code"
          width={48}
          height={48}
          unoptimized
          className="h-12 w-12 rounded-full object-contain"
        />
      </button>

      {/* =====================================================
          SCHOLARSHIP MODAL
      ====================================================== */}

      {open && (
        <div
          role="presentation"
          onClick={handleClose}
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            bg-black/60 p-4
            backdrop-blur-sm
          "
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(event) => event.stopPropagation()}
            className="
              relative
              max-h-[92vh] w-full max-w-md
              overflow-y-auto
              rounded-2xl bg-white p-6
              shadow-2xl
              animate-[scaleIn_0.2s_ease]
            "
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close scholarship form"
              className="
                absolute right-4 top-4 z-20
                flex h-9 w-9 cursor-pointer
                items-center justify-center
                rounded-full bg-gray-100
                text-gray-700
                transition-colors duration-200
                hover:bg-gray-200 hover:text-black
              "
            >
              <X size={20} aria-hidden="true" />
            </button>

            <FormWrapper
              title={title}
              subtitle={subtitle}
              onClose={handleClose}
              defaultCourse=""
              courseOptions={courseOptions}
              formNameOverride={formNameOverride}
              sourceOverride={sourceOverride}
              utmSourceFallback={utmSourceFallback}
              utmMediumFallback={utmMediumFallback}
              submitButtonText={submitButtonText}
              submitButtonClassName={submitButtonClassName}
              redirectUrl="/thank-you?source=iiitb"
            />
          </div>
        </div>
      )}
    </>
  );
}
