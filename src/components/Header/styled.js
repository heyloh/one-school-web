import styled from 'styled-components';

import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    margin: 0 20px 0;
    font-weight: bold;
    text-transform: uppercase;
    opacity: 0.75;
    transition: 0.2s;
    :hover {
      opacity: 1;
    }
  }

  img {
    max-width: 130px;
  }
`;
