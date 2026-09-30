import prisma from "@/lib/prisma";
import { FaArrowUp, FaArrowDown, FaWallet, FaLandmark } from "react-icons/fa";

export const dynamic = 'force-dynamic';

export default async function FinanceiroPage() {
  const dataAtual = new Date();
  const primeiroDiaMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
  const nomeMes = dataAtual.toLocaleDateString('pt-BR', { month: 'long' });

  // 1. Cálculos do MÊS ATUAL
  const receitasMes = await prisma.transacaoFinanceira.aggregate({
    _sum: { valor: true },
    where: { tipo: "RECEITA", dataPgto: { gte: primeiroDiaMes } }
  });
  const despesasMes = await prisma.transacaoFinanceira.aggregate({
    _sum: { valor: true },
    where: { tipo: "DESPESA", dataPgto: { gte: primeiroDiaMes } }
  });

  // 2. Cálculos do HISTÓRICO TOTAL (Tudo o que já entrou e saiu na empresa)
  const receitasTotal = await prisma.transacaoFinanceira.aggregate({
    _sum: { valor: true },
    where: { tipo: "RECEITA" } // Sem filtro de data = pega tudo desde o início
  });
  const despesasTotal = await prisma.transacaoFinanceira.aggregate({
    _sum: { valor: true },
    where: { tipo: "DESPESA" }
  });

  const totalReceitasMes = receitasMes._sum.valor || 0;
  const totalDespesasMes = despesasMes._sum.valor || 0;
  const saldoMensal = totalReceitasMes - totalDespesasMes;
  
  const lucroTotal = (receitasTotal._sum.valor || 0) - (despesasTotal._sum.valor || 0);

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  return (
    <div>
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800">Financeiro</h2>
          <p className="text-slate-500 capitalize">Visão geral e resultados de {nomeMes}</p>
        </div>
        
        {/* Estrutura visual do Filtro (daremos vida a ele depois) */}
        <select className="border border-slate-200 rounded-lg px-4 py-2 bg-white text-sm font-bold text-slate-600 outline-none cursor-pointer">
          <option value="mes_atual">Mês Atual ({nomeMes})</option>
          <option value="todos">Todo o Histórico</option>
        </select>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mb-8">
        {/* Card: Receitas (Mês) */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500 text-sm">Entradas (Mês)</h3>
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <FaArrowUp size={16} />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-800">{formatarMoeda(totalReceitasMes)}</p>
        </div>

        {/* Card: Despesas (Mês) */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500 text-sm">Saídas (Mês)</h3>
            <div className="rounded-full bg-red-100 p-2 text-red-600">
              <FaArrowDown size={16} />
            </div>
          </div>
          <p className="text-2xl font-black text-slate-800">{formatarMoeda(totalDespesasMes)}</p>
        </div>

        {/* Card: Saldo (Mês) */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500 text-sm">Saldo ({nomeMes})</h3>
            <div className="rounded-full bg-blue-100 p-2 text-[#1e3a8a]">
              <FaWallet size={16} />
            </div>
          </div>
          <p className={`text-2xl font-black ${saldoMensal >= 0 ? 'text-[#1e3a8a]' : 'text-red-600'}`}>
            {formatarMoeda(saldoMensal)}
          </p>
        </div>

        {/* NOVO Card: Lucro Total da Empresa (Histórico) */}
        <div className="rounded-lg bg-[#1e3a8a] p-6 shadow-sm border border-[#152c6b] text-white">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-300 text-sm">Lucro Total (Geral)</h3>
            <div className="rounded-full bg-white/10 p-2 text-white">
              <FaLandmark size={16} />
            </div>
          </div>
          <p className="text-2xl font-black">{formatarMoeda(lucroTotal)}</p>
        </div>
      </div>
      
      <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Últimas Movimentações</h3>
        <p className="text-slate-500 text-sm">A lista de transações e o botão de adicionar novo registo entrarão aqui no próximo passo.</p>
      </div>
    </div>
  );
}