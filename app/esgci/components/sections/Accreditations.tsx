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
    title: "French Ministry of Higher Education",
    description:
      "Recognizes ESGCI for meeting high-quality standards in French higher education.",
    image: "/esgci/assets/img/REPUBLIQUE.webp",
    imageAlt: "French Ministry of Higher Education",
  },
  {
    id: 2,
    title: "QUALIOPI",
    description:
      "Certification ensuring training programs in France adhere to recognized quality standards.",
    image: "/esgci/assets/img/QUALIOPI.webp",
    imageAlt: "Qualiopi certification",
  },
  {
    id: 3,
    title: "ACBSP",
    description:
      "Global accreditation validating the quality and standards of business education.",
    image: "/esgci/assets/img/ACBSP.webp",
    imageAlt: "ACBSP accreditation",
  },
  {
    id: 4,
    title: "IACBE",
    description:
      "Ensures institutions maintain accountability and continuously improve business education quality.",
    image: "/esgci/assets/img/IACBE.webp",
    imageAlt: "IACBE accreditation",
  },
];

export function Accreditations() {
  return (
    <section
      id="certification"
      className="bg-white py-12 sm:py-14 sm:pt-5"
    >
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] font-bold uppercase leading-tight tracking-[-0.02em] text-[#009c43] sm:text-[34px] lg:text-[38px]">
            Approvals and Accreditation
          </h2>
        </div>

        {/* Accreditation Grid */}
        <div className="mx-auto mt-12 grid max-w-[1160px] grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {accreditationItems.map((item) => (
            <AccreditationCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type AccreditationCardProps = {
  item: AccreditationItem;
};

function AccreditationCard({ item }: AccreditationCardProps) {
  return (
    <article className="flex h-full flex-col items-center text-center shadow-[0_3px_12px_rgba(0,0,0,0.24)] p-4 rounded-xl">
      {/* Logo */}
      <div className="relative flex h-[86px] w-full items-center justify-center sm:h-[95px]">
        <Image
          src={getAssetPath(item.image)}
          alt={item.imageAlt}
          width={190}
          height={90}
          className="max-h-[86px] w-auto max-w-[190px] object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-[17px] font-bold leading-[1.2] text-[#009c43] sm:text-[14px]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mx-auto mt-2 max-w-[260px] text-[13px] font-medium leading-[1.35] text-[#333333] sm:text-[13px]">
        {item.description}
      </p>
    </article>
  );
}
