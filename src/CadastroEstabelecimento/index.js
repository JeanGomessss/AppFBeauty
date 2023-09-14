import React from "react";
import {Link} from 'react-router-dom'
import './style.css';

export default function CadastroEstabelecimento(){
    return(
        <div className="tela-cadastro">
            <div className="cadastro">
                <div className="cadastro-campos">
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
                    <div className="cadastroGenero">
                        <div className="opcoes">
                            <input type="checkbox"/>
                            <label>Masculino</label>
                        </div>
                        <div className="opcoes">
                            <input type="checkbox"/>
                            <label>Feminino</label>
                        </div>
                        <div className="opcoes">
                            <input type="checkbox"/>
                            <label>Ambos</label>
                        </div>
                    </div>

                    <Link to='/' className="botao">Cadastrar</Link>

                </div>
            </div>
        </div>
    );
}