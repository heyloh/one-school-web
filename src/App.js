import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';

/* Services */
import history from './services/history';

/* Components */
import Header from './components/Header';

/* Styles */
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
