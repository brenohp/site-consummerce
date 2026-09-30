import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaSave, FaUserPlus, FaTrash, FaUserTie, FaEdit } from "react-icons/fa";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export default async function EditarEmpresaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const empresa = await prisma.empresa.findUnique({
    where: { id },
    include: {
      contatos: { orderBy: { nome: 'asc' } }
    }
  });

  if (!empresa) notFound();

  async function atualizarEmpresa(formData: FormData) {
    "use server";
    await prisma.empresa.update({
      where: { id },
      data: {
        nome: formData.get("nome") as string,
        cnpj: (formData.get("cnpj") as string) || null,
        telefone: (formData.get("telefone") as string) || null,
        endereco: (formData.get("endereco") as string) || null,
        site: (formData.get("site") as string) || null,
        status: formData.get("status") as string,
        gerenciaSite: formData.get("gerenciaSite") === "on",
        anotacoes: (formData.get("anotacoes") as string) || null,
      }
    });
    revalidatePath(`/dashboard/empresas/${id}`);
    redirect("/dashboard/empresas");
  }

  async function adicionarContatoRapido(formData: FormData) {
    "use server";
    await prisma.contato.create({
      data: {
        nome: formData.get("nomeContato") as string,
        cargo: (formData.get("cargoContato") as string) || null,
        telefone: (formData.get("telefoneContato") as string) || null,
        email: (formData.get("emailContato") as string) || "",
        statusProspeccao: formData.get("statusProspeccaoContato") as string,
        empresaId: id,
      }
    });
    revalidatePath(`/dashboard/empresas/${id}`);
  }

  async function removerContato(formData: FormData) {
    "use server";
    const contatoId = formData.get("contatoId") as string;
    await prisma.contato.delete({ where: { id: contatoId } });
    revalidatePath(`/dashboard/empresas/${id}`);
  }

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/empresas" className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
            <FaArrowLeft />
          </Link>
          <div>
            <h2 className="text-3xl font-black text-slate-800">Perfil: {empresa.nome}</h2>
            <p className="text-slate-500">Faça a gestão completa deste cliente.</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LADO ESQUERDO */}
        <div className="lg:col-span-2 space-y-6">
          <form action={atualizarEmpresa} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-4">Dados Principais</h3>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Nome da Empresa <span className="text-red-500">*</span></label>
              <input type="text" name="nome" required defaultValue={empresa.nome} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">CNPJ</label>
                <input type="text" name="cnpj" defaultValue={empresa.cnpj || ""} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Telefone Geral</label>
                <input type="text" name="telefone" defaultValue={empresa.telefone || ""} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Endereço Completo</label>
              <input type="text" name="endereco" defaultValue={empresa.endereco || ""} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Site</label>
                <input type="text" name="site" defaultValue={empresa.site || ""} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Status do Cliente</label>
                <select name="status" defaultValue={empresa.status} className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] bg-white cursor-pointer">
                  <option value="ATIVO">Ativo (Cliente Atual)</option>
                  <option value="PROSPECT">Prospecto (Em Negociação)</option>
                  <option value="INATIVO">Inativo (Ex-cliente)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-100 rounded-lg mt-4">
              <input type="checkbox" name="gerenciaSite" id="gerenciaSite" defaultChecked={empresa.gerenciaSite} className="w-5 h-5 accent-[#ea580c] cursor-pointer" />
              <label htmlFor="gerenciaSite" className="text-sm font-bold text-orange-900 cursor-pointer select-none">
                Eu faço a gestão do site/domínio deste cliente
              </label>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Anotações e Informações Extras</h3>
              <textarea name="anotacoes" rows={5} defaultValue={empresa.anotacoes || ""} placeholder="Ex: O cliente prefere ser contactado de manhã..." className="w-full p-4 border border-slate-200 rounded-lg outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a] resize-y"></textarea>
            </div>

            <div className="flex justify-end pt-4">
              <button type="submit" className="px-6 py-3 bg-[#1e3a8a] text-white font-bold rounded-lg hover:bg-[#152c6b] transition-colors flex items-center gap-2">
                <FaSave /> Guardar Perfil da Empresa
              </button>
            </div>
          </form>
        </div>

        {/* LADO DIREITO */}
        <div className="lg:col-span-1 space-y-6">
          
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-1 flex items-center gap-2">
              <FaUserPlus className="text-[#ea580c]" /> Novo Contato Interno
            </h3>
            <p className="text-xs text-slate-500 mb-4">Adicione rapidamente funcionários desta empresa.</p>
            
            <form action={adicionarContatoRapido} className="space-y-4">
              <div><input type="text" name="nomeContato" required placeholder="Nome (Ex: Mariana)" className="w-full p-2.5 text-sm border border-slate-200 rounded outline-none focus:border-[#ea580c]" /></div>
              <div><input type="text" name="cargoContato" placeholder="Cargo (Ex: Administrativo)" className="w-full p-2.5 text-sm border border-slate-200 rounded outline-none focus:border-[#ea580c]" /></div>
              <div><input type="text" name="telefoneContato" placeholder="Celular / WhatsApp" className="w-full p-2.5 text-sm border border-slate-200 rounded outline-none focus:border-[#ea580c]" /></div>
              <div><input type="email" name="emailContato" placeholder="E-mail" className="w-full p-2.5 text-sm border border-slate-200 rounded outline-none focus:border-[#ea580c]" /></div>
              <div>
                <select name="statusProspeccaoContato" className="w-full p-2.5 text-sm border border-slate-200 rounded outline-none focus:border-[#ea580c] bg-white">
                  <option value="NAO_ABORDADO">Não Abordado</option>
                  <option value="EM_CONTATO">Em Contato</option>
                  <option value="NEGOCIACAO">Em Negociação</option>
                  <option value="FECHADO">Fechado</option>
                  <option value="PERDIDO">Perdido</option>
                </select>
              </div>
              <button type="submit" className="w-full py-2.5 bg-[#ea580c] text-white font-bold rounded hover:bg-[#c2410c] transition-colors text-sm">
                Adicionar Contato
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Contatos Registados</h3>
            
            {empresa.contatos.length === 0 ? (
              <p className="text-sm text-slate-500 text-center py-4 bg-slate-50 rounded">Nenhum contato adicionado ainda.</p>
            ) : (
              <ul className="space-y-3">
                {empresa.contatos.map((contato) => (
                  <li key={contato.id} className="flex items-start justify-between p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors group">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-slate-400"><FaUserTie /></div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{contato.nome}</p>
                        {contato.cargo && <p className="text-xs text-[#ea580c] font-medium">{contato.cargo}</p>}
                        {contato.email && <p className="text-xs text-slate-500 mt-0.5">{contato.email}</p>}
                        {contato.telefone && <p className="text-xs text-slate-500">{contato.telefone}</p>}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/dashboard/contatos/${contato.id}`} className="text-slate-300 hover:text-blue-500 p-1" title="Editar Contato">
                        <FaEdit size={12} />
                      </Link>
                      <form action={removerContato}>
                        <input type="hidden" name="contatoId" value={contato.id} />
                        <button type="submit" title="Remover contato" className="text-slate-300 hover:text-red-500 p-1">
                          <FaTrash size={12} />
                        </button>
                      </form>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}