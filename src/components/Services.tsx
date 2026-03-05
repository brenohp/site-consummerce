export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Desenvolvimento Sob Medida",
      desc: "Sites de alta conversão, aplicativos e sistemas construídos para escalar sua operação.",
    },
    {
      icon: "☁️",
      title: "Infraestrutura & Cloud",
      desc: "Servidores de alta performance, migração segura de dados e gestão de e-mails corporativos.",
    },
    {
      icon: "💡",
      title: "Consultoria Estratégica",
      desc: "Analisamos seu modelo de negócio e desenhamos o mapa ideal para sua transformação digital.",
    },
  ];

  return (
    <section id="solucoes" className="bg-white py-12.5 pb-25">
      <div className="container mx-auto max-w-275 px-5">
        <h2 className="mb-12.5 text-center text-[32px] font-black text-[#0f172a]">
          Soluções Completas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-default rounded-lg border border-[#e2e8f0] bg-consum-bg p-[40px_30px] text-center transition-all duration-300 hover:-translate-y-1.25 hover:border-consum-navy hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-5 text-[40px]">{service.icon}</div>
              
              <h3 className="mb-3.75 text-[20px] font-bold text-consum-navy">
                {service.title}
              </h3>
              
              <p className="text-[14px] text-[#64748b]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}