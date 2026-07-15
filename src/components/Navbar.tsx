"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para detectar o scroll e mudar a sombra/fundo do menu
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Soluções", path: "/solucoes" },
    { name: "Parceiros", path: "/parceiros" },
    { name: "A Empresa", path: "/empresa" },
  ];

  return (
    <header 
      className={`fixed top-0 z-[1000] w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4" 
          : "bg-white py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <Link href="/" className="group text-[26px] font-black tracking-[-0.5px] leading-none transition-opacity hover:opacity-80">
          <span className="text-consum-navy">Consum</span>
          <span className="text-consum-orange">merce</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className="text-[15px] font-bold text-slate-600 transition-colors duration-300 hover:text-consum-orange"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* BOTÃO CTA DESKTOP (Estilo Pílula) */}
        <div className="hidden md:block">
          <Link 
            href="/contato" 
            className="inline-flex items-center justify-center rounded-full bg-consum-orange px-7 py-2.5 text-[15px] font-bold text-white shadow-md shadow-consum-orange/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c2410c] hover:shadow-lg hover:shadow-consum-orange/30"
          >
            Fale Conosco
          </Link>
        </div>

        {/* BOTÃO MOBILE (Hambúrguer) */}
        <button 
          className="md:hidden text-consum-navy text-[24px] transition-transform hover:scale-105"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Alternar menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      <div 
        className={`absolute left-0 top-full w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-hidden md:hidden ${
          isMenuOpen ? "max-h-[400px] opacity-100 py-5" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-5">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-[16px] font-bold text-slate-600 transition-colors hover:text-consum-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contato"
            className="mt-4 inline-block w-full rounded-xl bg-consum-orange px-6 py-3.5 text-center text-[16px] font-bold text-white shadow-md transition-colors hover:bg-[#c2410c]"
            onClick={() => setIsMenuOpen(false)}
          >
            Fale Conosco
          </Link>
        </nav>
      </div>
    </header>
  );
}