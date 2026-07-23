import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] pt-20 pb-10 text-[15px] text-slate-400 border-t border-slate-800">
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Grid Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUNA 1 - Marca e Descrição */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6 block text-[28px] font-black leading-none tracking-tight transition-opacity hover:opacity-80">
              <span className="text-white">Consum</span>
              <span className="text-consum-orange">merce</span>
            </Link>
            <p className="mb-6 leading-relaxed">
              Tecnologia que conecta sua empresa ao futuro. Desenhamos, construímos e escalamos soluções digitais inteligentes.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram />, href: "https://instagram.com/consummerce" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaFacebookF />, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-consum-orange hover:shadow-lg hover:shadow-consum-orange/20"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUNA 2 - Navegação */}
          <div>
            <h4 className="mb-6 text-[14px] font-bold text-white tracking-widest uppercase">Navegação</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Início", path: "/" },
                { name: "Soluções", path: "/solucoes" },
                { name: "Parceiros", path: "/parceiros" },
                { name: "A Empresa", path: "/empresa" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="transition-colors duration-300 hover:text-consum-orange">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="mailto:contato@consummerce.com.br?subject=Vaga%20-%20Trabalhe%20Conosco" 
                  className="transition-colors duration-300 hover:text-consum-orange"
                >
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* COLUNA 3 - O que fazemos */}
          <div>
            <h4 className="mb-6 text-[14px] font-bold text-white tracking-widest uppercase">O que fazemos</h4>
            <ul className="flex flex-col gap-3">
              {[
                "Criação de Sites", 
                "Sistemas Sob Medida", 
                "E-commerce & Vendas", 
                "Aplicativos (iOS/Android)", 
                "Consultoria Digital"
              ].map((item) => (
                <li key={item}>
                  <Link href="/solucoes" className="transition-colors duration-300 hover:text-consum-orange">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 4 - Contato */}
          <div>
            <h4 className="mb-6 text-[14px] font-bold text-white tracking-widest uppercase">Fale Conosco</h4>
            <div className="flex flex-col gap-4">
              
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-consum-orange">
                  <FaEnvelope className="text-sm" />
                </div>
                <Link href="mailto:contato@consummerce.com.br" className="hover:text-white transition-colors">
                  contato@consummerce.com.br
                </Link>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-consum-orange">
                  <FaPhoneAlt className="text-sm" />
                </div>
                <Link href="tel:1631701920" className="hover:text-white transition-colors">
                  (16) 3170-1920
                </Link>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-consum-orange">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <span>Ribeirão Preto - SP</span>
              </div>

            </div>
          </div>

        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px]">
          <p>&copy; {new Date().getFullYear()} Consummerce. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
            {/* O link da Política de Privacidade foi atualizado abaixo */}
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}