import "./Sobre.css";

function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">
        <div className="sobre-conteudo">
          <span className="sobre-subtitulo">CONHEÇA NOSSO ESCRITÓRIO</span>

          <h2>Compromisso, ética e excelência</h2>

          <p>
            A Francisca Leal Advocacia Especializada atua com dedicação,
            responsabilidade e compromisso na defesa dos direitos de seus
            clientes.
          </p>

          <p>
            Nosso propósito é oferecer um atendimento jurídico personalizado,
            buscando soluções com transparência, segurança e confiança.
          </p>
        </div>

        <div className="sobre-destaque">
          <span className="sobre-monograma">FL</span>

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
