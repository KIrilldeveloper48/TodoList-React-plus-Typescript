import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from './../../const';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper  indigo darken-2 px1">
        <Link to={Routes.MAIN} className="brand-logo">React + Typescript</Link>
        <ul className="right hide-on-med-and-down">
          <li><Link to={Routes.MAIN}>Список дел</Link></li>
          <li><Link to={Routes.ABOUT}>Информация</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar