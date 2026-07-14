import { BookOpen, Clock3, GraduationCap, UserRound } from "lucide-react";

import { Container } from "@/components/ui/Container";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type StatItem = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

/*
|--------------------------------------------------------------------------
| Data
|--------------------------------------------------------------------------
*/

const statItems: StatItem[] = [
  {
    id: 1,
    title: "Eligibility",
    description: "Bachelor’s degree +2 years of experience",
    icon: <UserRound size={30} strokeWidth={2.4} />,
  },
  {
    id: 2,
    title: "Duration:",
    description: "18 months",
    icon: <Clock3 size={30} strokeWidth={2.4} />,
  },
  {
    id: 3,
    title: "Faculty:",
    description: "Leading industry experts",
    icon: <GraduationCap size={32} strokeWidth={2.4} />,
  },
  {
    id: 4,
    title: "Level",
    description: "Postgraduate Degree",
    icon: <BookOpen size={30} strokeWidth={2.4} />,
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function Approvals() {
  return (
    <section id="approvals" className="bg-[#f5f5f5] py-8 sm:py-10 lg:py-[31px]">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-0">
          {statItems.map((item, index) => (
            <StatCard
              key={item.id}
              item={item}
              showDivider={index !== statItems.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| Stat Card
|--------------------------------------------------------------------------
*/

type StatCardProps = {
  item: StatItem;
  showDivider: boolean;
};

function StatCard({ item, showDivider }: StatCardProps) {
  return (
    <article
      className={`relative flex min-h-[105px] flex-col items-center justify-center px-5 text-center ${
        showDivider ? "lg:border-r lg:border-[#d7d7d7]" : ""
      }`}
    >
      {/* Icon */}

      <div className="flex h-[36px] items-center justify-center text-[#20c7bb]">
        {item.icon}
      </div>

      {/* Title */}

      <h3 className="mt-1 text-[19px] font-extrabold leading-none text-[#666666] sm:text-[21px]">
        {item.title}
      </h3>

      {/* Description */}

      <p className="mt-3 max-w-[220px] text-[14px] font-medium leading-[1.25] text-[#737373] sm:text-[15px]">
        {item.description}
      </p>
    </article>
  );
}
