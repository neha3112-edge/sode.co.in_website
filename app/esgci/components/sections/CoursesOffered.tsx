"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { ESGCI_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type WhyChooseItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type ActiveForm = "apply" | null;

/*
|--------------------------------------------------------------------------
| Why Choose Cards
|--------------------------------------------------------------------------
*/

const whyChooseItems: WhyChooseItem[] = [
  {
    id: 1,
    title: "Widely Accepted Credit System",
    description:
      "Earn 180 ECTS credits recognized across Europe and globally, giving your online DBA degree strong academic and professional credibility.",
    image: "/esgci/assets/img/widely-accepted-credit-system.webp",
  },
  {
    id: 2,
    title: "Global Exposure in Paris",
    description:
      "Take part in an optional five-day Paris immersion, learning international business practices and connecting with renowned faculty and peers.",
    image: "/esgci/assets/img/global-exposure-in-paris.webp",
  },
  {
    id: 3,
    title: "Fully Flexible Online Format",
    description:
      "Pursue your doctorate entirely online, allowing self-paced, focused research based learning while continuing full-time work without career disruption.",
    image: "/esgci/assets/img/fully-flexible-online-format.webp",
  },
  {
    id: 4,
    title: "Cost-Effective and Flexible Payment",
    description:
      "The program costs INR 8,50,000 with competitive pricing and offers flexible installment options to suit various financial situations.",
    image: "/esgci/assets/img/cost-effective-and-flexible-payment.webp",
  },
  {
    id: 5,
    title: "Research-Oriented Learning",
    description:
      "Gain access to advanced tools like CliftonStrengths™ and conduct practical research addressing real-world business challenges to enhance leadership skills.",
    image: "/esgci/assets/img/research-oriented-learning-resources.webp",
  },
  {
    id: 6,
    title: "Experienced and Diverse Cohort",
    description:
      "Collaborate with seasoned professionals from multiple industries, sharing real-world insights and expanding your global professional network effectively.",
    image: "/esgci/assets/img/Diverse-cohort.webp",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function WhyChooseESGCI() {
  const [selectedItem, setSelectedItem] = useState<WhyChooseItem | null>(null);
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

  const openApplyForm = (item: WhyChooseItem) => {
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
      <section id="why-choose" className="bg-[#f8fafc] py-10 sm:py-12 lg:py-[50px] border-t border-b border-gray-100">
        <Container>
          <div className="mx-auto max-w-[1140px]">
            {/* Heading */}
            <div className="mb-8 text-center">
              <h2 className="text-[27px] font-extrabold leading-tight tracking-[-0.03em] text-[#009c43] sm:text-[33px] lg:text-[32px]">
                Why Choose ESGCI Online DBA Program
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
                  {whyChooseItems.map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
                    >
                      <WhyChooseCard
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
                    ? "w-[24px] bg-[#009844]"
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
        <WhyChooseFormModal title="Apply Now" onClose={closeForm}>
          <FormWrapper
            title="Admission Open"
            subtitle="Academic Experts will assist you!"
            onClose={closeForm}
            courseOptions={ESGCI_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride={`ESGCI Why Choose Apply Form - ${selectedItem.title}`}
            sourceOverride="ESGCI LP"
            utmSourceFallback="Organic"
            utmMediumFallback="ESGCI_Organic"
            submitButtonText="Submit"
            redirectUrl="/thank-you"
          />
        </WhyChooseFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Why Choose Card
|--------------------------------------------------------------------------
*/

type WhyChooseCardProps = {
  item: WhyChooseItem;
  onApply: () => void;
};

function WhyChooseCard({ item, onApply }: WhyChooseCardProps) {
  return (
    <article className="group flex h-[380px] lg:h-[360px] w-full flex-col overflow-hidden bg-white border border-gray-400 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
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
            className="inline-fle items-center justify-center rounded-[5px] bg-[#009844] px-5 py-2 text-[14px] font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#007d38] hover:shadow-md"
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

type WhyChooseFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function WhyChooseFormModal({
  title,
  children,
  onClose,
}: WhyChooseFormModalProps) {
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
