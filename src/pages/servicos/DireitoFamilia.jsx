import { useEffect } from "react";
import "./DireitoFamilia.css";
import { Link } from "react-router-dom";

function DireitoFamilia() {
  useEffect(() => {
    const dadosEstruturados = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Direito de Família",
      serviceType: "Serviços jurídicos em Direito de Família",
      description:
        "Orientação jurídica em questões familiares, com atenção às particularidades de cada situação.",
      url: "https://franciscaleal.adv.br/direito-de-familia",
      provider: {
        "@type": "LegalService",
        name: "Francisca Leal Advocacia",
        url: "https://franciscaleal.adv.br/",
      },
      areaServed: {
        "@type": "City",
        name: "Picos",
        containedInPlace: {
          "@type": "State",
          name: "Piauí",
        },
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(dadosEstruturados);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);
  return (
    <main className="pagina-servico">
      <section className="servico-hero">
        <div className="servico-hero-imagem">
          <img
            src="/direito-familia-hero-panoramica.png"
            alt="Ambiente jurídico com livros, balança da Justiça e representação de uma família"
          />
        </div>

        <div className="servico-hero-conteudo">
          <span className="servico-subtitulo">FRANCISCA LEAL ADVOCACIA</span>

          <h1>Direito de Família</h1>

          <p>
            Orientação jurídica em questões familiares, com atenção às
            particularidades de cada situação.
          </p>

          <a href="#sobre-servico" className="servico-botao">
            Conheça nossa atuação
          </a>
        </div>
      </section>

      <section id="sobre-servico" className="servico-introducao">
        <div className="servico-voltar-home">
          <Link to="/" className="servico-voltar">
            ← Voltar para a página inicial
          </Link>
        </div>
        <span className="servico-etiqueta">ÁREA DE ATUAÇÃO</span>

        <h2>Cuidado e orientação nas relações familiares</h2>

        <p>
          As questões relacionadas à família envolvem direitos,
          responsabilidades e decisões importantes. A orientação jurídica
          adequada ajuda a compreender as possibilidades previstas na legislação
          e os caminhos disponíveis para cada situação.
        </p>

        <p>
          A atuação em Direito de Família busca oferecer esclarecimento jurídico
          e acompanhamento profissional, respeitando as particularidades de cada
          caso.
        </p>
      </section>

      <section className="servico-atuacoes">
        <span className="servico-etiqueta">COMO PODEMOS AJUDAR</span>

        <h2>Principais questões atendidas</h2>

        <div className="servico-grid">
          <Link to="/divorcio" className="servico-card">
            <h3>Divórcio</h3>
            <p>
              Orientação jurídica em processos de divórcio consensual e
              litigioso.
            </p>
            <span className="servico-card-link">Saiba mais →</span>
          </Link>

          <Link to="/pensao-alimenticia" className="servico-card">
            <h3>Pensão alimentícia</h3>
            <p>
              Informações sobre fixação, revisão e cumprimento da obrigação
              alimentar.
            </p>
            <span className="servico-card-link">Saiba mais →</span>
          </Link>

          <Link to="/guarda" className="servico-card">
            <h3>Guarda dos filhos</h3>
            <p>
              Orientação sobre modalidades de guarda e convivência familiar.
            </p>
            <span className="servico-card-link">Saiba mais →</span>
          </Link>

          <Link to="/adocao" className="servico-card">
            <h3>Adoção</h3>
            <p>
              Esclarecimentos jurídicos sobre os procedimentos legais de adoção.
            </p>
            <span className="servico-card-link">Saiba mais →</span>
          </Link>
        </div>
      </section>

      <section className="servico-contato">
        <h2>Precisa de orientação jurídica?</h2>

        <p>
          Entre em contato para obter informações sobre atendimento e orientação
          jurídica.
        </p>

        <a
          href="https://wa.me/5589994340770?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico."
          className="servico-botao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com o escritório
        </a>
      </section>
    </main>
  );
}

export default DireitoFamilia;
