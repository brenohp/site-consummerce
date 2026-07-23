import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Consummerce",
  description: "Termos e condições de uso do site e dos serviços da Consummerce.",
};

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-consum-bg">
      {/* O Navbar padrão do seu site */}
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        {/* Cabeçalho da Página */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-consum-navy mb-4">
            Termos de Uso
          </h1>
          <p className="text-sm text-slate-500">
            Última atualização: 23 de julho de 2026
          </p>
        </div>

        {/* Corpo do Texto */}
        <div className="bg-white p-8 sm:p-12 rounded-xl shadow-sm text-slate-700 space-y-8 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da <strong>Consummerce</strong>, você concorda em cumprir e ficar vinculado 
              a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, recomendamos que não 
              utilize nosso site e nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">2. Uso do Site e Conduta do Usuário</h2>
            <p className="mb-2">Você concorda em utilizar nosso site apenas para fins lícitos e de maneira que não infrinja os direitos de terceiros. É estritamente proibido:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Utilizar o site para qualquer finalidade ilegal ou não autorizada;</li>
              <li>Tentar acessar áreas restritas do site, servidores ou redes conectadas à Consummerce sem autorização;</li>
              <li>Introduzir vírus, malwares ou qualquer outro código de natureza destrutiva;</li>
              <li>Copiar, modificar ou distribuir qualquer conteúdo deste site sem nossa permissão prévia e por escrito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente neste site, incluindo, mas não se limitando a, textos, gráficos, logotipos, 
              ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e códigos de software 
              (desenvolvimento web e aplicativos), é de propriedade exclusiva da <strong>Consummerce</strong> 
              ou de seus fornecedores de conteúdo, estando protegido pelas leis de direitos autorais e de propriedade intelectual brasileiras e internacionais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">4. Isenção de Responsabilidade</h2>
            <p>
              A Consummerce se esforça para manter as informações do site atualizadas e corretas. No entanto, 
              o site é fornecido &quot;no estado em que se encontra&quot; (<em>as is</em>). Não garantimos que o site estará 
              disponível de forma ininterrupta, livre de erros ou totalmente seguro a todo momento. A Consummerce 
              não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes 
              do uso ou da incapacidade de usar o nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">5. Links para Sites de Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros (como redes sociais, parceiros de tecnologia ou 
              portfólio de clientes). Esses links são fornecidos apenas para sua conveniência. A Consummerce não tem 
              controle sobre o conteúdo desses sites e não assume qualquer responsabilidade por eles ou por 
              quaisquer perdas ou danos que possam surgir do seu uso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">6. Modificações dos Termos</h2>
            <p>
              A Consummerce reserva-se o direito de revisar e modificar estes Termos de Uso a qualquer momento, 
              sem aviso prévio. Ao continuar a usar o site após a publicação de alterações, você concorda em 
              ficar vinculado aos termos revisados. Recomendamos que você revise esta página periodicamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">7. Contato e Dúvidas</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Uso, sobre nossas práticas de desenvolvimento de 
              software ou sobre como operamos, entre em contato conosco através do e-mail:{" "}
              <a href="mailto:contato@consummerce.com.br" className="text-consum-orange font-semibold hover:underline">
                contato@consummerce.com.br
              </a>.
            </p>
          </section>

        </div>
      </div>

      {/* O Footer padrão do seu site */}
      <Footer />
    </main>
  );
}