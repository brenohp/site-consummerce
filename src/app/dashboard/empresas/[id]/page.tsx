import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { FaArrowLeft, FaUserPlus, FaTrash, FaEnvelope, FaPhone } from "react-icons/fa";

// MUDANÇA 1: params agora é definido como uma Promise
interface EmpresaDetalhesProps {
  params: Promise<{ id: string }>;
}

export default async function EmpresaDetalhesPage({ params }: EmpresaDetalhesProps) {
  // MUDANÇA 2: Extraímos o ID usando 'await' antes de chamar o banco
  const { id } = await params;

  // 1. Busca a empresa e seus contatos no banco usando o 'id' extraído
  const empresa = await prisma.empresa.findUnique({
    where: { id: id },
    include: {
      contatos: {
        orderBy: { nome: "asc" }, // Ordena contatos por nome
      },
    },
  });

  if (!empresa) {
    notFound(); // Retorna página 404 se não achar
  }

  // --- SERVER ACTION: Adicionar Contato ---
  async function addContato(formData: FormData) {
    "use server";
    
    if (!empresa) return;

    await prisma.contato.create({
      data: {
        nome: formData.get("nome") as string,
        email: formData.get("email") as string,
        telefone: formData.get("telefone") as string,
        cargo: formData.get("cargo") as string,
        empresaId: empresa.id,
      },
    });

    revalidatePath(`/dashboard/empresas/${empresa.id}`);
  }

  // --- SERVER ACTION: Deletar Contato ---
  async function deleteContato(formData: FormData) {
    "use server";
    const contatoId = formData.get("contatoId") as string;
    
    await prisma.contato.delete({
      where: { id: contatoId },
    });

    // Se empresa existir, atualiza a página dela
    if (empresa) {
      revalidatePath(`/dashboard/empresas/${empresa.id}`);
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      {/* Cabeçalho com Botão Voltar */}
      <div className="mb-8 flex items-center gap-4">
        <Link
          href="/dashboard/empresas"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
        >
          <FaArrowLeft />
        </Link>
        <div>
          <h2 className="text-3xl font-black text-slate-800">{empresa.nome}</h2>
          <div className="flex gap-3 text-sm text-slate-500">
            <span>CNPJ: {empresa.cnpj || "Não informado"}</span>
            <span>•</span>
            <span className={empresa.status === "ATIVO" ? "text-green-600 font-bold" : "text-slate-500"}>
              {empresa.status}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        
        {/* COLUNA DA ESQUERDA: Formulário de Adicionar Contato */}
        <div className="md:col-span-1">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-800">
              <FaUserPlus className="text-consum-navy" /> Novo Contato
            </h3>
            
            <form action={addContato} className="flex flex-col gap-4">
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-500">Nome *</label>
                <input name="nome" required className="w-full rounded border p-2 text-sm" placeholder="Nome completo" />
              </div>
              
              <div>
                <label className="mb-1 block text-xs font-bold text-slate-500">Email *</label>
                <input name="email" type="email" required className="w-full rounded border p-2 text-sm" placeholder="email@empresa.com" />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-500">Telefone</label>
                <input name="telefone" className="w-full rounded border p-2 text-sm" placeholder="(00) 00000-0000" />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-slate-500">Cargo / Departamento</label>
                <input name="cargo" className="w-full rounded border p-2 text-sm" placeholder="Ex: Financeiro" />
              </div>

              <button type="submit" className="mt-2 w-full rounded-lg bg-consum-navy py-2 text-sm font-bold text-white hover:bg-consum-orange transition-colors">
                Adicionar Contato
              </button>
            </form>
          </div>
        </div>

        {/* COLUNA DA DIREITA: Lista de Contatos */}
        <div className="md:col-span-2">
          <h3 className="mb-4 text-xl font-bold text-slate-800">
            Contatos Vinculados ({empresa.contatos.length})
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {empresa.contatos.length === 0 ? (
              <p className="text-slate-500 italic">Nenhum contato cadastrado nesta empresa.</p>
            ) : (
              empresa.contatos.map((contato) => (
                <div key={contato.id} className="group relative flex items-start justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:border-consum-navy transition-colors">
                  
                  {/* Dados do Contato */}
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">{contato.nome}</h4>
                    <span className="mb-2 inline-block rounded bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">
                      {contato.cargo || "Sem cargo"}
                    </span>
                    
                    <div className="mt-2 flex flex-col gap-1 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="text-consum-orange w-4" /> 
                        <a href={`mailto:${contato.email}`} className="hover:text-consum-navy">{contato.email}</a>
                      </div>
                      {contato.telefone && (
                        <div className="flex items-center gap-2">
                          <FaPhone className="text-consum-orange w-4" /> 
                          {contato.telefone}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Botão de Excluir */}
                  <form action={deleteContato}>
                    <input type="hidden" name="contatoId" value={contato.id} />
                    <button 
                      type="submit" 
                      className="text-slate-300 hover:text-red-600 transition-colors p-2"
                      title="Remover contato"
                    >
                      <FaTrash size={14} />
                    </button>
                  </form>

                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}