import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { Hero } from "./components/sections/Hero";
import { Approvals } from "./components/sections/Approvals";
import { CoursesOffered } from "./components/sections/CoursesOffered";
import { About } from "./components/sections/About";
import { WhyChoose } from "./components/sections/WhyChoose";
import { CertificateSection } from "./components/sections/CertificateSection";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";
import { ClarificationCta } from "./components/sections/ClarificationCta";

export default function IIITBPage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Approvals />
        <CoursesOffered />
        <About />
        <WhyChoose />
        <CertificateSection />
        <ApplyAndFaq />
        <ClarificationCta />
      </main>

      <Footer />
    </>
  );
}
