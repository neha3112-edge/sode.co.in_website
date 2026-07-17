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
    title: "Strategic HR Analytics",
    desc: "Learn to align HR analytics with organisational goals and transform workforce data into strategic business insights.",
    iconSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/strategic_hr_analytics.webp",
  },
  {
    title: "Workforce Planning & Talent Analytics",
    desc: "Develop skills to forecast talent demand, evaluate recruitment metrics, and identify workforce capability gaps.",
    iconSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/workforce_planning_and_talent_analytics.webp",
  },
  {
    title: "Performance & Engagement Analytics",
    desc: "Analyse employee performance, engagement, and productivity using predictive models and Excel-based analytics.",
    iconSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/performance_and_engagement_analytics.webp",
  },
  {
    title: "Attrition & Retention Analytics",
    desc: "Build data-driven retention strategies by identifying attrition risks and measuring retention ROI through analytics.",
    iconSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/attrition_and_retention_analytics.webp",
  },
  {
    title: "AI & Data Visualisation",
    desc: "Use Excel, Tableau, AI, and predictive models to create dashboards and generate actionable HR insights.",
    iconSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/ai_and_data_visualisation.webp",
  },
  {
    title: "HR Strategy & Business Impact",
    desc: "Measure HR initiative outcomes, communicate analytics-driven recommendations, and understand the benefits of HR analytics for organisational success.",
    iconSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/hr_strategy_and_business_impact.webp",
  },
];

const toolsLearned: ToolLearned[] = [
  {
    title: "Microsoft Excel",
    desc: "Structure, clean, analyse, and interpret HR data using pivot tables, regression, correlation, and predictive techniques.",
    iconSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/ms_excel.webp",
  },
  {
    title: "Tableau",
    desc: "Create interactive dashboards and visualise HR metrics for workforce planning, talent insights, and leadership reporting.",
    iconSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/tableau.webp",
  },
  {
    title: "R",
    desc: "Collect, analyse, and interpret HR datasets while applying analytical techniques in the capstone project.",
    iconSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/r_language.webp",
  },
  {
    title: "AI & Generative AI Tools",
    desc: "Apply AI for talent insights, workforce predictions, HR automation, and responsible analytics-driven decision-making.",
    iconSrc: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/generative_ai.webp",
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
              About the Post Graduate Certificate Programme in Advanced HR Analytics
            </h2>
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              The Post Graduate Certificate Programme in Advanced HR Analytics is a 7-month online HRM post graduate programme offered by IIM Nagpur for mid-career HR professionals with at least two years of work experience. The course is designed as one of the industry-focused HR postgraduate courses; the programme combines live online sessions, hands-on projects, a two-day campus module, and real-world HR scenarios to help learners apply analytics, AI, and predictive models to workforce challenges. The curriculum highlights the benefits of HR analytics by enabling professionals to make evidence-based decisions, align HR strategies with business goals, and create measurable organisational impact through advanced HR analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section id="key-highlights" className="bg-white pb-16 pt-4">
        <Container>
          <div className="text-left">
            <h2 className="text-[18px] font-extrabold text-black sm:text-2xl leading-tight">
              Key Skills You'll Gain with the{" "}
              <span className="text-[#231069]">
                Post Graduate Certificate Programme in Advanced HR Analytics
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Build practical expertise in HR analytics, workforce planning, and data-driven decision-making through hands-on learning, real-world projects, and industry-focused tools used in modern HR functions.
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
              Tools & Technologies You'll Learn in the <br />
              <span className="text-[#231069]">
                Post Graduate Certificate Programme in Advanced HR Analytics
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Gain hands-on experience with industry-relevant tools and technologies to analyse workforce data, build interactive dashboards, apply predictive analytics, and support strategic HR decision-making.
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
                <div className="bg-[#FCB042] p-4 text-black text-xs leading-relaxed text-center font-medium min-h-38 flex flex-col items-center justify-center rounded-b-2xl">
                  <span className="text-[14px] pb-2">
                    <strong>{tool.title}:</strong>
                  </span>
                  <span className="text-[12px] font-semibold">
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
