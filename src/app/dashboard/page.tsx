import prisma from "@/lib/prisma";
import { FaBuilding, FaUsers, FaLaptopCode } from "react-icons/fa";

export const dynamic = 'force-dynamic';

export default async function DashboardHome() {
  // 1. Clientes Ativos (Recorrência/Vínculo ativo)
  const clientesAtivos = await prisma.empresa.count({
    where: { status: "ATIVO" }
  });

  // 2. Contatos (Geral e Não Abordados para prospecção)
  const totalContatos = await prisma.contato.count();
  const contatosNaoAbordados = await prisma.contato.count({
    where: { statusProspeccao: "NAO_ABORDADO" }
  });

  // 3. Serviços/Projetos 
  const servicosRealizados = await prisma.servico.count({
    where: { status: "CONCLUIDO" }
  });
  const servicosEmAndamento = await prisma.servico.count({
    where: { status: "EM_ANDAMENTO" }
  });

  return (
    <div>
      <header className="mb-8">
        <h2 className="text-3xl font-black text-slate-800">Visão Geral</h2>
        <p className="text-slate-500">Acompanhe as suas empresas, prospecções e serviços operacionais.</p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card 1: Clientes Ativos */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500">Clientes Ativos</h3>
            <div className="rounded-full bg-blue-100 p-3 text-[#1e3a8a]">
              <FaBuilding size={20} />
            </div>
          </div>
          <p className="text-4xl font-black text-slate-800">{clientesAtivos}</p>
          <span className="text-xs text-slate-400">Com vínculo/recorrência</span>
        </div>

        {/* Card 2: Contatos */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500">Contatos Cadastrados</h3>
            <div className="rounded-full bg-orange-100 p-3 text-[#ea580c]">
              <FaUsers size={20} />
            </div>
          </div>
          <p className="text-4xl font-black text-slate-800">{totalContatos}</p>
          <span className="text-xs text-orange-600 font-bold">
            {contatosNaoAbordados} aguardando abordagem
          </span>
        </div>

        {/* Card 3: Serviços */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500">Serviços Realizados</h3>
            <div className="rounded-full bg-purple-100 p-3 text-purple-600">
              <FaLaptopCode size={20} />
            </div>
          </div>
          <p className="text-4xl font-black text-slate-800">{servicosRealizados}</p>
          <span className="text-xs text-purple-600 font-bold">
            {servicosEmAndamento} em andamento neste momento
          </span>
        </div>
      </div>
    </div>
  );
}