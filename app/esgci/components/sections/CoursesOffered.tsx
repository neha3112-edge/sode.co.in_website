"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";

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

type WhyChooseItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type ActiveForm = "apply" | null;

/*
|--------------------------------------------------------------------------
| ESGCI Course Options
|--------------------------------------------------------------------------
*/

const ESGCI_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "ESGCI Online Doctor of Business Administration",
    label: "ESGCI Online Doctor of Business Administration",
  },
];

/*
|--------------------------------------------------------------------------
| Why Choose Cards
|--------------------------------------------------------------------------
*/

const whyChooseItems: WhyChooseItem[] = [
  {
    id: 1,
    title: "Global Exposure in Paris",
    description:
      "Take part in an optional five-day Paris immersion, learning international business practices and connecting with renowned faculty and peers.",
    image: "/assets/img/esgci-global-exposure-paris.webp",
  },
  {
    id: 2,
    title: "Fully Flexible Online Format",
    description:
      "Pursue your doctorate entirely online, allowing self-paced, focused research-based learning while continuing full-time work without career disruption.",
    image: "/assets/img/esgci-flexible-online-format.webp",
  },
  {
    id: 3,
    title: "Cost-Effective and Flexible Payments",
    description:
      "The programme offers transparent pricing and flexible instalment options designed to support learners from different financial situations.",
    image: "/assets/img/esgci-flexible-payment.webp",
  },
  {
    id: 4,
    title: "Internationally Recognized Degree",
    description:
      "Earn a globally recognized European doctoral qualification supported by ESGCI's established academic reputation and French recognition.",
    image: "/assets/img/esgci-recognized-degree.webp",
  },
  {
    id: 5,
    title: "Learn From Experienced Faculty",
    description:
      "Receive guidance from experienced academic faculty and business professionals throughout coursework, research, and dissertation development.",
    image: "/assets/img/esgci-expert-faculty.webp",
  },
  {
    id: 6,
    title: "Career Growth and Leadership",
    description:
      "Strengthen strategic leadership, business research, consulting, and decision-making skills for senior management and executive opportunities.",
    image: "/assets/img/esgci-career-growth.webp",
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
      <section id="why-choose" className="bg-white py-10 sm:py-12 lg:py-[42px]">
        <Container>
          <div className="mx-auto max-w-[1140px]">
            {/* Heading */}
            <div className="mb-6 text-center sm:mb-7">
              <h2 className="text-[27px] font-black leading-tight tracking-[-0.03em] text-black sm:text-[33px] lg:text-[36px]">
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
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {Array.from({
                length: slideCount,
              }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-[9px] rounded-full transition-all duration-200 ${
                    selectedIndex === index
                      ? "w-[24px] bg-[#009844]"
                      : "w-[9px] bg-[#c8c8c8] hover:bg-[#8d8d8d]"
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Apply Form Modal */}
      {activeForm === "apply" && selectedItem && (
        <WhyChooseFormModal
          title={`Apply for ${selectedItem.title}`}
          onClose={closeForm}
        >
          <FormWrapper
            title="Apply Now"
            subtitle="Start your ESGCI Online DBA application"
            onClose={closeForm}
            courseOptions={ESGCI_COURSE_OPTIONS}
            defaultCourse="ESGCI Online Doctor of Business Administration"
            hideCourseField
            formNameOverride={`ESGCI Why Choose Apply Form - ${selectedItem.title}`}
            sourceOverride="ESGCI Why Choose Section"
            utmSourceFallback="ESGCI Organic"
            utmMediumFallback={selectedItem.title}
            submitButtonText="Submit Application"
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
    <article className="group flex h-[360px] w-full flex-col overflow-hidden bg-[#eeeeee]">
      {/* Image */}
      <div className="relative h-[188px] w-full shrink-0 overflow-hidden bg-gray-200">
        <Image
          src={getAssetPath(item.image)}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex min-h-0 flex-1 flex-col px-5 pb-5 pt-3">
        <h3 className="line-clamp-2 text-[17px] font-black leading-[1.25] text-black sm:text-[18px]">
          {item.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-[13px] font-medium leading-[1.45] text-black sm:text-[14px]">
          {item.description}
        </p>

        <div className="mt-auto">
          <div className="mb-3 h-px w-full bg-[#a7a7a7]" />

          <button
            type="button"
            onClick={onApply}
            className="inline-flex min-h-[38px] items-center justify-center rounded-[5px] bg-[#009844] px-5 py-2 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#007d38] hover:shadow-md"
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
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f8ef] text-[#009844] transition-colors hover:bg-[#d4f0df]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
