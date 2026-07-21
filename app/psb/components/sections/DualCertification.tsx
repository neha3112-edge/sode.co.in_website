"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { PSB_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type CertificateItem = {
  id: number;
  image: string;
  imageAlt: string;
  heading: string;
};

type DegreeFormType = "degree" | null;

/*
|--------------------------------------------------------------------------
| Certificate Slider Data
|--------------------------------------------------------------------------
*/

const certificateItems: CertificateItem[] = [
  {
    id: 1,
    image: "/psb/assets/img/PSB20Certificate.webp",
    imageAlt: "Paris School of Business MBA degree certificate",
    heading: "Master of Business Administration from Paris School of Business",
  },
  {
    id: 2,
    image: "/psb/assets/img/certificate.png",
    imageAlt: "IIM Lucknow Executive Programme Certificate",
    heading: "Executive Programme Certificate from IIM Lucknow",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function DualCertification() {
  const [activeForm, setActiveForm] = useState<DegreeFormType>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  const handlePrevious = () => {
    carouselApi?.scrollPrev();
  };

  const handleNext = () => {
    carouselApi?.scrollNext();
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
      <section
        id="dual-certification"
        className="relative overflow-hidden bg-[#233568] py-14 sm:py-16 text-white"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left Certificate Slider */}
            <div className="relative">
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => autoplayPlugin.current.stop()}
                onMouseLeave={() => autoplayPlugin.current.play()}
              >
                <Carousel
                  setApi={setCarouselApi}
                  plugins={[autoplayPlugin.current]}
                  opts={{
                    align: "start",
                    loop: true,
                    skipSnaps: false,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {certificateItems.map((item) => (
                      <CarouselItem key={item.id} className="basis-full">
                        <div className="relative mx-auto aspect-[1.414/1.5] md:aspect-[1.414/1] w-full max-w-[480px] overflow-hidden">
                          <h3 className="text-lg font-bold text-white text-center">{item.heading}</h3>
                          <div className="relative h-55 md:h-65 w-full mt-5">
                            <Image
                              src={getAssetPath(item.image)}
                              alt={item.imageAlt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 480px"
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Slider Control Arrows */}
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous certificate"
                className="absolute -left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-[#AF1062] hover:bg-white/20 hover:text-white transition duration-200"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next certificate"
                className="absolute -right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-[#AF1062] hover:bg-white/20 hover:text-white transition duration-200"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Right Content Column */}
            <div className="text-center lg:text-left -mt-20 md:mt-0">
              <h2 className="text-2xl font-extrabold leading-tight text-[#b31e6b] sm:text-3xl lg:text-4xl">
                Earn valuable credentials and recognition
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                Earn an internationally recognised MBA from Paris School of Business, a Triple Crown accredited institution among the top 1% of business schools worldwide, along with an Executive Programme Certificate from IIM Lucknow, one of India's premier management institutes renowned for academic excellence and industry-focused education.
              </p>

              <button
                type="button"
                onClick={() => setActiveForm("degree")}
                className="mt-8 inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-[#b31e6b] hover:bg-[#9e0a56] px-7 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span>Get Degree</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Degree Modal */}
      {activeForm === "degree" && (
        <DegreeFormModal title="Get Double Credentials" onClose={closeForm}>
          <FormWrapper
            title="Get Degree Credentials"
            subtitle="Fill your details and our academic experts will assist you"
            onClose={closeForm}
            courseOptions={PSB_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="PSB Dual Certification Degree Form"
            sourceOverride="PSB LP"
            utmSourceFallback="PSB Organic"
            utmMediumFallback="PSB Dual Cert Get Degree Button"
            submitButtonText="Book Now"
            submitButtonClassName="bg-[#233568] hover:bg-[#1a2850] text-white"
            redirectUrl="/thank-you"
          />
        </DegreeFormModal>
      )}
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
