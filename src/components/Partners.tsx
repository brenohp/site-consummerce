import { FaAws, FaGoogle, FaMicrosoft, FaDigitalOcean } from "react-icons/fa";

export default function Partners() {
  const tecnologias = [
    {
      name: "Amazon AWS",
      // Mantemos as cores oficiais da marca dentro do ícone pequeno
      icon: <FaAws className="text-[#FF9900] text-xl" />,
    },
    {
      name: "Google Cloud",
      icon: <FaGoogle className="text-[#4285F4] text-xl" />,
    },
    {
      name: "Microsoft Azure",
      icon: <FaMicrosoft className="text-[#00A4EF] text-xl" />,
    },
    {
      name: "DigitalOcean",
      icon: <FaDigitalOcean className="text-[#0069FF] text-xl" />,
    },
  ];

  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="container mx-auto max-w-275 px-5 text-center">
        
        {/* Etiqueta estilo Devskin */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-consum-orange/10 text-consum-orange text-[12px] font-bold mb-6 tracking-widest uppercase">
          Tecnologias que usamos
        </div>

        <h2 className="mb-12 text-3xl md:text-4xl font-black text-consum-navy tracking-tight">
          As melhores infraestruturas do mercado
        </h2>

        {/* Grid de "Pills/Badges" com o layout Premium */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
          {tecnologias.map((tech) => (
            <div 
              key={tech.name} 
              className="group flex cursor-default items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-consum-orange hover:shadow-md"
            >
              {tech.icon}
              <span className="text-[15px] font-bold text-slate-700 transition-colors duration-300 group-hover:text-consum-navy">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}