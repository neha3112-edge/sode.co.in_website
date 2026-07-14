import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Approvals } from "./components/sections/Approvals";
import { DualCertification } from "./components/sections/DualCertification";
import { About } from "./components/sections/About";
import { ProgramJourney } from "./components/sections/ProgramJourney";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { CoursesOffered } from "./components/sections/CoursesOffered";
import { ClarificationCta } from "./components/sections/ClarificationCta";
import { WhyChoose } from "./components/sections/WhyChoose";
import { AboutLbs } from "./components/sections/AboutLBS";

export default function IIITBPage() {
  return (
    <>
      <Header />
      {/* Fixed header ki height ke barabar padding */}
      <main className="pt-14">
        <Hero />
        <Approvals />
        <About />
        <ProgramJourney />
        <DualCertification />
        <CoursesOffered />
        <ClarificationCta />
        <WhyChoose />
        <AboutLbs />
        <ApplyAndFaq />
      </main>
      <Footer />
    </>
  );
}
