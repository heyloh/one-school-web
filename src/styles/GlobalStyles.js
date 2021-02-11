import styled, { createGlobalStyle } from 'styled-components';

import {
  primaryColor,
  primaryDarkColor,
  primaryColorHover,
  errorColor,
  successColor,
} from '../config/colors';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background: #F3F3F3;
    background: ${primaryDarkColor};
    color: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 150px;
    height: 46px;
    font-size: 16px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    transition: 0.2s;
    margin-top: 10px;
    :hover {
      background: ${primaryColorHover};
    }
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
    transition: 0.2s;
    :hover {
      color:${primaryColorHover};
    }
  }

  ul {
    list-style: none;
  }

  body .Toastfy .Toastfy__toast-container .Toastify__toast--success {
    background: ${successColor};
  }

  body .Toastfy .Toastfy__toast-container .Toastify__toast--error {
    background: ${errorColor};
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background: #f3f3f3;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 30px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
