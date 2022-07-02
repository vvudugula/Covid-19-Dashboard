import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Displaylist from './Displaylist';

describe('<Displaylist />', () => {
  test('it should mount', () => {
    render(<Displaylist />);
    
    const displaylist = screen.getByTestId('Displaylist');

    expect(displaylist).toBeInTheDocument();
  });
});