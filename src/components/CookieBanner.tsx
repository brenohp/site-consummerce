"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica no navegador se o usuário já aceitou os cookies
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Usar setTimeout para evitar cascading renders
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // Se já aceitou, não renderiza nada
  if (!showBanner) return null;

  const acceptCookies = () => {
    // Salva a permissão e esconde o banner
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  return (
    // Fundo Azul Marinho da sua paleta, texto branco e uma sombra suave
    <div className="fixed bottom-0 left-0 w-full bg-consum-navy text-white p-4 z-[9999] flex flex-col sm:flex-row justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <p className="text-sm mb-4 sm:mb-0 text-center sm:text-left leading-relaxed">
        Usamos cookies para garantir que você obtenha a melhor experiência em nosso site. 
        Ao continuar, você concorda com nossa{" "}
        <Link 
          href="/politica-de-privacidade" 
          className="text-consum-orange font-semibold hover:text-white underline transition-colors"
        >
          Política de Privacidade
        </Link>.
      </p>
      <button 
        onClick={acceptCookies} 
        // Botão Laranja da sua paleta com efeito de hover (brilho)
        className="bg-consum-orange hover:brightness-110 text-white font-bold py-2 px-8 rounded transition-all whitespace-nowrap sm:ml-6 w-full sm:w-auto shadow-md"
      >
        Entendi e Aceito
      </button>
    </div>
  );
}