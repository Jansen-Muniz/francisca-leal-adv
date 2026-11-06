import "./Contato.css";

function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="contato-container">
        <span className="contato-subtitulo">FALE CONOSCO</span>

        <h2>Vamos conversar?</h2>

        <p>
          Precisa de orientação jurídica? Entre em contato e receba um
          atendimento acolhedor e individualizado para compreender as
          possibilidades jurídicas do seu caso.
        </p>

        <a
          href="https://wa.me/5589994340770"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-button"
        >
          Fale pelo WhatsApp
        </a>

        <div className="contato-informacoes">
          <div>
            <h3>WhatsApp</h3>
            <p>(89) 99434-0770</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
