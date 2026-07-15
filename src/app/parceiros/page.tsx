import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaHandshake, FaBullhorn, FaChartLine, FaLaptopCode, FaCheckCircle } from "react-icons/fa";

export default function ParceirosPage() {
  const perfisParceiros = [
    {
      icon: <FaBullhorn className="text-2xl" />,
      title: "Agências de Marketing",
      desc: "Ofereça desenvolvimento de sites, apps e sistemas complexos para seus clientes sem precisar contratar e gerenciar uma equipe interna de TI.",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Consultorias de Negócios",
      desc: "Agregue valor à sua consultoria entregando a solução tecnológica pronta para os problemas operacionais que você diagnosticar no seu cliente.",
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: "Designers e Freelancers",
      desc: "Foque 100% na criação do layout e na experiência do usuário. Nós assumimos toda a parte complexa da programação e infraestrutura.",
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section (Estilo Consistente e Moderno) */}
      <section className="relative w-full overflow-hidden bg-slate-50 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-consum-navy rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-consum-orange rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-5 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-consum-navy/5 border border-consum-navy/10 text-consum-navy text-[12px] font-bold mb-6 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-consum-orange mr-2 animate-pulse"></span>
            Seja um Parceiro
          </div>
          
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-black text-consum-navy leading-tight tracking-tight">
            Escale o seu negócio <br className="hidden md:block" />
            <span className="text-consum-orange">terceirizando a tecnologia.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Cresça seu portfólio de serviços e aumente seu faturamento unindo forças com a engenharia de ponta da Consummerce.
          </p>
        </div>
      </section>

      {/* Como funciona / Para quem é (Cards Premium) */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-5">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-[40px] font-black text-consum-navy leading-tight">
              Quem pode ser um parceiro?
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Buscamos empresas e profissionais que queiram entregar mais valor aos seus clientes sem inflar a própria folha de pagamento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perfisParceiros.map((perfil, i) => (
              <div 
                key={i} 
                className="group cursor-default rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-consum-orange/50 hover:shadow-xl hover:shadow-consum-orange/5"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-consum-navy/10 text-consum-navy transition-colors duration-300 group-hover:bg-consum-navy group-hover:text-white">
                  {perfil.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-consum-navy">{perfil.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-500">{perfil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens da Parceria (Grid de Checklist Clean) */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="container mx-auto max-w-5xl px-5">
          
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-consum-orange/10 text-consum-orange text-[12px] font-bold mb-4 tracking-widest uppercase">
              Por que a Consummerce?
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-consum-navy leading-tight">
              Vantagens do nosso modelo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { title: "Comissionamento Atrativo", desc: "Receba uma porcentagem justa por cada projeto indicado e fechado." },
              { title: "Modelo White-Label", desc: "Podemos atuar nos bastidores. Entregamos a tecnologia e você apresenta com a sua marca." },
              { title: "Qualidade Impecável", desc: "Código limpo, arquitetura escalável e entregas rigorosamente dentro do prazo." },
              { title: "Zero dor de cabeça de RH", desc: "Não se preocupe com contratação, gestão ou turnover de desenvolvedores." },
              { title: "Suporte Direto", desc: "Comunicação técnica transparente para que você saiba exatamente o status do projeto." },
              { title: "Orçamentos Flexíveis", desc: "Preços justos que permitem adicionar a sua margem de lucro na apresentação final." }
            ].map((vantagem, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm border border-slate-100">
                <FaCheckCircle className="mt-1 shrink-0 text-xl text-consum-orange" />
                <div>
                  <h4 className="mb-1 text-lg font-bold text-consum-navy">{vantagem.title}</h4>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{vantagem.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Super CTA Seja Parceiro */}
      <section className="py-24">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-consum-navy to-[#112255] px-8 py-16 text-center text-white shadow-2xl md:px-16 md:py-24">
            
            {/* Efeitos de fundo do CTA */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-consum-orange opacity-20 mix-blend-screen blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white opacity-5 mix-blend-overlay blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-4xl text-consum-orange backdrop-blur-sm border border-white/20">
                <FaHandshake />
              </div>
              <h2 className="mb-4 text-3xl md:text-5xl font-black tracking-tight">Vamos crescer juntos?</h2>
              <p className="mb-10 max-w-2xl text-lg text-white/80 leading-relaxed">
                Marque uma reunião rápida com nossa diretoria para entendermos como nossa tecnologia pode somar na sua operação atual.
              </p>
              <a 
                href="mailto:parceria@consummerce.com.br?subject=Interesse%20em%20Parceria"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-consum-orange px-10 text-[16px] font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#c2410c] hover:shadow-consum-orange/30"
              >
                Falar sobre Parceria &rarr;
              </a>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}