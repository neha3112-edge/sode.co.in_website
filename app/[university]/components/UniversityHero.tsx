"use client";

import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { UniversityData } from "@/lib/universities-data";

export default function UniversityHero({ data }: { data: UniversityData }) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("lead-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="uni-hero">
      <div className="uni-hero-container">
        {/* Content */}
        <div className="uni-hero-content">
          <div className="uni-badge">{data.badge}</div>
          <h1 className="uni-hero-title">{data.bannerTitle}</h1>
          <p className="uni-hero-subtitle">
            {data.bannerSubtitle} Designed for working professionals seeking global opportunities.
          </p>

          {/* Program Quick list */}
          <div className="space-y-2 text-sm text-gray-200 mt-2">
            {data.coursesBullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="uni-hero-cta">
            <a href="#lead-form" onClick={handleScroll} className="uni-btn-primary">
              Download Syllabus
            </a>
            <a href="#lead-form" onClick={handleScroll} className="uni-btn-secondary">
              Talk to Admissions
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="uni-hero-image-wrapper">
          <Image
            src={getAssetPath(data.image)}
            alt={`${data.name} Campus`}
            width={600}
            height={400}
            style={{ width: "100%", height: "auto" }}
            priority
            className="uni-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
