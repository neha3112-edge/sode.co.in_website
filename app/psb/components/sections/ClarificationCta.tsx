"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Container } from "@/components/ui/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type ApprovalCard = {
  id: number;
  image: string;
  heading: string;
  desc: string;
};

/*
|--------------------------------------------------------------------------
| Data for Tabs
|--------------------------------------------------------------------------
*/

const iimLucknowApprovals: ApprovalCard[] = [
  {
    id: 1,
    image: "/psb/assets/img/NIRF Logo.webp",
    heading: "NIRF Ranking",
    desc: "Ranked #5 in the NIRF Management Rankings 2026, reaffirming IIM Lucknow's position among India's leading business schools.",
  },
  {
    id: 2,
    image: "/psb/assets/img/AACSB logo.webp",
    heading: "AACSB Accredited",
    desc: "AACSB accreditation recognizes IIM Lucknow's excellence in business education, research, faculty quality, and continuous innovation.",
  },
  {
    id: 3,
    image: "/psb/assets/img/AMBA logo.webp",
    heading: "AMBA Accredited",
    desc: "AMBA accreditation reflects IIM Lucknow's commitment to delivering world-class postgraduate management education and academic excellence.",
  },
  {
    id: 4,
    image: "/psb/assets/img/FT Logo.webp",
    heading: "The Financial Times Rankings for Masters in Management 2025",
    desc: "IIM Lucknow continues to be ranked in FT-100, being 4th amongst the IIMs and 5th amongst all B-schools in India.",
  },
];

const psbApprovals: ApprovalCard[] = [
  {
    id: 1,
    image: "/psb/assets/img/prime.webp",
    heading: "PRME Membership",
    desc: "Supported by the United Nations, PRME helps business schools equip future leaders with skills for responsible, ethical, and sustainable management.",
  },
  {
    id: 2,
    image: "/psb/assets/img/CDGE.webp",
    heading: "Conférence des Grandes Ecoles",
    desc: "PSB is a member of the Conférence des Grandes Écoles, an elite network of 48 French institutions authorised to deliver the country's most prestigious Masters-level diploma.",
  },
  {
    id: 3,
    image: "/psb/assets/img/MDLSDLR.webp",
    heading: "Ministry for Higher Education and Research",
    desc: "PSB holds State recognition from the French Ministry of Higher Education, awarded after an audit of teaching quality, administration, and financial stability.",
  },
  {
    id: 4,
    image: "/psb/assets/img/FRANCE CC.webp",
    heading: "RNCP",
    desc: "All PSB degree-granting diplomas are RNCP-registered under France's official National Register of Professional Certifications, recognising State-approved qualifications.",
  },
  {
    id: 5,
    image: "/psb/assets/img/4 digital.webp",
    heading: "Label 4Digital",
    desc: "Exclusively for CGE members, this label recognizes and highlights a school’s effective use of digital technology with its students and faculty.",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function ClarificationCta() {
  const [activeTab, setActiveTab] = useState<"iiml" | "psb">("iiml");
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const handlePrevious = () => {
    carouselApi?.scrollPrev();
  };

  const handleNext = () => {
    carouselApi?.scrollNext();
  };

  // Re-initialise or transition slide when tab changes
  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(0);
    }
  }, [activeTab, carouselApi]);

  const baseCardsData = activeTab === "iiml" ? iimLucknowApprovals : psbApprovals;
  const cardsData = [...baseCardsData, ...baseCardsData, ...baseCardsData];

  return (
    <section id="approvals-recognition" className="bg-[#f8fafc] py-16 border-t border-b border-gray-100">
      <Container>
        <div className="mx-auto w-full max-w-[1140px]">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#233568] sm:text-4xl">
              Approvals &amp; Recognition
            </h2>
          </div>

          {/* Premium Tab Switcher */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-xl bg-gray-100 p-1.5 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("iiml")}
                className={`cursor-pointer rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-350 ${activeTab === "iiml"
                  ? "bg-[#b31e6b] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                IIM Lucknow
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("psb")}
                className={`cursor-pointer rounded-lg px-6 py-2.5 text-sm font-bold transition-all duration-350 ${activeTab === "psb"
                  ? "bg-[#b31e6b] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                Paris School of Business
              </button>
            </div>
          </div>

          {/* Slider Layout */}
          <div className="relative mt-12 px-6">
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
                <CarouselContent className="-ml-4 pb-2">
                  {cardsData.map((item, index) => (
                    <CarouselItem
                      key={`${activeTab}-${item.id}-${index}`}
                      className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      <article className="flex h-full flex-col items-center text-center rounded-2xl bg-white p-6 border-gray-300 border-1">
                        {/* Image Logo Wrapper */}
                        <div className="relative flex h-24 w-full items-center justify-center">
                          <Image
                            src={getAssetPath(item.image)}
                            alt={item.heading}
                            width={200}
                            height={100}
                            className="max-h-20 w-auto object-contain"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="mt-5 text-base font-bold text-gray-900">
                          {item.heading}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-xs leading-relaxed text-gray-500">
                          {item.desc}
                        </p>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Slider Control Arrows */}
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous slide"
              className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#233568] border border-gray-250 shadow-md hover:bg-gray-50 hover:shadow-lg transition duration-200 cursor-pointer"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#233568] border border-gray-250 shadow-md hover:bg-gray-50 hover:shadow-lg transition duration-200 cursor-pointer"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
