import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaHandshake } from "react-icons/fa";

export default function ParceirosPage() {
  const parceiros = [
    "CLIENDA APP", "PARTNER TECH", "GRUPO LÍDER", "INOVA CORP", 
    "SOFT SYSTEM", "DATA ANALYTICS", "CLOUD BRASIL", "MARKET PRO"
  ];

  return (
    <main className="min-h-screen bg-consum-bg">
      <Navbar />
      
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-5">
          <h1 className="mb-4 text-4xl font-black md:text-5xl">
            Nossos <span className="text-consum-orange">Parceiros</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Grandes empresas que confiam na nossa tecnologia para crescer.
          </p>
        </div>
      </section>

      {/* Grid de Logos */}
      <section className="py-20">
        <div className="container mx-auto max-w-275 px-5">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {parceiros.map((nome, i) => (
              <div key={i} className="flex aspect-video items-center justify-center rounded-lg border border-slate-200 bg-white p-6 shadow-sm grayscale transition-all hover:grayscale-0 hover:border-consum-orange">
                <span className="text-xl font-bold text-slate-700">{nome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento em Destaque */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <div className="mb-8 text-5xl text-consum-orange opacity-30">❝</div>
          <h2 className="mb-6 text-2xl font-medium italic text-slate-700 md:text-3xl">
            &ldquo;A Consummerce transformou completamente nossa operação digital. O sistema que desenvolveram não só automatizou processos, mas nos deu insights que aumentaram nosso faturamento em 40%.&rdquo;
          </h2>
          <div className="flex flex-col items-center gap-2">
            <div className="h-16 w-16 rounded-full bg-slate-200" /> {/* Foto fake */}
            <strong className="text-consum-navy">Carlos Eduardo</strong>
            <span className="text-sm text-slate-500">CEO, Clienda App</span>
          </div>
        </div>
      </section>

      {/* CTA Seja Parceiro */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-3xl rounded-2xl bg-linear-to-r from-consum-navy to-blue-900 p-12 text-white shadow-2xl">
            <FaHandshake className="mx-auto mb-6 text-5xl text-consum-orange" />
            <h2 className="mb-4 text-3xl font-black">Quer ser nosso parceiro?</h2>
            <p className="mb-8 text-blue-100">
              Estamos sempre em busca de novas conexões. Se você tem uma agência, consultoria ou empresa de tecnologia, vamos conversar.
            </p>
            <a 
              href="mailto:parceria@consummerce.com.br"
              className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-consum-navy transition-colors hover:bg-consum-orange hover:text-white"
            >
              Propor Parceria
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}