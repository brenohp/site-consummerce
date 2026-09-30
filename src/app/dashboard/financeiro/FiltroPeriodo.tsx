"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FiltroPeriodo({ mesAtual }: { mesAtual: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const periodoAtual = searchParams.get("periodo") || "mes_atual";

  return (
    <select
      value={periodoAtual}
      onChange={(e) => router.push(`/dashboard/financeiro?periodo=${e.target.value}`)}
      className="border border-slate-200 rounded-lg px-4 py-2 bg-white text-sm font-bold text-slate-600 outline-none cursor-pointer"
    >
      <option value="mes_atual">Mês Atual ({mesAtual})</option>
      <option value="todos">Todo o Histórico</option>
    </select>
  );
}