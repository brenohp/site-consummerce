import prisma from "@/lib/prisma";
import Link from "next/link";
import { FaBuilding, FaPlus, FaTrash, FaExternalLinkAlt, FaKey, FaEdit } from "react-icons/fa";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export default async function EmpresasPage() {
  const empresas = await prisma.empresa.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      _count: {
        select: { contatos: true, servicos: true }
      }
    }
  });

  async function deletarEmpresa(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    await prisma.empresa.delete({ where: { id } });
    revalidatePath("/dashboard/empresas");
  }

  return (
    <div>
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800">Empresas</h2>
          <p className="text-slate-500">Faça a gestão dos seus clientes e prospectos.</p>
        </div>
        
        <Link 
          href="/dashboard/empresas/nova"
          className="flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[#152c6b] transition-colors"
        >
          <FaPlus /> Nova Empresa
        </Link>
      </header>

      <div className="rounded-lg bg-white shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-800">Lista de Clientes</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-sm text-slate-500">
                <th className="p-4 font-bold">Empresa</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold">Contatos</th>
                <th className="p-4 font-bold">Serviços</th>
                <th className="p-4 font-bold text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {empresas.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-400">
                    Nenhuma empresa registada.
                  </td>
                </tr>
              ) : (
                empresas.map((empresa) => (
                  <tr key={empresa.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 text-sm text-slate-800 font-bold">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-blue-100 text-[#1e3a8a] flex items-center justify-center">
                          <FaBuilding size={14} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            {empresa.nome}
                            {/* Aqui está a chavinha que aparece se você gerencia o site! */}
                            {empresa.gerenciaSite && (
                              <span className="text-[#ea580c]" title="Você faz a gestão deste site/domínio">
                                <FaKey size={12} />
                              </span>
                            )}
                          </div>
                          {empresa.telefone && <span className="block text-xs text-slate-400 font-normal">{empresa.telefone}</span>}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        empresa.status === "ATIVO" ? "bg-green-100 text-green-700" : 
                        empresa.status === "PROSPECT" ? "bg-orange-100 text-orange-700" : 
                        "bg-slate-100 text-slate-700"
                      }`}>
                        {empresa.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600 font-medium">
                      {empresa._count.contatos}
                    </td>
                    <td className="p-4 text-sm text-slate-600 font-medium">
                      {empresa._count.servicos}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* AQUI ESTÁ O LÁPIS DE EDIÇÃO */}
                        <Link 
                          href={`/dashboard/empresas/${empresa.id}`} 
                          className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50" 
                          title="Editar Cliente"
                        >
                          <FaEdit />
                        </Link>
                        
                        {/* Botão de Excluir */}
                        <form action={deletarEmpresa}>
                          <input type="hidden" name="id" value={empresa.id} />
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