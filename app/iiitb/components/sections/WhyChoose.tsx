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
    iconSrc: "/iiitb/img/premier-institute-credibility-iiitb.webp",
    title: "Premier institute credibility",
    desc: "With strong academic standards and industry trust, IIIT Bangalore online courses deliver learning that carries real value in hiring and career growth.",
    backgroundClass: "bg-[#203e6b]",
  },
  {
    iconSrc: "/iiitb/img/future-ready-ai-learning.webp",
    title: "Future-ready AI learning",
    desc: "The curriculum is built around practical outcomes in IIIT Bangalore artificial intelligence, helping professionals work confidently with real AI tools and use cases.",
    backgroundClass: "bg-[#2c9dcc]",
  },
  {
    iconSrc: "/iiitb/img/strong-data-science.webp",
    title: "Strong Data Science foundation",
    desc: "Programs at IIIT Bangalore focus on statistics, ML models, business insights, and projects that build job-ready skills.",
    backgroundClass: "bg-[#203e6b]",
  },
  {
    iconSrc: "/iiitb/img/certificate-iiitb.webp",
    title: "Certification advantage",
    desc: "These are structured IIIT Bangalore certification courses designed for professionals who want credible credentials with applied training, not just theory.",
    backgroundClass: "bg-[#2c9dcc]",
  },
  {
    iconSrc: "/iiitb/img/leadership-edge-with-partner.webp",
    title: "Leadership edge with partner institute",
    desc: "The CTO leadership track includes IIM Udaipur artificial intelligence coverage, combining tech strategy and AI decision-making for senior roles.",
    backgroundClass: "bg-[#203e6b]",
  },
  {
    iconSrc: "/iiitb/img/hands-on-learning-approach.webp",
    title: "Hands-on learning approach",
    desc: "Across multiple tracks, IIIT Bangalore online courses include projects, labs, and capstones, and all online IIIT Bangalore courses are integrated and career-focused.",
    backgroundClass: "bg-[#2c9dcc]",
  },
];

export function WhyChoose() {
  return (
    <section id="why-choose" className="w-full overflow-hidden bg-white">
      {/* Heading Area */}
      <div className="px-4 py-12 text-center sm:py-14 lg:py-16">
        <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-black sm:text-4xl">
          Why Choose?
        </h2>

        <p className="mt-1 text-sm text-gray-600 sm:text-base">
          IIIT Bangalore Online Courses
        </p>
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
      <div className="relative h-18 w-18 sm:h-27.5 sm:w-27.5">
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
