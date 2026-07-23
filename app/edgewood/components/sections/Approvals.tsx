import { GraduationCap } from "lucide-react";

import { Container } from "@/components/ui/Container";

type StatItem = {
  title: string;
  description: string;
};

const statItems: StatItem[] = [
  {
    title: "95+",
    description: "Years of legacy",
  },
  {
    title: "5 lakh+",
    description: "Enrollments",
  },
  {
    title: "PwC",
    description: "Certificate",
  },
  {
    title: "Dual",
    description: "Degree",
  },
];

export function Approvals() {
  return (
    <section
      id="approvals"
      className="bg-[#c91f06] py-5 text-white sm:py-12 lg:py-[30px]"
    >
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {statItems.map((item) => (
            <StatCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type StatCardProps = {
  item: StatItem;
};

function StatCard({ item }: StatCardProps) {
  return (
    <article className="flex items-center gap-3 justify-start">
      {/* White Circle Icon */}
      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white text-[#c91f06]">
        <GraduationCap size={28} strokeWidth={2.4} />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-[22px] font-bold leading-none tracking-[-0.02em] text-white sm:text-[30px]">
          {item.title}
        </h3>

        <p className="mt-2 text-[14px] font-medium leading-none text-white">
          {item.description}
        </p>
      </div>
    </article>
  );
}
