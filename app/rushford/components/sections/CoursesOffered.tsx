"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RUSHFORD_COURSE_OPTIONS } from "../../constants";

/* =========================================================
   TYPES
 ========================================================= */

type Course = {
  id: number;
  title: string;
  duration: string;
  description: string;
  image: string;
  brochureUrl: string;
};

type FormType = "apply" | null;

/* =========================================================
   COURSE CARD DATA
 ========================================================= */

const courses: Course[] = [
  {
    id: 1,
    title: "Doctorate of Business Administration",
    duration: "36 Months",
    description:
      "Industry-aligned Curriculum that gives complete knowledge to excel in the business administration field.",
    image: "/rushford/assets/img/gebneralirushford.webp",
    brochureUrl: "/rushford/assets/brochures/main_brochure.pdf",
  },
  {
    id: 2,
    title: "DBA in International Business",
    duration: "36 Months",
    description:
      "Focuses on global trade, cross-border strategies, and international business leadership.",
    image: "/rushford/assets/img/international-business-rushford.webp",
    brochureUrl: "/rushford/assets/brochures/main_brochure.pdf",
  },
  {
    id: 3,
    title: "DBA in Healthcare Management",
    duration: "36 Months",
    description:
      "Get leadership expertise in the administration of hospitals, clinics, and healthcare systems.",
    image: "/rushford/assets/img/healthcare-management-rushford.webp",
    brochureUrl: "/rushford/assets/brochures/main_brochure.pdf",
  },
  {
    id: 4,
    title: "DBA in Human Resource Management",
    duration: "36 Months",
    description:
      "Enhances the human resource management in workforce planning, talent development, & HR strategies.",
    image: "/rushford/assets/img/human-resource-management-rushford.webp",
    brochureUrl: "/rushford/assets/brochures/main_brochure.pdf",
  },
  {
    id: 5,
    title: "DBA in Supply Chain Management",
    duration: "36 Months",
    description:
      "Builds advanced knowledge and skills in logistics, operations, and supply chain efficiency.",
    image: "/rushford/assets/img/supplychain-management-rushford.webp",
    brochureUrl: "/rushford/assets/brochures/main_brochure.pdf",
  },
  {
    id: 6,
    title: "DBA in Finance",
    duration: "36 Months",
    description:
      "Covers essential sectors such as corporate finance, investment, and effective risk management.",
    image: "/rushford/assets/img/finance-rushford.webp",
    brochureUrl: "/rushford/assets/brochures/main_brochure.pdf",
  },
  {
    id: 7,
    title: "DBA in Data Science",
    duration: "36 Months",
    description:
      "Uses data-driven research to create innovative business strategies to boost the growth of the organisation.",
    image: "/rushford/assets/img/data-science-rushford.webp",
    brochureUrl: "/rushford/assets/brochures/main_brochure.pdf",
  },
  {
    id: 8,
    title: "DBA in Marketing",
    duration: "36 Months",
    description:
      "Emphasizes on consumer insights, digital marketing, and brand management strategies.",
    image: "/rushford/assets/img/marketing-rushford.webp",
    brochureUrl: "/rushford/assets/brochures/main_brochure.pdf",
  },
  {
    id: 9,
    title: "DBA in Business Analytics",
    duration: "36 Months",
    description:
      "Develop advanced analytics skills for data-informed decision-making processes for business growth.",
    image: "/rushford/assets/img/business-analytics-rushford.webp",
    brochureUrl: "/rushford/assets/brochures/main_brochure.pdf",
  },
];

/* =========================================================
   COURSES OFFERED COMPONENT
 ========================================================= */

export function CoursesOffered() {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  /* =========================================================
     LOCK BODY SCROLL WHEN FORM IS OPEN
  ========================================================= */

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

  /* =========================================================
     CLOSE FORM ON ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveForm(null);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  /* =========================================================
     OPEN APPLY FORM
  ========================================================= */

  const openApplyForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("apply");
  };

  /* =========================================================
     CLOSE FORM
  ========================================================= */

  const closeForm = () => {
    setActiveForm(null);
    setSelectedCourse(null);
  };

  return (
    <>
      <section id="courses" className="bg-[#f6f7f8] py-14 sm:py-16">
        <Container>
          {/* Heading */}

          <div className="mb-10 text-center lg:mb-12">
            <h2 className="text-3xl font-semibold text-[#0f3b8c] sm:text-4xl">
              DBA Specialisations At
            </h2>

            <p className="mt-2 text-lg font-bold text-gray-700 sm:text-xl">
              Rushford Business School
            </p>
          </div>

          {/* Course Grid */}

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
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

      {/* =====================================================
          APPLY FORM POPUP
      ====================================================== */}

      {activeForm === "apply" && (
        <div
          role="presentation"
          onClick={closeForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="rushford-apply-form-title"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl animate-[scaleIn_0.2s_ease]"
          >
            {/* Close Button */}

            <button
              type="button"
              onClick={closeForm}
              aria-label="Close apply form"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-black"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <div id="rushford-apply-form-title">
              <FormWrapper
                title="Apply Now"
                subtitle="Select your preferred course and start your application"
                onClose={closeForm}
                defaultCourse=""
                courseOptions={RUSHFORD_COURSE_OPTIONS}
                formNameOverride="Rushford Course Apply Form"
                sourceOverride="Rushford LP"
                utmSourceFallback="Organic"
                utmMediumFallback="Rushford_Organic"
                submitButtonText="Submit Application"
                submitButtonClassName="bg-[#0f3b8c] hover:bg-[#0c2e6f]"
                redirectUrl="/rushford/thank-you"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================
   COURSE CARD PROPS
 ========================================================= */

type CourseCardProps = {
  course: Course;
  onApply: () => void;
};

/* =========================================================
   COURSE CARD COMPONENT
 ========================================================= */

function CourseCard({ course, onApply }: CourseCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.14)]">
      {/* Course Image */}

      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Colored Line under Image */}
      <div className="grid grid-cols-4 h-1.5 w-full shrink-0">
        <div className="bg-[#cc7581] h-full"></div>
        <div className="bg-[#d2006b] h-full"></div>
        <div className="bg-[#ff5252] h-full"></div>
        <div className="bg-[#bc002c] h-full"></div>
      </div>

      {/* Course Content */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-tight text-gray-900 sm:text-xl">
          {course.title}
        </h3>

        {/* Description */}

        <p className="mt-4 text-sm leading-5.5 text-gray-600 sm:text-[15px]">
          {course.description}
        </p>

        {/* Button */}

        <div className="mt-auto pt-6">
          <Button
            size={"lg"}
            type="button"
            onClick={onApply}
            className="flex min-h-11 w-full items-center justify-center rounded-lg bg-[#0f3b8c] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0c2e6f] hover:shadow-md active:translate-y-0 cursor-pointer"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Card>
  );
}
