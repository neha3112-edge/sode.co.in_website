"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    q: "Is 1 year online MBA have the same relevance as a traditional MBA?",
    a: "Yes, It is a fast-track MBA online learning program that is beneficial for working professionals and graduates "
  },
  {
    q: "What are the top 5 in demand 1 year MBA program online specializations?",
    a: "There are many in-demand specializations of 1 year online MBA course, yet the top 5 are: AI in Business, Finance, Marketing, Digital Finance and Strategy and Leadership."
  },
  {
    q: "Is a 1 year online MBA valid and recognised?",
    a: "Yes, MBA online learning course in one year is valid as it is UGC approved and world wide recognised, having QS World Rankings and AACSB accreditation."
  },
  {
    q: "What is the eligibility criteria needed for Masters in Business Administration online degree programs?",
    a: "The applicants should have a graduation degree from a recognised university, with a preferred score of 50% marks"
  },
  {
    q: "Is MBA online learning approved and advantageous?",
    a: "Yes, a 1 year MBA online learning is UGC approved and quite focused on experiential learning. Students are taught through projects and several case studies."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white overflow-hidden">
      <Container className="max-w-5xl">
        <div className="text-center mb-16 px-4">
          <h2 className="text-2xl md:text-5xl font-bold text-[#0970B8]">FAQ-Frequently Asked Question</h2>
        </div>

        <div className="space-y-4 px-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border border-gray-100  rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#F0F0F0] shadow-sm' : 'bg-white shadow-sm border-gray-200'}`}
              >
                <button

                  className="w-full   px-8 py-5 flex items-center space-x-6 focus:outline-none text-left"
                  onClick={() => toggle(idx)}
                >
                  <div className={`md:w-10 md:h-10 w-8 h-8  rounded-lg flex items-center justify-center shrink-0 transition-colors bg-[#0970B8] text-white shadow-md`}>
                    {isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    )}
                  </div>
                  <h4 className={`font-bold text-sm md:text-xl transition-colors ${isOpen ? 'text-[#005691]' : 'text-gray-900 font-semibold'}`}>{faq.q}</h4>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 pb-8 pl-22 text-gray-500 text-sm md:text-base font-medium leading-relaxed max-w-4xl">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
