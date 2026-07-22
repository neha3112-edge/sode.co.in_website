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
    iconSrc: "/iimb/assets/img/AI Strategy & Leadership.webp",
    title: "Leadership & Communication",
    desc: "Develop executive communication skills to influence stakeholders and lead teams confidently in the young leaders development programme.",
  },
  {
    iconSrc: "/iimb/assets/img/Generative AI & Agentic AI-2.webp",
    title: "Business Analytics",
    desc: "Interpret business data using analytical frameworks and AI-powered insights through IIM Bangalore online classes.",
  },
  {
    iconSrc: "/iimb/assets/img/AI Business Case & ROI Analysis.webp",
    title: "People Management",
    desc: "Build inclusive teams, manage workplace dynamics, and strengthen leadership capabilities in the young leaders program.",
  },
  {
    iconSrc: "/iimb/assets/img/Prompt Engineering & AI Workflow Automation.webp",
    title: "Financial Decision-Making",
    desc: "Learn financial analysis, budgeting, and business planning with this IIM Bangalore online course.",
  },
  {
    iconSrc: "/iimb/assets/img/AI Governance & Responsible AI.webp",
    title: "Strategic & Operational Thinking",
    desc: "Apply strategy, operations, and organisational design concepts in real-world business environments through future leaders programme learning.",
  },
  {
    iconSrc: "/iimb/assets/img/Data-Driven Decision Making.webp",
    title: "Innovation & Customer Focus",
    desc: "Strengthen entrepreneurial thinking, product management, and customer-centric strategies with IIM Bangalore online certification.",
  },
];

const toolsLearned: Tool[] = [
  {
    iconSrc: "/iimb/assets/img/Generative AI & Agentic AI.webp",
    title: "AI-Powered Business Workflows",
    desc: "Learn to use AI for business communication, financial planning, data analysis, customer engagement, and strategic decision-making through industry-led sessions in this young leaders program.",
  },
  {
    iconSrc: "/iimb/assets/img/Large Language Models.webp",
    title: "Business Analytics & Dashboarding",
    desc: "Build analytical skills using business statistics, AI copilots, dashboards, and data-driven frameworks to make confident managerial decisions through IIM Bangalore online certification learning.",
  },
  {
    iconSrc: "/iimb/assets/img/Prompt Engineering.webp",
    title: "Digital Product & Customer Management",
    desc: "Understand digital product strategy, CRM, platform ecosystems, customer retention, and AI-enabled product innovation with one of the leading IIM Bangalore online courses with certificates.",
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
              The Young Leaders Programme by IIM Bangalore
            </h2>
            <p className="mt-4 text-base text-gray-700 leading-relaxed">
              The Young Leaders Programme is designed for graduates and early-career professionals who want to build strong general management capabilities before stepping into leadership roles. This IIM Bangalore online course combines faculty-led learning, AI-integrated industry sessions, two campus immersions, and a capstone project to help learners develop practical business knowledge across finance, strategy, marketing, operations, communication, entrepreneurship, and people management.
              <br /><br />
              Delivered through IIMBx, this programme is ideal for aspiring managers seeking IIM Bangalore online courses with certificates that strengthen leadership and decision-making skills.
            </p>
          </div>
        </div>
      </section>
      <div className="text-left mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-[18px] font-extrabold text-[#0f3b8c] sm:text-2xl">
          Eligibility to Enrol in the Young Leaders Programme
        </h2>
        <div className="flex flex-col gap-2 mt-3 mb-5">
          <div className="flex gap-2 align-center">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3ab449] text-white"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span>
            <p>Graduates in any discipline with 1–5 years of professional experience can apply.</p>
          </div>
          <div className="flex gap-2 align-center">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3ab449] text-white"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span>
            <p>Candidates with 6–7 years of professional experience may be considered on a case-by-case basis by IIMBx.</p>
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
              Key Skills You'll Gain with the{" "}
              <span className="text-[#0f3b8c]">
                Young Leaders Programme
              </span>
            </h2>
            <p className="pt-4">
              Build practical management capabilities through the Young Leaders Programme, an IIM Bangalore online course that prepares professionals to lead teams, solve business challenges, and make confident decisions across key management functions.
            </p>
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
              Tools & Technologies You’ll Learn in the Young Leaders Programme
            </h2>

            <p className="pt-4">Gain hands-on exposure to practical business tools through the Young Leaders Programme, an IIM Bangalore online course that integrates AI into management workflows, data-driven decision-making, and digital business strategy for aspiring leaders.</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
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
