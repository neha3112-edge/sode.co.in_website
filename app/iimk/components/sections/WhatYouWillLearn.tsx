import {
  Bot,
  BrainCircuit,
  Cpu,
  Rocket,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

type LearningItem = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const learningItems: LearningItem[] = [
  {
    id: 1,
    title: "Foundations of GenAI & LLMs",
    description:
      "Learn the fundamentals of large language models, including neural networks, transformer architecture, text embeddings, and selecting the best base model for your specific needs.",
    icon: Cpu,
  },
  {
    id: 2,
    title: "Advanced Prompting & RAG Systems",
    description:
      "Create effective prompts and develop professional-grade retrieval systems using combined search methods, result prioritization, and quality testing. Move from simple prototypes to deployable solutions.",
    icon: Rocket,
  },
  {
    id: 3,
    title: "LLM Fine-Tuning & Alignment",
    description:
      "Discover whether your project needs custom training, better prompts, or retrieval systems, then apply efficient training techniques like LoRA and QLoRA while measuring improvements.",
    icon: BrainCircuit,
  },
  {
    id: 4,
    title: "Multimodal & Agentic AI",
    description:
      "Go beyond basic chatbots by developing systems that process images and text together, plus AI agents capable of planning actions, utilizing various tools, managing multiple tasks, and automating complex processes.",
    icon: Bot,
  },
  {
    id: 5,
    title: "Deployment, Optimization & AI Safety",
    description:
      "Deploy your AI systems successfully with robust hosting infrastructure, performance tracking, speed optimization, budget management, and safety measures to ensure ethical implementation.",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Build a Production-Ready AI System",
    description:
      "Combine model customization, retrieval systems, intelligent agents, and deployment strategies into a fully functional solution. Plan your architecture, develop the system, and launch it successfully.",
    icon: TrendingUp,
  },
];

export function WhatYouWillLearn() {
  return (
    <section
      id="what-you-will-learn"
      className="scroll-mt-[84px] bg-[#35217f] py-14 text-white sm:py-16 lg:py-[72px]"
    >
      <Container>
        <div className="mx-auto w-full max-w-[1240px]">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[34px] font-black leading-none tracking-[-0.035em] text-white sm:text-[42px] lg:text-[48px]">
              What Will You Learn?
            </h2>
          </div>

          {/* Learning Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-[22px]">
            {learningItems.map((item) => (
              <LearningCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

type LearningCardProps = {
  item: LearningItem;
};

function LearningCard({ item }: LearningCardProps) {
  const Icon = item.icon;

  return (
    <article className="flex min-h-[365px] flex-col items-center justify-center rounded-[28px] border border-white/35 bg-transparent px-7 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white/5 sm:min-h-[350px]">
      {/* Icon */}
      <div className="flex h-[78px] items-center justify-center text-white">
        <Icon size={66} strokeWidth={2.1} />
      </div>

      {/* Title */}
      <h3 className="mt-6 max-w-[340px] text-[19px] font-extrabold leading-[1.18] text-white sm:text-[21px]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-4 max-w-[355px] text-[14px] font-normal leading-[1.55] text-white/90 sm:text-[15px]">
        {item.description}
      </p>
    </article>
  );
}
