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
    title: "Integrated Credentials Advantage(LBS- IIM U)",
  },
  {
    id: 2,
    icon: "🎓",
    title: "Global Alumni Connect",
  },
  {
    id: 3,
    icon: "📝",
    title: "Career-Focused Customised Curriculum",
  },
];

const rightBenefits: BenefitItem[] = [
  {
    id: 4,
    icon: "💼",
    title: "Industry-Relevant Learning through Case Studies",
  },
  {
    id: 5,
    icon: "💰",
    title: "Pursue Global Business Education With Cost-Effective Learning Benefits",
  },
  {
    id: 6,
    icon: "🌍",
    title: "Worldwide Learning Network",
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
      className="relative overflow-hidden bg-[linear-gradient(90deg,#5979b3_0%,#1b3e86_100%)] text-white py-12"
    >
      <Container>
        <div className="relative mx-auto max-w-[1180px]">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-xl font-extrabold leading-none text-white sm:text-3xl">
              What Makes
            </h2>

            <p className="mt-2 text-2xl font-extrabold leading-tight text-[#25cfbf] sm:text-3xl">
              Liverpool Business School MBA Stand Out?
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="relative mt-10 hidden grid-cols-[1fr_400px_1fr] items-center gap-8 lg:grid">
            {/* Left Benefits */}
            <div className="relative z-20 space-y-4">
              {leftBenefits.map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>

            {/* Center Person */}
            <div className="relative z-10 h-[430px] w-full self-end">
              <Image
                src={getAssetPath("/assets/images/MID.webp")}
                alt="Liverpool Business School MBA student"
                fill
                priority
                sizes="400px"
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
