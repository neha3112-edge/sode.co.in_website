"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Phone, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type AboutFormType = "callback" | null;

/*
|--------------------------------------------------------------------------
| Liverpool Course Options
|--------------------------------------------------------------------------
*/

const LIVERPOOL_COURSES: FormCourseOption[] = [
  {
    value: "Online MBA",
    label: "Online MBA",
  },
  {
    value: "MBA in Leadership",
    label: "MBA in Leadership",
  },
  {
    value: "MBA in Business Analytics",
    label: "MBA in Business Analytics",
  },
  {
    value: "MBA in Marketing",
    label: "MBA in Marketing",
  },
  {
    value: "MBA in Finance",
    label: "MBA in Finance",
  },
  {
    value: "MBA in Human Resource Management",
    label: "MBA in Human Resource Management",
  },
  {
    value: "MBA in Operations and Supply Chain Management",
    label: "MBA in Operations and Supply Chain Management",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function AboutLbs() {
  const [activeForm, setActiveForm] = useState<AboutFormType>(null);

  /*
  |--------------------------------------------------------------------------
  | Close Form
  |--------------------------------------------------------------------------
  */

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Body Scroll Lock
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.body.style.overflow = activeForm ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeForm]);

  /*
  |--------------------------------------------------------------------------
  | Escape Key Close
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!activeForm) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeForm();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeForm, closeForm]);

  return (
    <>
      <section
        id="about-lbs"
        className="relative min-h-[430px] overflow-hidden bg-black text-white"
      >
        {/* =========================================================
            Background Image
        ========================================================== */}

        <Image
          src={getAssetPath("/assets/images/liverpool-about-campus.webp")}
          alt="Liverpool John Moores University campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* =========================================================
            Grayscale Layer
        ========================================================== */}

        <div className="absolute inset-0 bg-black/20 backdrop-grayscale" />

        {/* =========================================================
            Left Dark Gradient Overlay
        ========================================================== */}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.91)_26%,rgba(0,0,0,0.74)_39%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.08)_73%,rgba(0,0,0,0)_100%)]" />

        {/* =========================================================
            Mobile Overlay
        ========================================================== */}

        <div className="absolute inset-0 bg-black/55 lg:hidden" />

        <Container className="relative z-10">
          <div className="flex min-h-[430px] items-center py-10 sm:py-12 lg:py-[42px]">
            <div className="w-full max-w-[565px]">
              {/* =====================================================
                  Heading
              ====================================================== */}

              <h2 className="text-[27px] font-black uppercase leading-none tracking-[-0.02em] text-white sm:text-[31px]">
                About LBS
              </h2>

              {/* =====================================================
                  Description
              ====================================================== */}

              <div className="mt-5 space-y-5 text-[13px] font-medium leading-[1.18] text-white sm:text-[14px] lg:text-[15px]">
                <p>
                  Liverpool Business School (LBS), an esteemed school within
                  Liverpool John Moores University (LJMU). This institute has
                  over three decades of excellence in business education. It is
                  part of one of the UK&apos;s leading and prestigious
                  institutions, renowned for academic excellence, impactful
                  research, and strong industry relevance.
                </p>

                <p>
                  This globally recognised Online MBA program helps learners to
                  fast-track their career from Liverpool Business School, paired
                  with an Advanced General Management Certificate from IMT
                  Ghaziabad. The course grants double credentials and alumni
                  status. Through LBS online MBA syllabus professionals get an
                  opportunity to customise their curriculum with electives that
                  match their interests. They gain hands-on experience through
                  10+ HBR case studies and simulations, and join a thriving
                  global network of 3,000+ alumni.
                </p>
              </div>

              {/* =====================================================
                  Request Call Back Button
              ====================================================== */}

              <button
                type="button"
                onClick={() => setActiveForm("callback")}
                className="mt-6 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[5px] bg-[#27cec2] px-5 py-2.5 text-[16px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1fb9ae] hover:shadow-lg"
              >
                <Phone size={17} fill="currentColor" strokeWidth={2} />
                Request Call Back
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Callback Modal
      ============================================================== */}

      {activeForm === "callback" && (
        <AboutLbsModal title="Request Call Back" onClose={closeForm}>
          <FormWrapper
            title="Request Call Back"
            subtitle="Share your details and our academic experts will contact you"
            onClose={closeForm}
            courseOptions={LIVERPOOL_COURSES}
            defaultCourse="Online MBA"
            formNameOverride="Liverpool About LBS Callback Form"
            sourceOverride="Liverpool About LBS Section"
            utmSourceFallback="Liverpool Organic"
            utmMediumFallback="Liverpool About Callback Button"
            submitButtonText="Request Call Back"
            submitButtonClassName="!bg-[#27cec2] hover:!bg-[#1fb9ae]"
          />
        </AboutLbsModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Modal
|--------------------------------------------------------------------------
*/

type AboutLbsModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function AboutLbsModal({ title, children, onClose }: AboutLbsModalProps) {
  return (
    <div
      role="presentation"
      onMouseDown={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          aria-label="Close callback form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#e9fbf9] text-[#18a99e] transition-colors hover:bg-[#d5f5f2]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
