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
    description: "Bachelor’s degree + 2 years of experience",
    icon: <UserRound size={26} strokeWidth={2} />,
  },
  {
    id: 2,
    title: "Duration",
    description: "18 months",
    icon: <Clock3 size={26} strokeWidth={2} />,
  },
  {
    id: 3,
    title: "Faculty",
    description: "Leading industry experts",
    icon: <GraduationCap size={28} strokeWidth={2} />,
  },
  {
    id: 4,
    title: "Level",
    description: "Postgraduate Degree",
    icon: <BookOpen size={26} strokeWidth={2} />,
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function Approvals() {
  return (
    <section id="approvals" className="bg-[#00499b] py-6 sm:py-8 border-b border-gray-100">
      <Container>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-y-0">
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
      className={`relative flex flex-col items-center justify-center px-4 text-center ${showDivider ? "md:border-r md:border-[#e2e8f0]/50" : ""
        }`}
    >
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center text-[#25cfbf]">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="mt-2 text-base font-bold text-white sm:text-lg">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-1 max-w-[200px] text-xs font-medium leading-relaxed text-white/80 sm:text-sm">
        {item.description}
      </p>
    </article>
  );
}
