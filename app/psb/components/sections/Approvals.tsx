import { Computer, Clock3, Globe, BookOpen } from "lucide-react";

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
    title: "14+",
    description: "MBA Courses with 5 specialisations",
    icon: <BookOpen size={26} strokeWidth={2} />,
  },
  {
    id: 2,
    title: "18 Months",
    description: "Duration",
    icon: <Clock3 size={26} strokeWidth={2} />,
  },
  {
    id: 3,
    title: "20,000+",
    description: "Global Alumni Network",
    icon: <Globe size={28} strokeWidth={2} />,
  },
  {
    id: 4,
    title: "100%",
    description: "Live Sessions by IIM Lucknow & PSB Faculty",
    icon: <Computer size={26} strokeWidth={2} />,
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function Approvals() {
  return (
    <section id="approvals" className="bg-[#233568] py-6 sm:py-8 border-b border-gray-100">
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
      <div className="flex h-10 w-10 items-center justify-center text-[#b31e6b]">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="mt-2 text-base font-bold text-white sm:text-2xl">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-1 max-w-[200px] text-xs font-medium leading-relaxed text-white/80 sm:text-sm">
        {item.description}
      </p>
    </article>
  );
}
