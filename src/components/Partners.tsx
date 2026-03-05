import { FaAws, FaGoogle, FaMicrosoft } from "react-icons/fa";

export default function Partners() {
  const tecnologias = [
    {
      name: "Amazon AWS",
      icon: <FaAws />,
      hoverColor: "group-hover:text-[#FF9900]", // Laranja oficial da AWS
    },
    {
      name: "Google Cloud",
      icon: <FaGoogle />,
      hoverColor: "group-hover:text-[#4285F4]", // Azul oficial do Google
    },
    {
      name: "Microsoft Azure",
      icon: <FaMicrosoft />,
      hoverColor: "group-hover:text-[#00A4EF]", // Azul oficial da Microsoft
    },
  ];

  return (
    <section className="bg-[#e2e8f0] py-12 text-center">
      <div className="container mx-auto max-w-275 px-5">
        
        <h4 className="mb-10 text-[12px] font-bold uppercase tracking-[2px] text-[#64748b]">
          Plataformas de alta performance que utilizamos
        </h4>

        {/* Grid de Logos - Espaçamento ajustado para 3 itens */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
          
          {tecnologias.map((tech) => (
            <div 
              key={tech.name} 
              className="group flex cursor-default flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2"
            >
              {/* Ícone (Logo) - Tamanho aumentado para 60px */}
              <div className={`mb-3 text-[60px] text-[#94a3b8] transition-colors duration-300 ${tech.hoverColor}`}>
                {tech.icon}
              </div>
              
              {/* Nome da Tecnologia */}
              <span className="text-[14px] font-bold text-[#64748b] transition-colors duration-300 group-hover:text-consum-navy">
                {tech.name}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}