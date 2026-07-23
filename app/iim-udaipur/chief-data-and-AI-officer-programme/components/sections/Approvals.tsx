import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

type ApprovalItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const approvalItems: ApprovalItem[] = [
  {
    title: "QS Ranking",
    description:
      "It reflects a university’s global reputation, academic quality, and research excellence. It helps students make informed choices.",
    image: "/iim-udaipur/chief-data-and-AI-officer-programme/img/QS logo.webp",
    alt: "QS Ranking logo",
  },
  {
    title: "NAAC A+",
    description:
      "NAAC A+ accreditation indicates that a university meets high standards in academics making it a strong choice for quality higher education.",
    image: "/iim-udaipur/chief-data-and-AI-officer-programme/img/a.png",
    alt: "NAAC A+ logo",
  },
  {
    title: "AACSB",
    description:
      "The approval association signals a global business-quality benchmark, strengthening leadership and learning value.",
    image: "/iim-udaipur/chief-data-and-AI-officer-programme/img/AACSB.webp",
    alt: "AACSB accreditation logo",
  },
];

export function Approvals() {
  return (
    <section id="approvals" className="bg-[#292929] py-12 text-white">
      <Container>

        <h3 className="mb-10 text-2xl font-bold leading-tight text-center text-white sm:text-3xl">Approvals & Accreditation</h3>
        <div className="flex items-center gap-10 lg:gap-10">
          {/* Approval Cards */}
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-3">
            {approvalItems.map((item) => (
              <ApprovalCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

type ApprovalCardProps = {
  item: ApprovalItem;
};

function ApprovalCard({ item }: ApprovalCardProps) {
  return (
    <article className="flex items-center gap-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white p-2 sm:h-22 sm:w-22">
        <Image
          src={getAssetPath(item.image)}
          alt={item.alt}
          fill
          sizes="88px"
          className="object-contain p-2"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-2 text-xs leading-5 text-white/80">
          {item.description}
        </p>
      </div>
    </article>
  );
}
