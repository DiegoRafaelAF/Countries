import React from 'react';
import {
  fireEvent,
  screen,
  cleanup,
  waitForDomChange,
} from '@testing-library/react';
import Countries from '../components/Countries';
import renderWithRouter from './renderService';
import { getCountries } from '../context';

const arrCountries = [
  { name: 'Nome: Afghanistan'},
  { name: 'Nome: Albania'},
  { name: 'Nome: Algeria'},
];

const checkCountries = (countries) => {
  countries.forEach(({ name }) => {
    screen.debug(screen.getByText(name));
  });
};

describe('Testing countries screen', () => {
  afterEach(() => {
    cleanup();
  });

  jest.spyOn(global, 'fetch').mockImplementation(getCountries);

  test('tests whether text box is on the screen', async () => {
    const { getByTestId } = renderWithRouter(<Countries />);
    const labelInput = getByTestId('search-input');
    
    expect(labelInput).not.toBeNull();
  });

  test('tests if the filter is working', async () => {
    const { getByTestId } =renderWithRouter(<Countries />);
    await waitForDomChange();

    checkCountries(arrCountries);

    fireEvent.input(getByTestId('search-input'), {
      target: { value: 'Algeria' },
    });

    waitForDomChange();
    screen.debug(screen.getAllByText('Nome: Algeria'));
    
    fireEvent.input(getByTestId('search-input'), {
      target: { value: 'Algiers' },
    });

    waitForDomChange();
    screen.debug(screen.getAllByText('Nome: Algeria'));

    fireEvent.input(getByTestId('search-input'), {
      target: { value: 'الجزائر' },
    });

    waitForDomChange();
    screen.debug(screen.getAllByText('Nome: Algeria'));
  });
});
