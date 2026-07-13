"use client";

import { useState } from "react";
import { EnrichedUniversityData } from "@/lib/universities-data";

export default function UniversityHeader({ data }: { data: EnrichedUniversityData }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoPath = `/${data.id.toLowerCase()}/assets/img/new_sode_tm_logo.png`;

  return (
    <div className="navbar">
      <div className="top-navbar">
        <div className="logo">
          <a className="des_logo" href={`/${data.id}`}>
            <img src={logoPath} style={{ maxHeight: "38px", width: "auto" }} alt="SODE Logo" />
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="header_menu">
          <ul className="header_menu_list">
            <li><a href="#main-courses">Courses</a></li>
            <li><a href={data.id.toLowerCase() === "edgewood" ? "#c-offered" : "#approvals"}>Approvals</a></li>
            <li><a href="#about-section">About</a></li>
            <li><a href="#faqs">FAQ</a></li>
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <button
          className={`mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* Mobile Dropdown Panel */}
      <div className={`mobile-dropdown ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-menu-list">
          <li>
            <a
              href="#main-courses"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("main-courses")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href={data.id.toLowerCase() === "edgewood" ? "#c-offered" : "#approvals"}
              onClick={() => {
                setMobileMenuOpen(false);
                const targetId = data.id.toLowerCase() === "edgewood" ? "c-offered" : "approvals";
                document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Approvals
            </a>
          </li>
          <li>
            <a
              href="#about-section"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("faqs")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
