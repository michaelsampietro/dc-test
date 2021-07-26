import { render, screen } from '@testing-library/react';
import AppHeader from '.';

describe('AppHeader', () => {
  test('renders correctly', () => {
    render(<AppHeader />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
