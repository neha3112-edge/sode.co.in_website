"use client";

import Image from "next/image";
import { BadgeCheck, BookOpen, GraduationCap, Lightbulb, ShieldCheck, Presentation } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

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

const learningOutcomes: LearningOutcome[] = [
  {
    id: 1,
    title: "PwC Board Certification",
    description: "Earn a PwC Board Advisory Certification",
    icon: <BadgeCheck size={40} className="text-white" />,
  },
  {
    id: 2,
    title: "Publish Your Dissertation",
    description: "Release your Doctoral dissertation as a book",
    icon: <BookOpen size={40} className="text-white" />,
  },
  {
    id: 3,
    title: "Teach at UGC Colleges",
    description: "Teach in UGC recognised colleges in your free time",
    icon: <GraduationCap size={42} className="text-white" />,
  },
  {
    id: 4,
    title: "No-Code Prototyping",
    description: "Prototype and pilot your ideas with no-code platforms",
    icon: <Lightbulb size={40} className="text-white" />,
  },
  {
    id: 5,
    title: "Global IP Protection",
    description: "Protect your Ideas with Solid IPs in 155 countries",
    icon: <ShieldCheck size={40} className="text-white" />,
  },
  {
    id: 6,
    title: "Pitch to VCs",
    description: "Pitch your ideas to real VCs with chequebooks",
    icon: <Presentation size={40} className="text-white" />,
  },
];

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

export function LearningOutcomes() {
  const desktopImage = getAssetPath(
    "/ggu/assets/img/learning-outcome-01.webp",
  );
  const mobileImage = getAssetPath(
    "/ggu/assets/img/learing-outome-mobile.webp",
  );

  return (
    <section id="benefits" className="relative bg-white pt-10 lg:pt-0">
      {/* Learning Outcomes Layout */}

      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] lg:items-stretch">
        {/* Left Side: Desktop Image */}

        <div className="relative hidden min-h-[500px] lg:block">
          <Image
            src={desktopImage}
            alt="Learning outcomes of Golden Gate University online DBA"
            fill
            sizes="40vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Side: Learning Outcomes List */}

        <div className="bg-[#063c70] px-5 py-12 text-white sm:px-8 sm:py-14 lg:px-[60px] lg:py-[65px] xl:px-[80px]">
          <div className="mx-auto w-full max-w-[720px]">
            {/* Heading */}

            <div className="text-center lg:text-left">
              <h2 className="text-[28px] font-extrabold uppercase leading-none tracking-[-0.03em] text-white sm:text-[38px] lg:text-[32px]">
                Learning Outcomes
              </h2>

              <p className="mt-3 text-[22px] font-medium leading-none text-white sm:text-[20px]">
                After a DBA at GGU
              </p>
            </div>

            {/* Outcomes List */}

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:mt-[45px] lg:gap-y-[35px]">
              {learningOutcomes.map((outcome) => (
                <div key={outcome.id} className="flex items-center gap-4">
                  {/* Icon Circle */}

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ee5105] text-white sm:h-20 sm:w-20">
                    {outcome.icon}
                  </div>

                  {/* Content */}

                  <div className="min-w-0">
                    <h3 className="text-[17px] font-extrabold leading-[1.2] text-white sm:text-[16px]">
                      {outcome.title}
                    </h3>

                    <p className="mt-1 text-[12px] font-medium leading-[1.3] text-white/90">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image (Displayed at bottom of list on mobile) */}

      <div className="relative aspect-[1.33/1] w-full lg:hidden">
        <Image
          src={mobileImage}
          alt="Learning outcomes mobile illustration"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Statistics Band */}

      <div className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:pt-[50px] lg:pb-0">
        <Container>
          <div className="mx-auto w-full max-w-[1140px] overflow-hidden rounded-[8px] bg-[#063c70] px-5 py-8 sm:px-8 sm:py-10 lg:px-[45px] lg:py-[29px] shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-white/20">
              {statistics.map((statistic) => (
                <div
                  key={statistic.id}
                  className="flex flex-col items-center justify-center py-6 text-center sm:py-4 lg:py-0"
                >
                  <h3 className="text-[40px] font-extrabold uppercase leading-none tracking-[-0.035em] text-white sm:text-[48px] lg:text-[45px]">
                    {statistic.value}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.3] text-white sm:text-[13px] lg:text-[15px]">
                    {statistic.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
