import React from 'react';

/* Components */
import Login from './pages/Login';
import Header from './components/Header';

/* Styles */
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
