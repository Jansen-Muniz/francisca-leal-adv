import { useEffect } from "react";
import "./DireitoFamilia.css";
import { Link } from "react-router-dom";

function Divorcio() {
  useEffect(() => {
    document.title = "Divórcio | Francisca Leal Advocacia";

    const descricao =
      "Orientação jurídica em divórcio consensual e litigioso em Picos-PI. Conheça a atuação da Francisca Leal Advocacia.";

    let metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", descricao);
    }

    const dadosEstruturados = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Divórcio",
      serviceType: "Serviços jurídicos em Direito de Família - Divórcio",
      description: descricao,
      url: "https://franciscaleal.adv.br/divorcio",
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

          <h1>Divórcio</h1>

          <p>
            Orientação jurídica para compreender os procedimentos legais e as
            questões envolvidas no encerramento do casamento.
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

        <h2>Entenda seus direitos no processo de divórcio</h2>

        <p>
          O divórcio é o procedimento legal que encerra o vínculo matrimonial.
          Cada situação possui particularidades que precisam ser analisadas
          conforme a legislação.
        </p>

        <p>
          A orientação jurídica permite compreender as possibilidades legais
          relacionadas à partilha de bens, ao nome e, quando houver filhos, às
          questões de guarda, convivência e pensão alimentícia.
        </p>
      </section>

      <section className="servico-atuacoes">
        <span className="servico-etiqueta">MODALIDADES</span>

        <h2>Como o divórcio pode ser realizado?</h2>

        <div className="servico-grid">
          <article className="servico-card">
            <h3>Divórcio consensual</h3>
            <p>
              Ocorre quando as partes estão de acordo com os termos do divórcio,
              permitindo um procedimento consensual, judicial ou extrajudicial,
              conforme os requisitos legais.
            </p>
          </article>

          <article className="servico-card">
            <h3>Divórcio litigioso</h3>
            <p>
              É realizado judicialmente quando não existe acordo entre as partes
              sobre questões relacionadas ao divórcio.
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
          <Link to="/pensao-alimenticia">Pensão Alimentícia →</Link>
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

export default Divorcio;
