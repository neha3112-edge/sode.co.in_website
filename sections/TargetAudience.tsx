"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";
import FormWrapper from "@/components/ui/FormWrapper";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const audiences = [
  {
    img: "/assets/images/fresh-graduate-69c2858302fb4.webp",
    title: "FRESH GRADUATES",
    desc: "Graduates are getting an opportunity to start careers quickly with a 1 year online MBA, gaining essential business skills and exposure.",
  },
  {
    img: "/assets/images/working-professional-69c285821c9b2.webp",
    title: "WORKING PROFESSIONALS",
    desc: "Professionals can now advance their careers without breaks through a flexible one year online MBA, which extends growth in their careers.",
  },
  {
    img: "/assets/images/career-switchers-69c28581e81e6.webp",
    title: "CAREER SWITCHERS",
    desc: "Individuals planning a transition can switch into new roles confidently with an online MBA degree in one year and industry-ready skills.",
  },
];

export function TargetAudience() {
  const [counsellingOpen, setCounsellingOpen] = useState(false);
  const [triggered, setTriggered] = useState(false); // ✅ prevent multiple triggers

  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 300);
  };

  const onClick = () => {
    setCounsellingOpen(true);
    fireConfetti();
  };

  // ✅ SCROLL TRIGGER
  useEffect(() => {
    const handleScroll = () => {
      if (triggered) return;

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent > 45) {
        setCounsellingOpen(true);
        fireConfetti();
        setTriggered(true); // ✅ stop future triggers
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggered]);

  return (
    <>
      <section className="py-16 md:py-24 bg-[#0970B8] text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
              WHO IS THIS PROGRAM FOR?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {audiences.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl overflow-hidden text-center flex flex-col items-center pb-6"
              >
                <div className="relative h-44 sm:h-52 w-full mb-6">
                  <Image
                    src={getAssetPath(item.img)}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <p className="text-lg md:text-[16px] text-white bg-[#1C3569] px-6 py-2 rounded-full transform -translate-y-12 shadow-lg -mb-6 whitespace-nowrap uppercase tracking-wider">
                  {item.title}
                </p>

                <p className="text-black text-sm px-6 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="text-center mt-6">
            <button
              onClick={onClick}
              className="group relative bg-[#FFC107] text-black font-bold px-6 py-3 rounded-md 
              shadow-[0_0_20px_rgba(255,187,0,0.4)] 
              flex items-center gap-3 mx-auto capitalize
              transition-all duration-300 hover:scale-105 
              hover:shadow-[0_0_30px_rgba(255,187,0,0.6)] 
              overflow-hidden cursor-pointer"
            >
              <span className="animate-glass-shine" />

              <span className="relative z-10">Get scholarship coupon code</span>

              <Image
                src={getAssetPath("/assets/images/unnamed (1).gif")}
                alt="loading"
                width={40}
                height={40}
                className="relative z-10 object-contain bg-yellow-500 rounded-2xl"
              />
            </button>
          </div>
        </Container>
      </section>

      {/* MODAL */}
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
              title="Get Scholarship Coupon Code"
              subtitle="Unlock exclusive discounts for your program"
              onClose={() => setCounsellingOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
