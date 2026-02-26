import Link from "next/link";

export default function Hero() {
  return (
    // CSS Original: padding: 120px 0 80px; background: linear-gradient(...)
    // pt-30 = 120px | pb-20 = 80px
    <section className="bg-linear-to-b from-white to-[#f1f5f9] pt-30 pb-20 text-center">
      
      {/* Container max-width: 1100px */}
      <div className="container mx-auto px-5 max-w-275">
        
        {/* H1: size 48px (text-5xl), weight 900 (font-black), color #0f172a (slate-900) */}
        <h1 className="mb-5 text-5xl font-black leading-[1.2] text-[#0f172a]">
          O parceiro tecnológico do <br />
          seu crescimento.
        </h1>

        {/* P: size 18px (text-lg), color #475569, max-width 700px */}
        <p className="mx-auto mb-10 max-w-175 text-lg text-[#475569]">
          Sites de alta performance e sistemas integrados desenhados exclusivamente para aumentar suas vendas e otimizar sua operação.
        </p>

        {/* Botões */}
        <div>
          {/* Btn Primary: Laranja, Padding 16px 32px (py-4 px-8), Shadow exata */}
          <Link
            href="https://wa.me/5516999999999"
            className="mx-2.5 inline-block rounded-md bg-consum-orange px-8 py-4 text-base font-bold text-white shadow-[0_4px_15px_rgba(234,88,12,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#c2410c]"
          >
            Transformar Meu Negócio
          </Link>

          {/* Btn Secondary: Borda Azul, Padding 14px 32px (py-3.5 px-8) */}
          <Link
            href="#solucoes"
            className="mx-2.5 inline-block rounded-md border-2 border-consum-navy bg-transparent px-8 py-3.5 text-base font-bold text-consum-navy transition-all hover:bg-consum-navy hover:text-white"
          >
            Nossos Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}