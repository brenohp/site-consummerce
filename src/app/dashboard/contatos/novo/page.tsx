import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function NovoContatoPage() {
  // Busca todas as empresas para listar no campo de seleção
  const empresas = await prisma.empresa.findMany({
    orderBy: { nome: 'asc' }
  });

  async function salvarContato(formData: FormData) {
    "use server";
    
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const telefone = formData.get("telefone") as string;
    const cargo = formData.get("cargo") as string;
    const statusProspeccao = formData.get("statusProspeccao") as string;
    const empresaId = formData.get("empresaId") as string;

    await prisma.contato.create({
      data: {
        nome,
        email,
        telefone: telefone || null,
        cargo: cargo || null,
        statusProspeccao,
        empresaId, // Obrigatório, pois toda a pessoa tem de pertencer a uma empresa
      }
    });

    redirect("/dashboard/contatos");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-black text-slate-800">Novo Contato</h2>
        <p className="text-slate-500">Adicione uma pessoa e vincule-a a uma empresa.</p>
      </header>

      <form action={salvarContato} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
        
        {/* Vínculo com a Empresa */}
        <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg mb-6">
          <label className="block text-sm font-bold text-orange-900 mb-2">Empresa Vinculada <span className="text-red-500">*</span></label>
          <select
            name="empresaId"
            required
            className="w-full p-3 border border-orange-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] bg-white cursor-pointer"
          >
            <option value="">Selecione uma empresa...</option>
            {empresas.map((empresa) => (
              <option key={empresa.id} value={empresa.id}>
                {empresa.nome}
              </option>
            ))}
          </select>
        </div>

        {/* Dados Pessoais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="nome"
              required
              placeholder="Ex: João Silva"
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Cargo na Empresa</label>
            <input
              type="text"
              name="cargo"
              placeholder="Ex: Diretor de TI, Sócio, Gerente"
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">E-mail <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              required
              placeholder="joao@empresa.com"
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Telefone Direto / WhatsApp</label>
            <input
              type="text"
              name="telefone"
              placeholder="(00) 90000-0000"
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
            />
          </div>
        </div>

        {/* Status de Prospecção */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Status do Relacionamento</label>
          <select
            name="statusProspeccao"
            className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] bg-white cursor-pointer"
          >
            <option value="NAO_ABORDADO">Não Abordado (Lista fria)</option>
            <option value="EM_CONTATO">Em Contato (Conversa inicial)</option>
            <option value="NEGOCIACAO">Em Negociação (Proposta enviada)</option>
            <option value="FECHADO">Fechado (Já é cliente)</option>
            <option value="PERDIDO">Perdido (Não quis fechar)</option>
          </select>
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-slate-100">
          <Link
            href="/dashboard/contatos"
            className="px-6 py-2.5 text-slate-500 font-bold hover:bg-slate-100 rounded-lg transition-colors flex items-center"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#ea580c] text-white font-bold rounded-lg hover:bg-[#c2410c] transition-colors"
          >
            Salvar Contato
          </button>
        </div>
      </form>
    </div>
  );
}