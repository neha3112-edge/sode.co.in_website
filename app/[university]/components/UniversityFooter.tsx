"use client";

import { useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import GlobalDialog from "@/components/layout/GlobalDialog";
import DisclaimerContent from "@/components/legal/DisclaimerContent";
import PrivacyContent from "@/components/legal/PrivacyContent";
import TermsContent from "@/components/legal/TermsContent";
import { UniversityData } from "@/lib/universities-data";

export default function UniversityFooter({ data }: { data: UniversityData }) {
  const [activeDialog, setActiveDialog] = useState<null | "disclaimer" | "terms" | "privacy">(null);

  return (
    <footer className="uni-footer">
      <div className="uni-footer-container">
        {/* Info */}
        <div className="uni-footer-logo-desc">
          <Image
            src={getAssetPath(data.logo)}
            alt={`${data.name} Logo`}
            width={150}
            height={50}
            style={{ height: "auto" }}
            className="uni-footer-logo-img"
          />
          <p className="uni-footer-tagline">
            SODE Counseling Services LLP is an educational counseling partner assisting
            aspirants in enrollment processes for online programs offered by top-tier universities.
          </p>
        </div>

        {/* Legal Links */}
        <div className="uni-footer-legal-links">
          <button
            onClick={() => setActiveDialog("disclaimer")}
            className="uni-footer-legal-link"
          >
            Disclaimer
          </button>
          <span className="text-gray-600">|</span>
          <button
            onClick={() => setActiveDialog("privacy")}
            className="uni-footer-legal-link"
          >
            Privacy Policy
          </button>
          <span className="text-gray-600">|</span>
          <button
            onClick={() => setActiveDialog("terms")}
            className="uni-footer-legal-link"
          >
            Terms &amp; Conditions
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="uni-footer-copyright">
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
