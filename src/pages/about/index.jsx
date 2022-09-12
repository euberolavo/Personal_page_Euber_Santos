import React from 'react';

import Page from '../../components/page/index.jsx';
import Banner from '../../img/EuberBanner.jpg';


import './about.css';

export default function index() {
  return (
    <Page>
      <div className="about__container">
        <div className="image">
          <img src={Banner} alt="Banner" />
        </div>
        <div className="description">
          <h3 className="name">Euber Olavo Santos</h3>
          <div className="description__data">
            <div className="left">
              <p className="desctiption__text">
                Olá,Sou estudante de análise e desenvolvimento de softwares na
                Estácio, cursando o 2 período, e cursei até o 6 período de
                ciência da computação na unifg, porem, tive que trancar devido a
                problemas financeiros. Meus estudos são focados na área de
                desenvolvimento, mais específicamente, desenvolvimento web (JS,
                NodeJS, ReactJS, HTML, CSS...). Estou em busca de uma
                oportunidade de mostrar o meu melhor, e colocar em pratica todo
                o meu conhecimento adquirido nesses anos de dedicação.
              </p>
            </div>
            <div className="right">
              <ul>
                <li><p><spam>Nascimento:</spam>17.04.1993</p></li>
                <li><p><spam>Idade: </spam>29</p></li>
                <li><p><spam>Endereço: </spam>Recife,Pernambuco,Brasil</p></li>
                <li><p><spam>Email: </spam>euber.olavo.bezerra@gmail.com</p></li>
                <li><p><spam>Tel: </spam>(81) 985713704</p></li>
                <li><p><spam>Universidade: </spam>Estácio / UniFG</p></li>
                <li><p><spam>Freelance: </spam>Disponivel</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
