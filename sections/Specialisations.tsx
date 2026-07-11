"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import FormWrapper from "@/components/forms/FormWrapper";
import { Button } from "@/components/ui/Button";

const specialisations = [
  {
    title: "AI for Business",
    desc: " This program offers a better understanding of how artificial intelligence drives business decisions, automation, and innovation. This specialization in a 1 year online MBA enhances the leverage of  AI tools so that one can be efficient and grow strategically.",
    img: "/assets/images/AI for Business.webp",
    duration: "12",
  },
  {
    title: "Digital Finance",
    desc: " The course makes one explore digital payments, blockchain, and fintech innovations.It helps them in shaping modern finance. This specialization equips learners with skills to navigate the evolving world of financial technologies and the digital landscape.",
    img: "/assets/images/Digital Finance.webp",
  },
  {
    title: "Strategy & Leadership",
    desc: "This program develops critical thinking abilities, which help learners enhance their leadership and decision-making skills for senior roles. This specialization within an online MBA degree in one year prepares you to be a strategy driven leaders and achieve long-term business success.",
    img: "/assets/images/Strategy.webp",
  },
  {
    title: "Finance Management",
    desc: "Learners gain expertise in financial planning and different aspects such as investment analysis and risk management. This specialization in a one year online MBA prepares them for roles in sectors of banking or corporate finance and financial consulting with real-world business insights.",
    img: "/assets/images/Finance Management.webp",
  },
  {
    title: "Marketing Management",
    desc: "This program assists in strengthening the tactics of master branding and digital marketing. It helps learners to learn the consumer behaviour strategies. This 1 year MBA programs online, this specialization helps individuals drive growth, create impactful campaigns in competitive industries.",
    img: "/assets/images/Marketing Management.webp",
  },
  {
    title: "Human Resource Management",
    desc: " This online MBA degree in one year specialization develops skills in the aspects of talent acquisition, employee engagement, and organisational behaviour. This program prepares learners to manage the dynamics of a workplace and relate HR strategies to business goals.",
    img: "/assets/images/Human Resource Management.webp",
  },
  {
    title: "Operations Management",
    desc: "This operation specialization in  one year MBA programs online program focuses on optimising business operations, which strengthens the productivity and profitability. Students learn to improve their efficiency by streamlining processes and managing supply chains effectively.",
    img: "/assets/images/Operations Management.webp",
  },

  // ---------------------------

  {
    title: "Information Technology",
    desc: " This specialization in 1 year online MBA is a blend of business and technology. It promotes IT strategy and transformation in the digital world, which equips individuals to lead tech-driven initiatives in modern organisations. Overall enhances their career profile for successful future.",
    img: "/assets/images/Information Technology.webp",
  },
  {
    title: "Healthcare and Hospital Management",
    desc: "Students gain knowledge in the healthcare department, learn to manage healthcare systems and administrations, and policy management. This MBA degree in one year is ideal for professionals seeking opportunities in hospitals, healthcare firms, and administration roles.",
    img: "/assets/images/Healthcare and Hospital Management.webp",
  },
  {
    title: "Data Analytics",
    desc: "This 12 months MBA online specialization teaches students to interpret complex data. It enables them to drive business decisions using analytical tools. Overall, the program strengthens the working professionals and learners to turn data into insights that are exemplary across industries.",
    img: "/assets/images/Data Analytics.webp",
  },
  {
    title: "Business Analytics",
    desc: "This 1 year program MBA, specialization in business analytics, focuses on data-driven decision-making. It teaches learners tactics of predictive modelling and business intelligence. Overall, this program bridges the gap between data analysis and strategic business outcomes.",
    img: "/assets/images/Business Analytics.webp",
  },
  {
    title: "International Business",
    desc: "This specialization in MBA explores global markets, teaches cross-cultural management, and offers strategies needed for international marketing. Overall, this domain in 1 year MBA programs prepares learners for careers in the global business world of multinational corporations. ",
    img: "/assets/images/International Business.webp",
  },
  {
    title: "Project Management",
    desc: "This domain in 1 year executive MBA online develop expertise in accessible planning, executing, and delivering projects on time. Overall, this specialization enhances the abilities of working professionals to manage timelines and resources, which is reflected in the performance of teams.",
    img: "/assets/images/Project Management.webp",
  },
  {
    title: "Hospitality Management",
    desc: "This domain equips professionals with the knowledge of hotel operations, customer service, and management in tourism departments. This hospitality management specialization in one year MBA programs online prepares them for leadership roles in the hospitality and service industry.",
    img: "/assets/images/Hospitality Management.webp",
  },
  {
    title: "International Finance",
    desc: "This domain equips students to gain insights into global financial markets, forex management, and international investments. This online MBA 1 year course promotes high-level finance roles among professionals across borders.",
    img: "/assets/images/International Finance.webp",
  },
  {
    title: "Retail Management",
    desc: "This specialization in 1 year MBA schools offers a better understanding of retail operations. Students gain knowledge of merchandising and consumer trends. Overall, this specialization equips students to manage retail businesses and enhance customer experience in competitive markets.",
    img: "/assets/images/Retail Management.webp",
  },
  {
    title: "Logistics and Supply Chain Management",
    desc: "The Logistics and Supply Chain Management MBA program provides in-depth knowledge in logistics, procurement, and distribution networks. Overall, this domain in an MBA one year course equips learners to manage global supply chains. It ensures smooth business operations in sectors.",
    img: "/assets/images/Logistics and Supply Chain Management.webp",
  },
  {
    title: "Fintech Management",
    desc: "This program explores digital finance and blockchain. Students get in-depth knowledge of financial technologies, which is required for the present-day transforming industry. Overall, 1 year executive MBA specialization enhances the opportunity  for innovative roles in fintech startups.",
    img: "/assets/images/Fintech Management.webp",
  },
  {
    title: "Banking and Finance Management",
    desc: "This specialization of MBA online learning in 1 year builds expertise in banking systems, credit management, and financial services. It prepares students for promising careers in banking and financial institutions and organisations.",
    img: "/assets/images/Logistics and Supply Chain Management.webp",
  },
  {
    title: "General Management",
    desc: "Learners build a strong foundation in leadership, strategy, and decision-making with this specialization. It domain is ideal for professionals pursuing a one year online MBA as it equips them with versatile skills to manage teams, operations, and business growth effectively.",
    img: "/assets/images/Fintech Management.webp",
  },
];

// ✅ duplicate for infinite
const loopedData = [...specialisations, ...specialisations];

export function Specialisations() {
  const total = specialisations.length;
  const [applyOpen, setApplyopen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(total);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getCardWidth = () => {
    return window.innerWidth < 768 ? 300 : 340;
  };

  const scrollTo = useCallback((idx: number, smooth = true) => {
    if (!scrollRef.current) return;

    const gap = 32;
    const scrollAmount = idx * (getCardWidth() + gap);

    scrollRef.current.scrollTo({
      left: scrollAmount,
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  const scrollNext = useCallback(() => {
    const next = activeIdx + 1;
    scrollTo(next);
    setActiveIdx(next);
  }, [activeIdx, scrollTo]);

  const scrollPrev = useCallback(() => {
    const prev = activeIdx - 1;
    scrollTo(prev);
    setActiveIdx(prev);
  }, [activeIdx, scrollTo]);

  // ✅ INITIAL POSITION
  useEffect(() => {
    if (!scrollRef.current) return;

    const gap = 32;
    scrollRef.current.scrollLeft = total * (getCardWidth() + gap);
  }, [total]);

  // ✅ INFINITE LOOP FIX (NO NESTED HOOK)
  useEffect(() => {
    if (!scrollRef.current) return;

    const gap = 32;
    const resetPosition = total * (getCardWidth() + gap);

    // 👉 END SIDE
    if (activeIdx >= total * 2 - 2) {
      setTimeout(() => {
        if (!scrollRef.current) return;

        scrollRef.current.style.scrollBehavior = "auto";
        scrollRef.current.scrollLeft = resetPosition;

        setActiveIdx(total);

        requestAnimationFrame(() => {
          if (scrollRef.current) {
            scrollRef.current.style.scrollBehavior = "smooth";
          }
        });
      }, 300);
    }

    // 👉 START SIDE
    if (activeIdx <= 1) {
      setTimeout(() => {
        if (!scrollRef.current) return;

        scrollRef.current.style.scrollBehavior = "auto";
        scrollRef.current.scrollLeft = resetPosition;

        setActiveIdx(total);

        requestAnimationFrame(() => {
          if (scrollRef.current) {
            scrollRef.current.style.scrollBehavior = "smooth";
          }
        });
      }, 300);
    }
  }, [activeIdx, total]);

  // ✅ AUTO SCROLL (BEST VERSION)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => {
        const next = prev + 1;
        scrollTo(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollTo]);

  return (
    <>
      <section id="specialization">
        <Container>
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 uppercase">
              Top In-Demand Specializations of One Year Online MBA
            </h2>
          </div>

          {/* Slider */}
          <div className="relative overflow-visible">
            {/* LEFT BUTTON */}
            <button
              onClick={scrollPrev}
              className="absolute cursor-pointer -left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 bg-white/5 border border-gray-200 shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:scale-110 transition z-20"
            >
              <ChevronLeft size={24} />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={scrollNext}
              className="absolute cursor-pointer -right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 bg-white/5 border border-gray-200 shadow-lg w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:scale-110 transition z-20"
            >
              <ChevronRight size={24} />
            </button>

            {/* SCROLL AREA */}
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto no-scrollbar px-2"
            >
              <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* ✅ USE loopedData */}
              {loopedData.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-75 md:min-w-85 max-w-85 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col  hover:-translate-y-2 transition duration-300"
                >
                  {/* IMAGE */}
                  <div className="relative h-44 w-full">
                    <Image
                      src={getAssetPath(item.img)}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 340px"
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col h-full">
                    {" "}
                    {/* TITLE */}
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 min-h-auto">
                      {item.title}
                    </h3>
                    {/* DESC FIX HEIGHT */}
                    <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                    {/* DURATION (FIX POSITION) */}
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <Clock size={16} className="text-[#1C3569]" />
                      <span className="font-medium">
                        {item.duration
                          ? `${item.duration} Months`
                          : "12 Months"}
                      </span>
                    </div>
                    {/* BUTTON ALWAYS BOTTOM */}
                    <Button
                      className="mt-auto bg-[#1C3569] text-white px-6 py-4.5 rounded-full cursor-pointer"
                      onClick={() => setApplyopen(true)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ PAGINATION FIXED */}
          <div className="flex justify-center mt-6 gap-2">
            {specialisations.map((_, i) => {
              const current = activeIdx % total;

              return (
                <button
                  key={i}
                  onClick={() => {
                    const newIndex = i + total;
                    scrollTo(newIndex);
                    setActiveIdx(newIndex); // ✅ FIX
                  }}
                  className={`w-1 h-1 rounded-full ${
                    i === current ? "bg-blue-900 scale-125" : "bg-gray-300"
                  }`}
                />
              );
            })}
          </div>
        </Container>
      </section>
      {applyOpen && (
        <div
          onClick={() => setApplyopen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-xl shadow-2xl relative p-6 animate-[scaleIn_0.2s_ease]"
          >
            {/* FORM */}
            <FormWrapper
              title="Apply Now"
              subtitle="Start your application journey today"
              onClose={() => setApplyopen(false)} // ✅ close handled here
            />
          </div>
        </div>
      )}
    </>
  );
}
