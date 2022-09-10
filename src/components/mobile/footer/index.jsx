import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul>
          <li>
            <Link to="/">
              <img
                src="http://tokyo.ibthemespro.com/assets/img/svg/home-run.svg"
                alt="Home"
              />
              <label htmlFor="Home">Home</label>
            </Link>
          </li>
          <li>
            <img
              src="http://tokyo.ibthemespro.com/assets/img/svg/avatar.svg"
              alt="About"
            />
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <img
              src="http://tokyo.ibthemespro.com/assets/img/svg/briefcase.svg"
              alt="Portfolio"
            />
            <Link to="/teste">Portfolio</Link>
          </li>
          <li>
            <img
              src="http://tokyo.ibthemespro.com/assets/img/svg/paper.svg"
              alt="Noticias"
            />
            <Link to="/teste">News</Link>
          </li>
          <li>
            <img
              src="http://tokyo.ibthemespro.com/assets/img/svg/mail.svg"
              alt="Contatos"
            />
            <Link to="/teste">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
