import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaWhatsapp, FaEnvelope, FaVideo } from "react-icons/fa";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-consum-bg">
      <Navbar />
      
      {/* Header da Página */}
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-5">
          <h1 className="mb-4 text-4xl font-black md:text-5xl">
            Fale <span className="text-consum-orange">Conosco</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Pronto para impulsionar o seu negócio? Estamos aqui para ouvir a sua demanda e desenhar a melhor solução.
          </p>
        </div>
      </section>

      {/* Conteúdo (Informações + Formulário) */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            
            {/* COLUNA ESQUERDA: Informações de Contato e CTA da Reunião */}
            <div>
              <h2 className="mb-6 text-3xl font-black text-slate-800">
                Vamos conversar.
              </h2>
              <p className="mb-8 text-slate-600 text-lg">
                Fique à vontade para nos enviar uma mensagem, chamar no WhatsApp ou agendar um bate-papo em vídeo.
              </p>

              <div className="flex flex-col gap-6">
                
                {/* Destaque: Agendar Reunião */}
                <a 
                  href="https://wa.me/551631701920?text=Olá,%20gostaria%20de%20agendar%20uma%20reunião%20online%20com%20a%20Consummerce" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border-2 border-consum-navy p-5 transition-all duration-300 hover:bg-slate-50 hover:-translate-y-1 shadow-sm"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl text-consum-navy">
                    <FaVideo />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-consum-navy">Agende uma reunião online</h4>
                    <span className="text-sm font-medium text-slate-500">Sem compromisso. Vamos entender o seu desafio.</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/551631701920" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-2"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl text-green-600 transition-colors group-hover:bg-green-500 group-hover:text-white">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-green-600 transition-colors">WhatsApp</h4>
                    <span className="text-sm text-slate-500">(16) 3170-1920</span>
                  </div>
                </a>

                {/* E-mail */}
                <a 
                  href="mailto:contato@consummerce.com.br" 
                  className="flex items-center gap-4 group p-2"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xl text-consum-orange transition-colors group-hover:bg-consum-orange group-hover:text-white">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-consum-orange transition-colors">E-mail</h4>
                    <span className="text-sm text-slate-500">contato@consummerce.com.br</span>
                  </div>
                </a>

              </div>
            </div>

            {/* COLUNA DIREITA: Formulário */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <h3 className="mb-6 text-2xl font-bold text-slate-800">Mande os detalhes</h3>
              
              <form className="flex flex-col gap-5">
                <div>
                  <label className="mb-1 block text-sm font-bold text-slate-600">Nome completo</label>
                  <input type="text" placeholder="Como devemos te chamar?" className="w-full rounded-lg border border-slate-300 p-3 text-sm outline-none transition-colors focus:border-consum-navy focus:ring-1 focus:ring-consum-navy" />
                </div>
                
                <div>
                  <label className="mb-1 block text-sm font-bold text-slate-600">E-mail corporativo</label>
                  <input type="email" placeholder="voce@suaempresa.com.br" className="w-full rounded-lg border border-slate-300 p-3 text-sm outline-none transition-colors focus:border-consum-navy focus:ring-1 focus:ring-consum-navy" />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-bold text-slate-600">Mensagem</label>
                  <textarea rows={4} placeholder="Conte-nos um pouco sobre a sua necessidade..." className="w-full resize-none rounded-lg border border-slate-300 p-3 text-sm outline-none transition-colors focus:border-consum-navy focus:ring-1 focus:ring-consum-navy"></textarea>
                </div>
                
                {/* Aqui, mais tarde podemos fazer a lógica de enviar isso para o seu email usando as Server Actions do Next.js */}
                <button type="button" className="mt-2 w-full rounded-lg bg-consum-navy px-6 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-consum-orange hover:shadow-lg">
                  Enviar Mensagem
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