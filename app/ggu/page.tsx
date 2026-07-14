import { Header } from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { SpecializationOffered } from "./components/sections/Specialization";
import { CoursesOffered } from "./components/sections/CoursesOffered";
import { About } from "./components/sections/About";
import { Accreditations } from "./components/sections/Accreditations";
import { LearningOutcomes } from "./components/sections/LearningOutcomes";
import { ApplyAndFaq } from "./components/sections/ApplyAndFaq";

export default function IIITBPage() {
  return (
    <>
      <Header />

      {/* Fixed header ki height ke barabar padding */}
      <main className="pt-14">
        <Hero />
        <CoursesOffered />
        <SpecializationOffered />
        <About />
        <Accreditations />
        <LearningOutcomes />
        <ApplyAndFaq />
      </main>

      <Footer />
    </>
  );
}
