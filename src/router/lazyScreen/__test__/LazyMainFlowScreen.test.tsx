import { render } from '@testing-library/react';
import { LazyMainScreen } from '../LazyMainFlowScreen';

jest.mock('react-social-icons', () => ({
  SocialIcon: ({ url }: { url: string }) => <div>{url}</div>,
}));

describe('LazyMainFlowScreen', () => {
  it('should render lazy about screen', async () => {
    const { container } = render(<LazyMainScreen />);

    expect(container).toMatchSnapshot();
  });
});
