import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-consum-bg">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}