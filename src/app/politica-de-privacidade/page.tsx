import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Consummerce",
  description: "Entenda como a Consummerce coleta, utiliza, armazena e protege os seus dados pessoais e comerciais.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-consum-bg">
      {/* O Navbar padrão do seu site */}
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        {/* Cabeçalho da Página */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-consum-navy mb-4">
            Política de Privacidade
          </h1>
          <p className="text-sm text-slate-500">
            Última atualização: 23 de julho de 2026
          </p>
        </div>

        {/* Corpo do Texto */}
        <div className="bg-white p-8 sm:p-12 rounded-xl shadow-sm text-slate-700 space-y-8 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">1. Objetivo desta Política</h2>
            <p>
              A <strong>Consummerce</strong> valoriza a transparência e a segurança da informação. 
              Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos dados pessoais 
              de visitantes, leads e clientes em nosso site e canais de atendimento. Todo o tratamento de dados é realizado 
              em rigorosa conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">2. Dados que Podemos Coletar</h2>
            <p className="mb-2">Os dados coletados variam de acordo com a sua interação com nossas plataformas e serviços:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Dados de Navegação (Cookies):</strong> Coletamos informações sobre o seu dispositivo, endereço IP, 
                navegador, origem de tráfego e páginas visitadas para entender o comportamento no site e otimizar a experiência.
              </li>
              <li>
                <strong>Dados de Contato:</strong> Nome e número de telefone, obtidos quando você inicia uma conversa conosco 
                através do nosso botão de atendimento via WhatsApp.
              </li>
              <li>
                <strong>Dados Comerciais:</strong> Informações corporativas e técnicas compartilhadas durante o atendimento 
                para a elaboração de escopos de projetos, propostas comerciais e contratação de serviços de tecnologia.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">3. Finalidades do Tratamento</h2>
            <p className="mb-2">Utilizamos as informações coletadas para finalidades legítimas relacionadas à nossa operação:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Responder a contatos, dúvidas e solicitações de orçamento;</li>
              <li>Elaborar propostas comerciais e conduzir negociações;</li>
              <li>Executar contratos de desenvolvimento, consultoria ou infraestrutura;</li>
              <li>Aperfeiçoar a navegação do site e nossas estratégias de comunicação;</li>
              <li>Cumprir obrigações legais e manter a segurança da informação.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">4. Base Legal para o Tratamento</h2>
            <p>
              O tratamento de dados pela Consummerce ocorre sempre amparado por uma base legal adequada, que pode incluir: 
              o <strong>consentimento</strong> do titular (como no aceite de cookies não essenciais), a <strong>execução de contrato</strong> 
              (para a prestação dos serviços de tecnologia acordados), o cumprimento de <strong>obrigações legais</strong> e o 
              <strong>legítimo interesse</strong> da empresa no desenvolvimento de suas atividades comerciais, sempre respeitando os direitos do usuário.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">5. Armazenamento e Segurança</h2>
            <p>
              Como uma empresa de tecnologia, adotamos medidas técnicas e organizacionais rigorosas para proteger seus dados 
              contra acessos não autorizados, perdas ou alterações indevidas. Os dados são mantidos apenas pelo tempo necessário 
              para cumprir as finalidades descritas nesta política, para a execução de contratos ou para a defesa de direitos 
              em processos judiciais ou administrativos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">6. Compartilhamento de Informações</h2>
            <p>
              A Consummerce <strong>não comercializa, aluga ou cede</strong> dados pessoais. O compartilhamento ocorre exclusivamente 
              quando necessário para viabilizar nossas operações, incluindo parceiros de infraestrutura em nuvem, ferramentas de 
              analytics e prestadores de serviços de comunicação, os quais também estão sujeitos a rígidos padrões de confidencialidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">7. Direitos do Titular</h2>
            <p className="mb-2">Nos termos da LGPD, você possui o direito de:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Confirmar a existência de tratamento de dados e solicitar acesso a eles;</li>
              <li>Solicitar a correção de dados incompletos ou desatualizados;</li>
              <li>Requerer a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Revogar o seu consentimento (como o gerenciamento e exclusão de cookies através do seu navegador).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-consum-navy mb-3">8. Canal de Atendimento</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade e Proteção de Dados, 
              entre em contato através do e-mail:{" "}
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