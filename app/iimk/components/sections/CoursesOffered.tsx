"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ChevronDown, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

type Course = {
  id: number;
  title: string;
  duration: string;
  eligibility: string;
  description: string;
  image: string;
};

type FormType = "apply" | "brochure" | null;

const courses: Course[] = [
  {
    id: 1,
    title: "Edgewood University Online DBA",
    duration: "24 Months",
    eligibility: "Bachelor's + Master's Degree with relevant experience",
    description:
      "The Online DBA accredited by HLC introduces learners to board dynamics, strategic finance, decision-making, and digital transformation. This 24-month programme prepares professionals for the Dr. title, with real-time project exposure and top faculty.",
    image: "/assets/img/generative-ai-leaders.webp",
  },
  {
    id: 2,
    title: "Edgewood University Online MBA + DBA",
    duration: "24 Months",
    eligibility: "Bachelor's Degree",
    description:
      "The dual degree is in demand nowadays. Many students plan to study an online MBA + DBA as their career pathway. The programme combines executive MBA skills with applied research and the respected Dr title.",
    image: "/assets/img/data-science-ai.webp",
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
  | Open Apply Modal
  |--------------------------------------------------------------------------
  */

  const openApplyForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("apply");
  };

  /*
  |--------------------------------------------------------------------------
  | Open Brochure Modal
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
    if (!activeForm) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

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
        className="border-t-[5px] border-[#c9230c] bg-[#eeeeee] py-12 sm:py-14 lg:py-[52px]"
      >
        <Container>
          {/* Heading */}
          <div className="mb-9 text-center sm:mb-10">
            <h2 className="text-[28px] font-black uppercase leading-none text-[#c9230c] sm:text-[32px]">
              Courses Offered
            </h2>

            <p className="mt-2 text-[15px] font-bold text-[#333333] sm:text-[16px]">
              By Edgewood University Online
            </p>
          </div>

          {/* Course Grid */}
          <div className="mx-auto grid max-w-[1030px] grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">
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

      {/* Apply Modal */}
      {activeForm === "apply" && selectedCourse && (
        <CourseFormModal title="Apply Now" onClose={closeForm}>
          <FormWrapper
            title="Apply Now"
            subtitle="Start your application journey today"
            onClose={closeForm}
            defaultCourse={selectedCourse.title}
            hideCourseField
            formNameOverride={`Edgewood Apply Form - ${selectedCourse.title}`}
            sourceOverride="Edgewood Course Apply"
            utmSourceFallback="Edgewood Organic"
            utmMediumFallback="Edgewood Course Apply Form"
            submitButtonText="Submit Application"
          />
        </CourseFormModal>
      )}

      {/* Brochure Modal */}
      {activeForm === "brochure" && selectedCourse && (
        <CourseFormModal title="Get Brochure" onClose={closeForm}>
          <FormWrapper
            title="Get Brochure"
            subtitle="Fill your details to receive the course brochure"
            onClose={closeForm}
            defaultCourse={selectedCourse.title}
            hideCourseField
            formNameOverride={`Edgewood Brochure Form - ${selectedCourse.title}`}
            sourceOverride="Edgewood Course Brochure"
            utmSourceFallback="Edgewood Organic"
            utmMediumFallback="Edgewood Course Brochure Form"
            submitButtonText="Get Brochure"
          />
        </CourseFormModal>
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
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_14px_28px_rgba(0,0,0,0.14)]">
      {/* Course Image */}
      <div className="relative h-[200px] w-full overflow-hidden sm:h-[220px]">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Course Content */}
      <div className="flex flex-1 flex-col px-7 pb-7 pt-7 sm:px-8">
        <h3 className="text-[23px] font-black leading-[1.2] text-black sm:text-[25px]">
          {course.title}
        </h3>

        <p className="mt-3 text-[14px] leading-[1.55] text-[#5b5b5b] sm:text-[15px]">
          {course.description}
        </p>

        <div className="mt-4 space-y-2 text-[14px] font-bold leading-[1.25] text-[#333333] sm:text-[15px]">
          <p>
            <span>Duration:</span> {course.duration}
          </p>

          <p>
            <span>Eligibility:</span> {course.eligibility}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-auto grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2 sm:gap-4">
          <button
            type="button"
            onClick={onDownload}
            className="flex min-h-[42px] w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#c9230c] bg-white px-4 py-2.5 text-[13px] font-extrabold text-[#c9230c] transition-all duration-200 hover:bg-[#c9230c] hover:text-white"
          >
            Get Brochure
            <ChevronDown size={14} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            onClick={onApply}
            className="min-h-[42px] w-full cursor-pointer rounded-full bg-[#c9230c] px-4 py-2.5 text-[13px] font-extrabold text-white transition-all duration-200 hover:bg-[#aa1c08]"
          >
            Apply Now
          </button>
        </div>
      </div>
    </article>
  );
}

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
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#fff0ed] text-[#c9230c] transition hover:bg-[#ffe2dc]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
