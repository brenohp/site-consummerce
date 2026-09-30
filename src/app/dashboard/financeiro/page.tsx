import prisma from "@/lib/prisma";
import { FaArrowUp, FaArrowDown, FaWallet, FaLandmark, FaPlus, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import FiltroPeriodo from "./FiltroPeriodo";

export const dynamic = 'force-dynamic';

// ATUALIZAÇÃO: searchParams agora é uma Promise
export default async function FinanceiroPage({
  searchParams,
}: {
  searchParams: Promise<{ periodo?: string }>;
}) {
  // ATUALIZAÇÃO: usamos await para ler o searchParams
  const resolvedSearchParams = await searchParams;
  const periodo = resolvedSearchParams.periodo || "mes_atual";
  
  const dataAtual = new Date();
  const primeiroDiaMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
  const nomeMes = dataAtual.toLocaleDateString('pt-BR', { month: 'long' });

  // Define a regra: se for "mes_atual", filtra pela data. Se for "todos", não filtra nada.
  const whereFiltro = periodo === "mes_atual" ? { dataPgto: { gte: primeiroDiaMes } } : {};

  // 1. Cálculos dos Cartões (Respeitam o filtro, exceto o Lucro Total)
  const receitasFiltradas = await prisma.transacaoFinanceira.aggregate({
    _sum: { valor: true },
    where: { tipo: "RECEITA", ...whereFiltro }
  });
  const despesasFiltradas = await prisma.transacaoFinanceira.aggregate({
    _sum: { valor: true },
    where: { tipo: "DESPESA", ...whereFiltro }
  });

  // O Lucro Total Geral nunca muda, é sempre o histórico completo
  const receitasTotal = await prisma.transacaoFinanceira.aggregate({
    _sum: { valor: true }, where: { tipo: "RECEITA" } 
  });
  const despesasTotal = await prisma.transacaoFinanceira.aggregate({
    _sum: { valor: true }, where: { tipo: "DESPESA" }
  });

  const totalReceitas = receitasFiltradas._sum.valor || 0;
  const totalDespesas = despesasFiltradas._sum.valor || 0;
  const saldoPeriodo = totalReceitas - totalDespesas;
  const lucroTotal = (receitasTotal._sum.valor || 0) - (despesasTotal._sum.valor || 0);

  // 2. Tabela de Transações (Respeita o filtro e agora ordena pela data de pagamento real)
  const transacoes = await prisma.transacaoFinanceira.findMany({
    where: whereFiltro,
    orderBy: { dataPgto: 'desc' }, 
    include: { empresa: true } 
  });

  // 3. Função Excluir
  async function deletarTransacao(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.transacaoFinanceira.delete({ where: { id } });
    revalidatePath("/dashboard/financeiro");
  }

  const formatarMoeda = (valor: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  const formatarData = (data: Date) => data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

  return (
    <div>
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800">Financeiro</h2>
          <p className="text-slate-500 capitalize">
            {periodo === "mes_atual" ? `Visão geral de ${nomeMes}` : "Histórico completo da empresa"}
          </p>
        </div>
        
        <FiltroPeriodo mesAtual={nomeMes} />
      </header>

      {/* Cartões de Resumo */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mb-8">
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500 text-sm">Entradas ({periodo === "mes_atual" ? "Mês" : "Total"})</h3>
            <div className="rounded-full bg-green-100 p-2 text-green-600"><FaArrowUp size={16} /></div>
          </div>
          <p className="text-2xl font-black text-slate-800">{formatarMoeda(totalReceitas)}</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500 text-sm">Saídas ({periodo === "mes_atual" ? "Mês" : "Total"})</h3>
            <div className="rounded-full bg-red-100 p-2 text-red-600"><FaArrowDown size={16} /></div>
          </div>
          <p className="text-2xl font-black text-slate-800">{formatarMoeda(totalDespesas)}</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500 text-sm">Saldo ({periodo === "mes_atual" ? nomeMes : "Total"})</h3>
            <div className="rounded-full bg-blue-100 p-2 text-[#1e3a8a]"><FaWallet size={16} /></div>
          </div>
          <p className={`text-2xl font-black ${saldoPeriodo >= 0 ? 'text-[#1e3a8a]' : 'text-red-600'}`}>
            {formatarMoeda(saldoPeriodo)}
          </p>
        </div>

        <div className="rounded-lg bg-[#1e3a8a] p-6 shadow-sm border border-[#152c6b] text-white">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-300 text-sm">Lucro Total (Geral)</h3>
            <div className="rounded-full bg-white/10 p-2 text-white"><FaLandmark size={16} /></div>
          </div>
          <p className="text-2xl font-black">{formatarMoeda(lucroTotal)}</p>
        </div>
      </div>
      
      {/* Tabela de Transações */}
      <div className="rounded-lg bg-white shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Últimas Movimentações</h3>
          </div>
          <Link href="/dashboard/financeiro/nova" className="flex items-center justify-center gap-2 bg-[#ea580c] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#c2410c] transition-colors text-sm">
            <FaPlus /> Nova Movimentação
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-sm text-slate-500">
                <th className="p-4 font-bold">Data</th>
                <th className="p-4 font-bold">Descrição</th>
                <th className="p-4 font-bold">Cliente</th>
                <th className="p-4 font-bold">Tipo</th>
                <th className="p-4 font-bold">Valor</th>
                <th className="p-4 font-bold text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {transacoes.length === 0 ? (
                <tr><td colSpan={6} className="p-8 text-center text-slate-400">Nenhuma movimentação neste período.</td></tr>
              ) : (
                transacoes.map((t) => (
                  <tr key={t.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 text-sm text-slate-600">{formatarData(t.dataPgto)}</td>
                    <td className="p-4 text-sm text-slate-800 font-medium">{t.descricao}</td>
                    <td className="p-4 text-sm text-slate-600">{t.empresa?.nome || <span className="text-slate-400 italic">Geral</span>}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${t.tipo === "RECEITA" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{t.tipo}</span>
                    </td>
                    <td className={`p-4 text-sm font-bold ${t.tipo === "RECEITA" ? "text-green-600" : "text-red-600"}`}>
                      {t.tipo === "RECEITA" ? "+" : "-"}{formatarMoeda(t.valor)}
                    </td>
                    <td className="p-4 text-right">
                      <form action={deletarTransacao}>
                        <input type="hidden" name="id" value={t.id} />
                        <button type="submit" className="text-slate-400 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-red-50"><FaTrash /></button>
                      </form>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}