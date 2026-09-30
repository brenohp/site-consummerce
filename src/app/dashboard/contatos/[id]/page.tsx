import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaSave } from "react-icons/fa";

export const dynamic = 'force-dynamic';

export default async function EditarContatoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const contato = await prisma.contato.findUnique({
    where: { id },
  });

  if (!contato) notFound();

  const empresas = await prisma.empresa.findMany({
    orderBy: { nome: 'asc' }
  });

  async function atualizarContato(formData: FormData) {
    "use server";
    
    await prisma.contato.update({
      where: { id },
      data: {
        nome: formData.get("nome") as string,
        email: formData.get("email") as string,
        telefone: (formData.get("telefone") as string) || null,
        cargo: (formData.get("cargo") as string) || null,
        statusProspeccao: formData.get("statusProspeccao") as string,
        empresaId: formData.get("empresaId") as string,
      }
    });

    redirect("/dashboard/contatos");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-8 flex items-center gap-4">
        <Link href="/dashboard/contatos" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
          <FaArrowLeft />
        </Link>
        <div>
          <h2 className="text-3xl font-black text-slate-800">Editar Contato</h2>
          <p className="text-slate-500">Atualize as informações de {contato.nome}.</p>
        </div>
      </header>

      <form action={atualizarContato} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
        
        <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg mb-6">
          <label className="block text-sm font-bold text-orange-900 mb-2">Empresa Vinculada <span className="text-red-500">*</span></label>
          <select name="empresaId" required defaultValue={contato.empresaId} className="w-full p-3 border border-orange-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] bg-white cursor-pointer">
            {empresas.map((empresa) => (
              <option key={empresa.id} value={empresa.id}>{empresa.nome}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo <span className="text-red-500">*</span></label>
            <input type="text" name="nome" required defaultValue={contato.nome} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Cargo na Empresa</label>
            <input type="text" name="cargo" defaultValue={contato.cargo || ""} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
            <input type="email" name="email" defaultValue={contato.email || ""} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Telefone / WhatsApp</label>
            <input type="text" name="telefone" defaultValue={contato.telefone || ""} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Status do Relacionamento</label>
          <select name="statusProspeccao" defaultValue={contato.statusProspeccao} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] bg-white cursor-pointer">
            <option value="NAO_ABORDADO">Não Abordado (Lista fria)</option>
            <option value="EM_CONTATO">Em Contato (Conversa inicial)</option>
            <option value="NEGOCIACAO">Em Negociação (Proposta enviada)</option>
            <option value="FECHADO">Fechado (Já é cliente)</option>
            <option value="PERDIDO">Perdido (Não quis fechar)</option>
          </select>
        </div>

        <div className="flex justify-end pt-4">
          <button type="submit" className="px-6 py-3 bg-[#ea580c] text-white font-bold rounded-lg hover:bg-[#c2410c] transition-colors flex items-center gap-2">
            <FaSave /> Atualizar Contato
          </button>
        </div>
      </form>
    </div>
  );
}