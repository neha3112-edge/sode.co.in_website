import {
  Clock3,
  GraduationCap,
  IndianRupee,
  UserRound,
  type LucideIcon,
} from "lucide-react";

type StatItem = {
  title: string;
  description: string;
  backgroundColor: string;
  icon: LucideIcon;
};

const statItems: StatItem[] = [
  {
    title: "Eligibility",
    description: "Master’s or Bachelor’s with 3 years of experience",
    backgroundColor: "#CC7689",
    icon: UserRound,
  },
  {
    title: "Duration",
    description: "36 Months - complete 15hrs/week",
    backgroundColor: "#DF2876",
    icon: Clock3,
  },
  {
    title: "Level",
    description: "Expert Doctorate Degree as DBA",
    backgroundColor: "#FF5657",
    icon: GraduationCap,
  },
  {
    title: "Fees",
    description: "Approx Total of Rs. 6,50,000 (No taxes)",
    backgroundColor: "#CB2034",
    icon: IndianRupee,
  },
];

export function Approvals() {
  return (
    <section
      id="approvals"
      aria-label="Programme details"
      className="w-full overflow-hidden"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {statItems.map((item) => (
          <StatCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

type StatCardProps = {
  item: StatItem;
};

function StatCard({ item }: StatCardProps) {
  const Icon = item.icon;

  return (
    <article
      className="flex min-h-[116px] items-center px-6 py-7 text-white sm:min-h-[130px] sm:px-8 lg:px-10 xl:min-h-[116px] xl:px-[48px] xl:py-6"
      style={{
        backgroundColor: item.backgroundColor,
      }}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center">
          <Icon
            size={21}
            strokeWidth={2.5}
            aria-hidden="true"
            className="text-white"
          />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-[19px] font-extrabold leading-tight text-white sm:text-[20px]">
            {item.title}
          </h3>

          <p className="mt-1.5 text-[14px] font-medium leading-[1.45] text-white sm:text-[15px]">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
