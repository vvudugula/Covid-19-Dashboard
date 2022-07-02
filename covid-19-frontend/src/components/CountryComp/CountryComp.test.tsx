import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountryComp from './CountryComp';

describe('<CountryComp />', () => {
  test('it should mount', () => {
    render(<CountryComp />);
    
    const countryComp = screen.getByTestId('CountryComp');

    expect(countryComp).toBeInTheDocument();
  });
});