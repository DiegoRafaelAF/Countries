import React from 'react';

const CardCountries = ({ countries }) => {
  return countries.map(({ name, capital, svgFile }) => (
    <div key={ Math.random() * 10 } className="card-countries">
      <h1>{name}</h1>
      <h3>{capital}</h3>
      <img src={svgFile} alt="Badeira do País" />
    </div>
  ))
};

export default CardCountries;
