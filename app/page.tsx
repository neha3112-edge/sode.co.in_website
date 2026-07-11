import { Hero } from "@/sections/Hero";
import { StatsRibbon } from "@/sections/StatsRibbon";
// import { Approvals } from "@/sections/Approvals";
import { AboutSode } from "@/sections/AboutSode";
// import { About } from "@/sections/About";
// import { Specialisations } from "@/sections/Specialisations";
// import { KeyHighlights } from "@/sections/KeyHighlights";
// import { TargetAudience } from "@/sections/TargetAudience";
// import { Stats } from "@/sections/Stats";
// import { Enrollment } from "@/sections/Enrollment";
// import { WhyChoose } from "@/sections/WhyChoose";
import { Testimonials } from "@/sections/Testimonials";
import { Universities } from "@/sections/Universities";
import { PremiumPrograms } from "@/sections/PremiumPrograms";
import { FAQ } from "@/sections/FAQ";

import { Header } from "@/components/layout/Header";
import { MainFooter } from "@/components/layout/MainFooter";
import FloatingButton from "@/components/layout/FloatingButton";
import GlobalCTA from "@/components/layout/GlobalCTA";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col md:mt-10">
        <Hero />
        <StatsRibbon />
        <PremiumPrograms />
        {/* <Approvals /> */}
        <Universities />
        <AboutSode />
        {/* <About /> */}
        {/* <Specialisations />
        <KeyHighlights />
        <TargetAudience />
        <Stats />
        <Enrollment />
        <WhyChoose /> */}
        <Testimonials />
        <FAQ />
      </main>
      <MainFooter />
      <div className="z-50">
        <FloatingButton />
      </div>
      <div className="z-40">
        <GlobalCTA />
      </div>
    </>
  );
}
