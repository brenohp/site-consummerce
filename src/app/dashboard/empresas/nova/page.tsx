import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function NovaEmpresaPage() {
  async function salvarEmpresa(formData: FormData) {
    "use server";
    
    const nome = formData.get("nome") as string;
    const cnpj = formData.get("cnpj") as string;
    const telefone = formData.get("telefone") as string;
    const endereco = formData.get("endereco") as string;
    const site = formData.get("site") as string;
    const status = formData.get("status") as string;
    const gerenciaSite = formData.get("gerenciaSite") === "on"; // Checkbox retorna "on" se marcado

    await prisma.empresa.create({
      data: {
        nome,
        cnpj: cnpj || null,
        telefone: telefone || null,
        endereco: endereco || null,
        site: site || null,
        status,
        gerenciaSite,
      }
    });

    redirect("/dashboard/empresas");
  }

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-black text-slate-800">Novo Cliente</h2>
        <p className="text-slate-500">Registe uma nova empresa e os seus dados principais.</p>
      </header>

      <form action={salvarEmpresa} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
        
        {/* Nome da Empresa */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Nome da Empresa / Razão Social <span className="text-red-500">*</span></label>
          <input type="text" name="nome" required placeholder="Ex: Tech Solutions Ltda"
            className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">CNPJ</label>
            <input type="text" name="cnpj" placeholder="00.000.000/0000-00"
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Telefone Geral da Empresa</label>
            <input type="text" name="telefone" placeholder="(00) 0000-0000"
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Endereço Completo</label>
          <input type="text" name="endereco" placeholder="Rua, Número, Bairro, Cidade - Estado"
            className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Site</label>
            <input type="text" name="site" placeholder="www.empresa.com.br"
              className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Status do Cliente</label>
            <select name="status" className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] bg-white cursor-pointer">
              <option value="ATIVO">Ativo (Cliente Atual)</option>
              <option value="PROSPECT">Prospecto (Em Negociação)</option>
              <option value="INATIVO">Inativo (Ex-cliente)</option>
            </select>
          </div>
        </div>

        {/* Gerenciamento do Site (A chavinha!) */}
        <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg mt-4">
          <input type="checkbox" name="gerenciaSite" id="gerenciaSite" className="w-5 h-5 accent-[#ea580c] cursor-pointer" />
          <label htmlFor="gerenciaSite" className="text-sm font-bold text-slate-700 cursor-pointer select-none">
            Eu faço a gestão do site/domínio deste cliente
          </label>
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-slate-100">
          <Link href="/dashboard/empresas" className="px-6 py-2.5 text-slate-500 font-bold hover:bg-slate-100 rounded-lg transition-colors flex items-center">Cancelar</Link>
          <button type="submit" className="px-6 py-2.5 bg-[#1e3a8a] text-white font-bold rounded-lg hover:bg-[#152c6b] transition-colors">Salvar Empresa</button>
        </div>
      </form>
    </div>
  );
}