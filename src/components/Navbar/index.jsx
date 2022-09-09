import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import Programmer from "../../img/programmer.svg"

export default function Navbar() {
  return (
    <div className="header">
      <div className="header-box">
        <Link to="/" className='link-logo'>
        <img src={Programmer} alt="Logo" />
        </Link>
        <div className="links">
          <ul>
            <li>
              <img src="http://tokyo.ibthemespro.com/assets/img/svg/home-run.svg" alt="Home" />
              <Link to="/">Home</Link>
            </li>
            <li>
              <img src="http://tokyo.ibthemespro.com/assets/img/svg/avatar.svg" alt="About" />
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <img src="http://tokyo.ibthemespro.com/assets/img/svg/briefcase.svg" alt="Portfolio" />
              <Link to="/teste">Portfolio</Link>
            </li>
            <li>
              <img src="http://tokyo.ibthemespro.com/assets/img/svg/paper.svg" alt="Noticias" />
              <Link to="/teste">News</Link>
            </li>
            <li>
              <img src="http://tokyo.ibthemespro.com/assets/img/svg/mail.svg" alt="Contatos" />
              <Link to="/teste">Contato</Link>
            </li>
          </ul>
        </div>
        <p>© 2022 Brasil</p>
        <p>Desenvolvido por <span>Euber Santos</span></p>
      </div>
    </div>
  );
}
