"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Approvals", href: "#approvals" },
    { label: "Specializations", href: "#specialization" },
    { label: "About", href: "#about" },
    { label: "Why Choose?", href: "#why" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-18">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/1-year-mba/assets/images/LOGO for AD (1) (1).png"
            alt="Company Logo"
            width={70}
            height={70}
            priority
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-sm font-medium text-black">
          {navItems.map((item, index) => (
            <div key={item.label} className="flex items-center">

              {/* Home = Link, Others = anchor */}
              {item.href === "/" ? (
                <Link
                  href="/"
                  className="px-3 hover:text-black transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="px-3 hover:text-black transition-colors duration-200"
                >
                  {item.label}
                </a>
              )}

              {index !== navItems.length - 1 && (
                <span className="text-gray-500">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 bg-primary text-white rounded-md flex items-center justify-center transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
          } bg-white`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-gray-700">
          {navItems.map((item) =>
            item.href === "/" ? (
              <Link
                key={item.label}
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </div>
    </header>
  );
}