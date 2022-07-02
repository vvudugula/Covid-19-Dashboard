import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Metrics from './Metrics';

describe('<Metrics />', () => {
  test('it should mount', () => {
    render(<Metrics />);
    
    const metrics = screen.getByTestId('Metrics');

    expect(metrics).toBeInTheDocument();
  });
});