import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function GET() {
  try {
    // Encripta a palavra-passe "admin123"
    const hashedPassword = await bcrypt.hash("#Breno2521", 10);
    
    // Cria o utilizador (ou ignora se já existir)
    const user = await prisma.user.upsert({
      where: { email: "brenohpadovan@gmail.com" },
      update: {},
      create: {
        name: "Breno",
        email: "brenohpadovan@gmail.com",
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    return NextResponse.json({ 
      message: "Utilizador criado com sucesso! Já pode apagar este ficheiro.", 
      email: user.email 
    });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar utilizador" }, { status: 500 });
  }
}