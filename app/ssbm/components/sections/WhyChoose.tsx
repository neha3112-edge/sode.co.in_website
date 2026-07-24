"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
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
import { SSBM_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type SpecializationItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type ActiveForm = "apply" | null;

/*
|--------------------------------------------------------------------------
| Specialization Cards
|--------------------------------------------------------------------------
*/

const specializationItems: SpecializationItem[] = [
  {
    id: 1,
    title: "Global and International Management",
    description: "SSBM Online DBA program helps develop leadership skills to manage multinational teams.",
    image: "/ssbm/assets/img/Global-and-international.jpg",
  },
  {
    id: 2,
    title: "Cybersecurity Management",
    description: "Learn to oversee cybersecurity frameworks, digital risk, and governance models.",
    image: "/ssbm/assets/img/Cybersecurity.jpg",
  },
  {
    id: 3,
    title: "Human Resources Management",
    description: "Strengthen expertise in HR planning and talent management.",
    image: "/ssbm/assets/img/HR.jpg",
  },
  {
    id: 4,
    title: "Tax Management",
    description: "Gain practical understanding of corporate taxation and compliance systems.",
    image: "/ssbm/assets/img/Tax-Management.png",
  },
  {
    id: 5,
    title: "Finance and Banking",
    description: "Master financial analysis, banking operations, and risk-based decision making.",
    image: "/ssbm/assets/img/Finance-and-Banking.png",
  },
  {
    id: 6,
    title: "Marketing",
    description: "Explore digital branding, consumer behavior, and strategic marketing frameworks.",
    image: "/ssbm/assets/img/Marketing.png",
  },
  {
    id: 7,
    title: "Operations Management",
    description: "Learn workflow optimization and process improvement strategies.",
    image: "/ssbm/assets/img/Operations-Management.png",
  },
  {
    id: 8,
    title: "Strategic Management",
    description: "Develop long-term strategies and guide organizational transformation.",
    image: "/ssbm/assets/img/Strategic-Management.png",
  },
  {
    id: 9,
    title: "Entrepreneurship",
    description: "Build entrepreneurial vision and innovative thinking.",
    image: "/ssbm/assets/img/Entrepreneurship.png",
  },
  {
    id: 10,
    title: "IT Management",
    description: "Understand IT governance and digital transformation.",
    image: "/ssbm/assets/img/IT-Management.png",
  },
  {
    id: 11,
    title: "Energy Management",
    description: "Study global energy systems and sustainability frameworks.",
    image: "/ssbm/assets/img/Energy-Management.png",
  },
  {
    id: 12,
    title: "Health Care Management",
    description: "Gain knowledge of healthcare operations and leadership practices.",
    image: "/ssbm/assets/img/Health-Care-Management.png",
  },
  {
    id: 13,
    title: "Data Science",
    description: "Master predictive analytics, data modeling, and interpretation skills.",
    image: "/ssbm/assets/img/Data-Science.png",
  },
  {
    id: 14,
    title: "Machine Learning",
    description: "Develop deeper knowledge in automation techniques.",
    image: "/ssbm/assets/img/Machine-Learning.png",
  },
  {
    id: 15,
    title: "Finance",
    description: "Develop deep expertise in investment decision-making techniques.",
    image: "/ssbm/assets/img/Finance.png",
  },
  {
    id: 16,
    title: "International Business Leadership",
    description: "Learn cross-cultural leadership and global communication.",
    image: "/ssbm/assets/img/International-Business-Leadership.png",
  },
  {
    id: 17,
    title: "Global Supply Chain Management",
    description: "Understand end-to-end global supply chain strategy.",
    image: "/ssbm/assets/img/Global-Supply-Chain-Management.png",
  },
  {
    id: 18,
    title: "Accounting",
    description: "Learn financial reporting, auditing, and compliance frameworks.",
    image: "/ssbm/assets/img/Accounting.png",
  },
  {
    id: 19,
    title: "AML Compliance",
    description: "Study anti-money laundering regulations and risk management processes.",
    image: "/ssbm/assets/img/AML-Compliance.png",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function WhyChoose() {
  const [selectedItem, setSelectedItem] = useState<SpecializationItem | null>(null);
  const [activeForm, setActiveForm] = useState<ActiveForm>(null);

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
      delay: 2800,
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
    setSelectedItem(null);
  }, []);

  const openApplyForm = (item: SpecializationItem) => {
    setSelectedItem(item);
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
  | Body Scroll Lock
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
      <section id="whychoose" className="bg-[#fcfdfe] py-12 sm:py-14 lg:py-[60px] border-t border-b border-gray-100">
        <Container>
          <div className="mx-auto max-w-[1140px]">
            {/* Heading */}
            <div className="mb-8 text-center px-4">
              <h2 className="text-[22px] font-extrabold leading-tight tracking-[-0.03em] text-[#000000] sm:text-[33px] lg:text-[32px]">
                TOP ONLINE DBA <span className="text-[#c11f28]">SSBM DOCTORATE SPECIALIZATIONS</span>
              </h2>
            </div>

            {/* Auto-scrolling Carousel */}
            <div
              className="relative"
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
                <CarouselContent className="-ml-5">
                  {specializationItems.map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
                    >
                      <SpecializationCard
                        item={item}
                        onApply={() => openApplyForm(item)}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Carousel Dots */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {Array.from({
                length: slideCount,
              }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-[9px] rounded-full transition-all duration-300 ease-in-out ${selectedIndex === index
                    ? "w-[24px] bg-[#c11f28]"
                    : "w-[9px] bg-[#c8c8c8] hover:bg-[#8d8d8d]"
                    }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Apply Form Modal Overlay */}
      {activeForm === "apply" && selectedItem && (
        <SpecializationFormModal title="Apply Now" onClose={closeForm}>
          <FormWrapper
            title="Admission Open"
            subtitle="Academic Experts will assist you!"
            onClose={closeForm}
            courseOptions={SSBM_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride={`SSBM Specialization Apply Form - ${selectedItem.title}`}
            sourceOverride="SSBM LP"
            utmSourceFallback="Organic"
            utmMediumFallback="SSBM_Organic"
            submitButtonText="Submit"
            redirectUrl="/thank-you"
          />
        </SpecializationFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Specialization Card Component
|--------------------------------------------------------------------------
*/

type SpecializationCardProps = {
  item: SpecializationItem;
  onApply: () => void;
};

function SpecializationCard({ item, onApply }: SpecializationCardProps) {
  return (
    <article className="group flex h-[360px] lg:h-[350px] w-full flex-col overflow-hidden bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-[188px] w-full shrink-0 overflow-hidden bg-gray-150">
        <Image
          src={getAssetPath(item.image)}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="line-clamp-2 text-[17px] font-bold leading-[1.25] text-black sm:text-[16px]">
          {item.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-[13px] font-medium leading-[1.45] text-gray-700 sm:text-[13px]">
          {item.description}
        </p>

        <div className="mt-auto">
          <div className="mb-3 h-px w-full bg-gray-200" />

          <button
            type="button"
            onClick={onApply}
            className="inline-flex items-center justify-center rounded-[5px] bg-[#c11f28] px-5 py-2 text-[14px] font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#a8141c] hover:shadow-md"
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
| Form Modal
|--------------------------------------------------------------------------
*/

type SpecializationFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function SpecializationFormModal({
  title,
  children,
  onClose,
}: SpecializationFormModalProps) {
  return (
    <div
      role="presentation"
      onMouseDown={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {children}
      </div>
    </div>
  );
}
