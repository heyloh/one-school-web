import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

function Header() {
  return (
    <Nav>
      <a href="/">
        <FaHome size={24} color="#FFF" />
      </a>
      <a href="/">
        <FaUserAlt size={24} color="#FFF" />
      </a>
      <a href="/">
        <FaSignInAlt size={24} color="#FFF" />
      </a>
    </Nav>
  );
}

export default Header;
