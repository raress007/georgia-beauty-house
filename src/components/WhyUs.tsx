"use client";

import { Leaf, Microscope, Star, Home } from "lucide-react";
import Image from "next/image";
import FadeIn from "./FadeIn";

const pillars = [
  {
    icon: <Leaf size={28} />,
    title: "Produse Premium Bioline Jatò",
    description: "Protocol certificat european, cu ingrediente active de ultimă generație.",
  },
  {
    icon: <Microscope size={28} />,
    title: "Consultație Personalizată",
    description: "Analiză detaliată a pielii înainte de orice tratament, pentru rezultate vizibile.",
  },
  {
    icon: <Star size={28} />,
    title: "15+ ani de experiență",
    description: "Aceleași cliente care revin an de an — cea mai bună dovadă de calitate.",
  },
  {
    icon: <Home size={28} />,
    title: "Atmosferă wellness",
    description: "Un spațiu al liniștii, nu o fabrică de frumusețe. Relaxare totală.",
  },
];

export default function WhyUs() {
  return (
    <section id="despre" className="py-24 bg-cream-100 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=60"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold-accent font-sans font-medium mb-3">
            De ce noi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 font-semibold mb-4">
            De Ce Georgia Beauty House
          </h2>
          <div className="mx-auto w-16 h-[1px] bg-gold-accent" />
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 100}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-navy-800 text-cream-100 flex items-center justify-center group-hover:bg-gold-accent transition-colors duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl text-navy-800 font-semibold mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-navy-600/80 font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
