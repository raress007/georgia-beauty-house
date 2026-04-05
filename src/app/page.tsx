import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutStrip from "@/components/AboutStrip";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import BookingPolicy from "@/components/BookingPolicy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutStrip />
        <Services />
        <WhyUs />
        <Reviews />
        <BookingPolicy />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
