import React from 'react';

const CardCountries = ({ dataCountries }) => {
  return dataCountries.map(({ countries }) =>
    countries.map(({ name, capital, flag: { svgFile } }) => (
      <div key={ Math.random() * 10 }>
        <h1>{name}</h1>
        <h3>{capital}</h3>
        <img src={svgFile} alt="Badeira do País" width="60pxx" />
      </div>
    ))
  );
};

export default CardCountries;
