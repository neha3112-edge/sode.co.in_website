"use client";

import { Container } from "@/components/ui/Container";

export function AboutCDAO() {
  return (
    <section id="about-cdao" className="bg-[#fcfdfe] py-14 sm:py-16 lg:py-12 border-b border-gray-100">
      <Container className="max-w-7xl">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#01519A] sm:text-3xl">
            ABOUT THE COURSE
          </h2>
        </div>

        <div className="mt-4 space-y-6 text-sm leading-6 text-gray-900 sm:text-base sm:leading-6 text-center md:text-left">
          <p>
            The Chief Data & AI Officer Program by IIIT Bangalore and IIM Udaipur is a 24-week executive programme designed for data and analytics leaders looking to build enterprise-level data strategy, AI leadership, governance, and business decision-making capabilities. The programme combines technical authority with business leadership to help professionals take ownership of enterprise data and AI functions.
          </p>
          <p>
            This Chief Data Officer course focuses on developing capabilities across data strategy, enterprise architecture, GenAI & Agentic AI, AI product scaling, data economics, P&L ownership, regulatory frameworks, and board-level leadership. For professionals aiming to transition into strategic leadership roles, this chief digital and AI officer program provides a structured learning path through practical executive artefacts, including a Board Memo, 3-Year Data & AI Roadmap, CFO Investment Case, CDAIO 100-Day Mandate Plan, and Board Presentation Deck.
          </p>
        </div>
      </Container>
    </section>
  );
}
