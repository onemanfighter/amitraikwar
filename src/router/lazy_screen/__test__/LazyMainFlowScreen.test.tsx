import { render, screen } from '@testing-library/react';
import { LazySkillsScreen } from '../LazyMainFlowScreen';

describe('LazyMainFlowScreen', () => {
  it('should render', async () => {
    const { container } = render(<LazySkillsScreen />);

    expect(container).toMatchSnapshot();
  });
});
