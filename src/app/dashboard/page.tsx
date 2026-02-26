import prisma from "@/lib/prisma";
import { FaBuilding, FaUsers, FaCheckCircle } from "react-icons/fa";

// ESTA LINHA É O SEGREDO: Obriga a página a recarregar os dados do banco sempre
export const dynamic = 'force-dynamic';

export default async function DashboardHome() {
  
  // 1. Busca APENAS empresas com status "ATIVO"
  const empresasAtivas = await prisma.empresa.count({
    where: { status: "ATIVO" }
  });

  // 2. Busca o total geral de contatos
  const totalContatos = await prisma.contato.count();

  // 3. Busca crescimento (últimos 30 dias)
  const data30DiasAtras = new Date();
  data30DiasAtras.setDate(data30DiasAtras.getDate() - 30);
  
  const novasEmpresas = await prisma.empresa.count({
    where: {
      status: "ATIVO", // Conta crescimento apenas de ativos também
      createdAt: {
        gte: data30DiasAtras
      }
    }
  });

  return (
    <div>
      <header className="mb-8">
        <h2 className="text-3xl font-black text-slate-800">Visão Geral</h2>
        <p className="text-slate-500">Bem-vindo ao painel de controle ConsumSys.</p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card 1: Empresas Ativas */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500">Empresas Ativas</h3>
            <div className="rounded-full bg-blue-100 p-3 text-consum-navy">
              <FaBuilding size={20} />
            </div>
          </div>
          <p className="text-4xl font-black text-slate-800">{empresasAtivas}</p>
          <span className="text-xs text-green-600 font-bold">
            +{novasEmpresas} ativos recentes
          </span>
        </div>

        {/* Card 2: Contatos */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500">Total de Contatos</h3>
            <div className="rounded-full bg-orange-100 p-3 text-consum-orange">
              <FaUsers size={20} />
            </div>
          </div>
          <p className="text-4xl font-black text-slate-800">{totalContatos}</p>
          <span className="text-xs text-slate-400">Pessoas cadastradas</span>
        </div>

        {/* Card 3: Status */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500">Status do Sistema</h3>
            <div className="rounded-full bg-green-100 p-3 text-green-600">
              <FaCheckCircle size={20} />
            </div>
          </div>
          <p className="text-xl font-black text-slate-800">Operacional</p>
          <span className="text-xs text-slate-400">Conexão segura</span>
        </div>
      </div>
    </div>
  );
}