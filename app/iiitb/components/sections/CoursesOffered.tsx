"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Clock, Download, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type Course = {
  id: number;
  title: string;
  duration: string;
  description: string;
  image: string;
};

type FormType = "apply" | "brochure" | null;

const courses: Course[] = [
  {
    id: 1,
    title: "Executive Programme in Generative AI for Leaders",
    duration: "20 weeks",
    description:
      "IIIT Bangalore online courses help leaders learn GenAI strategy and adoption using the A.D.A.P.T. Framework, with real business use cases, a capstone, and executive-level outcomes.",
    image: "/iiitb/img/course-1.webp",
  },
  {
    id: 2,
    title: "Executive Post Graduate Certificate Programme in Data Science & AI",
    duration: "25 weeks",
    description:
      "IIIT Bangalore online courses build skills in data science and artificial intelligence through statistics, machine learning, deep learning, industry projects, and expert mentorship.",
    image: "/iiitb/img/course-2.webp",
  },
  {
    id: 3,
    title:
      "Professional Certificate Programme in Data Science with Generative AI",
    duration: "24 weeks",
    description:
      "IIIT Bangalore online courses deliver practical learning in analytics, ML pipelines, and GenAI, with labs, real datasets, hands-on projects, and portfolio support.",
    image: "/iiitb/img/course-3.webp",
  },
  {
    id: 4,
    title: "Executive Post Graduate Programme in Applied AI and Agentic AI",
    duration: "12 months",
    description:
      "Learn applied artificial intelligence, generative AI, autonomous agents, machine learning models, and real-world AI deployment through practical projects and industry use cases.",
    image: "/iiitb/img/course-4.webp",
  },
  {
    id: 5,
    title: "Executive Diploma in Machine Learning & Artificial Intelligence",
    duration: "12 months",
    description:
      "Build strong foundations in machine learning, deep learning, natural language processing, and artificial intelligence with practical assignments and capstone projects.",
    image: "/iiitb/img/course-5.webp",
  },
  {
    id: 6,
    title: "Chief Technology Officer & AI Leadership Programme",
    duration: "7 months",
    description:
      "Designed for technology leaders who want to develop strategic capabilities in AI transformation, product innovation, digital leadership, and enterprise technology management.",
    image: "/iiitb/img/course-6.webp",
  },
  {
    id: 7,
    title: "Master of Science in Machine Learning & Artificial Intelligence",
    duration: "20 months",
    description:
      "Develop advanced capabilities in machine learning, artificial intelligence, deep learning, NLP, computer vision, and production-level AI systems.",
    image: "/iiitb/img/new-image1.webp",
  },
  {
    id: 8,
    title: "Master of Science in Data Science with Generative AI",
    duration: "20 months",
    description:
      "Gain advanced knowledge of data science, analytics, statistical modelling, machine learning, generative AI, and business-focused data-driven decision-making.",
    image: "/iiitb/img/new-image2.webp",
  },
];

export function CoursesOffered() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const [activeForm, setActiveForm] = useState<FormType>(null);

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

  const openApplyForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("apply");
  };

  const openBrochureForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("brochure");
  };

  const closeForm = () => {
    setActiveForm(null);
    setSelectedCourse(null);
  };

  return (
    <>
      <section id="main-courses" className="bg-[#f6f7f8] py-8">
        <Container>
          {/* Heading */}
          <div className="mb-10 text-center lg:mb-12">
            <h2 className="text-3xl font-extrabold text-[#064779] sm:text-4xl">
              Courses Offered
            </h2>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              By IIIT Bangalore
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Apply Form Popup */}
      {activeForm === "apply" && selectedCourse && (
        <CourseFormModal title="Apply Now" onClose={closeForm}>
          <FormWrapper
            title="Apply Now"
            subtitle="Start your application journey today"
            onClose={closeForm}
            defaultCourse={selectedCourse.title}
            hideCourseField
            formNameOverride={`IIITB Apply Form - ${selectedCourse.title}`}
            sourceOverride="IIITB Course Apply"
            utmSourceFallback="IIITB Organic"
            utmMediumFallback="IIITB Course Apply Form"
            submitButtonText="Submit Application"
          />
        </CourseFormModal>
      )}

      {/* Brochure Form Popup */}
      {activeForm === "brochure" && selectedCourse && (
        <CourseFormModal title="Download Brochure" onClose={closeForm}>
          <FormWrapper
            title="Download Brochure"
            subtitle="Fill your details to receive the course brochure"
            onClose={closeForm}
            defaultCourse={selectedCourse.title}
            hideCourseField
            formNameOverride={`IIITB Brochure Form - ${selectedCourse.title}`}
            sourceOverride="IIITB Course Brochure"
            utmSourceFallback="IIITB Organic"
            utmMediumFallback="IIITB Course Brochure Form"
            submitButtonText="Download Brochure"
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
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.14)]">
      {/* Course Image */}
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Course Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-extrabold leading-tight text-black sm:text-xl">
          {course.title}
        </h3>

        {/* Duration */}
        <div className="mt-4 flex items-center gap-1.5 text-sm">
          <Clock size={16} strokeWidth={2} className="shrink-0" />
          <span className="font-bold">Duration:</span>
          <span>{course.duration}</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-5.5 text-gray-600 sm:text-[15px]">
          {course.description}
        </p>

        {/* Buttons */}
        <div className="mt-auto grid gap-2 pt-5 grid-cols-2">
          <Button
            size={"lg"}
            type="button"
            onClick={onDownload}
            className="flex min-h-1 w-full items-center justify-center gap-2 rounded-lg bg-[#0757a4] px-5 py-3 text-center text-xs font-bold leading-tight text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#064987] hover:shadow-md active:translate-y-0 sm:px-4 sm:text-xs cursor-pointer"
          >
            <span className="whitespace-nowrap">Get Brochure</span>
            <Download size={15} strokeWidth={2.5} className="shrink-0" />
          </Button>

          <Button
            size={"lg"}
            type="button"
            onClick={onApply}
            className="flex max-h-40 w-full items-center justify-center rounded-lg bg-[#064779] px-5 py-3 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#043a64] hover:shadow-md active:translate-y-0 sm:text-xs cursor-pointer"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Card>
  );
}

type CourseFormModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

function CourseFormModal({ title, children, onClose }: CourseFormModalProps) {
  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500 transition-colors hover:bg-red-100 hover:text-red-600"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
