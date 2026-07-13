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
    href: "#courses",
  },
  {
    label: "Approvals",
    href: "#approvals",
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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#f1f1f1] bg-white">
      {/* Main Header */}
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-6 lg:px-0">
        <div className="flex h-[70px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="Go to home page"
            className="flex shrink-0 items-center justify-center"
          >
            <Image
              src={getAssetPath("/assets/images/new_sode_tm_logo.png")}
              alt="SODE logo"
              width={58}
              height={58}
              priority
              className="h-[58px] w-[58px] object-contain"
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
                className="relative py-6 text-[16px] font-semibold leading-none tracking-[-0.1px] text-[#172033] transition-colors duration-200 hover:text-[#056493]"
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
            className="flex h-10 w-10 items-center justify-center rounded-md bg-[#102441] text-white transition-colors duration-200 hover:bg-[#056493] lg:hidden"
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
        className={`overflow-hidden bg-white transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "max-h-[350px] border-t border-[#eeeeee] opacity-100"
            : "max-h-0 border-t border-transparent opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex w-full max-w-[1140px] flex-col px-5 py-3 sm:px-6"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMobileMenu}
              className="rounded-md px-4 py-[13px] text-center text-[15px] font-semibold text-[#172033] transition-colors duration-200 hover:bg-[#f4f7f9] hover:text-[#056493]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
