"use client";

import { useState } from "react";
import { Leaf, Sparkles, Moon, Palette, Clock, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

type Service = {
  name: string;
  duration: string;
  price: string;
};

type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
  services: Service[];
};

const categories: Category[] = [
  {
    id: "consultatie",
    label: "Consultație & Analiză",
    icon: <Leaf size={18} />,
    services: [
      { name: "Rutina Personalizată", duration: "1h", price: "300" },
    ],
  },
  {
    id: "faciale",
    label: "Tratamente Faciale",
    icon: <Sparkles size={18} />,
    services: [
      { name: "24.7 NaturalBalance — Full Time Beauty", duration: "1h", price: "330" },
      { name: "Tratament Ritual EXOSOMI", duration: "1h", price: "330" },
      { name: "Dermapen", duration: "1h", price: "330" },
      { name: "Curățare Facială Profundă", duration: "1h 30min", price: "420" },
      { name: "Tratament Facial Hidratant Intens", duration: "1h", price: "390" },
      { name: "Tratament Anti-Age Personalizat", duration: "1h 30min", price: "600" },
      { name: "Tratament Detoxifiant & Reechilibrant", duration: "1h", price: "510" },
      { name: "HIFU — Lifting & Fermitate", duration: "1h", price: "1.200" },
      { name: "Primaluce Exfo&White — Peeling Cosmetic", duration: "1h", price: "390" },
      { name: "Bioline Man (tratament specific bărbați)", duration: "1h", price: "390" },
      { name: "Masaj Facial (Demachiere, Tonifiere, Masaj)", duration: "40min", price: "120" },
      { name: "Peeling Biochimic", duration: "1h", price: "330" },
    ],
  },
  {
    id: "sprancene",
    label: "Stilizare Sprâncene",
    icon: <Moon size={18} />,
    services: [
      { name: "Stilizare Prima Ședință (pensat, modelare, vopsit)", duration: "1h", price: "300" },
      { name: "Laminare Sprâncene", duration: "1h 15min", price: "330" },
      { name: "Întreținere Formă + Pensat + Vopsit (3/4 săpt)", duration: "1h", price: "255" },
      { name: "Pensat Întreținere + Epilat Mustață", duration: "30min", price: "150" },
      { name: "Pensat Stilizare + Retuș Machiaj", duration: "30min", price: "210" },
      { name: "Vopsit Sprâncene + Tratament Hidratare", duration: "30min", price: "120" },
      { name: "Pensat Bărbați (3/4 săpt)", duration: "30min", price: "150" },
    ],
  },
  {
    id: "mani-pedi",
    label: "Manichiură & Pedichiură",
    icon: <Palette size={18} />,
    services: [
      { name: "Manichiură SPA (fără lacuit)", duration: "1h", price: "120" },
      { name: "Manichiură Clasică (cu oja normală)", duration: "1h 30min", price: "126" },
      { name: "Manichiură Oja Semi", duration: "2h", price: "150" },
      { name: "Mani + Pedi Semi", duration: "4h", price: "324" },
      { name: "Mani + Pedi Clasică", duration: "2h 30min", price: "282" },
      { name: "Pedichiură SPA (fără lacuit)", duration: "1h 15min", price: "147" },
      { name: "Pedichiură Clasică (oja normală)", duration: "1h 30min", price: "156" },
      { name: "Pedichiură Oja Semi", duration: "2h", price: "174" },
    ],
  },
  {
    id: "machiaj",
    label: "Machiaj",
    icon: <Sparkles size={18} />,
    services: [
      { name: "Make-up Express", duration: "45min", price: "210" },
      { name: "Make-up Event (include gene)", duration: "1h 30min", price: "350" },
      { name: "Bridal Make-up (include gene)", duration: "1h 30min", price: "390" },
      { name: "Probă Make-up Mireasă", duration: "1h", price: "240" },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("faciale");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="servicii" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold-accent font-sans font-medium mb-3">
            Ce oferim
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 font-semibold mb-4">
            Serviciile Noastre
          </h2>
          <div className="mx-auto w-16 h-[1px] bg-gold-accent" />
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={200} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-navy-800 text-white shadow-lg"
                  : "bg-cream-100 text-navy-700 hover:bg-cream-200"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </FadeIn>

        {/* Service Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeCategory.services.map((service, i) => (
            <FadeIn key={`${activeTab}-${service.name}`} delay={i * 50}>
              <div className="group bg-white border border-cream-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-sans font-semibold text-navy-800 text-[15px] leading-snug flex-1">
                    {service.name}
                  </h3>
                  <span className="font-serif text-2xl font-semibold text-gold-accent whitespace-nowrap">
                    {service.price}
                    <span className="text-sm font-sans font-normal text-navy-600 ml-1">lei</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-navy-600/70">
                    <Clock size={14} />
                    <span>{service.duration}</span>
                  </div>
                  <a
                    href="https://georgiabeautyhouse.setmore.com/book"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-gold-accent transition-colors group-hover:text-gold-accent"
                  >
                    Rezervă
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
