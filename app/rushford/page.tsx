import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Approvals } from "./components/sections/Approvals";
import { CoursesOffered } from "./components/sections/CoursesOffered";
import { About } from "./components/sections/About";
import { Accreditations } from "./components/sections/Accreditations";
import { MicrosoftCopilot } from "./components/sections/MicrosoftCopilot";
import { DBABenefits } from "./components/sections/DBABenefits";

export default function IIITBPage() {
  return (
    <>
      <Header />

      {/* Fixed header ki height ke barabar padding */}
      <main className="pt-14">
        <Hero />
        <Approvals />
        <CoursesOffered />
        <About />
        <Accreditations />
        <MicrosoftCopilot />
        <DBABenefits />
      </main>

      <Footer />
    </>
  );
}
