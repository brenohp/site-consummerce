import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-consum-bg">
      <Navbar />
      
      {/* Banner Principal de Contato (Estilo Devskin) */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-5 max-w-5xl">
          
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-consum-orange to-[#c2410c] px-8 py-16 text-center text-white shadow-xl shadow-consum-orange/20 md:px-16 md:py-24">
            
            {/* Efeitos de fundo sutis dentro do banner */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white opacity-5 mix-blend-overlay blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-black opacity-10 mix-blend-overlay blur-3xl"></div>

            <div className="relative z-10">
              <h1 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
                Vamos iniciar o seu projeto?
              </h1>
              <p className="mx-auto mb-10 max-w-xl text-lg text-white/90">
                Um especialista responde em até 48h úteis. Sem compromisso, sem vendedor no meio, direto ao ponto.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a 
                  href="#formulario" 
                  className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-white px-8 font-bold text-consum-orange shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-50 sm:w-auto"
                >
                  Enviar uma mensagem &rarr;
                </a>
                <a 
                  href="https://wa.me/551631701920" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-transparent px-8 font-bold text-white transition-all hover:bg-white/10 sm:w-auto"
                >
                  <FaWhatsapp className="text-xl" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Seção do Formulário */}
      <section id="formulario" className="pb-24 pt-8">
        <div className="container mx-auto max-w-5xl px-5">
          
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-consum-navy/5 px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest text-consum-navy">
              Contato
            </div>
            <h2 className="text-3xl font-black text-consum-navy md:text-4xl">
              Envie uma mensagem
            </h2>
            <p className="mt-3 text-slate-500">
              A Consummerce é uma consultoria e integradora de tecnologia.
            </p>
          </div>

          {/* Card Unificado do Formulário */}
          <div className="flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 md:flex-row">
            
            {/* Lado Esquerdo: Informações (Bloco Azul Marinho) */}
            <div className="flex w-full flex-col justify-between bg-consum-navy p-10 text-white md:w-2/5 md:p-12">
              <div>
                <h3 className="mb-8 text-2xl font-bold">Entre em contato</h3>
                
                <div className="flex flex-col gap-6">

                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="shrink-0 text-xl text-consum-orange" />
                    <a href="tel:1631701920" className="font-medium text-white/90 hover:text-white transition-colors">
                      (16) 3170-1920
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <FaEnvelope className="shrink-0 text-xl text-consum-orange" />
                    <a href="mailto:contato@consummerce.com.br" className="font-medium text-white/90 hover:text-white transition-colors break-all">
                      contato@consummerce.com.br
                    </a>
                  </div>
                </div>
              </div>

              {/* Espaço para colocar logos de parceiros (Opcional, estilo Devskin) */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-sm font-bold text-white/50 mb-4 uppercase tracking-wider">Nossos Parceiros</p>
                <div className="flex gap-4 text-white/40">
                  <span className="font-bold">AWS</span>
                  <span className="font-bold">Google Cloud</span>
                  <span className="font-bold">Azure</span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Campos do Formulário */}
            <div className="w-full p-10 md:w-3/5 md:p-12">
              <form className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Empresa *" 
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-800 outline-none transition-all focus:border-consum-navy focus:bg-white focus:ring-4 focus:ring-consum-navy/10 placeholder:text-slate-400" 
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nome *" 
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-800 outline-none transition-all focus:border-consum-navy focus:bg-white focus:ring-4 focus:ring-consum-navy/10 placeholder:text-slate-400" 
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <input 
                      type="email" 
                      placeholder="E-mail *" 
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-800 outline-none transition-all focus:border-consum-navy focus:bg-white focus:ring-4 focus:ring-consum-navy/10 placeholder:text-slate-400" 
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Telefone *" 
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-800 outline-none transition-all focus:border-consum-navy focus:bg-white focus:ring-4 focus:ring-consum-navy/10 placeholder:text-slate-400" 
                      required
                    />
                  </div>
                </div>

                <div>
                  <textarea 
                    rows={4} 
                    placeholder="Mensagem" 
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-800 outline-none transition-all focus:border-consum-navy focus:bg-white focus:ring-4 focus:ring-consum-navy/10 placeholder:text-slate-400"
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-consum-navy px-6 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#152a6b] hover:shadow-lg hover:shadow-consum-navy/20"
                >
                  Enviar mensagem
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}