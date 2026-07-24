"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { getAssetPath } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    label: "Courses",
    href: "#whychoose",
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
    href: "#faq",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#eeeeee] bg-white">
      {/* Main Header */}
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-6 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/ssbm"
            onClick={closeMobileMenu}
            aria-label="Go to home page"
            className="flex shrink-0 items-left"
          >
            <Image
              src={getAssetPath("/ssbm/assets/img/new_sode_tm_logo.png")}
              alt="SODE logo"
              width={200}
              height={56}
              priority
              className="h-[50px] w-[160px] object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-[37px] lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-6 text-[16px] font-semibold leading-none tracking-[-0.1px] text-[#172033] transition-colors duration-300 ease-in-out hover:text-[#c11f28]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[#102441] text-white transition-colors duration-300 ease-in-out hover:bg-[#c11f28] lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-[23px] w-[23px]" strokeWidth={2.2} />
            ) : (
              <Menu className="h-[23px] w-[23px]" strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen
            ? "max-h-[400px] border-t border-gray-200 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
          }`}
      >
        <div className="mx-auto w-full max-w-[1140px] px-5 py-4">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-md px-4 py-3 text-center text-[15px] font-semibold text-[#172033] transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-[#c11f28]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
