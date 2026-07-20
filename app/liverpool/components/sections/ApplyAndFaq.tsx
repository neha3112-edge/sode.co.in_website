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
    question: "Q1. What are the University of Liverpool MBA fees for the Online MBA programme?",
    answer:
      "The programme fee details can be obtained by downloading the brochure. The online MBA Liverpool programme offers a globally recognised MBA learning experience with flexible payment options.",
  },
  {
    question: "Q2. Does the University of Liverpool MBA course include mandatory campus immersion?",
    answer:
      "The programme offers an international immersion experience at Liverpool Business School, where learners can interact and network with peers and experts. The IIM Udaipur campus immersion is an optional component available as part of the learning journey.",
  },
  {
    question: "Q3. Why is the MBA Liverpool John Moores University programme research phase relevant?",
    answer:
      "The 18-month MBA journey includes the IIM Udaipur phase, MBA specialisations, Applied Business Research, and a Strategic Business Consultancy Project designed to develop practical management and leadership skills.",
  },
  {
    question: "Q4. What is the University of Liverpool MBA ranking and recognition of the MBA with IIM Udaipur certification?",
    answer:
      "Liverpool Business School, a part of Liverpool John Moores University (LJMU), is recognised for academic excellence. The MBA programme offers a WES-recognised degree from Liverpool Business School along with an Executive Programme in Business Management & AI Leadership certification from IIM Udaipur, supported by AACSB membership.",
  },
  {
    question: "Q5. What are the University of Liverpool MBA fees for indian students?",
    answer:
      "Fee details for Indian learners can be discussed with the admissions team. The programme provides a value-driven MBA experience with global credentials, practical learning, and access to a global alumni network.",
  },
  {
    question: "Q6. What are the learning outcomes that make professionals choose an online MBA Liverpool programme?",
    answer:
      "The programme offers personalised learning, live sessions, HBR case studies, simulations, hands-on projects, specialisations, and access to a network of 3,000+ alumni.",
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
            <h2 className="text-xl font-extrabold leading-tight text-[#00499b] sm:text-3xl max-w-5xl mx-auto">
              How to Apply for Liverpool Business School Online MBA
            </h2>
            <p className="mx-auto mt-3 max-w-4xl text-sm leading-relaxed text-gray-600">
              Applying for the Liverpool online MBA programme is a simple and streamlined process. Learners can begin their admission journey by completing the application form, submitting the required documents, and following the enrolment steps to secure their place in this globally recognised MBA in Liverpool programme.
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
            <h2 className="text-xl font-extrabold leading-tight text-[#00499b] sm:text-3xl">
              Frequently Asked Questions
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
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#00499b] text-white">
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
