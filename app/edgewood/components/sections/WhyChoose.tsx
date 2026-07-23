"use client";

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
      "Edgewood University Online program is approved by the HLC, which is a trusted U.S. regional approval authority. This approval support MBA+DBA program's credibility.",
    image: "/edgewood/assets/img/hlc-approval-edgewood.webp",
    alt: "HLC Logo",
  },
  {
    title: "WES",
    description:
      "The Edgewood University Online MBA + DBA is approved by the WES, which help learniver validate their US qualification for education and career development across countries.",
    image: "/edgewood/assets/img/WES.webp",
    alt: "WES Logo",
  },
  {
    title: "ACBSP",
    description:
      "ACBSP approval ensures that the quality of the education has a strong academic value. The Edgewood University Online MBA has this approval, which shows their credibility.",
    image: "/edgewood/assets/img/acbsp-approval-edgewood.webp",
    alt: "ACBSP Logo",
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
          <h2 className="text-[26px] font-black uppercase leading-none text-[#c9230c] sm:text-[30px]">
            Accreditation of
          </h2>

          <p className="mt-2 text-[16px] font-extrabold leading-tight text-[#3d3d3d] sm:text-[18px]">
            Edgewood University Online
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
    <article className="flex min-h-[350px] flex-col items-center rounded-[24px] border-2 border-[#dedede] bg-white px-7 py-10 text-center sm:px-8">
      {/* Logo */}
      <div className="relative h-[120px] w-full max-w-[220px]">
        <Image
          src={getAssetPath(item.image)}
          alt={item.alt}
          fill
          sizes="220px"
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-[18px] font-bold leading-tight text-[#0b2344] sm:text-[19px]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-5 max-w-[310px] text-[13px] leading-[1.55] text-[#666666] sm:text-[13px]">
        {item.description}
      </p>
    </article>
  );
}
