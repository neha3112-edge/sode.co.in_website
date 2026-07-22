import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type BenefitItem = {
  id: number;
  icon: string;
  title: string;
};

/*
|--------------------------------------------------------------------------
| Benefits
|--------------------------------------------------------------------------
*/

const leftBenefits: BenefitItem[] = [
  {
    id: 1,
    icon: "👤",
    title: "Triple Crown Accredited Global MBA Degree",
  },
  {
    id: 2,
    icon: "🎓",
    title: "Personalise Your MBA with Two Specialisations",
  },
  {
    id: 3,
    icon: "📝",
    title: "CEO Challenge Project with Real Business Problems",
  },
];

const rightBenefits: BenefitItem[] = [
  {
    id: 4,
    icon: "💼",
    title: "Optional One-Week Paris Immersion Experience",
  },
  {
    id: 5,
    icon: "💰",
    title: "Integrated curriculum built around four leadership pillars",
  },
  {
    id: 6,
    icon: "🌍",
    title: "PSB Alumni Status with Global Networking Access",
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-[linear-gradient(90deg,#233568_0%,#1b3e86_100%)] text-white pt-15"
    >
      {/* <Image
        src={getAssetPath("/assets/images/MID.webp")}
        alt="Paris School of Business MBA student"
        fill
        priority
        sizes="400px"
        className="object-contain object-bottom hidden md:block"
      /> */}
      <Container>
        <div className="relative mx-auto max-w-[1180px]">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-xl font-extrabold leading-none text-white sm:text-3xl">
              Why Choose
            </h2>

            <p className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              the IIM Lucknow & Paris School of Business Executive MBA?
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="relative mt-10 hidden grid-cols-[1fr_400px_1fr] items-center gap-8 lg:gap-0 lg:grid">
            {/* Left Benefits */}
            <div className="relative z-20 space-y-4">
              {leftBenefits.map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>

            {/* Center Person */}
            <div className="relative z-10 h-[400px] w-full">
              <Image
                src={getAssetPath("/psb/assets/img/new-girl.png")}
                alt="Paris School of Business MBA student"
                fill
                priority
                sizes="500px"
                className="object-contain object-bottom"
              />
            </div>

            {/* Right Benefits */}
            <div className="relative z-20 space-y-4">
              {rightBenefits.map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>
          </div>

          {/* Mobile and Tablet Layout */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:hidden">
            {/* Benefits */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[...leftBenefits, ...rightBenefits].map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>
            <div className="relative z-10 h-[400px] w-full -mt-10">
              <Image
                src={getAssetPath("/psb/assets/img/new-girl.png")}
                alt="Paris School of Business MBA student"
                fill
                priority
                sizes="500px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| Benefit Card
|--------------------------------------------------------------------------
*/

type BenefitCardProps = {
  benefit: BenefitItem;
};

function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <article className="flex min-h-[86px] items-center gap-4 rounded-[12px] bg-white px-5 py-3.5 text-black shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[26px]">
        {benefit.icon}
      </div>

      <h3 className="text-xs font-bold leading-snug text-gray-800 sm:text-sm">
        {benefit.title}
      </h3>
    </article>
  );
}
