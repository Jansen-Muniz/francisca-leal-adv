import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="header">
      <a href="#inicio" className="header-brand" onClick={fecharMenu}>
        <span className="brand-name">FRANCISCA LEAL</span>

        <span className="brand-divider">
          <span></span>
          <span className="brand-diamond">◆</span>
          <span></span>
        </span>

        <span className="brand-subtitle">ADVOCACIA ESPECIALIZADA</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir ou fechar menu"
        aria-expanded={menuAberto}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header-nav ${menuAberto ? "ativo" : ""}`}>
        <a href="#inicio" onClick={fecharMenu}>
          Início
        </a>
        <a href="#sobre" onClick={fecharMenu}>
          O Escritório
        </a>
        <a href="#atuacao" onClick={fecharMenu}>
          Áreas de Atuação
        </a>
        <a href="#contato" onClick={fecharMenu}>
          Contato
        </a>
      </nav>
    </header>
  );
}

export default Header;
