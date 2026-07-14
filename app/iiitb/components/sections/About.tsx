"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { Phone } from "lucide-react";

import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { Button } from "@/components/ui/Button";

import AboutIIITBImage from "../../assets/img/iiit-b-about-image.webp";

/* =========================================================
   TYPES
========================================================= */

type AboutFormType = "callback" | "counselling" | null;

type AboutFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

/* =========================================================
   IIIT BANGALORE COURSE OPTIONS

   label:
   User ko dropdown me full course name dikhega.

   value:
   Form submit hone par API payload me CERTIFICATE ya MSC jayega.
========================================================= */

const IIITB_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "CERTIFICATE",
    label: "Executive Programme in Generative AI for Leaders",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },
  {
    value: "CERTIFICATE",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Diploma in Machine Learning & Artificial Intelligence",
  },
  {
    value: "CERTIFICATE",
    label: "Chief Technology Officer & AI Leadership Programme",
  },
  {
    value: "MSC",
    label: "Master of Science in Machine Learning & Artificial Intelligence",
  },
  {
    value: "MSC",
    label:
      "Master of Science in Data Science Now integrated with Generative AI",
  },
];

/* =========================================================
   ABOUT COMPONENT
========================================================= */

export function About() {
  const [activeForm, setActiveForm] = useState<AboutFormType>(null);

  /* =========================================================
     LOCK BODY SCROLL WHEN MODAL IS OPEN
  ========================================================= */

  useEffect(() => {
    if (activeForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeForm]);

  /* =========================================================
     CLOSE MODAL ON ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveForm(null);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  /* =========================================================
     CLOSE FORM
  ========================================================= */

  const closeForm = () => {
    setActiveForm(null);
  };

  return (
    <>
      <section id="about-sode" className="w-full overflow-hidden bg-[#076493]">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[465px_minmax(0,1fr)]">
          {/* =================================================
              LEFT CAMPUS IMAGE
          ================================================== */}

          <div className="relative min-h-80 w-full sm:min-h-105 lg:min-h-125">
            <Image
              src={AboutIIITBImage}
              alt="IIIT Bangalore campus"
              fill
              sizes="(max-width: 1024px) 100vw, 465px"
              className="object-cover object-center"
            />
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div className="flex min-h-125 items-center bg-[#076493] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-10 xl:px-20">
            <div className="w-full max-w-175">
              <h2 className="text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-[38px]">
                About IIIT Bangalore
                <br />
                Online Courses
              </h2>

              <div className="mt-3 h-px w-full max-w-139.5 bg-white/80" />

              <p className="mt-8 max-w-172.5 text-sm leading-5.5 text-white sm:text-[15px] sm:leading-[1.55]">
                IIIT Bangalore is a premier technology institute established in
                1998, known for industry-focused education and strong academic
                depth. Its IIIT Bangalore online courses are designed for
                working professionals, combining academic rigor with real-world
                application. The institute offers carefully structured IIIT
                Bangalore certification courses in emerging technology domains,
                supported by expert faculty and industry mentors. Learners gain
                practical exposure through projects, case studies, and capstones
                that align skills with current business and technology needs.
              </p>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <div className="mt-7 grid w-full grid-cols-2 gap-2 sm:items-center md:w-120">
                <Button
                  size="lg"
                  type="button"
                  onClick={() => setActiveForm("callback")}
                  className="inline-flex min-h-10.5 items-center justify-center gap-2 rounded-md bg-[#d9250b] px-5 py-2.5 text-xs font-bold text-white cursor-pointer transition-colors duration-200 hover:bg-[#bd1f08] sm:w-auto md:text-sm"
                >
                  <Phone
                    size={15}
                    fill="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>Request Call Back</span>
                </Button>

                <Button
                  size="lg"
                  type="button"
                  onClick={() => setActiveForm("counselling")}
                  className="inline-flex cursor-pointer min-h-10.5 items-center justify-center rounded-md border border-white bg-transparent px-6 py-2.5 text-xs font-bold text-white transition-colors duration-200 hover:bg-white hover:text-[#076493] sm:w-auto md:text-sm"
                >
                  Get 1:1 FREE Counselling
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REQUEST CALL BACK POPUP
      ====================================================== */}

      {activeForm === "callback" && (
        <AboutFormModal title="Request Call Back" onClose={closeForm}>
          <FormWrapper
            title="Request Call Back"
            subtitle="Share your details and our academic expert will contact you"
            onClose={closeForm}
            courseOptions={IIITB_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="IIITB About Request Call Back Form"
            sourceOverride="IIITB LP"
            utmSourceFallback="Organic"
            utmMediumFallback="IIITB_Organic"
            submitButtonText="Request Call Back"
            showPhoneCallLink
          />
        </AboutFormModal>
      )}

      {/* =====================================================
          FREE COUNSELLING POPUP
      ====================================================== */}

      {activeForm === "counselling" && (
        <AboutFormModal title="Get Free Counselling" onClose={closeForm}>
          <FormWrapper
            title="Get 1:1 FREE Counselling"
            subtitle="Our academic experts will guide you step by step"
            onClose={closeForm}
            courseOptions={IIITB_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="IIITB About Free Counselling Form"
            sourceOverride="IIITB LP"
            utmSourceFallback="Organic"
            utmMediumFallback="IIITB_Organic"
            submitButtonText="Get Free Counselling"
          />
        </AboutFormModal>
      )}
    </>
  );
}

/* =========================================================
   ABOUT FORM MODAL
========================================================= */

function AboutFormModal({ title, children, onClose }: AboutFormModalProps) {
  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {children}
      </div>
    </div>
  );
}
