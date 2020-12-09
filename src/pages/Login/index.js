import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        suscipit eos inventore nobis molestias illum, omnis facilis a odio totam
        dolore repellendus, consectetur reiciendis minus ea, laudantium dolorem
        maxime illo.
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          possimus.
        </li>
      </ul>
      <button type="button">Enviar</button>
    </Container>
  );
}

export default Login;
