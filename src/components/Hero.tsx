"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80"
          alt="Spa natural atmosphere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/95 via-cream-50/80 to-cream-50/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          {/* Decorative line */}
          <div className="h-[1px] bg-gold-accent mb-8 animate-[growWidth_0.8s_ease-out_0.2s_both]" />

          <p className="text-sm tracking-[0.3em] uppercase text-gold-accent font-sans font-medium mb-4 animate-[fadeUp_0.6s_ease-out_0.3s_both]">
            Salon Premium · Sibiu
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-navy-900 leading-[1.1] mb-6 animate-[fadeUp_0.7s_ease-out_0.4s_both]">
            Frumusețea ta,
            <br />
            <span className="italic font-light">îngrijită cu artă</span>
          </h1>

          <p className="text-lg text-navy-600 font-sans font-light leading-relaxed mb-10 max-w-lg animate-[fadeUp_0.6s_ease-out_0.6s_both]">
            Tratamente faciale premium · Stilizare Sprâncene · Wellness · Sibiu
          </p>

          <div className="flex flex-wrap gap-4 animate-[fadeUp_0.6s_ease-out_0.8s_both]">
            <a
              href="https://georgiabeautyhouse.setmore.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-navy-800 text-white font-sans font-medium text-sm tracking-wide rounded-full hover:bg-navy-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Rezervă o Programare
            </a>
            <a
              href="#servicii"
              className="px-8 py-3.5 border border-navy-800 text-navy-800 font-sans font-medium text-sm tracking-wide rounded-full hover:bg-navy-800 hover:text-white transition-all duration-300"
            >
              Descoperă Serviciile
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#despre-strip"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-navy-600 animate-[fadeUp_0.5s_ease-out_1.2s_both]"
      >
        <span className="text-xs tracking-[0.2em] uppercase font-sans">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
