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
    title: "Dual Academic Credentials",
  },
  {
    id: 2,
    icon: "🎓",
    title: "Dual Alumni Networks (IMT and LBS)",
  },
  {
    id: 3,
    icon: "📝",
    title: "Personalised Flexible Curriculum",
  },
];

const rightBenefits: BenefitItem[] = [
  {
    id: 4,
    icon: "💼",
    title: "Hands-On Practical Learning Experience",
  },
  {
    id: 5,
    icon: "💰",
    title: "Reduce Your Tuition Cost or Unlock Bigger Tuition Savings",
  },
  {
    id: 6,
    icon: "🌍",
    title: "Access a Global Community",
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
      className="relative overflow-hidden bg-[linear-gradient(90deg,#5979b3_0%,#1b3e86_100%)] text-white"
    >
      <Container>
        <div className="relative mx-auto min-h-[655px] max-w-[1180px] py-12 sm:py-14 lg:py-[48px]">
          {/* =========================================================
              Heading
          ========================================================== */}

          <div className="relative z-30 text-center">
            <h2 className="text-[30px] font-black leading-none text-white sm:text-[36px]">
              Why Choose
            </h2>

            <p className="mt-2 text-[29px] font-black leading-[1.05] text-[#20dec9] sm:text-[37px]">
              Liverpool Business School MBA
            </p>
          </div>

          {/* =========================================================
              Desktop Layout
          ========================================================== */}

          <div className="relative mt-12 hidden min-h-[480px] grid-cols-[1fr_430px_1fr] items-center gap-8 lg:grid">
            {/* Left Benefits */}

            <div className="relative z-20 space-y-5">
              {leftBenefits.map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>

            {/* Center Person */}

            <div className="relative z-10 h-[485px] w-full self-end">
              <Image
                src={getAssetPath(
                  "/assets/images/liverpool-why-choose-woman.webp",
                )}
                alt="Liverpool Business School MBA student"
                fill
                priority
                sizes="430px"
                className="object-contain object-bottom"
              />
            </div>

            {/* Right Benefits */}

            <div className="relative z-20 space-y-5">
              {rightBenefits.map((benefit) => (
                <BenefitCard key={benefit.id} benefit={benefit} />
              ))}
            </div>
          </div>

          {/* =========================================================
              Mobile and Tablet Layout
          ========================================================== */}

          <div className="mt-10 grid grid-cols-1 gap-8 lg:hidden">
            {/* Person */}

            <div className="relative mx-auto h-[360px] w-full max-w-[390px]">
              <Image
                src={getAssetPath(
                  "/assets/images/liverpool-why-choose-woman.webp",
                )}
                alt="Liverpool Business School MBA student"
                fill
                priority
                sizes="(max-width: 1024px) 390px"
                className="object-contain object-bottom"
              />
            </div>

            {/* Benefits */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
    <article className="flex min-h-[98px] items-center gap-4 rounded-[13px] bg-white px-5 py-4 text-black shadow-[0_8px_22px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center text-[28px]">
        {benefit.icon}
      </div>

      <h3 className="text-[15px] font-extrabold leading-[1.25] sm:text-[16px]">
        {benefit.title}
      </h3>
    </article>
  );
}
