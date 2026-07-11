"use client";

import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function IIITBHero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("lead-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="iiitb-hero">
      <div className="iiitb-hero-container">
        {/* Content */}
        <div className="iiitb-hero-content">
          <div className="iiitb-badge">Top-Ranked Tech University</div>
          <h1 className="iiitb-hero-title">
            Accelerate Your Tech Career with IIIT Bangalore
          </h1>
          <p className="iiitb-hero-subtitle">
            Earn globally recognized Master of Science & Executive certifications
            in Data Science, Machine Learning, Applied AI, and Agentic AI.
            Designed for working professionals.
          </p>

          {/* Program Quick list */}
          <div className="space-y-2 text-sm text-gray-200 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              <span>M.Sc. in Data Science (18 Months)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              <span>M.Sc. in Machine Learning & AI (18 Months)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              <span>Executive Program in Generative AI for Leaders (5 Months)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              <span>EPGP in Applied AI & Agentic AI (30 Weeks)</span>
            </div>
          </div>

          <div className="iiitb-hero-cta">
            <a href="#lead-form" onClick={handleScroll} className="iiitb-btn-primary">
              Download Syllabus
            </a>
            <a href="#lead-form" onClick={handleScroll} className="iiitb-btn-secondary">
              Talk to Admissions
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="iiitb-hero-image-wrapper">
          <Image
            src={getAssetPath("/assets/images/iiitb-image.png")}
            alt="IIIT Bangalore Campus"
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
            priority
            className="iiitb-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
