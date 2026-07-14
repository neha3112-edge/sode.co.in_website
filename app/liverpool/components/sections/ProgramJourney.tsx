"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ArrowRight, X } from "lucide-react";

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

type JourneyStep = {
  id: number;
  step: string;
  title: string;
  duration: string;
  description: string;
  logo: string;
  logoAlt: string;
  accentClass: string;
};

type JourneyFormType = "counselling" | null;

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
| Program Journey Data
|--------------------------------------------------------------------------
*/

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    step: "Step 01",
    title: "Advanced General Management Certificate From IMT Ghaziabad",
    duration: "(11 Months)",
    description:
      "Over 11 months at IMT Ghaziabad, learners gain practical exposure to core management disciplines, real business challenges, and strategic decision-making, supported by 10+ HBR case studies and simulations.",
    logo: "/assets/images/imt-ghaziabad-logo.webp",
    logoAlt: "Institute of Management Technology Ghaziabad",
    accentClass: "text-[#2b1f8f]",
  },
  {
    id: 2,
    step: "Step 02",
    title: "MBA Specialisations",
    duration: "(2 Months)",
    description:
      "During the 2-month LBS Online MBA phase, learners choose one specialisation and gain advanced, hands-on expertise through focused courses and practical tools. They also develop skills in analytics and real-world, industry-relevant applications.",
    logo: "/assets/images/liverpool-business-school-logo.webp",
    logoAlt: "Liverpool Business School",
    accentClass: "text-[#ff5600]",
  },
  {
    id: 3,
    step: "Step 03",
    title: "Applied Business Research",
    duration: "(1 Month)",
    description:
      "In the 1-month LBS MBA learning phase in Applied Research, students master research methodologies, explore diverse approaches, manage projects and enhance thesis report writing, analysis and presentation skills.",
    logo: "/assets/images/liverpool-business-school-logo.webp",
    logoAlt: "Liverpool Business School",
    accentClass: "text-[#0d6a9a]",
  },
  {
    id: 4,
    step: "Step 04",
    title: "Strategic Business Consultancy Project",
    duration: "(3 Months)",
    description:
      "During the 3-month LBS Strategic Business Consultancy Project, professionals apply research insights to consultancy projects, solving industry-specific challenges in BFSI, FMCG, IT, automotive, and e-commerce.",
    logo: "/assets/images/liverpool-business-school-logo.webp",
    logoAlt: "Liverpool Business School",
    accentClass: "text-[#ffbc00]",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function ProgramJourney() {
  const [activeForm, setActiveForm] = useState<JourneyFormType>(null);

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
  | Lock Body Scroll
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
  | Close With Escape Key
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
        id="program-journey"
        className="bg-white py-12 sm:py-14 lg:py-[42px]"
      >
        <Container className="max-w-[1800px]">
          {/* =========================================================
              Heading
          ========================================================== */}

          <div className="text-center">
            <h2 className="text-[34px] font-black leading-none tracking-[-0.035em] text-[#1f3f8f] sm:text-[44px] lg:text-[54px]">
              MBA Program Journey
            </h2>

            <p className="mt-5 text-[22px] font-medium leading-none text-black sm:text-[27px] lg:text-[31px]">
              LBS MBA Pathway + IMT-G
            </p>
          </div>

          {/* =========================================================
              Journey Cards
          ========================================================== */}

          <div className="relative mt-14 lg:mt-[78px]">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[54px]">
              {journeySteps.map((item, index) => (
                <JourneyCard
                  key={item.id}
                  item={item}
                  showConnector={index !== journeySteps.length - 1}
                />
              ))}
            </div>
          </div>

          {/* =========================================================
              Counselling Button
          ========================================================== */}

          <div className="mt-12 flex justify-center sm:mt-14">
            <button
              type="button"
              onClick={() => setActiveForm("counselling")}
              className="inline-flex min-h-[50px] min-w-[230px] items-center justify-center gap-2 rounded-[6px] bg-[#03d8cf] px-7 py-3 text-[16px] font-extrabold text-[#083b72] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00c5bd] hover:shadow-lg"
            >
              Get 1:1 Counselling
              <ArrowRight size={17} strokeWidth={2.8} />
            </button>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Counselling Modal
      ============================================================== */}

      {activeForm === "counselling" && (
        <JourneyFormModal title="Get 1:1 Counselling" onClose={closeForm}>
          <FormWrapper
            title="Get 1:1 Counselling"
            subtitle="Our academic experts will help you understand the complete Liverpool MBA journey"
            onClose={closeForm}
            courseOptions={LIVERPOOL_COURSES}
            defaultCourse="Online MBA"
            hideCourseField
            formNameOverride="Liverpool Program Journey Counselling Form"
            sourceOverride="Liverpool Program Journey Section"
            utmSourceFallback="Liverpool Organic"
            utmMediumFallback="Liverpool Program Journey Counselling"
            submitButtonText="Book Counselling"
            submitButtonClassName="!bg-[#03d8cf] !text-[#083b72] hover:!bg-[#00c5bd]"
          />
        </JourneyFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Journey Card
|--------------------------------------------------------------------------
*/

type JourneyCardProps = {
  item: JourneyStep;
  showConnector: boolean;
};

function JourneyCard({ item, showConnector }: JourneyCardProps) {
  return (
    <article className="relative">
      {/* Step Label */}

      <div className="relative z-10 mx-auto -mb-[18px] w-fit bg-white px-5">
        <span
          className={`text-[27px] font-black leading-none sm:text-[31px] ${item.accentClass}`}
        >
          {item.step}
        </span>
      </div>

      {/* Card */}

      <div className="relative flex min-h-[535px] h-full flex-col rounded-[17px] border-[1.5px] border-black bg-white px-7 pb-8 pt-[56px] sm:px-8">
        {/* Logo */}

        <div className="flex min-h-[120px] items-center justify-start">
          <Image
            src={getAssetPath(item.logo)}
            alt={item.logoAlt}
            width={280}
            height={110}
            className="max-h-[112px] w-auto max-w-full object-contain object-left"
          />
        </div>

        {/* Title */}

        <h3 className="mt-7 text-[21px] font-black leading-[1.35] text-black sm:text-[23px]">
          {item.title}
        </h3>

        {/* Duration */}

        <p className="mt-4 text-[17px] font-medium leading-none text-black sm:text-[19px]">
          {item.duration}
        </p>

        {/* Description */}

        <p className="mt-5 text-[15px] font-medium leading-[1.55] text-[#4d4d4d] sm:text-[16px]">
          {item.description}
        </p>

        {/* Desktop Connector */}

        {showConnector && (
          <div className="absolute right-[-55px] top-1/2 hidden w-[55px] -translate-y-1/2 border-t-2 border-dotted border-black xl:block" />
        )}
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Form Modal
|--------------------------------------------------------------------------
*/

type JourneyFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function JourneyFormModal({ title, children, onClose }: JourneyFormModalProps) {
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
          aria-label="Close counselling form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#e9fbfa] text-[#00a99f] transition-colors hover:bg-[#d5f7f4]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
