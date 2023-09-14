import React from "react";
import {Link} from 'react-router-dom'
import './style.css';

export default function Login(){
    return(
        <body>
            <main id="login" class="principal">
                <section class="principal-login">
                    <img class="principal-imagem" src="assets-login/login.png"/>
                    <form class="principal-formulario">
                        <h1 class="formulario-titulo">Login</h1>
                        <div class="formulario-campos">
                            <label class="formulario-label">Usuário</label>
                            <input class="formulario-input" type="text" placeholder="Usuário" required/>
                        </div>
                
                        <div class="formulario-campos">
                            <label class="formulario-label">Senha</label>
                            <input class="formulario-input" type="password" placeholder="******" required/>
                        </div>
                        <Link to='/' class="formulario-botao">Entrar</Link>
                        <p class="registro">Não tem cadastro? <a class="registro-link" href="#">Registre-se</a></p>
                    </form>
                </section>
            </main>
        </body>
    );
}