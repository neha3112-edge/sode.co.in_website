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
    href: "#main-courses",
  },
  {
    label: "Approvals",
    href: "#accreditations",
  },
  {
    label: "About",
    href: "#about",
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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#eeeeee] bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/ggu"
            aria-label="Go to GGU home page"
            className="flex shrink-0 items-center"
          >
            <Image
              src={getAssetPath("/ggu/assets/img/new_sode_tm_logo.png")}
              alt="SODE logo"
              width={56}
              height={56}
              priority
              className="h-14 w-14 cursor-pointer object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-[38px] lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-3 text-[16px] font-bold leading-none tracking-[0.01em] text-[#172033] transition-colors duration-300 ease-in-out hover:text-[#ee5105]"
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
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[#102441] text-white transition-colors duration-300 ease-in-out hover:bg-[#ee5105] lg:hidden"
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-gray-200 bg-white transition-all duration-300 ease-in-out lg:hidden ${
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
                className="rounded-md px-4 py-3 text-center text-[15px] font-semibold text-[#172033] transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-[#ee5105]"
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
