export default function Services() {
  const services = [
    {
      icon: "📈",
      title: "Sites de Conversão",
      desc: "Plataformas institucionais rápidas, criadas para captar clientes.",
    },
    {
      icon: "⚙️",
      title: "Sistemas Inteligentes",
      desc: "Softwares sob medida para qualquer modelo de negócio (B2B ou B2C).",
    },
    {
      icon: "💡",
      title: "Consultoria Digital",
      desc: "Inovação estratégica para colocar sua empresa à frente da concorrência.",
    },
  ];

  return (
    // py-12.5 = 50px | pb-25 = 100px
    <section id="solucoes" className="bg-white py-12.5 pb-25">
      
      <div className="container mx-auto max-w-275 px-5">
        
        {/* mb-12.5 = 50px */}
        <h2 className="mb-12.5 text-center text-[32px] font-black text-[#0f172a]">
          Soluções Completas
        </h2>

        {/* MUDANÇA: Usei 'grid-cols-3' para garantir 3 colunas perfeitas no Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5">
          
          {services.map((service, index) => (
            <div
              key={index}
              // REMOVIDO: border-t-4 e border-t-consum-orange (borda laranja)
              // REMOVIDO: w-md-87.5 (a largura agora é controlada pelo Grid)
              // MANTIDO: Hover com sombra e borda azul
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