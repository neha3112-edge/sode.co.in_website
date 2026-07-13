"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Award, Globe2, Star, Users, X } from "lucide-react";
import {
  useCallback,
  useEffect,
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

type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type FormType = "apply" | null;

type Statistic = {
  id: number;
  value: string;
  label: string;
  icon: ReactNode;
};

/*
|--------------------------------------------------------------------------
| Course Data
|--------------------------------------------------------------------------
*/

const courses: Course[] = [
  {
    id: 1,
    title: "Accounting",
    description:
      "Learn financial reporting, auditing, and compliance frameworks.",
    image: "/assets/images/ssbm-accounting.webp",
  },
  {
    id: 2,
    title: "AML Compliance",
    description:
      "Study anti-money laundering regulations and risk management processes.",
    image: "/assets/images/ssbm-aml-compliance.webp",
  },
  {
    id: 3,
    title: "Global and International Management",
    description:
      "SSBM Online DBA program helps develop leadership skills to manage multinational teams.",
    image: "/assets/images/ssbm-global-management.webp",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    description:
      "Explore AI strategy, automation, innovation, and its impact on modern organisations.",
    image: "/assets/images/ssbm-artificial-intelligence.webp",
  },
  {
    id: 5,
    title: "Business Analytics",
    description:
      "Use business data, analytical tools, and insights for strategic decision-making.",
    image: "/assets/images/ssbm-business-analytics.webp",
  },
  {
    id: 6,
    title: "Cybersecurity Management",
    description:
      "Learn cybersecurity governance, digital risk, and organisational security strategy.",
    image: "/assets/images/ssbm-cybersecurity.webp",
  },
  {
    id: 7,
    title: "Digital Transformation",
    description:
      "Build strategies for digital innovation, technology adoption, and business transformation.",
    image: "/assets/images/ssbm-digital-transformation.webp",
  },
  {
    id: 8,
    title: "Entrepreneurship",
    description:
      "Develop entrepreneurial thinking, innovation management, and scalable business models.",
    image: "/assets/images/ssbm-entrepreneurship.webp",
  },
  {
    id: 9,
    title: "Finance",
    description:
      "Understand corporate finance, investment strategy, valuation, and financial leadership.",
    image: "/assets/images/ssbm-finance.webp",
  },
  {
    id: 10,
    title: "Healthcare Management",
    description:
      "Study healthcare leadership, policy, operations, and sustainable management practices.",
    image: "/assets/images/ssbm-healthcare-management.webp",
  },
  {
    id: 11,
    title: "Human Resource Management",
    description:
      "Master talent strategy, organisational behaviour, and modern workforce leadership.",
    image: "/assets/images/ssbm-human-resource.webp",
  },
  {
    id: 12,
    title: "Marketing Management",
    description:
      "Explore customer behaviour, brand strategy, digital marketing, and market development.",
    image: "/assets/images/ssbm-marketing.webp",
  },
];

/*
|--------------------------------------------------------------------------
| Statistics Data
|--------------------------------------------------------------------------
*/

const statistics: Statistic[] = [
  {
    id: 1,
    value: "7700",
    label: "Alumni",
    icon: <Users size={40} fill="currentColor" strokeWidth={1.5} />,
  },
  {
    id: 2,
    value: "160+",
    label: "Countries",
    icon: <Globe2 size={38} fill="currentColor" strokeWidth={1.6} />,
  },
  {
    id: 3,
    value: "170+",
    label: "Renowned",
    icon: <Award size={39} fill="currentColor" strokeWidth={1.6} />,
  },
  {
    id: 4,
    value: "5 Star",
    label: "Online learning",
    icon: <Star size={40} fill="currentColor" strokeWidth={1.5} />,
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

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

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
  | Modal Actions
  |--------------------------------------------------------------------------
  */

  const closeForm = useCallback(() => {
    setActiveForm(null);
    setSelectedCourse(null);
  }, []);

  const openApplyForm = (course: Course) => {
    setSelectedCourse(course);
    setActiveForm("apply");
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
  | Escape Key
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
      {/* =========================================================
          Courses Section
      ========================================================== */}

      <section
        id="courses"
        className="border-t-[15px] border-[#f1f1f1] bg-white py-10 sm:py-12 lg:py-[38px]"
      >
        <Container>
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Heading */}
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
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
              className="mb-7 text-center"
            >
              <h2 className="text-[27px] font-black uppercase leading-[1.15] tracking-[-0.035em] text-black sm:text-[33px]">
                Top Online DBA{" "}
                <span className="text-[#c9232c]">
                  SSBM Doctorate Specializations
                </span>
              </h2>
            </motion.div>

            {/* Carousel */}
            <div
              className="relative mx-auto max-w-[1135px]"
              onMouseEnter={() => {
                autoplayPlugin.current.stop();
              }}
              onMouseLeave={() => {
                autoplayPlugin.current.play();
              }}
            >
              <Carousel
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
                <CarouselContent className="-ml-4">
                  {courses.map((course, index) => (
                    <CarouselItem
                      key={course.id}
                      className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.96,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                        transition={{
                          duration: 0.4,
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

            {/* Dots */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-[7px]">
              {Array.from({
                length: slideCount,
              }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-[10px] w-[10px] rounded-full transition-all duration-200 ${
                    selectedIndex === index
                      ? "scale-110 bg-[#c9232c]"
                      : "bg-[#c8c8c8] hover:bg-[#999999]"
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          Statistics Section
      ========================================================== */}

      <StatisticsSection />

      {/* =========================================================
          Apply Modal
      ========================================================== */}

      {activeForm === "apply" && selectedCourse && (
        <CourseFormModal
          title={`Apply for ${selectedCourse.title}`}
          onClose={closeForm}
        >
          <FormWrapper
            title="Apply Now"
            subtitle={`Apply for ${selectedCourse.title}`}
            onClose={closeForm}
            defaultCourse={`SSBM DBA - ${selectedCourse.title}`}
            hideCourseField
            formNameOverride={`SSBM DBA Apply Form - ${selectedCourse.title}`}
            sourceOverride="SSBM DBA Specialization Apply"
            utmSourceFallback="SSBM Organic"
            utmMediumFallback="SSBM DBA Specialization"
            submitButtonText="Submit Application"
            submitButtonClassName="!bg-[#c9232c] hover:!bg-[#a91d25]"
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
    <article className="group flex h-[375px] w-full flex-col overflow-hidden bg-[#eeeeee]">
      {/* Image */}
      <div className="relative h-[170px] w-full shrink-0 overflow-hidden bg-[#dddddd]">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="line-clamp-2 min-h-[44px] text-[17px] font-extrabold leading-[1.25] text-black sm:text-[18px]">
          {course.title}
        </h3>

        <p className="mt-1 line-clamp-3 min-h-[64px] text-[13px] font-medium leading-[1.55] text-[#313131] sm:text-[14px]">
          {course.description}
        </p>

        <div className="mt-auto">
          <div className="mb-3 h-px w-full bg-[#a8a8a8]" />

          <button
            type="button"
            onClick={onApply}
            className="inline-flex min-h-[38px] items-center justify-center rounded-[5px] bg-[#c9232c] px-5 py-2 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a91d25] hover:shadow-md"
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
| Statistics Section
|--------------------------------------------------------------------------
*/

function StatisticsSection() {
  return (
    <section className="border-b border-[#c9232c] bg-black py-10 text-white sm:py-12 lg:py-[39px]">
      <Container>
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-8">
          {statistics.map((statistic, index) => (
            <motion.article
              key={statistic.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-[48px] items-center justify-center text-white">
                {statistic.icon}
              </div>

              <h3 className="mt-2 text-[29px] font-black leading-none text-[#c9232c] sm:text-[33px]">
                {statistic.value}
              </h3>

              <p className="mt-3 text-[16px] font-bold leading-tight text-white sm:text-[18px]">
                {statistic.label}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| Modal
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
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0ed] text-[#c9232c] transition hover:bg-[#ffe2dc]"
        >
          <X size={20} />
        </button>

        {children}
      </motion.div>
    </motion.div>
  );
}
