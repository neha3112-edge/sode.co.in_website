"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      href: "#hero-section",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Approvals",
      href: "#approvals",
    },
    {
      label: "Why Choose",
      href: "#why-choose",
    },
    {
      label: "FAQs",
      href: "#faqs",
    },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <Container>
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <a
            href="/iim-udaipur/chief-data-and-AI-officer-programme"
            aria-label="Go to home page"
            className="flex shrink-0 items-center"
          >
            <Image
              src={getAssetPath("/assets/images/new_sode_tm_logo.png")}
              alt="SODE logo"
              width={50}
              height={50}
              priority
              className="h-16 w-16 cursor-pointer object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 text-[16px] text-black lg:flex"
          >
            {navItems.map((item, index) => {
              return (
                <div key={item.label} className="flex items-center">
                  <a
                    href={item.href}
                    className="px-3 py-2 transition-colors duration-200 hover:text-[#056493] font-semibold text-sm"
                  >
                    {item.label}
                  </a>

                  {index !== navItems.length - 1 && (
                    <span aria-hidden="true" className="text-gray-300">
                      |
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            className="flex items-center justify-center rounded-md bg-primary p-2 text-white transition-all duration-300 lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${isMenuOpen ? "max-h-125 border-t border-gray-200" : "max-h-0"
          }`}
      >
        <Container>
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col space-y-2 py-4 text-sm font-semibold text-gray-700"
          >
            {navItems.map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-4 py-3 text-center transition-colors duration-200 hover:bg-gray-100 hover:text-[#056493]"
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </Container>
      </div>
    </header>
  );
}
