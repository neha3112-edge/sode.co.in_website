import {
  CalendarDays,
  Clock3,
  Laptop,
  Trophy,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

type StatItem = {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

const statItems: StatItem[] = [
  {
    label: "Duration",
    value: "08 Month",
    description: "(48 Weeks)",
    icon: Clock3,
  },
  {
    label: "Classes",
    value: "3 Hours",
    description: "Per Week",
    icon: CalendarDays,
  },
  {
    label: "Mode",
    value: "100% Online",
    description: "(Live Faculty)",
    icon: Laptop,
  },
  {
    label: "NIRF Ranking",
    value: "5th",
    description: "In India",
    icon: Trophy,
  },
];

export function Approvals() {
  return (
    <section
      id="approvals"
      className="scroll-mt-[84px] bg-[#ff4b06] text-white"
    >
      <Container>
        <div className="grid grid-cols-1 py-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 lg:gap-0 lg:py-[64px]">
          {statItems.map((item, index) => (
            <StatCard
              key={item.label}
              item={item}
              showDivider={index !== statItems.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

type StatCardProps = {
  item: StatItem;
  showDivider: boolean;
};

function StatCard({ item, showDivider }: StatCardProps) {
  const Icon = item.icon;

  return (
    <article
      className={`relative flex min-h-[120px] flex-col items-center justify-center px-5 text-center ${
        showDivider
          ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-[116px] lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-white/60"
          : ""
      }`}
    >
      {/* Top label with icon */}
      <div className="flex items-center justify-center gap-3">
        <Icon size={34} strokeWidth={2.7} className="shrink-0 text-white" />

        <p className="text-[22px] font-bold leading-none text-white">
          {item.label}
        </p>
      </div>

      {/* Main value */}
      <h3 className="mt-5 text-[39px] font-black leading-[0.95] tracking-[-0.03em] text-white sm:text-[42px]">
        {item.value}
      </h3>

      {/* Bottom description */}
      <p className="mt-2 text-[19px] font-medium leading-none text-white">
        {item.description}
      </p>
    </article>
  );
}
