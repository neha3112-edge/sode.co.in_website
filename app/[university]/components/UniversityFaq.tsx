"use client";

import { useState } from "react";
import { UniversityData } from "@/lib/universities-data";

export default function UniversityFaq({ data }: { data: UniversityData }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  if (!data.faq || data.faq.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="uni-faq">
      <div className="uni-section-heading">
        <h2 className="uni-section-title">Frequently Asked Questions</h2>
        <p className="uni-section-subtitle">
          Find answers to common queries about {data.name} online programs.
        </p>
      </div>

      <div className="uni-faq-container">
        {data.faq.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="uni-faq-item">
              <button
                onClick={() => toggle(idx)}
                className="uni-faq-question"
              >
                <span>{item.question}</span>
                <span>{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="uni-faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
