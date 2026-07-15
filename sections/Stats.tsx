import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

const stats = [
  {
    value: "50K+",
    label: "Student Enrolled",
    icon: "/assets/images/student-enrolled-69c77be215a67.webp",
  },
  {
    value: "20+",
    label: "Specialization",
    icon: "/assets/images/speciisation-69c77be218663.webp",
  },
  {
    value: "15+",
    label: "Top Universities",
    icon: "/assets/images/university-69c77be26e228.webp",
  },
  {
    value: "100%",
    label: "Placements Assistance",
    icon: "/assets/images/placement-assistance-69c77be272285.webp",
  },
];

export function Stats() {
  return (
    <section
      className="bg-[#F3F7FB] py-6 w-full relative z-10 shadow-sm"
      id="stats"
    >
      <Container>
        {/* ✅ GRID FIX */}
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-start gap-3 py-4 px-2">
              {/* ICON */}
              <div className="w-10 h-10 md:w-12 md:h-12 relative shrink-0">
                <Image
                  src={getAssetPath(stat.icon)}
                  alt={stat.label}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col leading-tight">
                <span className="text-xl md:text-3xl font-bold text-[#112255]">
                  {stat.value}
                </span>
                <span className="text-[11px] md:text-sm font-medium text-gray-500">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
