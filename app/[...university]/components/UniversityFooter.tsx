"use client";

import { useState } from "react";
import { EnrichedUniversityData } from "@/lib/universities-data";
import GlobalDialog from "@/components/layout/GlobalDialog";
import DisclaimerContent from "@/components/legal/DisclaimerContent";
import PrivacyContent from "@/components/legal/PrivacyContent";
import TermsContent from "@/components/legal/TermsContent";

export default function UniversityFooter({ data }: { data: EnrichedUniversityData }) {
  const [activeDialog, setActiveDialog] = useState<null | "disclaimer" | "terms" | "privacy">(null);

  const cleanId = data.id.toLowerCase();
  const logoPath = `/${cleanId}/assets/img/new-des-logo.webp`;

  return (
    <footer className="mini-footer text-slate-400">
      <div className="footer_sode_logo_container">
        <img
          className="footer_sode_logo"
          src={logoPath}
          alt="Distance Education School"
        />
      </div>
      <br />
      <div className="row">
        <div className="col-md-12" id="footer-bottom-bar">
          <p>
            SODE Counselling Services LLP act as a marketing agency. All university names, logos,
            and trademarks mentioned are used for informational purposes only. We are not a
            university or an admission authority. Users are encouraged to verify information on the
            official website of the University before making decisions.
            <br />
            <br />
            <span
              id="openDisclaimerBtn"
              className="disclaimer_popup cursor-pointer hover:text-white"
              onClick={() => setActiveDialog("disclaimer")}
            >
              Disclaimer
            </span>{" "}
            |{" "}
            <span className="cursor-pointer hover:text-white" onClick={() => setActiveDialog("terms")}>
              Terms &amp; Conditions
            </span>{" "}
            |{" "}
            <span className="cursor-pointer hover:text-white" onClick={() => setActiveDialog("privacy")}>
              Privacy Policy
            </span>
          </p>
        </div>
      </div>

      <div className="mini-footer-bottom mt-4">
        © 2026 SODE Counseling Services LLP
      </div>

      {/* LEGAL DIALOGS */}
      <GlobalDialog open={activeDialog !== null} setOpen={() => setActiveDialog(null)}>
        <div className="space-y-4 max-h-[80vh] overflow-y-auto text-black p-4">
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
