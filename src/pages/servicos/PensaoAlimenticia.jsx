import { useEffect } from "react";
import "./DireitoFamilia.css";
import { Link } from "react-router-dom";

function PensaoAlimenticia() {
  useEffect(() => {
    document.title = "Pensão Alimentícia | Francisca Leal Advocacia";

    const descricao =
      "Orientação jurídica sobre fixação, revisão e execução de pensão alimentícia em Picos-PI. Conheça a atuação da Francisca Leal Advocacia.";

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", descricao);
    }

    const dadosEstruturados = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Pensão Alimentícia",
      serviceType:
        "Serviços jurídicos em Direito de Família - Pensão Alimentícia",
      description: descricao,
      url: "https://franciscaleal.adv.br/pensao-alimenticia",
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

          <h1>Pensão Alimentícia</h1>

          <p>
            Orientação jurídica sobre direitos e deveres relacionados à
            prestação de alimentos.
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

        <h2>O direito à pensão alimentícia</h2>

        <p>
          A pensão alimentícia é uma obrigação prevista na legislação, destinada
          a contribuir para as necessidades de quem tem direito aos alimentos,
          considerando as condições de quem deve prestar essa assistência.
        </p>

        <p>
          Sua definição considera as particularidades de cada caso, observando
          as necessidades de quem recebe e os recursos de quem paga.
        </p>
      </section>

      <section className="servico-atuacoes">
        <span className="servico-etiqueta">PRINCIPAIS PROCEDIMENTOS</span>

        <h2>Como podemos orientar?</h2>

        <div className="servico-grid">
          <article className="servico-card">
            <h3>Fixação de pensão</h3>
            <p>
              Orientação jurídica para estabelecer judicialmente o valor da
              pensão alimentícia, considerando as necessidades de quem recebe e
              as possibilidades de quem paga.
            </p>
          </article>

          <article className="servico-card">
            <h3>Revisão de pensão</h3>
            <p>
              Análise das possibilidades legais de alteração do valor da pensão
              quando houver mudança na situação financeira das partes ou nas
              necessidades de quem recebe.
            </p>
          </article>

          <article className="servico-card">
            <h3>Execução de alimentos</h3>
            <p>
              Orientação jurídica sobre os procedimentos legais para cobrar
              parcelas de pensão alimentícia que não foram pagas.
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
          <Link to="/guarda">Guarda dos Filhos →</Link>
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

export default PensaoAlimenticia;
