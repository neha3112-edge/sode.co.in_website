"use client";

import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function BottomCTA({ onApply }: { onApply: () => void }) {
  const handleWhatsApp = () => {
    const phone = "917065777755"; // ✅ without +

    const message = encodeURIComponent(
      "I want to download the 1-Year Online MBA Degree brochure",
    );

    const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-0  left-0 w-full z-50 flex items-center md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.2)] bg-none rounded-2xl">
      {/* WHATSAPP */}
      <button
        onClick={handleWhatsApp}
        className="flex-1 bg-[#25D366] text-white py-3 font-semibold flex items-center justify-center gap-2 rounded-tl-2xl"
      >
        <FaWhatsapp size={18} />
        Get Brochure
      </button>

      {/* APPLY (FORM OPEN) */}
      <button
        onClick={onApply}
        className="flex-1 bg-[#FFC107] text-black py-3 font-semibold flex items-center justify-center gap-2 rounded-tr-2xl group"
      >
        Apply Now
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}
