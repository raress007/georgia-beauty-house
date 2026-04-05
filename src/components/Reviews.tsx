"use client";

import { Star, Quote } from "lucide-react";
import FadeIn from "./FadeIn";

const reviews = [
  {
    name: "Ioana",
    text: "High class, high quality service, best brows in town. Recomand cu cea mai mare încredere!",
  },
  {
    name: "Elena",
    text: "Atenția cu clientul, grija, delicatețea și calitatea serviciilor: jos pălăria!",
  },
  {
    name: "Elena",
    text: "De când mă las pensată de Georgia am renunțat complet la a mi le desena. Arată natural și perfect de fiecare dată.",
  },
  {
    name: "Ioana",
    text: "The best place to get your brows done in Sibiu. Georgia is truly an artist!",
  },
  {
    name: "Minerva",
    text: "Și Alina și Georgia sunt profesioniste și asta se simte din prima clipă. O experiență de 5 stele!",
  },
];

export default function Reviews() {
  return (
    <section id="recenzii" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold-accent font-sans font-medium mb-3">
            Recenzii
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 font-semibold mb-4">
            Ce Spun Clientele Noastre
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-gold-accent text-gold-accent" />
            ))}
          </div>
          <p className="text-navy-600 font-sans">5.0 / 5 — bazat pe recenzii reale</p>
          <div className="mx-auto w-16 h-[1px] bg-gold-accent mt-4" />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-white border border-cream-200 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300 h-full">
                <Quote size={32} className="text-cream-200 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-gold-accent text-gold-accent" />
                  ))}
                </div>
                <p className="text-navy-700 font-sans text-[15px] leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-cream-100 font-serif font-semibold text-sm">
                    {review.name[0]}
                  </div>
                  <span className="font-sans font-semibold text-navy-800 text-sm">
                    {review.name}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
