"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useBooking } from "../context/BookingContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Prices", href: "/prices" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useBooking();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-700 text-white text-sm py-2 px-6 flex justify-between items-center">
        <span>📍 Koforidua, Eastern Region, Ghana</span>
        <a
          href="tel:+233XXXXXXXXX"
          className="flex items-center gap-1 hover:text-blue-200"
        >
          <Phone size={14} />
          +233 XX XXX XXXX
        </a>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-700 text-white font-bold text-xl px-3 py-1 rounded-lg">
            ZL
          </div>
          <div>
            <p className="font-bold text-blue-700 text-lg leading-tight">
              Zeal Laundry
            </p>
            <p className="text-xs text-gray-500">Service</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button - Desktop */}
        <button
          onClick={openModal}
          className="hidden md:block bg-blue-700 text-white px-5 py-2 
          rounded-full font-semibold hover:bg-blue-800 transition-colors"
        >
          Book Now
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6">
          <ul className="flex flex-col gap-4 mt-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-700 font-medium 
                  text-lg block py-1 border-b border-gray-100"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/233XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block bg-blue-700 text-white text-center 
            px-5 py-3 rounded-full font-semibold hover:bg-blue-800"
          >
            Book Now on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
