import { User, Clock, GraduationCap, IndianRupee } from "lucide-react";

type StatItem = {
  icon: any;
  title: string;
  value: string;
  bgClass: string;
};

const stats: StatItem[] = [
  {
    icon: User,
    title: "Eligibility",
    value: "Master's or Bachelor's with 3 years of experience",
    bgClass: "bg-[#cc7581]",
  },
  {
    icon: Clock,
    title: "Duration",
    value: "36 Months - complete 15hrs/week",
    bgClass: "bg-[#d2006b]",
  },
  {
    icon: GraduationCap,
    title: "Level",
    value: "Expert Doctorate Degree as DBA",
    bgClass: "bg-[#ff5252]",
  },
  {
    icon: IndianRupee,
    title: "Fees",
    value: "Approx Total of Rs. 6,50,000(No taxes)",
    bgClass: "bg-[#bc002c]",
  },
];

export function StatsBar() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className={`${stat.bgClass} flex items-start gap-4 px-6 py-8 md:px-8 md:py-10 text-white transition-all`}
            >
              <div className="pt-1 text-white shrink-0">
                <Icon size={26} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold tracking-tight text-white leading-tight">
                  {stat.title}
                </h3>
                <p className="mt-2 text-[13px] sm:text-[14px] leading-relaxed text-white/95 font-medium">
                  {stat.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
