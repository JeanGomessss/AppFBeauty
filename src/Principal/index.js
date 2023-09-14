import React from "react";
import {Link} from 'react-router-dom'
import CustomMap from '../CustomMap'
import './style.css';

export default function Principal(){
    return(
        <body>
            <section className="aplicativo">
                <div className="aplicativo-tela">
                    <header className="cabecalho">
                        <img className="cabecalho-logo" src="assets/logo.png"/>
                        <div className="cabecalho-busca">
                            <input className="cabecalho-consulta" type="text" placeholder="Aonde vamos hoje?"/>
                            <a href="#"><img className="cabecalho-lupa" src="assets/lupa.png"/></a>
                            <a href="#"><img className="cabecalho-filtro-item" src="assets/filtro.png"/></a>
                            <Link to='/Login'><img className="cabecalho-filtro-item" src="assets/login-site.png"/></Link>
                        </div>
                        <div class="cabecalho-nav">
                            <a href="#"><img className="cabecalho-nav-item" src="assets/info.png"/></a>
                            <a href="#"><img className="cabecalho-nav-item" src="assets/ajuda.png"/></a>
                        </div>
                </header>

                <main>
                    <section className="mapa">
                        <CustomMap />
                    </section>
                </main>

                <footer class="menu-inferior">
                    <Link className="menu-acessar" to='/CadastroEstabelecimento'><img className="menu-inferior-imagem" src="assets/casa.png"/></Link>
                    <Link className="menu-acessar" to='/ListaEstabelecimento'><img className="menu-inferior-imagem" src="assets/lista.png"/></Link>
                    <Link className="menu-acessar" to='/'><img className="menu-inferior-imagem" src="assets/localização.png"/></Link>
                    <Link className="menu-acessar" to='/Favoritos'><img className="menu-inferior-imagem" src="assets/estrela.png"/></Link>
                    <Link className="menu-acessar" to='/Agenda'><img className="menu-inferior-imagem" src="assets/agenda.png"/></Link>
                </footer>

                </div>
            </section>
    
        </body>
    );
}