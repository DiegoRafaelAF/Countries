import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../service/api';

export const ContextAplication = createContext();

const AplicationProvider = ({ children }) => {

  const [dataCountries, setDataCountries] = useState();

  const getCountries = () =>
    api
      .then(({ data: { CallingCode } }) => setDataCountries(CallingCode));

  const context = {
    dataCountries,
    getCountries
  };

  return (
    <div>
      <ContextAplication.Provider value={ context }>
        {children}
      </ContextAplication.Provider>
    </div>
  );
};

AplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AplicationProvider;
