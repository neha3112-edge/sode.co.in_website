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
    title: "Choose University",
    description: "Select the course & university according to your interest",
    bgClass: "bg-[#fff1f6]",
    borderClass: "border-[#ff2e6e]",
    numberClass: "text-[#ff2e6e]",
  },
  {
    number: 4,
    title: "Online Payment",
    description: "You need to make a smooth online fee submission",
    bgClass: "bg-[#effff5]",
    borderClass: "border-[#1aa34a]",
    numberClass: "text-[#1aa34a]",
  },
  {
    number: 5,
    title: "Document Submit",
    description: "You need to upload all the required verified documents.",
    bgClass: "bg-[#fbf2ff]",
    borderClass: "border-[#8c3be8]",
    numberClass: "text-[#8c3be8]",
  },
  {
    number: 6,
    title: "Admission Confirm",
    description: "Get Confirmation on your Email & Whatsapp",
    bgClass: "bg-[#fff5eb]",
    borderClass: "border-[#ff7a1a]",
    numberClass: "text-[#ff7a1a]",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Q1. What are the four leadership pillars covered during the Executive Programme?",
    answer:
      "The Executive Programme focuses on Corporate Strategy and Business Model Design, Strategic Financial Reporting and Communication, Executive Decision-Making with Data and AI, and Leading Transformations & Organisational Dynamics. These pillars prepare professionals for strategic leadership roles.",
  },
  {
    question: "Q2. What is the CEO Challenge Project in this MBA programme?",
    answer:
      "The CEO Challenge Project allows learners to solve a real business problem for a partner organisation. Participants analyse business data, collaborate with stakeholders, and present strategic recommendations that create measurable organisational impact.",
  },
  {
    question: "Q3. What are the Paris School of Business & IIM Lucknow Executive MBA fees for this programme?",
    answer:
      "Learners can check the complete structure for the Paris School of Business & IIM Lucknow fees of Executive MBA by downloading the programme brochure. The brochure includes detailed information on the programme fees, payment schedule, and available financing options.",
  },
  {
    question: "Q4. Is work experience necessary for the Paris School of Business & IIM Lucknow Executive MBA?",
    answer:
      "Yes. This Online MBA is designed for working professionals, and relevant work experience is part of the eligibility criteria.",
  },
  {
    question: "Q5. Who Can Apply for This IIM Lucknow and Paris School of Business Programme?",
    answer:
      "This programme is designed for working professionals looking to transition from operational or technical roles into strategic leadership positions. It is ideal for professionals aspiring to lead business units, drive transformation, manage strategic projects, or take on executive, consulting, entrepreneurial, digital transformation, and AI-driven leadership roles.",
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
        className="bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
      >
        <Container className="max-w-7xl">
          <div className="text-center">
            <h2 className="text-xl font-extrabold leading-tight text-[#233568] sm:text-3xl max-w-5xl mx-auto">
              How to Apply for the IIM Lucknow & Paris School of Business Executive MBA
            </h2>
            <p className="mx-auto mt-3 max-w-4xl text-sm leading-relaxed text-gray-600">
              Learners can apply for the IIM Lucknow & Paris School of Business Executive MBA by filling out the application form, submitting the required documents, meeting the eligibility criteria, and completing the enrolment process to secure admission to this globally recognised Executive MBA programme.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
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
            <h2 className="text-xl font-extrabold leading-tight text-[#233568] sm:text-3xl">
              FAQs regarding the Master of Business Administration from IIM L & PSB
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
      className={`${step.bgClass} relative flex min-h-[190px] flex-col items-center rounded-2xl px-4 pb-6 pt-5 text-center shadow-[0_4px_16px_rgba(0,0,0,0.04)]`}
    >
      <div
        className={`${step.borderClass} ${step.numberClass} flex h-11 w-11 items-center justify-center rounded-full border-[3px] bg-white text-base font-bold`}
      >
        {step.number}
      </div>

      <h3 className="mt-4 text-sm font-bold leading-tight text-gray-900">
        {step.title}
      </h3>

      <p className="mt-3 text-xs leading-relaxed text-gray-600">{step.description}</p>

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
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${isOpen ? "border-transparent bg-[#f8fafc]" : "border-gray-200 bg-white"
        }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#b31e6b] text-white">
          {isOpen ? (
            <Minus size={12} strokeWidth={3} />
          ) : (
            <Plus size={12} strokeWidth={3} />
          )}
        </span>

        <span className="text-sm font-bold text-gray-800 sm:text-base">
          {faq.question}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] border-t border-gray-150" : "max-h-0"
          }`}
      >
        <div className="p-5 text-xs sm:text-sm leading-relaxed text-gray-600 sm:px-6">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
