import Image from "next/image";
import {
  BadgeCheck,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Presentation,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type LearningOutcome = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Statistic = {
  id: number;
  value: string;
  label: string;
};

/*
|--------------------------------------------------------------------------
| Learning Outcomes Data
|--------------------------------------------------------------------------
*/

const learningOutcomes: LearningOutcome[] = [
  {
    id: 1,
    title: "PwC Board Certification",
    description: "Earn a PwC Board Advisory Certification",
    icon: <BadgeCheck size={40} strokeWidth={1.7} />,
  },
  {
    id: 2,
    title: "Publish Your Dissertation",
    description: "Release your Doctoral dissertation as a book",
    icon: <BookOpen size={40} strokeWidth={1.7} />,
  },
  {
    id: 3,
    title: "Teach at UGC Colleges",
    description: "Teach in UGC recognised colleges in your free time",
    icon: <GraduationCap size={42} strokeWidth={1.7} />,
  },
  {
    id: 4,
    title: "No-Code Prototyping",
    description: "Prototype and pilot your ideas with no-code platforms",
    icon: <Lightbulb size={40} strokeWidth={1.7} />,
  },
  {
    id: 5,
    title: "Global IP Protection",
    description: "Protect your Ideas with Solid IPs in 155 countries",
    icon: <ShieldCheck size={40} strokeWidth={1.7} />,
  },
  {
    id: 6,
    title: "Pitch to VCs",
    description: "Pitch your ideas to real VCs with chequebooks",
    icon: <Presentation size={40} strokeWidth={1.7} />,
  },
];

/*
|--------------------------------------------------------------------------
| Statistics Data
|--------------------------------------------------------------------------
*/

const statistics: Statistic[] = [
  {
    id: 1,
    value: "10k+",
    label: "Professionals Enrolled Successfully",
  },
  {
    id: 2,
    value: "05+",
    label: "In-demand Specialisation",
  },
  {
    id: 3,
    value: "100+",
    label: "Carrier Counseling Experts",
  },
  {
    id: 4,
    value: "30k",
    label: "Admission Done",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function LearningOutcomes() {
  return (
    <section id="learning-outcomes" className="relative bg-white">
      {/* =============================================================
          Learning Outcomes Main Section
      ============================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%]">
        {/* =========================================================
            Left Bridge Image
        ========================================================== */}

        <div className="relative min-h-[360px] sm:min-h-[500px] lg:min-h-[720px]">
          <Image
            src={getAssetPath("/assets/images/golden-gate-bridge.webp")}
            alt="Golden Gate Bridge in San Francisco"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-cover object-center"
          />

          {/* Mobile overlay */}

          <div className="absolute inset-0 bg-black/10 lg:hidden" />
        </div>

        {/* =========================================================
            Right Content
        ========================================================== */}

        <div className="flex items-center bg-[#063c70] px-5 py-12 text-white sm:px-8 sm:py-14 lg:min-h-[720px] lg:px-[70px] lg:py-[60px] xl:px-[90px]">
          <div className="mx-auto w-full max-w-[1110px]">
            {/* Heading */}

            <div className="text-center lg:text-left">
              <h2 className="text-[31px] font-black uppercase leading-none tracking-[-0.03em] text-white sm:text-[38px] lg:text-[42px]">
                Learning Outcomes
              </h2>

              <p className="mt-2 text-[24px] font-medium leading-none text-white sm:text-[31px]">
                After a DBA at GGU
              </p>
            </div>

            {/* Outcomes Grid */}

            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:mt-[54px] lg:gap-x-[80px] lg:gap-y-[40px]">
              {learningOutcomes.map((outcome) => (
                <LearningOutcomeItem key={outcome.id} outcome={outcome} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =============================================================
          Statistics Section
      ============================================================== */}

      <StatisticsSection />
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| Learning Outcome Item
|--------------------------------------------------------------------------
*/

type LearningOutcomeItemProps = {
  outcome: LearningOutcome;
};

function LearningOutcomeItem({ outcome }: LearningOutcomeItemProps) {
  return (
    <article className="flex items-center gap-4 sm:gap-5">
      {/* Icon Circle */}

      <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-full bg-[#ed4c00] text-white sm:h-[92px] sm:w-[92px]">
        {outcome.icon}
      </div>

      {/* Text */}

      <div className="min-w-0">
        <h3 className="text-[19px] font-black leading-[1.15] text-white sm:text-[22px] lg:text-[24px]">
          {outcome.title}
        </h3>

        <p className="mt-1 text-[14px] font-medium leading-[1.3] text-white/95 sm:text-[16px] lg:text-[17px]">
          {outcome.description}
        </p>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Statistics Section
|--------------------------------------------------------------------------
*/

function StatisticsSection() {
  return (
    <div className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:py-[30px]">
      <Container>
        <div className="mx-auto w-full max-w-[1635px] overflow-hidden rounded-[8px] bg-[#063c70] px-5 py-8 sm:px-8 sm:py-10 lg:px-[45px] lg:py-[29px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((statistic, index) => (
              <StatisticItem
                key={statistic.id}
                statistic={statistic}
                showDivider={index < statistics.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Statistic Item
|--------------------------------------------------------------------------
*/

type StatisticItemProps = {
  statistic: Statistic;
  showDivider: boolean;
};

function StatisticItem({ statistic, showDivider }: StatisticItemProps) {
  return (
    <article
      className={`relative flex min-h-[150px] flex-col items-center justify-center px-4 py-6 text-center lg:min-h-[158px] ${
        showDivider ? "border-b border-white/70 sm:border-b-0 lg:border-r" : ""
      }`}
    >
      <h3 className="text-[45px] font-black uppercase leading-none tracking-[-0.045em] text-white sm:text-[54px] lg:text-[68px]">
        {statistic.value}
      </h3>

      <p className="mt-6 text-[14px] font-semibold leading-[1.3] text-white sm:text-[16px] lg:text-[18px]">
        {statistic.label}
      </p>
    </article>
  );
}
