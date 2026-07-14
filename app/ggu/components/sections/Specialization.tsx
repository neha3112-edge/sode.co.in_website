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

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type CourseCategory = "dba" | "mba";

type Course = {
  id: number;
  category: CourseCategory;
  title: string;
  description: string;
  image: string;
};

type FormType = "apply" | null;

/*
|--------------------------------------------------------------------------
| DBA Specialization Courses
|--------------------------------------------------------------------------
*/

const dbaCourses: Course[] = [
  {
    id: 1,
    category: "dba",
    title: "Online DBA in Leadership",
    description:
      "Develop advanced leadership strategies for leading organisations, managing change, and solving complex business challenges through strategic management.",
    image: "/assets/images/ggu-dba-leadership.webp",
  },
  {
    id: 2,
    category: "dba",
    title: "Online DBA in Business Analytics",
    description:
      "Learn to transform big data into actionable business intelligence. Build expertise in predictive modelling, data mining, and data-driven decision-making.",
    image: "/assets/images/ggu-dba-business-analytics.webp",
  },
  {
    id: 3,
    category: "dba",
    title: "Online DBA in Marketing",
    description:
      "Explore advanced research on consumer behaviour and brand management strategies. Gain mastery in digital marketing analytics and global marketing.",
    image: "/assets/images/ggu-dba-marketing.webp",
  },
  {
    id: 4,
    category: "dba",
    title: "Online DBA in General Management",
    description:
      "Pursue a broad, interdisciplinary study of advanced business challenges and apply doctoral research to address complex issues across business functions.",
    image: "/assets/images/ggu-dba-general-management.webp",
  },
  {
    id: 5,
    category: "dba",
    title: "Online DBA in Finance",
    description:
      "Build advanced knowledge in corporate finance, investment strategy, financial risk, valuation, and evidence-based financial decision-making.",
    image: "/assets/images/ggu-dba-finance.webp",
  },
  {
    id: 6,
    category: "dba",
    title: "Online DBA in Human Resource Management",
    description:
      "Research organisational behaviour, workforce strategy, talent management, employee engagement, and the future of global human resources.",
    image: "/assets/images/ggu-dba-human-resource.webp",
  },
];

/*
|--------------------------------------------------------------------------
| MBA Specialization Courses
|--------------------------------------------------------------------------
*/

const mbaCourses: Course[] = [
  {
    id: 101,
    category: "mba",
    title: "Online MBA in Business Analytics",
    description:
      "Develop practical expertise in business intelligence, analytical tools, data visualisation, forecasting, and data-backed management decisions.",
    image: "/assets/images/ggu-mba-business-analytics.webp",
  },
  {
    id: 102,
    category: "mba",
    title: "Online MBA in Marketing",
    description:
      "Learn brand strategy, customer behaviour, digital marketing, market research, campaign planning, and modern customer acquisition techniques.",
    image: "/assets/images/ggu-mba-marketing.webp",
  },
  {
    id: 103,
    category: "mba",
    title: "Online MBA in Finance",
    description:
      "Strengthen your understanding of corporate finance, financial planning, investment analysis, risk management, and business valuation.",
    image: "/assets/images/ggu-mba-finance.webp",
  },
  {
    id: 104,
    category: "mba",
    title: "Online MBA in Leadership",
    description:
      "Build leadership, communication, negotiation, team management, organisational strategy, and executive decision-making capabilities.",
    image: "/assets/images/ggu-mba-leadership.webp",
  },
  {
    id: 105,
    category: "mba",
    title: "Online MBA in General Management",
    description:
      "Gain multidisciplinary business expertise across strategy, operations, marketing, finance, leadership, and organisational management.",
    image: "/assets/images/ggu-mba-general-management.webp",
  },
  {
    id: 106,
    category: "mba",
    title: "Online MBA in Human Resource Management",
    description:
      "Understand talent acquisition, employee relations, performance management, workforce planning, and strategic human resource leadership.",
    image: "/assets/images/ggu-mba-human-resource.webp",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function SpecializationOffered() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("dba");

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const [activeForm, setActiveForm] = useState<FormType>(null);

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [slideCount, setSlideCount] = useState(0);

  /*
  |--------------------------------------------------------------------------
  | Courses According to Active Tab
  |--------------------------------------------------------------------------
  */

  const visibleCourses = useMemo(() => {
    return activeCategory === "dba" ? dbaCourses : mbaCourses;
  }, [activeCategory]);

  /*
  |--------------------------------------------------------------------------
  | Autoplay
  |--------------------------------------------------------------------------
  */

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

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
  | Open Apply Form
  |--------------------------------------------------------------------------
  */

  const openApplyForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("apply");
  };

  /*
  |--------------------------------------------------------------------------
  | Change Course Category
  |--------------------------------------------------------------------------
  */

  const handleCategoryChange = (category: CourseCategory) => {
    if (category === activeCategory) return;

    setActiveCategory(category);
    setSelectedIndex(0);
  };

  /*
  |--------------------------------------------------------------------------
  | Carousel State
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | Reset Carousel When Category Changes
  |--------------------------------------------------------------------------
  */

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
      <section
        id="specializations"
        className="border-t-[4px] border-[#eeeeee] bg-white py-10 sm:py-12 lg:py-[38px]"
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
              <h2 className="text-[27px] font-black leading-[1.15] tracking-[-0.035em] text-black sm:text-[31px]">
                Online DBA Specialization at GGU
              </h2>

              <p className="mt-1 text-[17px] font-semibold leading-[1.3] text-black sm:text-[19px]">
                (Doctorate of business administration)
              </p>
            </motion.div>

            {/* DBA and MBA Buttons */}

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-[10px]">
              <button
                type="button"
                onClick={() => handleCategoryChange("dba")}
                className={`min-h-[37px] min-w-[177px] rounded-[4px] px-5 py-2 text-[13px] font-extrabold transition-all duration-200 ${
                  activeCategory === "dba"
                    ? "bg-[#e94b04] text-white shadow-sm"
                    : "bg-[#eeeeee] text-black hover:bg-[#dddddd]"
                }`}
              >
                DBA Specialization
              </button>

              <button
                type="button"
                onClick={() => handleCategoryChange("mba")}
                className={`min-h-[37px] min-w-[179px] rounded-[4px] px-5 py-2 text-[13px] font-extrabold transition-all duration-200 ${
                  activeCategory === "mba"
                    ? "bg-[#e94b04] text-white shadow-sm"
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
                      className="basis-[88%] pl-5 sm:basis-[58%] md:basis-[45%] lg:basis-[34%]"
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
                  onClick={() => {
                    carouselApi?.scrollTo(index);
                    autoplayPlugin.current.reset();
                  }}
                  className={`h-[9px] rounded-full transition-all duration-200 ${
                    selectedIndex === index
                      ? "w-[24px] bg-[#e94b04]"
                      : "w-[9px] bg-[#c9c9c9] hover:bg-[#999999]"
                  }`}
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
            subtitle={`Apply for ${selectedCourse.title}`}
            onClose={closeForm}
            defaultCourse={selectedCourse.title}
            hideCourseField
            formNameOverride={`GGU ${
              selectedCourse.category === "dba" ? "DBA" : "MBA"
            } Apply Form - ${selectedCourse.title}`}
            sourceOverride={`GGU ${
              selectedCourse.category === "dba" ? "DBA" : "MBA"
            } Specialization Apply`}
            utmSourceFallback="GGU Organic"
            utmMediumFallback={`GGU ${
              selectedCourse.category === "dba" ? "DBA" : "MBA"
            } Specialization`}
            submitButtonText="Submit Application"
            submitButtonClassName="!bg-[#003f78] hover:!bg-[#002d57]"
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
    <article className="group flex h-[360px] w-full flex-col overflow-hidden bg-[#eeeeee]">
      {/* Course Image */}

      <div className="relative h-[182px] w-full shrink-0 overflow-hidden border-b-[4px] border-[#e3184b] bg-[#dddddd]">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 34vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Course Content */}

      <div className="flex min-h-0 flex-1 flex-col px-5 pb-[18px] pt-[18px]">
        <h3 className="line-clamp-2 min-h-[23px] text-[17px] font-extrabold leading-[1.25] tracking-[-0.02em] text-black sm:text-[18px]">
          {course.title}
        </h3>

        <p className="mt-2 line-clamp-3 min-h-[62px] text-[13px] font-medium leading-[1.32] text-[#202020] sm:text-[14px]">
          {course.description}
        </p>

        <div className="mt-auto">
          <div className="mb-[10px] h-px w-full bg-[#a8a8a8]" />

          <button
            type="button"
            onClick={onApply}
            className="inline-flex min-h-[39px] items-center justify-center rounded-[5px] bg-[#003f78] px-5 py-2 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#002e59] hover:shadow-md"
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
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-[#e94b04] transition-colors hover:bg-[#ffe0d0]"
        >
          <X size={20} />
        </button>

        {children}
      </motion.div>
    </motion.div>
  );
}
