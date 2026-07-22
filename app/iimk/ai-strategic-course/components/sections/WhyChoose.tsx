"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

type Skill = {
  iconSrc: string;
  title: string;
  desc: string;
};

type Tool = {
  iconSrc: string;
  title: string;
  desc: string;
};

const keySkills: Skill[] = [
  {
    iconSrc: "/iimk/ai-strategic-course/assets/img/icon-iim-01.webp",
    title: "AI Strategy & Leadership",
    desc: "Develop AI strategies aligned with business goals and lead AI-driven transformation initiatives in this IIM Kozhikode online courses for working professionals.",
  },
  {
    iconSrc: "/iimk/ai-strategic-course/assets/img/icon-iim-02.webp",
    title: "Generative AI & Agentic AI",
    desc: "Learn to leverage GenAI, LLMs, and Agentic AI for practical business applications through this leading IIM courses on AI.",
  },
  {
    iconSrc: "/iimk/ai-strategic-course/assets/img/icon-iim-03.webp",
    title: "AI Business Case & ROI Analysis",
    desc: "Build AI business cases, estimate ROI, and present data-backed recommendations to stakeholders.",
  },
  {
    iconSrc: "/iimk/ai-strategic-course/assets/img/icon-iim-04.webp",
    title: "Prompt Engineering & AI Workflow Automation",
    desc: "Master prompt engineering, AI workflows, automation, and tool integration to improve productivity.",
  },
  {
    iconSrc: "/iimk/ai-strategic-course/assets/img/icon-iim-05.webp",
    title: "AI Governance & Responsible AI",
    desc: "Understand AI ethics, governance frameworks, compliance, and risk management for responsible AI adoption.",
  },
  {
    iconSrc: "/iimk/ai-strategic-course/assets/img/icon-iim-06.webp",
    title: "Data-Driven Decision Making",
    desc: "Use AI insights, performance metrics, and data storytelling to make faster, smarter business decisions.",
  },
];

const toolsLearned: Tool[] = [
  {
    iconSrc: "/iimk/ai-strategic-course/assets/img/power-bi.webp",
    title: "Generative AI & Agentic AI",
    desc: "Understand how modern AI systems work and apply them to solve real business challenges with confidence with this AI course for executives.",
  },
  {
    iconSrc: "/iimk/ai-strategic-course/assets/img/tableau.webp",
    title: "Large Language Models (LLMs)",
    desc: "Learn how ChatGPT, Claude, and similar LLMs work to evaluate, direct, and use AI effectively in business through this strategic management course IIM.",
  },
  {
    iconSrc: "/iimk/ai-strategic-course/assets/img/microsoft-excel.webp",
    title: "Prompt Engineering",
    desc: "Create effective prompts and AI workflows to generate reliable, high-quality outputs for real-world business applications.",
  },
];

export function WhyChoose() {
  return (
    <>
      {/* Overview Section */}
      <section id="overview" className="bg-white pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-[20px] font-extrabold text-[#0f3b8c] sm:text-3xl">
              About the AI for Business Professionals Programme
            </h2>
            <p className="mt-4 text-base text-gray-700 leading-relaxed">
              Professionals can build practical AI leadership capabilities with this 6-month programme designed to help them apply AI in real business environments. One of the leading AI strategy courses, it enables learners to evaluate AI opportunities, create business strategies, implement AI initiatives, and measure business impact without coding. <br /><br />
              This online IIM AI courses for working professionals combines live learning, projects, and a leadership capstone to help professionals make confident AI-driven business decisions.
            </p>
          </div>
        </div>
      </section>
      <div className="text-left mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[18px] font-extrabold text-[#0f3b8c] sm:text-2xl">
          Eligibility to enrol in IIM Kozhikode AI for Business Professionals Program
        </h2>
        <div className="flex flex-col gap-2 mt-3 mb-5">
          <div className="flex gap-2 align-center">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3ab449] text-white"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span>
            <p>Bachelor’s degree with a minimum of 3 years of work experience.</p>
          </div>
        </div>
      </div>
      <section>

      </section>

      {/* Key Skills Section */}
      <section id="key-highlights" className="bg-white pb-16 pt-4">
        <Container>
          <div className="text-left">
            <h2 className="text-[20px] font-extrabold text-black sm:text-3xl leading-tight">
              Key Skills You Will Gain from the{" "}
              <span className="text-[#0f3b8c]">
                AI for Business Professionals Program
              </span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {keySkills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white p-6 rounded-2xl border border-[#0f3b8c] flex gap-2 md:gap-5 items-start text-left transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-14 w-14 md:h-18 md:w-18 shrink-0 flex items-center justify-center">
                  <Image
                    src={getAssetPath(skill.iconSrc)}
                    alt={skill.title}
                    width={65}
                    height={65}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0f3b8c] leading-snug">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools & Technologies Section */}
      <section
        id="courses"
        className="bg-white py-12 sm:py-16 border-t border-gray-100"
      >
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[20px] font-extrabold text-[#1d3d82] sm:text-4xl">
              Tools & Technologies You’ll Learn in the IIM Kozhikode Online course on AI
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {toolsLearned.map((tool) => (
              <div
                key={tool.title}
                className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-1 bg-white p-6 flex flex-col items-center text-center">
                  <div className="relative h-24 w-48 flex items-center justify-center">
                    <Image
                      src={getAssetPath(tool.iconSrc)}
                      alt={tool.title}
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 bg-[#1d3d82] p-4 text-white text-xs leading-relaxed text-center font-medium min-h-20 flex items-center justify-center">
                  <h3 className="text-base font-bold text-white leading-snug">
                    {tool.title}
                  </h3>
                  {tool.desc}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
