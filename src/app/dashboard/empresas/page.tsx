import Link from "next/link";
import prisma from "@/lib/prisma";
import { FaPlus, FaBuilding } from "react-icons/fa";

// ADICIONE ISTO PARA A LISTA APARECER SEMPRE ATUALIZADA
export const dynamic = 'force-dynamic';

export default async function EmpresasPage() {
  const empresas = await prisma.empresa.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { contatos: true } } },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-800">Empresas</h2>
          <p className="text-slate-500">Gerencie seus clientes e parceiros.</p>
        </div>
        <Link
          href="/dashboard/empresas/novo"
          className="flex items-center gap-2 rounded-lg bg-consum-navy px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-consum-orange"
        >
          <FaPlus /> Nova Empresa
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-6 py-4 font-bold">Empresa</th>
              <th className="px-6 py-4 font-bold">CNPJ</th>
              <th className="px-6 py-4 font-bold">Status</th>
              <th className="px-6 py-4 font-bold">Contatos</th>
              <th className="px-6 py-4 font-bold text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {empresas.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-400">
                  Nenhuma empresa cadastrada ainda.
                </td>
              </tr>
            ) : (
              empresas.map((empresa) => (
                <tr key={empresa.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                        <FaBuilding />
                      </div>
                      <div>
                        {/* Link para detalhes da empresa */}
                        <Link href={`/dashboard/empresas/${empresa.id}`} className="font-bold hover:text-consum-navy hover:underline">
                          {empresa.nome}
                        </Link>
                        <div className="text-xs text-slate-400">{empresa.site || "Sem site"}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{empresa.cnpj || "-"}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-bold ${
                        empresa.status === "ATIVO"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {empresa.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold">{empresa._count.contatos}</span> contatos
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/dashboard/empresas/${empresa.id}`} className="text-consum-navy hover:text-consum-orange font-bold">
                      Editar
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}