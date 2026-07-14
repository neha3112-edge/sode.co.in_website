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

type Profile = {
  title: string;
  desc: string;
};

const keySkills: Skill[] = [
  {
    iconSrc: "/iimk/assets/img/icon-iim-01.webp",
    title: "Strategic Human Resource Management",
    desc: "Learn to align HR frameworks with long-term organizational goals and business growth.",
  },
  {
    iconSrc: "/iimk/assets/img/icon-iim-02.webp",
    title: "HR Data Interpretation and Reporting",
    desc: "Develop the ability to analyze complex HR data sets and create meaningful reports for leadership decision-making.",
  },
  {
    iconSrc: "/iimk/assets/img/icon-iim-03.webp",
    title: "Workforce Planning and Forecasting",
    desc: "Acquire tools to predict staffing needs, manage workforce gaps, and ensure future-ready talent pipelines.",
  },
  {
    iconSrc: "/iimk/assets/img/icon-iim-04.webp",
    title: "Talent Analytics",
    desc: "Apply evidence-based methods to measure productivity, identify high-potential employees, and improve overall performance.",
  },
  {
    iconSrc: "/iimk/assets/img/icon-iim-05.webp",
    title: "Employee Engagement and Retention",
    desc: "Master strategies to enhance job satisfaction, reduce attrition, and strengthen employee loyalty.",
  },
  {
    iconSrc: "/iimk/assets/img/icon-iim-06.webp",
    title: "People Analytics",
    desc: "Explore behavioral insights to understand workforce dynamics and improve workplace culture and efficiency.",
  },
];

const toolsLearned: Tool[] = [
  {
    iconSrc: "/iimk/assets/img/power-bi.webp",
    title: "Power BI",
    desc: "Transform HR data into dynamic dashboards and interactive reports that support strategic decisions.",
  },
  {
    iconSrc: "/iimk/assets/img/tableau.webp",
    title: "Tableau",
    desc: "Build advanced data visualizations to track employee performance, workforce trends, and organizational growth.",
  },
  {
    iconSrc: "/iimk/assets/img/microsoft-excel.webp",
    title: "Microsoft Excel",
    desc: "Strengthen skills in workforce planning, data management, and predictive modeling with the HR tool.",
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
              The IIM Kozhikode HRM Analytics Certification Courses
            </h2>
            <p className="mt-4 text-base text-gray-700 leading-relaxed">
              The certificate course of IIM Kozhikode in HR Analytics is a
              6-month online program that helps professionals learn HR concepts
              with modern analytics. The course is 280 hours of expert learning,
              live faculty sessions, and industry projects. Learners receive
              hands-on training in tools such as Tableau, Excel, and Power BI.
              The course is recognized as one of the leading HR courses. It is
              ideal for HR professionals, managers, and MBA graduates seeking to
              advance their careers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section id="key-skills" className="bg-white pb-16 pt-4">
        <Container>
          <div className="text-left">
            <h2 className="text-[20px] font-extrabold text-black sm:text-3xl leading-tight">
              Key Skills You Will Gain from the{" "}
              <span className="text-[#0f3b8c]">
                IIM Kozhikode HR Analytics Course
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-700">
              The IIM Kozhikode HR Analytics Online Course equips learners with
              industry-relevant skills to manage people and processes through
              data-driven methods. The curriculum focuses on:
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
              Tools & Technologies You’ll Learn in the IIM Kozhikode HR
              Analytics Course
            </h2>
            <p className="mt-4 text-base text-gray-600">
              The IIM Kozhikode HR Analytics Course, one of the most
              career-focused courses at IIM Kozhikode, offers hands-on training
              with tools that define modern HRM practices. Designed as a
              practical certification course in IIM Kozhikode, it equips
              learners with the ability to analyze data and apply insights
              across HR functions.
            </p>
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
                <div className="bg-[#1d3d82] p-4 text-white text-xs leading-relaxed text-center font-medium min-h-20 flex items-center justify-center">
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
