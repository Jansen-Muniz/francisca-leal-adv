import "./AreasAtuacao.css";
import { Link } from "react-router-dom";

const areas = [
  {
    titulo: "Divórcio",
    descricao:
      "Orientação e representação jurídica em processos de divórcio consensual ou litigioso, buscando soluções que respeitem os direitos e interesses envolvidos.",
  },
  {
    titulo: "Pensão Alimentícia",
    descricao:
      "Atuação em pedidos, fixação, revisão e execução de pensão alimentícia, com atenção às necessidades de quem solicita e às responsabilidades legais.",
  },
  {
    titulo: "Guarda",
    descricao:
      "Orientação jurídica em questões relacionadas à guarda dos filhos, convivência familiar e responsabilidades parentais, priorizando o melhor interesse da criança.",
  },
  {
    titulo: "Adoção",
    descricao:
      "Acompanhamento e orientação jurídica nos procedimentos de adoção, oferecendo suporte durante as etapas legais necessárias à formação de uma família.",
  },
  {
    titulo: "Inventário",
    descricao:
      "Assessoria jurídica nos procedimentos de inventário e partilha de bens, buscando conduzir a regularização patrimonial com segurança e clareza.",
  },
];

function AreasAtuacao() {
  return (
    <section className="areas-atuacao" id="atuacao">
      <div className="areas-container">
        <div className="areas-header">
          <span className="areas-subtitulo">NOSSA ATUAÇÃO</span>

          <h2>Direito de Família e Sucessões</h2>

          <p>
            Atendimento jurídico acolhedor e especializado para questões que
            envolvem família e patrimônio.
          </p>
        </div>

        <div className="areas-grid">
          {areas.map((area, index) => (
            <article className="area-card" key={index}>
              <span className="area-numero">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{area.titulo}</h3>

              <p>{area.descricao}</p>

              <span className="area-detalhe">◆</span>
            </article>
          ))}
        </div>
        <div className="areas-saiba-mais">
          <Link to="/direito-de-familia">
            Conheça nossa atuação em Direito de Família →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AreasAtuacao;
