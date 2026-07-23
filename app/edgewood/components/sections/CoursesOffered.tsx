"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { EDGEWOOD_COURSE_OPTIONS } from "../../constants";

type Course = {
  id: number;
  title: string;
  duration: string;
  eligibility: string;
  description: string;
  image: string;
  brochureUrl: string;
};

type FormType = "apply" | "brochure" | null;

const courses: Course[] = [
  {
    id: 1,
    title: "Edgewood University Online DBA",
    duration: "24 Months",
    eligibility: "Bachelor's + Master's Degree with relevant experience",
    description:
      "The Online DBA accredited by HLC introduces learners to board dynamics, strategic finance, decision-making, and digital transformation. This 24-month program prepares professionals for the Dr. title, with real-time project exposure and top faculty, following a 5-day campus immersion and the Online Networking Gala for Network and Career Growth.",
    image: "/edgewood/assets/img/online-dba-edgewood.webp",
    brochureUrl: "/edgewood/assets/brochures/edgewood_dba.pdf",
  },
  {
    id: 2,
    title: "Edgewood University Online MBA + DBA",
    duration: "24 Months",
    eligibility: "Bachelor's Degree",
    description:
      "The Dual degree is in demand nowadays. Many students plan to study an online MBA + DBA as their career pathway. The student can complete the degree in 2.5 years, which combines executive skills an MBA student needs with applied research and the respected “Dr” title.",
    image: "/edgewood/assets/img/dbamba-edgewood.webp",
    brochureUrl: "/edgewood/assets/brochures/edgewood_mba_dba.pdf",
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
            courseOptions={EDGEWOOD_COURSE_OPTIONS}
            formNameOverride={`Edgewood Apply Form - ${selectedCourse.title}`}
            sourceOverride="Edgewood LP"
            utmSourceFallback="Edgewood Organic"
            utmMediumFallback="Edgewood Course Apply Form"
            submitButtonText="Submit Application"
            submitButtonClassName="bg-[#c9230c] hover:bg-[#aa1c08]"
            redirectUrl="/thank-you"
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
            courseOptions={EDGEWOOD_COURSE_OPTIONS}
            formNameOverride={`Edgewood Brochure Form - ${selectedCourse.title}`}
            sourceOverride="Edgewood LP"
            utmSourceFallback="Edgewood Organic"
            utmMediumFallback="Edgewood Course Brochure Form"
            submitButtonText="Get Brochure"
            submitButtonClassName="bg-[#c9230c] hover:bg-[#aa1c08]"
            isBrochureForm
            brochureUrl={selectedCourse.brochureUrl}
            redirectUrl="/thank-you"
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
        <h3 className="text-[21px] font-extrabold leading-[1.2] text-black sm:text-[20px]">
          {course.title}
        </h3>

        <p className="mt-3 text-[13px] leading-[1.55] text-[#5b5b5b] sm:text-[13px]">
          {course.description}
        </p>

        <div className="mt-4 space-y-2 text-[12px] font-bold leading-[1.25] text-[#333333] sm:text-[12px]">
          <p>
            <span className="text-gray-500 font-medium">Duration:</span> {course.duration}
          </p>

          <p>
            <span className="text-gray-500 font-medium">Eligibility:</span> {course.eligibility}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-3 pt-6 sm:grid-cols-2 sm:gap-4">
          <button
            type="button"
            onClick={onDownload}
            className="flex min-h-[38px] w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#c9230c] bg-white px-4 py-2.5 text-[12px] font-extrabold text-[#c9230c] transition-all duration-200 hover:bg-[#c9230c] hover:text-white"
          >
            Get Brochure
            <ChevronDown size={13} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            onClick={onApply}
            className="min-h-[38px] w-full cursor-pointer rounded-full bg-[#c9230c] px-4 py-2.5 text-[12px] font-extrabold text-white transition-all duration-200 hover:bg-[#aa1c08]"
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
        {children}
      </div>
    </div>
  );
}
