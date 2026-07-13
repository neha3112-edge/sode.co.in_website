"use client";

import Image from "next/image";
import {
  Award,
  BookOpen,
  ChevronDown,
  Clock3,
  Download,
  GraduationCap,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

type OverviewItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const overviewItems: OverviewItem[] = [
  {
    title: "Duration",
    description: "2-3 Years",
    icon: <Clock3 size={31} strokeWidth={2.4} />,
  },
  {
    title: "Approvals",
    description: "ACBSP, BAC, CHEA",
    icon: <Award size={31} strokeWidth={2.4} />,
  },
  {
    title: "Specialisations",
    description: "20+ Specialisations",
    icon: <BookOpen size={32} strokeWidth={2.4} />,
  },
  {
    title: "Degree",
    description: "Doctorate",
    icon: <GraduationCap size={34} strokeWidth={2.4} />,
  },
];

type BrandLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

const accreditationLogos: BrandLogo[] = [
  {
    src: "/assets/images/acbsp-logo.png",
    alt: "ACBSP accreditation",
    width: 95,
    height: 60,
    className: "h-[58px] w-auto object-contain",
  },
  {
    src: "/assets/images/chea-logo.png",
    alt: "CHEA accreditation",
    width: 240,
    height: 65,
    className: "h-[64px] w-auto max-w-[230px] object-contain",
  },
  {
    src: "/assets/images/bac-logo.png",
    alt: "BAC accreditation",
    width: 110,
    height: 65,
    className: "h-[63px] w-auto object-contain",
  },
];

const rankingLogos: BrandLogo[] = [
  {
    src: "/assets/images/ceoworld-logo.png",
    alt: "CEO World Magazine",
    width: 180,
    height: 55,
    className: "h-[51px] w-auto max-w-[180px] object-contain",
  },
  {
    src: "/assets/images/postgrad-logo.png",
    alt: "Postgrad",
    width: 125,
    height: 48,
    className: "h-[42px] w-auto max-w-[125px] object-contain",
  },
  {
    src: "/assets/images/study-in-switzerland-logo.png",
    alt: "Study in Switzerland",
    width: 165,
    height: 55,
    className: "h-[52px] w-auto max-w-[170px] object-contain",
  },
];

export function Approvals() {
  const handleCurriculumClick = () => {
    const heroSection = document.getElementById("home");

    heroSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleKnowMoreClick = () => {
    const coursesSection = document.getElementById("courses");

    coursesSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* =========================================================
          Course Overview
      ========================================================== */}

      <section
        id="approvals"
        className="border-b border-[#e8e8e8] bg-white py-10 sm:py-12 lg:py-[40px]"
      >
        <Container>
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-[31px] font-extrabold leading-tight tracking-[-0.035em] text-black sm:text-[36px]">
                Course{" "}
                <span className="relative inline-block text-[#c9232c]">
                  Overview
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-[#c9232c]" />
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-[1120px] text-center text-[13px] font-medium leading-[1.42] text-black sm:text-[14px]">
              The Online SSBM DBA program offers a strong path with many salient
              features. The SSBM University not only offers a well-recognised
              degree program but also includes PwC India&apos;s Board Advisory
              Certification, with patent-to-idea guidance, where Swiss expert
              faculty guide learners in conducting practical research and
              turning their ideas into theory. SSBM Doctorate online course also
              offers support in research, publishing, and leadership development
              for working professionals. The learner also takes advantage of
              practical boardroom skills enhancement, expert mentorship, global
              publishing opportunities, and allows them to interact with elite
              networks. The SSBM DBA online program offers the mixture of
              academic depth with real-world application, helping professionals
              increase their strategic decision-making and help themselves
              establish an influential leader. Students after taking the SSBM
              DBA admission can also expect a major salary increase.
            </p>

            {/* Overview Cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {overviewItems.map((item) => (
                <OverviewCard key={item.title} item={item} />
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-1">
              <button
                type="button"
                onClick={handleCurriculumClick}
                className="inline-flex min-h-[39px] min-w-[168px] items-center justify-center gap-1 rounded-[5px] bg-[#c9232c] px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a91d25]"
              >
                Get Curriculum
                <Download size={15} strokeWidth={2.5} />
              </button>

              <button
                type="button"
                onClick={handleKnowMoreClick}
                className="inline-flex min-h-[39px] min-w-[135px] items-center justify-center gap-1 rounded-[5px] bg-black px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#242424]"
              >
                Know More
                <ChevronDown size={15} strokeWidth={2.7} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          Accreditations & Rankings
      ========================================================== */}

      <section className="bg-[#f2f2f2] py-12 sm:py-14 lg:py-[58px]">
        <Container>
          <div className="mx-auto w-full max-w-[1200px]">
            {/* Heading */}
            <h2 className="text-center text-[31px] font-extrabold leading-tight tracking-[-0.035em] text-black sm:text-[38px] lg:text-[42px]">
              Accreditations{" "}
              <span className="text-[#bd2c2c]">&amp; Rankings</span>
            </h2>

            {/* Boxes */}
            <div className="mt-9 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
              <LogoGroup title="Accreditations" logos={accreditationLogos} />

              <LogoGroup title="Rankings" logos={rankingLogos} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Overview Card
|--------------------------------------------------------------------------
*/

type OverviewCardProps = {
  item: OverviewItem;
};

function OverviewCard({ item }: OverviewCardProps) {
  return (
    <article className="flex min-h-[68px] items-center gap-3 bg-[#f0f0f0] px-4 py-3">
      <div className="flex h-[42px] w-[32px] shrink-0 items-center justify-center text-[#c9232c]">
        {item.icon}
      </div>

      <div>
        <h3 className="text-[18px] font-extrabold leading-tight text-black">
          {item.title}
        </h3>

        <p className="mt-1 text-[13px] font-medium leading-tight text-black">
          {item.description}
        </p>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Accreditation / Ranking Group
|--------------------------------------------------------------------------
*/

type LogoGroupProps = {
  title: string;
  logos: BrandLogo[];
};

function LogoGroup({ title, logos }: LogoGroupProps) {
  return (
    <div className="relative rounded-[15px] border-2 border-[#c9232c] bg-[#f2f2f2] px-5 pb-7 pt-8 sm:px-8">
      {/* Border title */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#f2f2f2] px-3">
        <h3 className="whitespace-nowrap text-[16px] font-bold text-black">
          {title}
        </h3>
      </div>

      {/* Logos */}
      <div className="flex min-h-[82px] flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex min-h-[65px] flex-1 items-center justify-center"
          >
            <Image
              src={getAssetPath(logo.src)}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={logo.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
