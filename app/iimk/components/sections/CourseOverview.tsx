"use client";

import { useState } from "react";
import { Download, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";

const IIT_KGP_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
    label: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
  },
];

export function CourseOverview() {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

  return (
    <>
      <section
        id="course"
        className="scroll-mt-[84px] bg-white py-16 sm:py-20 lg:py-[88px]"
      >
        <Container>
          <div className="mx-auto max-w-[1420px] text-center">
            {/* Main Heading */}
            <h2 className="text-[34px] font-black uppercase leading-none tracking-[-0.03em] text-[#322088] sm:text-[44px] lg:text-[50px]">
              Course Overview
            </h2>

            {/* Course Title */}
            <h3 className="mx-auto mt-5 max-w-[1250px] text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-black sm:text-[28px] lg:text-[32px]">
              Executive Post Graduate Certificate in Generative AI &amp; Agentic
              AI
            </h3>

            {/* Description */}
            <p className="mx-auto mt-12 max-w-[1450px] text-[16px] font-normal leading-[1.65] text-[#555555] sm:text-[18px] lg:text-[21px]">
              The IIT Kharagpur AI course is designed to help learners build
              real-world skills in Generative AI and Agentic AI through a
              structured, job-focused curriculum. Delivered as part of IIT
              Kharagpur online courses, this program supports students and
              working professionals who want hands-on learning and strong AI
              fundamentals. The course focuses on practical system-building,
              including enterprise-ready AI solutions, fine-tuning LLMs, and
              multi-agent workflows. With expert guidance and flexible learning,
              you can gain industry-relevant knowledge and move toward career
              growth with IIT Kharagpur University credentials.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7">
              <button
                type="button"
                onClick={() => setBrochureOpen(true)}
                className="inline-flex min-h-[64px] w-full max-w-[300px] items-center justify-center gap-4 rounded-full border-[3px] border-[#ff4b0b] bg-white px-8 text-[18px] font-extrabold text-[#ff4b0b] transition-all duration-200 hover:bg-[#ff4b0b] hover:text-white sm:w-auto"
              >
                Download Brochure
                <Download size={23} strokeWidth={2.7} />
              </button>

              <button
                type="button"
                onClick={() => setApplyOpen(true)}
                className="inline-flex min-h-[64px] w-full max-w-[210px] items-center justify-center rounded-full bg-[#322088] px-10 text-[18px] font-extrabold text-white transition-all duration-200 hover:bg-[#25166f] sm:w-auto"
              >
                Apply Now
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Download Brochure Popup */}
      {brochureOpen && (
        <Modal
          title="Download Brochure"
          ariaLabel="Download IIT Kharagpur brochure"
          onClose={() => setBrochureOpen(false)}
        >
          <FormWrapper
            title="Download Brochure"
            subtitle="Fill your details to receive the IIT Kharagpur brochure"
            courseOptions={IIT_KGP_COURSE_OPTIONS}
            formNameOverride="IIT Kharagpur Course Overview Brochure Form"
            sourceOverride="IIT Kharagpur Course Overview"
            utmSourceFallback="IIT Kharagpur Organic"
            utmMediumFallback="Course Overview Brochure"
            submitButtonText="Download Brochure"
            onClose={() => setBrochureOpen(false)}
          />
        </Modal>
      )}

      {/* Apply Now Popup */}
      {applyOpen && (
        <Modal
          title="Apply Now"
          ariaLabel="Apply for IIT Kharagpur course"
          onClose={() => setApplyOpen(false)}
        >
          <FormWrapper
            title="Apply Now"
            subtitle="Fill your details and our academic expert will contact you"
            courseOptions={IIT_KGP_COURSE_OPTIONS}
            formNameOverride="IIT Kharagpur Course Overview Apply Form"
            sourceOverride="IIT Kharagpur Course Overview"
            utmSourceFallback="IIT Kharagpur Organic"
            utmMediumFallback="Course Overview Apply Now"
            submitButtonText="Submit Application"
            onClose={() => setApplyOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}

type ModalProps = {
  title: string;
  ariaLabel: string;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ title, ariaLabel, onClose, children }: ModalProps) {
  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
      >
        <button
          type="button"
          aria-label={`Close ${title}`}
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-black"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
