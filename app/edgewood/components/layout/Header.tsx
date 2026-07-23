"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

const navItems = [
  {
    label: "Courses",
    href: "#courses",
  },
  {
    label: "Approvals",
    href: "#accreditation",
  },
  {
    label: "About",
    href: "#about-section",
  },
  {
    label: "FAQ",
    href: "#faqs",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to home page"
            className="flex shrink-0 items-center"
          >
            <Image
              src={getAssetPath("/edgewood/assets/img/new_sode_tm_logo.png")}
              alt="SODE logo"
              width={160}
              height={50}
              priority
              className="h-[50px] w-[160px] object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-9 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-3 text-[14px] font-bold tracking-[0.01em] text-[#172033] transition-colors duration-200 hover:text-[#c9230c]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((previousValue) => !previousValue)}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[#102441] text-white transition-colors duration-200 hover:bg-[#c9230c] lg:hidden"
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-gray-200 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[400px] border-t opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <Container>
          <nav aria-label="Mobile navigation" className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-md px-4 py-3 text-center text-[13px] font-bold text-[#172033] transition-colors duration-200 hover:bg-gray-100 hover:text-[#c9230c]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
