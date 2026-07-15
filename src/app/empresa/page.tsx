import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaRocket, FaEye, FaHeart, FaCode, FaLightbulb, FaHandshake, FaBolt } from "react-icons/fa";

export default function EmpresaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section (Consistente com a Home) */}
      <section className="relative w-full overflow-hidden bg-slate-50 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Efeito Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-consum-navy rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-consum-orange rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-5 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-consum-navy/5 border border-consum-navy/10 text-consum-navy text-[12px] font-bold mb-6 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-consum-orange mr-2 animate-pulse"></span>
            O Nosso DNA
          </div>
          
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black text-consum-navy leading-tight tracking-tight">
            Tecnologia guiada por <br className="hidden md:block" />
            <span className="text-consum-orange">resultados reais.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Muito mais do que escrever código. Somos o seu parceiro estratégico de inovação para simplificar o dia a dia e multiplicar os resultados da sua empresa.
          </p>
        </div>
      </section>

      {/* Propósito e Pilares */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* O Propósito - Lado Esquerdo */}
            <div>
              <h2 className="mb-6 text-3xl font-black text-consum-navy md:text-4xl">
                A tecnologia não precisa ser complexa para transformar.
              </h2>
              <div className="space-y-6 text-slate-500 leading-relaxed text-[16px]">
                <p>
                  A Consummerce nasceu de uma visão muito clara: a tecnologia deve agir como o motor que simplifica a operação e alavanca o seu negócio.
                </p>
                <p>
                  Acreditamos que, muitas vezes, o que traz o maior impacto financeiro é <strong className="text-consum-navy font-bold">o simples que funciona</strong>. Seja implementando uma automação inteligente que economiza horas da sua equipe, ou construindo uma infraestrutura robusta e escalável, nossa regra é apenas uma: entregar a solução que resolve o problema correto.
                </p>
                <p>
                  Mapeamos as dores da sua operação e utilizamos a tecnologia exata para reduzir custos, impulsionar suas vendas e preparar a sua empresa para o futuro.
                </p>
              </div>
            </div>

            {/* Diferenciais / Pilares - Lado Direito (Grid 2x2 Clean) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {[
                { icon: <FaCode />, title: "Engenharia de Ponta", desc: "Stack tecnológica moderna e robusta" },
                { icon: <FaLightbulb />, title: "Visão de Negócio", desc: "Foco no seu crescimento financeiro" },
                { icon: <FaHandshake />, title: "Transparência", desc: "Comunicação clara e sem jargões" },
                { icon: <FaBolt />, title: "Entrega Ágil", desc: "Prazos rigorosamente respeitados" },
              ].map((pilar, i) => (
                <div key={i} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-consum-orange/30 hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-consum-navy/5 text-consum-navy text-xl">
                    {pilar.icon}
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-slate-800 uppercase tracking-wide">{pilar.title}</h3>
                  <p className="text-[13px] text-slate-500">{pilar.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores (Cards Premium) */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl px-5">
          
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-[40px] font-black text-consum-navy leading-tight">
              A base da nossa cultura
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {/* Missão */}
            <div className="group cursor-default rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-consum-orange/50 hover:shadow-xl hover:shadow-consum-orange/5">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-consum-navy/10 text-consum-navy transition-colors duration-300 group-hover:bg-consum-navy group-hover:text-white">
                <FaRocket className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-consum-navy">Missão</h3>
              <p className="text-[15px] leading-relaxed text-slate-500">
                Democratizar o acesso a tecnologias de alta performance para empresas que desejam escalar com segurança e eficiência.
              </p>
            </div>
            
            {/* Visão */}
            <div className="group cursor-default rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-consum-orange/50 hover:shadow-xl hover:shadow-consum-orange/5">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-consum-orange/10 text-consum-orange transition-colors duration-300 group-hover:bg-consum-orange group-hover:text-white">
                <FaEye className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-consum-navy">Visão</h3>
              <p className="text-[15px] leading-relaxed text-slate-500">
                Ser reconhecida nacionalmente como a parceira tecnológica mais estratégica, transparente e eficiente para o setor B2B.
              </p>
            </div>

            {/* Valores */}
            <div className="group cursor-default rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/5">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-red-100 text-red-500 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
                <FaHeart className="text-2xl" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-consum-navy">Valores</h3>
              <p className="text-[15px] leading-relaxed text-slate-500">
                Transparência absoluta nas entregas, foco obsessivo no resultado do cliente e qualidade técnica inegociável em cada linha de código.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}