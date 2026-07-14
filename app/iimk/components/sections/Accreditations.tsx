import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

type AccreditationItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const accreditationItems: AccreditationItem[] = [
  {
    id: 1,
    title: "215th in QS World University Rankings",
    description:
      "It is ranked 215th globally in the QS World University Rankings, showing strong academic performance and international recognition.",
    image: "/assets/images/iit-kgp-qs-ranking.webp",
    imageAlt: "IIT Kharagpur QS World University Ranking",
  },
  {
    id: 2,
    title: "6th in NIRF Ranking",
    description:
      "It holds the 6th position in the NIRF Rankings, reflecting its high standards in teaching, research, and overall excellence in India.",
    image: "/assets/images/iit-kgp-nirf-ranking.webp",
    imageAlt: "IIT Kharagpur NIRF Ranking",
  },
];

export function Accreditations() {
  return (
    <section
      id="accreditations"
      className="scroll-mt-[84px] bg-[#fffef1] py-16 sm:py-20 lg:py-[90px]"
    >
      <Container>
        <div className="mx-auto w-full max-w-[1220px]">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[32px] font-black uppercase leading-none tracking-[-0.03em] text-[#352184] sm:text-[43px] lg:text-[51px]">
              Approvals &amp; Accreditation
            </h2>

            <p className="mt-6 text-[19px] font-extrabold leading-tight text-black sm:text-[24px] lg:text-[27px]">
              India&apos;s First IIT - Established 1951
            </p>
          </div>

          {/* Ranking Items */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-[76px] lg:grid-cols-2 lg:gap-0">
            {accreditationItems.map((item, index) => (
              <AccreditationCard
                key={item.id}
                item={item}
                showDivider={index === 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

type AccreditationCardProps = {
  item: AccreditationItem;
  showDivider: boolean;
};

function AccreditationCard({ item, showDivider }: AccreditationCardProps) {
  return (
    <article
      className={`relative px-0 sm:px-6 lg:px-[72px] ${
        showDivider
          ? "lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:h-full lg:after:w-px lg:after:bg-[#9c9c9c]"
          : ""
      }`}
    >
      {/* Ranking Image */}
      <div className="relative mx-auto h-[190px] w-full max-w-[520px] sm:h-[220px]">
        <Image
          src={getAssetPath(item.image)}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          className="object-contain object-center"
        />
      </div>

      {/* Text */}
      <div className="mx-auto mt-8 max-w-[520px]">
        <h3 className="text-[20px] font-black leading-[1.2] tracking-[-0.015em] text-black sm:text-[23px]">
          {item.title}
        </h3>

        <p className="mt-4 text-[16px] font-normal leading-[1.5] text-[#444444] sm:text-[18px]">
          {item.description}
        </p>

        {/* Orange Line */}
        <div className="mt-9 h-[6px] w-full bg-[#ff5318]" />
      </div>
    </article>
  );
}
