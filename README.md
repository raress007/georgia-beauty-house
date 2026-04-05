# Georgia Beauty House — Website

Website premium pentru Georgia Beauty House, salon de frumusete din Sibiu.

## Stack Tehnic

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** — design tokens custom
- **Framer Motion** — animatii la scroll
- **Lucide React** — iconite
- **Anthropic API** (Claude Haiku) — chatbot

## Setup Local

```bash
# 1. Instaleaza dependentele
npm install

# 2. Configureaza variabilele de mediu
cp .env.local.example .env.local
# Editeaza .env.local si adauga cheia ta Anthropic API

# 3. Porneste serverul de development
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) in browser.

## Chatbot

Chatbot-ul necesita o cheie API Anthropic. Obtine una de la [console.anthropic.com](https://console.anthropic.com/) si adaug-o in `.env.local`:

```
ANTHROPIC_API_KEY=sk-ant-...
```

Fara cheie, chatbot-ul va afisa un mesaj de fallback cu numarul de telefon.

## Deploy pe Vercel

1. Push proiectul pe GitHub
2. Conecteaza repo-ul la [Vercel](https://vercel.com)
3. Adauga variabila de mediu `ANTHROPIC_API_KEY` in Vercel Dashboard > Settings > Environment Variables
4. Deploy automat la fiecare push

## Structura

```
src/
  app/
    page.tsx          — Pagina principala
    layout.tsx        — Layout global + SEO + Schema.org
    globals.css       — CSS variables + stiluri globale
    api/chat/route.ts — API endpoint chatbot
  components/
    Navbar.tsx        — Navigare sticky
    Hero.tsx          — Sectiune hero full-screen
    AboutStrip.tsx    — Strip filosofie salon
    Services.tsx      — Servicii cu tab-uri
    WhyUs.tsx         — 4 piloni diferentiere
    Reviews.tsx       — Recenzii clienti
    BookingPolicy.tsx — Politica de rezervare
    Contact.tsx       — Contact + harta Google Maps
    Footer.tsx        — Footer cu linkuri
    Chatbot.tsx       — Chatbot AI
```
