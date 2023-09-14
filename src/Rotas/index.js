import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Principal from '../Principal';
import Login from '../Login';
import CadastroEstabelecimento from '../CadastroEstabelecimento';
import ListaEstabelecimento from '../ListaEstabelecimento';
import Favoritos from '../Favoritos';
import Agenda from '../Agenda';

export default function Rotas() {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Principal />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/CadastroEstabelecimento" element={<CadastroEstabelecimento />}/>
            <Route path="/ListaEstabelecimento" element={<ListaEstabelecimento />}/>
            <Route path="/Favoritos" element={<Favoritos />}/>
            <Route path="/Agenda" element={<Agenda />}/>
          </Routes>
        </BrowserRouter>
    )
}