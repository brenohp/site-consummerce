import prisma from "@/lib/prisma";
import Link from "next/link";
import { FaUsers, FaPlus, FaTrash, FaBuilding, FaEdit } from "react-icons/fa";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export default async function ContatosPage() {
  // Busca todos os contatos e os dados da empresa vinculada
  const contatos = await prisma.contato.findMany({
    orderBy: { nome: 'asc' },
    include: {
      empresa: true
    }
  });

  // Função para excluir um contato
  async function deletarContato(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.contato.delete({ where: { id } });
    revalidatePath("/dashboard/contatos");
  }

  // Cores do status
  const getStatusEstilo = (status: string) => {
    switch (status) {
      case 'NAO_ABORDADO': return 'bg-slate-100 text-slate-700';
      case 'EM_CONTATO': return 'bg-blue-100 text-blue-700';
      case 'NEGOCIACAO': return 'bg-purple-100 text-purple-700';
      case 'FECHADO': return 'bg-green-100 text-green-700';
      case 'PERDIDO': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const formatarStatus = (status: string) => status.replace('_', ' ');

  return (
    <div>
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800">Contatos</h2>
          <p className="text-slate-500">Gestão de pessoas e funil de prospecção.</p>
        </div>
        
        <Link 
          href="/dashboard/contatos/novo"
          className="flex items-center justify-center gap-2 bg-[#ea580c] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#c2410c] transition-colors"
        >
          <FaPlus /> Novo Contato
        </Link>
      </header>

      <div className="rounded-lg bg-white shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">Lista de Contatos</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-sm text-slate-500">
                <th className="p-4 font-bold">Nome</th>
                <th className="p-4 font-bold">Empresa</th>
                <th className="p-4 font-bold">Cargo</th>
                <th className="p-4 font-bold">Prospecção</th>
                <th className="p-4 font-bold text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {contatos.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-400">
                    Nenhum contato registado. Clique em {'"Novo Contato"'} para começar.
                  </td>
                </tr>
              ) : (
                contatos.map((contato) => (
                  <tr key={contato.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 text-sm text-slate-800 font-bold">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-orange-100 text-[#ea580c] flex items-center justify-center">
                          <FaUsers size={14} />
                        </div>
                        <div>
                          {contato.nome}
                          <span className="block text-xs text-slate-400 font-normal">{contato.email}</span>
                          {contato.telefone && <span className="block text-xs text-slate-400 font-normal">{contato.telefone}</span>}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-700 font-medium">
                      <div className="flex items-center gap-1.5">
                        <FaBuilding className="text-slate-400" size={12} />
                        {contato.empresa.nome}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      {contato.cargo || <span className="text-slate-400">-</span>}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${getStatusEstilo(contato.statusProspeccao)}`}>
                        {formatarStatus(contato.statusProspeccao)}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Botão de Editar */}
                        <Link 
                          href={`/dashboard/contatos/${contato.id}`} 
                          className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50" 
                          title="Editar Contato"
                        >
                          <FaEdit />
                        </Link>

                        {/* Botão de Excluir */}
                        <form action={deletarContato}>
                          <input type="hidden" name="id" value={contato.id} />
                          <button type="submit" className="text-slate-400 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-red-50" title="Excluir">
                            <FaTrash />
                          </button>
                        </form>
                      </div>
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