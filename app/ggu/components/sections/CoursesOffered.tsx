"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Download, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

type Course = {
  id: number;
  title: string;
  tag: string;
  duration: string;
  eligibility: string;
  description: string;
  image: string;
};

type FormType = "apply" | "brochure" | null;

/*
|--------------------------------------------------------------------------
| Golden Gate University Courses
|--------------------------------------------------------------------------
*/

const courses: Course[] = [
  {
    id: 1,
    tag: "MASTER",
    title: "Master of Business Administration (MBA)",
    duration: "20 months (online + optional on-campus pathway)",
    eligibility: "Master's or Bachelor's Degree with 5+ years of experience.",
    description:
      "A US-approved or practice-driven program that offers both from Golden Gate University MBA online. The course builds strong leadership skills, strategic thinking, and data-informed decision-making skills. The University faculty is from a San Francisco-based scholar-practitioner with years of experience.",
    image: "/assets/images/golden-gate-mba.webp",
  },
  {
    id: 2,
    tag: "DOCTORATE",
    title: "Doctor of Business Administration (DBA)",
    duration: "36 months | 56 credits",
    eligibility: "Recognised degree in Bachelor’s University",
    description:
      "A degree that is flexible and recognised, the online DBA at Golden Gate University is an advanced doctoral program that is for senior-level leaders, consultants, and academics. The course focuses on research, problem-solving, and an original dissertation that talks about real-life business challenges.",
    image: "/assets/images/golden-gate-dba.webp",
  },
];

export function CoursesOffered() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeForm, setActiveForm] = useState<FormType>(null);

  /*
  |--------------------------------------------------------------------------
  | Close Modal
  |--------------------------------------------------------------------------
  */

  const closeForm = useCallback(() => {
    setActiveForm(null);
    setSelectedCourse(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Open Apply Form
  |--------------------------------------------------------------------------
  */

  const openApplyForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("apply");
  };

  /*
  |--------------------------------------------------------------------------
  | Open Brochure Form
  |--------------------------------------------------------------------------
  */

  const openBrochureForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("brochure");
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
  | Close Modal With Escape Key
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
        id="courses"
        className="bg-[#eeeeee] py-10 sm:py-12 lg:py-[28px]"
      >
        <Container>
          {/* =========================================================
              Section Heading
          ========================================================== */}

          <div className="mb-9 text-center lg:mb-[40px]">
            <h2 className="text-[28px] font-black uppercase leading-none tracking-[-0.03em] text-[#e34d05] sm:text-[30px]">
              Courses Offered
            </h2>

            <p className="mt-2 text-[15px] font-bold leading-none text-[#333333]">
              By Golden Gate University
            </p>
          </div>

          {/* =========================================================
              Course Cards
          ========================================================== */}

          <div className="mx-auto grid max-w-[1030px] grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-[30px]">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onApply={() => openApplyForm(course)}
                onDownload={() => openBrochureForm(course)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* =============================================================
          Apply Modal
      ============================================================== */}

      {activeForm === "apply" && selectedCourse && (
        <CourseFormModal title="Apply Now" onClose={closeForm}>
          <FormWrapper
            title="Apply Now"
            subtitle="Start your application journey today"
            onClose={closeForm}
            defaultCourse={selectedCourse.title}
            hideCourseField
            formNameOverride={`GGU Apply Form - ${selectedCourse.title}`}
            sourceOverride="GGU Course Apply"
            utmSourceFallback="GGU Organic"
            utmMediumFallback="GGU Course Apply Form"
            submitButtonText="Submit Application"
          />
        </CourseFormModal>
      )}

      {/* =============================================================
          Brochure Modal
      ============================================================== */}

      {activeForm === "brochure" && selectedCourse && (
        <CourseFormModal title="Get Brochure" onClose={closeForm}>
          <FormWrapper
            title="Get Brochure"
            subtitle="Fill your details to receive the course brochure"
            onClose={closeForm}
            defaultCourse={selectedCourse.title}
            hideCourseField
            formNameOverride={`GGU Brochure Form - ${selectedCourse.title}`}
            sourceOverride="GGU Course Brochure"
            utmSourceFallback="GGU Organic"
            utmMediumFallback="GGU Course Brochure Form"
            submitButtonText="Get Brochure"
          />
        </CourseFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Course Card
|--------------------------------------------------------------------------
*/

type CourseCardProps = {
  course: Course;
  onApply: () => void;
  onDownload: () => void;
};

function CourseCard({ course, onApply, onDownload }: CourseCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.10)]">
      {/* =========================================================
          Course Image
      ========================================================== */}

      <div className="relative h-[200px] w-full overflow-hidden sm:h-[220px] lg:h-[199px]">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          sizes="(max-width: 1024px) 100vw, 500px"
          className="object-cover"
        />

        {/* Course Tag */}

        <div className="absolute bottom-0 right-0 min-w-[147px] rounded-tl-[18px] bg-[#ff6b00] px-5 py-[7px] text-center">
          <span className="text-[16px] font-extrabold uppercase tracking-[0.02em] text-white">
            {course.tag}
          </span>
        </div>
      </div>

      {/* =========================================================
          Course Content
      ========================================================== */}

      <div className="flex flex-1 flex-col px-[30px] pb-[29px] pt-[30px]">
        <h3 className="text-[19px] font-black leading-[1.25] tracking-[-0.025em] text-black sm:text-[20px]">
          {course.title}
        </h3>

        <p className="mt-[11px] text-[13.5px] font-semibold leading-[1.68] text-[#5a5a5a] sm:text-[14px]">
          {course.description}
        </p>

        {/* Duration and Eligibility */}

        <div className="mt-[14px] space-y-[8px] text-[13.5px] font-bold leading-[1.4] text-[#383838] sm:text-[14px]">
          <p>
            <span className="font-black">Duration:</span> {course.duration}
          </p>

          <p>
            <span className="font-black">Eligibility:</span>{" "}
            {course.eligibility}
          </p>
        </div>

        {/* =======================================================
            Action Buttons
        ======================================================== */}

        <div className="mt-auto grid grid-cols-1 gap-3 pt-[19px] sm:grid-cols-2 sm:gap-[15px]">
          <button
            type="button"
            onClick={onDownload}
            className="flex min-h-[43px] w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-[1.5px] border-[#f04d0a] bg-white px-4 py-2.5 text-[13px] font-extrabold text-black transition-all duration-200 hover:bg-[#f04d0a] hover:text-white"
          >
            Get Brochure
            <Download size={14} strokeWidth={2.8} />
          </button>

          <button
            type="button"
            onClick={onApply}
            className="min-h-[43px] w-full cursor-pointer rounded-full bg-[#e94b04] px-4 py-2.5 text-[13px] font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#cc4002] hover:shadow-md"
          >
            Apply now
          </button>
        </div>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Course Form Modal
|--------------------------------------------------------------------------
*/

type CourseFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function CourseFormModal({ title, children, onClose }: CourseFormModalProps) {
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
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#fff0e8] text-[#e94b04] transition-colors duration-200 hover:bg-[#ffe0d0]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
