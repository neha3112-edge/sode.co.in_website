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
    image: "iitkgp/assets/img/kharagpur-qs-approval-6969d7475adaf.webp",
    imageAlt: "IIT Kharagpur QS World University Ranking",
  },
  {
    id: 2,
    title: "6th in NIRF Ranking",
    description:
      "It holds the 6th position in the NIRF Rankings, reflecting its high standards in teaching, research, and overall excellence in India.",
    image: "iitkgp/assets/img/kharagpur-nirf-logo-6969d7472c268.webp",
    imageAlt: "IIT Kharagpur NIRF Ranking",
  },
];

export function Accreditations() {
  return (
    <section
      id="accreditations"
      className="scroll-mt-21 bg-[#fffef1] py-16 sm:py-20 lg:py-22.5"
    >
      <Container>
        <div className="mx-auto w-full max-w-305">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[32px] font-black uppercase leading-none tracking-[-0.03em] text-[#352184] sm:text-[43px] lg:text-[40px]">
              Approvals &amp; Accreditation
            </h2>

            <p className="mt-6 text-[19px] font-extrabold leading-tight text-black sm:text-[24px] lg:text-[22px]">
              India&apos;s First IIT - Established 1951
            </p>
          </div>

          {/* Ranking Items */}
          <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-10 lg:grid-cols-2 lg:gap-0">
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
      className={`relative px-0 sm:px-6 lg:px-18 ${
        showDivider
          ? "lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:h-full lg:after:w-px lg:after:bg-[#9c9c9c]"
          : ""
      }`}
    >
      {/* Ranking Image */}
      <div className="relative mx-auto h-47.5 w-full max-w-120 sm:h-55">
        <Image
          src={getAssetPath(item.image)}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          className="object-contain object-center"
        />
      </div>

      {/* Text */}
      <div className="mx-auto mt-8 max-w-130">
        <h3 className="text-[16px] font-black leading-[1.2] tracking-[-0.015em] text-black sm:text-[18px] text-center md:text-left">
          {item.title}
        </h3>

        <p className="mt-4 text-[16px] font-normal leading-normal text-[#444444] sm:text-[14px] text-center md:text-left">
          {item.description}
        </p>

        {/* Orange Line */}
        <div className="mt-9 h-1.5 w-full bg-[#ff5318]" />
      </div>
    </article>
  );
}
