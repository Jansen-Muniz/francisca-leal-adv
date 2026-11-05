import { useEffect, useState } from "react";
import "./VoltarAoTopo.css";

function VoltarAoTopo() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    function verificarRolagem() {
      setVisivel(window.scrollY > 300);
    }

    window.addEventListener("scroll", verificarRolagem);

    return () => {
      window.removeEventListener("scroll", verificarRolagem);
    };
  }, []);

  function voltarAoTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visivel) return null;

  return (
    <button
      className="botao-voltar-topo"
      onClick={voltarAoTopo}
      aria-label="Voltar ao topo"
      title="Voltar ao topo"
    >
      ↑
    </button>
  );
}

export default VoltarAoTopo;
