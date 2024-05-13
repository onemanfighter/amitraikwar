import { render } from '@testing-library/react';
import SocialButtons from '../SocialButtons';

jest.mock('react-social-icons', () => ({
  SocialIcon: ({ url }: { url: string }) => <div>{url}</div>,
}));

describe('Social buttons', () => {
  it('should renders correctly', () => {
    const { container } = render(<SocialButtons />);

    expect(container).toMatchSnapshot();
  });
});
