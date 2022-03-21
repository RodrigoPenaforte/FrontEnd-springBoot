import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Destino from "./views/Destino";
import Promocao from "./views/Promocao";
import Contato from "./views/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import EscolhaVoo from"./views/EscolhaVoo";
import Pagamento from"./views/Pagamento";
import Create from "./views/EscolhaVoo/Create";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Destino" element={<Destino/>} />
        <Route path="/Promocao" element={<Promocao/>} />
        <Route path="/Contato" element={<Contato/>} />

        <Route path="/EscolhaVoo" element={<EscolhaVoo/>} />
        <Route path="/Escolha-Create" element={<Create/>} />
        <Route path="/Escolha-Update" element={<Create/>} />

        <Route path="/Pagamento" element={<Pagamento/>} />
        <Route path="/Pagamento-Create" element={<Create/>} />
        <Route path="/Pagamento-Update" element={<Create/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;