"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Download, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { GGU_COURSE_OPTIONS } from "../../constants";

type Course = {
  id: number;
  tag: string;
  title: string;
  duration: string;
  eligibility: string;
  description: string;
  image: string;
  brochureUrl: string;
};

type FormType = "apply" | "brochure" | null;

/* =========================================================
   GOLDEN GATE UNIVERSITY COURSES
========================================================= */

const courses: Course[] = [
  {
    id: 1,
    tag: "MASTER",
    title: "Master of Business Administration (MBA)",
    duration: "20 months (online + optional on-campus pathway)",
    eligibility: "Master's or Bachelor's Degree with 5+ years of experience.",
    description:
      "A US-approved or practice-driven program that offers both from Golden Gate University MBA online. The course builds strong leadership skills, strategic thinking, and data-informed decision-making skills. The University faculty is from a San Francisco-based scholar-practitioner with years of experience.",
    image: "/ggu/assets/img/master-mba-ggu.webp",
    brochureUrl: "/ggu/assets/brochures/mba.pdf",
  },
  {
    id: 2,
    tag: "DOCTORATE",
    title: "Doctor of Business Administration (DBA)",
    duration: "36 months | 56 credits",
    eligibility: "Recognised degree in Bachelor’s University",
    description:
      "A degree that is flexible and recognised, the online DBA at Golden Gate University is an advanced doctoral program that is for senior-level leaders, consultants, and academics. The course focuses on research, problem-solving, and an original dissertation that talks about real-life business challenges.",
    image: "/ggu/assets/img/doctorate-dba-ggu.webp",
    brochureUrl: "/ggu/assets/brochures/dba.pdf",
  },
];

export function CoursesOffered() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const closeForm = useCallback(() => {
    setActiveForm(null);
    setSelectedCourse(null);
  }, []);

  const openApplyForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("apply");
  };

  const openBrochureForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("brochure");
  };

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
        id="main-courses"
        className="bg-[#eeeeee] py-10 sm:py-12 lg:py-[28px]"
      >
        <Container>
          {/* Section Heading */}

          <div className="mb-9 text-center lg:mb-[40px]">
            <h2 className="text-[28px] font-extrabold uppercase leading-none tracking-[-0.03em] text-[#e34d05] sm:text-[30px]">
              Courses Offered
            </h2>

            <p className="mt-2 text-[15px] font-bold leading-none text-[#333333]">
              By Golden Gate University
            </p>
          </div>

          {/* Course Cards */}

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

      {/* Apply Modal overlay */}

      {activeForm === "apply" && selectedCourse && (
        <div
          role="presentation"
          onClick={closeForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >

            <FormWrapper
              title="Apply Now"
              subtitle="Start your application journey today"
              onClose={closeForm}
              defaultCourse=""
              courseOptions={GGU_COURSE_OPTIONS}
              formNameOverride={`GGU Apply Form - ${selectedCourse.title}`}
              sourceOverride="GGU LP"
              utmSourceFallback="Organic"
              utmMediumFallback="GGU_Organic"
              submitButtonText="Submit Application"
              redirectUrl="/thank-you"
            />
          </div>
        </div>
      )}

      {/* Brochure Modal overlay */}

      {activeForm === "brochure" && selectedCourse && (
        <div
          role="presentation"
          onClick={closeForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >

            <FormWrapper
              title="Get Brochure"
              subtitle="Please enter your details to download the brochure:"
              onClose={closeForm}
              defaultCourse=""
              courseOptions={GGU_COURSE_OPTIONS}
              formNameOverride={`GGU Brochure Form - ${selectedCourse.title}`}
              sourceOverride="GGU LP"
              utmSourceFallback="Organic"
              utmMediumFallback="GGU_Organic"
              submitButtonText="Submit"
              isBrochureForm
              brochureUrl={selectedCourse.brochureUrl}
              redirectUrl="/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}

type CourseCardProps = {
  course: Course;
  onApply: () => void;
  onDownload: () => void;
};

function CourseCard({ course, onApply, onDownload }: CourseCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.10)]">
      {/* Course Image */}

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

      {/* Course Content */}

      <div className="flex flex-1 flex-col px-[30px] pb-[29px] pt-[30px]">
        <h3 className="text-[19px] font-extrabold leading-[1.25] tracking-[-0.025em] text-[#003d78] sm:text-[20px]">
          {course.title}
        </h3>

        <p className="mt-[11px] text-[13.5px] font-semibold leading-[1.68] text-[#5a5a5a] sm:text-[13px]">
          {course.description}
        </p>

        {/* Duration and Eligibility */}

        <div className="mt-[18px] space-y-[8px] text-[13.5px] font-bold leading-[1.4] text-[#383838] sm:text-[12px]">
          <p>
            <span className="font-extrabold">Duration:</span> {course.duration}
          </p>

          <p>
            <span className="font-extrabold">Eligibility:</span>{" "}
            {course.eligibility}
          </p>
        </div>

        {/* Action Buttons */}

        <div className="mt-auto grid grid-cols-2 gap-3 pt-[19px] sm:grid-cols-2 sm:gap-[15px]">
          <button
            type="button"
            onClick={onDownload}
            className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border-[1.5px] border-[#f04d0a] bg-white px-2 md:px-4 py-2 md:py-2.5 text-[13px] font-extrabold text-[#e34d05] transition-all duration-300 ease-in-out hover:bg-[#f04d0a] hover:text-white"
          >
            Get Brochure
            <Download size={14} strokeWidth={2.8} />
          </button>

          <button
            type="button"
            onClick={onApply}
            className="w-full cursor-pointer rounded-full bg-[#e94b04] px-2 md:px-4 py-2 md:py-2.5 text-[13px] font-extrabold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#cc4002] hover:shadow-md"
          >
            Apply now
          </button>
        </div>
      </div>
    </article>
  );
}
