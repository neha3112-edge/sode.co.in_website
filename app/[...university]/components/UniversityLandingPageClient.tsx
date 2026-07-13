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

      {/* Accreditations & Approvals */}
      <UniversityApprovals data={data} />

      {/* Courses Offered */}
      <UniversityCourses
        data={data}
        onOpenBrochure={handleOpenBrochure}
        onOpenEnquire={() => setIsEnquireOpen(true)}
      />

      {/* Why Choose Section */}
      <UniversityWhyChoose data={data} />

      {/* Midscroll Trigger for Gift Popup */}
      <div id="midScrollTrigger" ref={midScrollRef} style={{ height: "1px" }}></div>

      {/* Achievements / Stats banner */}
      <UniversityStats data={data} />

      {/* About Section */}
      <UniversityAbout
        data={data}
        onOpenBrochure={handleOpenBrochure}
        onOpenEnquire={() => setIsEnquireOpen(true)}
      />

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
