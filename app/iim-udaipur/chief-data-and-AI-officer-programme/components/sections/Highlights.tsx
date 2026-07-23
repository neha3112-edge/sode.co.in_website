"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

type HighlightItem = {
  icon: string;
  title: string;
  desc: string;
};

const items: HighlightItem[] = [
  {
    icon: "/iim-udaipur/chief-data-and-AI-officer-programme/img/ic-02.png",
    title: "Eligibility",
    desc: "Graduation with 8 years of experience",
  },
  {
    icon: "/iim-udaipur/chief-data-and-AI-officer-programme/img/ic-01.png",
    title: "Duration",
    desc: "24 Weeks (6 Months)",
  },
  {
    icon: "/iim-udaipur/chief-data-and-AI-officer-programme/img/Student Enrolled.png",
    title: "Institutions",
    desc: "IIIT Bangalore & IIM Udaipur",
  },
  {
    icon: "/iim-udaipur/chief-data-and-AI-officer-programme/img/Institutionn.png",
    title: "30k+",
    desc: "Learner Enrolled",
  },
];

export function Highlights() {
  return (
    <section className="bg-[#01519A] py-10 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-start"
            >
              {/* Round Icon Container */}
              <div className="relative h-15 w-15 shrink-0 overflow-hidden rounded-full bg-white flex items-center justify-center">
                <div className="relative h-15 w-15">
                  <Image
                    src={getAssetPath(item.icon)}
                    alt={item.title}
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Group */}
              <div className="flex flex-col text-left">
                <h3 className="text-lg font-extrabold leading-tight tracking-wide text-white text-center md:text-left">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-base font-medium leading-snug text-white/80 sm:text-sm text-center md:text-left">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
