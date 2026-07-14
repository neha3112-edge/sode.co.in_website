"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Award, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type SpecializationTab = "dba" | "mba-dba";

type FormType = "apply" | "degree" | null;

type Specialization = {
  id: number;
  title: string;
  description: string;
  image: string;
  courseName: string;
};

type LearningOutcome = {
  id: number;
  title: string;
  description: string;
};

/*
|--------------------------------------------------------------------------
| DBA Specializations
|--------------------------------------------------------------------------
*/

const dbaSpecializations: Specialization[] = [
  {
    id: 1,
    title: "DBA Leadership",
    description:
      "Edgewood University Online DBA Leadership builds leadership skills that enable students to learn management and strategic decision-making skills, using applied research to solve real organisational challenges in senior roles, and to gain skilled knowledge.",
    image: "/assets/img/dba-leadership.webp",
    courseName: "Edgewood University Online DBA - Leadership",
  },
  {
    id: 2,
    title: "DBA Finance",
    description:
      "Finance Specializations in Edgewood University's Online DBA develop advanced expertise in financial strategy, risk management, and corporate decision-making. This curriculum helps students use research-led frameworks to manage complex financial problems.",
    image: "/assets/img/dba-finance.webp",
    courseName: "Edgewood University Online DBA - Finance",
  },
];

/*
|--------------------------------------------------------------------------
| MBA + DBA Specializations
|--------------------------------------------------------------------------
*/

const mbaDbaSpecializations: Specialization[] = [
  {
    id: 1,
    title: "MBA + DBA Leadership",
    description:
      "Edgewood University Online MBA + DBA Leadership combines MBA leadership skills with doctoral-level applied research, preparing professionals for senior management, consulting, and enterprise growth roles.",
    image: "/assets/img/mba-dba-leadership.webp",
    courseName: "Edgewood University Online MBA + DBA - Leadership",
  },
  {
    id: 2,
    title: "MBA + DBA Finance",
    description:
      "Edgewood University Online MBA + DBA Finance blends MBA finance fundamentals with advanced doctoral research, supporting strategic investment, risk control, and high-level corporate finance decisions.",
    image: "/assets/img/mba-dba-finance.webp",
    courseName: "Edgewood University Online MBA + DBA - Finance",
  },
];

/*
|--------------------------------------------------------------------------
| Learning Outcomes
|--------------------------------------------------------------------------
*/

const learningOutcomes: LearningOutcome[] = [
  {
    id: 1,
    title: "Optional On-Campus Immersion:",
    description:
      "Experience U.S. campus learning through optional immersion, workshops, faculty meets, and academic resources onsite support.",
  },
  {
    id: 2,
    title: "Online Networking Gala:",
    description:
      "Join online networking galas to meet peers, alumni, mentors, and industry leaders worldwide and expand your professional network.",
  },
  {
    id: 3,
    title: "Stakeholder Influence:",
    description:
      "Build stakeholder influence by negotiating confidently, managing expectations, presenting data, and leading change initiatives effectively.",
  },
  {
    id: 4,
    title: "Conduct Applied Doctoral Research:",
    description:
      "Conduct applied doctoral research using evidence-based methods, solving business problems with measurable outcomes for organisations.",
  },
  {
    id: 5,
    title: "Expert Faculty:",
    description:
      "Learn from expert faculty who guide projects, share industry insights, and support academic progress personally to help learners gain the skills they need.",
  },
  {
    id: 6,
    title: "Nationally Recognized:",
    description:
      "Earn a nationally recognised U.S. qualification that enhances credibility, promotion prospects, and global mobility faster.",
  },
];

/*
|--------------------------------------------------------------------------
| Form Course Options
|--------------------------------------------------------------------------
*/

const EDGEWOOD_COURSE_OPTIONS = [
  {
    value: "Edgewood University Online DBA - Leadership",
    label: "Edgewood University Online DBA - Leadership",
  },
  {
    value: "Edgewood University Online DBA - Finance",
    label: "Edgewood University Online DBA - Finance",
  },
  {
    value: "Edgewood University Online MBA + DBA - Leadership",
    label: "Edgewood University Online MBA + DBA - Leadership",
  },
  {
    value: "Edgewood University Online MBA + DBA - Finance",
    label: "Edgewood University Online MBA + DBA - Finance",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function CertificateSection() {
  const [activeTab, setActiveTab] = useState<SpecializationTab>("dba");

  const [activeForm, setActiveForm] = useState<FormType>(null);

  const [selectedSpecialization, setSelectedSpecialization] =
    useState<Specialization | null>(null);

  /*
  |--------------------------------------------------------------------------
  | Close Form
  |--------------------------------------------------------------------------
  */

  const closeForm = useCallback(() => {
    setActiveForm(null);
    setSelectedSpecialization(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Apply Form
  |--------------------------------------------------------------------------
  */

  const openApplyForm = (specialization: Specialization) => {
    setSelectedSpecialization(specialization);
    setActiveForm("apply");
  };

  /*
  |--------------------------------------------------------------------------
  | Degree Form
  |--------------------------------------------------------------------------
  */

  const openDegreeForm = () => {
    setSelectedSpecialization(null);
    setActiveForm("degree");
  };

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
  | Escape Key
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

  const visibleSpecializations =
    activeTab === "dba" ? dbaSpecializations : mbaDbaSpecializations;

  return (
    <>
      {/* =============================================================
          SPECIALIZATIONS
      ============================================================== */}

      <section
        id="specializations"
        className="border-b-[4px] border-[#c9230c] bg-[#eeeeee] py-12 sm:py-14 lg:py-[60px]"
      >
        <Container>
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[25px] font-black leading-tight text-[#c9230c] sm:text-[30px] lg:text-[34px]">
              Specializations of Edgewood University Online DBA / MBA + DBA
            </h2>
          </div>

          {/* Tabs */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setActiveTab("dba")}
              className={`min-w-[82px] cursor-pointer border px-5 py-2.5 text-[13px] font-extrabold transition-all duration-200 ${
                activeTab === "dba"
                  ? "border-[#bd2009] bg-[#bd2009] text-white"
                  : "border-[#cccccc] bg-white text-black hover:border-[#bd2009] hover:text-[#bd2009]"
              }`}
            >
              DBA
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("mba-dba")}
              className={`min-w-[126px] cursor-pointer border px-5 py-2.5 text-[13px] font-extrabold transition-all duration-200 ${
                activeTab === "mba-dba"
                  ? "border-[#bd2009] bg-[#bd2009] text-white"
                  : "border-[#cccccc] bg-white text-black hover:border-[#bd2009] hover:text-[#bd2009]"
              }`}
            >
              MBA + DBA
            </button>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-8 grid max-w-[1040px] grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {visibleSpecializations.map((specialization) => (
              <SpecializationCard
                key={`${activeTab}-${specialization.id}`}
                specialization={specialization}
                onApply={() => openApplyForm(specialization)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* =============================================================
          LEARNING OUTCOMES
      ============================================================== */}

      <section className="bg-[#bd2009] py-14 text-white sm:py-16 lg:py-[64px]">
        <Container>
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[28px] font-black uppercase leading-tight text-white sm:text-[34px] lg:text-[38px]">
              Learning Outcomes of
            </h2>

            <div className="mx-auto mt-2 flex max-w-[920px] items-center gap-4">
              <span className="h-px flex-1 bg-white/60" />

              <p className="text-[17px] font-medium text-white sm:text-[20px]">
                Edgewood University Online
              </p>

              <span className="h-px flex-1 bg-white/60" />
            </div>
          </div>

          {/* Outcomes */}
          <div className="mx-auto mt-12 grid max-w-[1110px] grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {learningOutcomes.map((outcome) => (
              <LearningOutcomeCard key={outcome.id} outcome={outcome} />
            ))}
          </div>
        </Container>
      </section>

      {/* =============================================================
          SAMPLE CERTIFICATION
      ============================================================== */}

      <section
        id="sample-certificate"
        className="bg-white py-14 sm:py-16 lg:py-[62px]"
      >
        <Container>
          <div className="mx-auto grid max-w-[1110px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            {/* Certificate Image */}
            <div className="relative mx-auto w-full max-w-[570px]">
              <div className="relative aspect-[1.43/1] w-full overflow-hidden bg-white shadow-[0_10px_26px_rgba(0,0,0,0.07)]">
                <Image
                  src={getAssetPath(
                    "/assets/img/edgewood-sample-certificate.webp",
                  )}
                  alt="Edgewood University Online sample certification"
                  fill
                  sizes="(max-width: 1024px) 100vw, 570px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Certificate Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-[34px] font-black leading-tight tracking-[-0.03em] text-black sm:text-[42px] lg:text-[46px]">
                Sample Certification
              </h2>

              <p className="mt-3 text-[14px] font-extrabold text-[#e62b72] sm:text-[15px]">
                Edgewood University Online
              </p>

              <p className="mx-auto mt-5 max-w-[510px] text-[14px] leading-[1.58] text-[#5d5d5d] sm:text-[15px] lg:mx-0">
                Edgewood University Online offers two certifications after
                completion of their degree: PwC and the certificate of Edgewood
                University. These two certificates help students prepare for
                top-board level roles. In partnership with PwC India, the
                programme teaches strategic thinking, handling stakeholders,
                governance, and compliance through live lectures and real-world
                expert guidance.
              </p>

              <p className="mx-auto mt-2 max-w-[510px] text-[14px] leading-[1.58] text-[#5d5d5d] sm:text-[15px] lg:mx-0">
                These qualifications build confidence to succeed in business
                careers through the Edgewood University Online MBA + DBA and DBA
                programmes.
              </p>

              <button
                type="button"
                onClick={openDegreeForm}
                className="mt-7 inline-flex min-h-[43px] cursor-pointer items-center justify-center gap-4 rounded-full bg-[#c9230c] px-8 py-3 text-[14px] font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#aa1c08]"
              >
                Get Degree
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Next Section Heading */}
          <div className="mt-20 text-center sm:mt-24">
            <h2 className="text-[25px] font-black leading-tight text-[#193778] sm:text-[31px] lg:text-[34px]">
              How To Apply For Edgewood University Online Courses
            </h2>
          </div>
        </Container>
      </section>

      {/* =============================================================
          SELECTED SPECIALIZATION APPLY FORM
      ============================================================== */}

      {activeForm === "apply" && selectedSpecialization && (
        <CustomFormModal
          title={`Apply for ${selectedSpecialization.title}`}
          onClose={closeForm}
        >
          <FormWrapper
            title="Apply Now"
            subtitle={`Start your application for ${selectedSpecialization.title}`}
            onClose={closeForm}
            defaultCourse={selectedSpecialization.courseName}
            hideCourseField
            formNameOverride={`Edgewood Specialization Apply Form - ${selectedSpecialization.title}`}
            sourceOverride="Edgewood Specialization Apply"
            utmSourceFallback="Edgewood Organic"
            utmMediumFallback={`${selectedSpecialization.title} Apply Button`}
            submitButtonText="Submit Application"
          />
        </CustomFormModal>
      )}

      {/* =============================================================
          GET DEGREE FORM
      ============================================================== */}

      {activeForm === "degree" && (
        <CustomFormModal
          title="Get Edgewood University Degree"
          onClose={closeForm}
        >
          <FormWrapper
            title="Get Degree"
            subtitle="Share your details and our academic experts will guide you"
            onClose={closeForm}
            courseOptions={EDGEWOOD_COURSE_OPTIONS}
            formNameOverride="Edgewood Sample Certification Get Degree Form"
            sourceOverride="Edgewood Sample Certification"
            utmSourceFallback="Edgewood Organic"
            utmMediumFallback="Edgewood Get Degree Button"
            submitButtonText="Get Degree"
          />
        </CustomFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Specialization Card
|--------------------------------------------------------------------------
*/

type SpecializationCardProps = {
  specialization: Specialization;
  onApply: () => void;
};

function SpecializationCard({
  specialization,
  onApply,
}: SpecializationCardProps) {
  return (
    <article className="relative flex h-full flex-col pb-6">
      <div className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
        {/* Image */}
        <div className="relative h-[200px] w-full overflow-hidden">
          <Image
            src={getAssetPath(specialization.image)}
            alt={specialization.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-7 pb-12 pt-6 text-center sm:px-8">
          <h3 className="text-[25px] font-black leading-tight text-black sm:text-[28px]">
            {specialization.title}
          </h3>

          <p className="mx-auto mt-4 max-w-[430px] text-[14px] leading-[1.5] text-[#474747] sm:text-[15px]">
            {specialization.description}
          </p>
        </div>
      </div>

      {/* Apply Button */}
      <button
        type="button"
        onClick={onApply}
        className="absolute bottom-0 left-1/2 min-h-[43px] min-w-[182px] -translate-x-1/2 cursor-pointer rounded-[8px] bg-[#c9230c] px-7 py-2.5 text-[17px] font-extrabold text-white shadow-[0_6px_14px_rgba(0,0,0,0.25)] transition-all duration-200 hover:bg-[#aa1c08]"
      >
        Apply Now
      </button>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Learning Outcome Card
|--------------------------------------------------------------------------
*/

type LearningOutcomeCardProps = {
  outcome: LearningOutcome;
};

function LearningOutcomeCard({ outcome }: LearningOutcomeCardProps) {
  return (
    <article className="flex items-start gap-4">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white text-[#252525]">
        <Award size={27} strokeWidth={2.4} />
      </div>

      <div>
        <h3 className="text-[17px] font-extrabold leading-[1.25] text-white sm:text-[18px]">
          {outcome.title}
        </h3>

        <p className="mt-2 text-[14px] leading-[1.5] text-white/95 sm:text-[15px]">
          {outcome.description}
        </p>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Form Modal
|--------------------------------------------------------------------------
*/

type CustomFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function CustomFormModal({ title, children, onClose }: CustomFormModalProps) {
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
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#fff0ed] text-[#c9230c] transition hover:bg-[#ffe2dc]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
