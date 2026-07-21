"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Download } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { PSB_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type FormType = "apply" | "brochure" | null;

/*
|--------------------------------------------------------------------------
| Liverpool MBA Courses
|--------------------------------------------------------------------------
*/

const courses: Course[] = [
  {
    id: 1,
    title: "Strategic Leadership",
    description:
      "Learners in the Executive MBA at IIM Lucknow gain expertise in power, influence, stakeholder management, and corporate governance to strengthen board-level leadership and strategic decision-making.",
    image: "/psb/assets/img/Leadership-2.webp",
  },
  {
    id: 2,
    title: "AI and Technology",
    description:
      "Learners pursuing the IIM Lucknow blended MBA develop AI-driven decision-making capabilities while mastering digital transformation and data advantage for modern business leadership.",
    image: "/psb/assets/img/AI & tech.webp",
  },
  {
    id: 3,
    title: "Finance",
    description:
      "Learners enrolled in the IIM Lucknow Executive MBA explore business valuation, capital markets, fintech, and digital banking to make informed financial and investment decisions.",
    image: "/psb/assets/img/Finance-2.webp",
  },
  {
    id: 4,
    title: "Marketing",
    description:
      "Learners strengthen their marketing expertise through reputation management, brand strategy, and growth-focused customer retention techniques, enhancing leadership capabilities in the Executive MBA in IIM Lucknow.",
    image: "/psb/assets/img/Marketing-2.webp",
  },
  {
    id: 5,
    title: "Operations and Supply Chain",
    description:
      "Learners build expertise in global supply chain strategy, automation, and Industry 4.0 technologies, preparing for operational leadership through the Executive MBA IIM Lucknow programme.",
    image: "/psb/assets/img/Supply chain.webp",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

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
      <section id="courses" className="bg-white py-16">
        <Container>
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Heading */}
            <div className="mb-8 text-center">
              <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
                Specialisations offered in PSB MBA Specialisations
              </h2>
              <h3 className="text-md mt-2 font-extrabold tracking-tight text-[#233568] sm:text-2xl lg:text-2xl">
                Choose Two Specialisations
              </h3>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onApply={() => openApplyForm(course)}
                  onDownload={() => openBrochureForm(course)}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Apply Modal */}
      {activeForm === "apply" && selectedCourse && (
        <CourseFormModal
          title={`Apply for ${selectedCourse.title}`}
          onClose={closeForm}
        >
          <FormWrapper
            title="Apply Now"
            subtitle={`Start your application for ${selectedCourse.title}`}
            onClose={closeForm}
            courseOptions={PSB_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride={`PSB Apply Form - ${selectedCourse.title}`}
            sourceOverride="PSB LP"
            utmSourceFallback="PSB Organic"
            utmMediumFallback="PSB Course Apply Form"
            submitButtonText="Submit Application"
            submitButtonClassName="bg-[#233568] hover:bg-[#1a2850]"
            redirectUrl="/thank-you"
          />
        </CourseFormModal>
      )}

      {/* Brochure Modal */}
      {activeForm === "brochure" && selectedCourse && (
        <CourseFormModal
          title={`Get Brochure for ${selectedCourse.title}`}
          onClose={closeForm}
        >
          <FormWrapper
            title="Get Brochure"
            subtitle={`Fill your details to receive the ${selectedCourse.title} brochure`}
            onClose={closeForm}
            courseOptions={PSB_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride={`PSB Brochure Form - ${selectedCourse.title}`}
            sourceOverride="PSB LP"
            utmSourceFallback="PSB Organic"
            utmMediumFallback="PSB Course Brochure Form"
            submitButtonText="Get Brochure"
            submitButtonClassName="bg-[#233568] hover:bg-[#1a2850]"
            isBrochureForm
            brochureUrl="/psb/assets/img/main_brochure.pdf"
            redirectUrl="/thank-you"
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
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs">
      {/* Course Image */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Course Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-gray-900 leading-snug">
          {course.title}
        </h3>

        <p className="mt-2 text-xs leading-relaxed text-gray-600 flex-1">
          {course.description}
        </p>

        {/* Divider */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          {/* Buttons */}
          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={onApply}
              className="inline-flex min-h-[38px] flex-1 items-center justify-center gap-1.5 rounded-[6px] bg-[#233568] px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1a2850] hover:shadow-md"
            >
              Apply Now
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>

            <button
              type="button"
              onClick={onDownload}
              className="inline-flex min-h-[38px] flex-1 items-center justify-center gap-1.5 rounded-[6px] bg-[#b31e6b] px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Get Brochure
              <Download size={14} strokeWidth={2.5} />
            </button>
          </div>
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
        className="relative max-h-[92vh] w-full max-w-[400px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {children}
      </div>
    </div>
  );
}
