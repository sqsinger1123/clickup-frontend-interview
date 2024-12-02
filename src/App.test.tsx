import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders Custom list app header', () => {
    render(<App />);
    const linkElement = screen.getByText(/Custom list app/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders "Add item:" label', () => {
    render(<App />);
    const linkElement = screen.getByText(/Add item:/i);
    expect(linkElement).toBeInTheDocument();
  });
});
