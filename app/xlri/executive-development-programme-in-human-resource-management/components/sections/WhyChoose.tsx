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
    title: "Strategic HR Management",
    desc: "Align HR strategies with business objectives and support organisational growth through effective people management.",
    iconSrc: "/xlri/executive-development-programme-in-human-resource-management/assets/img/Strategic HR Management.webp",
  },
  {
    title: "Talent Acquisition & Recruitment",
    desc: "Build expertise in competency-based recruitment, structured interviews, employer branding, and modern selection techniques.",
    iconSrc: "/xlri/executive-development-programme-in-human-resource-management/assets/img/Talent Acquisition & Recruitment.webp",
  },
  {
    title: "Employee Engagement & Learning",
    desc: "Design employee engagement initiatives while strengthening learning, leadership development, coaching, and mentoring practices.",
    iconSrc: "/xlri/executive-development-programme-in-human-resource-management/assets/img/Employee Engagement & Learning.webp",
  },
  {
    title: "HR Analytics & Technology",
    desc: "Apply HR analytics, predictive analytics, and data-driven decision-making to improve workforce performance.",
    iconSrc: "/xlri/executive-development-programme-in-human-resource-management/assets/img/HR Analytics & Technology.webp",
  },
  {
    title: "Labour Laws & Compliance",
    desc: "Interpret employment laws, manage employee relations, and ensure legally compliant HR practices.",
    iconSrc: "/xlri/executive-development-programme-in-human-resource-management/assets/img/Labour Laws & Compliance.webp",
  },
  {
    title: "Organisational Change Management",
    desc: "Lead organisational design, cultural transformation, and change initiatives to improve business effectiveness.",
    iconSrc: "/xlri/executive-development-programme-in-human-resource-management/assets/img/Organisational Change Management.webp",
  },
];

const toolsLearned: ToolLearned[] = [
  {
    title: "HR Analytics",
    desc: "Analyse workforce data and enable evidence-based HR decision-making through analytical and predictive techniques.",
    iconSrc: "/xlri/executive-development-programme-in-human-resource-management/assets/img/HR  Analytics.webp",
  },
  {
    title: "Predictive Analytics",
    desc: "Forecast workforce trends and improve productivity using data-driven HR insights.",
    iconSrc: "/xlri/executive-development-programme-in-human-resource-management/assets/img/Predictive Analytics.webp",
  },
  {
    title: "Balanced Scorecard & HR Scorecard",
    desc: "Measure HR performance and align people strategies with organisational goals.",
    iconSrc: "/xlri/executive-development-programme-in-human-resource-management/assets/img/balanced-scorecard.webp",
  },
  {
    title: "SHRM Learning Platform",
    desc: "Access global HR resources, learning materials, toolkits, articles, and a professional peer community for continuous learning.",
    iconSrc: "/xlri/executive-development-programme-in-human-resource-management/assets/img/SHRM.webp",
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
              XLRI Executive Development Programme in Human Resource Management
            </h2>
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              The XLRI Executive Development Programme in Human Resource Management is a 7-month executive management programs offering designed for working professionals seeking to strengthen their HR expertise and transition into strategic HR roles. This management development program in HRM is offered by XLRI Jamshedpur jointly with XLEAD in collaboration with SHRM India. Aligned with the SHRM Global Competency Framework, the programme combines academic excellence with practical application across recruitment, employee engagement, learning and development, HR analytics, legal frameworks, and organisational change.
            </p>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section id="key-highlights" className="bg-white pb-16 pt-4">
        <Container>
          <div className="text-left">
            <h2 className="text-[18px] font-extrabold text-black sm:text-2xl leading-tight">
              Key Skills You'll Gain in the XLRI Executive Development Programme in{" "}
              <span className="text-[#10316A]">
                Human Resource Management
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Develop practical and strategic HR competencies through real-world learning, enabling you to manage people, drive organisational performance, and make informed HR decisions in a dynamic business environment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {gainSkills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white p-6 rounded-2xl border border-[#10316A] flex gap-2 md:gap-5 items-start text-left transition-all duration-300 hover:shadow-lg"
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
              <span className="text-[#10316A]">
                XLRI Executive Development Programme in Human Resource Management
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Gain exposure to modern HR tools, analytics frameworks, and digital learning resources that support strategic decision-making, workforce management, and professional development throughout the programme.
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
                <div className="bg-[#10316A] p-4 text-white text-xs leading-relaxed text-center font-medium min-h-44 flex flex-col items-center justify-center rounded-b-2xl">
                  <span className="text-[14px] pb-2">
                    <strong>{tool.title}:</strong>
                  </span>
                  <span className="text-[12px] font-semibold text-white/90">
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
