"use client";

import { Container } from "@/components/ui/Container";

export function AboutCTO() {
  return (
    <section id="about-cto" className="bg-[#fcfdfe] py-14 sm:py-16 lg:py-12 border-b border-gray-100">
      <Container className="max-w-7xl">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#01519A] sm:text-3xl">
            About the CTO &amp; AI Leadership Programme
          </h2>
        </div>

        <div className="mt-4 space-y-6 text-sm leading-6 text-gray-900 sm:text-base sm:leading-7 text-center md:text-left">
          <p>
            The CTO &amp; AI Leadership Programme by IIIT Bangalore and IIM Udaipur is a 24-week chief technology officer program designed for senior technology leaders aiming to build strategic, AI-driven leadership capabilities. This chief technology officer course combines deep-tech expertise with business strategy, covering production AI, MLOps, cloud architecture, P&L ownership, and boardroom influence.
          </p>
          <p>
            Through this AI leadership course, professionals develop the skills required to lead enterprise transformation, build AI-ready organisations, and transition towards future CTO and technology leadership roles. Throughout the journey, participants build a Board-Ready Strategic CTO Dossier, including technology strategy blueprints, AI implementation roadmaps, investment cases, risk governance frameworks, and executive presentation decks to demonstrate their readiness for senior technology leadership positions.
          </p>
        </div>
      </Container>
    </section>
  );
}
