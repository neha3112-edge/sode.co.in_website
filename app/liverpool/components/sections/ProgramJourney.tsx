"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { LIVERPOOL_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type JourneyStep = {
  id: number;
  step: string;
  title: string;
  duration: string;
  description: string;
  logo: string;
  logoAlt: string;
  borderColor: string;
  badgeTextColor: string;
};

type JourneyFormType = "counselling" | null;

/*
|--------------------------------------------------------------------------
| Program Journey Data (Matching layout.png exactly)
|--------------------------------------------------------------------------
*/

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    step: "Step 01",
    title: "Executive Programme in Business Management & AI Leadership",
    duration: "(11 Months)",
    description:
      "In the IIM-Udaipur phase of 11 months, learners build expertise in leadership, business strategy, finance, marketing, operations, and AI-driven decision-making through an industry-focused curriculum, real-world applications, and expert-led learning.",
    logo: "/liverpool/assets/img/IIMU icon.webp",
    logoAlt: "IIM Udaipur logo",
    borderColor: "border-[#2b1f8f]",
    badgeTextColor: "text-[#2b1f8f]",
  },
  {
    id: 2,
    step: "Step 02",
    title: "MBA Specialisations",
    duration: "(2 Months)",
    description:
      "During the 2-month LBS Online MBA phase, learners choose one specialisation and gain advanced, hands-on expertise through focused courses and practical tools. The MBA Liverpool Online specialisation phase helps learners develop domain skills, analytics capabilities, and real-world industry applications through the MBA in Liverpool learning experience.",
    logo: "/liverpool/assets/img/lbs-logo-696b29d4429b8.webp",
    logoAlt: "Liverpool Business School logo",
    borderColor: "border-[#ff7a1a]",
    badgeTextColor: "text-[#ff7a1a]",
  },
  {
    id: 3,
    step: "Step 03",
    title: "Applied Business Research",
    duration: "(1 Month)",
    description:
      "In the 1-month LBS MBA learning phase in Applied Research, students master research methodologies, explore diverse approaches, manage projects, and enhance thesis report writing through the Liverpool online MBA learning experience.",
    logo: "/liverpool/assets/img/lbs-logo-696b29d4429b8.webp",
    logoAlt: "Liverpool Business School logo",
    borderColor: "border-[#0d6a9a]",
    badgeTextColor: "text-[#0d6a9a]",
  },
  {
    id: 4,
    step: "Step 04",
    title: "Strategic Business Consultancy Project",
    duration: "(3 Months)",
    description:
      "In the 3-month MBA in Liverpool University phase, the Strategic Business Consultancy Project, Professionals apply research insights to consultancy projects, solving industry-specific challenges in BFSI, FMCG, IT, automotive, and e-commerce.",
    logo: "/liverpool/assets/img/lbs-logo-696b29d4429b8.webp",
    logoAlt: "Liverpool Business School logo",
    borderColor: "border-[#ffbc00]",
    badgeTextColor: "text-[#ffbc00]",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function ProgramJourney() {
  const [activeForm, setActiveForm] = useState<JourneyFormType>(null);

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeForm ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeForm]);

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
        id="program-journey"
        className="bg-white py-14 sm:py-16"
      >
        <Container className="max-w-[1300px]">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#00499b] sm:text-4xl">
              MBA Program Journey
            </h2>
            <p className="mt-2 text-sm text-gray-500 font-medium sm:text-base">
              LBS MBA Pathway + IIM-U
            </p>
          </div>

          {/* Journey Grid */}
          <div className="mt-14 relative">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
              {journeySteps.map((item, index) => {
                return (
                  <div key={item.id} className="relative flex flex-col h-full">
                    {/* Dotted horizontal connector on desktop (placed between cards) */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute -right-8 top-[50%] z-0 w-8 border-t-2 border-dotted border-gray-400" />
                    )}

                    <JourneyCard item={item} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setActiveForm("counselling")}
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#002b5c] px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#001f44] hover:shadow-lg"
            >
              Get 1:1 Counseling
              <ArrowRight size={16} />
            </button>
          </div>
        </Container>
      </section>

      {/* Counseling Modal */}
      {activeForm === "counselling" && (
        <div
          role="presentation"
          onClick={closeForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Get Free Counseling"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[400px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
          >
            <FormWrapper
              title="Get 1:1 Free Counseling"
              subtitle="Share your details and our expert counselors will guide you through the process"
              onClose={closeForm}
              courseOptions={LIVERPOOL_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="Liverpool Journey Counseling Form"
              sourceOverride="Liverpool LP"
              utmSourceFallback="Liverpool Organic"
              utmMediumFallback="Liverpool Journey Counseling Button"
              submitButtonText="Get Counseling"
              submitButtonClassName="bg-[#00499b] hover:bg-[#003d83] text-white"
              redirectUrl="/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Journey Card Component (Sitting on border overlap layout)
|--------------------------------------------------------------------------
*/

type JourneyCardProps = {
  item: JourneyStep;
};

function JourneyCard({ item }: JourneyCardProps) {
  return (
    <article
      className={`relative z-10 flex flex-col h-full bg-white px-5 pt-10 pb-6 rounded-2xl border-2 ${item.borderColor} shadow-[0_4px_24px_rgba(0,0,0,0.03)]`}
    >
      {/* Overlapping Step Badge */}
      <span
        className={`absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-4 py-0.5 text-[20px] font-extrabold uppercase tracking-wider ${item.badgeTextColor}`}
      >
        {item.step}
      </span>

      {/* Logo */}
      <div className="relative mb-6 flex h-16 w-full items-start">
        <Image
          src={getAssetPath(item.logo)}
          alt={item.logoAlt}
          width={150}
          height={65}
          className="max-h-16 w-auto object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-extrabold leading-snug text-gray-900 min-h-10 text-left">
        {item.title}
      </h3>

      {/* Duration */}
      <span className="text-xs font-semibold text-gray-800 mt-2 block text-left">
        {item.duration}
      </span>

      {/* Description */}
      <p className="mt-4 text-[12px] leading-relaxed text-gray-600 text-left flex-1">
        {item.description}
      </p>
    </article>
  );
}
