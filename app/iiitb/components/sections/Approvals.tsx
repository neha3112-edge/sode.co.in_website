import Image from "next/image";

import { Container } from "@/components/ui/Container";

type ApprovalItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const approvalItems: ApprovalItem[] = [
  {
    title: "NAAC A+",
    description:
      "The IIIT Bangalore certificate courses have an A+ grade, which proves that the institute offers quality learning outcomes for professionals.",
    image: "/assets/img/naac-logo.webp",
    alt: "NAAC A+ approval logo",
  },
  {
    title: "UGC",
    description:
      "This recognition confirms the institute's credibility and supports trust in online credentials.",
    image: "/assets/img/ugc-logo.webp",
    alt: "UGC recognition logo",
  },
  {
    title: "AICTE",
    description:
      "It makes sure that the course is industry-aligned with curriculum standards, technical rigour, and value.",
    image: "/assets/img/aicte-logo.webp",
    alt: "AICTE approval logo",
  },
  {
    title: "AACSB",
    description:
      "The approval association signals a global business-quality benchmark, strengthening leadership and learning value.",
    image: "/assets/img/aacsb-logo.webp",
    alt: "AACSB accreditation logo",
  },
];

export function Approvals() {
  return (
    <section id="approvals" className="bg-[#292929] py-6 text-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[320px_1px_1fr] lg:gap-10">
          {/* Left Block */}
          <div className="flex flex-col items-center text-center">
            <div className="relative h-36 w-36 sm:h-40 sm:w-40">
              <Image
                src="/assets/img/approval-award.webp"
                alt="Approvals and accreditation award"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Approvals &amp;
              <br />
              Accreditation
            </h2>
          </div>

          {/* Divider */}
          <div className="hidden h-64 w-px bg-white/20 lg:block" />

          {/* Approval Cards */}
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
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
    <article className="flex items-start gap-4">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white p-2 sm:h-22 sm:w-22">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="88px"
          className="object-contain p-2"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>

        <p className="mt-1 max-w-sm text-sm leading-6 text-white/85">
          {item.description}
        </p>
      </div>
    </article>
  );
}
