import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-consum-bg min-h-[90vh] flex items-center">
      
      {/* Brilho de fundo (Glow) mais sutil e espalhado para não ficar idêntico à referência */}
      <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-consum-navy rounded-full mix-blend-multiply filter blur-[180px] opacity-10 animate-pulse"></div>
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-consum-orange rounded-full mix-blend-multiply filter blur-[180px] opacity-10"></div>

      {/* Container Principal */}
      <div className="container mx-auto px-5 max-w-275 relative z-10 py-20 lg:py-30">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ---- LADO ESQUERDO (Textos) ---- */}
          <div>
            {/* Etiqueta (Badge) com um texto mais focado em resultado */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-consum-navy/5 border border-consum-navy/10 text-consum-navy text-[13px] font-bold mb-6 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-consum-orange animate-pulse"></span>
              Tecnologia de Alta Performance
            </div>

            {/* Título Forte */}
            <h1 className="mb-6 text-[44px] lg:text-[56px] font-black leading-[1.1] text-consum-navy tracking-tight">
              O parceiro tecnológico <br />
              do seu <span className="text-consum-orange">crescimento.</span>
            </h1>

            {/* Subtítulo */}
            <p className="mb-8 text-lg text-[#475569] max-w-lg leading-relaxed">
              Sites rápidos, aplicativos intuitivos e sistemas integrados desenhados exclusivamente para aumentar as suas vendas e otimizar toda a sua operação.
            </p>

            {/* Checks de Confiança - Textos Novos! */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-[15px] text-[#475569] font-bold">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-consum-orange text-lg flex-shrink-0" />
                Orçamento sem compromisso
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-consum-orange text-lg flex-shrink-0" />
                Proposta clara em até 48h
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-consum-orange text-lg flex-shrink-0" />
                Acompanhamento passo a passo
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-consum-orange text-lg flex-shrink-0" />
                Suporte e evolução contínua
              </div>
            </div>

            {/* Botões de Ação - Problema da quebra de linha corrigido */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.me/551631701920"
                className="inline-flex justify-center items-center gap-2 rounded-xl bg-consum-orange px-6 lg:px-8 py-4 text-base font-bold text-white whitespace-nowrap shadow-[0_4px_15px_rgba(234,88,12,0.3)] transition-all hover:-translate-y-1 hover:bg-[#c2410c]"
              >
                Transformar Meu Negócio <span>&rarr;</span>
              </Link>
              <Link
                href="#solucoes"
                className="inline-flex justify-center items-center rounded-xl border-2 border-consum-navy/10 bg-white px-6 lg:px-8 py-4 text-base font-bold text-consum-navy whitespace-nowrap transition-all hover:bg-consum-navy hover:text-white"
              >
                Ver nossas soluções
              </Link>
            </div>
          </div>

          {/* ---- LADO DIREITO (Visual/Mockup) ---- */}
          <div className="relative mt-10 lg:mt-0 w-full hidden md:block">
            {/* Mockup do Dashboard */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 w-full max-w-md mx-auto lg:ml-auto">
               
               <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 bg-white border border-slate-200 rounded-md h-5 w-1/2 flex items-center px-2">
                    <span className="text-[10px] text-slate-400">consummerce.com.br/dashboard</span>
                  </div>
               </div>
               
               <div className="p-6 bg-slate-50/50">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-consum-navy rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                      C
                    </div>
                    <div>
                      <div className="w-24 h-4 bg-slate-300 rounded-full mb-2"></div>
                      <div className="w-32 h-3 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 shadow-sm transition-all hover:border-consum-orange/30">
                      <div className="w-12 h-3 bg-slate-100 rounded-full mb-3"></div>
                      <div className="w-20 h-6 bg-consum-orange/20 rounded-md"></div>
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-xl border border-slate-100 shadow-sm transition-all hover:border-consum-navy/30">
                      <div className="w-12 h-3 bg-slate-100 rounded-full mb-3"></div>
                      <div className="w-20 h-6 bg-consum-navy/20 rounded-md"></div>
                    </div>
                  </div>

                  <div className="w-full h-24 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex items-end justify-between">
                    <div className="w-4 bg-slate-100 rounded-t-sm h-[30%]"></div>
                    <div className="w-4 bg-slate-100 rounded-t-sm h-[50%]"></div>
                    <div className="w-4 bg-slate-100 rounded-t-sm h-[80%]"></div>
                    <div className="w-4 bg-consum-navy rounded-t-sm h-[100%] shadow-[0_0_8px_rgba(30,58,138,0.4)]"></div>
                    <div className="w-4 bg-consum-orange rounded-t-sm h-[60%] shadow-[0_0_8px_rgba(234,88,12,0.4)]"></div>
                    <div className="w-4 bg-slate-100 rounded-t-sm h-[40%]"></div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}