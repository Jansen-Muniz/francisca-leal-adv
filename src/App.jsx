import { BrowserRouter, Routes, Route } from "react-router-dom";
import DireitoFamilia from "./pages/servicos/DireitoFamilia";
import Divorcio from "./pages/servicos/Divorcio";
import PensaoAlimenticia from "./pages/servicos/PensaoAlimenticia";
import Guarda from "./pages/servicos/Guarda";
import Adocao from "./pages/servicos/Adocao";

import Header from "./components/Header";
import Home from "./pages/Home";
import VoltarAoTopo from "./components/VoltarAoTopo";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/direito-de-familia" element={<DireitoFamilia />} />
        <Route path="/divorcio" element={<Divorcio />} />
        <Route path="/pensao-alimenticia" element={<PensaoAlimenticia />} />
        <Route path="/guarda" element={<Guarda />} />
        <Route path="/adocao" element={<Adocao />} />
      </Routes>

      <VoltarAoTopo />
    </BrowserRouter>
  );
}

export default App;
