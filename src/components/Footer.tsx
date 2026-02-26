import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    // mt-12.5 (50px) | pt-17.5 (70px) | pb-7.5 (30px)
    <footer className="mt-12.5 bg-[#0f172a] pt-17.5 pb-7.5 text-[14px] text-[#94a3b8]">
      
      <div className="container mx-auto max-w-275 px-5">
        
        {/* mb-12.5 (50px) | gap-7.5 (30px) */}
        <div className="mb-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          
          {/* COLUNA 1 */}
          <div className="flex flex-col">
            {/* mb-3.75 (15px) */}
            <Link href="/" className="mb-3.75 block text-[22px] font-black leading-none">
              <span className="text-white">Consum</span>
              <span className="text-consum-orange">merce</span>
            </Link>
            <p className="mb-4">
              Tecnologia que conecta sua empresa ao futuro. Do site institucional ao sistema complexo.
            </p>
            {/* mt-3.75 (15px) | gap-3.75 (15px) */}
            <div className="mt-3.75 flex gap-3.75">
              {[
                { icon: <FaInstagram />, href: "https://instagram.com/consummerce" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaFacebookF />, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  // h-8.75 (35px) | w-8.75 (35px)
                  className="flex h-8.75 w-8.75 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-consum-orange"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* COLUNA 2 */}
          <div>
            {/* mb-5 (20px) */}
            <h4 className="mb-5 text-[16px] font-bold text-white">Navegação</h4>
            <ul>
              {["Início", "Soluções", "Parceiros", "Sobre Nós"].map((item) => (
                // mb-2.5 (10px)
                <li key={item} className="mb-2.5">
                  {/* hover:pl-1.25 (5px) */}
                  <Link href="#" className="transition-all duration-300 hover:pl-1.25 hover:text-consum-orange">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3 */}
          <div>
            {/* mb-5 (20px) */}
            <h4 className="mb-5 text-[16px] font-bold text-white">O que fazemos</h4>
            <ul>
              {["Desenvolvimento Web", "Sistemas Sob Medida", "E-commerce & Vendas", "Consultoria Digital"].map((item) => (
                // mb-2.5 (10px)
                <li key={item} className="mb-2.5">
                  {/* hover:pl-1.25 (5px) */}
                  <Link href="#" className="transition-all duration-300 hover:pl-1.25 hover:text-consum-orange">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 4 */}
          <div>
            {/* mb-5 (20px) */}
            <h4 className="mb-5 text-[16px] font-bold text-white">Fale Conosco</h4>
            
            {/* mb-3 (12px) | gap-2.5 (10px) */}
            <div className="mb-3 flex items-center gap-2.5">
              {/* w-3.75 (15px) */}
              <FaEnvelope className="w-3.75 text-consum-orange" />
              <Link href="mailto:contato@consummerce.com.br" className="hover:text-white">
                contato@consummerce.com.br
              </Link>
            </div>
            
            <div className="mb-3 flex items-center gap-2.5">
              <FaPhoneAlt className="w-3.75 text-consum-orange" />
              <Link href="tel:1699999999" className="hover:text-white">
                (16) 9999-9999
              </Link>
            </div>
            
            <div className="mb-3 flex items-center gap-2.5">
              <FaMapMarkerAlt className="w-3.75 text-consum-orange" />
              <span>Ribeirão Preto - SP</span>
            </div>
          </div>
        </div>

        {/* pt-7.5 (30px) */}
        <div className="border-t border-[#1e293b] pt-7.5 text-center text-[12px]">
          <p>&copy; 2026 Consummerce. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}