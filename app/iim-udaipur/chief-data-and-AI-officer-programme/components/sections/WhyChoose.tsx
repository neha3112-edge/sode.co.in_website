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
    iconSrc: "/iim-udaipur/chief-data-and-AI-officer-programme/img/premier-institute-credibility-iiitb.webp",
    title: "CDAIO-Focused Learning Approach",
    desc: "Designed specifically for the chief data officer course, covering data strategy, governance, AI leadership, and enterprise decision-making frameworks.",
    backgroundClass: "bg-[#203e6b]",
  },
  {
    iconSrc: "/iim-udaipur/chief-data-and-AI-officer-programme/img/future-ready-ai-learning.webp",
    title: "Future-Ready AI Leadership Skills",
    desc: "Develop expertise in GenAI, Agentic AI, AI products, and production scaling through this advanced data and AI course.",
    backgroundClass: "bg-[#2c9dcc]",
  },
  {
    iconSrc: "/iim-udaipur/chief-data-and-AI-officer-programme/img/strong-data-science.webp",
    title: "Strong Data & Business Foundation",
    desc: "Build capabilities in data economics, P&L ownership, investment cases, and board-level decisions while understanding chief data officer salary trends and leadership expectations.",
    backgroundClass: "bg-[#203e6b]",
  },
  {
    iconSrc: "/iim-udaipur/chief-data-and-AI-officer-programme/img/certificate-iiitb.webp",
    title: "Regulatory & Governance Expertise",
    desc: "Understand DPDP, RBI, SEBI, and IRDAI frameworks while developing enterprise data governance strategies.",
    backgroundClass: "bg-[#2c9dcc]",
  },
  {
    iconSrc: "/iim-udaipur/chief-data-and-AI-officer-programme/img/leadership-edge-with-partner.webp",
    title: "Board-Ready Strategic Portfolio",
    desc: "Create executive artefacts including roadmap, CFO investment case, mandate plan, and board presentation deck.",
    backgroundClass: "bg-[#203e6b]",
  },
  {
    iconSrc: "/iim-udaipur/chief-data-and-AI-officer-programme/img/hands-on-learning-approach.webp",
    title: "Dual Executive Alumni Networks",
    desc: "Gain access to IIIT-B and IIM Udaipur alumni networks connecting technology and business leadership communities.",
    backgroundClass: "bg-[#2c9dcc]",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="w-full overflow-hidden bg-white">
      {/* Heading Area */}
      <div className="px-4 py-12 text-center sm:py-14 lg:py-16">
        <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-black/80 sm:text-4xl">
          Why Choose Chief Data &amp; AI Officer Program?
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
