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
    question: "Q1. What are the stages of HR analytics covered in this programme?",
    answer:
      "The programme introduces learners to the stages of HR analytics, beginning with HR data collection and preparation, followed by descriptive, predictive, and prescriptive analytics. Participants also learn workforce planning, talent analytics, engagement analysis, attrition prediction, AI-driven HR insights, and business impact measurement through hands-on projects and a capstone.",
  },
  {
    question: "Q2. Is this HRM post graduate certificate program suitable for professionals looking for an HR post graduate diploma?",
    answer:
      "Yes. Professionals exploring an HR post graduate diploma or other HRM postgraduate courses can consider this HRM post graduate certificate program if they want specialised expertise in HR analytics.",
  },
  {
    question: "Q3. Does this programme include HR advanced analytics and AI?",
    answer:
      "Yes. The curriculum covers HR advanced analytics, including predictive analytics, AI applications in HR, Generative AI tools, workforce planning, ethical AI practices, and advanced strategic insights to help professionals solve complex people management challenges.",
  },
  {
    question: "Q4. What are the learning outcomes of HR analytics course from IIM Nagpur?",
    answer:
      "The advantages and disadvantages of HR analytics depend on how organisations use workforce data. HR analytics helps improve hiring, employee retention, workforce planning, and performance management through data-driven decisions. However, it also requires quality data, analytical skills, and ethical data usage. This programme equips professionals with AI, predictive analytics, Tableau, and Excel to overcome these challenges and make strategic HR decisions.",
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
            <h2 className="text-xl font-bold leading-tight text-[#231069] sm:text-3xl max-w-6xl mx-auto">
              How to Enrol in the Post Graduate Certificate Programme in Advanced HR Analytics?
            </h2>

            <p className="mx-auto mt-3 max-w-4xl text-sm leading-6 text-gray-600 sm:text-base">
              The admission process for the HRM post graduate programme is designed for working professionals and can be completed through a simple application journey. Eligible candidates can apply, complete the required steps, and begin their learning experience with IIM Nagpur’s executive education programme.
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
            <h2 className="text-xl font-extrabold leading-tight text-[#231069] sm:text-3xl">
              FAQs About the Post Graduate Certificate Programme in Advanced HR Analytics
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
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#FCB042] text-black">
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
