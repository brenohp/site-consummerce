import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaRocket, FaEye, FaHeart } from "react-icons/fa";

export default function EmpresaPage() {
  return (
    <main className="min-h-screen bg-consum-bg">
      <Navbar />
      
      {/* Hero com Imagem de Fundo (Simulada com cor sólida por enquanto) */}
      <section className="relative bg-slate-900 py-32 text-center text-white">
        <div className="container mx-auto px-5 relative z-10">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-consum-orange">Sobre Nós</span>
          <h1 className="mb-6 text-4xl font-black md:text-6xl">
            Nós conectamos negócios <br /> ao <span className="text-transparent bg-clip-text bg-linear-to-r from-consum-orange to-yellow-500">futuro.</span>
          </h1>
        </div>
        {/* Overlay degradê */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-consum-bg"></div>
      </section>

      {/* A História */}
      <section className="py-20">
        <div className="container mx-auto max-w-275 px-5">
          <div className="flex flex-col gap-12 md:flex-row items-center">
            <div className="flex-1">
              <h2 className="mb-6 text-3xl font-black text-consum-navy">Nossa História</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  A Consummerce nasceu de uma necessidade clara no mercado: a falta de parceiros tecnológicos que realmente entendessem de negócios.
                </p>
                <p>
                  Muitas empresas entregavam código, mas não entregavam resultado. Nós viemos para mudar isso. Fundada em Ribeirão Preto, começamos pequenos, desenvolvendo sites de alta conversão.
                </p>
                <p>
                  Hoje, somos uma referência em desenvolvimento de sistemas complexos e soluções integradas, atendendo grandes players do mercado nacional.
                </p>
              </div>
            </div>
            {/* Bloco de Números */}
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              {[
                { number: "+50", label: "Projetos Entregues" },
                { number: "+10", label: "Anos de Experiência" },
                { number: "100%", label: "Foco em Resultado" },
                { number: "24/7", label: "Suporte Dedicado" },
              ].map((stat, i) => (
                <div key={i} className="rounded-lg bg-white p-8 text-center shadow-sm border-b-4 border-consum-orange">
                  <div className="text-3xl font-black text-consum-navy">{stat.number}</div>
                  <div className="text-sm font-bold text-slate-400 uppercase">{stat.label}</div>
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
              <p className="text-slate-600">Democratizar o acesso a tecnologias de alta performance para empresas que desejam escalar.</p>
            </div>
            
            <div className="text-center p-6 border-l border-r border-slate-100">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-consum-orange">
                <FaEye size={32} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Visão</h3>
              <p className="text-slate-600">Ser reconhecida nacionalmente como a parceira tecnológica mais estratégica para o setor B2B.</p>
            </div>

            <div className="text-center p-6">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
                <FaHeart size={32} />
              </div>
              <h3 className="mb-3 text-xl font-bold">Valores</h3>
              <p className="text-slate-600">Transparência absoluta, foco obsessivo no cliente e qualidade técnica inegociável.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}