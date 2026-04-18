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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/qubeso-logo-transparent.png"
              alt="Qubeso Tech"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-700 hover:text-brand-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-hover transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block py-2 text-gray-700 hover:text-brand-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-hover transition-colors text-center"
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
