import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

type AccreditationItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const accreditationItems: AccreditationItem[] = [
  {
    title: "HLC",
    description:
      "The IIIT Bangalore online programmes are supported by strong institutional credibility and structured academic standards that strengthen the value of professional learning.",
    image: "/assets/img/naac-logo.webp",
    alt: "HLC accreditation logo",
  },
  {
    title: "WES",
    description:
      "The programme credentials can support international academic and professional evaluation, helping learners present their qualifications across different countries.",
    image: "/assets/img/ugc-logo.webp",
    alt: "WES recognition logo",
  },
  {
    title: "AICTE",
    description:
      "The programmes follow industry-relevant learning standards, technical depth, and practical outcomes designed for modern technology and leadership roles.",
    image: "/assets/img/aicte-logo.webp",
    alt: "AICTE accreditation logo",
  },
];

export function WhyChoose() {
  return (
    <section
      id="accreditation"
      className="w-full bg-white px-4 py-14 sm:py-16 lg:py-[58px]"
    >
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] font-black uppercase leading-none text-[#c9230c] sm:text-[32px]">
            Accreditation of
          </h2>

          <p className="mt-2 text-[18px] font-extrabold leading-tight text-[#3d3d3d] sm:text-[22px]">
            IIIT Bangalore Online
          </p>
        </div>

        {/* Accreditation Cards */}
        <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {accreditationItems.map((item) => (
            <AccreditationCard key={item.title} item={item} />
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
    <article className="flex min-h-[375px] flex-col items-center rounded-[24px] border-2 border-[#dedede] bg-white px-7 py-10 text-center sm:px-8">
      {/* Logo */}
      <div className="relative h-[130px] w-full max-w-[250px]">
        <Image
          src={getAssetPath(item.image)}
          alt={item.alt}
          fill
          sizes="250px"
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-[19px] font-black leading-tight text-[#0b2344] sm:text-[20px]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-7 max-w-[310px] text-[14px] leading-[1.55] text-[#666666] sm:text-[15px]">
        {item.description}
      </p>
    </article>
  );
}
