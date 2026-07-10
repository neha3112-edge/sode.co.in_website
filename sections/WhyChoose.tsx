import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

const reasons = [
  {
    iconSrc: "/assets/images/why-choose-01-69c28580993bb.webp",
    title: "Accelerated Career Growth",
    desc: "Fast-track success with a flexible one year MBA format.",
  },
  {
    iconSrc: "/assets/images/why-choose-01-69c28580993bb.webp",
    title: "Industry-Aligned Specializations",
    desc: "Choose relevant domains within the top 1 year MBA programs.",
  },
  {
    iconSrc: "/assets/images/why-choose-02-69c285814da05.webp",
    title: "Flexible Learning Experience",
    desc: "Balance work easily through a practical one year MBA.",
  },
  {
    iconSrc: "/assets/images/why-choose-02-69c285814da05.webp",
    title: "Leadership & Strategy Skills",
    desc: "Build decision-making expertise in a MBA 1 year course.",
  },
  {
    iconSrc: "/assets/images/why-choose-03-69c285814b9f8.webp",
    title: "Hands-On Industry Projects",
    desc: "Solve real challenges in a 1 year program MBA.",
  },
  {
    iconSrc: "/assets/images/why-choose-03-69c285814b9f8.webp",
    title: "Global Exposure & Networking",
    desc: "Connect worldwide through advanced 1 year executive MBA.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-16 md:py-28 bg-[#112255] text-white overflow-hidden">
      <Container>
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight leading-snug">
            Why Choose One Year Online MBA Program?
          </h2>
        </div>

        {/* Mobile = 2 column */}
        <div className="grid grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6 max-w-6xl mx-auto px-4">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 md:p-10 
          flex flex-col items-center text-center md:text-left 
          md:flex-row md:items-center 
          hover:scale-[1.02] transition-all duration-300 shadow-xl"
            >
              <div className="shrink-0 mb-3 md:mb-0 md:mr-6">
                <Image
                  src={getAssetPath(reason.iconSrc)}
                  alt={reason.title}
                  width={50}
                  height={45}
                  className="object-contain"
                />
              </div>

              <div>
                <h4 className="font-extrabold text-[#112255] mb-1 text-sm md:text-xl leading-tight">
                  {reason.title}
                </h4>
                <p className="text-gray-600 text-xs md:text-base font-medium mt-2">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
