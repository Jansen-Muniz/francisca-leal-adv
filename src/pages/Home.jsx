import "./Home.css";
import Sobre from "../components/Sobre";
import AreasAtuacao from "../components/AreasAtuacao";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <main>
        <section className="hero" id="inicio">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-subtitle">ADVOCACIA ESPECIALIZADA</span>

              <h1>
                Excelência e compromisso
                <br />
                na defesa dos seus direitos
              </h1>

              <p>
                Atendimento jurídico personalizado, pautado pela ética,
                confiança e dedicação.
              </p>

              <a
                href="https://wa.me/5589994340770"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button"
              >
                Entre em contato
              </a>
            </div>

            <div className="hero-logo">
              <img
                src="/src/assets/logo-francisca-leal-transparente.png"
                alt="Francisca Leal Advocacia Especializada"
              />
            </div>
          </div>
        </section>

        <Sobre />
        <AreasAtuacao />
        <Contato />
      </main>

      <Footer />
    </>
  );
}

export default Home;
