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
    image: "/liverpool/assets/img/Layer-36.png",
    imageAlt: "AACSB Member Accreditation logo",
    width: 170,
    height: 90,
  },
  {
    id: 2,
    image: "/liverpool/assets/img/Layer-37.png",
    imageAlt: "Accreditation logo",
    width: 170,
    height: 90,
  },
  {
    id: 3,
    image: "/liverpool/assets/img/Layer-39-1.png",
    imageAlt: "Excellence Awards logo",
    width: 170,
    height: 90,
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function ClarificationCta() {
  return (
    <section id="approvals-recognition" className="bg-[#f8fafc] py-12 border-t border-b border-gray-100">
      <Container>
        <div className="mx-auto w-full max-w-[950px]">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Approvals &amp; Recognition <span className="text-[#00499b]">of Online Liverpool Business School</span>
            </h2>
          </div>

          {/* Recognition Logos */}
          <div className="mt-8 grid grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-3">
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
    <article className="flex min-h-[90px] w-full items-center justify-center rounded-xl bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-gray-100">
      <Image
        src={getAssetPath(item.image)}
        alt={item.imageAlt}
        width={item.width}
        height={item.height}
        className="max-h-16 w-auto max-w-full object-contain"
      />
    </article>
  );
}
