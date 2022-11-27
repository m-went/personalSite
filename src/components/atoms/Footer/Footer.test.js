import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('render footer component', () => {
  render(<Footer />);
  const footerText = screen.getByText(/Michał Went/);
  expect(footerText).toBeInTheDocument();
});
