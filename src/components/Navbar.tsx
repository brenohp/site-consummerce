import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    // Header fixo com sombra e py-5 (20px)
    <header className="sticky top-0 z-1000 w-full bg-white py-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      
      {/* Container max-w-275 (1100px) */}
      <div className="mx-auto flex max-w-275 items-center justify-between px-5">
        
        {/* LOGO - Adicionei um hover de opacidade sutil */}
        <Link href="/" className="group text-[26px] font-black tracking-[-0.5px] leading-none transition-opacity hover:opacity-90">
          <span className="text-consum-navy">Consum</span>
          <span className="text-consum-orange">merce</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-7.5">
          {["Início", "Soluções", "Parceiros", "A Empresa"].map((item) => (
            <Link 
              key={item} 
              href="#" 
              // EFEITOS AQUI:
              // transition-all duration-300: Suaviza tudo
              // hover:-translate-y-0.5: Sobe levemente
              // hover:text-consum-navy: Troca a cor
              className="text-sm font-bold text-[#475569] transition-all duration-300 hover:-translate-y-0.5 hover:text-consum-navy"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* BOTÃO CTA */}
        <div className="hidden md:block">
          <Link 
            href="mailto:contato@consummerce.com.br" 
            // EFEITOS AQUI:
            // shadow-md: Sombra inicial
            // hover:shadow-lg: Sombra aumenta no hover
            // hover:-translate-y-1: Sobe com mais vontade que o menu
            // hover:bg-consum-orange: Troca cor de fundo
            className="inline-block rounded-md bg-consum-navy px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-consum-orange hover:shadow-lg"
          >
            Fale Conosco
          </Link>
        </div>

        {/* Mobile Toggle - Efeito de cor e rotação suave ao clicar (se implementarmos lógica depois) */}
        <button className="md:hidden text-consum-navy text-[24px] transition-transform hover:scale-110">
          <FaBars />
        </button>
      </div>
    </header>
  );
}