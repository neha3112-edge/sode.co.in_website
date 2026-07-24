"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

type BrandLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
};

const accreditationLogos: BrandLogo[] = [
  {
    src: "/ssbm/assets/img/acbsp-p.png",
    alt: "ACBSP accreditation",
    width: 150,
    height: 60,
    className: "h-[80px] md:h-[70px] w-auto object-contain",
  },
  {
    src: "/ssbm/assets/img/chea-logo.png",
    alt: "CHEA accreditation",
    width: 150,
    height: 65,
    className: "h-[30px] md:h-[55px] w-auto max-w-[200px] object-contain",
  },
  {
    src: "/ssbm/assets/img/bac.png",
    alt: "BAC accreditation",
    width: 150,
    height: 65,
    className: "h-[70px] w-auto object-contain",
  },
];

const rankingLogos: BrandLogo[] = [
  {
    src: "/ssbm/assets/img/ceoworld.png",
    alt: "CEO World Magazine",
    width: 180,
    height: 55,
    className: "h-[20px] md:h-[51px] w-auto max-w-[150px] object-contain",
  },
  {
    src: "/ssbm/assets/img/postg.png",
    alt: "Postgrad",
    width: 125,
    height: 48,
    className: "h-[20px] md:h-[42px] w-auto max-w-[125px] object-contain",
  },
  {
    src: "/ssbm/assets/img/swiss.png",
    alt: "Study in Switzerland",
    width: 165,
    height: 55,
    className: "h-[20px] md:h-[52px] w-auto max-w-[130px] object-contain",
  },
];

export function CoursesOffered() {
  return (
    <section
      id="accreditations"
      className="bg-[#f3f4f7] py-12 sm:py-14 lg:py-16"
    >
      <Container className="p-0">
        <div className="mx-auto w-full max-w-[1140px] px-4 md:px-0">
          {/* Heading */}
          <h2 className="text-center text-[26px] font-bold leading-tight text-black sm:text-[38px] lg:text-[40px]">
            Accreditations <span className="text-[#c11f28]">&amp; Rankings</span>
          </h2>

          {/* Boxes */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
            <LogoGroup title="Accreditations" logos={accreditationLogos} />
            <LogoGroup title="Rankings" logos={rankingLogos} />
          </div>
        </div>
      </Container>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| Accreditation / Ranking Group Component
|--------------------------------------------------------------------------
*/

type LogoGroupProps = {
  title: string;
  logos: BrandLogo[];
};

function LogoGroup({ title, logos }: LogoGroupProps) {
  return (
    <div className="relative rounded-[15px] border-2 border-[#c11f28] bg-[#f3f4f7] px-5 pb-8 pt-9 sm:px-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Border title */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#f3f4f7] px-4">
        <h3 className="whitespace-nowrap text-[16px] font-extrabold uppercase tracking-wider text-[#c11f28]">
          {title}
        </h3>
      </div>

      {/* Logos */}
      <div className="flex min-h-[82px] items-center justify-center gap-8 flex-row sm:gap-10">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex min-h-[65px] flex-1 items-center justify-center transition-transform duration-300 ease-in-out hover:scale-[1.05]"
          >
            <Image
              src={getAssetPath(logo.src)}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={logo.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
