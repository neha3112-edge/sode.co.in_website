import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Approvals } from "./components/sections/Approvals";
import { CertificateSection } from "./components/sections/CertificateSection";
import { About } from "./components/sections/About";
import { RealWorldAISystems } from "./components/sections/RealWorldAISystems";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { CourseOverview } from "./components/sections/CourseOverview";
import { Accreditations } from "./components/sections/Accreditations";
import { WhatYouWillLearn } from "./components/sections/WhatYouWillLearn";

export default function IIITBPage() {
  return (
    <>
      <Header />
      {/* Fixed header ki height ke barabar padding */}
      <main className="pt-20">
        <Hero />
        <Approvals />
        <CourseOverview />
        <RealWorldAISystems />
        <Accreditations />
        <About />
        <WhatYouWillLearn />
        <CertificateSection />
        <ApplyAndFaq />
      </main>

      <Footer />
    </>
  );
}
