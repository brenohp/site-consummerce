"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBuilding, FaUsers, FaChartPie, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Visão Geral", icon: <FaChartPie />, path: "/dashboard" },
    { name: "Empresas", icon: <FaBuilding />, path: "/dashboard/empresas" },
    { name: "Contatos", icon: <FaUsers />, path: "/dashboard/contatos" },
    { name: "Configurações", icon: <FaCog />, path: "/dashboard/config" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-consum-navy text-white shadow-xl">
      {/* Logo da Sidebar */}
      <div className="flex h-20 items-center justify-center border-b border-white/10">
        <h1 className="text-2xl font-black tracking-tight">
          <span className="text-white">Consum</span>
          <span className="text-consum-orange">Sys</span>
        </h1>
      </div>

      {/* Menu de Navegação */}
      <nav className="mt-8 flex flex-col gap-2 px-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-bold transition-all ${
                isActive
                  ? "bg-consum-orange text-white shadow-md"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Botão de Sair (Fixo no final) */}
      <div className="absolute bottom-8 left-0 w-full px-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 p-3 text-sm font-bold text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
          <FaSignOutAlt />
          Sair do Sistema
        </button>
      </div>
    </aside>
  );
}