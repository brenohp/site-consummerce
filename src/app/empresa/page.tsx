import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaRocket, FaEye, FaHeart, FaCode, FaLightbulb, FaHandshake, FaBolt } from "react-icons/fa";

export default function EmpresaPage() {
  return (
    <main className="min-h-screen bg-consum-bg">
      <Navbar />
      
      {/* Hero com Imagem de Fundo */}
      <section className="relative bg-slate-900 py-32 text-center text-white">
        <div className="container mx-auto px-5 relative z-10">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-consum-orange">O Nosso DNA</span>
          <h1 className="mb-6 text-4xl font-black md:text-6xl">
            Tecnologia guiada por <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-consum-orange to-yellow-500">resultados reais.</span>
          </h1>
        </div>
        {/* Overlay degradê */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-consum-bg"></div>
      </section>

      {/* Nosso Propósito e Pilares */}
      <section className="py-20">
        <div className="container mx-auto max-w-275 px-5">
          <div className="flex flex-col gap-12 md:flex-row items-center">
            
            {/* O Propósito - TEXTO ATUALIZADO (Foco no simples que funciona e negócios) */}
            <div className="flex-1">
              <h2 className="mb-6 text-3xl font-black text-consum-navy">Nosso Propósito</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  A Consummerce nasceu de uma visão muito clara: a tecnologia não precisa ser complexa ou inacessível para ser transformadora. Ela deve agir como o motor que simplifica o dia a dia e multiplica os resultados da sua empresa.
                </p>
                <p>
                  Acreditamos que, muitas vezes, o que traz o maior impacto financeiro é o simples que funciona. Seja implementando uma automação inteligente que economiza horas da sua equipe, ou construindo uma infraestrutura robusta, nossa regra é apenas uma: entregar a solução que <strong>resolve o problema</strong> e <strong>alavanca o seu negócio</strong>.
                </p>
                <p>
                  Nosso papel é ser o seu parceiro estratégico de inovação. Mapeamos as dores da sua operação e utilizamos a tecnologia exata para reduzir custos, impulsionar suas vendas e preparar a sua empresa para o futuro.
                </p>
              </div>
            </div>

            {/* Nossos Diferenciais / Pilares */}
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              {[
                { icon: <FaCode className="mx-auto mb-2 text-2xl text-consum-navy" />, label: "Engenharia de Ponta", desc: "Stack tecnológica moderna" },
                { icon: <FaLightbulb className="mx-auto mb-2 text-2xl text-consum-navy" />, label: "Visão de Negócio", desc: "Foco no seu crescimento" },
                { icon: <FaHandshake className="mx-auto mb-2 text-2xl text-consum-navy" />, label: "Transparência", desc: "Comunicação clara" },
                { icon: <FaBolt className="mx-auto mb-2 text-2xl text-consum-navy" />, label: "Entrega Ágil", desc: "Prazos respeitados" },
              ].map((pilar, i) => (
                <div key={i} className="rounded-lg bg-white p-6 text-center shadow-sm border-b-4 border-consum-orange transition-transform hover:-translate-y-1">
                  {pilar.icon}
                  <div className="text-sm font-bold text-slate-800 uppercase">{pilar.label}</div>
                  <div className="mt-1 text-xs text-slate-500">{pilar.desc}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-275 px-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-consum-navy">
                <FaRocket size={32} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Missão</h3>
              <p className="text-slate-600">Democratizar o acesso a tecnologias de alta performance para empresas que desejam escalar com segurança.</p>
            </div>
            
            <div className="text-center p-6 border-slate-100 md:border-l md:border-r">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-consum-orange">
                <FaEye size={32} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Visão</h3>
              <p className="text-slate-600">Ser reconhecida como a parceira tecnológica mais estratégica, transparente e eficiente para o setor B2B.</p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
                <FaHeart size={32} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Valores</h3>
              <p className="text-slate-600">Transparência absoluta nas entregas, foco obsessivo no resultado do cliente e qualidade técnica inegociável.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}