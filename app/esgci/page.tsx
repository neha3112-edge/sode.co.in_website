import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Approvals } from "./components/sections/Approvals";
import { Accreditations } from "./components/sections/Accreditations";
import { About } from "./components/sections/About";
import { WhyChooseESGCI } from "./components/sections/CoursesOffered";
import { CertificateSection } from "./components/sections/CertificateSection";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { OverviewAndEligibility } from "./components/sections/OverviewAndEligibility";

export default function IIITBPage() {
  return (
    <>
      <Header />

      {/* Fixed header ki height ke barabar padding */}
      <main className="pt-14">
        <Hero />
        <Approvals />
        <OverviewAndEligibility />
        <CertificateSection />
        <Accreditations />
        <About />
        <WhyChooseESGCI />
        <ApplyAndFaq />
      </main>

      <Footer />
    </>
  );
}
