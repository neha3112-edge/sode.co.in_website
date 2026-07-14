"use client";

import { useEffect, useState } from "react";
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
};

/* =========================================================
   FLOATING BUTTON
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
}: FloatingButtonProps) {
  const [open, setOpen] = useState(false);

  /* =========================================================
     OPEN FORM
  ========================================================= */

  const handleClick = () => {
    setOpen(true);

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
  };

  /* =========================================================
     CLOSE FORM
  ========================================================= */

  const handleClose = () => {
    setOpen(false);
  };

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =========================================================
     ESCAPE KEY CLOSE
  ========================================================= */

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [open]);

  return (
    <>
      {/* Gift button */}
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

      {/* Modal */}
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
            />
          </div>
        </div>
      )}
    </>
  );
}
