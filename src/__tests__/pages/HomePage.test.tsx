// !STARTERCONF You should delete this page

import { render, screen } from '@testing-library/react';

import AppPage from '@/app/page';

describe('AppPage', () => {
  it('renders the Components', () => {
    render(<AppPage />);

    const heading = screen.getByText('Generate');

    expect(heading).toBeInTheDocument();
  });
});
