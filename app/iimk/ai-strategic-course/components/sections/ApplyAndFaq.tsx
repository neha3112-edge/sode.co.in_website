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
    question:
      "Q1. How is the AI for Business Professionals programme delivered?",
    answer:
      "The programme follows a flexible online blended learning format with over 90 hours of self-paced learning, live workshops, hands-on projects, and a 2-day campus immersion at IIM Kozhikode.",
  },
  {
    question:
      "Q2. What are the fees for the AI for Business Professionals programme?",
    answer:
      "You can download the programme brochure to view the latest fee structure, payment schedule, and other programme details.",
  },
  {
    question:
      "Q3. What are the key highlights of this AI strategist course?",
    answer:
      "The programme includes 2-day campus immersion at IIM Kozhikode, a Leadership Capstone, a real-world AI Project Dossier, business-focused learning and an IIM Kozhikode Certificate upon successful completion.",
  },
  {
    question:
      "Q4. Is prior coding or technical experience required for this programme?",
    answer:
      "No. This programme is designed for professionals from non-technical backgrounds. It focuses on practical AI applications, business strategy, and leadership, making it an ideal AI course for executives looking to drive AI adoption in their organisations.",
  },
  {
    question:
      "Q5. Who should apply for this AI programme?",
    answer:
      "The programme is ideal for business leaders, functional leaders, product and strategy professionals, business and analytics professionals, and consultants who want to use AI to improve decision-making and business outcomes.",
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
        className="bg-[#f8fafc] py-14 sm:py-16 lg:py-20 lg:pt-5"
      >
        <Container className="max-w-370">
          <div className="text-center">
            <h2 className="text-2xl font-bold leading-tight text-[#1d3d82] sm:text-3xl lg:text-[34px]">
              How to Apply for IIM Kozhikode University Online Courses
            </h2>

            <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-gray-600 sm:text-base">
              Learners can easily apply to IIM Kozhikode Online courses. Aspiring Professionals need to enrol by selecting their desired program. Follow these steps to secure admission in the program.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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
            <h2 className="text-2xl font-extrabold leading-tight text-[#1d3d82] sm:text-4xl">
              FAQs regarding AI for Business Professionals programme
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
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#1d3d82] text-white">
          {isOpen ? (
            <Minus size={14} strokeWidth={3} />
          ) : (
            <Plus size={14} strokeWidth={3} />
          )}
        </span>

        <span className="text-sm font-bold text-[#1d3d82] sm:text-base">
          {faq.question}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-6 pl-14 text-sm leading-6 text-gray-600 sm:px-6 sm:pb-7 sm:pl-16 sm:text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
