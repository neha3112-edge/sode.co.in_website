"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  ChartNoAxesCombined,
  Goal,
  UsersRound,
  Workflow,
  BrainCircuit,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type AISystemItem = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const aiSystems: AISystemItem[] = [
  {
    id: 1,
    title: "Enterprise RAG System",
    description:
      "Smart search that combines methods, ranks results by relevance, handles large document sets, and improves over time.",
    icon: ChartNoAxesCombined,
  },
  {
    id: 2,
    title: "Fine-Tuned LMs",
    description:
      "An AI model trained for a specific industry using specialized techniques. You can access it via an easy-to-use API.",
    icon: Goal,
  },
  {
    id: 3,
    title: "Multi-Agent System",
    description:
      "Multiple AI helpers that break down complex jobs, utilize various tools, and collaborate with each other. Perfect for tasks that need several steps and teamwork.",
    icon: UsersRound,
  },
  {
    id: 4,
    title: "Agentic Workflow",
    description:
      "Design intelligent workflows where AI agents plan tasks, use tools, evaluate results, and complete complex operations automatically.",
    icon: Workflow,
  },
  {
    id: 5,
    title: "Advanced LLM Application",
    description:
      "Build production-ready applications using large language models, prompt engineering, memory, retrieval, tools, and secure APIs.",
    icon: BrainCircuit,
  },
  {
    id: 6,
    title: "AI Automation System",
    description:
      "Create intelligent automation systems that connect business processes, data sources, APIs, and AI-powered decision-making.",
    icon: Bot,
  },
];

export function RealWorldAISystems() {
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

  return (
    <section
      id="real-world-ai-systems"
      className="scroll-mt-21 overflow-hidden bg-[#f7f4f4] py-14 sm:py-16 lg:py-15.5"
    >
      <Container>
        <div className="mx-auto w-full max-w-305">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[30px] font-black leading-[1.05] tracking-[-0.035em] text-[#342184] sm:text-[38px] lg:text-[36px]">
              Build Real-World AI Systems
            </h2>

            <p className="mt-2 text-[16px] font-extrabold leading-tight text-black sm:text-[16px]">
              Learn to Build &amp; Deploy GenAI + Agentic AI Systems
            </p>
          </div>

          {/* Carousel */}
          <div
            className="mt-10 sm:mt-11"
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
              <CarouselContent className="-ml-5">
                {aiSystems.map((system) => (
                  <CarouselItem
                    key={system.id}
                    className="basis-full pl-5 md:basis-1/2 lg:basis-1/3"
                  >
                    <AISystemCard item={system} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Carousel Indicators */}
          <div className="mt-16 flex items-center justify-center gap-2">
            {Array.from({
              length: slideCount,
            }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to AI system slide ${index + 1}`}
                onClick={() => {
                  carouselApi?.scrollTo(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-12.5 bg-[#ff5318]"
                    : "w-8.75 bg-[#939393] hover:bg-[#666666]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

type AISystemCardProps = {
  item: AISystemItem;
};

function AISystemCard({ item }: AISystemCardProps) {
  const Icon = item.icon;

  return (
    <article className="flex min-h-71.25 h-full flex-col items-center justify-center rounded-[25px] bg-[#fbfcfd] px-7 py-10 text-center sm:min-h-75">
      {/* Icon */}
      <div className="flex h-17.5 w-17.5 items-center justify-center rounded-xl bg-[#ff5318] text-white">
        <Icon size={38} strokeWidth={2.5} />
      </div>

      {/* Card Title */}
      <h3 className="mt-7 text-[18px] font-black uppercase leading-[1.15] tracking-[-0.02em] text-[#30207c] sm:text-[20px]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-3 max-w-82.5 text-[14px] font-medium leading-[1.55] text-[#4d4d4d] sm:text-[15px]">
        {item.description}
      </p>
    </article>
  );
}
