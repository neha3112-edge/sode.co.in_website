"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Course",
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
    label: "Why IIT-KGP?",
    href: "#why-iit-kgp",
  },
  {
    label: "FAQ",
    href: "#faq",
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
        <div className="flex h-[84px] items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            aria-label="Go to home section"
            onClick={handleNavClick}
            className="flex shrink-0 items-center"
          >
            <Image
              src={getAssetPath("/assets/images/new_sode_tm_logo.png")}
              alt="SODE logo"
              width={76}
              height={76}
              priority
              className="h-[72px] w-[72px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-[46px] lg:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[18px] font-semibold leading-none tracking-[-0.01em] text-black transition-colors duration-200 hover:text-[#056493]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => {
              setIsMenuOpen((previousValue) => !previousValue);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-md bg-[#102441] text-white transition-colors duration-200 hover:bg-[#056493] lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "max-h-[500px] border-t border-gray-200 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <Container>
          <nav aria-label="Mobile navigation" className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-md px-4 py-3 text-center text-[16px] font-semibold text-black transition-colors duration-200 hover:bg-gray-100 hover:text-[#056493]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
