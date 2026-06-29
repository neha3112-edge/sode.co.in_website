"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper from "@/components/ui/FormWrapper";
import { useState } from "react";
import GlobalDialog from "@/components/ui/GlobalDialog";
import DisclaimerContent from "@/components/ui/DisclaimerContent";
import PrivacyContent from "@/components/ui/PrivacyContent";
import TermsContent from "@/components/ui/TermsContent";

export function Footer() {
  const [expertOpen, setExpertOpen] = useState(false)

  const [activeDialog, setActiveDialog] = useState<
    null | "disclaimer" | "terms" | "privacy"
  >(null);

  return (
    <footer>
      {/* CTA */}
      <div className="bg-dark-blue py-8 pb-20 md:pb-6 border-t-8 border-dark-blue/80">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">
                Need clarification?
              </h3>
              <p className="text-gray-300 text-sm">
                Interact with experts, Get free consultation.
              </p>
            </div>
            <Button
              onClick={() => setExpertOpen(true)}
              variant="outline"
              className="gap-2 px-8 rounded-full bg-white text-dark-blue border-white hover:bg-gray-100 uppercase font-bold text-sm shadow-md cursor-pointer"
            >
              Talk to experts
            </Button>
          </div>
        </Container>
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