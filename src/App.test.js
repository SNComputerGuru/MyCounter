import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header and initial count', () => {
  render(<App />);
  expect(screen.getByText(/Simple Counter/i)).toBeInTheDocument();
  expect(screen.getByTestId('counter')).toHaveTextContent('Count: 0');
});

test('increments the counter', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('inc-btn'));
  expect(screen.getByTestId('counter')).toHaveTextContent('Count: 1');
});

test('decrements the counter', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('dec-btn'));
  expect(screen.getByTestId('counter')).toHaveTextContent('Count: -1');
});

test('resets the counter', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId('inc-btn'));
  fireEvent.click(screen.getByTestId('inc-btn'));
  fireEvent.click(screen.getByTestId('reset-btn'));
  expect(screen.getByTestId('counter')).toHaveTextContent('Count: 0');
});
