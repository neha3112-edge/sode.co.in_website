"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

type ProfileCard = {
  title: string;
  desc: string;
  image: string;
};

const cards: ProfileCard[] = [
  {
    title: "Senior Data & Analytics Professionals",
    image:
      "/iim-udaipur/chief-data-and-AI-officer-programme/img/Senior Data & Analytics Professionals.png",
    desc: "Already leading data teams and driving analytics at scale? This program hands you the strategy, governance, and financial fluency to take ownership of the data function enterprise-wide.",
  },
  {
    title: "GCC Analytics Leaders",
    image:
      "/iim-udaipur/chief-data-and-AI-officer-programme/img/Analytics Leaders.png",
    desc: "Strong on global delivery and analytics execution but want the boardroom seat? Gain enterprise-level data authority, India-specific regulatory command, and the financial vocabulary C-suites respond to.",
  },
  {
    title: "AI/ML & Data Engineering Leaders",
    image:
      "/iim-udaipur/chief-data-and-AI-officer-programme/img/Data Engineer.png",
    desc: "Built and scaled pipelines and AI systems, but need the business lens? This program converts your technical depth into enterprise data leadership backed by governance and strategy fundamentals.",
  },
  {
    title: "Founders, CXOs & Senior Consultants",
    image:
      "/iim-udaipur/chief-data-and-AI-officer-programme/img/Founder.png",
    desc: "Already own technology or data decisions or advise on them? If enterprise data strategy sits at the core of your role, this program sharpens it into board-ready authority.",
  },
];

export function WhoShouldApply() {
  return (
    <section id="who-should-apply" className="bg-[#f3f7fa] py-14 sm:py-16 lg:py-14">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl">
            Who Should Apply to the{" "}
            <span className="text-[#01519A]">
              IIIT-B &amp; IIMU Chief Data &amp; AI Officer Program?
            </span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 rounded-2xl bg-white p-6 shadow-sm border border-[#01519A] hover:shadow-md transition-shadow md:flex-row md:items-start"
            >
              <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={getAssetPath(card.image)}
                  alt={card.title}
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-5 text-gray-600">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
