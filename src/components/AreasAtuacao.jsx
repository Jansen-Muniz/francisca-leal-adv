import "./AreasAtuacao.css";

const areas = [
  {
    titulo: "Consultoria Jurídica",
    descricao:
      "Orientação jurídica individualizada para esclarecer questões legais, prevenir conflitos e proporcionar maior segurança na tomada de decisões pessoais e profissionais.",
  },
  {
    titulo: "Assessoria Jurídica",
    descricao:
      "Acompanhamento jurídico contínuo e estratégico, com análise de demandas, orientação preventiva e soluções alinhadas às necessidades de cada cliente.",
  },
  {
    titulo: "Representação Judicial",
    descricao:
      "Defesa técnica dos direitos e interesses dos clientes perante o Poder Judiciário, com atuação pautada pela ética, responsabilidade e compromisso.",
  },
];

function AreasAtuacao() {
  return (
    <section className="areas-atuacao" id="atuacao">
      <div className="areas-container">
        <div className="areas-header">
          <span className="areas-subtitulo">NOSSA ATUAÇÃO</span>

          <h2>Soluções jurídicas especializadas</h2>

          <p>Conheça algumas das formas de atuação do nosso escritório.</p>
        </div>

        <div className="areas-grid">
          {areas.map((area, index) => (
            <article className="area-card" key={index}>
              <span className="area-numero">0{index + 1}</span>

              <h3>{area.titulo}</h3>

              <p>{area.descricao}</p>

              <span className="area-detalhe">◆</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AreasAtuacao;
