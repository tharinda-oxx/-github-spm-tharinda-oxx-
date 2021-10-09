import { render, screen } from '@testing-library/react';
import App from './App';



describe("<App/>", () => {

  test('Renders tel', () => {
    render(<App />);
    const tel = screen.getByTestId("tel");
    expect(tel).toBeInTheDocument();
    expect(tel).toHaveAttribute("type", "number");
  });

  test('Renders full_name', () => {
    render(<App />);
    const full_name = screen.getByTestId("full_name");
    expect(full_name).toBeInTheDocument();
    expect(full_name).toHaveAttribute("type", "text");
  });

  test('Renders email', () => {
    render(<App />);
    const email = screen.getByTestId("email");
    expect(email).toBeInTheDocument();
    expect(email).toHaveAttribute("type", "email");
  });


});