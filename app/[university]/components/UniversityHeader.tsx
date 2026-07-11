"use client";

import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/utils";
import { UniversityData } from "@/lib/universities-data";

export default function UniversityHeader({ data }: { data: UniversityData }) {
  return (
    <header className="uni-header">
      <div className="uni-header-container">
        {/* LOGOS */}
        <div className="uni-logo-container">
          <Link href="/" className="flex items-center">
            <Image
              src={getAssetPath("/assets/images/new_sode_tm_logo.png")}
              alt="SODE Logo"
              width={40}
              height={40}
              style={{ height: "auto" }}
              priority
              className="uni-logo-img"
            />
          </Link>
          <span className="text-gray-300 text-lg font-light">|</span>
          <Image
            src={getAssetPath(data.logo)}
            alt={`${data.name} Logo`}
            width={120}
            height={40}
            style={{ height: "auto" }}
            priority
            className="uni-logo-img"
          />
        </div>

        {/* APPLY BUTTON */}
        <a href="#lead-form" className="uni-nav-link">
          Apply Now
        </a>
      </div>
    </header>
  );
}
