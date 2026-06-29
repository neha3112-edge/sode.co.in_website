import { Hero } from "@/sections/Hero";
import { Approvals } from "@/sections/Approvals";
import { About } from "@/sections/About";
import { Specialisations } from "@/sections/Specialisations";
import { KeyHighlights } from "@/sections/KeyHighlights";
import { TargetAudience } from "@/sections/TargetAudience";
import { Stats } from "@/sections/Stats";
import { Enrollment } from "@/sections/Enrollment";
import { WhyChoose } from "@/sections/WhyChoose";
import { FAQ } from "@/sections/FAQ";

export default function Page() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <Hero />
      <Approvals />
      <About />
      <Specialisations />
      <KeyHighlights />
      <TargetAudience />
      <Stats />
      <Enrollment />
      <WhyChoose />
      <FAQ />
    </main>
  );
}
