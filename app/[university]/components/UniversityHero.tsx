"use client";

import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { UniversityData } from "@/lib/universities-data";
import FormWrapper from "@/components/forms/FormWrapper";

export default function UniversityHero({ data }: { data: UniversityData }) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("lead-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 1. Centered Hero Variant
  if (data.heroVariant === "centered") {
    return (
      <section className="uni-hero uni-hero-centered" style={{ backgroundImage: `url(${getAssetPath(data.image)})` }}>
        <div className="uni-hero-overlay"></div>
        <div className="uni-hero-container uni-hero-centered-content">
          <div className="uni-hero-content items-center text-center max-w-3xl mx-auto z-10">
            <div className="uni-badge">{data.badge}</div>
            <h1 className="uni-hero-title text-center">{data.bannerTitle}</h1>
            <p className="uni-hero-subtitle text-center text-gray-100 max-w-2xl">
              {data.bannerSubtitle} Designed for working professionals seeking global opportunities.
            </p>

            {/* Bullet List Horizontal */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-200 mt-2">
              {data.coursesBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="uni-hero-cta justify-center mt-4">
              <a href="#lead-form" onClick={handleScroll} className="uni-btn-primary">
                Download Syllabus
              </a>
              <a href="#lead-form" onClick={handleScroll} className="uni-btn-secondary">
                Talk to Admissions
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 2. Split-Form Hero Variant (Embedded Admission Form)
  if (data.heroVariant === "split-form") {
    return (
      <section className="uni-hero uni-hero-split">
        <div className="uni-hero-container uni-hero-split-grid">
          {/* Left Text */}
          <div className="uni-hero-content">
            <div className="uni-badge">{data.badge}</div>
            <h1 className="uni-hero-title">{data.bannerTitle}</h1>
            <p className="uni-hero-subtitle">
              {data.bannerSubtitle} Designed for working professionals seeking global opportunities.
            </p>

            <div className="space-y-2 text-sm text-gray-200 mt-2">
              {data.coursesBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Small reassurance bullets */}
            <div className="flex items-center gap-4 mt-2 text-xs text-slate-300">
              <span>✓ 100% Online</span>
              <span>✓ Flexible EMI Options</span>
            </div>
          </div>

          {/* Right Lead Form Card */}
          <div className="uni-hero-split-form-card" id="lead-form">
            <FormWrapper
              title="Apply for Admission"
              subtitle="Get eligibility check & syllabus PDF"
              courseOptions={data.coursesOptions}
              formNameOverride={data.formName}
              utmSourceFallback={data.utmSourceFallback}
              utmMediumFallback={data.utmMediumFallback}
              sourceOverride={data.crmSource}
            />
          </div>
        </div>
      </section>
    );
  }

  // 3. Default Standard Hero Layout
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
