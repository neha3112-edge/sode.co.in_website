"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { Container } from "@/components/ui/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { GGU_COURSE_OPTIONS } from "../../constants";

type CourseCategory = "dba" | "mba";

type Course = {
  id: number;
  category: CourseCategory;
  title: string;
  formValue: string;
  description: string;
  image: string;
};

type FormType = "apply" | null;

/* =========================================================
   DBA Specialization Courses
========================================================= */

const dbaCourses: Course[] = [
  {
    id: 1,
    category: "dba",
    title: "Online DBA in Finance",
    formValue: "DBA in Finance",
    description:
      "Master advanced financial theory and quantitative analysis. Prepare for leadership roles in corporate finance, investment banking, and economic consulting.",
    image: "/ggu/assets/img/finance-ggu.webp",
  },
  {
    id: 2,
    category: "dba",
    title: "Online DBA in Leadership",
    formValue: "DBA in Leadership",
    description:
      "Develop sophisticated strategies for leading organizational change. Enhance your ability to solve complex human capital and strategic management challenges.",
    image: "/ggu/assets/img/leadership-ggu.webp",
  },
  {
    id: 3,
    category: "dba",
    title: "Online DBA in Business Analytics",
    formValue: "DBA in Business Analytics",
    description:
      "Learn to transform big data into actionable business intelligence. Build expertise in predictive modeling, data mining, and data-driven decision-making.",
    image: "/ggu/assets/img/business-analytics-ggu.webp",
  },
  {
    id: 4,
    category: "dba",
    title: "Online DBA in Marketing",
    formValue: "DBA in Marketing",
    description:
      "Explore advanced research on consumer behavior and brand management strategies. Gain mastery in digital marketing analytics and global marketing campaign development.",
    image: "/ggu/assets/img/marketing-ggu.webp",
  },
  {
    id: 5,
    category: "dba",
    title: "Online DBA in General",
    formValue: "DBA in General",
    description:
      "Pursue a broad, interdisciplinary approach to advanced business challenges. Customize your research to address complex issues across multiple business functions.",
    image: "/ggu/assets/img/general-ggu.webp",
  },
  {
    id: 6,
    category: "dba",
    title: "Online DBA in Generative AI",
    formValue: "DBA in Generative AI",
    description:
      "Investigate the strategic implementation and ethical governance of AI in the business sector. Develop skills to lead innovation and leverage generative AI for competitive advantage.",
    image: "/ggu/assets/img/generative-ai-ggu.webp",
  },
];

/* =========================================================
   MBA Specialization Courses
========================================================= */

const mbaCourses: Course[] = [
  {
    id: 101,
    category: "mba",
    title: "Business Analytics Concentration",
    formValue: "MBA in Business Analytics Concentration",
    description:
      "Focuses on enterprise performance management, business intelligence, web and social analytics, and data visualization for informed decision-making.",
    image: "/ggu/assets/img/business-analytics-concentration-ggu-mba.webp",
  },
  {
    id: 102,
    category: "mba",
    title: "Industrial Organizational Psychology Concentration",
    formValue: "MBA in Industrial Organizational Psychology Concentration",
    description:
      "Covers organizational behavior, applied psychological research, and consulting skills to enhance leadership effectiveness.",
    image: "/ggu/assets/img/industrial-organizational-psychology-concentration-ggu-mba.webp",
  },
  {
    id: 103,
    category: "mba",
    title: "IT Management",
    formValue: "MBA in Information Technology Management",
    description:
      "Emphasizes digital transformation, IT management, data structures, and software engineering leadership, to align technology with business objectives.",
    image: "/ggu/assets/img/information-technology-management-ggu-mba.webp",
  },
  {
    id: 104,
    category: "mba",
    title: "Finance",
    formValue: "MBA in Finance",
    description:
      "Provides deep training in financial reporting, business valuation, financial modeling, and analytical frameworks essential for corporate finance and investment-driven leadership roles.",
    image: "/ggu/assets/img/finance-ggu-mba.webp",
  },
  {
    id: 105,
    category: "mba",
    title: "Marketing",
    formValue: "MBA in Marketing",
    description:
      "Centers on market research, digital marketing, integrated marketing communication, and e-commerce strategy to build data-driven, customer-focused marketing leadership skills.",
    image: "/ggu/assets/img/marketing-ggu-mba.webp",
  },
  {
    id: 106,
    category: "mba",
    title: "Adaptive Leadership",
    formValue: "MBA in Adaptive Leadership",
    description:
      "Develops capabilities in adaptive leadership, leading complex change, and personal leadership growth to manage uncertainty and transformation in modern organizations.",
    image: "/ggu/assets/img/adaptive-leadership-ggu-mba.webp",
  },
  {
    id: 107,
    category: "mba",
    title: "General",
    formValue: "MBA in General",
    description:
      "Allows students to select courses across multiple concentrations, creating a flexible MBA pathway aligned with individual career goals and professional specialization needs.",
    image: "/ggu/assets/img/general-ggu-mba.webp",
  },
];

export function Specialization() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("dba");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const visibleCourses = useMemo(() => {
    return activeCategory === "dba" ? dbaCourses : mbaCourses;
  }, [activeCategory]);

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const closeForm = useCallback(() => {
    setActiveForm(null);
    setSelectedCourse(null);
  }, []);

  const openApplyForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("apply");
  };

  const handleCategoryChange = (category: CourseCategory) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setSelectedIndex(0);
  };

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
      setSlideCount(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);
    carouselApi.on("reInit", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState);
      carouselApi.off("reInit", updateCarouselState);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;

    const timeoutId = window.setTimeout(() => {
      carouselApi.reInit();
      carouselApi.scrollTo(0, true);
      setSelectedIndex(0);
      autoplayPlugin.current.reset();
      autoplayPlugin.current.play();
    }, 50);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeCategory, carouselApi]);

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
        id="courses"
        className="border-t-[4px] border-[#eeeeee] bg-white py-10 sm:py-16 lg:py-[60px]"
      >
        <Container>
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Heading */}

            <motion.div
              initial={{
                opacity: 0,
                y: 22,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
              }}
              className="text-center"
            >
              <h2 className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#003d78] sm:text-[31px]">
                Online DBA Specialization at GGU
              </h2>

              <p className="mt-3 text-[17px] font-semibold leading-[1.3] text-black sm:text-[16px]">
                (Doctorate of business administration)
              </p>
            </motion.div>

            {/* DBA and MBA Buttons */}

            <div className="mt-7 flex flex-row items-center justify-center gap-3 sm:gap-[10px]">
              <button
                type="button"
                onClick={() => handleCategoryChange("dba")}
                className={`min-h-[37px] min-w-[177px] rounded-[4px] px-5 py-2 text-[13px] font-bold transition-all duration-300 ease-in-out ${activeCategory === "dba"
                  ? "bg-[#ee5105] text-white shadow-sm"
                  : "bg-[#eeeeee] text-black hover:bg-[#dddddd]"
                  }`}
              >
                DBA Specialization
              </button>

              <button
                type="button"
                onClick={() => handleCategoryChange("mba")}
                className={`min-h-[37px] min-w-[179px] rounded-[4px] px-5 py-2 text-[13px] font-bold transition-all duration-300 ease-in-out ${activeCategory === "mba"
                  ? "bg-[#ee5105] text-white shadow-sm"
                  : "bg-[#eeeeee] text-black hover:bg-[#dddddd]"
                  }`}
              >
                MBA Specialization
              </button>
            </div>

            {/* Auto Scrolling Carousel */}

            <div
              className="relative mx-auto mt-[30px] w-full overflow-hidden"
              onMouseEnter={() => {
                autoplayPlugin.current.stop();
              }}
              onMouseLeave={() => {
                autoplayPlugin.current.play();
              }}
            >
              <Carousel
                key={activeCategory}
                setApi={setCarouselApi}
                plugins={[autoplayPlugin.current]}
                opts={{
                  align: "start",
                  loop: true,
                  skipSnaps: false,
                  dragFree: false,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-5">
                  {visibleCourses.map((course, index) => (
                    <CarouselItem
                      key={`${activeCategory}-${course.id}`}
                      className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.97,
                          y: 18,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: Math.min(index * 0.05, 0.2),
                        }}
                        className="h-full"
                      >
                        <CourseCard
                          course={course}
                          onApply={() => openApplyForm(course)}
                        />
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Carousel Dots */}

            <div className="mt-5 flex flex-wrap items-center justify-center gap-[7px]">
              {Array.from({
                length: slideCount,
              }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-[9px] rounded-full transition-all duration-300 ease-in-out ${selectedIndex === index
                    ? "w-[27px] bg-[#ee5105]"
                    : "w-[9px] bg-[#d3d3d3] hover:bg-[#b0b0b0]"
                    }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Apply Modal */}

      {activeForm === "apply" && selectedCourse && (
        <CourseFormModal title="Apply Now" onClose={closeForm}>
          <FormWrapper
            title="Admission Open"
            subtitle="Academic Experts will assist you!"
            onClose={closeForm}
            defaultCourse={selectedCourse.formValue}
            courseOptions={GGU_COURSE_OPTIONS}
            formNameOverride={`GGU Specialization Apply Form - ${selectedCourse.title}`}
            sourceOverride="GGU LP"
            utmSourceFallback="Organic"
            utmMediumFallback="GGU_Organic"
            submitButtonText="Submit"
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
};

function CourseCard({ course, onApply }: CourseCardProps) {
  return (
    <article className="group flex h-[370px] w-full flex-col overflow-hidden bg-[#eeeeee] rounded-[8px] shadow-sm">
      {/* Course Image */}

      <div className="relative h-[182px] w-full shrink-0 overflow-hidden border-b-[4px] border-[#ee5105] bg-[#dddddd]">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 34vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Course Content */}

      <div className="flex min-h-0 flex-1 flex-col px-5 pb-[18px] pt-[18px]">
        <h3 className="line-clamp-2 text-[16px] font-extrabold leading-[1.25] tracking-[-0.025em] text-[#003d78] sm:text-[17px]">
          {course.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-[13px] font-medium leading-[1.32] text-[#202020] sm:text-[13px]">
          {course.description}
        </p>

        <div className="mt-auto">
          <div className="mb-[15px] h-px w-full bg-[#a8a8a8]" />

          <button
            type="button"
            onClick={onApply}
            className="inline-flex min-h-[39px] items-center justify-center rounded-[5px] bg-[#003f78] hover:bg-[#002e59] px-5 py-2 text-[14px] font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
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
    <motion.div
      role="presentation"
      onMouseDown={onClose}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
      >

        {children}
      </motion.div>
    </motion.div>
  );
}
