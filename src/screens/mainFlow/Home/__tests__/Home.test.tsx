import { render } from '@testing-library/react';
import Home from '../Home';
import { ThemeProvider } from '@providers';

jest.mock('react-social-icons', () => ({
  SocialIcon: ({ url }: { url: string }) => <div>{url}</div>,
}));

describe('Home', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <Home />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
