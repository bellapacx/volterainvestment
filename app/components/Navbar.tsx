// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/units", label: "Units" },
    { href: "/marketing", label: "Marketing" },
    { href: "/investment", label: "Investment" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#050404] border-b-2 border-[#FFD700] px-6 md:px-12 py-1 flex justify-between items-center relative z-50">
      {/* Logo */}
      <Link href="/">
        <div className="ml-20">
          <Image
            src="/logo.png"
            alt="Voltera Investments Logo"
            width={80} // desired width
            height={12} // keep navbar height consistent
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-[#FFD700] font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="hover:text-[#FFE066] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-[#FFD700] focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      <ul
        className={`absolute top-full left-0 w-full bg-[#050404] border-t-2 border-[#FFD700] flex flex-col md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.href} className="border-b border-[#FFD700]">
            <Link
              href={link.href}
              className="block px-6 py-4 text-[#FFD700] hover:bg-[#FFD700] hover:text-[#050404] transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
