"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

const tabs = [
  { id: "all", label: "All Programs" },
  { id: "doctorate", label: "Doctorate" },
  { id: "certification", label: "Certifications" },
  { id: "executive", label: "Executive Programs" },
  { id: "master", label: "Master" },
];

const programs = [
  // --- Doctorate Programs ---
  {
    category: "doctorate",
    image: "/assets/images/docrorate-1.png",
    logo: "/assets/images/ggu-logo.jpg",
    title: "Doctor of Business Administration",
    university: "Golden Gate University",
    description:
      "Professionals can elevate their executive leadership capabilities with an elite online DBA. The business doctorate online through Golden Gate DBA drives strategic impact and growth.",
    duration: "27 Months",
    eligibility:
      "Masters Degree or Bachelors Degree with 5+ years of work experience.",
    brochureUrl: "/assets/pdf/ggu_dba.pdf",
  },
  {
    category: "doctorate",
    image: "/assets/images/docrorate-2.png",
    logo: "/assets/images/rushford-logo.jpg",
    title: "Doctor of Business Administration",
    university: "Rushford University",
    description:
      "The program empowers executive leadership through Rushford DBA. This elite online DBA delivers strategic advantage through business doctorate online learning, which is globally recognised.",
    duration: "36 Months",
    eligibility:
      "Masters Degree or Bachelors Degree with 3+ years of work experience.",
    brochureUrl: "/assets/pdf/rushford_dba.pdf",
  },
  {
    category: "doctorate",
    image: "/assets/images/docrorate-3.png",
    logo: "/assets/images/esgci-logo.jpg",
    title: "Doctor of Business Administration",
    university: "ESGCI",
    description:
      "Professionals get an edge to elevate leadership through ESGCI's Online DBA. This business doctorate for working professionals helps them in pursuing executive, elite, strategic growth.",
    duration: "24 Months",
    eligibility:
      "Masters Degree or Bachelor's Degree with 3+ years of work experience.",
    brochureUrl: "/assets/pdf/esgci_dba.pdf",
  },
  {
    category: "doctorate",
    image: "/assets/images/docrorate-4.png",
    logo: "/assets/images/ssbm-logo.jpg",
    title: "Doctor of Business Administration",
    university: "SSBM",
    description:
      "Executives scale their executive leadership through SSBM Geneva Online DBA. This strategic doctorate for working professionals helps in seeking elite doctorate online advancement.",
    duration: "36 Months",
    eligibility:
      "Bachelor's Degree with a minimum of 5 years of experience or Master's degree.",
    brochureUrl: "/assets/pdf/ssbm_dba.pdf",
  },
  {
    category: "doctorate",
    image: "/assets/images/docrorate-5.png",
    logo: "/assets/images/edgewood-logo.jpg",
    title: "Doctor of Business Administration",
    university: "Edgewood University",
    description:
      "Leaders redefine leadership excellence through Edgewood University Online DBA. This strategic doctorate online for working professionals worldwide enhances their abilities, impacting organisational growth.",
    duration: "24 Months",
    eligibility: "Master's Degree",
    brochureUrl: "/assets/pdf/edgewood_dba.pdf",
  },
  {
    category: "doctorate",
    image: "/assets/images/docrorate-6.png",
    logo: "/assets/images/edgewood-logo.jpg",
    title: "MBA + DBA",
    university: "Edgewood University",
    description:
      "Learners accelerate executive leadership through Edgewood University Online MBA + DBA. This combined degree of online DBA and online MBA curates knowledge of business, finance and management.",
    duration: "30 Months",
    eligibility: "Bachelors degree",
    brochureUrl: "/assets/pdf/edgewood_dba_mba.pdf",
  },

  // --- Certification Programs ---
  {
    category: "certification",
    image: "/assets/images/certification-1.webp",
    logo: "/assets/images/iim-logo.jpg",
    title: "Professional Certificate Programme in HR Management and Analytics",
    university: "IIM Kozhikode",
    description:
      "The Online HR Analytics helps professionals to gain Hr Analytics certification and gain expertise in workforce decision making and people analytics certification from IIM Kozhikode.",
    duration: "6 Month",
    eligibility: "Bachelors degree (Min. 3 yr Work Exp)",
    brochureUrl: "/assets/pdf/iim_main_brochure.pdf",
  },
  {
    category: "certification",
    image: "/assets/images/certification-2.webp",
    logo: "/assets/images/iiitb-logo.jpg",
    title:
      "Professional Certificate Programme in Data Science with Generative AI",
    university: "IIIT Bangalore",
    description:
      "This Generative AI certification is for early-career professionals who wish to transition through an AI and data science course.",
    duration: "6 Month",
    eligibility: "Bachelors or Master’s Degree",
    brochureUrl: "/assets/pdf/IIITB_PCP_in_DS_with_GI.pdf",
  },
  {
    category: "certification",
    image: "/assets/images/certification-3.webp",
    logo: "/assets/images/iiitb-logo.jpg",
    title: "Executive Post Graduate Certificate Programme in Data Science & AI",
    university: "IIIT Bangalore",
    description:
      "This helps to gain credentials in both artificial intelligence certification and data analytics certification, offering in-depth knowledge in Data Science and ML.",
    duration: "6 Month",
    eligibility: "Bachelors or Master’s Degree",
    brochureUrl: "/assets/pdf/IIITB_EPGC_DS_AI.pdf",
  },
  {
    category: "certification",
    image: "/assets/images/certification-4.webp",
    logo: "/assets/images/iitkgp-logo.jpg",
    title: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
    university: "IIT Kharagpur",
    description:
      "This Generative AI certification is for early-career professionals who wish to transition through an AI and data science course.",
    duration: "6 Month",
    eligibility: "Bachelors or Master’s Degree",
    brochureUrl: "/assets/pdf/iitkgp_main_brochure.pdf",
  },
  {
    category: "certification",
    image: "/assets/images/certification-5.webp",
    logo: "/assets/images/mica-logo.jpg",
    title: "Advanced Certificate in Digital Marketing & Communication",
    university: "MICA",
    description:
      "MICA offers an Advanced Certificate, which empowers careers through an online digital marketing course for ambitious learners, gaining a Digital Marketing Certificate.",
    duration: "4 Month",
    eligibility: "Bachelors Degree",
    brochureUrl: "/assets/pdf/mica_digital_marketing_and_communication.pdf",
  },
  {
    category: "certification",
    image: "/assets/images/certification-6.webp",
    logo: "/assets/images/mica-logo.jpg",
    title: "Advanced Certificate in Digital Brand Communication Strategy",
    university: "MICA",
    description:
      "The program strengthens strategic brand management capabilities through MICA's Advanced Certificate, enterprising brand-building course and communication strategy course expertise.",
    duration: "7 Month",
    eligibility: "Bachelors Degree",
    brochureUrl: "/assets/pdf/mica_digital_brand_communication_strategy.pdf",
  },

  // --- Executive Programs ---
  {
    category: "executive",
    image: "/assets/images/executive-1.webp",
    logo: "/assets/images/iiitb-logo.jpg",
    title: "Executive Programme in Generative AI for Leaders",
    university: "IIIT Bangalore",
    description:
      "The Generative AI certification is offered in this AI leadership program, enriching professionals with AI for decision-making and empowering AI for business leaders.",
    duration: "5 Month",
    eligibility: "Bachelor's or Master’s Degree (Min. 4 years Work Experience)",
    brochureUrl:
      "/assets/pdf/iiitb_Executive_Program_in_Generative_AI_for_Leaders.pdf",
  },
  {
    category: "executive",
    image: "/assets/images/executive-2.webp",
    logo: "/assets/images/iiitb-logo.jpg",
    title: "Executive Post Graduate Programme in Applied AI and Agentic AI",
    university: "IIIT Bangalore",
    description:
      "This certification program helps future-ready professionals advance their careers with an agentic AI course and an applied AI course, gaining AI agents certification.",
    duration: "30 Weeks",
    eligibility: "Bachelor's or Master’s Degree",
    brochureUrl: "/assets/pdf/IIITB_Applied_AI_and_Agentic_AI.pdf",
  },
  {
    category: "executive",
    image: "/assets/images/executive-3.webp",
    logo: "/assets/images/iiitb-logo.jpg",
    title: "Chief Technology Officer & AI Leadership Programme",
    university: "IIIT Bangalore",
    description:
      "The Chief Technology Officer program empowers leaders through a technology management course focused on digital transformation leadership.",
    duration: "6 Month",
    eligibility: "Bachelor's or Master’s Degree (Min. 8 years Work Experience)",
    brochureUrl: "/assets/pdf/IIITB_CTOAI_leadership_program.pdf",
  },

  // --- Master Programs ---
  {
    category: "master",
    image: "/assets/images/master-1.webp",
    logo: "/assets/images/ggu-logo.jpg",
    title: "Master of Business Administration",
    university: "Golden Gate University",
    description:
      "Accelerate your career with a prestigious online MBA from Golden Gate University, tailored for global leadership and strategic management.",
    duration: "13 Months",
    eligibility: "Bachelor's Degree",
    brochureUrl: "/assets/pdf/ggu_mba.pdf",
  },
  {
    category: "master",
    image: "/assets/images/master-2.webp",
    logo: "/assets/images/ssbm-logo.jpg",
    title: "Master of Business Administration",
    university: "SSBM Geneva",
    description:
      "Gain a world-class Swiss MBA online from SSBM Geneva. Master corporate strategy, finance, and leadership with industry-focused modules.",
    duration: "18 Months",
    eligibility: "Bachelor's Degree",
    brochureUrl: "/assets/pdf/ssbm_main_brochure.pdf",
  },
  {
    category: "master",
    image: "/assets/images/master-3.webp",
    logo: "/assets/images/liverpool-logo.png",
    title: "Master of Business Administration",
    university: "Liverpool Business School",
    description:
      "Earn a British MBA from Liverpool Business School. Build strategic capability, leadership skills, and global business perspectives.",
    duration: "18 Months",
    eligibility: "Bachelor's Degree with 2+ years of experience",
    brochureUrl: "/assets/pdf/liverpool_mba.pdf",
  },
  {
    category: "master",
    image: "/assets/images/master-4.webp",
    logo: "/assets/images/iiitb-logo.jpg",
    title: "Master of Science in Data Science",
    university: "IIIT Bangalore",
    description:
      "Acquire advanced expertise in data analytics, machine learning, and big data with the online MSc in Data Science from IIIT Bangalore.",
    duration: "18 Months",
    eligibility: "Bachelor's Degree in Science/Engineering/Math",
    brochureUrl: "/assets/pdf/iiitb_msc_ds.pdf",
  },
  {
    category: "master",
    image: "/assets/images/master-5.webp",
    logo: "/assets/images/iiitb-logo.jpg",
    title: "Master of Science in Machine Learning & AI",
    university: "IIIT Bangalore",
    description:
      "Prepare for high-growth tech roles with a Master of Science in ML & AI. Dive deep into deep learning, NLP, and computer vision.",
    duration: "18 Months",
    eligibility: "Bachelor's Degree in Science/Engineering/Math",
    brochureUrl: "/assets/pdf/iiitb_msc_ml_ai.pdf",
  },
];

export function PremiumPrograms() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeModal, setActiveModal] = useState<"brochure" | "apply" | null>(
    null,
  );
  const [selectedProgram, setSelectedProgram] = useState<
    (typeof programs)[0] | null
  >(null);

  const filteredPrograms =
    activeTab === "all"
      ? programs
      : programs.filter((prog) => prog.category === activeTab);

  const handleGetBrochure = (prog: (typeof programs)[0]) => {
    sessionStorage.setItem("brochureUrl", getAssetPath(prog.brochureUrl));
    setSelectedProgram(prog);
    setActiveModal("brochure");
  };

  const handleApplyNow = (prog: (typeof programs)[0]) => {
    setSelectedProgram(prog);
    setActiveModal("apply");
  };

  return (
    <section
      id="premium-programs"
      className="py-16 md:py-24 bg-[#f5f4ec] scroll-mt-10 overflow-hidden"
    >
      <Container className="max-w-7xl">
        {/* Title & Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#1d3557] leading-tight mb-3">
            Top Certification & Online Degree Courses
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-semibold">
            Find the credential that moves your career
          </p>
        </div>

        {/* Tabs Buttons Flex container */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border select-none ${
                  isActive
                    ? "bg-[#A66E38] text-white border-transparent shadow-[0_4px_12px_rgba(166,110,56,0.3)]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fade-in"
        >
          {filteredPrograms.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col transform transition duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden animate-fade-in"
            >
              {/* Card Image */}
              <div className="relative w-full h-40 shrink-0">
                <Image
                  src={getAssetPath(item.image)}
                  alt={item.title}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>

              <div className="pt-0 pb-6 px-6 flex flex-col grow text-left relative">
                {/* Institution Logo overlay */}
                <div className="mb-5 -mt-7.5 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.15)] w-[55%] p-2 bg-white relative z-10 flex items-center justify-center h-18 border border-slate-100">
                  <div className="relative w-full h-15">
                    <Image
                      src={getAssetPath(item.logo)}
                      alt={item.university}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-[14px] font-bold text-[#1d3557] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* University Name */}
                <div className="flex items-center gap-2 text-[#A66E38] text-[13px] font-bold mb-4 select-none">
                  {/* University Cap Icon */}
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479L12 20l-6.825-3.057a12.083 12.083 0 01.665-6.48L12 14z" />
                  </svg>
                  <span>{item.university}</span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-[11px] leading-relaxed grow font-medium mb-4">
                  {item.description}
                </p>

                {/* Specs Section */}
                <div className="border-t border-gray-100 pt-4 mb-6 space-y-1.5 mt-auto">
                  <div className="flex items-start text-[10px] text-gray-600 font-semibold">
                    <span className="text-[#A66E38] font-bold mr-2 text-[14px] leading-none">
                      |
                    </span>
                    <span className="text-gray-500 font-medium shrink-0">
                      Duration :
                    </span>
                    <span className="text-[#1C293F] font-bold ml-1">
                      {item.duration}
                    </span>
                  </div>
                  <div className="flex items-start text-[10px] text-gray-600 font-semibold leading-relaxed">
                    <span className="text-[#A66E38] font-bold mr-2 text-[14px] leading-none">
                      |
                    </span>
                    <span className="text-gray-500 font-medium shrink-0">
                      Eligibility :
                    </span>
                    <span className="text-[#1C293F] font-bold ml-1">
                      {item.eligibility}
                    </span>
                  </div>
                </div>

                {/* Buttons Action Grid */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={() => handleGetBrochure(item)}
                    className="flex items-center justify-center gap-1.5 border border-[#1d3557] text-[#1d3557] font-bold py-2.5 px-3 rounded-lg text-[12px] transition duration-300 hover:bg-[#1d3557] hover:text-white active:scale-[0.98] cursor-pointer"
                  >
                    Get Brochure
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleApplyNow(item)}
                    className="flex items-center justify-center gap-1.5 bg-[#1d3557] text-white border border-[#1d3557] font-bold py-2.5 px-3 rounded-lg text-[12px] transition duration-300 hover:bg-[#14243c] active:scale-[0.98] cursor-pointer"
                  >
                    Apply Now
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal Popup for FormWrapper */}
      {activeModal && selectedProgram && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity duration-300">
          <div
            className="absolute inset-0 animate-fade-in"
            onClick={() => setActiveModal(null)}
          />

          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl overflow-y-auto max-h-[90vh] z-10 transition-transform duration-300 scale-100 animate-scale-in">
            <FormWrapper
              title={
                activeModal === "brochure"
                  ? "Download Brochure"
                  : "Get 1 to 1 Expert Guidance"
              }
              subtitle={
                activeModal === "brochure"
                  ? `Enter your details to download the brochure`
                  : `Start your application journey today`
              }
              onClose={() => setActiveModal(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
