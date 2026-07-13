"use client";

import { useState } from "react";
import BottomCTA from "./BottomCTA";
import FormWrapper from "@/components/forms/FormWrapper";

export default function GlobalCTA() {
  const [applyOpen, setApplyOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <>
      {/* BOTTOM CTA */}
      <BottomCTA onApply={() => setApplyOpen(true)} />

      {/* APPLY MODAL */}
      {applyOpen && (
        <div
          onClick={() => setApplyOpen(false)}
          className="fixed inset-0 z-50  flex items-center justify-center bg-black/60 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6"
          >
            <FormWrapper
              title="Apply Now"
              onClose={() => setApplyOpen(false)}
            />
          </div>
        </div>
      )}

      {/* BROCHURE MODAL */}
      {brochureOpen && (
        <div
          onClick={() => setBrochureOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6"
          >
            <FormWrapper
              title="Download Brochure"
              onClose={() => setBrochureOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
