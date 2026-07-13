"use client";

import { useState } from "react";
import { EnrichedUniversityData } from "@/lib/universities-data";

export default function UniversityFaq({ data }: { data: EnrichedUniversityData }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  if (!data.faq || data.faq.length === 0) return null;

  return (
    <section id="faqs" className="faq-section">
      <div className="faq-header">
        <h2>FAQ - Frequently Asked Question</h2>
      </div>

      <div className="faq-container">
        {data.faq.map((faq, index) => (
          <div className={`faq-item ${activeFaq === index ? "active" : ""}`} key={index}>
            <button
              className="faq-question"
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              <span className="status-icon"></span>
              {faq.question}
            </button>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeFaq === index ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease-out",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
