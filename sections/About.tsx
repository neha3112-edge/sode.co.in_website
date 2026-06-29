"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/ui/FormWrapper";
import { useState } from "react";

export function About() {
  const [counsellingOpen, setCounsellingOpen] = useState(false);

  const onClick = () => {
    setCounsellingOpen(true);
  };

  return (
    <>
      <section id="about" className="py-10 border-none flex justify-center">
        <Container>
          <div className="bg-white rounded-3xl md:p-12 shadow-2xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-xl md:text-4xl font-bold mt-3 text-gray-900 mb-1">
              ABOUT – MASTER OF BUSINESS ADMINISTRATION
            </h2>
            <p className="text-gray-600 mb-4 md:text-xl font-medium leading-relaxed text-sm">One Year Online MBA
            </p>
            <p className="text-gray-800 mb-4 leading-relaxed px-4 text-center text-sm md:text-base">
              <span className="block mb-2">
                This program 1 year online MBA has been designed for learners and professionals who want to accelerate their careers despite their prior commitments. This highly flexible one year online MBA course allows them to gain knowledge in advanced business studies, enhances leadership skills and offers global exposure.
              </span>

              <span className="block mb-2">
                This course differs from the traditional program pattern. The online MBA degree in one year course extends an opportunity for individuals to balance both their studies and work while achieving their career ambitions.

              </span>

              <span className="block mb-2">
                The 1 year MBA program online benefits students with a curriculum that makes them industry-ready and offers practical learning. It prepares students for real-world challenges. It transforms careers and growth, supporting the leadership roles. Overall, this one year online MBA offers convenient learning, which is credible and leads to career advancement.
              </span>
            </p>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 p-2 justify-around items-center gap-6 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-blue-50 p-3 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <p className="font-bold text-dark-blue">Duration</p>
                <p className="text-sm text-gray-500">12 months (Fastrack)</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="bg-blue-50 p-3 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                </div>
                <p className="font-bold text-dark-blue">Eligibility</p>
                <p className="text-sm text-gray-500">50% in graduation from any recognized university</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="bg-blue-50 p-3 rounded-full text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-play"><path d="m10 8 6 4-6 4Z" /><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M12 17v4" /><path d="M8 21h8" /></svg>
                </div>
                <p className="font-bold text-dark-blue">Specialization</p>
                <p className="text-sm text-gray-500">20+ Top in demand specializations Available</p>
              </div>
            </div>

            <Button onClick={onClick} variant="secondary" className="w-full max-w-xs shadow-1xl mb-4  shadow-yellow-500/20 rounded-full font-bold cursor-pointer">
              Get 100% Free 1:1 Counselling
            </Button>
          </div>
        </Container>
      </section>

      {counsellingOpen && (
        <div
          onClick={() => setCounsellingOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-xl shadow-2xl relative p-6 animate-[scaleIn_0.2s_ease]"
          >
            <FormWrapper
              title="Get Free Counselling"
              subtitle="Our experts will guide you step by step"
              onClose={() => setCounsellingOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}