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

const assetsBase = "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai/assets/img";

const gainSkills: GainSkill[] = [
  {
    title: "Python for Data Science",
    desc: "Build a strong foundation in Python, NumPy, Pandas, SciPy, and Matplotlib for data analysis and visualization.",
    iconSrc: `${assetsBase}/Python for Data Science.webp`,
  },
  {
    title: "Machine Learning",
    desc: "Develop predictive, classification, and clustering models using industry-standard machine learning techniques and frameworks.",
    iconSrc: `${assetsBase}/Machine Learning.webp`,
  },
  {
    title: "Deep Learning & Computer Vision",
    desc: "Build neural networks and apply CNNs, OpenCV, object detection, and image recognition for advanced AI applications.",
    iconSrc: `${assetsBase}/Deep Learning & Computer Vision.webp`,
  },
  {
    title: "Generative AI & LLMs",
    desc: "Design AI solutions using prompt engineering, LangChain, RAG, AI agents, GPT, BERT, and transformer-based models.",
    iconSrc: `${assetsBase}/Generative AI & LLMs.webp`,
  },
  {
    title: "MLOps & Model Deployment",
    desc: "Build production-ready ML pipelines using Docker, CI/CD, GitHub Actions, and ML deployment practices.",
    iconSrc: `${assetsBase}/MLOps & Model Deployment.webp`,
  },
  {
    title: "Data Engineering & Big Data",
    desc: "Work with Azure Data Lake, Apache Spark, Kafka, Databricks, and NoSQL databases for large-scale data processing.",
    iconSrc: `${assetsBase}/Data Engineering & Big Data.webp`,
  },
];

const toolsLearned: ToolLearned[] = [
  {
    title: "Python, NumPy, Pandas & Matplotlib",
    desc: "Perform data analysis, data manipulation, statistical computing, and data visualization for real-world datasets.",
    iconSrc: `${assetsBase}/Python, NumPy, Pandas & Matplotlib.webp`,
  },
  {
    title: "TensorFlow, Scikit-learn & Keras",
    desc: "Build, train, and evaluate machine learning and deep learning models for predictive analytics and AI applications.",
    iconSrc: `${assetsBase}/TensorFlow, Scikit-learn & Keras.webp`,
  },
  {
    title: "Docker, GitHub Actions & ML Deployment Tools",
    desc: "Create CI/CD pipelines, containerise applications, and deploy production-ready machine learning models efficiently.",
    iconSrc: `${assetsBase}/Docker, GitHub Actions & ML Deployment Tools.webp`,
  },
  {
    title: "Azure Data Lake, Apache Spark, Kafka & Databricks",
    desc: "Build scalable data engineering pipelines, process big data, and support enterprise AI workflows.",
    iconSrc: `${assetsBase}/Azure Data Lake, Apache Spark, Kafka & Databricks.webp`,
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
              The PG Certificate in Data Science, Machine Learning & Generative AI
            </h2>
            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              The PG Certificate in Data Science, Machine Learning & Generative AI is an industry-oriented data science and machine learning course offered by the Continuing Education Centre, IIT Roorkee. Designed for working professionals, this data science and ML courses programme builds expertise across Python, Data Science, Machine Learning, Deep Learning, MLOps, Large Language Models (LLMs), and Generative AI through live online sessions, hands-on projects, and a capstone project.
            </p>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section id="key-highlights" className="bg-white pb-16 pt-4">
        <Container>
          <div className="text-left">
            <h2 className="text-[18px] font-extrabold text-black sm:text-2xl leading-tight">
              Key Skills You'll Gain{" "}
              <span className="text-[#3585C1]">
                IIT Roorkee Data Science and ML Course with Generative AI certificate
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Develop practical, job-ready skills through live learning, hands-on projects, and real-world applications in this data science and machine learning course, covering the complete AI and machine learning lifecycle.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {gainSkills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white p-6 rounded-2xl border border-[#3585C1] flex gap-2 md:gap-5 items-start text-left transition-all duration-300 hover:shadow-lg"
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
              Tools & Technologies You'll Learn in This <br />
              <span className="text-[#3585C1]">
                Data Science and Machine Learning Course
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Learn industry-relevant tools and platforms used across data science, machine learning, MLOps, and Generative AI to build, deploy, and manage end-to-end AI solutions with the best Data Science PG courses in India.
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
                <div className="bg-[#3585C1] p-4 text-white text-xs leading-relaxed text-center font-medium min-h-[160px] flex flex-col items-center justify-center">
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
