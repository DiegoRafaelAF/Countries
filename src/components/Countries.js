import React, { useContext, useEffect, useState } from 'react';
import { ContextAplication } from '../context';
import CardCountries from './CardCountries';

const Countries = () => {
  const { getCountries, dataCountries } = useContext(ContextAplication);
  const [input, setInput] = useState('');

  let arrCountries = [];

  useEffect(() => {
    getCountries();
  }, [dataCountries, getCountries, input]);

  if (dataCountries) {
    dataCountries.map(({ countries }) =>
      countries.map(({ name, capital, flag: { svgFile } }) =>
        arrCountries.push({ name, capital, svgFile })
      )
    );
  }

  const filteredPlanet = (data) => {
    if (input !== '') {
      return data.filter(({ name, capital }) =>
        name.toLowerCase().includes(input.toLowerCase())
        ||
        capital.toLowerCase().includes(input.toLowerCase())
      );
    }
    return arrCountries;
  };

  return (
      <div>
        <label htmlFor="input-countrie"><strong>Digite o nome de um país: </strong></label>
        <input
          capital="input-countrie"
          type="text"
          onChange={({ target }) => setInput(target.value)}
        />
      <div className="container">
        {dataCountries && (
          <CardCountries countries={filteredPlanet(arrCountries)} />
        )}
      </div>
    </div>
  );
};

export default Countries;
