import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FaHandshake, FaBullhorn, FaChartLine, FaLaptopCode } from "react-icons/fa";

export default function ParceirosPage() {
  const perfisParceiros = [
    {
      icon: <FaBullhorn />,
      title: "Agências de Marketing",
      desc: "Ofereça desenvolvimento de sites, apps e sistemas complexos para seus clientes sem precisar contratar uma equipe interna de TI.",
    },
    {
      icon: <FaChartLine />,
      title: "Consultorias de Negócios",
      desc: "Agregue valor à sua consultoria entregando a solução tecnológica pronta para os problemas operacionais do seu cliente.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Designers e Freelancers",
      desc: "Foque na criação do layout e na experiência do usuário. Nós assumimos toda a parte complexa da programação e infraestrutura.",
    }
  ];

  return (
    <main className="min-h-screen bg-consum-bg">
      <Navbar />
      
      {/* Header da Página */}
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-5">
          <h1 className="mb-4 text-4xl font-black md:text-5xl">
            Programa de <span className="text-consum-orange">Parcerias</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Cresça seu portfólio de serviços e aumente seu faturamento terceirizando a tecnologia com a Consummerce.
          </p>
        </div>
      </section>

      {/* Como funciona / Para quem é */}
      <section className="py-20">
        <div className="container mx-auto max-w-275 px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-slate-800">Quem pode ser um parceiro?</h2>
            <p className="mt-4 text-slate-600">Buscamos empresas e profissionais que queiram escalar seus negócios unindo forças com nossa engenharia.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {perfisParceiros.map((perfil, i) => (
              <div key={i} className="group rounded-lg border border-slate-200 bg-white p-8 text-center transition-all hover:-translate-y-2 hover:border-consum-navy hover:shadow-xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-3xl text-consum-navy transition-colors group-hover:bg-consum-navy group-hover:text-white">
                  {perfil.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-800">{perfil.title}</h3>
                <p className="text-slate-600 leading-relaxed">{perfil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens da Parceria */}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-5">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 md:p-12">
            <h2 className="mb-8 text-center text-2xl font-black text-consum-navy md:text-3xl">
              Vantagens de fechar com a Consummerce
            </h2>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                "Comissionamento atrativo por projeto fechado.",
                "Possibilidade de modelo White-Label (sua marca).",
                "Entregas no prazo e com qualidade impecável.",
                "Suporte técnico direto e transparente.",
                "Zero dor de cabeça com contratação de devs.",
                "Orçamentos justos para você colocar sua margem."
              ].map((vantagem, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-consum-orange text-xs text-white">✓</div>
                  <span className="text-slate-700 font-medium">{vantagem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Seja Parceiro */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-5">
          <div className="mx-auto max-w-3xl rounded-2xl bg-linear-to-r from-consum-navy to-blue-900 p-12 text-white shadow-2xl">
            <FaHandshake className="mx-auto mb-6 text-5xl text-consum-orange" />
            <h2 className="mb-4 text-3xl font-black">Vamos crescer juntos?</h2>
            <p className="mb-8 text-blue-100">
              Marque uma reunião rápida com nossa diretoria para entendermos como podemos somar na sua operação.
            </p>
            <a 
              href="mailto:parceria@consummerce.com.br?subject=Interesse%20em%20Parceria"
              className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-consum-navy transition-colors hover:bg-consum-orange hover:text-white"
            >
              Falar sobre Parceria
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}