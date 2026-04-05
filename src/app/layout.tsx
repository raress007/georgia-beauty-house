import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Georgia Beauty House Sibiu | Tratamente Faciale & Stilizare Sprâncene",
  description:
    "Salon premium din Sibiu. Tratamente faciale BiolineJato, stilizare sprâncene, manichiură, pedichiură, machiaj. Rezervă online.",
  keywords: [
    "salon frumusete sibiu",
    "tratamente faciale sibiu",
    "stilizare sprancene sibiu",
    "manichiura sibiu",
    "pedichiura sibiu",
    "machiaj sibiu",
    "bioline jato sibiu",
    "georgia beauty house",
  ],
  openGraph: {
    title: "Georgia Beauty House Sibiu | Tratamente Faciale & Stilizare Sprâncene",
    description:
      "Salon premium din Sibiu. Tratamente faciale BiolineJato, stilizare sprâncene, manichiură, pedichiură, machiaj. Rezervă online.",
    type: "website",
    locale: "ro_RO",
    siteName: "Georgia Beauty House",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Georgia Beauty House",
              image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bihorului nr 1, sc G, ap 62",
                addressLocality: "Sibiu",
                addressCountry: "RO",
              },
              telephone: "+40747637154",
              email: "georgia.gugu@gmail.com",
              url: "https://georgiabeautyhouse.setmore.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "5",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "19:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "15:00" },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
