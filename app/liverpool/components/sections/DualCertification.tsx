"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
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
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type CertificateItem = {
  id: number;
  image: string;
  imageAlt: string;
};

type DegreeFormType = "degree" | null;

/*
|--------------------------------------------------------------------------
| Liverpool Course Options
|--------------------------------------------------------------------------
*/

const LIVERPOOL_COURSES: FormCourseOption[] = [
  {
    value: "Online MBA",
    label: "Online MBA",
  },
  {
    value: "MBA in Leadership",
    label: "MBA in Leadership",
  },
  {
    value: "MBA in Business Analytics",
    label: "MBA in Business Analytics",
  },
  {
    value: "MBA in Marketing",
    label: "MBA in Marketing",
  },
  {
    value: "MBA in Finance",
    label: "MBA in Finance",
  },
];

/*
|--------------------------------------------------------------------------
| Certificate Slider Data
|--------------------------------------------------------------------------
*/

const certificateItems: CertificateItem[] = [
  {
    id: 1,
    image: "/assets/images/imt-general-management-certificate.webp",
    imageAlt: "IMT Ghaziabad Advanced General Management Programme certificate",
  },
  {
    id: 2,
    image: "/assets/images/liverpool-mba-degree.webp",
    imageAlt: "Liverpool Business School Online MBA degree",
  },
  {
    id: 3,
    image: "/assets/images/liverpool-imt-dual-certificate.webp",
    imageAlt: "Liverpool and IMT dual certification",
  },
];

/*
|--------------------------------------------------------------------------
| Motion Variants
|--------------------------------------------------------------------------
*/

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const leftContentVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const rightContentVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const textItemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function DualCertification() {
  const [activeForm, setActiveForm] = useState<DegreeFormType>(null);

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const [selectedIndex, setSelectedIndex] = useState(0);

  /*
  |--------------------------------------------------------------------------
  | Autoplay Plugin
  |--------------------------------------------------------------------------
  */

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,

      /*
       * Manual drag ya arrow click ke baad
       * autoplay permanently stop nahi hoga.
       */
      stopOnInteraction: false,

      /*
       * Mouse hover par carousel pause hoga.
       */
      stopOnMouseEnter: true,
    }),
  );

  /*
  |--------------------------------------------------------------------------
  | Close Form
  |--------------------------------------------------------------------------
  */

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Previous Slide
  |--------------------------------------------------------------------------
  */

  const handlePrevious = () => {
    if (!carouselApi) return;

    carouselApi.scrollPrev();

    /*
     * Timer dobara start hoga taaki arrow click ke
     * turant baad automatic slide change na ho.
     */
    autoplayPlugin.current.reset();
    autoplayPlugin.current.play();
  };

  /*
  |--------------------------------------------------------------------------
  | Next Slide
  |--------------------------------------------------------------------------
  */

  const handleNext = () => {
    if (!carouselApi) return;

    carouselApi.scrollNext();

    autoplayPlugin.current.reset();
    autoplayPlugin.current.play();
  };

  /*
  |--------------------------------------------------------------------------
  | Track Current Slide
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelectedSlide = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    };

    updateSelectedSlide();

    carouselApi.on("select", updateSelectedSlide);

    carouselApi.on("reInit", updateSelectedSlide);

    autoplayPlugin.current.play();

    return () => {
      carouselApi.off("select", updateSelectedSlide);

      carouselApi.off("reInit", updateSelectedSlide);
    };
  }, [carouselApi]);

  /*
  |--------------------------------------------------------------------------
  | Resume Autoplay When Browser Tab Becomes Active
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        autoplayPlugin.current.reset();
        autoplayPlugin.current.play();
      } else {
        autoplayPlugin.current.stop();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
  | Escape Key Close
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
        id="dual-certification"
        className="overflow-hidden bg-[#102b67] py-12 text-white sm:py-14 lg:py-[68px]"
      >
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="mx-auto grid max-w-[1250px] grid-cols-1 items-center gap-10 lg:grid-cols-[48%_52%] lg:gap-[72px]"
          >
            {/* =====================================================
                Left Certificate Carousel
            ====================================================== */}

            <motion.div
              variants={leftContentVariants}
              className="relative mx-auto w-full max-w-[560px]"
              onMouseEnter={() => {
                autoplayPlugin.current.stop();
              }}
              onMouseLeave={() => {
                autoplayPlugin.current.reset();
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
                  duration: 28,
                }}
                className="w-full"
              >
                <CarouselContent className="ml-0">
                  {certificateItems.map((certificate, index) => {
                    const isActive = selectedIndex === index;

                    return (
                      <CarouselItem key={certificate.id} className="pl-0">
                        <div className="flex min-h-[320px] items-center justify-center px-10 sm:min-h-[390px] sm:px-12">
                          <motion.div
                            animate={{
                              opacity: isActive ? 1 : 0.55,
                              scale: isActive ? 1 : 0.94,
                              y: isActive ? 0 : 12,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: "easeOut",
                            }}
                            className="relative aspect-[1.32/1] w-full overflow-hidden rounded-[5px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
                          >
                            <Image
                              src={getAssetPath(certificate.image)}
                              alt={certificate.imageAlt}
                              fill
                              priority={certificate.id === 1}
                              sizes="(max-width: 1024px) 100vw, 560px"
                              className="object-contain object-center"
                            />
                          </motion.div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>

              {/* Left Arrow */}

              <motion.button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous certificate"
                whileHover={{
                  scale: 1.15,
                  x: -3,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-[#00ded0] transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft size={38} strokeWidth={2} />
              </motion.button>

              {/* Right Arrow */}

              <motion.button
                type="button"
                onClick={handleNext}
                aria-label="Next certificate"
                whileHover={{
                  scale: 1.15,
                  x: 3,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-[#00ded0] transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <ChevronRight size={38} strokeWidth={2} />
              </motion.button>
            </motion.div>

            {/* =====================================================
                Right Content
            ====================================================== */}

            <motion.div
              variants={rightContentVariants}
              className="text-center lg:text-left"
            >
              <motion.h2
                variants={textItemVariants}
                className="text-[31px] font-black leading-[1.05] tracking-[-0.03em] text-[#00ded0] sm:text-[39px] lg:text-[42px]"
              >
                LBS MBA Pathway + IMT G
              </motion.h2>

              <motion.h3
                variants={textItemVariants}
                className="mt-4 text-[21px] font-extrabold leading-tight text-white sm:text-[24px]"
              >
                Double Certification Edge
              </motion.h3>

              <motion.p
                variants={textItemVariants}
                className="mx-auto mt-3 max-w-[620px] text-[14px] font-medium leading-[1.55] text-white/95 sm:text-[16px] lg:mx-0"
              >
                Professionals and learners can earn an Advanced General
                Management Certificate from IMT Ghaziabad while developing
                modern business strategies required for success in management
                roles. This is complemented by the Liverpool Business School
                Online MBA, a globally accepted qualification with WES
                recognition and AACSB membership. Together, these credentials
                allow students to achieve dual certification within just 18
                months, delivering both academic value and practical career
                impact.
              </motion.p>

              <motion.button
                type="button"
                variants={textItemVariants}
                onClick={() => setActiveForm("degree")}
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="mt-6 inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[6px] bg-[#00ded0] px-6 py-2.5 text-[15px] font-extrabold text-[#07366a] shadow-[0_8px_18px_rgba(0,0,0,0.15)] transition-colors duration-200 hover:bg-[#00c9bc]"
              >
                Get Degree
                <ArrowRight size={17} strokeWidth={2.8} />
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* =============================================================
          Degree Modal
      ============================================================== */}

      <AnimatePresence>
        {activeForm === "degree" && (
          <DegreeFormModal title="Get Liverpool MBA Degree" onClose={closeForm}>
            <FormWrapper
              title="Get Degree"
              subtitle="Share your details and our academic experts will guide you"
              onClose={closeForm}
              courseOptions={LIVERPOOL_COURSES}
              defaultCourse="Online MBA"
              hideCourseField
              formNameOverride="Liverpool Dual Certification Get Degree Form"
              sourceOverride="Liverpool Dual Certification Section"
              utmSourceFallback="Liverpool Organic"
              utmMediumFallback="Liverpool Dual Certification Button"
              submitButtonText="Get Degree"
              submitButtonClassName="!bg-[#00ded0] !text-[#07366a] hover:!bg-[#00c9bc]"
            />
          </DegreeFormModal>
        )}
      </AnimatePresence>
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Degree Form Modal
|--------------------------------------------------------------------------
*/

type DegreeFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function DegreeFormModal({ title, children, onClose }: DegreeFormModalProps) {
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
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.22,
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 35,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.94,
          y: 20,
        }}
        transition={{
          duration: 0.28,
          ease: "easeOut",
        }}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <motion.button
          type="button"
          aria-label="Close degree form"
          onClick={onClose}
          whileHover={{
            rotate: 90,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8fcfa] text-[#00a99f] transition-colors hover:bg-[#d3f7f4]"
        >
          <X size={20} />
        </motion.button>

        {children}
      </motion.div>
    </motion.div>
  );
}
