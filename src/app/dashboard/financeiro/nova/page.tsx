import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function NovaTransacaoPage() {
  const empresas = await prisma.empresa.findMany({
    orderBy: { nome: 'asc' }
  });

  async function salvarTransacao(formData: FormData) {
    "use server";
    
    const descricao = formData.get("descricao") as string;
    const tipo = formData.get("tipo") as string;
    const valor = parseFloat(formData.get("valor") as string);
    const empresaId = formData.get("empresaId") as string;
    const dataPgtoInput = formData.get("dataPgto") as string;
    
    // Adicionamos um horário fixo ao meio-dia para evitar que o fuso horário atrase a data num dia
    const dataPgto = new Date(`${dataPgtoInput}T12:00:00`);

    await prisma.transacaoFinanceira.create({
      data: {
        descricao,
        tipo,
        valor,
        dataPgto,
        empresaId: empresaId || null,
      }
    });

    redirect("/dashboard/financeiro");
  }

  // Captura a data de hoje no formato YYYY-MM-DD para o input
  const hoje = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-black text-slate-800">Nova Movimentação</h2>
        <p className="text-slate-500">Registe uma nova entrada ou saída e vincule a um cliente.</p>
      </header>

      <form action={salvarTransacao} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
        
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Descrição</label>
          <input type="text" name="descricao" required placeholder="Ex: Criação de Site Institucional"
            className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Data</label>
            <input type="date" name="dataPgto" required defaultValue={hoje}
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Tipo</label>
            <select name="tipo" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] bg-white">
              <option value="RECEITA">Receita (Entrada)</option>
              <option value="DESPESA">Despesa (Saída)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Valor (R$)</label>
            <input type="number" name="valor" step="0.01" required placeholder="0.00"
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Cliente Relacionado (Opcional)</label>
          <select name="empresaId" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] bg-white cursor-pointer">
            <option value="">Nenhum cliente específico</option>
            {empresas.map((empresa) => (
              <option key={empresa.id} value={empresa.id}>{empresa.nome}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-slate-100">
          <Link href="/dashboard/financeiro" className="px-6 py-2.5 text-slate-500 font-bold hover:bg-slate-100 rounded-lg transition-colors flex items-center">
            Cancelar
          </Link>
          <button type="submit" className="px-6 py-2.5 bg-[#1e3a8a] text-white font-bold rounded-lg hover:bg-[#152c6b] transition-colors">
            Salvar Transação
          </button>
        </div>
      </form>
    </div>
  );
}