"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function SimpleMenubar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/qubeso-logo-transparent.png"
              alt="Qubeso Tech"
              width={480}
              height={128}
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-base font-semibold text-gray-700 hover:text-brand-primary transition-colors duration-200 tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-7 py-2.5 bg-brand-primary text-white text-base font-semibold rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-gray-700 hover:text-brand-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-5 border-t border-gray-200 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block py-3 px-2 text-base font-semibold text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-3 px-6 py-3 bg-brand-primary text-white text-base font-semibold rounded-xl hover:bg-brand-hover transition-colors text-center shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
