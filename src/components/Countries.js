import React, { useContext, useEffect, useState } from 'react';
import { ContextAplication } from '../context';
import CardCountries from './CardCountries';

const Countries = () => {
  const { getCountries, dataCountries } = useContext(ContextAplication);
  const [input, setInput] = useState('');

  let arrCountries = [];

  useEffect(() => {
    if (!dataCountries || dataCountries.length === 0) {
      getCountries();
    }
  }, [dataCountries, getCountries]);

  if (dataCountries) {
    dataCountries.map(({ name, nativeName, capital, flag: { svgFile } }) =>
      arrCountries.push({ name, nativeName, capital, svgFile })
    );
  }

  const filteredPlanet = (data) => {
    if (input !== '') {
      return data.filter(({ name, nativeName, capital }) =>
        name.toLowerCase().includes(input.toLowerCase())
        ||
        nativeName.toLowerCase().includes(input.toLowerCase())
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
          data-testid="search-input"
          name="input-country"
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
