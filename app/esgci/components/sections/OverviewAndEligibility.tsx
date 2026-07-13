"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Download, X } from "lucide-react";

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

type ApplicantCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type FormType = "apply" | "curriculum" | null;

/*
|--------------------------------------------------------------------------
| Course Options
|--------------------------------------------------------------------------
*/

const ESGCI_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "ESGCI Online Doctor of Business Administration",
    label: "ESGCI Online Doctor of Business Administration",
  },
];

/*
|--------------------------------------------------------------------------
| Applicant Cards
|--------------------------------------------------------------------------
*/

const applicantCards: ApplicantCard[] = [
  {
    id: 1,
    title: "Experienced Professionals",
    description:
      "Professionals holding a Master’s degree with relevant work experience can pursue the ESGCI Online DBA to gain advanced business knowledge and develop leadership skills.",
    image: "/assets/img/esgci-experienced-professionals.webp",
  },
  {
    id: 2,
    title: "Bachelor’s Degree Holders",
    description:
      "Candidates with a Bachelor’s degree and at least three years of professional experience are eligible, providing an opportunity to enhance expertise and advance their careers.",
    image: "/assets/img/esgci-bachelors-degree-holders.webp",
  },
  {
    id: 3,
    title: "Aspiring Researchers and Educators",
    description:
      "Individuals aiming to teach, publish research, or take on high-level consulting and executive roles can benefit from the globally recognized ESGCI Online DBA program.",
    image: "/assets/img/esgci-researchers-educators.webp",
  },
];

/*
|--------------------------------------------------------------------------
| Overview and Eligibility Section
|--------------------------------------------------------------------------
*/

export function OverviewAndEligibility() {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [selectedApplicant, setSelectedApplicant] =
    useState<ApplicantCard | null>(null);

  /*
  |--------------------------------------------------------------------------
  | Close Form
  |--------------------------------------------------------------------------
  */

  const closeForm = useCallback(() => {
    setActiveForm(null);
    setSelectedApplicant(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Open Apply Form
  |--------------------------------------------------------------------------
  */

  const openApplyForm = (applicant: ApplicantCard) => {
    setSelectedApplicant(applicant);
    setActiveForm("apply");
  };

  /*
  |--------------------------------------------------------------------------
  | Open Curriculum Form
  |--------------------------------------------------------------------------
  */

  const openCurriculumForm = () => {
    setSelectedApplicant(null);
    setActiveForm("curriculum");
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
  | Close Popup With Escape Key
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
      <section id="about" className="bg-white py-10 sm:py-12 lg:py-[38px]">
        <Container>
          {/* ========================================================
              Program Overview
          ======================================================== */}

          <div className="mx-auto max-w-[1160px] text-center">
            <h2 className="text-[27px] font-black leading-[1.15] tracking-[-0.025em] text-black sm:text-[32px] lg:text-[36px]">
              Overview of{" "}
              <span className="bg-[#eef8f1] px-1 text-[#009844]">
                ESGCI Online DBA Program
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[1130px] text-[13px] font-medium leading-[1.5] text-black sm:text-[14px] lg:text-[14px]">
              The ESGCI Online DBA helps professionals gain advanced skills in
              business and management. The 36-month program includes foundation,
              leadership, and dissertation phases, giving a clear path for
              learning. Students receive personal guidance from experienced
              ESGCI faculty to support their research and studies. The program
              offers interactive learning and global exposure, helping students
              develop strong leadership and practical skills. It also allows
              students to use their knowledge on real-world business challenges.
              Graduates earn a globally recognized doctoral degree, improving
              career opportunities. After completing the DBA, alumni can work in
              consulting, research, teaching, or executive roles worldwide.
            </p>

            <button
              type="button"
              onClick={openCurriculumForm}
              className="mt-5 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[6px] bg-[#ffe500] px-5 py-2.5 text-[15px] font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f2d900] hover:shadow-md"
            >
              Get Curriculum
              <Download size={18} strokeWidth={3} />
            </button>
          </div>

          {/* ========================================================
              Who Can Apply
          ======================================================== */}

          <div className="mt-12 sm:mt-14 lg:mt-[46px]">
            <h2 className="text-center text-[28px] font-black leading-[1.15] tracking-[-0.025em] text-black sm:text-[33px] lg:text-[36px]">
              Who Can Apply for the{" "}
              <span className="bg-[#eef8f1] px-1 text-[#009844]">
                ESGCI Online DBA
              </span>
            </h2>

            <div className="mx-auto mt-6 grid max-w-[1140px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {applicantCards.map((applicant) => (
                <ApplicantCardItem
                  key={applicant.id}
                  applicant={applicant}
                  onApply={() => openApplyForm(applicant)}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          Apply Now Modal
      ============================================================ */}

      {activeForm === "apply" && selectedApplicant && (
        <FormModal title="Apply Now" onClose={closeForm}>
          <FormWrapper
            title="Apply Now"
            subtitle="Start your ESGCI Online DBA application"
            onClose={closeForm}
            courseOptions={ESGCI_COURSE_OPTIONS}
            defaultCourse="ESGCI Online Doctor of Business Administration"
            hideCourseField
            formNameOverride={`ESGCI Apply Form - ${selectedApplicant.title}`}
            sourceOverride="ESGCI Eligibility Section"
            utmSourceFallback="ESGCI Organic"
            utmMediumFallback="ESGCI Apply Now"
            submitButtonText="Submit Application"
          />
        </FormModal>
      )}

      {/* ============================================================
          Curriculum Modal
      ============================================================ */}

      {activeForm === "curriculum" && (
        <FormModal title="Get Curriculum" onClose={closeForm}>
          <FormWrapper
            title="Get Curriculum"
            subtitle="Fill your details to receive the ESGCI Online DBA curriculum"
            onClose={closeForm}
            courseOptions={ESGCI_COURSE_OPTIONS}
            defaultCourse="ESGCI Online Doctor of Business Administration"
            hideCourseField
            formNameOverride="ESGCI Curriculum Download Form"
            sourceOverride="ESGCI Curriculum"
            utmSourceFallback="ESGCI Organic"
            utmMediumFallback="ESGCI Curriculum Form"
            submitButtonText="Get Curriculum"
          />
        </FormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Applicant Card
|--------------------------------------------------------------------------
*/

type ApplicantCardItemProps = {
  applicant: ApplicantCard;
  onApply: () => void;
};

function ApplicantCardItem({ applicant, onApply }: ApplicantCardItemProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden bg-[#eeeeee]">
      {/* Applicant Image */}
      <div className="relative h-[188px] w-full overflow-hidden sm:h-[210px] lg:h-[188px]">
        <Image
          src={getAssetPath(applicant.image)}
          alt={applicant.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="text-[18px] font-black leading-[1.2] text-black lg:text-[18px]">
          {applicant.title}
        </h3>

        <p className="mt-3 text-[13px] font-medium leading-[1.45] text-black sm:text-[14px]">
          {applicant.description}
        </p>

        <div className="mt-auto border-t border-[#9d9d9d] pt-3">
          <button
            type="button"
            onClick={onApply}
            className="inline-flex min-h-[38px] items-center justify-center rounded-[5px] bg-[#009844] px-5 py-2 text-[15px] font-bold text-white transition-all duration-200 hover:bg-[#007f39] hover:shadow-md"
          >
            Apply Now
          </button>
        </div>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Form Modal
|--------------------------------------------------------------------------
*/

type FormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function FormModal({ title, children, onClose }: FormModalProps) {
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
          aria-label="Close form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf8f0] text-[#009844] transition-colors hover:bg-[#d5f1e1]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
