import { FaBuilding, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function DashboardHome() {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-3xl font-black text-slate-800">Visão Geral</h2>
        <p className="text-slate-500">Bem-vindo ao painel de controle ConsumSys.</p>
      </header>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500">Empresas Ativas</h3>
            <div className="rounded-full bg-blue-100 p-3 text-consum-navy">
              <FaBuilding size={20} />
            </div>
          </div>
          <p className="text-4xl font-black text-slate-800">0</p>
          <span className="text-xs text-green-600 font-bold">+0% este mês</span>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500">Total de Contatos</h3>
            <div className="rounded-full bg-orange-100 p-3 text-consum-orange">
              <FaUsers size={20} />
            </div>
          </div>
          <p className="text-4xl font-black text-slate-800">0</p>
          <span className="text-xs text-slate-400">Cadastrados no sistema</span>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg bg-white p-6 shadow-sm border border-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-slate-500">Status do Sistema</h3>
            <div className="rounded-full bg-green-100 p-3 text-green-600">
              <FaCheckCircle size={20} />
            </div>
          </div>
          <p className="text-xl font-black text-slate-800">Operacional</p>
          <span className="text-xs text-slate-400">Banco de dados conectado</span>
        </div>
      </div>
    </div>
  );
}