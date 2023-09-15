import React from "react";
import {Link} from 'react-router-dom'
import './style.css';

export default function ListaEstabelecimento(){
    return(
        <div className="lista">
            <Link to='/' className="voltar">Voltar</Link>
            <div className="lista-estabelecimentos">
                <div className="card">
                    <img src="./assets-locais/salao1.jpg"/>
                    <div className="card-text">
                        <h3>Salão de beleza Center Beauty</h3>
                        <p>(45)99999-9999</p>
                        <p>⭐⭐⭐</p>
                        <small>Feminino</small>
                        <small>345 avaliações</small>
                    </div>
                </div>

                <div className="card">
                    <img src="./assets-locais/salao2.jpg"/>
                    <div className="card-text">
                        <h3>Salão de beleza Love</h3>
                        <p>(45)98888-8888</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <small>Feminino</small>
                        <small>979 avaliações</small>
                    </div>
                </div>

                <div className="card">
                    <img src="./assets-locais/salao3.jpg"/>
                    <div className="card-text">
                        <h3>Salão de beleza Family Beauty</h3>
                        <p>(45)97777-7777</p>
                        <p>⭐⭐⭐⭐</p>
                        <small>Unissex</small>
                        <small>489 avaliações</small>
                    </div>
                </div>

            </div>

        </div>
    );
}