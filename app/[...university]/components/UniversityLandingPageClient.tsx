"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import confetti from "canvas-confetti";
import { EnrichedUniversityData } from "@/lib/universities-data";
import UniversityHero from "./UniversityHero";
import UniversityApprovals from "./UniversityApprovals";
import UniversityCourses from "./UniversityCourses";
import UniversityWhyChoose from "./UniversityWhyChoose";
import UniversityStats from "./UniversityStats";
import UniversityAbout from "./UniversityAbout";
import UniversityCertificate from "./UniversityCertificate";
import UniversityCTA from "./UniversityCTA";
import UniversityCompare from "./UniversityCompare";
import UniversitySteps from "./UniversitySteps";
import UniversityFaq from "./UniversityFaq";
import UniversityStickyWidgets from "./UniversityStickyWidgets";

export default function UniversityLandingPageClient({ data }: { data: EnrichedUniversityData }) {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);

  // Intersection observer for midScrollTrigger
  const midScrollRef = useRef<HTMLDivElement>(null);
  const [couponTriggered, setCouponTriggered] = useState(false);

  const triggerCouponConfetti = () => {
    setIsCouponOpen(true);
    confetti({
      particleCount: 180,
      spread: 100,
      startVelocity: 45,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FFC107", "#FFB300", "#2ecc71"],
    });
  };

  useEffect(() => {
    const trigger = midScrollRef.current;
    if (!trigger) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !couponTriggered) {
            setCouponTriggered(true);
            triggerCouponConfetti();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, [couponTriggered]);

  // Scroll percent observer for automatic popup trigger
  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;

      if (scrolledPercentage >= 50 && !couponTriggered) {
        setCouponTriggered(true);
        triggerCouponConfetti();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [couponTriggered]);

  const handleOpenBrochure = (pdfPath: string) => {
    sessionStorage.setItem("brochureUrl", pdfPath);
    setIsBrochureOpen(true);
  };

  return (
    <div className="bg-white text-black min-h-screen relative font-sans">
      {/* 3rd Party Tracking Scripts */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3PWM5FX9EB" strategy="afterInteractive" />
      <Script id="analytics-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3PWM5FX9EB');
        `}
      </Script>

      {/* Noscript fallback */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=G-3PWM5FX9EB"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* University Hero Section */}
      <UniversityHero
        data={data}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* Stats (renders immediately below hero for Edgewood) */}
      {data.id === "edgewood" && <UniversityStats data={data} />}

      {/* Accreditations & Approvals (for other universities) */}
      {data.id !== "edgewood" && <UniversityApprovals data={data} />}

      {/* Courses Offered */}
      <UniversityCourses
        data={data}
        onOpenBrochure={handleOpenBrochure}
        onOpenEnquire={() => setIsEnquireOpen(true)}
      />

      {/* Why Choose Section */}
      {data.id !== "edgewood" && <UniversityWhyChoose data={data} />}

      {/* Midscroll Trigger for Gift Popup */}
      <div id="midScrollTrigger" ref={midScrollRef} style={{ height: "1px" }}></div>

      {/* Achievements / Stats banner (for other universities) */}
      {data.id !== "edgewood" && <UniversityStats data={data} />}

      {/* About Section */}
      <UniversityAbout
        data={data}
        onOpenBrochure={handleOpenBrochure}
        onOpenEnquire={() => setIsEnquireOpen(true)}
      />

      {/* Accreditations & Approvals (for Edgewood, approvals is after About) */}
      {data.id === "edgewood" && <UniversityApprovals data={data} />}

      {/* Specialisations */}
      {data.specialisations && (
        <section className="specialisation-section" id="specializations">
          <div className="header">
            <h2>Specializations of {data.name}</h2>
          </div>
          <div className="spec-container">
            {data.specialisations.map((spec, idx) => (
              <div className="spec-card" key={idx}>
                <div
                  className="card-image"
                  style={{ backgroundImage: `url('${spec.image}')` }}
                ></div>
                <div className="card-content">
                  <h3>{spec.title}</h3>
                  <p className="description">{spec.desc}</p>
                  <button className="apply-btn-border enquireNowBtn" onClick={() => setIsEnquireOpen(true)}>
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Learning Outcomes */}
      {data.outcomesList && (
        <section id="learning-section" className="learning-outcomes">
          <div className="outcomes-header">
            <h2>LEARNING OUTCOMES OF</h2>
            <div className="line-title">
              <span>{data.name}</span>
            </div>
          </div>
          <div className="outcomes-grid">
            {data.outcomesList.map((outcome, idx) => (
              <div className="outcome-item" key={idx}>
                <div className="icon-circle">
                  <img src={outcome.image || "/edgewood/assets/img/learning-outcome-edgewood-icon.webp"} alt="Icon" />
                </div>
                <div className="outcome-text">
                  <h3>{outcome.title}</h3>
                  <p>{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certificate Showcase */}
      <UniversityCertificate
        data={data}
        onOpenEnquire={() => setIsEnquireOpen(true)}
      />

      {/* How to Apply steps */}
      <UniversitySteps data={data} />

      {/* FAQ block */}
      <UniversityFaq data={data} />

      {/* CTA Strip */}
      <UniversityCTA
        data={data}
        onOpenEnquire={() => setIsEnquireOpen(true)}
      />

      {/* Confused / Compare Trigger strip */}
      <UniversityCompare
        data={data}
        onOpenCompare={() => setIsCompareOpen(true)}
      />

      {/* Lead forms overlay dialogs and WhatsApp/Call Sticky buttons */}
      <UniversityStickyWidgets
        data={data}
        isEnquireOpen={isEnquireOpen}
        setIsEnquireOpen={setIsEnquireOpen}
        isBrochureOpen={isBrochureOpen}
        setIsBrochureOpen={setIsBrochureOpen}
        isCompareOpen={isCompareOpen}
        setIsCompareOpen={setIsCompareOpen}
        isCouponOpen={isCouponOpen}
        setIsCouponOpen={setIsCouponOpen}
        triggerCouponConfetti={triggerCouponConfetti}
      />
    </div>
  );
}
