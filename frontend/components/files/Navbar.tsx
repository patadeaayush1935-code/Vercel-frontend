"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-navy rounded-sm flex items-center justify-center">
            <span className="text-saffron font-bold text-sm font-display">R</span>
          </div>
          <span className="font-display text-lg text-navy font-semibold tracking-tight">
            RozGaar<span className="text-saffron">Setu</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Find Work", "Hire Talent", "How It Works", "About"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm text-slate font-body tracking-wide hover:text-navy transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="text-sm text-navy font-body font-medium px-4 py-2 hover:text-saffron transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="text-sm bg-navy text-white font-body font-medium px-5 py-2 rounded-sm hover:bg-saffron transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {["Find Work", "Hire Talent", "How It Works", "About"].map((item) => (
            <Link key={item} href="#" className="text-sm text-slate font-body">
              {item}
            </Link>
          ))}
          <Link href="#" className="text-sm bg-navy text-white font-body font-medium px-5 py-2 rounded-sm text-center">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
