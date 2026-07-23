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
    title: "Technology Directors & VP Engineering",
    image:
      "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/Technology Directors & VP Engineering.webp",
    desc: "Leading technology teams but looking to develop strategic leadership? Build expertise in AI strategy, business transformation, and chief technology officer roles and responsibilities.",
  },
  {
    title: "Senior Engineering Managers",
    image:
      "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/Senior Engineering Managers.png",
    desc: "Ready to move beyond execution and influence enterprise decisions? Gain frameworks for architecture, leadership, and board-level communication.",
  },
  {
    title: "Aspiring & First-Time CTOs",
    image:
      "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/Aspiring & First-Time CTOs.webp",
    desc: "Planning your transition into a CTO position? Learn how to become chief technology officer with skills in technology strategy, P&L thinking, and executive decision-making.",
  },
  {
    title: "Tech Entrepreneurs & Founders",
    image:
      "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/Tech Entrepreneurs & Founders.webp",
    desc: "Building AI-first products or platforms? Develop the strategic capabilities required for the chief technology and AI officer program journey.",
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
              CTO &amp; AI Leadership Programme?
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
                  sizes="100px"
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
