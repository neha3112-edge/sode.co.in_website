"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Check, Download, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

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
      "Liverpool Business School Online MBA program builds expertise in Python, covering core concepts, data analysis using Pandas and NumPy, and machine learning modelling with scikit-learn.",
    image: "/assets/images/liverpool-mba-business-analytics.webp",
  },
  {
    id: 2,
    title: "MBA in Finance",
    description:
      "LBS Online MBA in Finance offers a comprehensive approach to mastering finance-driven business. It helps learners to gain knowledge in financial modelling and risk analysis.",
    image: "/assets/images/liverpool-mba-finance.webp",
  },
  {
    id: 3,
    title: "MBA in Marketing",
    description:
      "The LBS Online MBA syllabus in Marketing covers digital marketing channels, analytics, social media, SEO, branding, integrated communications, and B2B marketing for strategic impact.",
    image: "/assets/images/liverpool-mba-marketing.webp",
  },
  {
    id: 4,
    title: "MBA in Leadership",
    description:
      "The LBS online MBA syllabus in Leadership equips learners to navigate VUCA environments, manage complexity, lead global teams, and advance their careers using the LEAP growth and development framework.",
    image: "/assets/images/liverpool-mba-leadership.webp",
  },
  {
    id: 5,
    title: "MBA in Human Resource Management",
    description:
      "The LBS Online MBA in HRM is designed to build strategic HR leaders for modern organisations. Through this program, learners focus on effective outsourcing models.",
    image: "/assets/images/liverpool-mba-human-resource.webp",
  },
  {
    id: 6,
    title: "MBA in Operations and Supply Chain Management",
    description:
      "The LBS Online MBA in Operations and Supply Chain covers distribution management, inventory, integrated supply chains, and analytics for strategic decision-making.",
    image: "/assets/images/liverpool-mba-operations-supply-chain.webp",
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
      <section id="courses" className="bg-white py-10 sm:py-12 lg:py-[34px]">
        <Container>
          <div className="mx-auto w-full max-w-[1140px]">
            {/* =====================================================
                Heading
            ====================================================== */}

            <div className="mb-7 text-center sm:mb-8">
              <h2 className="text-[27px] font-black leading-[1.1] tracking-[-0.025em] text-black sm:text-[31px]">
                Courses Offered By
              </h2>

              <p className="mx-auto mt-1 w-fit bg-[#effffb] px-1 text-[25px] font-black leading-[1.1] tracking-[-0.02em] text-[#24cbbb] sm:text-[29px]">
                Liverpool Business School Online
              </p>
            </div>

            {/* =====================================================
                Course Grid
            ====================================================== */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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

      {/* =============================================================
          Apply Modal
      ============================================================== */}

      {activeForm === "apply" && selectedCourse && (
        <CourseFormModal
          title={`Apply for ${selectedCourse.title}`}
          onClose={closeForm}
        >
          <FormWrapper
            title="Apply Now"
            subtitle={`Start your application for ${selectedCourse.title}`}
            onClose={closeForm}
            defaultCourse={selectedCourse.title}
            hideCourseField
            formNameOverride={`Liverpool Apply Form - ${selectedCourse.title}`}
            sourceOverride="Liverpool Course Apply"
            utmSourceFallback="Liverpool Organic"
            utmMediumFallback="Liverpool Course Apply Form"
            submitButtonText="Submit Application"
            submitButtonClassName="!bg-[#00499b] hover:!bg-[#003d83]"
          />
        </CourseFormModal>
      )}

      {/* =============================================================
          Brochure Modal
      ============================================================== */}

      {activeForm === "brochure" && selectedCourse && (
        <CourseFormModal
          title={`Get Brochure for ${selectedCourse.title}`}
          onClose={closeForm}
        >
          <FormWrapper
            title="Get Brochure"
            subtitle={`Fill your details to receive the ${selectedCourse.title} brochure`}
            onClose={closeForm}
            defaultCourse={selectedCourse.title}
            hideCourseField
            formNameOverride={`Liverpool Brochure Form - ${selectedCourse.title}`}
            sourceOverride="Liverpool Course Brochure"
            utmSourceFallback="Liverpool Organic"
            utmMediumFallback="Liverpool Course Brochure Form"
            submitButtonText="Get Brochure"
            submitButtonClassName="!bg-black hover:!bg-[#222222]"
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
    <article className="flex h-full flex-col overflow-hidden bg-[#eeeeee]">
      {/* =========================================================
          Course Image
      ========================================================== */}

      <div className="relative h-[190px] w-full overflow-hidden sm:h-[205px]">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* =========================================================
          Course Content
      ========================================================== */}

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="text-[18px] font-black leading-[1.2] tracking-[-0.02em] text-black sm:text-[20px]">
          {course.title}
        </h3>

        <p className="mt-2 text-[14px] font-medium leading-[1.22] text-[#1f1f1f] sm:text-[15px]">
          {course.description}
        </p>

        {/* Divider */}

        <div className="mt-auto pt-1">
          <div className="mb-4 h-px w-full bg-[#b5b5b5]" />

          {/* Buttons */}

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={onApply}
              className="inline-flex min-h-[41px] flex-1 items-center justify-center gap-1 rounded-[5px] bg-[#00499b] px-4 py-2 text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#003d83] hover:shadow-md sm:text-[15px]"
            >
              Apply Now
              <Check size={18} strokeWidth={3} />
            </button>

            <button
              type="button"
              onClick={onDownload}
              className="inline-flex min-h-[41px] flex-1 items-center justify-center gap-1 rounded-[5px] bg-black px-4 py-2 text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#222222] hover:shadow-md sm:text-[15px]"
            >
              Get Brochure
              <Download size={18} strokeWidth={2.8} />
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
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#eef5ff] text-[#00499b] transition-colors hover:bg-[#dce9fb]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
