import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaSave } from "react-icons/fa";

export const dynamic = 'force-dynamic';

export default async function EditarServicoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  if (!id) {
    notFound();
  }

  const servico = await prisma.servico.findUnique({
    where: { id },
  });

  if (!servico) {
    notFound();
  }

  // Guardamos a data numa constante segura para uso posterior
  const dataOriginal = servico.dataServico;

  const empresas = await prisma.empresa.findMany({
    orderBy: { nome: 'asc' }
  });

  async function atualizarServico(formData: FormData) {
    "use server";
    
    const titulo = formData.get("titulo") as string;
    const descricao = formData.get("descricao") as string;
    const valor = parseFloat(formData.get("valor") as string);
    const status = formData.get("status") as string;
    const empresaId = formData.get("empresaId") as string;
    const dataServicoStr = formData.get("dataServico") as string;

    const dataServico = dataServicoStr ? new Date(`${dataServicoStr}T00:00:00Z`) : dataOriginal;

    await prisma.servico.update({
      where: { id },
      data: {
        titulo,
        descricao: descricao || null,
        valor,
        status,
        empresaId,
        dataServico,
      }
    });

    redirect("/dashboard/servicos");
  }

  const dataFormatada = new Date(dataOriginal).toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-8 flex items-center gap-4">
        <Link href="/dashboard/servicos" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
          <FaArrowLeft />
        </Link>
        <div>
          <h2 className="text-3xl font-black text-slate-800">Editar Serviço</h2>
          <p className="text-slate-500">Atualize as informações do projeto.</p>
        </div>
      </header>

      <form action={atualizarServico} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
        
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-6">
          <label className="block text-sm font-bold text-blue-900 mb-2">Cliente / Empresa <span className="text-red-500">*</span></label>
          <select name="empresaId" required defaultValue={servico.empresaId} className="w-full p-3 border border-blue-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] bg-white cursor-pointer">
            {empresas.map((empresa) => (
              <option key={empresa.id} value={empresa.id}>{empresa.nome}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Título do Serviço / Projeto <span className="text-red-500">*</span></label>
          <input type="text" name="titulo" required defaultValue={servico.titulo}
            className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Descrição / Detalhes (Opcional)</label>
          <textarea name="descricao" rows={3} defaultValue={servico.descricao || ""}
            className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] resize-y"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Valor (R$) <span className="text-red-500">*</span></label>
            <input type="number" name="valor" step="0.01" required defaultValue={servico.valor}
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Data de Realização <span className="text-red-500">*</span></label>
            <input type="date" name="dataServico" required defaultValue={dataFormatada}
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] bg-white cursor-pointer"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-bold text-slate-700 mb-2">Status</label>
            <select name="status" defaultValue={servico.status} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] bg-white cursor-pointer">
              <option value="EM_ANDAMENTO">Em Andamento</option>
              <option value="CONCLUIDO">Concluído</option>
              <option value="PAUSADO">Pausado</option>
              <option value="CANCELADO">Cancelado</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-slate-100">
          <Link href="/dashboard/servicos" className="px-6 py-2.5 text-slate-500 font-bold hover:bg-slate-100 rounded-lg transition-colors flex items-center">Cancelar</Link>
          <button type="submit" className="px-6 py-2.5 bg-[#ea580c] text-white font-bold rounded-lg hover:bg-[#c2410c] transition-colors flex items-center gap-2">
            <FaSave /> Atualizar Serviço
          </button>
        </div>
      </form>
    </div>
  );
}