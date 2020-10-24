import React, { useContext, useEffect, useState } from 'react';
import { ContextAplication } from '../context';
import CardCountries from './CardCountries';

const Countries = () => {
  const { getCountries, dataCountries } = useContext(ContextAplication);
  const [input, setInput] = useState('');

  useEffect(() => {
    getCountries();
  }, [dataCountries, getCountries, input])


  const filteredPlanet = (data) => {
    const nameCountrie = data
    if (input !== '') {
      console.log(data)
      const test = dataCountries.map(({ countries }) => countries.filter(({ name }) => name.toLowerCase().includes(input.toLowerCase())))
      console.log(test);
      return test
    }
    return dataCountries;
  }

  return (
    <div>
      <label htmlFor="input-countrie">Digite o nome de um país: </label>
      <input
        name="input-countrie"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      { dataCountries && <CardCountries dataCountries={filteredPlanet(dataCountries)} /> }
    </div>
  );
};

export default Countries;
