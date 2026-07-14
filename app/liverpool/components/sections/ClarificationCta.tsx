import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type RecognitionItem = {
  id: number;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
};

/*
|--------------------------------------------------------------------------
| Recognition Data
|--------------------------------------------------------------------------
*/

const recognitionItems: RecognitionItem[] = [
  {
    id: 1,
    image: "/assets/images/liverpool-wes-logo.webp",
    imageAlt: "WES World Education Services",
    width: 190,
    height: 90,
  },
  {
    id: 2,
    image: "/assets/images/liverpool-aacsb-logo.webp",
    imageAlt: "AACSB Business Education Alliance Member",
    width: 170,
    height: 90,
  },
  {
    id: 3,
    image: "/assets/images/liverpool-practice-awards-gold.webp",
    imageAlt: "2023 Excellence in Practice Awards Gold",
    width: 190,
    height: 100,
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function ClarificationCta() {
  return (
    <section id="approvals" className="bg-white py-10 sm:py-12 lg:py-[42px]">
      <Container>
        <div className="mx-auto w-full max-w-[950px]">
          {/* =========================================================
              Heading
          ========================================================== */}

          <div className="text-center">
            <h2 className="text-[26px] font-black uppercase leading-[1.05] tracking-[-0.025em] text-black sm:text-[30px]">
              Approvals &amp; Recognition
            </h2>

            <p className="mx-auto mt-1 w-fit bg-[#effff9] px-1 text-[24px] font-black uppercase leading-[1.05] tracking-[-0.02em] text-[#25cfbf] sm:text-[29px]">
              Of Online Liverpool Business School
            </p>
          </div>

          {/* =========================================================
              Recognition Logos
          ========================================================== */}

          <div className="mt-10 grid grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-3 sm:gap-8 lg:mt-[48px]">
            {recognitionItems.map((item) => (
              <RecognitionLogo key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| Recognition Logo
|--------------------------------------------------------------------------
*/

type RecognitionLogoProps = {
  item: RecognitionItem;
};

function RecognitionLogo({ item }: RecognitionLogoProps) {
  return (
    <article className="flex min-h-[110px] w-full items-center justify-center px-4">
      <Image
        src={getAssetPath(item.image)}
        alt={item.imageAlt}
        width={item.width}
        height={item.height}
        className="max-h-[100px] w-auto max-w-full object-contain"
      />
    </article>
  );
}
