import { render, screen } from '@testing-library/react';
import Button from '../Components/Buttons/Button';

test('renders the button with a label', () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});
