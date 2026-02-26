import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default function NovaEmpresaPage() {
  
  // --- SERVER ACTION: Roda no servidor quando o form é enviado ---
  async function createEmpresa(formData: FormData) {
    "use server";

    const nome = formData.get("nome") as string;
    const cnpj = formData.get("cnpj") as string;
    const site = formData.get("site") as string;
    const status = formData.get("status") as string;

    // Salva no banco
    await prisma.empresa.create({
      data: {
        nome,
        cnpj,
        site,
        status,
      },
    });

    // Atualiza o cache da listagem e redireciona
    revalidatePath("/dashboard/empresas");
    revalidatePath("/dashboard");
    redirect("/dashboard/empresas");
  }

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-8">
        <h2 className="text-3xl font-black text-slate-800">Nova Empresa</h2>
        <p className="text-slate-500">Preencha os dados para cadastrar um novo cliente.</p>
      </header>

      <form action={createEmpresa} className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6">
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="mb-2 block text-sm font-bold text-slate-700">
              Nome da Empresa *
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              required
              placeholder="Ex: Consummerce Ltda"
              className="w-full rounded-md border border-slate-300 p-3 text-sm focus:border-consum-navy focus:outline-none focus:ring-1 focus:ring-consum-navy"
            />
          </div>

          {/* Grid 2 Colunas */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* CNPJ */}
            <div>
              <label htmlFor="cnpj" className="mb-2 block text-sm font-bold text-slate-700">
                CNPJ
              </label>
              <input
                type="text"
                name="cnpj"
                id="cnpj"
                placeholder="00.000.000/0000-00"
                className="w-full rounded-md border border-slate-300 p-3 text-sm focus:border-consum-navy focus:outline-none focus:ring-1 focus:ring-consum-navy"
              />
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="mb-2 block text-sm font-bold text-slate-700">
                Status
              </label>
              <select
                name="status"
                id="status"
                className="w-full rounded-md border border-slate-300 p-3 text-sm focus:border-consum-navy focus:outline-none focus:ring-1 focus:ring-consum-navy"
              >
                <option value="ATIVO">Ativo</option>
                <option value="PROSPECT">Prospect (Em negociação)</option>
                <option value="INATIVO">Inativo</option>
              </select>
            </div>
          </div>

          {/* Site */}
          <div>
            <label htmlFor="site" className="mb-2 block text-sm font-bold text-slate-700">
              Site
            </label>
            <input
              type="url"
              name="site"
              id="site"
              placeholder="https://www.empresa.com.br"
              className="w-full rounded-md border border-slate-300 p-3 text-sm focus:border-consum-navy focus:outline-none focus:ring-1 focus:ring-consum-navy"
            />
          </div>

          {/* Botões */}
          <div className="mt-4 flex items-center justify-end gap-4">
            <Link
              href="/dashboard/empresas"
              className="text-sm font-bold text-slate-500 hover:text-slate-800"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className="rounded-lg bg-consum-navy px-6 py-3 text-sm font-bold text-white transition-all hover:bg-consum-orange hover:shadow-lg"
            >
              Salvar Empresa
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}