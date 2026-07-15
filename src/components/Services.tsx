import { 
  FaLaptopCode, 
  FaCloud, 
  FaLightbulb, 
  FaShoppingCart, 
  FaGlobe, 
  FaMobileAlt 
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaGlobe className="text-2xl" />,
      title: "Criação de Sites e Landing Pages",
      desc: "Sites corporativos e páginas de vendas de altíssima velocidade, otimizados para o Google e focados em captar novos clientes para sua empresa.",
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: "Sistemas Sob Medida",
      desc: "Software desenhado para a sua regra de negócio. Criamos plataformas robustas para automatizar, organizar e escalar a sua operação diária.",
    },
    {
      icon: <FaShoppingCart className="text-2xl" />,
      title: "E-commerce de Alta Conversão",
      desc: "Lojas virtuais e plataformas de vendas integradas a meios de pagamento, focadas em usabilidade e em gerar faturamento real.",
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Desenvolvimento de Aplicativos",
      desc: "Criamos aplicativos móveis rápidos e intuitivos para Android e iOS, entregando a melhor experiência do seu negócio direto na palma da mão.",
    },
    {
      icon: <FaCloud className="text-2xl" />,
      title: "Infraestrutura & Cloud",
      desc: "Adeus quedas de servidor. Configuramos e sustentamos sua arquitetura na nuvem para manter tudo rápido, seguro e online 24/7.",
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Consultoria e Tech Lead",
      desc: "Não sabe por onde começar o seu projeto? Nossos especialistas ajudam a desenhar o mapa técnico e escolher as melhores tecnologias.",
    },
  ];

  return (
    <section id="solucoes" className="bg-slate-50 py-24">
      <div className="container mx-auto max-w-275 px-5">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-consum-navy/10 text-consum-navy text-[12px] font-bold mb-4 tracking-widest uppercase">
            Nosso Ecossistema
          </div>
          <h2 className="text-3xl md:text-[40px] font-black text-consum-navy leading-tight">
            Tecnologia sob medida para <br className="hidden md:block" /> escalar a sua operação
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Esqueça a dor de cabeça de gerenciar múltiplos fornecedores. Desenhamos, desenvolvemos e sustentamos toda a sua base tecnológica em um só lugar.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-default rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-consum-orange/50 hover:shadow-xl hover:shadow-consum-orange/5"
            >
              {/* Caixinha do Ícone */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-consum-orange/10 text-consum-orange transition-colors duration-300 group-hover:bg-consum-orange group-hover:text-white">
                {service.icon}
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-consum-navy">
                {service.title}
              </h3>
              
              <p className="text-[15px] leading-relaxed text-slate-500">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}