import { UserRound, Clock3, GraduationCap, IndianRupee } from "lucide-react";

import { Container } from "@/components/ui/Container";

type ApprovalItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const approvalItems: ApprovalItem[] = [
  {
    icon: <UserRound size={30} />,
    title: "Eligibility",
    description: "Master or Bachelor degree with 3 years of experience",
  },
  {
    icon: <Clock3 size={30} />,
    title: "Duration",
    description: "36 months | 15 hours per week",
  },
  {
    icon: <GraduationCap size={30} />,
    title: "Level",
    description: "Internationally Recognized Online DBA",
  },
  {
    icon: <IndianRupee size={30} />,
    title: "Fees",
    description: "₹6,50,000 (all-inclusive, no extra taxes)",
  },
];

export function Approvals() {
  return (
    <section
      id="approvals"
      className="border-b border-white bg-black py-10 sm:py-10"
    >
      <Container>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          {approvalItems.map((item) => (
            <ApprovalCard key={item.title} item={item} />
          ))}
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
    <article className="text-center">
      {/* Icon */}
      <div className="flex justify-center text-[#ffe600]">{item.icon}</div>

      {/* Title */}
      <h3 className="mt-3 text-[20px] font-extrabold leading-none text-[#00b050]">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mx-auto mt-3 max-w-[200px] text-[14px] font-medium leading-[1.35] text-white lg:text-[14px]">
        {item.description}
      </p>
    </article>
  );
}
