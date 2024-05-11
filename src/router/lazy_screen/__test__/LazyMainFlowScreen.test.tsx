import { render, screen } from '@testing-library/react';
import { LazySearchScreen } from '../LazyMainFlowScreen';

describe('LazyMainFlowScreen', () => {
  it('should render', async () => {
    const { container } = render(<LazySearchScreen />);

    expect(container).toMatchSnapshot();
  });
});
