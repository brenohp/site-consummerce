import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaCode, FaMobileAlt, FaCloud, FaChartLine, FaCogs, FaShieldAlt } from "react-icons/fa";

export default function SolucoesPage() {
  const solucoes = [
    {
      icon: <FaCode />,
      title: "Desenvolvimento Web",
      desc: "Sites institucionais, Landing Pages e Portais Corporativos de alta performance.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Aplicativos Mobile",
      desc: "Apps nativos e híbridos para Android e iOS, focados na experiência do usuário.",
    },
    {
      icon: <FaCloud />,
      title: "Sistemas em Nuvem",
      desc: "Plataformas SaaS e ERPs personalizados acessíveis de qualquer lugar.",
    },
    {
      icon: <FaCogs />,
      title: "Automação de Processos",
      desc: "Robôs e scripts para eliminar tarefas manuais e reduzir custos operacionais.",
    },
    {
      icon: <FaChartLine />,
      title: "Consultoria Tech",
      desc: "Análise de infraestrutura e planejamento estratégico de tecnologia.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Segurança Digital",
      desc: "Proteção de dados, LGPD e blindagem de servidores contra ataques.",
    },
  ];

  return (
    <main className="min-h-screen bg-consum-bg">
      <Navbar />
      
      {/* Header da Página */}
      <section className="bg-consum-navy py-20 text-center text-white">
        <div className="container mx-auto px-5">
          <h1 className="mb-4 text-4xl font-black md:text-5xl">
            Nossas <span className="text-consum-orange">Soluções</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Tecnologia de ponta para resolver problemas reais. Do código à estratégia.
          </p>
        </div>
      </section>

      {/* Grid de Soluções */}
      <section className="py-20">
        <div className="container mx-auto max-w-275 px-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solucoes.map((item, index) => (
              <div 
                key={index}
                className="group rounded-lg border border-slate-200 bg-white p-8 transition-all hover:-translate-y-2 hover:border-consum-navy hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 text-3xl text-consum-navy transition-colors group-hover:bg-consum-navy group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção CTA - Metodologia */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-275 px-5 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="mb-6 text-3xl font-black text-consum-navy">Como trabalhamos?</h2>
            <ul className="space-y-6">
              {[
                { title: "1. Imersão", text: "Entendemos a fundo o seu modelo de negócio." },
                { title: "2. Planejamento", text: "Desenhamos a arquitetura ideal para o problema." },
                { title: "3. Execução Ágil", text: "Entregas frequentes para você acompanhar a evolução." },
                { title: "4. Evolução Contínua", text: "Monitoramento e melhorias após o lançamento." }
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-consum-orange" />
                  <div>
                    <h4 className="font-bold text-slate-800">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Caixa de Destaque Visual */}
          <div className="flex-1 rounded-2xl bg-consum-navy p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Tem um desafio complexo?</h3>
            <p className="mb-8 text-slate-300">
              Nossa equipe adora resolver o que parece impossível. Vamos conversar sobre o seu projeto.
            </p>
            <a 
              href="https://wa.me/5516999999999" 
              className="inline-block rounded-full bg-consum-orange px-8 py-3 font-bold text-white transition-transform hover:scale-105"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}