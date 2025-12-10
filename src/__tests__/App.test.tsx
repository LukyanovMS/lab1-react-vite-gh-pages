import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    // Добавьте data-testid в ваш App.tsx для лучшего тестирования
    const appElement = screen.getByTestId('app-container') || screen.getByRole('main');
    expect(appElement).toBeInTheDocument();
  });

  test('renders Vite logo', () => {
    render(<App />);
    const viteLogo = screen.getByAltText(/vite logo/i);
    expect(viteLogo).toBeInTheDocument();
  });

  test('renders React logo', () => {
    render(<App />);
    const reactLogo = screen.getByAltText(/react logo/i);
    expect(reactLogo).toBeInTheDocument();
  });

  test('renders "Vite + React" heading', () => {
    render(<App />);
    const heading = screen.getByText(/vite \+ react/i);
    expect(heading).toBeInTheDocument();
  });
});