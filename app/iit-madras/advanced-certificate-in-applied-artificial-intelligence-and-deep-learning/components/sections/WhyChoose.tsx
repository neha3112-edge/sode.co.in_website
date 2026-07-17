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
    iconSrc: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/Python for Data Analysis.webp",
    title: "Python for Data Analysis",
    desc: "Learn Python programming and use core libraries to manipulate, analyse, and visualise datasets effectively.",
  },
  {
    iconSrc: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/Statistical Analysis.webp",
    title: "Statistical Analysis",
    desc: "Apply probability, statistics, and linear algebra to interpret data and support informed decision-making.",
  },
  {
    iconSrc: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/Machine Learning.webp",
    title: "Machine Learning",
    desc: "Build, evaluate, and optimise supervised and unsupervised machine learning models for predictive analytics.",
  },
  {
    iconSrc: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/Deep Learning.webp",
    title: "Deep Learning",
    desc: "Develop neural networks using TensorFlow and PyTorch for computer vision and NLP applications.",
  },
  {
    iconSrc: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/MLOps & LLMOps.webp",
    title: "MLOps & LLMOps",
    desc: "Automate model deployment, manage AI lifecycles, and understand production-ready machine learning workflows.",
  },
  {
    iconSrc: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/AI.webp",
    title: "Applied AI & Agentic AI",
    desc: "Explore real-world AI applications, Agentic AI systems, governance, and emerging AI technologies across industries.",
  },
];

const toolsLearned: Tool[] = [
  {
    iconSrc: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/Python.webp",
    title: "Python (NumPy, Pandas, Matplotlib)",
    desc: "Perform data manipulation, analysis, and visualization to derive actionable insights.",
  },
  {
    iconSrc: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/TensorFlow.webp",
    title: "TensorFlow & PyTorch",
    desc: "Build, train, and optimize deep learning and neural network models for real-world applications.",
  },
  {
    iconSrc: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/Google Colaboratory.webp",
    title: "Google Colaboratory",
    desc: "Develop, test, and execute AI and machine learning projects in a cloud-based environment.",
  },
  {
    iconSrc: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/MLOps & LLMOps 1.webp",
    title: "MLOps & LLMOps",
    desc: "Automate model deployment, manage AI lifecycles, and support production-ready machine learning systems.",
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
              The Advanced Certificate in Applied Artificial Intelligence & Deep Learning
            </h2>
            <p className="mt-4 text-small text-gray-700 leading-relaxed">
              The <strong>Advanced Certificate in Applied Artificial Intelligence & Deep Learning</strong> is an <strong>artificial intelligence course</strong> designed by IITM Pravartak to help learners build expertise in data analytics, machine learning, and deep learning. This <strong>AI and deep learning course</strong> covers Python for data analysis, statistical techniques, machine learning algorithms, TensorFlow, PyTorch, MLOps, and cybersecurity concepts through hands-on learning, case studies, and projects. Delivered through live online classes by faculty from IIT Madras, other IITs, IIMs, and industry experts, the <strong>advanced artificial intelligence course</strong> equips learners with practical skills to solve real-world data challenges and advance their careers in AI-driven domains.
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
              <span className="text-[#21a32f]">
                Advanced Certificate in Applied Artificial Intelligence & Deep Learning
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Build practical skills in applied AI, machine learning, deep learning, data analytics, and model deployment through hands-on projects, assignments, and real-world applications
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {keySkills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white p-6 rounded-2xl border border-[#2C5E7C] flex gap-2 md:gap-5 items-start text-left transition-all duration-300 hover:shadow-lg"
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
            <h2 className="text-[18px] font-extrabold sm:text-3xl">
              Tools & Technologies You'll Learn in <br />
              <span className="text-[#22a42f]">
                IITM Pravartak Advanced Artificial Intelligence Course and Deep Learning Certificate Course
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Gain hands-on experience with industry-relevant tools and deep learning frameworks used for data analysis, machine learning, model development, and AI deployment through practical learning.
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
                <div className="bg-[#2C5E7C] p-4 text-white text-xs leading-relaxed text-center font-medium min-h-40 flex flex-col items-center justify-center">
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
