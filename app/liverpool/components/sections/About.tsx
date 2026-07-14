"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ChevronDown, Download, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type AboutFormType = "curriculum" | null;

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
];

/*
|--------------------------------------------------------------------------
| About Component
|--------------------------------------------------------------------------
*/

export function About() {
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
  | Scroll To Next Section
  |--------------------------------------------------------------------------
  */

  const handleKnowMore = () => {
    const nextSection = document.getElementById("program-journey");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    const aboutSection = document.getElementById("about");

    const followingSection = aboutSection?.nextElementSibling;

    followingSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
      <section id="about" className="bg-white py-12 sm:py-14 lg:py-[38px]">
        <Container>
          <div className="mx-auto max-w-[1140px] text-center">
            {/* =====================================================
                Heading
            ====================================================== */}

            <h2 className="text-[25px] font-black uppercase leading-[1.1] tracking-[-0.025em] text-black sm:text-[29px]">
              About <span className="text-[#24cbbb]">The Course</span>
            </h2>

            {/* =====================================================
                Description
            ====================================================== */}

            <div className="mx-auto mt-4 max-w-[1120px] space-y-5 text-[13px] font-medium leading-[1.25] text-[#171717] sm:text-[14px] lg:text-[15px]">
              <p>
                Liverpool Business School Online MBA program is an 18-month
                personalised and research-driven program that is designed to
                match the individual needs of all learners. The course offers a
                powerful combination of double credentials, which enables the
                learners to achieve an MBA from Liverpool Business School along
                with an Advanced General Management Certificate from IMT
                Ghaziabad.
              </p>

              <p>
                This LBS online MBA course is designed in such a format that
                allows learners to customize their own curriculum by selecting
                electives aligned with their interests and extended goals. The
                LBS MBA learning program aims to address the evidence-based
                needs of confident, capable senior managers. It helps them to
                combine strategic insight with strong operational excellence.
                Students also get access to unlock a strong global network,
                joining a community of 3,000+ alumni that provides valuable
                industry connections, insights, and career opportunities
                worldwide.
              </p>
            </div>

            {/* =====================================================
                Buttons
            ====================================================== */}

            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setActiveForm("curriculum")}
                className="inline-flex min-h-[42px] min-w-[185px] items-center justify-center gap-1.5 rounded-[5px] bg-[#24cbbb] px-5 py-2.5 text-[15px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1eb3a5] hover:shadow-md"
              >
                Get Curriculum
                <Download size={17} strokeWidth={2.8} />
              </button>

              <button
                type="button"
                onClick={handleKnowMore}
                className="inline-flex min-h-[42px] min-w-[148px] items-center justify-center gap-1 rounded-[5px] bg-black px-5 py-2.5 text-[15px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#222222] hover:shadow-md"
              >
                Know More
                <ChevronDown size={16} strokeWidth={3} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Curriculum Modal
      ============================================================== */}

      {activeForm === "curriculum" && (
        <AboutFormModal
          title="Get Liverpool MBA Curriculum"
          onClose={closeForm}
        >
          <FormWrapper
            title="Get Curriculum"
            subtitle="Fill your details to receive the Liverpool Online MBA curriculum"
            onClose={closeForm}
            courseOptions={LIVERPOOL_COURSES}
            defaultCourse="Online MBA"
            hideCourseField
            formNameOverride="Liverpool About Curriculum Form"
            sourceOverride="Liverpool About Course Section"
            utmSourceFallback="Liverpool Organic"
            utmMediumFallback="Liverpool Curriculum Button"
            submitButtonText="Get Curriculum"
            submitButtonClassName="!bg-[#24cbbb] hover:!bg-[#1eb3a5]"
          />
        </AboutFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| About Form Modal
|--------------------------------------------------------------------------
*/

type AboutFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function AboutFormModal({ title, children, onClose }: AboutFormModalProps) {
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
          aria-label="Close curriculum form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#e9fbf9] text-[#1eb3a5] transition-colors hover:bg-[#d5f6f2]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
