import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar Fixa */}
      <Sidebar />

      {/* Área de Conteúdo (Deslocada para a direita por causa da sidebar) */}
      <main className="ml-64 w-full p-8">
        {children}
      </main>
    </div>
  );
}