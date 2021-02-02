import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

import { Nav } from './styled';

function Header() {
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="schoolapp" />
      </Link>
      <div>
        <Link to="/">
          <FaHome size={20} color="#FFF" />
        </Link>
        <Link to="/">
          <FaUserAlt size={20} color="#FFF" />
        </Link>
        <Link to="/">
          <FaSignInAlt size={20} color="#FFF" />
        </Link>
      </div>
    </Nav>
  );
}

export default Header;
