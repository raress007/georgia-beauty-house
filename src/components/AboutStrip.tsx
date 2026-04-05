"use client";

import FadeIn from "./FadeIn";

export default function AboutStrip() {
  return (
    <section id="despre-strip" className="py-20 bg-navy-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="flex justify-center mb-6">
            <div className="w-8 h-[1px] bg-gold-accent" />
            <div className="w-2 h-2 rounded-full bg-gold-accent mx-3 -mt-[3px]" />
            <div className="w-8 h-[1px] bg-gold-accent" />
          </div>
          <p className="font-serif text-2xl md:text-3xl text-cream-100 leading-relaxed font-light italic">
            &ldquo;Îmbinăm știința dermatologică cu ritualuri de îngrijire autentice,
            pentru o piele sănătoasă și o stare de bine reală.&rdquo;
          </p>
          <p className="mt-6 text-sm tracking-[0.2em] uppercase text-gold-accent font-sans">
            Partener Bioline Jatò
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
