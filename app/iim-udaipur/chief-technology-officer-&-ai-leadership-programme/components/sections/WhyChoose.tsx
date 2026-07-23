import Image from "next/image";

import { getAssetPath } from "@/lib/utils";

type Reason = {
  iconSrc: string;
  title: string;
  desc: string;
  backgroundClass: string;
};

const reasons: Reason[] = [
  {
    iconSrc: "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/Production Al & MLOps Expertise.webp",
    title: "Production AI & MLOps Expertise",
    desc: "Build expertise in MLOps, LLMOps, RAG systems, and AI deployment required for modern AI leadership programs.",
    backgroundClass: "bg-[#203e6b]",
  },
  {
    iconSrc: "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/Strategic Technology Leadership.webp",
    title: "Strategic Technology Leadership",
    desc: "Learn to connect technology decisions with business goals through this AI strategy and leadership program.",
    backgroundClass: "bg-[#2c9dcc]",
  },
  {
    iconSrc: "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/P&L & Financial Decision-Making.webp",
    title: "P&L & Financial Decision-Making",
    desc: "Develop skills in technology economics, AI ROI, cloud costing, and investment frameworks.",
    backgroundClass: "bg-[#203e6b]",
  },
  {
    iconSrc: "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/Boardroom-Ready CTO Skills.webp",
    title: "Boardroom-Ready CTO Skills",
    desc: "Strengthen executive communication, crisis leadership, and decision-making for future CTO roles.",
    backgroundClass: "bg-[#2c9dcc]",
  },
  {
    iconSrc: "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/Al-Ready Organisation Building.webp",
    title: "AI-Ready Organisation Building",
    desc: "Learn talent strategy, organisation design, and human-AI collaboration through leadership with AI.",
    backgroundClass: "bg-[#203e6b]",
  },
  {
    iconSrc: "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/Dual Executive Alumni Network.webp",
    title: "Dual Executive Alumni Network",
    desc: "Gain access to IIIT Bangalore and IIM Udaipur executive communities for long-term professional growth.",
    backgroundClass: "bg-[#2c9dcc]",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="w-full overflow-hidden bg-white">
      {/* Heading Area */}
      <div className="px-4 py-12 text-center sm:py-14 lg:py-16">
        <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-black sm:text-4xl">
          Why Choose CTO &amp; AI Leadership Programme?
        </h2>
      </div>

      {/* Checkerboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <ReasonCard key={reason.title} reason={reason} />
        ))}
      </div>
    </section>
  );
}

type ReasonCardProps = {
  reason: Reason;
};

function ReasonCard({ reason }: ReasonCardProps) {
  return (
    <article
      className={`${reason.backgroundClass} flex min-h-78.75 flex-col items-center justify-center px-6 py-10 text-center text-white sm:px-8 lg:min-h-79 lg:px-10`}
    >
      {/* Icon */}
      <div className="relative h-18 w-18 sm:h-20 sm:w-20">
        <Image
          src={getAssetPath(reason.iconSrc)}
          alt={reason.title}
          fill
          sizes="110px"
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mt-7 text-lg font-extrabold leading-tight text-white sm:text-xl">
        {reason.title}
      </h3>

      {/* Description */}
      <p className="mt-4 max-w-140 text-sm leading-5.5 text-white/95 sm:text-[15px]">
        {reason.desc}
      </p>
    </article>
  );
}
