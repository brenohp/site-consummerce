import prisma from "@/lib/prisma";
import Link from "next/link";
import { FaBuilding, FaWallet, FaArrowRight, FaUsers, FaChartLine } from "react-icons/fa";

export const dynamic = 'force-dynamic';

export default async function DashboardResumoPage() {
  // 1. Cálculos de data (Mês atual)
  const dataAtual = new Date();
  const primeiroDiaMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
  const nomeMes = dataAtual.toLocaleDateString('pt-BR', { month: 'long' });

  // 2. Procurar dados na base de dados
  const totalClientesAtivos = await prisma.empresa.count({
    where: { status: "ATIVO" }
  });

  const totalProspectos = await prisma.empresa.count({
    where: { status: "PROSPECT" }
  });

  const receitasMes = await prisma.transacaoFinanceira.aggregate({
    _sum: { valor: true },
    where: { tipo: "RECEITA", dataPgto: { gte: primeiroDiaMes } }
  });

  const ultimosClientes = await prisma.empresa.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' }
  });

  const ultimasTransacoes = await prisma.transacaoFinanceira.findMany({
    take: 4,
    orderBy: { dataPgto: 'desc' },
    include: { empresa: true }
  });

  const faturamentoMes = receitasMes._sum.valor || 0;

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  return (
    <div>
      <header className="mb-8">
        <h2 className="text-3xl font-black text-slate-800">Olá, bem-vindo de volta!</h2>
        <p className="text-slate-500">Aqui está o resumo do seu negócio em {nomeMes}.</p>
      </header>

      {/* Cartões de Resumo Rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Faturamento do Mês */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500 mb-1">Faturamento ({nomeMes})</p>
            <h3 className="text-3xl font-black text-slate-800">{formatarMoeda(faturamentoMes)}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <FaWallet size={20} />
          </div>
        </div>

        {/* Clientes Ativos */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500 mb-1">Clientes Ativos</p>
            <h3 className="text-3xl font-black text-slate-800">{totalClientesAtivos}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#1e3a8a]">
            <FaBuilding size={20} />
          </div>
        </div>

        {/* Prospectos */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500 mb-1">Prospectos (Funil)</p>
            <h3 className="text-3xl font-black text-slate-800">{totalProspectos}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-[#ea580c]">
            <FaUsers size={20} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card: Últimas Entradas Financeiras */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <FaChartLine className="text-slate-400" /> Movimentações Recentes
            </h3>
            <Link href="/dashboard/financeiro" className="text-sm font-bold text-[#1e3a8a] hover:underline flex items-center gap-1">
              Ver todas <FaArrowRight size={10} />
            </Link>
          </div>
          <div className="p-5">
            {ultimasTransacoes.length === 0 ? (
              <p className="text-sm text-slate-500 text-center py-4">Nenhuma movimentação registada.</p>
            ) : (
              <ul className="space-y-4">
                {ultimasTransacoes.map(t => (
                  <li key={t.id} className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                    <div>
                      <p className="font-bold text-sm text-slate-800">{t.descricao}</p>
                      <p className="text-xs text-slate-500">{t.empresa ? t.empresa.nome : 'Sem cliente'}</p>
                    </div>
                    <span className={`font-black text-sm ${t.tipo === 'RECEITA' ? 'text-green-600' : 'text-red-600'}`}>
                      {t.tipo === 'RECEITA' ? '+' : '-'}{formatarMoeda(t.valor)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Card: Últimos Clientes Adicionados */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <FaBuilding className="text-slate-400" /> Últimos Clientes
            </h3>
            <Link href="/dashboard/empresas" className="text-sm font-bold text-[#1e3a8a] hover:underline flex items-center gap-1">
              Ver todos <FaArrowRight size={10} />
            </Link>
          </div>
          <div className="p-5">
            {ultimosClientes.length === 0 ? (
              <p className="text-sm text-slate-500 text-center py-4">Nenhum cliente registado.</p>
            ) : (
              <ul className="space-y-4">
                {ultimosClientes.map(empresa => (
                  <li key={empresa.id} className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                    <div>
                      <Link href={`/dashboard/empresas/${empresa.id}`} className="font-bold text-sm text-slate-800 hover:text-[#1e3a8a] transition-colors">
                        {empresa.nome}
                      </Link>
                      <p className="text-xs text-slate-500">{new Date(empresa.createdAt).toLocaleDateString('pt-BR')}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                      empresa.status === "ATIVO" ? "bg-green-100 text-green-700" : 
                      empresa.status === "PROSPECT" ? "bg-orange-100 text-orange-700" : "bg-slate-100 text-slate-700"
                    }`}>
                      {empresa.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}