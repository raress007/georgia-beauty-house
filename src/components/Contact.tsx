"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FadeIn from "./FadeIn";

const schedule = [
  { day: "Luni", hours: "10:00 – 19:00" },
  { day: "Marți", hours: "09:00 – 19:00" },
  { day: "Miercuri", hours: "09:00 – 19:00" },
  { day: "Joi", hours: "09:00 – 19:00" },
  { day: "Vineri", hours: "09:00 – 19:00" },
  { day: "Sâmbătă", hours: "09:00 – 15:00" },
  { day: "Duminică", hours: "Închis" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold-accent font-sans font-medium mb-3">
            Contactează-ne
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900 font-semibold mb-4">
            Vino la Noi
          </h2>
          <div className="mx-auto w-16 h-[1px] bg-gold-accent" />
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn direction="left" delay={200}>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-navy-800 text-sm mb-1">Adresă</h3>
                  <p className="text-sm text-navy-600/80 font-sans">
                    Bihorului nr 1, sc G, ap 62, Sibiu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-navy-800 text-sm mb-1">Telefon</h3>
                  <a
                    href="tel:+40747637154"
                    className="text-sm text-navy-600/80 font-sans hover:text-gold-accent transition-colors"
                  >
                    +40 747 637 154
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-800 text-cream-100 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-navy-800 text-sm mb-1">Email</h3>
                  <a
                    href="mailto:georgia.gugu@gmail.com"
                    className="text-sm text-navy-600/80 font-sans hover:text-gold-accent transition-colors"
                  >
                    georgia.gugu@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-cream-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-gold-accent" />
                <h3 className="font-sans font-semibold text-navy-800 text-sm">Program</h3>
              </div>
              <div className="space-y-2">
                {schedule.map((item) => (
                  <div key={item.day} className="flex justify-between text-sm font-sans">
                    <span className="text-navy-700 font-medium">{item.day}</span>
                    <span className={item.hours === "Închis" ? "text-red-400" : "text-navy-600/70"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={300}>
            <div className="rounded-2xl overflow-hidden border border-cream-200 h-[400px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5!2d24.1469!3d45.7929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c6789abcdef12%3A0x1234567890abcdef!2sStrada%20Bihorului%201%2C%20Sibiu!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Georgia Beauty House pe hartă"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
