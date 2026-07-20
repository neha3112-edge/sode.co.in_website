"use client";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { getAssetPath } from "@/lib/utils";

type HighlightItem = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
};

const assetsBase = "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai/assets/img";

const highlights: HighlightItem[] = [
  {
    id: 1,
    title: "Industry-Focused Data Science & ML Curriculum",
    description: "Master Data Science, Machine Learning, Deep Learning, MLOps, and Generative AI through an advanced data science and ML course.",
    imageSrc: `${assetsBase}/Industry-Focused Data Science & ML Curriculum.webp`,
  },
  {
    id: 2,
    title: "8-Month Weekend Learning Format",
    description: "Designed for working professionals with a flexible schedule and an optimized data scientist course duration.",
    imageSrc: `${assetsBase}/8-Month Weekend Learning Format.webp`,
  },
  {
    id: 3,
    title: "Hands-on Learning with Capstone Projects",
    description: "Gain practical experience through 10+ industry projects, real-world case studies, and a capstone guided by experts.",
    imageSrc: `${assetsBase}/Hands-on Learning with Capstone Projects.webp`,
  },
  {
    id: 4,
    title: "Premier Certification from IIT Roorkee (CEC)",
    description: "Earn a prestigious credential while building in-demand AI and data science skills for today's technology-driven careers.",
    imageSrc: `${assetsBase}/Premier Certification from IIT Roorkee.webp`,
  },
  {
    id: 5,
    title: "Career-Focused AI Specialisations",
    description: "Explore specialised tracks that combine Generative AI with Deep Learning or Data Engineering to prepare for emerging technology roles.",
    imageSrc: `${assetsBase}/Career-Focused AI Specialisations.webp`,
  },
];

export function BestCourseSlider() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

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

  const handlePrev = () => {
    carouselApi?.scrollPrev();
  };

  const handleNext = () => {
    carouselApi?.scrollNext();
  };

  return (
    <section
      id="best-course-slider"
      className="w-full bg-[#D9D9D9] py-14 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container>
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-0">
          {/* Section Heading */}
          <h2 className="text-center text-[20px] font-extrabold text-[#3585C1] sm:text-3xl leading-snug mb-10">
            What Makes This PG Certificate in Data Science, Machine Learning & Generative AI Stand Out?
          </h2>

          {/* Slider Container with Left and Right Navigation Buttons */}
          <div className="relative flex items-center justify-center">
            {/* Left Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="absolute left-0 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md text-gray-600 hover:text-black hover:shadow-lg transition duration-200"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Carousel Content */}
            <div
              className="w-full px-10 sm:px-12"
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
                  dragFree: false,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-6">
                  {highlights.map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="basis-full pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <HighlightCard item={item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Right Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="absolute right-0 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md text-gray-600 hover:text-black hover:shadow-lg transition duration-200"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index ? "w-6 bg-[#3585C1]" : "w-2.5 bg-gray-400 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

type HighlightCardProps = {
  item: HighlightItem;
};

function HighlightCard({ item }: HighlightCardProps) {
  return (
    <article className="flex h-full min-h-[250px] flex-col items-center justify-start rounded-2xl bg-white p-6 text-center shadow-md border border-gray-100 hover:shadow-lg transition duration-200">
      {/* Icon Image */}
      <div className="relative mb-5 flex h-16 w-16 items-center justify-center">
        <Image
          src={getAssetPath(item.imageSrc)}
          alt={item.title}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      {/* Card Title */}
      <h3 className="text-base font-extrabold text-black leading-snug">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-xs font-semibold text-gray-600 leading-relaxed">
        {item.description}
      </p>
    </article>
  );
}
