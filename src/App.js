import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

/* Components */
import Header from './components/Header';

/* Styles */
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
