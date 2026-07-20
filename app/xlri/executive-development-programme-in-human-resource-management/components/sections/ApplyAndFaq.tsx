"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";

type ApplyStep = {
  number: number;
  title: string;
  description: string;
  bgClass: string;
  borderClass: string;
  numberClass: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const applySteps: ApplyStep[] = [
  {
    number: 1,
    title: "Submit Form",
    description: "Fill in and submit your application form online",
    bgClass: "bg-[#fff5eb]",
    borderClass: "border-[#ff7a1a]",
    numberClass: "text-[#ff7a1a]",
  },
  {
    number: 2,
    title: "Expert's Counseling",
    description: "You will receive a call from our expert counselor",
    bgClass: "bg-[#f2f7ff]",
    borderClass: "border-[#155bd7]",
    numberClass: "text-[#155bd7]",
  },
  {
    number: 3,
    title: "Online Payment",
    description: "You need to make a smooth online fee submission",
    bgClass: "bg-[#effff5]",
    borderClass: "border-[#1aa34a]",
    numberClass: "text-[#1aa34a]",
  },
  {
    number: 4,
    title: "Document Submit",
    description: "You need to upload all the required verified documents.",
    bgClass: "bg-[#fbf2ff]",
    borderClass: "border-[#8c3be8]",
    numberClass: "text-[#8c3be8]",
  },
  {
    number: 5,
    title: "Admission Confirm",
    description: "Get Confirmation on your Email & Whatsapp",
    bgClass: "bg-[#fff5eb]",
    borderClass: "border-[#ff7a1a]",
    numberClass: "text-[#ff7a1a]",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Q1. How are participants evaluated during the programme?",
    answer:
      "Participants are evaluated through quizzes, assignments, projects, case studies, and a final online assessment. Successful completion of the assessments and attendance requirements is necessary to earn the Certificate of Completion.",
  },
  {
    question: "Q2. What happens if I do not pass the final assessment?",
    answer:
      "Participants who do not clear the final assessment can reappear in the next programme batch by paying the prescribed re-examination fee. Those who meet the attendance requirement but do not pass the assessments receive a Certificate of Participation.",
  },
  {
    question: "Q3. Does the programme include any AI learning components?",
    answer:
      "Yes. Along with the HR curriculum, participants receive complimentary access to asynchronous Generative AI modules, helping them understand emerging technologies relevant to the modern workplace.",
  },
  {
    question: "Q4. Does the programme prepare learners for global HR certifications?",
    answer:
      "Yes. The curriculum is aligned with the SHRM Global Competency Framework and prepares participants for globally recognised SHRM-CP and SHRM-SCP certifications. Learners can also earn up to 20 SHRM Professional Development Credits (PDCs) upon successful completion.",
  },
  {
    question: "Q5. What learning outcomes can participants expect after completing the programme?",
    answer:
      "Participants will learn to align HR strategies with business goals, manage recruitment and performance systems, interpret labour laws, leverage HR analytics for data-driven decision-making, and lead employee engagement and organisational change initiatives.",
  },
];

export function ApplyAndFaq() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((current) => (current === index ? -1 : index));
  };

  return (
    <>
      {/* How To Apply Section */}
      <section
        id="how-to-apply"
        className="bg-[#f8fafc] py-14 sm:py-16 lg:pb-20 lg:pt-10"
      >
        <Container className="max-w-7xl">
          <div className="text-center">
            <h2 className="text-xl font-bold leading-tight text-[#10316A] sm:text-3xl max-w-6xl mx-auto">
              How to Apply for the XLRI Executive Development Programme in Human Resource Management?
            </h2>

            <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-gray-600 sm:text-base">
              The admission process for the Executive Development Programme in Human Resource Management is profile-based and can be completed in a few simple steps. Eligible candidates are shortlisted based on their professional and educational profile, with final selection conducted by XLRI Jamshedpur.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {applySteps.map((step) => (
              <ApplyStepCard key={step.number} step={step} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section
        id="faqs"
        className="bg-white pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24"
      >
        <Container>
          <div className="text-center">
            <h2 className="text-xl font-extrabold leading-tight text-[#10316A] sm:text-2xl">
              FAQs About the XLRI Executive Development Programme in Human Resource Management
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-5xl space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <FaqAccordionItem
                  key={faq.question}
                  faq={faq}
                  isOpen={isOpen}
                  onToggle={() => toggleFaq(index)}
                />
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

type ApplyStepCardProps = {
  step: ApplyStep;
};

function ApplyStepCard({ step }: ApplyStepCardProps) {
  return (
    <article
      className={`${step.bgClass} relative flex min-h-[210px] flex-col items-center rounded-2xl px-5 pb-7 pt-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.06)]`}
    >
      <div
        className={`${step.borderClass} ${step.numberClass} flex h-14 w-14 items-center justify-center rounded-full border-[3px] bg-white text-xl font-bold`}
      >
        {step.number}
      </div>

      <h3 className="mt-5 text-lg font-bold leading-tight text-black">
        {step.title}
      </h3>

      <p className="mt-6 text-sm leading-5 text-gray-700">{step.description}</p>

      <div
        className={`${step.borderClass} absolute inset-x-0 bottom-0 h-1 rounded-b-2xl border-b-4`}
      />
    </article>
  );
}

type FaqAccordionItemProps = {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
};

function FaqAccordionItem({ faq, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? "border-transparent bg-[#f2f2f2]" : "border-gray-300 bg-white"
        }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#10316A] text-white">
          {isOpen ? (
            <Minus size={14} strokeWidth={3} />
          ) : (
            <Plus size={14} strokeWidth={3} />
          )}
        </span>

        <span className="text-sm font-bold text-[#000]/80 sm:text-base">
          {faq.question}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] border-t border-gray-200" : "max-h-0"
          }`}
      >
        <div className="p-5 text-sm leading-relaxed text-gray-700 sm:px-6">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
