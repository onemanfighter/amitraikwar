import { render } from '@testing-library/react';
import Content from '../Content';
import { ThemeProvider } from '@providers';

jest.mock('react-social-icons', () => ({
  SocialIcon: ({ url }: { url: string }) => <div>{url}</div>,
}));

describe('Content', () => {
  it('renders correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <Content />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
