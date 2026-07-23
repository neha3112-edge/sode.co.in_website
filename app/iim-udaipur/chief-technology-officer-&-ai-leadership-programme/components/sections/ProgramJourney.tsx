"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

import FormWrapper from "@/components/forms/FormWrapper";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";
import { IIMU_COURSE_OPTIONS } from "../../constants";

type JourneyStep = {
  step: string;
  title: string;
  duration: string;
  desc: string;
  logo: string;
  textColor: string;
};

const steps: JourneyStep[] = [
  {
    step: "Step 01",
    title: "Deep-Tech & AI Technical Authority",
    duration: "(Months 1-3 | IIIT Bangalore)",
    logo: "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/IIITB_logo_with_Institute_Name.png",
    desc: "Learners develop strong foundations in enterprise AI, GenAI, Agentic AI workflows, production MLOps, LLMOps, cloud architecture, distributed systems, and cyber resilience to build the technical capabilities required for modern technology leadership.",
    textColor: "text-[#01519A]",
  },
  {
    step: "Step 02",
    title: "Bridge Session",
    duration: "(IIIT Bangalore + IIM Udaipur)",
    logo: "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/IIITB_logo_with_Institute_Name.png",
    desc: "Participants learn to translate AI and technology investments into business value through strategic frameworks, ROI modelling, product-tech alignment, and executive decision-making approaches through the CTO AI leadership program.",
    textColor: "text-[#E27E36]",
  },
  {
    step: "Step 03",
    title: "Business Strategy & P&L Leadership",
    duration: "(Months 4-6 | IIM Udaipur)",
    logo: "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/IIITB_logo_with_Institute.png",
    desc: "Learners develop expertise in AI-led business strategy, technology economics, P&L ownership, boardroom communication, organisation design, and leadership with AI to prepare for enterprise-level responsibilities.",
    textColor: "text-[#01519A]",
  },
  {
    step: "Step 04",
    title: "Capstone – Board-Ready Strategic Dossier",
    duration: "(IIIT Bangalore)",
    logo: "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/programme/img/../../img/IIITB_logo_with_Institute_Name.png",
    desc: "Participants create a comprehensive CTO portfolio covering platform architecture, enterprise AI opportunity mapping, technology investment cases, product strategy roadmap, AI-ready organisation blueprint, and a board-level presentation deck.",
    textColor: "text-[#F7B92A]",
  },
];

type JourneyFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function ProgramJourney() {
  const [formOpen, setFormOpen] = useState(false);

  /* =========================================================
     LOCK BODY SCROLL WHEN MODAL IS OPEN
  ========================================================= */

  useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [formOpen]);

  /* =========================================================
     CLOSE MODAL ON ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFormOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <section id="program-journey" className="bg-[#fcfdfe] py-14 sm:py-16 lg:py-14 border-b border-gray-100">
        <Container>
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#01519A] sm:text-[34px]">
              CTO &amp; AI Leadership Programme Journey
            </h2>
            <p className="mt-2 text-sm font-semibold text-gray-700 sm:text-base">
              (IIIT Bangalore + IIM Udaipur)
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col">
                {/* Dashed Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-[45%] -right-6 z-0 hidden w-10 border-t border-dashed border-gray-900 lg:block" />
                )}

                {/* Card Container */}
                <div className="relative flex flex-1 flex-col rounded-[12px] border border-gray-500 bg-white p-6 pt-8 shadow-sm">
                  {/* Step Title Label */}
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white px-3 text-xl font-extrabold tracking-wide ${step.textColor}`}
                  >
                    {step.step}
                  </span>

                  {/* Logo Image */}
                  <div className="relative h-[55px] w-full max-w-[150px] shrink-0">
                    <Image
                      src={getAssetPath(step.logo)}
                      alt="Institute logo"
                      fill
                      sizes="210px"
                      className="object-contain object-left"
                    />
                  </div>

                  {/* Step Details */}
                  <h3 className="mt-6 text-[14px] font-extrabold text-black leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs font-semibold text-gray-700">
                    {step.duration}
                  </p>

                  <p className="mt-4 text-[12px] leading-5 text-gray-600 flex-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Centered CTA Button */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setFormOpen(true)}
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg bg-[#0757a4] hover:bg-[#064987] px-8 py-3.5 text-sm font-bold text-white transition-colors duration-200 shadow-sm"
            >
              Get 1:1 Counseling &rarr;
            </button>
          </div>
        </Container>
      </section>

      {/* =====================================================
          COUNSELLING POPUP FORM
      ====================================================== */}

      {formOpen && (
        <JourneyFormModal title="Get Counselling" onClose={closeForm}>
          <FormWrapper
            title="Get 1:1 Free Counselling"
            subtitle="Our academic experts will guide you step by step"
            onClose={closeForm}
            defaultCourse=""
            courseOptions={IIMU_COURSE_OPTIONS}
            formNameOverride="IIMU Program Journey Counselling Form"
            sourceOverride="IIMU LP"
            utmSourceFallback="Organic"
            utmMediumFallback="IIMU_Organic"
            submitButtonText="Get Counselling"
            redirectUrl="/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/thank-you"
          />
        </JourneyFormModal>
      )}
    </>
  );
}

function JourneyFormModal({ title, children, onClose }: JourneyFormModalProps) {
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
