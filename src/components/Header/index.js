import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import logo from '../../images/logo.svg';

import { Nav } from './styled';

function Header() {
  return (
    <Nav>
      <img src={logo} alt="schoolapp" />
      <div>
        <a href="/">
          <FaHome size={20} color="#FFF" />
        </a>
        <a href="/">
          <FaUserAlt size={20} color="#FFF" />
        </a>
        <a href="/">
          <FaSignInAlt size={20} color="#FFF" />
        </a>
      </div>
    </Nav>
  );
}

export default Header;
