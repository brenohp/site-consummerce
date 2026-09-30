-- AlterTable
ALTER TABLE "empresas" ADD COLUMN     "endereco" TEXT,
ADD COLUMN     "gerenciaSite" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "telefone" TEXT;
