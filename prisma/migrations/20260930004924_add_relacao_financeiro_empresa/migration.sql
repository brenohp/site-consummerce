-- AlterTable
ALTER TABLE "transacoes_financeiras" ADD COLUMN     "empresaId" TEXT;

-- AddForeignKey
ALTER TABLE "transacoes_financeiras" ADD CONSTRAINT "transacoes_financeiras_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "empresas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
