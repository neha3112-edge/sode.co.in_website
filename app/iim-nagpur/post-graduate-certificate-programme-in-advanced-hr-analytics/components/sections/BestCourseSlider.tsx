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

const highlights: HighlightItem[] = [
  {
    id: 1,
    title: "Comprehensive HRM Postgraduate Learning",
    description: "Build expertise through an HRM postgraduate certificate program covering modern HR strategies, workforce planning, and data-driven decision-making.",
    imageSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Postgraduate_Learning.webp",
  },
  {
    id: 2,
    title: "Campus Immersion at IIM Nagpur",
    description: "Experience an on-campus learning environment with faculty interactions, peer networking, and hands-on activities that enhance practical understanding of executive development in HRM.",
    imageSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Campus_Immersion.webp",
  },
  {
    id: 3,
    title: "Master HR Advanced Analytics",
    description: "Learn HR advanced analytics techniques using industry tools like Tableau and R to transform workforce data into actionable business insights.",
    imageSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Advanced_Analytics.webp",
  },
  {
    id: 4,
    title: "Practical Understanding of HR Analytics",
    description: "Explore the stages of HR analytics and understand the advantages and disadvantages of HR analytics through real-world case studies and projects.",
    imageSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Practical_Understanding_of_HR_Analytics.webp",
  },
  {
    id: 5,
    title: "Industry-Recognised HR Credential",
    description: "Earn a prestigious certification that complements professionals seeking an HR post graduate diploma or understanding what is post graduate diploma in human resource management.",
    imageSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Industry-Recognised HR Credentia.webp",
  },
  {
    id: 6,
    title: "Career-Focused Weekend Programme",
    description: "Designed for working professionals, this flexible programme with 93 Hours live helps advance your career while building skills comparable to leading HRM postgraduate courses.",
    imageSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/Career_Focused_Weekend_Programme.webp",
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
          <h2 className="text-center text-[20px] font-extrabold text-[#231069] sm:text-3xl leading-snug mb-10 mx-auto max-w-5xl">
            What Makes This Post Graduate Certificate Programme in Advanced HR Analytics Stand Out?
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
                  selectedIndex === index ? "w-6 bg-[#FCB042]" : "w-2.5 bg-gray-400 hover:bg-gray-600"
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
