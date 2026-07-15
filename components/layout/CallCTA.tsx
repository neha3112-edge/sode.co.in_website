"use client";

import { Phone } from "lucide-react";

export default function CallCTA() {
  const phoneNumber = "+917065777755";

  return (
    <a
      href={`tel:${phoneNumber}`}
      aria-label="Call SODE counsellor"
      title="Call Now"
      className="
        relative
        flex h-14 w-14 shrink-0
        items-center justify-center
        rounded-full
        bg-blue-400
        text-white
        mb-2
      "
    >
      <Phone size={26} />
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 -z-10
        "
      />
    </a>
  );
}
