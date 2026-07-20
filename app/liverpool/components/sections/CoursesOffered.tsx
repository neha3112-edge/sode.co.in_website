"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Download } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { LIVERPOOL_COURSE_OPTIONS } from "../../constants";

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
    title: "MBA in Business Analytics",
    description:
      "Learners develop skills in data analytics, Python, SQL, data mining, and dashboarding to make data-driven business decisions through the MBA Liverpool online specialisation.",
    image: "/liverpool/assets/img/Business-Analytics.webp",
  },
  {
    id: 2,
    title: "MBA in Finance",
    description:
      "Professionals gain expertise in financial modelling, forecasting, corporate finance, capital budgeting techniques, and financial risk analysis through the Liverpool MBA specialisation.",
    image: "/liverpool/assets/img/Finance.webp",
  },
  {
    id: 3,
    title: "MBA in Marketing",
    description:
      "Learners build expertise in digital marketing channels, branding, communication, SEO, social media marketing, and marketing analytics through the MBA in Liverpool specialisation.",
    image: "/liverpool/assets/img/Marketing.webp",
  },
  {
    id: 4,
    title: "MBA in Leadership",
    description:
      "Professionals develop leadership capabilities by learning to manage volatility, uncertainty, complexity, global teams, and future leadership challenges.",
    image: "/liverpool/assets/img/Leadership.webp",
  },
  {
    id: 5,
    title: "MBA in Human Resource Management",
    description:
      "Learners gain knowledge of strategic HRM, HR operations, analytics, data visualisation, and storytelling to manage modern workforce challenges.",
    image: "/liverpool/assets/img/HRM.webp",
  },
  {
    id: 6,
    title: "MBA in Operations and Supply Chain Management",
    description:
      "Professionals develop skills in distribution channels, supply chain analytics, inventory management, fleet analytics, and capacity planning for operational excellence.",
    image: "/liverpool/assets/img/ops-m.webp",
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
              <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-4xl">
                Courses Offered in <span className="text-[#00499b]">Liverpool Online MBA</span>
              </h2>
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
            courseOptions={LIVERPOOL_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride={`Liverpool Apply Form - ${selectedCourse.title}`}
            sourceOverride="Liverpool LP"
            utmSourceFallback="Liverpool Organic"
            utmMediumFallback="Liverpool Course Apply Form"
            submitButtonText="Submit Application"
            submitButtonClassName="bg-[#00499b] hover:bg-[#003d83]"
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
            courseOptions={LIVERPOOL_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride={`Liverpool Brochure Form - ${selectedCourse.title}`}
            sourceOverride="Liverpool LP"
            utmSourceFallback="Liverpool Organic"
            utmMediumFallback="Liverpool Course Brochure Form"
            submitButtonText="Get Brochure"
            submitButtonClassName="bg-[#00499b] hover:bg-[#003d83]"
            isBrochureForm
            brochureUrl="/liverpool/assets/img/main_brochure.pdf"
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
              className="inline-flex min-h-[38px] flex-1 items-center justify-center gap-1.5 rounded-[6px] bg-[#00499b] px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#003d83] hover:shadow-md"
            >
              Apply Now
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>

            <button
              type="button"
              onClick={onDownload}
              className="inline-flex min-h-[38px] flex-1 items-center justify-center gap-1.5 rounded-[6px] bg-black px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-md"
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
