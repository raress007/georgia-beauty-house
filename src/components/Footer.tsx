"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-cream-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-2xl font-semibold text-cream-100 tracking-wide">
                GEORGIA
              </span>
              <br />
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold-accent font-sans">
                Beauty House
              </span>
            </div>
            <p className="text-sm text-cream-300/70 font-sans leading-relaxed max-w-xs">
              Frumusețe autentică, îngrijire personalizată și o stare de bine reală — în inima Sibiului.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-cream-200 hover:bg-gold-accent hover:text-white transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-cream-200 hover:bg-gold-accent hover:text-white transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-cream-100 text-sm mb-5 tracking-wide uppercase">
              Linkuri Rapide
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#servicii", label: "Servicii" },
                { href: "#despre", label: "Despre Noi" },
                { href: "#recenzii", label: "Recenzii" },
                { href: "#contact", label: "Contact" },
                {
                  href: "https://georgiabeautyhouse.setmore.com/book",
                  label: "Rezervă Online",
                  external: true,
                },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-cream-300/70 hover:text-gold-accent transition-colors font-sans"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-cream-100 text-sm mb-5 tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-gold-accent shrink-0" />
                <span className="text-sm text-cream-300/70 font-sans">
                  Bihorului nr 1, sc G, ap 62, Sibiu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-accent shrink-0" />
                <a
                  href="tel:+40747637154"
                  className="text-sm text-cream-300/70 hover:text-gold-accent transition-colors font-sans"
                >
                  +40 747 637 154
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-accent shrink-0" />
                <a
                  href="mailto:georgia.gugu@gmail.com"
                  className="text-sm text-cream-300/70 hover:text-gold-accent transition-colors font-sans"
                >
                  georgia.gugu@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-300/50 font-sans">
            &copy; 2025 Georgia Beauty House. Toate drepturile rezervate.
          </p>
          <p className="text-xs text-cream-300/50 font-sans">
            Website creat cu ❤️ in Sibiu
          </p>
        </div>
      </div>
    </footer>
  );
}
