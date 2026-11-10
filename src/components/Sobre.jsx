import "./Sobre.css";
import fotoFrancisca from "../assets/francisca-leal.jpg";

function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">
        <div className="sobre-conteudo">
          <span className="sobre-subtitulo">CONHEÇA NOSSA ADVOGADA</span>

          <h2>Francisca Leal</h2>

          <h3>Advogada de Família</h3>

          <p>
            A Dra. Francisca Leal atua na área do Direito de Família, oferecendo
            orientação jurídica com sensibilidade, responsabilidade e
            compromisso com cada cliente.
          </p>

          <p>
            Seu trabalho é pautado no acolhimento, na escuta atenta e na busca
            por soluções jurídicas que respeitem a individualidade e as
            necessidades de cada família.
          </p>

          <p>
            Com uma atuação voltada à resolução de conflitos familiares, busca
            proporcionar segurança, clareza e tranquilidade durante momentos
            importantes da vida.
          </p>

          <div className="sobre-formacao">
            <h4>FORMAÇÃO E REGISTRO PROFISSIONAL</h4>

            <p>
              <strong>Formação:</strong> Bacharelado em Direito pela
              Universidade Estadual do Piauí (UESPI).
            </p>

            <p>
              <strong>Registro profissional:</strong> OAB/PI nº 5.244.
            </p>
          </div>
        </div>

        <div className="sobre-destaque">
          <img
            src={fotoFrancisca}
            alt="Dra. Francisca Leal, advogada de família"
            className="sobre-foto"
          />

          <span className="sobre-destaque-texto">FRANCISCA LEAL</span>

          <span className="sobre-destaque-legenda">
            ADVOCACIA ESPECIALIZADA
          </span>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
