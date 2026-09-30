import prisma from "@/lib/prisma";
import Link from "next/link";
import { FaCogs, FaPlus, FaTrash, FaBuilding, FaEdit } from "react-icons/fa";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export default async function ServicosPage() {
  const servicos = await prisma.servico.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      empresa: true
    }
  });

  async function deletarServico(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.servico.delete({ where: { id } });
    revalidatePath("/dashboard/servicos");
  }

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  const getStatusEstilo = (status: string) => {
    switch (status) {
      case 'EM_ANDAMENTO': return 'bg-blue-100 text-blue-700';
      case 'CONCLUIDO': return 'bg-green-100 text-green-700';
      case 'PAUSADO': return 'bg-orange-100 text-orange-700';
      case 'CANCELADO': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const formatarStatus = (status: string) => status.replace('_', ' ');

  return (
    <div>
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800">Serviços e Projetos</h2>
          <p className="text-slate-500">Controlo de sites, manutenções e contratos vendidos.</p>
        </div>
        
        <Link 
          href="/dashboard/servicos/novo"
          className="flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#152c6b] transition-colors"
        >
          <FaPlus /> Novo Serviço
        </Link>
      </header>

      <div className="rounded-lg bg-white shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">Lista de Serviços Contratados</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-sm text-slate-500">
                <th className="p-4 font-bold">Serviço / Projeto</th>
                <th className="p-4 font-bold">Cliente</th>
                <th className="p-4 font-bold">Valor</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {!servicos || servicos.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-400">
                    Nenhum serviço registado. Clique em &quot;Novo Serviço&quot; para começar.
                  </td>
                </tr>
              ) : (
                servicos.map((servico) => {
                  if (!servico) return null;
                  return (
                    <tr key={servico.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 text-sm text-slate-800 font-bold">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-blue-100 text-[#1e3a8a] flex items-center justify-center">
                            <FaCogs size={14} />
                          </div>
                          <div>
                            {servico.titulo}
                            {servico.descricao && <span className="block text-xs text-slate-400 font-normal">{servico.descricao}</span>}
                            {servico.dataServico && (
                              <span className="block text-[11px] text-slate-400 font-normal">
                                Realizado em: {new Date(servico.dataServico).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-slate-700 font-medium">
                        <div className="flex items-center gap-1.5">
                          <FaBuilding className="text-slate-400" size={12} />
                          {servico.empresa?.nome || 'Cliente não encontrado'}
                        </div>
                      </td>
                      <td className="p-4 text-sm font-bold text-slate-800">
                        {formatarMoeda(servico.valor)}
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${getStatusEstilo(servico.status)}`}>
                          {formatarStatus(servico.status)}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link 
                            href={`/dashboard/servicos/${servico.id}`} 
                            className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50" 
                            title="Editar Serviço"
                          >
                            <FaEdit />
                          </Link>

                          <form action={deletarServico}>
                            <input type="hidden" name="id" value={servico.id} />
                            <button type="submit" className="text-slate-400 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-red-50" title="Excluir">
                              <FaTrash />
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}