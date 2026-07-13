"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Award, X } from "lucide-react";
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

type Specialization = {
  id: number;
  title: string;
  description: string;
  image: string;
  courseName: string;
};

type LearningOutcome = {
  id: number;
  title: string;
  description: string;
};

type CertificateItem = {
  id: number;
  image: string;
  alt: string;
};

type FormType = "apply" | "degree" | null;

/*
|--------------------------------------------------------------------------
| DBA Specializations
|--------------------------------------------------------------------------
*/

const specializations: Specialization[] = [
  {
    id: 1,
    title: "DBA in Leadership",
    description:
      "Develop advanced leadership, strategic thinking, and decision-making skills for senior management and executive-level roles.",
    image: "/assets/img/dba-leadership.webp",
    courseName: "Rushford DBA in Leadership",
  },
  {
    id: 2,
    title: "DBA in Finance",
    description:
      "Build advanced expertise in financial strategy, risk management, investment planning, and corporate decision-making.",
    image: "/assets/img/dba-finance.webp",
    courseName: "Rushford DBA in Finance",
  },
  {
    id: 3,
    title: "DBA in Marketing",
    description:
      "Gain expertise in consumer behaviour, digital marketing, brand development, and strategic market leadership.",
    image: "/assets/img/dba-marketing.webp",
    courseName: "Rushford DBA in Marketing",
  },
  {
    id: 4,
    title: "DBA in Business Analytics",
    description:
      "Learn to use analytics, research, and business intelligence for effective data-driven decision-making.",
    image: "/assets/img/dba-business-analytics.webp",
    courseName: "Rushford DBA in Business Analytics",
  },
];

/*
|--------------------------------------------------------------------------
| Learning Outcomes
|--------------------------------------------------------------------------
*/

const learningOutcomes: LearningOutcome[] = [
  {
    id: 1,
    title: "Strategic Leadership",
    description:
      "Develop leadership capabilities needed to manage complex organisations and lead business transformation.",
  },
  {
    id: 2,
    title: "Applied Research",
    description:
      "Conduct practical doctoral research focused on solving real-world organisational challenges.",
  },
  {
    id: 3,
    title: "Global Business Knowledge",
    description:
      "Understand international markets, global strategies, and cross-border business operations.",
  },
  {
    id: 4,
    title: "Executive Decision-Making",
    description:
      "Use advanced business frameworks and research insights to make informed strategic decisions.",
  },
  {
    id: 5,
    title: "Professional Networking",
    description:
      "Connect with experienced professionals, faculty members, leaders, and learners from across the world.",
  },
  {
    id: 6,
    title: "Doctoral-Level Expertise",
    description:
      "Develop specialised knowledge and credibility required for consulting, leadership, and academic roles.",
  },
];

/*
|--------------------------------------------------------------------------
| Certificate Images
|--------------------------------------------------------------------------
|
| Apne actual certificate image names yahan use karna.
|
*/

const certificateItems: CertificateItem[] = [
  {
    id: 1,
    image: "/assets/img/rushford-pwc-certificate.webp",
    alt: "Rushford PwC Board Advisory completion certificate",
  },
  {
    id: 2,
    image: "/assets/img/rushford-dba-certificate.webp",
    alt: "Rushford Business School DBA degree certificate",
  },
  {
    id: 3,
    image: "/assets/img/rushford-board-advisory-certificate.webp",
    alt: "Rushford Board Advisory certificate",
  },
];

/*
|--------------------------------------------------------------------------
| Form Course Options
|--------------------------------------------------------------------------
*/

const RUSHFORD_COURSE_OPTIONS = [
  {
    value: "Doctorate of Business Administration",
    label: "Doctorate of Business Administration",
  },
  {
    value: "DBA in Leadership",
    label: "DBA in Leadership",
  },
  {
    value: "DBA in Finance",
    label: "DBA in Finance",
  },
  {
    value: "DBA in Marketing",
    label: "DBA in Marketing",
  },
  {
    value: "DBA in Business Analytics",
    label: "DBA in Business Analytics",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function CertificateSection() {
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const [selectedSpecialization, setSelectedSpecialization] =
    useState<Specialization | null>(null);

  const [certificateApi, setCertificateApi] = useState<CarouselApi>();

  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState(0);

  const [certificateSlideCount, setCertificateSlideCount] = useState(0);

  /*
  |--------------------------------------------------------------------------
  | Certificate Autoplay
  |--------------------------------------------------------------------------
  */

  const certificateAutoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
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
    setSelectedSpecialization(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Open Apply Form
  |--------------------------------------------------------------------------
  */

  const openApplyForm = (specialization: Specialization) => {
    setSelectedSpecialization(specialization);
    setActiveForm("apply");
  };

  /*
  |--------------------------------------------------------------------------
  | Open Degree Form
  |--------------------------------------------------------------------------
  */

  const openDegreeForm = () => {
    setSelectedSpecialization(null);
    setActiveForm("degree");
  };

  /*
  |--------------------------------------------------------------------------
  | Certificate Carousel State
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!certificateApi) return;

    const updateCertificateState = () => {
      setSelectedCertificateIndex(certificateApi.selectedScrollSnap());

      setCertificateSlideCount(certificateApi.scrollSnapList().length);
    };

    updateCertificateState();

    certificateApi.on("select", updateCertificateState);
    certificateApi.on("reInit", updateCertificateState);

    return () => {
      certificateApi.off("select", updateCertificateState);
      certificateApi.off("reInit", updateCertificateState);
    };
  }, [certificateApi]);

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
      {/* =============================================================
          DBA SPECIALIZATIONS
      ============================================================== */}

      <section
        id="specializations"
        className="bg-[#F4F4F4] py-12 sm:py-14 lg:py-[58px]"
      >
        <Container>
          <div className="text-center">
            <h2 className="text-[27px] font-semibold leading-tight text-[#111111] sm:text-[31px] lg:text-[34px]">
              DBA Specialisations
            </h2>

            <p className="mt-2 text-[14px] text-[#333333] sm:text-[15px]">
              Rushford Business School
            </p>
          </div>

          <div className="mx-auto mt-9 grid max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
            {specializations.map((specialization) => (
              <SpecializationCard
                key={specialization.id}
                specialization={specialization}
                onApply={() => openApplyForm(specialization)}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* =============================================================
          LEARNING OUTCOMES
      ============================================================== */}

      <section className="bg-[#0968B5] py-14 text-white sm:py-16 lg:py-[62px]">
        <Container>
          <div className="text-center">
            <h2 className="text-[28px] font-bold uppercase leading-tight text-white sm:text-[34px]">
              Learning Outcomes
            </h2>

            <div className="mx-auto mt-3 flex max-w-[820px] items-center gap-4">
              <span className="h-px flex-1 bg-white/60" />

              <p className="text-[15px] font-medium text-white sm:text-[18px]">
                Rushford Business School DBA
              </p>

              <span className="h-px flex-1 bg-white/60" />
            </div>
          </div>

          <div className="mx-auto mt-11 grid max-w-[1110px] grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {learningOutcomes.map((outcome) => (
              <LearningOutcomeCard key={outcome.id} outcome={outcome} />
            ))}
          </div>
        </Container>
      </section>

      {/* =============================================================
          CERTIFICATE AUTOPLAY SECTION
      ============================================================== */}

      <section
        id="sample-certificate"
        className="border-b-[4px] border-[#063A5C] bg-white py-12 sm:py-14 lg:py-[46px]"
      >
        <Container>
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-[75px]">
            {/* =========================================================
                Certificate Auto Slider
            ========================================================== */}

            <div className="mx-auto w-full max-w-[590px]">
              <div
                onMouseEnter={() => {
                  certificateAutoplay.current.stop();
                }}
                onMouseLeave={() => {
                  certificateAutoplay.current.play();
                }}
              >
                <Carousel
                  setApi={setCertificateApi}
                  plugins={[certificateAutoplay.current]}
                  opts={{
                    loop: true,
                    align: "start",
                    skipSnaps: false,
                    dragFree: false,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {certificateItems.map((certificate) => (
                      <CarouselItem key={certificate.id}>
                        <div className="flex min-h-[270px] items-center justify-center bg-white sm:min-h-[320px]">
                          <div className="relative aspect-[1.45/1] w-full overflow-hidden bg-white">
                            <Image
                              src={getAssetPath(certificate.image)}
                              alt={certificate.alt}
                              fill
                              priority={certificate.id === 1}
                              sizes="(max-width: 1024px) 100vw, 590px"
                              className="object-contain object-center"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Certificate Slider Dots */}

              {certificateSlideCount > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  {Array.from({
                    length: certificateSlideCount,
                  }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`View certificate ${index + 1}`}
                      onClick={() => certificateApi?.scrollTo(index)}
                      className={`rounded-full transition-all duration-300 ${
                        selectedCertificateIndex === index
                          ? "h-[9px] w-[24px] bg-[#FF2A62]"
                          : "h-[9px] w-[9px] bg-[#C5C5C5] hover:bg-[#999999]"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* =========================================================
                Certificate Content
            ========================================================== */}

            <div className="text-center lg:text-left">
              <h2 className="text-[31px] font-bold leading-[1.05] tracking-[-0.02em] text-[#17469B] sm:text-[37px] lg:text-[38px]">
                Get a DBA Completion
                <br className="hidden sm:block" /> Certificate with PwC Board
                <br className="hidden sm:block" /> Advisory
              </h2>

              <p className="mx-auto mt-5 max-w-[560px] text-[14px] font-normal leading-[1.28] text-[#111111] sm:text-[15px] lg:mx-0">
                Rushford offers a PwC Directorship &amp; Board Advisory
                Certificate that helps professionals prepare for top board-level
                roles. In partnership with PwC India, it teaches strategic
                thinking, handling stakeholders, governance, and compliance
                through live classes, real-world practice, and expert guidance,
                building confidence to succeed in a business career.
              </p>

              <button
                type="button"
                onClick={openDegreeForm}
                className="mt-5 inline-flex min-h-[39px] cursor-pointer items-center justify-center gap-1 rounded-[5px] bg-[#FF2A62] px-5 py-2 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E92158] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#FF2A62]/25 sm:text-[15px]"
              >
                Get Degree
                <ArrowRight size={17} strokeWidth={2.8} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          APPLY SPECIALIZATION MODAL
      ============================================================== */}

      {activeForm === "apply" && selectedSpecialization && (
        <CustomFormModal
          title={`Apply for ${selectedSpecialization.title}`}
          onClose={closeForm}
        >
          <FormWrapper
            title="Apply Now"
            subtitle={`Start your application for ${selectedSpecialization.title}`}
            onClose={closeForm}
            defaultCourse={selectedSpecialization.courseName}
            hideCourseField
            formNameOverride={`Rushford Specialization Apply Form - ${selectedSpecialization.title}`}
            sourceOverride="Rushford Specialization Apply"
            utmSourceFallback="Rushford Organic"
            utmMediumFallback={`${selectedSpecialization.title} Apply Button`}
            submitButtonText="Submit Application"
          />
        </CustomFormModal>
      )}

      {/* =============================================================
          GET DEGREE MODAL
      ============================================================== */}

      {activeForm === "degree" && (
        <CustomFormModal title="Get Rushford DBA Degree" onClose={closeForm}>
          <FormWrapper
            title="Get Degree"
            subtitle="Share your details and our academic experts will guide you"
            onClose={closeForm}
            courseOptions={RUSHFORD_COURSE_OPTIONS}
            formNameOverride="Rushford Certificate Get Degree Form"
            sourceOverride="Rushford Certificate Section"
            utmSourceFallback="Rushford Organic"
            utmMediumFallback="Rushford Get Degree Button"
            submitButtonText="Get Degree"
          />
        </CustomFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Specialization Card
|--------------------------------------------------------------------------
*/

type SpecializationCardProps = {
  specialization: Specialization;
  onApply: () => void;
};

function SpecializationCard({
  specialization,
  onApply,
}: SpecializationCardProps) {
  return (
    <article className="relative flex h-full flex-col pb-6">
      <div className="flex h-full flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_10px_26px_rgba(0,0,0,0.12)]">
        <div className="relative h-[205px] w-full overflow-hidden">
          <Image
            src={getAssetPath(specialization.image)}
            alt={specialization.title}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col px-6 pb-12 pt-6 text-center sm:px-8">
          <h3 className="text-[23px] font-bold leading-tight text-[#111111] sm:text-[26px]">
            {specialization.title}
          </h3>

          <p className="mx-auto mt-4 max-w-[440px] text-[14px] leading-[1.5] text-[#474747] sm:text-[15px]">
            {specialization.description}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onApply}
        className="absolute bottom-0 left-1/2 min-h-[43px] min-w-[170px] -translate-x-1/2 cursor-pointer rounded-[7px] bg-[#7047C1] px-7 py-2.5 text-[16px] font-bold text-white shadow-[0_6px_14px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5D35AD]"
      >
        Apply Now
      </button>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Learning Outcome Card
|--------------------------------------------------------------------------
*/

type LearningOutcomeCardProps = {
  outcome: LearningOutcome;
};

function LearningOutcomeCard({ outcome }: LearningOutcomeCardProps) {
  return (
    <article className="flex items-start gap-4">
      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white text-[#0968B5]">
        <Award size={26} strokeWidth={2.4} />
      </div>

      <div>
        <h3 className="text-[17px] font-bold leading-[1.25] text-white sm:text-[18px]">
          {outcome.title}
        </h3>

        <p className="mt-2 text-[14px] leading-[1.45] text-white/95 sm:text-[15px]">
          {outcome.description}
        </p>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Form Modal
|--------------------------------------------------------------------------
*/

type CustomFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function CustomFormModal({ title, children, onClose }: CustomFormModalProps) {
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
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#EAF4FF] text-[#0968B5] transition-colors duration-200 hover:bg-[#D7EAFF]"
        >
          <X size={20} strokeWidth={2.3} />
        </button>

        {children}
      </div>
    </div>
  );
}
