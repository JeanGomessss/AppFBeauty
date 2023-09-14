import React from "react";
import {Link} from 'react-router-dom'
import './style.css';

export default function Favoritos(){
    return(
        <div className="favoritos">
            <h2 className="textofav">Você nao tem nenhum favorito!</h2>
            <Link to='/' className="retornar">Retornar</Link>
        </div>
    );
}