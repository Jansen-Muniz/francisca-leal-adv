import { useEffect } from "react";
import "./DireitoFamilia.css";
import { Link } from "react-router-dom";

function Guarda() {
  useEffect(() => {
    document.title = "Guarda dos Filhos | Francisca Leal Advocacia";

    const descricao =
      "Orientação jurídica sobre guarda compartilhada, guarda unilateral e regulamentação de convivência familiar em Picos-PI. Conheça a atuação da Francisca Leal Advocacia.";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", descricao);
    }

    const dadosEstruturados = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Guarda dos Filhos",
      serviceType:
        "Serviços jurídicos em Direito de Família - Guarda dos Filhos",
      description: descricao,
      url: "https://franciscaleal.adv.br/guarda",
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

          <h1>Guarda dos Filhos</h1>

          <p>
            Orientação jurídica sobre guarda, convivência familiar e direitos
            das crianças e adolescentes.
          </p>

          <a href="#sobre-servico" className="servico-botao">
            Conheça seus direitos
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

        <h2>O cuidado com os direitos dos filhos</h2>

        <p>
          As questões relacionadas à guarda dos filhos exigem atenção às
          necessidades das crianças e dos adolescentes. A legislação brasileira
          estabelece regras para garantir sua proteção e assegurar o melhor
          interesse da criança.
        </p>

        <p>
          A definição da guarda deve considerar as particularidades de cada
          família, buscando preservar os direitos dos filhos e a convivência
          familiar.
        </p>
      </section>

      <section className="servico-atuacoes">
        <span className="servico-etiqueta">MODALIDADES DE GUARDA</span>

        <h2>Conheça as principais modalidades</h2>

        <div className="servico-grid">
          <article className="servico-card">
            <h3>Guarda compartilhada</h3>
            <p>
              Responsabilização conjunta dos pais pelo exercício dos direitos e
              deveres relacionados aos filhos, mesmo quando não residem na mesma
              casa.
            </p>
          </article>

          <article className="servico-card">
            <h3>Guarda unilateral</h3>
            <p>
              Atribuição da guarda a um dos genitores ou a outra pessoa que
              possa exercê-la, conforme os requisitos previstos na legislação.
            </p>
          </article>

          <article className="servico-card">
            <h3>Regulamentação de convivência</h3>
            <p>
              Definição dos períodos e das condições de convivência entre os
              filhos e o genitor que não reside com eles.
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
          <Link to="/adocao">Adoção →</Link>
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

export default Guarda;
