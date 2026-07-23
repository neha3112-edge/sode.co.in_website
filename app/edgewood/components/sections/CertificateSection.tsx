"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { EDGEWOOD_COURSE_OPTIONS } from "../../constants";

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
      "Edgewood University Online DBA leadership builds leadership skills that enable students to learn management and strategic decision-making skills, using applied research to solve real organisational challenges in senior roles, and to gain skilled knowledge.",
    image: "/edgewood/assets/img/leadership-edgewood.webp",
    courseName: "DBA in Leadership",
  },
  {
    id: 2,
    title: "DBA Finance",
    description:
      "Finance Specializations in Edgewood University's Online DBA develop advanced expertise in financial strategy, risk management, and corporate decision-making. This curriculum help student use research-led frameworks to manage complex financial problems.",
    image: "/edgewood/assets/img/finanance-edgewood.webp",
    courseName: "DBA in Finance",
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
      "Edgewood University Online DBA Learning in MBA + DBA Leadership combines MBA leadership skills with doctoral-level applied research, preparing professionals for senior management, consulting, and enterprise growth roles.",
    image: "/edgewood/assets/img/leadership-edgewood-2.webp",
    courseName: "MBA + DBA in Leadership",
  },
  {
    id: 2,
    title: "MBA + DBA Finance",
    description:
      "Edgewood University Online DBA Learning in MBA + DBA Finance blends MBA finance fundamentals with advanced doctoral research, supporting strategic investment, risk control, and high-level corporate finance decisions.",
    image: "/edgewood/assets/img/Finance.webp",
    courseName: "MBA + DBA in Finance",
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
      "Learn from expert faculty who guide projects, share industry insights, and support academic progress personally to help learner gain the skills they need.",
  },
  {
    id: 6,
    title: "Nationally Recognized:",
    description:
      "Earn a nationally recognized U.S. qualification that enhances credibility, promotion prospects, and global mobility faster.",
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

  const closeForm = useCallback(() => {
    setActiveForm(null);
    setSelectedSpecialization(null);
  }, []);

  const openApplyForm = (specialization: Specialization) => {
    setSelectedSpecialization(specialization);
    setActiveForm("apply");
  };

  const openDegreeForm = () => {
    setSelectedSpecialization(null);
    setActiveForm("degree");
  };

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
            <h2 className="text-[23px] font-extrabold leading-tight text-[#c9230c] sm:text-[27px] lg:text-[30px]">
              Specializations of Edgewood University Online DBA / MBA + DBA
            </h2>
          </div>

          {/* Tabs */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setActiveTab("dba")}
              className={`min-w-[82px] cursor-pointer border px-5 py-2 text-[12px] font-extrabold transition-all duration-200 rounded-[4px] ${activeTab === "dba"
                ? "border-[#bd2009] bg-[#bd2009] text-white"
                : "border-[#cccccc] bg-white text-bold hover:border-[#bd2009] hover:text-[#bd2009]"
                }`}
            >
              DBA
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("mba-dba")}
              className={`min-w-[126px] cursor-pointer border px-5 py-2 text-[12px] font-extrabold transition-all duration-200 rounded-[4px] ${activeTab === "mba-dba"
                ? "border-[#bd2009] bg-[#bd2009] text-white"
                : "border-[#cccccc] bg-white text-bold hover:border-[#bd2009] hover:text-[#bd2009]"
                }`}
            >
              MBA + DBA
            </button>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-8 grid max-w-[940px] grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
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

      <section id="learning-section" className="bg-[#bd2009] py-14 text-white sm:py-16 lg:py-[64px]">
        <Container>
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[26px] font-extrabold uppercase leading-tight text-white sm:text-[30px] lg:text-[34px]">
              Learning Outcomes of
            </h2>

            <div className="mx-auto mt-2 flex max-w-[920px] items-center justify-center gap-4">
              <span className="hidden h-px flex-1 bg-white/60 sm:block" />

              <p className="text-[15px] font-medium text-white sm:text-[18px]">
                Edgewood University Online
              </p>

              <span className="hidden h-px flex-1 bg-white/60 sm:block" />
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
                    "/edgewood/assets/img/sample-certficate-edgewood.webp",
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
              <h2 className="text-[30px] font-extrabold leading-tight text-black/80 sm:text-[36px]">
                Sample Certification
              </h2>

              <p className="mt-3 text-[13px] font-extrabold text-[#e62b72] sm:text-[14px]">
                Edgewood University Online
              </p>

              <p className="mx-auto mt-5 max-w-[510px] text-[13px] leading-[1.58] text-[#5d5d5d] sm:text-[13px] lg:mx-0">
                Edgewood University Online offers two certifications after completion of their degree: PwC and the certificate of Edgewood University. These two certificates help students prepare for top-board level roles. In the partnership of PwC India, it teaches strategic thinking, handling stakeholders, governance, and compliance through live lecture which teaching studnet a real-world expertise guidance, which buld confinace to succeed in a business career with Edgewood University Online MBA + DBA and MBA.
              </p>

              <button
                type="button"
                onClick={openDegreeForm}
                className="mt-7 inline-flex min-h-[38px] cursor-pointer items-center justify-center gap-3 rounded-full bg-[#c9230c] px-6 py-2.5 text-[13px] font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#aa1c08]"
              >
                Get Degree
                <ArrowRight size={14} strokeWidth={2.5} />
              </button>
            </div>
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
            courseOptions={EDGEWOOD_COURSE_OPTIONS}
            formNameOverride={`Edgewood Specialization Apply Form - ${selectedSpecialization.title}`}
            sourceOverride="Edgewood LP"
            utmSourceFallback="Edgewood Organic"
            utmMediumFallback={`${selectedSpecialization.title} Apply Button`}
            submitButtonText="Submit Application"
            submitButtonClassName="bg-[#c9230c] hover:bg-[#aa1c08]"
            redirectUrl="/thank-you"
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
            sourceOverride="Edgewood LP"
            utmSourceFallback="Edgewood Organic"
            utmMediumFallback="Edgewood Get Degree Button"
            submitButtonText="Get Degree"
            submitButtonClassName="bg-[#c9230c] hover:bg-[#aa1c08]"
            redirectUrl="/thank-you"
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
          <h3 className="text-[21px] font-bold leading-tight text-black sm:text-[23px]">
            {specialization.title}
          </h3>

          <p className="mx-auto mt-4 max-w-[430px] text-[13px] leading-[1.5] text-[#474747] sm:text-[13px]">
            {specialization.description}
          </p>
        </div>
      </div>

      {/* Apply Button */}
      <button
        type="button"
        onClick={onApply}
        className="absolute bottom-0 left-1/2 min-h-[38px] min-w-[160px] -translate-x-1/2 cursor-pointer rounded-[8px] bg-[#c9230c] px-6 py-2 text-[14px] font-extrabold text-white shadow-[0_6px_14px_rgba(0,0,0,0.25)] transition-all duration-200 hover:bg-[#aa1c08]"
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
      <div className="relative flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white p-1">
        <Image
          src={getAssetPath("/edgewood/assets/img/learning-outcome-edgewood-icon.webp")}
          alt=""
          width={50}
          height={50}
          className="object-contain"
        />
      </div>

      <div>
        <h3 className="text-[15px] font-extrabold leading-[1.25] text-white sm:text-[16px]">
          {outcome.title}
        </h3>

        <p className="mt-2 text-[13px] leading-[1.5] text-white/95 sm:text-[13px]">
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
        {children}
      </div>
    </div>
  );
}
