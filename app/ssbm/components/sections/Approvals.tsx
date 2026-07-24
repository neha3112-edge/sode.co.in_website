"use client";

import { useEffect, useState } from "react";
import { Award, BookOpen, ChevronDown, Clock3, Download, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { SSBM_COURSE_OPTIONS } from "../../constants";

type OverviewItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const overviewItems: OverviewItem[] = [
  {
    title: "Duration",
    description: "2-3 Years",
    icon: <Clock3 size={31} strokeWidth={2.4} />,
  },
  {
    title: "Approvals",
    description: "ACBSP, BAC, CHEA",
    icon: <Award size={31} strokeWidth={2.4} />,
  },
  {
    title: "Specialisations",
    description: "20+ Specialisations",
    icon: <BookOpen size={32} strokeWidth={2.4} />,
  },
  {
    title: "Degree",
    description: "Doctorate",
    icon: <GraduationCap size={34} strokeWidth={2.4} />,
  },
];

export function Approvals() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  const handleCurriculumClick = () => {
    setDownloadOpen(true);
  };

  const handleKnowMoreClick = () => {
    const whyChooseSection = document.getElementById("whychoose");
    whyChooseSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | Disable body scrolling while popup is open
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.body.style.overflow = downloadOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [downloadOpen]);

  /*
  |--------------------------------------------------------------------------
  | Close popup on Escape
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDownloadOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <section
        id="overview"
        className="border-b border-[#e8e8e8] bg-white py-10 sm:py-12 lg:py-14"
      >
        <Container className="p-0">
          <div className="mx-auto w-full max-w-[1140px] px-4 md:px-0">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-[31px] font-extrabold tracking-[-0.035em] text-black sm:text-[36px]">
                Course{" "}
                <span className="relative inline-block text-[#c11f28]">
                  Overview
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-[1120px] text-center text-[13px] font-medium leading-[1.6] text-gray-800 sm:text-[13px]">
              The Online SSBM DBA program offers a strong path with many silent features. The SSBM University not only offers a well-recognised degree program but also includes PwC India&apos;s Board Advisory Certification, with patent-to-idea guidance, where Swiss expert faculty guide learners in conducting practical research and turning their ideas into theory. SSBM Doctorate online course also offers support in research, publishing, and leadership development for working professionals. The learner also takes advantage of practical boardroom skills enhancement, expert mentorship, global publishing opportunities, and allows them to interact with elite networks. The SSBM DBA online program offers the mixture of academic depth with real-world application, helping professionals increase their strategic decision-making and help themselves establish an influential leader. Students after taking the SSBM DBA admission can also expect a major salary increase.
            </p>

            {/* Overview Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {overviewItems.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col md:flex-row min-h-[76px] items-center gap-4 bg-[#f4f5f8] rounded-xl px-5 py-4 border border-gray-300 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.01]"
                >
                  <div className="flex h-[42px] w-[32px] shrink-0 items-center justify-center text-[#c11f28]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold leading-tight text-black">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] font-semibold leading-tight text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex items-center justify-center gap-4 flex-row sm:gap-3">
              <button
                type="button"
                onClick={handleCurriculumClick}
                className="inline-flex min-h-[42px] min-w-[178px] items-center justify-center gap-2 rounded-[5px] bg-[#c11f28] px-6 py-2.5 text-[14px] font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#a8141c] hover:shadow-md"
              >
                Get Curriculum
                <Download size={15} strokeWidth={2.5} />
              </button>

              <button
                type="button"
                onClick={handleKnowMoreClick}
                className="inline-flex min-h-[42px] min-w-[145px] items-center justify-center gap-2 rounded-[5px] bg-black px-6 py-2.5 text-[14px] font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#242424] hover:shadow-md"
              >
                Know More
                <ChevronDown size={15} strokeWidth={2.7} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          Download Brochure Popup Modal
      ========================================================= */}

      {downloadOpen && (
        <div
          role="presentation"
          onMouseDown={() => setDownloadOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download brochure"
            onMouseDown={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[410px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Please enter your details to download the brochure:"
              onClose={() => setDownloadOpen(false)}
              courseOptions={SSBM_COURSE_OPTIONS}
              defaultCourse=""
              formNameOverride="SSBM Overview Download Brochure Form"
              sourceOverride="SSBM LP"
              utmSourceFallback="Organic"
              utmMediumFallback="SSBM_Organic"
              submitButtonText="Submit"
              isBrochureForm
              brochureUrl="/ssbm/assets/brochures/main_brochure.pdf"
              redirectUrl="/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}
