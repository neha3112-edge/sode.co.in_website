"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper from "@/components/ui/FormWrapper";
import { useState } from "react";
import GlobalDialog from "@/components/ui/GlobalDialog";
import DisclaimerContent from "@/components/ui/DisclaimerContent";
import PrivacyContent from "@/components/ui/PrivacyContent";
import TermsContent from "@/components/ui/TermsContent";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export function Footer() {
  const [expertOpen, setExpertOpen] = useState(false)

  const [activeDialog, setActiveDialog] = useState<
    null | "disclaimer" | "terms" | "privacy"
  >(null);

  return (
    <footer>
      {/* CTA */}

      <div className="bg-[#1d3557] py-8 md:py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
               <h3 className="text-2xl md:text-4xl font-extrabold text-[#f1dfa0]">Need clarification?</h3>
               <p className="text-white text-sm md:text-[18px] mt-2 font-medium">Interact with experts, Get free consultation.</p>
            </div>
            <button onClick={() => setExpertOpen(true)} className="flex items-center gap-2 px-8 py-3.5 rounded-full text-[#1d3557] font-extrabold text-base transition duration-300 shadow-md cursor-pointer bg-linear-to-r from-[#EEC471] via-[#F3CD73] to-[#FADA9A]">
              {/* Phone icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              Talk to Experts
            </button>
         </div>
      </div>
   </div>

   <div className="pt-16 pb-8 text-gray-800 border-t border-[#A66E38]/20 bg-linear-to-r from-[#EEC471] via-[#F3CD73] to-[#FADA9A]">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
         
         {/* Links Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
            
            {/* Column 1: Logo & Address (Span 4) */}
            <div className="lg:col-span-4 flex flex-col items-start">
               <Image src={getAssetPath("/assets/images/sode_footer_logo.png")} alt="SODE Logo" width={200} height={100} className="mb-6" />
               <p className="text-gray-700 text-[13px] leading-relaxed max-w-xs">
                  Unit No. 1, 3rd Floor Vardhman Trade Centre, Nehru Place, New Delhi - 110019
               </p>
            </div>

            {/* Column 2: TOP UNIVERSITIES (Span 3) */}
            <div className="lg:col-span-3">
               <h4 className="text-gray-900 font-extrabold text-[14px] uppercase tracking-wider mb-6">TOP UNIVERSITIES</h4>
               <ul className="space-y-3.5 text-[14px] font-medium text-gray-700">
                  <li><a href="#prestigious-institutions" className="hover:text-gray-900 transition-colors">Golden Gate University</a></li>
                  <li><a href="#prestigious-institutions" className="hover:text-gray-900 transition-colors">Rushford University</a></li>
                  <li><a href="#prestigious-institutions" className="hover:text-gray-900 transition-colors">ESGCI Paris</a></li>
                  <li><a href="#prestigious-institutions" className="hover:text-gray-900 transition-colors">SSBM GENEVA</a></li>
                  <li><a href="#prestigious-institutions" className="hover:text-gray-900 transition-colors">IIIT Bangalore</a></li>
                  <li><a href="#prestigious-institutions" className="hover:text-gray-900 transition-colors">Liverpool Business School</a></li>
                  <li><a href="#prestigious-institutions" className="hover:text-gray-900 transition-colors">IIM Kozhikode</a></li>
                  <li><a href="#prestigious-institutions" className="hover:text-gray-900 transition-colors">MICA</a></li>
               </ul>
            </div>

            {/* Column 3: ONLINE PROGRAMS (Span 3) */}
            <div className="lg:col-span-3">
               <h4 className="text-gray-900 font-extrabold text-[14px] uppercase tracking-wider mb-6">ONLINE PROGRAMS</h4>
               <ul className="space-y-3.5 text-[14px] font-medium text-gray-700">
                  <li><a href="#premium-programs" className="hover:text-gray-900 transition-colors">Doctorate · DBA</a></li>
                  <li><a href="#premium-programs" className="hover:text-gray-900 transition-colors">Master · MBA</a></li>
                  <li><a href="#premium-programs" className="hover:text-gray-900 transition-colors">DBA + MBA Dual</a></li>
                  <li><a href="#premium-programs" className="hover:text-gray-900 transition-colors">HR Analytics</a></li>
                  <li><a href="#premium-programs" className="hover:text-gray-900 transition-colors">Data Science &amp; AI</a></li>
                  <li><a href="#premium-programs" className="hover:text-gray-900 transition-colors">Certifications</a></li>
                  <li><a href="#premium-programs" className="hover:text-gray-900 transition-colors">Executive Programs</a></li>
               </ul>
            </div>

            {/* Column 4: GET STARTED (Span 2) */}
            <div className="lg:col-span-2">
               <h4 className="text-gray-900 font-extrabold text-[14px] uppercase tracking-wider mb-6">GET STARTED</h4>
               <ul className="space-y-3.5 text-[14px] font-medium text-gray-700">
                  <li><a href="#why-choose" className="hover:text-gray-900 transition-colors">About Us</a></li>
                  <li><a href="javascript:void(0)" onClick={() => setExpertOpen(true)} className="hover:text-gray-900 transition-colors">Contact Us</a></li>
                  <li><a href="javascript:void(0)" onClick={() => setExpertOpen(true)} className="hover:text-gray-900 transition-colors">Book Free Counseling</a></li>
                  <li><a href="#alumni-voices" className="hover:text-gray-900 transition-colors">Alumni Voices</a></li>
                  <li><a href="#faq" className="hover:text-gray-900 transition-colors">FAQs</a></li>
               </ul>
            </div>

         </div>

         {/* Bottom Copyright Bar */}
         <div className="border-t border-[#A66E38]/25 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13.5px] font-medium text-gray-700">
            <div className="order-2 md:order-1 text-center md:text-left">
               Copyright 2026 SODE Counseling Services LLP | All Rights Reserved
            </div>
            <div className="flex items-center gap-2 order-1 md:order-2">
              <a href="javascript:void(0)" onClick={() => setActiveDialog("disclaimer")} className="hover:text-gray-900 transition-colors">Disclaimer</a>
               <span>|</span>
               <a href="javascript:void(0)" onClick={() => setActiveDialog("privacy")} className="hover:text-gray-900 transition-colors">Privacy</a>
               <span>|</span>
               <a href="javascript:void(0)" onClick={() => setActiveDialog("terms")} className="hover:text-gray-900 transition-colors">Terms &amp; Condition</a>
            </div>
         </div>

      </div>
   </div>


      {/* ✅ EXPERT FORM */}

      {expertOpen && (
        <div
          onClick={() => setExpertOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          {/* BOX */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-xl shadow-2xl relative p-6 animate-[scaleIn_0.2s_ease]"
          >

            {/* FORM */}
            <FormWrapper
              title="Talk to Our Experts"
              subtitle="Get personalized guidance from our specialists"
              onClose={() => setExpertOpen(false)} // ✅ close handle
            />

          </div>
        </div>
      )}
      {/* 🔥 LEGAL MODAL */}
      <GlobalDialog
        open={activeDialog !== null}
        setOpen={() => setActiveDialog(null)}
      >
        <div className="space-y-4 max-h-auto overflow-y-auto">
          {/* ✅ USE COMPONENTS INSTEAD OF RAW TEXT */}
          {activeDialog === "disclaimer" && (
            <DisclaimerContent onClose={() => setActiveDialog(null)} />
          )}

          {activeDialog === "terms" && (
            <TermsContent onClose={() => setActiveDialog(null)} />
          )}

          {activeDialog === "privacy" && (
            <PrivacyContent onClose={() => setActiveDialog(null)} />
          )}

        </div>
      </GlobalDialog>
    </footer>
  );
}