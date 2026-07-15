import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaCode, FaMobileAlt, FaCloud, FaChartLine, FaCogs, FaShieldAlt } from "react-icons/fa";

export default function SolucoesPage() {
  const solucoes = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Desenvolvimento Web",
      desc: "Sites institucionais, Landing Pages e Portais Corporativos de alta performance, focados em captação.",
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Aplicativos Mobile",
      desc: "Apps nativos e híbridos para Android e iOS, entregando a melhor experiência de usuário na palma da mão.",
    },
    {
      icon: <FaCloud className="text-2xl" />,
      title: "Sistemas em Nuvem",
      desc: "Plataformas SaaS e ERPs sob medida, acessíveis de qualquer lugar e construídos para escalar.",
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Infra & Segurança",
      desc: "Configuração de servidores, migração de e-mails corporativos e proteção absoluta de dados sensíveis.",
    },
    {
      icon: <FaCogs className="text-2xl" />,
      title: "Automação de Processos",
      desc: "Robôs e scripts inteligentes para eliminar tarefas manuais, reduzir erros e cortar custos operacionais.",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Consultoria Tech",
      desc: "Análise profunda de infraestrutura e planejamento estratégico de tecnologia para guiar o seu crescimento.",
    },
  ];

  const passos = [
    { num: "1", title: "Imersão", text: "Entendemos a fundo o seu modelo de negócio e mapeamos as dores reais." },
    { num: "2", title: "Plano", text: "Desenhamos a arquitetura ideal, escopo e cronograma sem surpresas." },
    { num: "3", title: "Sprints", text: "Execução ágil com entregas frequentes para você acompanhar a evolução." },
    { num: "4", title: "Evolução", text: "Lançamento, monitoramento 24/7 e melhorias contínuas do produto." }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header da Página (Estilo Consistente) */}
      <section className="relative w-full overflow-hidden bg-slate-50 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-consum-navy rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-consum-orange rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-5 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-consum-navy/5 border border-consum-navy/10 text-consum-navy text-[12px] font-bold mb-6 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-consum-orange mr-2 animate-pulse"></span>
            O que fazemos
          </div>
          
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black text-consum-navy leading-tight tracking-tight">
            Nossas <span className="text-consum-orange">Soluções</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Tecnologia de ponta para resolver problemas reais. Do código à estratégia, entregamos o que sua operação precisa para decolar.
          </p>
        </div>
      </section>

      {/* Grid de Soluções (Cards Premium) */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solucoes.map((item, index) => (
              <div 
                key={index}
                className="group cursor-default rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-consum-orange/50 hover:shadow-xl hover:shadow-consum-orange/5"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-consum-navy/10 text-consum-navy transition-colors duration-300 group-hover:bg-consum-navy group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-consum-navy">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção CTA - Metodologia (Timeline Visual) */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="container mx-auto max-w-5xl px-5">
          
          <div className="mb-20 text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-consum-orange/10 text-consum-orange text-[12px] font-bold mb-4 tracking-widest uppercase">
              Processo
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-consum-navy leading-tight">
              Como entregamos resultados
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Um processo transparente e previsível, do primeiro contato à sustentação.
            </p>
          </div>

          {/* Timeline Horizontal */}
          <div className="relative mb-24">
            {/* Linha conectora (Desktop) */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-slate-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {passos.map((step, i) => (
                <div key={i} className="text-center flex flex-col items-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-consum-navy text-xl font-black text-white shadow-lg shadow-consum-navy/20 ring-4 ring-slate-50">
                    {step.num}
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-slate-800">{step.title}</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed px-2">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Banner de CTA */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-consum-navy to-[#112255] px-8 py-16 text-center text-white shadow-2xl">
            <div className="relative z-10">
              <h3 className="mb-4 text-3xl font-black md:text-4xl">Tem um desafio complexo?</h3>
              <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
                Nossa equipe adora resolver o que parece impossível. Vamos conversar sobre o seu projeto e encontrar o melhor caminho tecnológico.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a 
                  href="https://wa.me/551631701920" 
                  className="inline-flex h-14 items-center justify-center rounded-xl bg-consum-orange px-10 text-[16px] font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#c2410c]"
                >
                  Falar com um Especialista
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}