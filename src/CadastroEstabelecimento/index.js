import React from "react";
import {Link} from 'react-router-dom'
import './style.css';

export default function CadastroEstabelecimento(){
    return(
        <div className="tela-cadastro">
            <div className="cadastro">
                <div className="cadastro-campos">
                    <h4>CADASTRO ESTABELECIMENTO</h4>
                    <div className="cadastroInputs">
                        <label>Nome Estabelecimento</label>
                        <input className="campo" type="text" placeholder="Estabelecimento"></input>
                    </div>
                    <div className="cadastroInputs">
                        <label>Bairro</label>
                        <input className="campo" type="text" placeholder="Nome do Bairro"></input>
                    </div>
                    <div className="cadastroInputs">
                        <label>Telefone</label>
                        <input className="campo" type="text" placeholder="(xx)x xxxx-xxxx"></input>
                    </div>
                    <div className="cadastroInputs">
                        <label>CNPJ</label>
                        <input className="campo" type="text" placeholder="00.000.000/0000-00"></input>
                    </div>
                    <Link to='/' className="botao">Cadastrar</Link>
                </div>

            </div>
        </div>
    );
}