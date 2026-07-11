"use client";

import { useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import GlobalDialog from "@/components/layout/GlobalDialog";
import DisclaimerContent from "@/components/legal/DisclaimerContent";
import PrivacyContent from "@/components/legal/PrivacyContent";
import TermsContent from "@/components/legal/TermsContent";

export default function IIITBFooter() {
  const [activeDialog, setActiveDialog] = useState<null | "disclaimer" | "terms" | "privacy">(null);

  return (
    <footer className="iiitb-footer">
      <div className="iiitb-footer-container">
        {/* Info */}
        <div className="iiitb-footer-logo-desc">
          <Image
            src={getAssetPath("/assets/images/iiitb-logo.jpg")}
            alt="IIIT Bangalore Logo"
            width={150}
            height={50}
            style={{ height: "auto" }}
            className="iiitb-footer-logo-img"
          />
          <p className="iiitb-footer-tagline">
            SODE Counseling Services LLP is an educational counseling partner assisting
            aspirants in enrollment processes for online programs offered by top-tier universities.
          </p>
        </div>

        {/* Legal Links */}
        <div className="iiitb-footer-legal-links">
          <button
            onClick={() => setActiveDialog("disclaimer")}
            className="iiitb-footer-legal-link bg-transparent border-none cursor-pointer"
          >
            Disclaimer
          </button>
          <span className="text-gray-600">|</span>
          <button
            onClick={() => setActiveDialog("privacy")}
            className="iiitb-footer-legal-link bg-transparent border-none cursor-pointer"
          >
            Privacy Policy
          </button>
          <span className="text-gray-600">|</span>
          <button
            onClick={() => setActiveDialog("terms")}
            className="iiitb-footer-legal-link bg-transparent border-none cursor-pointer"
          >
            Terms &amp; Conditions
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="iiitb-footer-copyright">
        Copyright © 2026 SODE Counseling Services LLP | All Rights Reserved
      </div>

      {/* LEGAL DIALOGS */}
      <GlobalDialog open={activeDialog !== null} setOpen={() => setActiveDialog(null)}>
        <div className="space-y-4 max-h-auto overflow-y-auto text-black">
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
