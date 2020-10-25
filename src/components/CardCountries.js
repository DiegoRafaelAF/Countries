import React from 'react';

const CardCountries = ({ countries }) => {
  return countries.map(({ name, nativeName, capital, svgFile }) => (
    <div key={ Math.random() * 10 } className="card-countries">
      <h1>{`Nome: ${name}`}</h1>
      <h2>{`Nome nativo: ${nativeName}`}</h2>
      <h3>{`Capital: ${capital}`}</h3>
      <img src={svgFile} alt="Badeira do País" />
    </div>
  ))
};

export default CardCountries;
