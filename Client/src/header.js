import React, {useState, useEffect, Component} from 'react';
import './header.css';

function header(){
    return(
        <div>
            <nav class="nav col-5 mt-5">
                <ul>
                    <li><a href="/">Usuarios</a></li>
                    <li><a href="/historico">Histórico de atividades</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default header;