export default function Partners() {
  return (
    // CSS Original: .partners { padding: 40px 0; background-color: #e2e8f0; ... }
    <section className="bg-[#e2e8f0] py-10 text-center">
      
      {/* Container padrão */}
      <div className="container mx-auto max-w-275 px-5">
        
        {/* Título: uppercase, spacing 2px, size 12px, color #64748b */}
        <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[2px] text-[#64748b]">
          Empresas que confiam na Consummerce
        </h4>

        {/* Grid de Parceiros: flex, gap 40px, opacity 0.5 initially */}
        <div className="flex flex-wrap justify-center gap-10 text-[#475569] opacity-80 md:opacity-50">
          
          {/* PARCEIRO 1: CLIENDA APP (Com Tooltip Especial) */}
          <div className="group relative cursor-pointer transition-opacity hover:opacity-100">
            <span className="text-[18px] font-bold hover:text-consum-navy">CLIENDA APP</span>
            
            {/* O Tooltip */}
            <div className="absolute bottom-full left-1/2 mb-2 hidden w-max -translate-x-1/2 transform rounded bg-slate-800 px-3 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-100">
              Sistema de Agendamento
              {/* Setinha do tooltip */}
              <div className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-slate-800"></div>
            </div>
          </div>

          {/* OUTROS PARCEIROS (Texto simples) */}
          {["PARTNER TECH", "GRUPO LÍDER", "INOVA CORP"].map((partner) => (
            <span 
              key={partner} 
              className="cursor-default text-[18px] font-bold transition-colors hover:text-consum-navy hover:opacity-100"
            >
              {partner}
            </span>
          ))}

        </div>
      </div>
    </section>
  );
}