"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Soluções", path: "/solucoes" },
    { name: "Parceiros", path: "/parceiros" },
    { name: "A Empresa", path: "/empresa" },
  ];

  return (
    // Header fixo com sombra e py-5 (20px)
    <header className="sticky top-0 z-1000 w-full bg-white py-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      
      {/* Container max-w-275 (1100px) */}
      <div className="mx-auto flex max-w-275 items-center justify-between px-5">
        
        {/* LOGO */}
        <Link href="/" className="group text-[26px] font-black tracking-[-0.5px] leading-none transition-opacity hover:opacity-90">
          <span className="text-consum-navy">Consum</span>
          <span className="text-consum-orange">merce</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-7.5">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className="text-sm font-bold text-[#475569] transition-all duration-300 hover:-translate-y-0.5 hover:text-consum-navy"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* BOTÃO CTA DESKTOP */}
        <div className="hidden md:block">
          <Link 
            href="mailto:contato@consummerce.com.br" 
            className="inline-block rounded-md bg-consum-navy px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-consum-orange hover:shadow-lg"
          >
            Fale Conosco
          </Link>
        </div>

        {/* BOTÃO MOBILE (Hambúrguer) */}
        <button 
          className="md:hidden text-consum-navy text-[24px] transition-transform hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Alternar menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-100 bg-white p-5 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-[16px] font-bold text-[#475569] hover:text-consum-orange"
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar num link
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="mailto:contato@consummerce.com.br"
              className="mt-2 inline-block rounded-md bg-consum-navy px-6 py-3 text-center text-[16px] font-bold text-white transition-colors hover:bg-consum-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              Fale Conosco
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}