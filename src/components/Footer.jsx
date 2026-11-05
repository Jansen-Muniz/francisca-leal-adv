import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-marca">
          <h2>Francisca Leal</h2>
          <span>ADVOCACIA ESPECIALIZADA</span>

          <p>Compromisso, ética e excelência na defesa dos seus direitos.</p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>

          <a href="#inicio">Início</a>
          <a href="#sobre">O Escritório</a>
          <a href="#atuacao">Áreas de Atuação</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-contato">
          <h3>Contato</h3>

          <p>WhatsApp: (XX) XXXXX-XXXX</p>
          <p>E-mail: contato@seudominio.com.br</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Francisca Leal Advocacia Especializada.
          Todos os direitos reservados.
        </p>
        <p className="footer-credit">Desenvolvido por Jansen Muniz</p>
      </div>
    </footer>
  );
}

export default Footer;
