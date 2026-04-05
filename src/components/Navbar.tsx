"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#servicii", label: "Servicii" },
  { href: "#despre", label: "Despre" },
  { href: "#recenzii", label: "Recenzii" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-50/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-semibold text-navy-800 tracking-wide">
              GEORGIA
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-navy-600 font-sans font-light">
              Beauty House
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-sans font-medium text-navy-700 hover:text-gold-accent transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://georgiabeautyhouse.setmore.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-2.5 bg-navy-800 text-white text-sm font-sans font-medium tracking-wide rounded-full hover:bg-navy-700 transition-all duration-300 hover:shadow-lg"
            >
              Rezervă Acum
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-navy-800"
            aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream-50 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-serif text-3xl text-navy-800 hover:text-gold-accent transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://georgiabeautyhouse.setmore.com/book"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-8 py-3 bg-navy-800 text-white font-sans font-medium tracking-wide rounded-full"
        >
          Rezervă Acum
        </a>
      </div>
    </>
  );
}
