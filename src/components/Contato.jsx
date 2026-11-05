import "./Contato.css";

function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="contato-container">
        <span className="contato-subtitulo">FALE CONOSCO</span>

        <h2>Vamos conversar?</h2>

        <p>
          Estamos à disposição para ouvir você e oferecer orientação jurídica
          especializada, com ética, atenção e compromisso.
        </p>

        <a
          href="https://wa.me/55XXXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-button"
        >
          Entre em contato pelo WhatsApp
        </a>

        <div className="contato-informacoes">
          <div>
            <h3>Telefone</h3>
            <p>(XX) XXXXX-XXXX</p>
          </div>

          <div>
            <h3>E-mail</h3>
            <p>contato@seudominio.com.br</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
