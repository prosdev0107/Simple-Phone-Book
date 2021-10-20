import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render Contact Form first', () => {
  render(<App />);
  const linkElement = screen.getByTestId('contact-list');
  expect(linkElement).toBeInTheDocument();
});
