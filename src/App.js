import React from 'react';
import AplicationProvider from './context';
import CountriesPage from './pages/CountriesPage';

const App = () => (
  <AplicationProvider>
    <CountriesPage />
  </AplicationProvider>
);

export default App;
