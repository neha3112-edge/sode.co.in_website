"use client";

import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/utils";

export default function IIITBHeader() {
  return (
    <header className="iiitb-header">
      <div className="iiitb-header-container">
        {/* LOGOS */}
        <div className="iiitb-logo-container">
          <Link href="/" className="flex items-center">
            <Image
              src={getAssetPath("/assets/images/new_sode_tm_logo.png")}
              alt="SODE Logo"
              width={40}
              height={40}
              style={{ height: "auto" }}
              priority
              className="iiitb-logo-img"
            />
          </Link>
          <span className="text-gray-300 text-lg font-light">|</span>
          <Image
            src={getAssetPath("/assets/images/iiitb-logo.jpg")}
            alt="IIIT Bangalore Logo"
            width={120}
            height={40}
            style={{ height: "auto" }}
            priority
            className="iiitb-logo-img"
          />
        </div>

        {/* APPLY BUTTON */}
        <a href="#lead-form" className="iiitb-nav-link">
          Apply Now
        </a>
      </div>
    </header>
  );
}
