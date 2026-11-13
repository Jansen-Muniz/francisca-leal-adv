import { useEffect } from "react";
import "./DireitoFamilia.css";
import { Link } from "react-router-dom";

function Adocao() {
  useEffect(() => {
    document.title = "Adoção | Francisca Leal Advocacia";

    const descricao =
      "Orientação jurídica sobre habilitação e processo judicial de adoção, com atenção aos direitos de crianças e adolescentes em Picos-PI.";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", descricao);
    }

    const dadosEstruturados = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Adoção",
      serviceType: "Serviços jurídicos em Direito de Família - Adoção",
      description: descricao,
      url: "https://franciscaleal.adv.br/adocao",
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
            src="/direito-familia-hero.png"
            alt="Ambiente jurídico com livros e balança da Justiça"
          />
        </div>

        <div className="servico-hero-conteudo">
          <span className="servico-subtitulo">FRANCISCA LEAL ADVOCACIA</span>

          <h1>Adoção</h1>

          <p>
            Orientação jurídica sobre os procedimentos legais de adoção, com
            atenção à proteção dos direitos de crianças e adolescentes.
          </p>

          <a href="#sobre-servico" className="servico-botao">
            Conheça os procedimentos
          </a>
        </div>
      </section>

      <section id="sobre-servico" className="servico-introducao">
        <div className="servico-voltar-home">
          <Link to="/" className="servico-voltar">
            ← Voltar para a página inicial
          </Link>
        </div>
        <span className="servico-etiqueta">DIREITO DE FAMÍLIA</span>

        <h2>A adoção e a formação de vínculos familiares</h2>

        <p>
          A adoção é uma medida jurídica que estabelece vínculos de filiação,
          assegurando à pessoa adotada os direitos decorrentes dessa relação
          familiar.
        </p>

        <p>
          No Brasil, o procedimento de adoção de crianças e adolescentes é
          regulamentado pelo Estatuto da Criança e do Adolescente (ECA), tendo
          como princípio fundamental a proteção integral e o melhor interesse da
          criança e do adolescente.
        </p>
      </section>

      <section className="servico-atuacoes">
        <span className="servico-etiqueta">PROCEDIMENTOS LEGAIS</span>

        <h2>Etapas e questões relacionadas à adoção</h2>

        <div className="servico-grid">
          <article className="servico-card">
            <h3>Habilitação para adoção</h3>
            <p>
              Orientação sobre o procedimento de habilitação dos pretendentes à
              adoção, incluindo documentação, avaliações e requisitos previstos
              na legislação.
            </p>
          </article>

          <article className="servico-card">
            <h3>Processo judicial de adoção</h3>
            <p>
              Esclarecimentos sobre as etapas judiciais necessárias à
              constituição do vínculo de filiação por adoção, conforme as
              particularidades de cada caso.
            </p>
          </article>

          <article className="servico-card">
            <h3>Direitos da pessoa adotada</h3>
            <p>
              Informações sobre os efeitos jurídicos da adoção, incluindo
              direitos familiares, sucessórios e a proteção da identidade da
              pessoa adotada.
            </p>
          </article>
        </div>
      </section>

      <section className="servico-navegacao">
        <Link to="/direito-de-familia" className="servico-voltar">
          ← Voltar para Direito de Família
        </Link>

        <h2>Conheça outros serviços</h2>

        <div className="servico-links">
          <Link to="/divorcio">Divórcio →</Link>
          <Link to="/pensao-alimenticia">Pensão Alimentícia →</Link>
          <Link to="/guarda">Guarda dos Filhos →</Link>
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

export default Adocao;
