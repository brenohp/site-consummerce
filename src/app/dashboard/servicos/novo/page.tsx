import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function NovoServicoPage() {
  const empresas = await prisma.empresa.findMany({
    orderBy: { nome: 'asc' }
  });

  async function salvarServico(formData: FormData) {
    "use server";
    
    const titulo = formData.get("titulo") as string;
    const descricao = formData.get("descricao") as string;
    const valor = parseFloat(formData.get("valor") as string);
    const status = formData.get("status") as string;
    const empresaId = formData.get("empresaId") as string;
    const dataServicoStr = formData.get("dataServico") as string;

    // Converte a data selecionada para o formato Date do JavaScript/Prisma
    const dataServico = dataServicoStr ? new Date(`${dataServicoStr}T00:00:00Z`) : new Date();

    // Transação atómica: Cria o serviço e gera automaticamente o financeiro com a mesma data
    await prisma.$transaction(async (tx) => {
      await tx.servico.create({
        data: {
          titulo,
          descricao: descricao || null,
          valor,
          status,
          empresaId,
          dataServico,
        }
      });

      // Lançamento automático no módulo financeiro
      if (valor > 0) {
        await tx.transacaoFinanceira.create({
          data: {
            descricao: `Serviço: ${titulo}`,
            tipo: "RECEITA",
            valor,
            categoria: "Projetos / Serviços",
            empresaId,
            dataPgto: dataServico, // Usa a mesma data do serviço
          }
        });
      }
    });

    redirect("/dashboard/servicos");
  }

  // Data atual formatada para preencher o input type="date" por defeito (YYYY-MM-DD)
  const hojeFormatado = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-black text-slate-800">Novo Serviço / Projeto</h2>
        <p className="text-slate-500">Registe um projeto e lance automaticamente no financeiro.</p>
      </header>

      <form action={salvarServico} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
        
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-6">
          <label className="block text-sm font-bold text-blue-900 mb-2">Cliente / Empresa <span className="text-red-500">*</span></label>
          <select name="empresaId" required className="w-full p-3 border border-blue-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] bg-white cursor-pointer">
            <option value="">Selecione uma empresa...</option>
            {empresas.map((empresa) => (
              <option key={empresa.id} value={empresa.id}>{empresa.nome}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Título do Serviço / Projeto <span className="text-red-500">*</span></label>
          <input type="text" name="titulo" required placeholder="Ex: Criação de Site Institucional"
            className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Descrição / Detalhes (Opcional)</label>
          <textarea name="descricao" rows={3} placeholder="Ex: Inclui 5 páginas, painel administrativo e domínio."
            className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] resize-y"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Valor (R$) <span className="text-red-500">*</span></label>
            <input type="number" name="valor" step="0.01" required placeholder="0.00"
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Data de Realização <span className="text-red-500">*</span></label>
            <input type="date" name="dataServico" required defaultValue={hojeFormatado}
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] bg-white cursor-pointer"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Status</label>
            <select name="status" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] bg-white cursor-pointer">
              <option value="EM_ANDAMENTO">Em Andamento</option>
              <option value="CONCLUIDO">Concluído</option>
              <option value="PAUSADO">Pausado</option>
              <option value="CANCELADO">Cancelado</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-slate-100">
          <Link href="/dashboard/servicos" className="px-6 py-2.5 text-slate-500 font-bold hover:bg-slate-100 rounded-lg transition-colors flex items-center">Cancelar</Link>
          <button type="submit" className="px-6 py-2.5 bg-[#1e3a8a] text-white font-bold rounded-lg hover:bg-[#152c6b] transition-colors">Salvar e Lançar no Financeiro</button>
        </div>
      </form>
    </div>
  );
}