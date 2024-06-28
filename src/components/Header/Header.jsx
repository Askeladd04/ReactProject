import React from 'react';
import cls from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className = {`${cls.header}`}>
         <NavLink to="/Content"> <img src='/1671235856_www-funnyart-club-p-kartinki-dlya-logo-krasivo-17.png' alt='Error Profile'/></NavLink>
        </header>
  )
}

export default Header;