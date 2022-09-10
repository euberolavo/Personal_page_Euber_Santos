import React from 'react';

import Page from '../../components/page/index.jsx';
import Instagram from '../../img/instagram.svg';
import Facebook from '../../img/facebook.svg';
import Linkedin from '../../img/linkedin.svg';
import Github from '../../img/github.svg';
import Youtube from '../../img/youtube.svg';
import Euber from '../../img/euber.jpg';

import './home.css';

export default function Index() {
  return (
      <Page>
          <div className="container">
            <div className="avatar">
              <img src={Euber} alt="Foto" />
            </div>
            <div className="details">
              <h3 className="nome">Euber Santos</h3>
              <p className="job">
                Desenvolvedor Full-Stack, com foco em desenvolvimento web,
                Front-end, API Rest e Banco Relacional
              </p>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/euber.khoala.7">
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/euberkhoaladev/">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/euber-olavo-2bba8a97/">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/euberolavo">
                    <img src={Github} alt="Github" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/khoalas2/featured">
                    <img src={Youtube} alt="Youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </Page>
  );
}
