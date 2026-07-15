"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type FormType = "apply" | null;

/*
|--------------------------------------------------------------------------
| DBA Specialisation Courses
|--------------------------------------------------------------------------
|
| Note:
| Image paths ko apne actual public/assets/img folder ke image names se
| match kar lena.
|
*/

const courses: Course[] = [
  {
    id: 1,
    title: "Doctorate of Business Administration",
    description:
      "Industry-aligned Curriculum that gives complete knowledge to excel in the business administration field.",
    image: "/rushford/assets/img/gebneralirushford.webp",
  },
  {
    id: 2,
    title: "DBA in International Business",
    description:
      "Focuses on global trade, cross-border strategies, and international business leadership.",
    image: "/rushford/assets/img/international-business-rushford.webp",
  },
  {
    id: 3,
    title: "DBA in Healthcare Management",
    description:
      "Get leadership expertise in the administration of hospitals, clinics, and healthcare systems.",
    image: "/rushford/assets/img/healthcare-management-rushford.webp",
  },
  {
    id: 4,
    title: "DBA in Human Resource Management",
    description:
      "Enhances the human resource management in workforce planning, talent development, & HR strategies.",
    image: "/rushford/assets/img/human-resource-management-rushford.webp",
  },
  {
    id: 5,
    title: "DBA in Supply Chain Management",
    description:
      "Builds advanced knowledge and skills in logistics, operations, and supply chain efficiency.",
    image: "/rushford/assets/img/supplychain-management-rushford.webp",
  },
  {
    id: 6,
    title: "DBA in Finance",
    description:
      "Covers essential sectors such as corporate finance, investment, and effective risk management.",
    image: "/rushford/assets/img/finance-rushford.webp",
  },
  {
    id: 7,
    title: "DBA in Data Science",
    description:
      "Uses data-driven research to create innovative business strategies to boost the growth of the organisation.",
    image: "/rushford/assets/img/data-science-rushford.webp",
  },
  {
    id: 8,
    title: "DBA in Marketing",
    description:
      "Emphasizes on consumer insights, digital marketing, and brand management strategies.",
    image: "/rushford/assets/img/marketing-rushford.webp",
  },
  {
    id: 9,
    title: "DBA in Business Analytics",
    description:
      "Develop advanced analytics skills for data-informed decision-making processes for business growth.",
    image: "/rushford/assets/img/business-analytics-rushford.webp",
  },
];

export function CoursesOffered() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeForm, setActiveForm] = useState<FormType>(null);

  /*
  |--------------------------------------------------------------------------
  | Close Form
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
      <section id="courses" className="bg-white py-10 sm:py-12 lg:py-[26px]">
        <Container>
          {/* =============================================================
              Section Heading
          ============================================================== */}

          <div className="mb-6 text-center sm:mb-7 lg:mb-5">
            <h2 className="text-[25px] font-medium leading-tight tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[29px]">
              DBA Specialisations At
            </h2>

            <p className="mt-2 text-[14px] font-normal leading-none text-[#191919] sm:text-[15px]">
              Rushford Business School
            </p>
          </div>

          {/* =============================================================
              Course Cards Grid
          ============================================================== */}

          <div className="mx-auto grid max-w-[1135px] grid-cols-1 gap-x-[18px] gap-y-[18px] md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onApply={() => openApplyForm(course)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* =============================================================
          Apply Now Modal
      ============================================================== */}

      {activeForm === "apply" && selectedCourse && (
        <CourseFormModal
          title={`Apply for ${selectedCourse.title}`}
          onClose={closeForm}
        >
          <FormWrapper
            title="Apply Now"
            subtitle="Fill your details to start your DBA application"
            onClose={closeForm}
            defaultCourse={selectedCourse.title}
            hideCourseField
            formNameOverride={`Rushford Apply Form - ${selectedCourse.title}`}
            sourceOverride="Rushford DBA Course Apply"
            utmSourceFallback="Rushford Organic"
            utmMediumFallback="Rushford DBA Apply Form"
            submitButtonText="Submit Application"
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
};

function CourseCard({ course, onApply }: CourseCardProps) {
  return (
    <article className="flex h-full min-h-[392px] flex-col overflow-hidden rounded-[11px] border border-[#d6d6d6] bg-[#f1f1f1] shadow-[0_2px_6px_rgba(0,0,0,0.20)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)]">
      {/* =============================================================
          Course Image
      ============================================================== */}

      <div className="relative h-[180px] w-full overflow-hidden sm:h-[185px]">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1279px) 50vw,
            33vw
          "
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>

      {/* =============================================================
          Multicolour Strip
      ============================================================== */}

      <div className="flex h-[7px] w-full shrink-0">
        <span className="h-full w-1/4 bg-[#d2758a]" />
        <span className="h-full w-1/4 bg-[#f42d82]" />
        <span className="h-full w-1/4 bg-[#ff595e]" />
        <span className="h-full w-1/4 bg-[#cf2037]" />
      </div>

      {/* =============================================================
          Course Details
      ============================================================== */}

      <div className="flex flex-1 flex-col px-5 pb-5 pt-[18px] sm:px-5">
        <h3 className="min-h-[48px] text-[19px] font-medium leading-[1.15] tracking-[-0.01em] text-[#101010] sm:text-[20px]">
          {course.title}
        </h3>

        <p className="mt-[7px] text-[14px] font-normal leading-[1.28] text-[#171717] sm:text-[15px]">
          {course.description}
        </p>

        {/* Separator Line */}
        <div className="mt-auto border-t border-[#9f9f9f] pt-[10px]">
          <button
            type="button"
            onClick={onApply}
            className="inline-flex min-h-[38px] cursor-pointer items-center justify-center rounded-[5px] bg-[#7047c1] px-5 py-2 text-[14px] font-bold text-white transition-all duration-200 hover:bg-[#5d35ad] focus:outline-none focus:ring-4 focus:ring-[#7047c1]/25 sm:text-[15px]"
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
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-[430px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close application form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#f1eaff] text-[#7047c1] transition-colors duration-200 hover:bg-[#e5d9ff]"
        >
          <X size={20} strokeWidth={2.3} />
        </button>

        {children}
      </div>
    </div>
  );
}
