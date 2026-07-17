"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

type GainSkill = {
  title: string;
  desc: string;
  iconSrc: string;
};

type ToolLearned = {
  title: string;
  desc: string;
  iconSrc: string;
};

const gainSkills: GainSkill[] = [
  {
    title: "Sales & Marketing Strategy",
    desc: "Build a comprehensive understanding of modern sales and marketing practices to create integrated business growth strategies.",
    iconSrc: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Sales & Marketing Strategy.webp",
  },
  {
    title: "Customer Behaviour Analysis",
    desc: "Understand customer motivations, preferences, and buying behaviour to develop more effective and customer-centric marketing initiatives.",
    iconSrc: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Customer Behaviour Analysis.webp",
  },
  {
    title: "Digital Marketing & AI",
    desc: "Learn to leverage digital marketing strategies, AI, and advanced marketing tools for personalised campaigns and business growth.",
    iconSrc: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Digital Marketing & AI.webp",
  },
  {
    title: "Brand & Marketing Communications",
    desc: "Evaluate and enhance marketing communications to strengthen brand positioning and deliver impactful customer experiences.",
    iconSrc: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Brand & Marketing Communications.webp",
  },
  {
    title: "Data-Driven Decision Making",
    desc: "Develop analytical skills using business analytics and marketing insights to support strategic sales and marketing decisions.",
    iconSrc: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/DDD Making.webp",
  },
  {
    title: "Value Proposition & Marketing Mix",
    desc: "Learn to create compelling value propositions and strategically manage the marketing mix for competitive advantage.",
    iconSrc: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/icon-iim-06.webp",
  },
];

const toolsLearned: ToolLearned[] = [
  {
    title: "MS Excel",
    desc: "Perform data analysis, support business analytics, and derive actionable insights for informed marketing decisions.",
    iconSrc: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/ms excel.webp",
  },
  {
    title: "Search Engine Marketing (SEO & SEM)",
    desc: "Understand search engine optimisation and marketing to improve online visibility and digital marketing performance.",
    iconSrc: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/(SEO & SEM).webp",
  },
  {
    title: "Social Media & Web Analytics",
    desc: "Analyse campaign performance, measure customer engagement, and optimise digital marketing strategies using data-driven insights.",
    iconSrc: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/Social Media & Web Analytics.webp",
  },
  {
    title: "AI for Marketing",
    desc: "Explore AI applications in branding, performance marketing, video creation, prompting, and personalised customer experiences.",
    iconSrc: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/AI for Marketing.webp",
  },
];

export function WhyChoose() {
  return (
    <>
      {/* Overview Section */}
      <section id="overview" className="bg-white pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-[20px] font-extrabold text-black sm:text-2xl">
              The Executive Programme in Sales and Marketing (EPSM)
            </h2>
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              The Executive Programme in Sales and Marketing (EPSM) is a comprehensive sales and marketing course online designed for working professionals seeking to strengthen their expertise in modern sales and marketing. Over 12 months, participants gain practical knowledge of sales management, digital marketing, analytics, AI-enabled marketing, customer behaviour, and business strategy.<br /><br />
              The programme combines theoretical concepts with practical applications to help learners understand the synergy between sales and marketing, create customer-centric strategies, and leverage emerging technologies to drive business growth and enhance customer experiences in a rapidly evolving marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section id="key-highlights" className="bg-white pb-16 pt-4">
        <Container>
          <div className="text-left">
            <h2 className="text-[18px] font-extrabold text-black sm:text-2xl leading-tight">
              Top Skills You Will Gain in{" "}
              <span className="text-[#231069]">
                Sales and Marketing Certificate Courses
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Develop practical sales and marketing capabilities to address evolving business challenges, leverage AI-enabled strategies, strengthen customer engagement, and make informed decisions that contribute to sustainable business growth.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {gainSkills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white p-6 rounded-2xl border border-[#231069] flex gap-2 md:gap-5 items-start text-left transition-all duration-300 hover:shadow-lg"
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
                  <h3 className="text-lg font-bold text-black leading-snug">
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
        className="bg-white py-12 md:pt-2 sm:pb-16 border-t border-gray-100"
      >
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[20px] font-extrabold sm:text-3xl">
              Tools & Technologies You'll Learn in <br />
              <span className="text-[#231069]">
                Sales and Marketing Management course
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Gain hands-on exposure to industry-relevant tools and technologies that support digital marketing, business analytics, customer engagement, and AI-enabled decision-making in today's evolving sales and marketing landscape.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                <div className="bg-[#231069] p-4 text-white text-xs leading-relaxed text-center font-medium min-h-50 flex flex-col items-center justify-center">
                  <span className="text-[14px] pb-2">
                    <strong>{tool.title}:</strong>
                  </span>
                  <span className="text-[12px]">
                    {tool.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
