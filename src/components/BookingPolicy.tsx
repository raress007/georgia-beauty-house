"use client";

import { Info } from "lucide-react";
import FadeIn from "./FadeIn";

export default function BookingPolicy() {
  return (
    <section className="py-12 bg-cream-100">
      <FadeIn className="max-w-4xl mx-auto px-6">
        <div className="bg-navy-800/5 border border-navy-800/10 rounded-2xl px-8 py-6 flex items-start gap-4">
          <Info size={22} className="text-gold-accent shrink-0 mt-0.5" />
          <div>
            <h3 className="font-sans font-semibold text-navy-800 text-sm mb-1">
              Politica de Rezervare
            </h3>
            <p className="text-sm text-navy-600/80 font-sans leading-relaxed">
              Confirmare cu 24h înainte. Anulare cu mai puțin de 24h — 50% din valoare.
              Neprezentare — 100% din valoare.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
